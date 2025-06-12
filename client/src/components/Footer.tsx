export default function Footer() {
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

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Your Lifestyle Navigator™</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering healthcare and behavioral health entrepreneurs to achieve business growth, 
              personal wealth, and lasting legacy through our proprietary NEXT Framework™.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#050A30] rounded-full flex items-center justify-center hover:bg-[#050A30]/90 transition-colors">
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#050A30] rounded-full flex items-center justify-center hover:bg-[#050A30]/90 transition-colors">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#050A30] rounded-full flex items-center justify-center hover:bg-[#050A30]/90 transition-colors">
                <i className="fab fa-facebook text-white"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="hover:text-white transition-colors text-left"
                >
                  About John
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("next-framework")} 
                  className="hover:text-white transition-colors text-left"
                >
                  NEXT Framework
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("resources")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Start Here
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(555) 123-4567</li>
              <li>john@yourlifestylenavigator.com</li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-[#050A30] hover:text-[#050A30]/80 transition-colors font-semibold"
                >
                  Schedule Discovery Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Your Lifestyle Navigator™. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
