
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Calendar, User, Tag } from "lucide-react";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "How to Improve Your DStv Signal During Bad Weather",
      excerpt: "Bad weather can affect your DStv signal quality. Learn practical tips to minimize disruptions and maintain a clear picture even during storms.",
      imageUrl: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      date: "August 15, 2023",
      author: "John Smith",
      category: "Tips & Tricks",
    },
    {
      id: "2",
      title: "DStv Explora vs. Single View: Which Is Right for You?",
      excerpt: "Choosing the right decoder is essential for your viewing experience. We compare DStv Explora and Single View decoders to help you make an informed decision.",
      imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      date: "July 28, 2023",
      author: "Sarah Johnson",
      category: "Product Guides",
    },
    {
      id: "3",
      title: "The Ultimate Guide to DStv Extra View Setup",
      excerpt: "Want to watch different channels on multiple TVs with one subscription? Learn everything you need to know about setting up DStv Extra View.",
      imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      date: "July 10, 2023",
      author: "David Nkosi",
      category: "Installation",
    },
    {
      id: "4",
      title: "5 Signs Your Satellite Dish Needs Realignment",
      excerpt: "Is your DStv picture quality suffering? Your satellite dish might need realignment. Learn the telltale signs and when to call a professional.",
      imageUrl: "https://images.unsplash.com/photo-1625496235025-a5d3a31b4d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "June 22, 2023",
      author: "Michelle van der Merwe",
      category: "Maintenance",
    },
    {
      id: "5",
      title: "TV Mounting 101: Height, Position, and Cable Management",
      excerpt: "Planning to mount your TV? Get expert advice on optimal height, viewing angles, and how to keep your installation clean with proper cable management.",
      imageUrl: "https://images.unsplash.com/photo-1588854337116-d1ffac276f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "June 5, 2023",
      author: "Thomas Banda",
      category: "Installation",
    },
    {
      id: "6",
      title: "Understanding DStv Packages: Which One Is Right for You?",
      excerpt: "With various DStv packages available, choosing the right one can be confusing. We break down each package to help you find the perfect match for your viewing preferences.",
      imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 19, 2023",
      author: "Rebecca Mthembu",
      category: "Product Guides",
    },
  ];

  const categories = [
    "Installation",
    "Maintenance",
    "Troubleshooting",
    "Product Guides",
    "Tips & Tricks",
    "Industry News",
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>Our Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              DStv Installation Insights
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Expert tips, guides, and news on DStv installation and maintenance.
            </p>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8fafc" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8fafc" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1601944179066-29b8f7e34d3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                      alt="The Complete Guide to DStv Installation" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ti-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>September 5, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>Admin</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                    The Complete Guide to DStv Installation: Everything You Need to Know
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Planning to install DStv in your home? This comprehensive guide covers everything from choosing the right package and equipment to installation best practices and troubleshooting tips. Learn what to expect during professional installation and how to get the most out of your DStv experience.
                  </p>
                  <Link
                    to="/blog/featured"
                    className="inline-flex items-center px-5 py-2.5 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
                  >
                    Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-ti-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Load More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-900">
                  Search
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors pr-12"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-900">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-ti-blue-500" />
                      <a href="#" className="text-gray-600 hover:text-ti-blue-600 transition-colors">
                        {category}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-900">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 line-clamp-2 text-sm">
                          <a href="#" className="hover:text-ti-blue-600 transition-colors">
                            {post.title}
                          </a>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Need DStv Assistance?
                </h3>
                <p className="text-ti-blue-100 mb-6">
                  Our expert technicians are ready to help with installation, repairs, and troubleshooting.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                Stay Updated with DStv Tips & News
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for expert tips, industry news, and exclusive offers.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors"
                  />
                  <button className="px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
