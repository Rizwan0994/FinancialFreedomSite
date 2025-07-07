// SEO utilities for managing page titles and meta descriptions
export const updatePageSEO = (title: string, description: string, keywords?: string) => {
  // Update document title
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
  }
  
  // Update keywords if provided
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }
  }
  
  // Update Open Graph title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  // Update Open Graph description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
};

export const SEO_DATA = {
  home: {
    title: "Your Lifestyle Navigator™ - Healthcare Business Growth & Financial Freedom",
    description: "Empowering healthcare entrepreneurs to achieve business growth, personal wealth, and lasting legacy through our proprietary NEXT Framework™. Navigate, Elevate, eXit, Transfer.",
    keywords: "healthcare business growth, medical practice consulting, healthcare entrepreneur, financial planning, business exit strategy, NEXT Framework"
  },
  aboutJohn: {
    title: "About John S. Smith Jr. - Healthcare Business Coach & Financial Navigator",
    description: "Meet John S. Smith Jr., RN, BSN - founder of Your Lifestyle Navigator™. Learn how this clinician-turned-entrepreneur helps healthcare professionals build wealth and legacy.",
    keywords: "John S. Smith, healthcare business coach, medical practice consultant, healthcare entrepreneur mentor, financial advisor"
  },
  pathToFreedom: {
    title: "Your Path to Financial Freedom - Healthcare Entrepreneur Success Framework",
    description: "Discover the proven pathway that transforms healthcare professionals into successful entrepreneurs, building wealth while making meaningful community impact.",
    keywords: "healthcare financial freedom, medical practice success, healthcare entrepreneur path, business growth strategy"
  },
  nextFramework: {
    title: "NEXT Framework™ - Navigate, Elevate, eXit, Transfer | Healthcare Business Growth",
    description: "Our proprietary NEXT Framework™ helps healthcare entrepreneurs build, scale, and successfully exit their practices while creating lasting wealth and legacy.",
    keywords: "NEXT Framework, healthcare business strategy, medical practice growth, business exit planning, wealth transfer"
  },
  clientSuccess: {
    title: "Client Success Stories - Healthcare Entrepreneur Transformations",
    description: "See proven results from healthcare entrepreneurs who transformed their practices and lives through our comprehensive business growth and wealth building approach.",
    keywords: "healthcare success stories, medical practice growth results, healthcare entrepreneur testimonials, business transformation"
  },
  services: {
    title: "Healthcare Business Services - Growth, Wealth & Exit Planning Solutions",
    description: "Comprehensive business coaching, financial planning, and exit strategies for healthcare entrepreneurs. Transform your practice into a thriving enterprise.",
    keywords: "healthcare business services, medical practice consulting, business growth coaching, financial planning, exit strategy"
  },
  navigateBusinessGrowth: {
    title: "Navigate Business Growth - Healthcare Practice Expansion & Strategy Services",
    description: "Accelerate your healthcare business growth with strategic coaching, practice optimization, brand development, and M&A readiness consulting.",
    keywords: "healthcare business growth, medical practice expansion, practice optimization, healthcare M&A, business strategy"
  },
  elevateWealth: {
    title: "Elevate Wealth - Healthcare Financial Planning & Wealth Building Services",
    description: "Build lasting wealth beyond your practice with advanced financial planning, tax optimization, investment strategies, and insurance solutions for healthcare entrepreneurs.",
    keywords: "healthcare wealth building, medical practice financial planning, tax optimization, investment planning, healthcare insurance"
  },
  exitStrategy: {
    title: "eXit Strategy - Healthcare Practice Transition & Exit Planning Services",
    description: "Maximize your practice value and ensure smooth transition with comprehensive exit planning, buy-sell agreements, and business continuity protection.",
    keywords: "healthcare exit planning, medical practice sale, business succession planning, practice transition, buy-sell agreements"
  },
  transferLegacy: {
    title: "Transfer Legacy - Healthcare Wealth Transfer & Estate Planning Services",
    description: "Create meaningful legacy with wealth transfer strategies, estate planning, charitable giving, and family governance for healthcare entrepreneurs.",
    keywords: "healthcare estate planning, wealth transfer, legacy planning, charitable giving, family wealth governance"
  },
  resources: {
    title: "Healthcare Business Resources - Books, Tools & Educational Materials",
    description: "Access comprehensive collection of books, guides, tools, and educational materials designed to help healthcare entrepreneurs grow and prosper.",
    keywords: "healthcare business resources, medical practice books, entrepreneur tools, business education, healthcare guides"
  },
  startHere: {
    title: "Start Here - Book Your NEXT Strategy Session | Healthcare Business Consulting",
    description: "Begin your healthcare entrepreneur journey with a complimentary NEXT Strategy Session. Discover how to build wealth, plan your exit, and create lasting legacy.",
    keywords: "healthcare business consultation, strategy session, medical practice coaching, business growth planning"
  },
  faq: {
    title: "Frequently Asked Questions - Healthcare Business Growth & Financial Planning",
    description: "Get answers to common questions about our NEXT Framework™, services, and how we help healthcare entrepreneurs achieve business success and financial freedom.",
    keywords: "healthcare business FAQ, medical practice questions, entrepreneur consulting, business growth answers"
  },
  books: {
    title: "Free Healthcare Business Books - Download Essential Entrepreneur Guides",
    description: "Download free essential books and guides for healthcare entrepreneurs. Learn proven strategies for business growth, wealth building, and practice success.",
    keywords: "free healthcare business books, medical practice guides, entrepreneur resources, business growth books"
  },
  booking: {
    title: "Book Your Session - Healthcare Business Strategy Consultation",
    description: "Schedule your complimentary NEXT Strategy Session with Your Lifestyle Navigator™. Take the first step toward healthcare business success and financial freedom.",
    keywords: "book healthcare consultation, strategy session booking, medical practice coaching appointment"
  }
};
