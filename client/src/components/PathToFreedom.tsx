import { Button } from "@/components/ui/button";
import client3 from "@/assets/client3.png"

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
    <section id="path-to-freedom" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Path to Financial Freedom</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Healthcare Entrepreneurs Need a Different Kind of Guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building a healthcare business is hard. Building personal wealth while doing it is even harder.
            </h3>
            <p className="text-gray-700 mb-6">
              You became a healthcare entrepreneur because you care about people — not because you wanted to become a financial expert or business strategist.
              But as your business grows, so do the challenges.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-semibold">Without proper guidance, many healthcare entrepreneurs:</p>
              <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
                <li>Burn out trying to scale without clarity</li>
                <li>Miss out on opportunities to build personal wealth</li>
                <li>Exit their businesses without maximizing value</li>
                <li>Fail to leave the legacy they envisioned</li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src={client3}
              alt="Healthcare entrepreneur reviewing financial planning documents"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="bg-[#141e5b] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  {challenge.number}
                </span>
                <h4 className="text-xl font-semibold text-gray-900">{challenge.title}</h4>
              </div>
              <ul className="text-gray-700 space-y-2">
                {challenge.points.map((point, pointIndex) => (
                  <li key={pointIndex}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="bg-[#141e5b] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">There Is a Better Way</h3>
          <p className="text-lg mb-6 opacity-90">
            At Your Lifestyle Navigator™, we understand these challenges because we've faced them ourselves. 
            That's why we developed the NEXT Framework™ — a proven path to help healthcare entrepreneurs succeed.
          </p>
          <Button
            onClick={() => scrollToSection("next-framework")}
            className="bg-white text-[#141e5b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Discover the NEXT Framework
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
