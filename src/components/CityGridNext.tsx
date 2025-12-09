import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { City } from '@/lib/supabase-server';

interface CityGridNextProps {
  cities: City[];
  therapistCounts: Record<string, number>;
}

export function CityGridNext({ cities, therapistCounts }: CityGridNextProps) {
  if (cities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No cities found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {cities.map((city) => (
        <Link
          key={city.id}
          href={`/city/${city.slug}`}
          className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="relative w-full aspect-[4/3] sm:h-48 overflow-hidden">
            <Image
              src={city.image}
              alt={`${city.name} cityscape`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 drop-shadow-md">{city.name}</h3>
              {city.population > 0 && (
                <div className="flex items-center gap-1.5 sm:gap-2 text-blue-100/90 text-xs sm:text-sm font-medium">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{city.population.toLocaleString()} residents</span>
                </div>
              )}
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm text-slate-600">
                {therapistCounts[city.id] || 0} {(therapistCounts[city.id] || 0) === 1 ? 'chiropractor' : 'chiropractors'}
              </span>
              <span className="text-blue-600 font-medium text-xs sm:text-sm group-hover:translate-x-1 transition-transform whitespace-nowrap">
                View all →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
