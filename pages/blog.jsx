import Head from 'next/head';
import { motion } from 'framer-motion';

// Comprehensive blog post data
const posts = [
  {
    title: '5 Essential Safety Tips for Solo Travelers',
    excerpt: 'Traveling alone can be an incredibly empowering experience. Here are some tips to ensure you stay safe on your adventures.',
    date: 'June 10, 2025',
    category: 'Travel Safety',
    readTime: '5 min read',
    image: '/images/blog/travel-safety.jpg'
  },
  {
    title: 'How Geofencing Can Provide Peace of Mind',
    excerpt: 'Learn how setting up virtual boundaries can be a game-changer for your family\'s safety and daily routines.',
    date: 'May 28, 2025',
    category: 'Technology',
    readTime: '4 min read',
    image: '/images/blog/geofencing.jpg'
  },
  {
    title: 'Understanding Emergency Response Features',
    excerpt: 'A comprehensive guide to using emergency response features effectively in critical situations.',
    date: 'May 15, 2025',
    category: 'Safety Guide',
    readTime: '6 min read',
    image: '/images/blog/emergency-response.jpg'
  },
  {
    title: 'The Power of Community in Personal Safety',
    excerpt: 'How building a strong support network can enhance your personal safety and provide peace of mind.',
    date: 'May 1, 2025',
    category: 'Community',
    readTime: '5 min read',
    image: '/images/blog/community-safety.jpg'
  }
];

// Safety resources categories
const resources = [
  {
    title: 'Emergency Contacts',
    items: [
      'Local Emergency Services',
      'Family Emergency Contacts',
      'Medical Emergency Numbers',
      'Poison Control Center'
    ]
  },
  {
    title: 'Safety Checklists',
    items: [
      'Home Safety Checklist',
      'Travel Safety Checklist',
      'Personal Safety Checklist',
      'Emergency Kit Checklist'
    ]
  },
  {
    title: 'Safety Guides',
    items: [
      'Personal Safety Tips',
      'Digital Safety Guide',
      'Travel Safety Guide',
      'Emergency Response Guide'
    ]
  }
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog & Resources - SaviHer</title>
        <meta name="description" content="Stay informed with our latest articles, tips, and stories about personal safety and technology." />
      </Head>

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            Safety Resources & Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto px-4"
          >
            Knowledge is power. Stay informed with our latest articles, tips, and stories.
          </motion.p>
        </div>
      </div>

      {/* Safety Resources Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Essential Safety Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-600">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Latest Articles</h2>
          <div className="grid gap-6 sm:gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-6 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-primary-600">{post.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{post.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{post.excerpt}</p>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm sm:text-base"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 