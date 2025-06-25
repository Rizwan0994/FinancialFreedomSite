import { FaClinicMedical, FaHospital, FaBrain, FaUserTie, FaLaptopMedical } from 'react-icons/fa';

export default function WhoWeServe() {
  const clientTypes = [
    { icon: FaClinicMedical, label: "Private Practice Owners" },
    { icon: FaHospital, label: "Clinic & Healthcare Business Owners" },
    { icon: FaBrain, label: "Behavioral Health Entrepreneurs" },
    { icon: FaUserTie, label: "Healthcare Executives & Consultants" },
    { icon: FaLaptopMedical, label: "Healthcare Technology Founders" }
  ];

  return (
    <section id="who-we-serve" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in working with healthcare and behavioral health entrepreneurs at every stage of their journey.
          </p>
          
          {/* First Row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-items-center">
            {clientTypes.slice(0, 3).map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div key={index} className="group text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#141e5b]/20 transition-all duration-300 hover:-translate-y-1 w-full max-w-xs">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#141e5b] to-[#1a2b6b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#141e5b] transition-colors duration-300">{client.label}</p>
                </div>
              );
            })}
          </div>
          
          {/* Second Row - 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
            {clientTypes.slice(3, 5).map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div key={index + 3} className="group text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#141e5b]/20 transition-all duration-300 hover:-translate-y-1 w-full max-w-xs">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#141e5b] to-[#1a2b6b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#141e5b] transition-colors duration-300">{client.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
