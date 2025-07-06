import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLocation } from "wouter";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { FaArrowRight, FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa';

export default function FAQ() {
  useScrollToTop();
  const [, setLocation] = useLocation();

  const navigateToContact = () => {
    setLocation("/");
    // Small delay to allow navigation, then scroll to contact
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        const offsetTop = element.offsetTop - 136;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is the NEXT Framework™?",
          answer: "The NEXT Framework™ is our proprietary system designed specifically for healthcare entrepreneurs. It stands for Navigate business growth, elevate wealth, plan your eXit, and Transfer your legacy. This comprehensive approach helps you build a successful healthcare business while creating personal wealth and planning for the future."
        },
        {
          question: "Who is Your Lifestyle Navigator™ designed for?",
          answer: "Our services are specifically designed for healthcare and behavioral health entrepreneurs, including private practice owners, clinic operators, healthcare consultants, and medical professionals looking to build or scale their healthcare businesses while achieving financial freedom."
        },
        {
          question: "How do I get started with Your Lifestyle Navigator™?",
          answer: "The best way to start is by booking a NEXT Strategy Session. This complimentary discovery call will help us understand your current situation, goals, and challenges, and determine how our framework can best serve your journey to financial freedom."
        }
      ]
    },
    {
      category: "Services & Programs",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive business coaching, financial planning, wealth building strategies, exit planning, and legacy transfer services. Our approach is holistic, addressing both your business growth and personal wealth goals simultaneously."
        },
        {
          question: "Do you work with healthcare businesses of all sizes?",
          answer: "Yes, we work with healthcare entrepreneurs at various stages - from those just starting their practice to established business owners looking to scale or plan their exit. Our NEXT Framework™ is adaptable to different business sizes and growth stages."
        },
        {
          question: "What makes your approach different from other business coaches?",
          answer: "John S. Smith Jr. is a healthcare entrepreneur himself, having built Prestige Healthcare Resources Inc. from the ground up. This firsthand experience, combined with his clinical background as an RN, BSN, gives him unique insights into the specific challenges healthcare entrepreneurs face."
        }
      ]
    },
    {
      category: "The Discovery Process",
      questions: [
        {
          question: "What happens during a NEXT Strategy Session?",
          answer: "During your complimentary NEXT Strategy Session, we'll assess your current business situation, identify growth opportunities, discuss your wealth-building goals, and explore how the NEXT Framework™ can help you achieve financial freedom. It's a no-pressure conversation focused on your success."
        },
        {
          question: "How long is the Discovery Call?",
          answer: "The NEXT Strategy Session typically lasts 45-60 minutes. This gives us enough time to understand your situation thoroughly and provide valuable insights, while respecting your busy schedule as a healthcare entrepreneur."
        },
        {
          question: "Is there any cost for the initial consultation?",
          answer: "No, the NEXT Strategy Session is complimentary. We believe in providing value upfront and want to ensure there's a good fit before any financial commitment. This initial consultation is our way of demonstrating our expertise and commitment to your success."
        }
      ]
    },
    {
      category: "Business Growth & Wealth Building",
      questions: [
        {
          question: "How do you help with business growth?",
          answer: "We help you navigate business growth through strategic planning, operational optimization, revenue enhancement, and team development. Our approach ensures sustainable growth that contributes to your overall wealth-building strategy."
        },
        {
          question: "What does 'elevate wealth' mean in your framework?",
          answer: "Elevating wealth means building personal financial assets beyond your business income. This includes investment strategies, real estate opportunities, retirement planning, and creating multiple income streams that work for you even when you're not actively working."
        },
        {
          question: "Do you help with exit planning?",
          answer: "Absolutely. Exit planning is a crucial component of our NEXT Framework™. We help you prepare your business for a successful exit, whether through sale, merger, or succession planning, ensuring you maximize the value you've built over the years."
        }
      ]
    },
    {
      category: "Working with John",
      questions: [
        {
          question: "What is John's background?",
          answer: "John S. Smith Jr., RN, BSN, is a clinician-turned-entrepreneur who founded Prestige Healthcare Resources Inc. He combines clinical expertise with business acumen and financial planning knowledge to help healthcare entrepreneurs achieve both business success and personal wealth."
        },
        {
          question: "Does John work with clients personally?",
          answer: "Yes, John personally works with select clients who are serious about implementing the NEXT Framework™. He believes in providing high-touch, personalized guidance to ensure your success in building both business value and personal wealth."
        },
        {
          question: "What can I expect from working with Your Lifestyle Navigator™?",
          answer: "You can expect a comprehensive, strategic approach to building your healthcare business and personal wealth simultaneously. We provide clear frameworks, actionable strategies, ongoing support, and accountability to help you achieve financial freedom and create a lasting legacy."
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50" style={{ paddingTop: '136px' }}>
        {/* Hero Section */}
        <section className="bg-[#141e5b] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Get answers to common questions about our NEXT Framework™ and how we help healthcare entrepreneurs achieve financial freedom.
            </p>            <Button
              onClick={navigateToContact}
              className="bg-white text-[#141e5b] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Still Have Questions? Contact Us
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4 flex items-center">
                  <FaQuestionCircle className="text-[#141e5b] mr-3" />
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors [&[data-state=open]]:bg-gray-50">
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#141e5b] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey to Financial Freedom?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let another day pass without taking action toward your financial goals. 
              Book your complimentary NEXT Strategy Session today.
            </p>            <Button
              onClick={navigateToContact}
              className="bg-white text-[#141e5b] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Book My NEXT Strategy Session
              <FaCalendarAlt className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
