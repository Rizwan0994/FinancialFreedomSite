import { Button } from "@/components/ui/button";

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Healthcare Entrepreneurs with the Tools to Grow, Prosper and Leave a Legacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Books */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-book-open text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Books & Guides</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive guides and resources to help you understand the fundamentals of healthcare business growth and wealth building.
            </p>
            <a 
              href="https://www.amazon.com/stores/John-S.-Smith-Jr.-RN/author/B0C66RX7JD?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#141e5b] font-semibold hover:text-[#141e5b]/80 transition-colors bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              <i className="fab fa-amazon mr-2"></i>
              View Books on Amazon 
              <i className="fas fa-external-link-alt ml-2 text-sm"></i>
            </a>
          </div>

          {/* Success Kit */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-toolbox text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Kit</h3>
            <p className="text-gray-600 mb-6">
              Essential tools, templates, and checklists to help you implement the NEXT Framework in your own healthcare business.
            </p>
            <a href="#" className="text-[#141e5b] font-semibold hover:text-[#141e5b]/80 transition-colors">
              Download Kit <i className="fas fa-download ml-1"></i>
            </a>
          </div>

          {/* Trainings */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-graduation-cap text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trainings & Workshops</h3>
            <p className="text-gray-600 mb-6">
              Interactive training sessions and workshops designed specifically for healthcare entrepreneurs at every stage of growth.
            </p>
            <a href="#" className="text-[#141e5b] font-semibold hover:text-[#141e5b]/80 transition-colors">
              View Schedule <i className="fas fa-calendar ml-1"></i>
            </a>
          </div>
        </div>

        {/* Featured Resource */}
        {/* <div className="mt-16 bg-[#141e5b] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">FREE Healthcare Entrepreneur Success Assessment</h3>
          <p className="text-lg mb-6 opacity-90">
            Discover where you are in your journey and what steps to take next with our comprehensive assessment tool.
          </p>
          <Button className="bg-white text-[#141e5b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Take Assessment Now
            <i className="fas fa-chevron-right ml-2"></i>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
