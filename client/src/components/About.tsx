import client3 from "@/assets/FFreedom-client.png";
import { FaHandshake, FaRocket, FaTree, FaUsers, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function About() {
  const values = [
    {
      icon: FaHandshake,
      title: "Integrity",
      description: "We serve as trusted partners and always act in your best interest."
    },
    {
      icon: FaRocket,
      title: "Empowerment",
      description: "We equip you with the knowledge and tools to make informed financial and business decisions."
    },
    {
      icon: FaTree,
      title: "Legacy",
      description: "We help you create impact that extends beyond your practice and into future generations."
    },
    {
      icon: FaUsers,
      title: "Partnership",
      description: "We walk alongside you — as an advisor, mentor, and advocate — through every phase of your journey."
    },
    {
      icon: FaStar,
      title: "Excellence",
      description: "We bring deep industry knowledge and continuous learning to deliver the highest level of service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Healthcare Entrepreneurs to Achieve Financial Freedom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#141e5b]/10 to-transparent rounded-2xl transform rotate-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <img 
                  src={client3}
                  alt="Healthcare entrepreneur and founder reviewing financial planning documents"
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">John S. Smith Jr., RN, BSN</h3>
            <p className="text-lg text-primary-blue mb-6 font-semibold">
              "I've walked this path myself — and I'm passionate about helping other healthcare entrepreneurs do the same."
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                John S. Smith Jr., RN, BSN, is not only a clinician and financial expert — he is also a seasoned healthcare entrepreneur. 
                John founded Prestige Healthcare Resources Inc. from the ground up, building it into a successful healthcare company.
              </p>
              <p>
                Through that experience, he gained an intimate understanding of the challenges and rewards of launching, scaling, 
                and leading a healthcare business. Along the way, John also recognized a critical gap: while healthcare entrepreneurs 
                were passionate about patient care, many lacked guidance on wealth building, business exit strategy, and legacy planning.
              </p>
              <p>
                Driven by this insight, John created Your Lifestyle Navigator™ — a firm designed to help healthcare professionals 
                bridge the gap between clinical success and personal financial freedom.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          
          {/* First Row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-items-center">
            {values.slice(0, 3).map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#141e5b]/20 transition-all duration-300 hover:-translate-y-1 w-full max-w-xs">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#141e5b] to-[#1a2b6b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#141e5b] transition-colors duration-300 mb-2">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Second Row - 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
            {values.slice(3, 5).map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index + 3} className="group text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#141e5b]/20 transition-all duration-300 hover:-translate-y-1 w-full max-w-xs">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#141e5b] to-[#1a2b6b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#141e5b] transition-colors duration-300 mb-2">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
