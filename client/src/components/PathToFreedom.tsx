import { Button } from "@/components/ui/button";
import client3 from "@/assets/FFreedom-client.png"
import { FaArrowRight, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function PathToFreedom() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 136;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const challenges = [
    {
      number: "1",
      title: "Business Growth Without a Plan",
      points: [
        "You're scaling your practice, but lack a clear roadmap for sustainable growth",
        "Revenue may be increasing, but profits and cash flow feel unpredictable",
        "Leadership and staffing challenges pull you away from long-term strategy",
        "No structured plan for how and when you will exit the business"
      ]
    },
    {
      number: "2",
      title: "Personal Wealth on the Back Burner",
      points: [
        "Most of your net worth is tied up in your business",
        "Limited diversification outside of your practice",
        "Retirement planning is often delayed or fragmented",
        "Your family's future and legacy may be at risk"
      ]
    },
    {
      number: "3",
      title: "Overwhelmed by Complexity",
      points: [
        "Complex regulatory environment",
        "Changing reimbursement models",
        "Difficult practice valuation considerations",
        "Evolving M&A landscape for healthcare companies"
      ]
    },
    {
      number: "4",
      title: "Lack of Integrated Guidance",
      points: [
        "Traditional financial planning rarely aligns with business realities",
        "Business consultants don't help with personal wealth planning",
        "Insurance agents offer products — but not strategy",
        "You need healthcare-specific integrated approach"
      ]
    }
  ];

  return (
    <section id="path-to-freedom" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Path to Financial Freedom</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Healthcare Entrepreneurs Need a Different Kind of Guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-16">
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building a healthcare business is hard. Building personal wealth while doing it is even harder.
            </h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              You became a healthcare entrepreneur because you care about people — not because you wanted to become a financial expert or business strategist.
              But as your business grows, so do the challenges.
            </p>
            
            <motion.div 
              className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-r-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                <FaExclamationTriangle className="text-amber-600 text-xl mr-3" />
                <p className="text-amber-800 font-semibold text-lg">Without proper guidance, many healthcare entrepreneurs:</p>
              </div>
              <ul className="space-y-3 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span>Burn out trying to scale without clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span>Miss out on opportunities to build personal wealth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span>Exit their businesses without maximizing value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span>Fail to leave the legacy they envisioned</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#141e5b]/10 to-transparent rounded-2xl transform rotate-3"></div>
              <img 
                src={client3}
                alt="Healthcare entrepreneur reviewing financial planning documents"
                className="relative rounded-2xl shadow-xl w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Challenges Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#141e5b] to-[#1a2b6b] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 text-lg shadow-lg">
                  {challenge.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 leading-tight">{challenge.title}</h4>
              </div>
              <ul className="text-gray-700 space-y-3">
                {challenge.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#141e5b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution CTA */}
        <motion.div 
          className="bg-gradient-to-r from-[#141e5b] to-[#1a2b6b] rounded-2xl p-8 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="text-green-400 text-3xl mr-3" />
            <h3 className="text-3xl font-bold">There Is a Better Way</h3>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            At Your Lifestyle Navigator™, we understand these challenges because we've faced them ourselves. 
            That's why we developed the NEXT Framework™ — a proven path to help healthcare entrepreneurs succeed.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection("next-framework")}
              className="bg-white text-[#141e5b] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Discover the NEXT Framework
              <FaArrowRight className="ml-3" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
