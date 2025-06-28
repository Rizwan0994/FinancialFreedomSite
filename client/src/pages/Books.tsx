import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { FaDownload, FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaBook, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function Books() {
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const books = [
    {
      id: 1,
      title: "Freedom At Last!: How to Overcome What's Holding You Back from Getting What You Want!",
      author: "John S. Smith Jr. RN",
      coverImage: "https://m.media-amazon.com/images/I/81K90sx+cnL._SY425_.jpg",
      rating: 4.6,
      reviewCount: 3,
      description: "JOHN SAYE SMITH JR., RN, BSN is the founder of Prestige Healthcare Resources (PHR) DBA Personal Results, an in-home care, case management, and staffing agency focusing on enhancing the lifestyle of nurses and other professionals. Mr. Smith has been invited to speaking engagements on numerous occasions to share his stories with the world and to help individuals and companies learn the secret of How to Use Rejections as YOUR Weapon for Success.In this book, you will:•Get Tools to Overcome Your Self-Limiting Beliefs•Create a Plan to Define Success in Your Own Terms•Understand How Empowering Yourself Lowers Your Stress Level•Discover Finding Freedom Within Yourself Works Through Discipline•Realize That Your Unique Talents Can Create Huge Effects in Others’ Lives“I recommend 'Freedom at Last!' to all who find excuses for not being successful.",
      features: [
        "Tools to overcome your self-limiting beliefs",
        "Create a plan to define success in your own terms",
        "Understand how empowering yourself lowers your stress level",
        "Discover finding freedom within yourself through discipline",
        "Realize that your unique talents can create huge effects in others' lives"
      ],
      publishDate: "August 11, 2019",
      pages: 66,
      pdfUrl: "https://drive.google.com/uc?export=download&id=1J5plmg6W_wHnbPgV3DQoFAEfTtVfdYTb"
    },
    {
      id: 2,
      title: "Win the Year & Build Your Wealth: A Guide to Your Next Year and the Rest of Your Life",
      author: "John S. Smith Jr. RN",
      coverImage: "https://m.media-amazon.com/images/I/51zcJRI8maL._SX342_SY445_.jpg",
      rating: 4.8,
      reviewCount: 89,
      description: "From a war refugee to one of the most successful immigrant business man. John shares his secrets on how he achieved success in a short period of time. Dive into \"Win The Year and Build Your Wealth\" by John Smith Jr., RN, for actionable tips on success, wealth building, and personal growth. This comprehensive, proven guide is designed to help you achieve your goals and overcome obstacles on your journey to success. With practical strategies and insights, this book is optimized for search engines, ensuring you find the guidance you need to reach your full potential.",
      features: [
        "Secrets from a successful immigrant businessman",
        "Actionable tips on success and wealth building strategies",
        "Personal growth and goal achievement techniques",
        "Practical strategies to overcome obstacles",
        "Proven guide to reach your full potential"
      ],
      publishDate: "February 26, 2023",
      pages: 122,
      pdfUrl: "https://drive.google.com/uc?export=download&id=1cKF8Oe8RbXoqZvhXQ_BiYWGL_UVpjzaK"
    }
  ];

  const handleDownload = (pdfUrl: string, bookTitle: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50" style={{ paddingTop: '136px' }}>
        {/* Hero Section */}
        <section className="bg-[#141e5b] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              onClick={() => setLocation("/")}
              className="mb-6 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Books & Guides
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive resources to guide your journey to financial freedom and business success in healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {books.map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Book Cover */}
                    <div className="lg:col-span-1">
                      <div className="aspect-[3/4] max-w-sm mx-auto">
                        <img
                          src={book.coverImage}
                          alt={`${book.title} cover`}
                          className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{book.title}</h2>
                        <p className="text-lg text-gray-600 flex items-center">
                          <FaUser className="mr-2" />
                          by {book.author}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {renderStars(book.rating)}
                        </div>
                        <span className="text-lg font-semibold text-gray-900">{book.rating}</span>
                        <span className="text-gray-600">({book.reviewCount} reviews)</span>
                      </div>

                      {/* Book Info */}
                      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          Published: {book.publishDate}
                        </div>
                        <div className="flex items-center">
                          <FaBook className="mr-2" />
                          {book.pages} pages
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-gray-700 leading-relaxed">{book.description}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">What you'll learn:</h3>
                        <ul className="space-y-2">
                          {book.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <span className="w-2 h-2 bg-[#141e5b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Download Button */}
                      <div className="pt-4">
                        <Button
                          onClick={() => handleDownload(book.pdfUrl, book.title)}
                          className="bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
                        >
                          <FaDownload className="mr-3" />
                          Download Free PDF
                        </Button>
                        <p className="text-sm text-gray-500 mt-2">
                          Free download - No registration required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#141e5b] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Implement What You've Learned?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              These books are just the beginning. Let's work together to create your personalized path to financial freedom.
            </p>
            <Button
              onClick={() => setLocation("/start-here")}
              className="bg-white text-[#141e5b] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Schedule Your NEXT Strategy Session
              <FaCalendarAlt className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
