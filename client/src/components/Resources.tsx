import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { FaBookOpen, FaToolbox, FaGraduationCap, FaDownload, FaCalendar, FaChevronRight } from 'react-icons/fa';
import { useState } from "react";


export default function Resources() {
  const [, setLocation] = useLocation();
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Healthcare Entrepreneurs with the Tools to Grow, Prosper and Leave a Legacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Books */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBookOpen className="text-white text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Books & Guides</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive guides and resources to help you understand the fundamentals of healthcare business growth and wealth building.
            </p>
            <Button
              onClick={() => setLocation("/books")}
              className="bg-[#141e5b] text-white px-4 py-2 rounded-md hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              <FaBookOpen className="mr-2" />
              View Our Books
              <FaChevronRight className="ml-2 text-sm" />
            </Button>
          </div>

          {/* Success Kit */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaToolbox className="text-white text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Success Kit</h3>
            <p className="text-gray-600 mb-6">
              Essential tools, templates, and checklists to help you implement the NEXT Framework in your own healthcare business.
            </p>
            <Button
              onClick={() => alert("Download coming soon!")}
              variant="outline"
              className="text-[#141e5b] font-semibold inline-flex items-center"
            >
              Download Kit <FaDownload className="ml-2" />
            </Button>
          </div>

          {/* Trainings & Workshops */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGraduationCap className="text-white text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Trainings & Workshops</h3>
            <p className="text-gray-600 mb-6">
              Interactive training sessions and workshops designed specifically for healthcare entrepreneurs at every stage of growth.
            </p>
            <Button
             onClick={() => setLocation("/booking")}
              variant="outline"
              className="text-[#141e5b] font-semibold inline-flex items-center"
            >
              View Schedule <FaCalendar className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
