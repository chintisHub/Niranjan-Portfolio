import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Database, Brain, Building2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '@/utils/pathUtils';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const projects = [
    {
      id: 'gophergauge',
      title: "GopherGauge",
      description: "Distributed Database Benchmarking Framework in Go",
      icon: Database,
      category: "Distributed Systems",
      tech: ["Go", "Cassandra", "Redis", "Etcd", "CockroachDB", "Goroutines"],
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
      tech: ["Next.js", "TipTap", "ProseMirror", "Yjs", "CRDT", "WebSockets"],
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
      tech: ["C", "x86 Assembly", "Operating Systems", "Kernel Development", "MLFQ"],
      fullDescription: "Enhanced a Unix-like OS kernel (C, x86) with priority donation, MLFQ scheduling, and synchronization primitives, refactoring 5K+ LOC to achieve 90%+ test coverage and 30% faster multithreaded performance.",
      features: ["Priority donation", "MLFQ scheduling", "Synchronization primitives", "90%+ test coverage", "30% performance improvement", "Thread management"],
      challenges: "Implementing complex scheduling algorithms and synchronization mechanisms in a low-level kernel environment while maintaining stability and performance.",
      solution: "Refactored 5000+ lines of kernel code with careful attention to race conditions, implemented comprehensive test suites, and optimized critical paths for multithreaded workloads.",
      image: getAssetPath("/pintos.png")
    }
  ];

  const categories = ['All', 'Distributed Systems', 'Full-Stack', 'Systems Programming'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialIsland />

      <main className="pt-24 pb-20 px-2 md:px-6 relative">
        <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-4 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
          <div className="mb-8">
            <Button
              onClick={handleBackClick}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-gray-50 text-black hover:text-gray-600 bg-white/20 backdrop-blur-md"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                All Projects
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              A showcase of distributed systems, full-stack development, and systems programming projects
            </p>
          </div>

          {/* Category Filter Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2 font-styrene">
                Filter by Category
              </h2>
              <p className="text-slate-600">
                Explore projects by their domain and technology focus
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm min-w-[140px] ${
                    selectedCategory === category
                      ? 'bg-slate-900 text-white shadow-xl scale-105 border-2 border-slate-900'
                      : 'bg-white/80 text-slate-700 hover:bg-white border-2 border-white/60 hover:border-slate-300 hover:shadow-lg hover:scale-102'
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="ml-2 text-xs opacity-75">
                      ({filteredProjects.length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active filter indicator */}
            {selectedCategory !== 'All' && (
              <div className="text-center mt-4">
                <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  Showing {filteredProjects.length} {selectedCategory} projects
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    ✕
                  </button>
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className="block cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 cursor-pointer h-full bg-white/70 backdrop-blur-md border border-white/50">
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50/90 to-slate-100/90 relative overflow-hidden flex items-center justify-center p-6">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      )}
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg mb-3 border border-white/60">
                          <IconComponent size={24} className="text-slate-700" />
                        </div>
                        <div className="text-center">
                          <span className="inline-block px-3 py-1 bg-white/70 text-slate-600 text-xs rounded-full font-medium border border-white/50">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 pr-2 font-styrene">
                          {project.title}
                        </h3>
                        <ArrowRight
                          size={18}
                          className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                        />
                      </div>
                      <p className="text-slate-600 mb-3 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/80 text-slate-700 text-xs rounded-full font-medium border border-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-xs rounded-full font-medium border border-blue-200/50">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Projects;
