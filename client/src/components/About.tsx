import jhonImage from "@/assets/image.jpg"
export default function About() {
  const values = [
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description: "We serve as trusted partners and always act in your best interest."
    },
    {
      icon: "fas fa-rocket",
      title: "Empowerment",
      description: "We equip you with the knowledge and tools to make informed financial and business decisions."
    },
    {
      icon: "fas fa-tree",
      title: "Legacy",
      description: "We help you create impact that extends beyond your practice and into future generations."
    },
    {
      icon: "fas fa-users",
      title: "Partnership",
      description: "We walk alongside you — as an advisor, mentor, and advocate — through every phase of your journey."
    },
    {
      icon: "fas fa-star",
      title: "Excellence",
      description: "We bring deep industry knowledge and continuous learning to deliver the highest level of service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Healthcare Entrepreneurs to Achieve Financial Freedom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={jhonImage}
              alt="John S. Smith Jr., RN, BSN - Healthcare Entrepreneur and Financial Expert"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
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
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#050A30] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
