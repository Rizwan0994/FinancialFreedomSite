import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { FaDownload, FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaBook, FaCalendarAlt, FaUser, FaAmazon, FaExternalLinkAlt } from 'react-icons/fa';
import { useToast } from "@/hooks/use-toast";

export default function Books() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<{ pdfUrl: string; title: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      description: "JOHN SAYE SMITH JR., RN, BSN is the founder of Prestige Healthcare Resources (PHR) DBA Personal Results, an in-home care, case management, and staffing agency focusing on enhancing the lifestyle of nurses and other professionals. Mr. Smith has been invited to speaking engagements on numerous occasions to share his stories with the world and to help individuals and companies learn the secret of How to Use Rejections as YOUR Weapon for Success...",
      features: [
        "Tools to overcome your self-limiting beliefs",
        "Create a plan to define success in your own terms",
        "Understand how empowering yourself lowers your stress level",
        "Discover finding freedom within yourself through discipline",
        "Realize that your unique talents can create huge effects in others' lives"
      ],
      publishDate: "August 11, 2019",
      pages: 66,
      pdfUrl: "https://drive.google.com/uc?export=download&id=14O-aFm0Mi2K2v71tRqSPJWWIUagq9EvF",
      amazonUrl: "https://www.amazon.com/Freedom-At-Last-Overcome-Holding-ebook/dp/B07WM1FMCS/?_encoding=UTF8&pd_rd_w=HhMzv&content-id=amzn1.sym.0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_p=0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_r=133-3106300-4107736&pd_rd_wg=a6eoE&pd_rd_r=fcb97735-66ca-4f01-9662-c69dde5e9de6&ref_=aufs_ap_sc_dsk"
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
      pdfUrl: "https://drive.google.com/uc?export=download&id=1qixK7EmCISFuD8dUmzlDtmub982cM8yY",
      amazonUrl: "https://www.amazon.com/Win-Year-Build-Your-Wealth-ebook/dp/B0BWYX3F58/?_encoding=UTF8&pd_rd_w=HhMzv&content-id=amzn1.sym.0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_p=0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_r=133-3106300-4107736&pd_rd_wg=a6eoE&pd_rd_r=fcb97735-66ca-4f01-9662-c69dde5e9de6&ref_=aufs_ap_sc_dsk"
    }
  ];

  const handleDownloadClick = (pdfUrl: string, bookTitle: string) => {
    setSelectedBook({ pdfUrl, title: bookTitle });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://0bd.44a.myftpupload.com/wp-json/ghl/v1/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: "",
          email: formData.email,
          source: "book_download",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Success!",
          description: "Thank you! Your download will begin shortly.",
        });

        // Clear form
        setFormData({ name: "", email: "" });
        
        // Close modal
        setIsModalOpen(false);
        
        // Proceed with download
        if (selectedBook) {
          handleActualDownload(selectedBook.pdfUrl, selectedBook.title);
        }
      } else {
        throw new Error(result?.error || "Unknown error");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleActualDownload = (pdfUrl: string, bookTitle: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
    setFormData({ name: "", email: "" });
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
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{book.title}</h3>
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

                      {/* Action Buttons */}
                      <div className="pt-4 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                          {/* Download Button */}
                          <Button
                            onClick={() => handleDownloadClick(book.pdfUrl, book.title)}
                            className="bg-[#141e5b] text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center justify-center w-full sm:w-auto"
                          >
                            <FaDownload className="mr-2 text-sm" />
                            Download Free PDF
                          </Button>
                          
                          {/* Amazon Purchase Button */}
                          <Button
                            onClick={() => window.open(book.amazonUrl, '_blank')}
                            className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center w-full sm:w-auto"
                          >
                            <FaAmazon className="mr-2 text-sm" />
                            Buy on Amazon
                            <FaExternalLinkAlt className="ml-2 text-xs" />
                          </Button>
                        </div>
                        
                        {/* Help Text */}
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm text-gray-600">
                            <strong>Free PDF:</strong> Get instant access
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            <strong>Amazon:</strong> Purchase the full physical or Kindle version
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#141e5b] py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
              Ready to Implement What You've Learned?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 px-2 leading-relaxed">
              These books are just the beginning. Let's work together to create your personalized path to financial freedom.
            </p>
            <Button
              onClick={() => setLocation("/start-here")}
              className="bg-white text-[#141e5b] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center mx-2"
            >
              <span className="hidden sm:inline">Schedule Your NEXT Strategy Session</span>
              <span className="sm:hidden">Schedule Strategy Session</span>
              <FaCalendarAlt className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Download Confirmation Modal */}
        <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">
                Download Free PDF
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Please provide your details to download "{selectedBook?.title}". We'll never spam you.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
            </form>

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleModalClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="bg-[#141e5b] text-white hover:bg-[#141e5b]/90"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaDownload className="mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </>
  );
}
