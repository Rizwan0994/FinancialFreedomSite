import { Button } from "@/components/ui/button";
//import assets Right Image
import RightImage from "@/assets/hero-client.png";

export default function Hero() {
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
    <section id="home" className="relative overflow-hidden" style={{ paddingTop: '136px', background: 'linear-gradient(135deg, #141e5b 0%, #141e5b 100%)' }}>
      {/* Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Helping Healthcare{" "}
              <br className="hidden sm:block" />
              Entrepreneurs{" "}
              <br className="hidden sm:block" />
              Navigate What's{" "}
              <br className="hidden sm:block" />
              <span className="text-white">NEXT</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
              Founded by clinician-turned-entrepreneur John S. Smith Jr., creator of Prestige Healthcare Resources Inc., 
              Your Lifestyle Navigator™ empowers healthcare and behavioral health business owners to achieve business growth, 
              personal wealth, and lasting legacy through our proprietary NEXT Framework™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
         
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 bg-bg-white border-white text-white px-8 py-4 rounded text-lg font-semibold hover:bg-white hover:text-[#141e5b] transition-colors inline-flex items-center justify-center"
              >
                Book My NEXT Strategy Session
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={RightImage}
                alt="John S. Smith Jr., RN, BSN - Healthcare Entrepreneur and Financial Expert"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
