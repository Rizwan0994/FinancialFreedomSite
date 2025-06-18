import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import logo from '../assets/logo.jpg';

// FontAwesome icons are now loaded via CDN in index.html
// No need for dynamic script loading


// The main navigation component, designed to match the provided image.
// It is self-contained and does not require other components to render.
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location, setLocation] = useLocation();

  // Effect to handle highlighting nav items on scroll.
  // Note: This requires <section> elements with corresponding IDs on the page to work.
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      // The offset is adjusted to account for the height of the two-tier fixed navigation
      const scrollPosition = window.pageYOffset + 140;

      let currentSection = "";
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionId = htmlSection.getAttribute("id") || "";

        if (
          scrollPosition >= htmlSection.offsetTop &&
          scrollPosition < htmlSection.offsetTop + htmlSection.offsetHeight
        ) {
          currentSection = sectionId;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.pageYOffset < 200) {
        // Default to home if at the top of the page
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on current route
  useEffect(() => {
    if (location === "/start-here") {
      setActiveSection("start-here");
    } else if (location === "/") {
      // If on home page, let scroll handler manage active section
      setActiveSection("home");
    }
  }, [location]);

  // Function to handle both page navigation and section scrolling
  const handleNavigation = (item: { id: string; href?: string; type?: string; path?: string }) => {
    if (item.type === "page" && item.path) {
      // Navigate to separate page
      setLocation(item.path);
      setIsMenuOpen(false);
    } else {
      // Scroll to section on current page
      scrollToSection(item.id);
    }
  };

  // Function to smoothly scroll to a specific section on the page
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset accounts for the combined height of the fixed navigation bars
      const offsetTop = element.offsetTop - 136;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    // Automatically close the mobile menu after a selection
    setIsMenuOpen(false);
  };

  // Navigation items as seen in the provided image and original code
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT JOHN" },
    { id: "path-to-freedom", label: "YOUR PATH TO FINANCIAL FREEDOM" },
    { id: "client-success", label: "CLIENT SUCCESS PATH" },
    { id: "services", label: "SERVICES" },
    { id: "resources", label: "RESOURCES" },
    { id: "next-framework", label: "THE NEXT FRAMEWORK" },
    { id: "start-here", label: "START HERE", type: "page", path: "/start-here" },
  ];

  return (
    <>
      {/* --- Top Navigation Bar (Logo & Title) --- */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20 relative">

            {/* Logo and Title Section - Centered */}
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="John Smith Logo"
               className="h-24 md:h-20 w-auto"
              />
              <h1 className="text-xl md:text-2xl font-serif text-gray-800 tracking-wider">
                Your Lifestyle Navigator
              </h1>
            </div>
            {/* <div className="flex items-center space-x-4">          
              <div className="text-center font-semibold leading-tight text-gray-600 text-sm">
                JOHN
                <div className="w-full h-px bg-gray-400 my-0.5"></div>
                SMITH
              </div>
              <h1 className="text-xl md:text-2xl font-serif text-gray-800 tracking-wider">
                Your Lifestyle Navigator
              </h1>
            </div> */}

            {/* Mobile Menu Button - Positioned to the right */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 rounded-md"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu (collapsible) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors ${activeSection === item.id
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Secondary Navigation Bar (Links) - Desktop Only --- */}
      <div className="bg-white fixed w-full top-20 z-40 hidden lg:block border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-14">
            <div className="flex items-center space-x-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`px-2 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ease-in-out focus:outline-none ${activeSection === item.id
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}