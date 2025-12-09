import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  BarChart3,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'List Your Practice | HTX Therapists',
  description: 'Grow your therapy practice with enhanced visibility, AI-powered referrals, and access to thousands of potential clients.',
};

export default function ListYourPracticePage() {
  const benefits = [
    {
      icon: TrendingUp,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'Enhanced SEO Visibility',
      description: 'Your practice gets indexed by search engines with brand mentions and backlinks, improving your local SEO rankings.',
    },
    {
      icon: MessageSquare,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      title: 'AI-Powered Referrals',
      description: 'Get recommended by ChatGPT and other AI assistants when users search for local mental health services.',
    },
    {
      icon: Users,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: '10,000+ Monthly Visitors',
      description: 'Gain exposure to thousands of monthly visitors actively searching for mental health professionals.',
    },
    {
      icon: Globe,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      title: 'Professional Profile Page',
      description: 'Showcase your practice with photos, specialties, contact information, and client reviews.',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      title: 'Analytics & Insights',
      description: 'Track profile views, contact clicks, and referral sources to understand client engagement.',
    },
    {
      icon: Award,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      title: 'Verified & Trusted',
      description: 'Build credibility with a verified badge and authentic client reviews on your profile.',
    },
  ];

  const features = [
    'Dedicated practice profile page with custom URL',
    'Photo gallery and image carousel for your practice',
    'Display specialties, services, and areas of expertise',
    'Contact information with click-to-call and email links',
    'Client reviews and ratings display',
    'SEO optimization with structured data markup',
    'Mobile-responsive design for all devices',
    'Priority placement in search results',
    'Monthly performance analytics reports',
    'Free profile updates and photo changes anytime',
    '24/7 online visibility',
    'Cancel anytime with no long-term commitment',
  ];

  const monthlyFeatures = [
    'All features included',
    'Cancel anytime',
    'No setup fees',
    'Update profile anytime',
  ];

  const annualFeatures = [
    'All features included',
    'Save over 47% vs monthly',
    'No setup fees',
    'Priority support',
    'Update profile anytime',
  ];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://htxtherapists.com';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'List Your Practice', url: `${baseUrl}/list-your-practice` },
        ]}
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-900 border-b border-slate-700 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop)',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-900/90"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-semibold text-blue-100">Limited Time: Save Up To $500</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Grow Your Therapy Practice
              </h1>

              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Connect with thousands of clients actively seeking mental health services in the Houston area
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why List Your Practice?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join Houston's fastest-growing therapist directory and experience measurable growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
                  >
                    <div className={`${benefit.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                      <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What's Included
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to grow your practice and reach more clients
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-slate-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the plan that works best for your practice
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Standard Plan */}
              <div className="bg-white rounded-2xl border-2 border-slate-300 p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Plan</h3>
                <p className="text-base text-slate-600 mb-8">Perfect for starting out</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-bold text-slate-900">$25</span>
                    <span className="text-lg text-slate-600 font-medium">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {monthlyFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-base text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://polar.sh/checkout/73ebc255-f4e7-49e2-86a2-9d9cde653e88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-lg text-center cursor-pointer"
                >
                  Subscribe to Standard
                </a>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all">
                <div className="absolute top-6 right-6 bg-yellow-400 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  POPULAR
                </div>

                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-base text-blue-100 mb-8">For established clinics</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-bold">$250</span>
                    <span className="text-lg text-blue-100 font-medium">/year</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {annualFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <span className="text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://polar.sh/checkout/1f3b0e9a-5247-4183-ab43-f6dde429465f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg text-center cursor-pointer"
                >
                  Subscribe to Premium
                </a>
              </div>
            </div>

            <p className="text-center text-slate-600 mt-12 text-base font-medium">
              All plans include a 30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-slate-900 font-medium mb-6 leading-relaxed">
                  "Listing my practice on HTX Therapists has been one of the best investments for my business.
                  I've received dozens of quality referrals and my practice is now fully booked."
                </p>
                <footer className="text-base text-slate-600 font-medium">
                  — Dr. Sarah Johnson, Licensed Therapist in Houston
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join hundreds of therapists who trust HTX Therapists to connect with new clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-all font-semibold text-lg shadow-xl"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                Browse Directory
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
