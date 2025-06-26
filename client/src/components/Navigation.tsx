import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
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
      // Only run scroll detection on home page
      if (location !== "/") {
        return;
      }

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
    // Run once on mount to set initial state (only if on home page)
    if (location === "/") {
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Update active section based on current route
  useEffect(() => {
    if (location === "/start-here") {
      setActiveSection("start-here");
    } else if (location === "/") {
      // If on home page, let scroll handler manage active section initially
      // The scroll handler will take over from here
      const handleInitialScroll = () => {
        const sections = document.querySelectorAll("section[id]");
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
          setActiveSection("home");
        }
      };

      // Small delay to ensure page content is loaded
      setTimeout(handleInitialScroll, 100);
    }
  }, [location]);

  // Function to handle both page navigation and section scrolling
  const handleNavigation = (item: { id: string; href?: string; type?: string; path?: string }) => {
    if (item.type === "page" && item.path) {
      // Navigate to separate page
      setLocation(item.path);
      setIsMenuOpen(false);
    } else {
      // If we're not on home page and trying to navigate to a section, go to home first
      if (location !== "/") {
        setLocation("/");
        // Wait a bit for the page to load, then scroll to section
        setTimeout(() => {
          scrollToSection(item.id);
        }, 100);
      } else {
        // Already on home page, just scroll to section
        scrollToSection(item.id);
      }
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
         { id: "next-framework", label: "THE NEXT FRAMEWORK" },
    { id: "client-success", label: "CLIENT SUCCESS PATH" },
   
    { id: "services", label: "SERVICES" },
    { id: "resources", label: "RESOURCES" },

    { id: "start-here", label: "START HERE", type: "page", path: "/start-here" },
  ];

  return (
    <>
      {/* --- Top Navigation Bar (Logo & Title) --- */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50 overflow-x-hidden">
       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative h-20 flex items-center justify-between lg:justify-center">

    {/* Logo + Title: left on mobile, centered on desktop */}
    <div className="flex items-center space-x-3 absolute left-2 lg:relative lg:left-0">
      <img
        src={logo}
        alt="John Smith Logo"
        className="h-16 sm:h-20 w-auto"
        loading="eager"
        decoding="async"
        width="64"
        height="64"
      />
      <h1 className="text-base sm:text-xl md:text-2xl font-serif text-gray-800 tracking-wider text-left lg:text-center">
        Your Lifestyle Navigator
      </h1>
    </div>

    {/* Hamburger Icon: visible only on mobile (top-right) */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 rounded-md"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
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
            <div className="flex items-center space-x-1 relative">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ease-in-out focus:outline-none rounded-lg ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#141e5b] rounded-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.8,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}