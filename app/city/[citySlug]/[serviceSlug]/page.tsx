import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { Breadcrumbs } from '@/components/BreadcrumbsNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FilteredTherapistList } from '@/components/FilteredTherapistList';
import { FilterProvider } from '@/components/CityHeroFilter';
import {
  getCityBySlug,
  getTherapistsByCityAndService,
  getAllCityServiceCombinations,
} from '@/lib/supabase-server';
import { MapPin, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

interface CityServicePageProps {
  params: Promise<{
    citySlug: string;
    serviceSlug: string;
  }>;
}

export async function generateStaticParams() {
  const combinations = await getAllCityServiceCombinations();
  return combinations;
}

function formatServiceName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function slugToServiceName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { citySlug, serviceSlug } = await params;
  const city = await getCityBySlug(citySlug);
  const serviceName = formatServiceName(serviceSlug);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `${serviceName} Therapists in ${city.name}, TX - HTX Therapists`,
    description: `Find licensed therapists specializing in ${serviceName} in ${city.name}, Texas. Connect with experienced mental health professionals in your area.`,
  };
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { citySlug, serviceSlug } = await params;
  const city = await getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const serviceName = slugToServiceName(serviceSlug);
  const therapists = await getTherapistsByCityAndService(city.id, serviceName);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://htxtherapists.com';

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: city.name, url: `${baseUrl}/city/${city.slug}` },
          { name: serviceName, url: `${baseUrl}/city/${city.slug}/${serviceSlug}` },
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
                  { label: city.name, href: `/city/${city.slug}` },
                  { label: serviceName },
                ]}
              />

              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="w-full md:flex-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
                    {serviceName} Therapists in {city.name}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 md:mb-6">
                    Connect with licensed {serviceName.toLowerCase()} specialists in your area
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600">
                    <div className="flex items-center text-sm sm:text-base">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-400" />
                      <span>{city.name}, Texas</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-400" />
                      <span>
                        {therapists.length} {therapists.length === 1 ? 'therapist' : 'therapists'} specializing in{' '}
                        {serviceName.toLowerCase()}
                      </span>
                    </div>
                  </div>
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
                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    No therapists found
                  </h2>
                  <p className="text-slate-600 mb-8">
                    We currently don't have any therapists specializing in {serviceName.toLowerCase()} in {city.name}.
                  </p>
                  <Link
                    href={`/city/${city.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    View All {city.name} Therapists
                  </Link>
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
