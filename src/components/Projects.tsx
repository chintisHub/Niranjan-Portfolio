import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Database, Brain, BarChart3, Zap, TrendingUp, Building2, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '@/utils/pathUtils';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 'gophergauge',
      title: "GopherGauge",
      description: "Distributed Database Benchmarking Framework in Go",
      icon: Database,
      category: "Distributed Systems",
      tech: ["Go", "Cassandra", "Redis", "Etcd", "CockroachDB", "Goroutines", "Distributed Systems"],
      fullDescription: "Developed a Go-based Database benchmarking tool with goroutine pools, modular drivers (SQL/NoSQL: Cassandra, Redis, Etcd, CockroachDB), scaling to 50 nodes & 100k requests with <10ms p95 latency.",
      features: ["Goroutine-based concurrency", "Modular database drivers", "High-performance benchmarking", "Sub-10ms p95 latency", "Scalable to 50 nodes", "SQL and NoSQL support"],
      challenges: "Building a high-performance benchmarking framework that can handle 100k+ requests across multiple database types while maintaining low latency and accurate metrics.",
      solution: "Implemented efficient goroutine pools with modular driver architecture, enabling concurrent testing across multiple database systems with minimal overhead and precise performance measurements.",
      image: getAssetPath("/gophergauge.png")
    },
    {
      id: 'collaborative-editor',
      title: "Collaborative Text Editor",
      description: "Real-time Google Docs replica with CRDT synchronization",
      icon: Brain,
      category: "Full-Stack",
      tech: ["Next.js", "TipTap", "ProseMirror", "Yjs", "CRDT", "WebSockets", "Real-time Sync"],
      fullDescription: "Built a real-time text editor with Next.js, TipTap/ProseMirror, and Yjs (CRDT) over WebSockets, supporting offline-safe merges, multi-cursor presence, autosave, and secure role-based sharing.",
      features: ["Real-time collaboration", "CRDT conflict resolution", "Offline-safe merges", "Multi-cursor presence", "Autosave functionality", "Role-based access control"],
      challenges: "Implementing conflict-free concurrent editing with offline support while maintaining real-time synchronization and user presence across multiple clients.",
      solution: "Leveraged Yjs CRDT library for conflict-free merges, WebSocket connections for real-time updates, and implemented sophisticated state management for cursor presence and offline editing.",
      image: getAssetPath("/collaborative-editor.png")
    },
    {
      id: 'pintos-os',
      title: "PINTOS Operating System",
      description: "Enhanced Unix-like OS kernel with advanced scheduling",
      icon: Building2,
      category: "Systems Programming",
      tech: ["C", "x86 Assembly", "Operating Systems", "Kernel Development", "Threading", "Scheduling"],
      fullDescription: "Enhanced a Unix-like OS kernel (C, x86) with priority donation, MLFQ scheduling, and synchronization primitives, refactoring 5K+ LOC to achieve 90%+ test coverage and 30% faster multithreaded performance.",
      features: ["Priority donation", "MLFQ scheduling", "Synchronization primitives", "90%+ test coverage", "30% performance improvement", "Thread management"],
      challenges: "Implementing complex scheduling algorithms and synchronization mechanisms in a low-level kernel environment while maintaining stability and performance.",
      solution: "Refactored 5000+ lines of kernel code with careful attention to race conditions, implemented comprehensive test suites, and optimized critical paths for multithreaded workloads.",
      image: getAssetPath("/pintos.png")
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleViewAll = () => {
    navigate('/projects');
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced background */}
      {/* <div className="absolute inset-0 bg-white"></div> */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-xl px-6 md:px-12 py-12 md:py-20 rounded-[2.5rem] relative overflow-hidden border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="relative z-10">
          {/* Enhanced section header */}
          <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-sm font-medium text-[#86868b] mb-3 tracking-wide">
                PORTFOLIO
              </h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] font-styrene tracking-tight">
                Featured Projects
              </h3>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed font-normal mt-4">
              A showcase of distributed systems, full-stack development, and systems programming projects
            </p>
          </div>

          {/* Enhanced project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className="block cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out overflow-hidden hover:scale-[1.02] cursor-pointer h-full bg-white/80 backdrop-blur-xl border border-gray-200/50">
                    {/* Enhanced project image/icon area */}
                    <div className="aspect-[16/10] bg-[#f5f5f7] relative overflow-hidden flex items-center justify-center p-8">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      )}
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-700 ease-out shadow-[0_4px_16px_rgb(0,0,0,0.08)] border border-gray-200/50 mb-4">
                          <IconComponent size={28} className="text-[#1d1d1f]" />
                        </div>
                        <div className="text-center">
                          <span className="inline-block px-3 py-1.5 bg-white/80 text-[#86868b] text-xs rounded-full font-normal border border-gray-200/50">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      {/* Removed animated background elements for cleaner Apple look */}
                    </div>

                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-400 ease-out line-clamp-2 flex-1 pr-2 font-styrene">
                          {project.title}
                        </h4>
                        <ArrowRight
                          size={20}
                          className="text-[#86868b] group-hover:text-[#0071e3] group-hover:translate-x-2 transition-all duration-400 ease-out flex-shrink-0"
                        />
                      </div>
                      <p className="text-[#86868b] mb-4 text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-[#f5f5f7] text-[#1d1d1f] text-xs rounded-full font-normal border border-gray-200/50 hover:bg-gray-100 transition-all duration-300 ease-out"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1.5 bg-[#f5f5f7] text-[#1d1d1f] text-xs rounded-full font-normal border border-gray-200/50">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Enhanced call-to-action */}
          <div className="text-center animate-fade-in delay-700">
            <div className="inline-block bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <p className="text-[#86868b] mb-4 text-lg font-normal">
                Interested in seeing more of my work?
              </p>
              <Button
                onClick={handleViewAll}
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3.5 rounded-[980px] transition-all duration-400 ease-out shadow-[0_4px_16px_rgba(0,113,227,0.25)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.35)] font-styrene font-normal group"
              >
                View All Projects
                <ArrowRight size={18} className="ml-2 transition-transform duration-400 ease-out group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Projects;
