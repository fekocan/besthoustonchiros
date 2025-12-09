'use client';

import { TherapistCardNext } from './TherapistCardNext';
import { useTherapistFilter } from './CityHeroFilter';
import { Filter } from 'lucide-react';

interface FilteredTherapistListProps {
  cityName: string;
}

export function FilteredTherapistList({ cityName }: FilteredTherapistListProps) {
  const { filteredTherapists, clearFilters } = useTherapistFilter();

  if (filteredTherapists.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
        <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          No chiropractors match your filters
        </h3>
        <p className="text-slate-600 mb-4">
          Try adjusting your filter criteria to see more results.
        </p>
        <button
          onClick={clearFilters}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTherapists.map((therapist) => (
        <TherapistCardNext
          key={therapist.id}
          therapist={therapist}
          cityName={cityName}
        />
      ))}
    </div>
  );
}
