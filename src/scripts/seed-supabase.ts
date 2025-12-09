
import { createClient } from '@supabase/supabase-js';
import { MOCK_CITIES, MOCK_THERAPISTS } from '../lib/mock-data';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seeddatabase() {
    console.log('Starting data upload...');

    // 1. Upload Cities
    console.log(`Uploading ${MOCK_CITIES.length} cities...`);
    // Remove ID from cities to let Supabase generate UUIDs
    const citiesToUpload = MOCK_CITIES.map(({ id, ...rest }) => rest);

    const { error: cityError } = await supabase
        .from('cities')
        .upsert(citiesToUpload, { onConflict: 'slug' });

    if (cityError) {
        console.error('Error uploading cities:', cityError);
        return;
    }
    console.log('Cities uploaded successfully.');

    // 2. Upload Therapists (Chiropractors)
    // We need to map city_ids correctly if we were using generated UUIDs, 
    // but MOCK data has hardcoded IDs ('1', '2'...) and the schema uses UUID default.
    // HOWEVER, our mock data IDs are just strings. 
    // If the schema enforces UUID for ID, we might have issues if we try to insert "1" as UUID.
    // 
    // Let's check the schema I gave: "id uuid default uuid_generate_v4() primary key"
    // Yes, "1" is not a valid UUID.
    // 
    // Strategy:
    // - Let Supabase generate new UUIDs.
    // - We need to look up the city UUIDs after inserting cities to link chiropractors correctly?
    // - OR: Since we are uploading fresh, we can generate UUIDs here in the script, or just let Supabase handle it.
    // 
    // Problem: Therapists link to cities via `city_id`. MOCK_THERAPISTS have `city_id: "1"`.
    // MOCK_CITIES have `id: "1"`.
    // 
    // Solution:
    // 1. Insert Cities, let Supabase generate IDs.
    // 2. Fetch back Cities to get their new real UUIDs. Map "Houston" -> UUID.
    // 3. Update Therapist objects with the new `city_id` UUIDs (matching by city name or old ID).
    // 4. Insert Therapists.

    // Re-fetching cities to get real UUIDs
    const { data: realCities, error: fetchError } = await supabase
        .from('cities')
        .select('id, name, slug');

    if (fetchError || !realCities) {
        console.error('Error fetching real cities:', fetchError);
        return;
    }

    const cityMap = new Map(); // Old ID -> New UUID
    // We can match by Name or Slug since those are consistent.
    realCities.forEach(rc => {
        const mockCity = MOCK_CITIES.find(mc => mc.slug === rc.slug);
        if (mockCity) {
            cityMap.set(mockCity.id, rc.id);
        }
    });

    console.log(`Uploading ${MOCK_THERAPISTS.length} chiropractors...`);

    // Prepare therapists with new City IDs and remove 'id' to let Supabase generate UUIDs
    const therapistsToUpload = MOCK_THERAPISTS.map(t => {
        const { id, ...rest } = t; // Remove ID
        const newCityId = cityMap.get(t.city_id);

        if (!newCityId) {
            console.warn(`Warning: Could not find real city ID for therapist ${t.first_name} ${t.last_name} (old city_id: ${t.city_id})`);
        }

        return {
            ...rest,
            city_id: newCityId, // Use new UUID
            // Ensure arrays are formatted for Postgres if needed, generally JS arrays work with supabase-js
        };
    });

    const { error: therapistError } = await supabase
        .from('therapists')
        .upsert(therapistsToUpload, { onConflict: 'slug' });

    if (therapistError) {
        console.error('Error uploading therapists:', therapistError);
        return;
    }

    console.log('Chiropractors uploaded successfully!');
}

seeddatabase();
