import { Button } from "@/components/ui/button";
import disscoveryCall from "@/assets/call.png";
import nextFrameWork from "@/assets/framework.png";
import successCall from "@/assets/success.png";
import group from "@/assets/group3.png";
import sign from "@/assets/sign.png";
import headshot from "@/assets/headshot.png";
export default function ClientSuccessPath() {
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

  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We start with a complimentary 30-minute call to understand your goals, challenges, and where you are in your business and financial journey.",
      image: disscoveryCall
    },
    {
      number: "2",
      title: "Comprehensive Assessment",
      description: "Next, we conduct a deep-dive evaluation of your business, personal finances, and legacy aspirations — creating a clear picture of your current state and future possibilities.",
      image: sign
    },
    {
      number: "3",
      title: "NEXT Roadmap Planning",
      description: "We develop your personalized NEXT Roadmap — a cohesive strategy that connects your business growth, personal wealth building, exit planning, and legacy creation.",
      image: nextFrameWork
    },
    {
      number: "4",
      title: "Implementation Partnership",
      description: "Together, we implement your roadmap — providing expert guidance and ongoing support across your NEXT journey. This may include business consulting, financial planning, strategic insurance solutions, and more.",
      image: group
    },
    {
      number: "5",
      title: "Ongoing Optimization",
      description: "Your needs will evolve — and so will your plan. Through regular reviews and refinement, we ensure your strategy stays aligned with your vision and the changing healthcare landscape.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="client-success" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How We Work with You: A Clear, Transparent Process
          </p>
        </div>

        {/* Success Path Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center lg:items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 text-center lg:text-right' : 'lg:pl-8 text-center lg:text-left'} mb-8 lg:mb-0`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-[#141e5b] text-white rounded-full text-2xl font-bold mb-4 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <img 
                    src={step.image}
                    alt={`${step.title} visualization`}
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                    decoding="async"
                    width="500"
                    height="300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Let's map what's NEXT for your business and your life.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
          >
            Schedule Your Discovery Call
            <i className="fas fa-phone ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
