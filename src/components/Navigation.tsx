
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const scrollToHome = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const isCurrentPage = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const isHomeSection = location.pathname === '/';

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'bg-white/70 backdrop-blur-2xl shadow-[0_4px_16px_rgb(0,0,0,0.08)] border-gray-200/50' : 'bg-white/50 backdrop-blur-2xl border-gray-200/40'
    } border rounded-full px-6 py-2`}>
      <div className="flex items-center space-x-4">
        {/* Brand Logo - Apple style */}
        <button
          onClick={scrollToHome}
          className="bg-[#f5f5f7] backdrop-blur-md border border-gray-200/40 shadow-[0_2px_8px_rgb(0,0,0,0.04)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-all duration-400 ease-out"
        >
          <span className="text-base font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-300 font-styrene">
            N
          </span>
        </button>

        {/* Navigation Links - Apple style */}
        <div className="flex space-x-1">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-sm transition-all duration-400 ease-out font-normal font-styrene px-3 py-1.5 rounded-full ${
              isHomeSection ? 'text-[#1d1d1f] bg-[#f5f5f7]' : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            Home
          </button>
          <button
            onClick={handleProjectsClick}
            className={`text-sm transition-all duration-400 ease-out font-normal font-styrene px-3 py-1.5 rounded-full ${
              isCurrentPage('/projects') ? 'text-[#1d1d1f] bg-[#f5f5f7]' : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => navigate('/contact')}
            className={`text-sm transition-all duration-400 ease-out font-normal font-styrene px-3 py-1.5 rounded-full ${
              isCurrentPage('/contact') ? 'text-[#1d1d1f] bg-[#f5f5f7]' : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
