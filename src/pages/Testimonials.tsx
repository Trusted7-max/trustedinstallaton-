import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Phone, Quote } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      location: "Cape Town",
      rating: 5,
      text: "The technician was professional and efficient. My DStv is working perfectly now, and he even gave me some tips on optimizing my settings. I couldn't be happier with the service!",
      date: "2 weeks ago",
    },
    {
      name: "Sarah Johnson",
      location: "Johannesburg",
      rating: 5,
      text: "Called in the morning for an emergency fix, and they were at my door by afternoon. Fast service and reasonable prices. Will definitely use them again and recommend to friends and family.",
      date: "1 month ago",
    },
    {
      name: "David Nkosi",
      location: "Durban",
      rating: 4,
      text: "Very knowledgeable team that fixed my signal issues in no time. They were respectful of my home and cleaned up afterward. Great service at a fair price.",
      date: "3 weeks ago",
    },
    {
      name: "Michelle van der Merwe",
      location: "Pretoria",
      rating: 5,
      text: "I had my entire entertainment system set up by Trusted Dstv Installers, including TV mounting and DStv. The result is amazing, and their attention to detail is impressive. Highly recommend!",
      date: "2 months ago",
    },
    {
      name: "Thomas Banda",
      location: "Bloemfontein",
      rating: 5,
      text: "After struggling with poor signal for months, I finally called Trusted Dstv Installers. They identified and fixed the issue in under an hour. Should have called them sooner!",
      date: "1 month ago",
    },
    {
      name: "Rebecca Mthembu",
      location: "Port Elizabeth",
      rating: 5,
      text: "The team installed a DStv system in our new home. They were punctual, professional, and took the time to explain how everything works. Excellent service from start to finish.",
      date: "3 weeks ago",
    },
    {
      name: "James Wilson",
      location: "East London",
      rating: 4,
      text: "Had my dish realigned and extra points installed. The technician was friendly and clearly experienced. Everything works perfectly now, and the pricing was transparent with no surprises.",
      date: "1 month ago",
    },
    {
      name: "Linda Naidoo",
      location: "Durban",
      rating: 5,
      text: "I've used Trusted Dstv Installers three times now for different properties, and they never disappoint. Consistent quality service and excellent after-sales support.",
      date: "2 months ago",
    },
    {
      name: "Peter Molefe",
      location: "Johannesburg",
      rating: 5,
      text: "The technician went above and beyond to fix a complicated signal issue that two other companies couldn't resolve. Patient, thorough, and professional. Worth every cent!",
      date: "3 weeks ago",
    },
  ];

  const testimonialVideos = [
    {
      name: "Michael Roberts",
      location: "Cape Town",
      thumbnail: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      videoUrl: "#",
    },
    {
      name: "Sophia Adams",
      location: "Johannesburg",
      thumbnail: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "#",
    },
  ];

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>Customer Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              What Our Customers Say
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Read testimonials from our satisfied customers across South Africa.
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

      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white p-8 flex items-center">
                <div>
                  <div className="mb-6">
                    <Quote className="h-14 w-14 text-white/30" />
                  </div>
                  <div className="flex mb-4">
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    Daniel & Emma Hassan
                  </h3>
                  <p className="text-ti-blue-100">Cape Town Homeowners</p>
                </div>
              </div>
              <div className="md:w-3/5 p-8">
                <p className="text-xl text-gray-600 italic mb-6">
                  "We recently moved to a new home and needed a complete DStv installation. Trusted Dstv Installers was recommended by a friend, and they exceeded our expectations! The technician arrived on time, discussed all options with us, and completed the installation quickly and professionally. We now have perfect reception in multiple rooms, and the TV mounting looks fantastic. We couldn't be happier with the service."
                </p>
                <p className="text-gray-500">
                  Services: DStv Installation, Multi-room Setup, TV Mounting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Video Testimonials</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Hear From Our Customers
            </h2>
            <p className="text-lg text-gray-600">
              Watch video testimonials from satisfied customers who've experienced our professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative group cursor-pointer">
                  <img 
                    src={video.thumbnail}
                    alt={`${video.name} testimonial`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-ti-blue-600 transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{video.name}</h3>
                  <p className="text-gray-500 mb-4">{video.location}</p>
                  <a href={video.videoUrl} className="inline-flex items-center text-ti-blue-600 font-medium hover:text-ti-blue-800 transition-colors">
                    Watch Testimonial <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              More Happy Customers
            </h2>
            <p className="text-lg text-gray-600">
              Read what our customers have to say about our DStv installation and repair services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stats */}
      <section className="py-20 bg-ti-blue-900 text-white relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>Our Impact</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Why Customers Choose Us
            </h2>
            <p className="text-xl text-ti-blue-100">
              We're proud of the trust our customers place in our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">3000+</div>
              <p className="text-ti-blue-100">Installations Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">98%</div>
              <p className="text-ti-blue-100">Customer Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">24hr</div>
              <p className="text-ti-blue-100">Average Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">7</div>
              <p className="text-ti-blue-100">Provinces Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                Join Our Satisfied Customers
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the professional DStv installation service that has earned us these glowing testimonials. Contact us today for your DStv needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
                >
                  Get A Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+27834628367"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call +27 83 462 8367
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
