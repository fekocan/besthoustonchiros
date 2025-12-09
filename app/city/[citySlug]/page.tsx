import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { Breadcrumbs } from '@/components/BreadcrumbsNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FilterProvider, CityHeroFilter } from '@/components/CityHeroFilter';
import { FilteredTherapistList } from '@/components/FilteredTherapistList';
import { getCityBySlug, getTherapistsByCity, getCities } from '@/lib/supabase-server';
import { MapPin, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

interface CityPageProps {
  params: Promise<{
    citySlug: string;
  }>;
}

export async function generateStaticParams() {
  const cities = await getCities();
  return cities.map((city) => ({
    citySlug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = await getCityBySlug(citySlug);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Chiropractors in ${city.name}, TX - Best Houstun Chiros`,
    description: `Find licensed chiropractors in ${city.name}, Texas. Browse ${city.name} area chiropractic clinics specializing in back pain, neck pain, sciatica, and more.`,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const city = await getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const therapists = await getTherapistsByCity(city.id);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://besthoustunchiros.com';

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: city.name, url: `${baseUrl}/city/${city.slug}` },
        ]}
      />
      <Header />

      <main className="flex-grow bg-slate-50">
        <FilterProvider therapists={therapists}>
          <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <Breadcrumbs
                items={[
                  { label: 'Home', href: '/' },
                  { label: city.name },
                ]}
              />

              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="w-full md:flex-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
                    Chiropractors in {city.name}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 md:mb-6">
                    Connect with licensed chiropractors in your area
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 mb-4 md:mb-6">
                    <div className="flex items-center text-sm sm:text-base">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-400" />
                      <span>{city.name}, Texas</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-400" />
                      <span>
                        {therapists.length} {therapists.length === 1 ? 'chiropractor' : 'chiropractors'}
                      </span>
                    </div>
                  </div>
                  {therapists.length > 0 && <CityHeroFilter citySlug={city.slug} />}
                </div>
                {/* Hide image on mobile, show on md and up */}
                <div className="hidden md:block md:w-2/5 md:flex-shrink-0 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={city.image}
                    alt={`${city.name}, Texas`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {therapists.length > 0 ? (
            <section className="py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FilteredTherapistList cityName={city.name} />
              </div>
            </section>
          ) : (
            <section className="py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
                  <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    No chiropractors listed yet
                  </h3>
                  <p className="text-slate-600">
                    Check back soon for chiropractors in {city.name}.
                  </p>
                </div>
              </div>
            </section>
          )}
        </FilterProvider>
      </main>

      <Footer />
    </div>
  );
}
