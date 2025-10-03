
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterAnimation from './TypewriterAnimation';
import { getAssetPath } from '@/utils/pathUtils';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-20 relative overflow-hidden">
      {/* Clean minimal background - Apple style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-50/30 to-blue-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-xl px-6 md:px-12 py-12 md:py-24 rounded-[2.5rem] relative overflow-hidden border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {/* Removed grid pattern for cleaner Apple look */}

        <div className="w-full relative z-10">
          <div className="space-y-8">
            <div className="text-left relative">
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
                {/* Text content - enhanced typography */}
                <div className="flex-1 min-w-0 order-2 lg:order-1 text-center lg:text-left">
                  <div className="animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight font-styrene tracking-tight">
                      <span className="inline-block animate-fade-in text-[#1d1d1f]">Hi,</span>{' '}
                      <span className="inline-block animate-fade-in delay-200 text-[#1d1d1f]">I'm</span>{' '}
                      <span className="inline-block animate-fade-in delay-300 text-[#1d1d1f]">
                        Sai Niranjan
                      </span>
                    </h1>
                  </div>
                  <div className="mt-6 animate-fade-in delay-500">
                    <TypewriterAnimation />
                  </div>
                  <div className="animate-fade-in delay-700">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#86868b] max-w-3xl leading-relaxed font-styrene mt-6 mx-auto lg:mx-0 font-normal tracking-normal">
                      <span className="text-[#1d1d1f]">Software Engineer</span> with{' '}
                      <span className="text-[#1d1d1f]">3+ years</span> of experience in full-stack development,
                      distributed systems, and cloud infrastructure. Specialized in building{' '}
                      <span className="text-[#1d1d1f]">scalable microservices</span>,{' '}
                      <span className="text-[#1d1d1f]">high-performance systems</span>, and{' '}
                      <span className="text-[#1d1d1f]">cloud-native applications</span>.
                    </p>
                  </div>
                </div>
                
                {/* Enhanced image with modern styling */}
                <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in delay-300">
                  <div className="relative group">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] mx-auto transform transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)]">
                      <img
                        src={getAssetPath("/profile.jpg")}
                        alt="Sai Niranjan - Profile Photo"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced buttons with modern styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start animate-fade-in delay-1000">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3.5 rounded-[980px] flex items-center justify-center gap-3 transition-all duration-400 ease-out w-full sm:w-auto font-styrene font-normal text-base group shadow-[0_4px_16px_rgba(0,113,227,0.25)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.35)]"
              >
                View My Work
                <ArrowRight size={18} className="transition-transform duration-400 ease-out group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1dmq5rSO7_D5azSaV5xRLrH3-1T1_wvbD/view?usp=sharing', '_blank')}
                className="border border-[#0071e3] hover:border-[#0071e3] hover:bg-[#0071e3] hover:text-white text-[#0071e3] px-8 py-3.5 rounded-[980px] flex items-center justify-center gap-3 transition-all duration-400 ease-out w-full sm:w-auto font-styrene font-normal text-base group bg-transparent"
              >
                <Download size={18} className="transition-transform duration-400 ease-out" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
