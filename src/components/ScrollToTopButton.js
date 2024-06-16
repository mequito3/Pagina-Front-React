import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const ArrowUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L4.707 9.707a1 1 0 01-1.414-1.414l5-5z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    isVisible && (
      <div className="fixed bottom-10 right-12 z-50">
        <button
          onClick={scrollToTop}
          className="bg-blue-900 text-white p-3 rounded-lg shadow-lg hover:bg-red-800 focus:outline-none"
          style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          <ArrowUpIcon />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
