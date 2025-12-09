import { Metadata } from 'next';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { Hero } from '@/components/HeroNext';
import { CityGridNext } from '@/components/CityGridNext';
import { Activity, ShieldCheck, Smile, Zap, UserPlus, HeartPulse } from 'lucide-react';
import { getCities, getTherapists } from '@/lib/supabase-server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'HTX Therapists - Find Trusted Mental Health Professionals',
  description: 'Find licensed therapists and mental health professionals across the Houston metro area. Quality care for anxiety, depression, couples therapy, and more.',
};

export default async function HomePage() {
  const [allCities, allTherapists] = await Promise.all([
    getCities(),
    getTherapists()
  ]);

  const topCities = allCities.slice(0, 12);

  const therapistCounts = allTherapists.reduce((acc, therapist) => {
    acc[therapist.city_id] = (acc[therapist.city_id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const services = [
    {
      icon: Activity,
      title: 'Back Pain Relief',
      description: 'Effective treatments for chronic lower and upper back pain, sciatica, and spinal misalignment issues.',
    },
    {
      icon: UserPlus,
      title: 'Neck & Shoulder Pain',
      description: 'Relief from tech neck, whiplash, stiff neck, and shoulder tension through targeted adjustments.',
    },
    {
      icon: ShieldCheck,
      title: 'Sports Injuries',
      description: 'Specialized care for athletes recovering from sprains, strains, and performance-related injuries.',
    },
    {
      icon: Zap,
      title: 'Headache & Migraine',
      description: 'Natural relief from tension headaches and migraines by addressing spinal alignment and nerve pressure.',
    },
    {
      icon: Smile,
      title: 'Prenatal Chiropractic',
      description: 'Gentle care for expectant mothers to relieve back pain, sciatica, and improve pelvic alignment.',
    },
    {
      icon: HeartPulse,
      title: 'Wellness Care',
      description: 'Preventative spinal care to maintain optimal health, posture, and nervous system function.',
    },
  ];

  const benefits = [
    {
      title: 'Licensed Chiropractors',
      description: 'All professionals in our directory are licensed, verified chiropractors with proven expertise.',
    },
    {
      title: 'Diverse Techniques',
      description: 'Find chiropractors specializing in Diversified, Activator, Gonstead, Thompson, and other proven methods.',
    },
    {
      title: 'Multilingual Support',
      description: 'Connect with chiropractors who speak English, Spanish, Mandarin, Vietnamese, and other languages.',
    },
    {
      title: 'Convenient Locations',
      description: 'Access quality chiropractic care across Houston, Sugar Land, The Woodlands, Katy, and surrounding communities.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section id="cities" className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Find Chiropractors in Your Area
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Browse our directory by city to discover licensed chiropractors in your community.
                From Houston to surrounding suburbs, quality care is closer than you think.
              </p>
            </div>

            <CityGridNext cities={topCities} therapistCounts={therapistCounts} />
          </div>
        </section>

        <section id="services" className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Comprehensive Chiropractic Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our directory connects you with experienced chiropractors offering a wide range of services
                to support your spinal health and well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Our Directory
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We make it easy to find the right chiropractor for your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Spinal Health?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Taking the first step toward pain-free living is important. Browse our directory
              to find a licensed chiropractor who can support you on your path to wellness.
            </p>
            <a
              href="#cities"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg shadow-xl"
            >
              Find a Chiropractor Near You
            </a>
          </div>
        </section>

        <section id="about" className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              About Chiropractic Care in Houston
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Comprehensive Chiropractic Care Across the Houston Metro Area
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Houston and the surrounding communities offer access to some of the finest chiropractic professionals
                  in Texas. Whether you're seeking relief for back pain, neck pain, sports injuries, or maintenance care,
                  our directory connects you with licensed chiropractors who can provide the specialized care you need.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Chiropractic care is an investment in your physical well-being. Our listed chiropractors use evidence-based
                  approaches including manual adjustments, instrument-assisted techniques, decompression therapy,
                  and rehabilitative exercises to help you achieve your health goals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Serving Communities Throughout Greater Houston
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our directory includes chiropractors serving Houston, Sugar Land, The Woodlands,
                  Pearland, League City, Katy, Spring, Missouri City, Pasadena, Baytown, Conroe,
                  and surrounding areas. No matter where you live in the Houston metro area, quality chiropractic
                  care is accessible and available.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Many of our listed chiropractors offer flexible scheduling, accept various insurance plans, and provide
                  services in multiple languages to better serve Houston's diverse population. Start your search today
                  to find the right chiropractor for your unique needs and circumstances.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  What to Expect from Chiropractic Care
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your first visit typically involves a comprehensive consultation and examination to determine the root cause
                  of your issue. This may include posture analysis, range of motion testing, and sometimes X-rays. Based on
                  these findings, your chiropractor will develop a personalized treatment plan.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Treatment often involves spinal adjustments to restore proper alignment and nervous system function.
                  Many chiropractors also incorporate other therapies such as massage, electric stimulation, ultrasound,
                  and nutritional counseling to support your overall healing and wellness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
