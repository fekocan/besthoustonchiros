
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/HeaderNext';
import { Footer } from '@/components/FooterNext';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getPosts } from '@/lib/supabase-server';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Chiropractic Health Blog | Best Houstun Chiros',
    description: 'Expert advice, tips, and insights on chiropractic care, back pain relief, and overall wellness.',
};

export const revalidate = 3600;

export default async function BlogIndexPage() {
    const posts = await getPosts();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://besthoustunchiros.com';

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: baseUrl },
                    { name: 'Blog', url: `${baseUrl}/blog` },
                ]}
            />
            <Header />

            <main className="flex-grow">
                {/* Hero */}
                <div className="bg-slate-900 text-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Health & Wellness Blog
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Latest insights, treatments, and tips from Houston's top chiropractors.
                        </p>
                    </div>
                </div>

                {/* Post Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-slate-600">No articles found. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
                                >
                                    <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                                        {post.cover_image ? (
                                            <img
                                                src={post.cover_image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(post.published_at).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-3.5 h-3.5" />
                                                {post.author_name}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1 text-slate-600 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
