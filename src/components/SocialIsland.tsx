import { Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const SocialIsland = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sai-niranjan-nallam-920a59184/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/theniranjann/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/chintisHub', label: 'Github' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg rounded-full px-4 py-2">
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-600 hover:text-gray-800 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIsland;
