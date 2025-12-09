import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

interface Business {
  id: string;
  info: {
    name: string;
    city: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { businesses } = await request.json();

    if (!Array.isArray(businesses)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const businessIds = businesses.map((b: Business) => b.id);

    const { data: existingTherapists, error } = await supabase
      .from('therapists')
      .select('google_business_id, slug')
      .in('google_business_id', businessIds);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    const duplicates: Record<string, string> = {};
    existingTherapists?.forEach((therapist) => {
      if (therapist.google_business_id) {
        duplicates[therapist.google_business_id] = therapist.slug;
      }
    });

    return NextResponse.json({ duplicates });
  } catch (error) {
    console.error('Error checking duplicates:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
