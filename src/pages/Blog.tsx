import React from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Heart, 
  Trophy, 
  Code, 
  ExternalLink,
  Github
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import hymnalImage from '../assets/images/cameroon_hymnal_story_1780574996382.png';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  featured?: boolean;
  githubUrl?: string;
  downloadsBadge?: string;
  tags?: string[];
  content: React.ReactNode;
}

const Blog = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  const posts: BlogPost[] = [
    {
      id: 5,
      title: 'From Killing Time to 10K Downloads: The Cameroon Hymnal Story',
      excerpt: 'How a Saturday morning project to bypass login screens turned into an open-source community sensation with over 10,000 downloads.',
      date: 'June 04, 2026',
      author: 'Marietta A.',
      category: 'Open Source',
      image: hymnalImage,
      featured: true,
      githubUrl: 'https://github.com/marietta-a/hymnal',
      downloadsBadge: '10,000+ Downloads',
      tags: ['Flutter', 'Open Source', 'Community App', 'Vibe Coding'],
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="font-semibold text-xl text-gray-900 border-l-4 border-blue-600 pl-4 py-1">
            What started as a simple weekend project to kill time ended up becoming a pro bono app with over 10,000 downloads on the Google Play Store.
          </p>
          <p>
            It was a Saturday morning, and I had gone to work (yes, I do work on Saturdays—thanks to the unique sociopolitical realities of the town I live in), but honestly, I had zero motivation to do anything work‑related. Then, a spark hit me.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 my-8">
            <h4 className="font-bold text-blue-900 mb-2 text-lg">The Spark of Frustration</h4>
            <p className="text-blue-800 text-base">
              As a Catholic Christian in Cameroon, I was tired of the fact that there was only one Cameroon Hymnal app on the Play Store. And to make matters worse, it required authentication before use. I mean, it’s a hymnal—why should I have to log in every single time just to sing a song of praise?
            </p>
          </div>

          <p>
            With that frustration bubbling, I decided to take things into my own hands and kill time by building my own Cameroon Hymnal. To be honest, it was pure <span className="font-bold text-gray-900">vibe coding</span>. I already had the complete layout and structure in my head, I’m highly comfortable with programming, and modern AI tools were there to make things far simpler and faster.
          </p>

          <p className="bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 italic my-6 font-medium text-gray-800">
            "In less than six hours, the application was fully built, compiled, and ready. Hurray!"
          </p>

          <p>
            But then came the inevitable question that every solo developer faces: <span className="italic">“Would anyone else care about it?”</span> Well, I cared—because it solved my immediate problem of accessing lyrics instantly in church. Deep down, I also hoped it would matter to others too, since I was building it with my local community in mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col items-center text-center shadow-xs">
              <div className="p-3 bg-red-100 text-red-600 rounded-full mb-4">
                <Heart size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-1">Built For Community</h5>
              <p className="text-sm text-gray-600">Designed to serve Cameroon Christians with seamless offline hymns.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-105 flex flex-col items-center text-center shadow-xs">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                <Trophy size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-1">Pro Bono Project</h5>
              <p className="text-sm text-gray-600">A completely free app with 0 ads, 0 logins, and 100% utility.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex flex-col items-center text-center shadow-xs">
              <div className="p-3 bg-green-100 text-green-600 rounded-full mb-4">
                <Code size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-1">Open Source Code</h5>
              <p className="text-sm text-gray-600">Fully transparent, modular codebase available on GitHub for Flutter learners.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gaining Real-World Traction 🚀</h3>
          <p>
            By November 2025, I officially published the app to the Google Play Store. To my surprise, it started gaining organic traction incredibly fast. By January 2026, it had already crossed <span className="font-bold text-gray-900">5,000 downloads</span> without any paid advertising.
          </p>
          <p>
            Today, the Cameroon Hymnal app has surpassed <span className="text-blue-600 font-extrabold text-xl">10,000+ active downloads</span> and has repeatedly featured among the top 50 apps on the Play Store for several weeks and months.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 my-10 italic text-xl text-gray-500 font-serif">
            "As a software developer, there’s a unique joy in building something that meets the needs of your local community. It doesn’t matter if it’s pro bono—the sense of fulfillment is completely real."
          </blockquote>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Giving Back to the Community</h3>
          <p>
            And because I believe firmly in sharing knowledge and mentoring upcoming engineers, the entire source code of the Cameroon Hymnal has been open-sourced for anyone getting started with Flutter and mobile app development. You can review the structure, learn architecture, or even build your own variant!
          </p>

          <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-white shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                <Github size={20} className="text-gray-300" />
                Inspect the Source Code
              </h4>
              <p className="text-gray-300 text-sm">
                Explore the Flutter codebase, clone the repo, and start contributing.
              </p>
            </div>
            <a 
              href="https://github.com/marietta-a/hymnal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              marietta-a / hymnal
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>

          <p className="text-gray-500 text-sm italic mt-12 pt-6 border-t border-gray-100">
            If you’ve got an exciting idea in mind, it doesn’t matter if it doesn’t seem like a world-changing deal yet—just get started. It might turn out to be the exactly next big milestone you have been looking for!
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: 'The Future of Sustainable Construction in Cameroon',
      excerpt: 'Exploring how eco-friendly materials and energy-efficient designs are transforming the local building landscape.',
      date: 'March 15, 2026',
      author: 'Engr. Nfor',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Cameroon's construction sector is undergoing a massive, silent transition. Builders, developers, and engineers are realizing that import-heavy reliance and concrete-only designs are neither climate-friendly nor economically sustainable.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Compressed Earth Bricks (CEBs)</h3>
          <p>
            One of the biggest stars of local sustainable architecture is the Compressed Earth Brick (CEB). By utilizing local red volcanic clay or soil stabilized with a tiny percentage of cement, builders are fashioning gorgeous custom building blocks. They offer high thermal mass, meaning they absorb heat during the day and release it at night, keeping interiors clean, ventilated, and naturally cool.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Harnessing Natural Ventilation</h3>
          <p>
            At HTS-E, our projects prioritize generous cantilevers, solar roof venting, and clever window orientations that capture prevailing winds. This reduces the requirement for active air-conditioning on hot humid days. Sustainable engineering isn't just about saving materials—it is about designing structures that work harmoniously with nature.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: '5 Essential Tips for Home Builders in Bamenda',
      excerpt: 'A comprehensive guide on what to consider before starting your residential project in the North West region.',
      date: 'March 10, 2026',
      author: 'Arch. Tabi',
      category: 'Guides',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Embarking on building a home in Bamenda is an exciting journey, but the region’s complex geography, geology, and seasonal patterns demand thoughtful planning. Here are five of the most critical recommendations from our on-ground civil engineers.
          </p>
          <ol className="list-decimal pl-6 space-y-4 my-6">
            <li>
              <strong>Analyze the Soil Composition:</strong> Bamenda’s volcanic soils can vary from extremely fertile clays to loose volcanic sand. Ensure your architect or structural engineering partner executes soil checks beforehand.
            </li>
            <li>
              <strong>Prioritize Weatherproofing and Overhangs:</strong> Given the heavy downpours during the wet season, deep roof overhangs and robust guttering systems are non-negotiable to protect paintwork and foundations from dampness.
            </li>
            <li>
              <strong>Integrate Sourced Stone:</strong> Bamenda boasts high-quality natural stone quarries. Utilizing this stone for facade accents or foundation retaining walls introduces local beauty and saves long-term material transit costs.
            </li>
            <li>
              <strong>Verify Ground Retaining Structures:</strong> When building on Bamenda's iconic slopes (e.g. Up Station or surrounding hills), custom structural retainers and slope drainage planning will secure your property from hazards.
            </li>
            <li>
              <strong>Acquire Official Building Permits Early:</strong> Ensure you complete structural blueprints and acquire municipal clearance. Proper authorization keeps your investment highly secure and legally sound.
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 3,
      title: 'Modernizing Public Infrastructure: Challenges and Solutions',
      excerpt: 'Discussing the technical hurdles in large-scale public works and how HTS-E overcomes them with modern engineering.',
      date: 'March 05, 2026',
      author: 'Engr. Fru',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Modernizing civil infrastructure in our urban spaces involves navigating several challenging real-world variables, including rapid population growth, dense structural footprints, and severe rainy periods.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6">The Storm Water Drainage Dilemma</h3>
          <p>
            Tackling municipal flooding requires far more than laying down wider concrete pipes. Effective drainage systems must consider topography, seasonal discharge limits, and proper sand trap integrations. Our teams model runoff patterns using modern digital software to construct channels that remain resilient under peak conditions.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Value-Engineering & Durable Roads</h3>
          <p>
            By designing flexible asphalt pavements alongside robust sub-grades, HTS-E establishes safe community access roads that withstand intense trucks and continuous rainfall. Sustainable infrastructure keeps the heart of local trade pumping.
          </p>
        </div>
      )
    }
  ];

  // Look up selected article index if ID is provided in route
  const activePost = id ? posts.find(p => p.id === parseInt(id)) : null;

  if (activePost) {
    return (
      <div className="bg-gray-50 min-h-screen pb-24">
        {/* Dynamic header for detailed view */}
        <div className="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src={activePost.image} 
              alt={activePost.title}
              className="w-full h-full object-cover filter blur-xs"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white rounded-full px-5 py-2 text-sm font-bold transition-all backdrop-blur-md mb-8 border border-white/10"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Articles
            </Link>
            <div className="flex items-center justify-center space-x-3 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">
              <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">
                {activePost.category}
              </span>
              {activePost.downloadsBadge && (
                <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full border border-green-500/20 flex items-center gap-1">
                  <Trophy size={12} />
                  {activePost.downloadsBadge}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
              {activePost.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-blue-400" />
                {activePost.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2 text-blue-400" />
                {activePost.author}
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-12 shadow-md border border-gray-100"
          >
            {/* Main Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg max-h-[500px]">
              <img 
                src={activePost.image} 
                alt={activePost.title} 
                className="w-full h-full object-cover max-h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Display Tags */}
            {activePost.tags && (
              <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-6">
                {activePost.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 border border-gray-200">
                    <BookOpen size={12} className="text-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content Body */}
            <div className="prose prose-lg max-w-none">
              {activePost.content}
            </div>

            {/* Back Button Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 font-extrabold hover:underline"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Blog list
              </Link>
              {activePost.githubUrl && (
                <a 
                  href={activePost.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold py-2 px-4 rounded-xl text-sm transition-all border border-gray-300"
                >
                  <Github size={16} className="mr-2" />
                  GitHub Repository
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Listing View
  return (
    <div>
      <PageHeader 
        title={t('nav.blog')} 
        subtitle="Insights, Stories, and Professional Project Logs from HTS-E Engineers"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Blog Feed */}
            <div className="lg:col-span-2 space-y-16">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative h-96 overflow-hidden rounded-3xl mb-8 shadow-lg bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border border-blue-500">
                      {post.category}
                    </div>
                    {post.downloadsBadge && (
                      <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border border-green-500 flex items-center gap-1">
                        <Trophy size={12} />
                        {post.downloadsBadge}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4 font-medium">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2 text-blue-600" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 font-extrabold hover:underline group"
                    >
                      Read Full Article
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {post.githubUrl && (
                      <a 
                        href={post.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-gray-500 hover:text-gray-900 font-bold bg-gray-150 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors"
                      >
                        <Github size={12} className="mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              {/* Featured Post Card in Sidebar */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 shadow-xs">
                <span className="inline-flex items-center gap-1 text-xs font-black text-blue-600 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  <Trophy size={12} />
                  Featured Story
                </span>
                <h4 className="font-bold text-xl text-gray-900 mb-2 leading-snug">Cameroon Hymnal App</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  How a pro bono coding project gained 10K+ downloads to help local Catholic communities sing freely.
                </p>
                <Link 
                  to="/blog/5" 
                  className="inline-flex items-center text-blue-600 text-sm font-extrabold hover:underline"
                >
                  Read how it was made
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Categories</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Construction', count: 12 },
                    { name: 'Engineering', count: 8 },
                    { name: 'Innovation', count: 5 },
                    { name: 'Open Source', count: 1 },
                    { name: 'Infrastructure', count: 4 }
                  ].map((cat) => (
                    <div key={cat.name} className="flex justify-between items-center text-gray-700 font-medium">
                      <span>{cat.name}</span>
                      <span className="bg-white px-2.5 py-1 rounded-lg text-xs text-gray-400 border border-gray-200 font-mono font-bold">
                        {cat.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-xl">
                <h4 className="font-bold text-xl mb-4">Stay Updated</h4>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Get the latest stories, news, and engineering logs delivered straight to your inbox.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-5 py-3 rounded-xl bg-blue-800 border border-blue-700 focus:outline-none focus:border-blue-400 text-sm"
                    required
                  />
                  <button className="w-full bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
