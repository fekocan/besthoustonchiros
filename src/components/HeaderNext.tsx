import Link from 'next/link';
import { Heart, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Best Houstun Chiros Home"
          >
            <div className="bg-blue-600 rounded-xl p-2 group-hover:bg-blue-700 transition-colors">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-tight">Best Houstun Chiros</span>
              <span className="text-xs text-slate-600 hidden sm:block">Houston Chiropractic Directory</span>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            <Link
              href="/#cities"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Find a Chiropractor
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/list-your-practice"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              List Your Practice
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
