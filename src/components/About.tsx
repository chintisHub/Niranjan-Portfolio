
import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';
import { Card, CardContent } from '@/components/ui/card';
import { getAssetPath } from '@/utils/pathUtils';

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [selectedEducation, setSelectedEducation] = useState<any>(null);

  const experiences = [
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      period: "May 2025 - Aug 2025",
      image: getAssetPath("/amazon.png"),
      details: "Engineered a Rust-based tool leveraging CloudWatch + Protobuf/S3 to map cluster/partition lifecycles, cutting investigation time from hours to seconds in large-scale distributed systems. Deployed an interactive dashboard (Leptos/Rust WASM, Vanilla JS, DaisyUI) to visualize lifecycle data, reducing incident resolution time by 95%.",
      technologies: ["Rust", "CloudWatch", "Protobuf", "S3", "Leptos", "WASM", "JavaScript", "DaisyUI", "Distributed Systems"],
      achievements: [
        "Engineered Rust-based tool for cluster/partition lifecycle mapping, cutting investigation time from hours to seconds",
        "Deployed interactive dashboard reducing incident resolution time by 95%",
        "Built scalable solution for large-scale distributed systems monitoring"
      ]
    },
    {
      company: "Darwinbox",
      role: "Software Engineer 2",
      period: "Apr 2022 - Jul 2024",
      image: getAssetPath("/darwinbox.png"),
      details: "Designed and implemented Power BI microservices (Sync, Auth, Orchestration, Alerting, Worker, Notification), boosting analytics adoption by 40% and cutting manual work by 90%. Led migrations to React.js/MongoDB/NodeJs/Express.js, refactoring legacy modules to modern standards, improving functionality, reducing technical debt, and streamlining QA feedback cycles. Implemented advanced caching + indexing, improving execution speed and end-user real-time interactions by 60%. Built an alerting microservice to rapidly identify incidents and trigger automated notifications, improving system dependability and reducing service disruptions by 70%. Directed a team of three engineers on FinTrack, a personal finance app, integrating Stripe API and scheduled CronJobs to improve payment workflows and reduce transaction errors by 40%.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Power BI", "Microservices", "Redis", "Stripe API", "CronJobs"],
      achievements: [
        "Designed and implemented Power BI microservices, boosting analytics adoption by 40% and cutting manual work by 90%",
        "Led migrations to React.js/MongoDB/NodeJs/Express.js, improving functionality and reducing technical debt",
        "Implemented advanced caching + indexing, improving execution speed by 60%",
        "Built alerting microservice reducing service disruptions by 70%",
        "Directed team of three engineers on FinTrack, reducing transaction errors by 40%"
      ]
    },
    {
      company: "Tredence Inc.",
      role: "Software Engineer 1 (Analyst)",
      period: "Jul 2021 - Mar 2022",
      image: getAssetPath("/tredence.png"),
      details: "Created robust unit test suites with JUnit + TestNG, adding mocks/stubs for external services, enabling automated test data generation and high CI/CD pipeline quality. Optimized ETL workflows using Jupyter Notebooks, Google Sheets API, AWS S3, and Python automation, ensuring seamless data integration and reduced manual effort.",
      technologies: ["Java", "JUnit", "TestNG", "Python", "AWS S3", "ETL", "CI/CD", "Jupyter Notebooks", "Google Sheets API"],
      achievements: [
        "Created robust unit test suites with JUnit + TestNG for high CI/CD pipeline quality",
        "Optimized ETL workflows using Python automation and AWS S3",
        "Enabled automated test data generation with mocks/stubs for external services"
      ]
    },
    {
      company: "Exposys Data Labs",
      role: "Software Developer Intern",
      period: "Jul 2020 - Jun 2021",
      image: getAssetPath("/exposys.png"),
      details: "Refactored a legacy micro-frontend (React.js, TypeScript, GraphQL, Docker, NGINX), boosting performance by 40% and enabling independent deployments. Migrated infrastructure to AWS (EC2, S3, CloudFront, Route 53) with Terraform + Jenkins, automating deployments and reducing release downtime.",
      technologies: ["React.js", "TypeScript", "GraphQL", "Docker", "NGINX", "AWS", "Terraform", "Jenkins", "EC2", "S3", "CloudFront"],
      achievements: [
        "Refactored legacy micro-frontend boosting performance by 40%",
        "Migrated infrastructure to AWS with Terraform + Jenkins",
        "Enabled independent deployments and reduced release downtime"
      ]
    }
  ];

  const educations = [
    {
      institution: "University at Buffalo",
      degree: "Master of Science in Computer Science",
      period: "Aug 2024 - Dec 2025",
      image: getAssetPath("/ub.png"),
      details: "Focused on advanced algorithms, operating systems, computer architecture, and modern network concepts. Building expertise in distributed systems, system design, and software engineering fundamentals.",
      coursework: ["Algorithms", "Machine Learning", "Operating Systems", "Computer Architecture", "Modern Network Concepts"]
    },
    {
      institution: "Indian Institute of Technology Patna",
      degree: "Bachelor of Technology in Engineering",
      period: "Aug 2017 - May 2021",
      image: getAssetPath("/iitp.png"),
      details: "Built strong foundations in computer science, data structures, and system design. Completed coursework in programming, databases, security, and data science. Developed analytical and problem-solving skills through rigorous engineering curriculum.",
      coursework: ["C & Data Structures", "Computer Security", "DBMS", "Python Programming", "Data Science", "Statistical Analysis"]
    }
  ];

  return (
    <section id="about" className="py-20 px-2 md:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* About Me Section */}
        <div 
          className="text-center"
        >
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Background & Experience
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
          </div>

            <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-slate-800 leading-relaxed font-styrene">
              <p>
                I am Sai Niranjan Nallam, a Software Engineer with over 3 years of experience in full-stack development,
                distributed systems, and cloud infrastructure. I specialize in building scalable microservices,
                high-performance systems, and cloud-native applications across various technology stacks.
              </p>
              <p>
                My expertise spans across backend engineering, system design, and cloud platforms (AWS, Azure), where I have contributed to
                building and optimizing microservices architectures, ETL pipelines, and real-time systems. Currently pursuing my Master of Science
                in Computer Science at the University at Buffalo, I previously worked as a Software Engineer at Darwinbox and interned at Amazon.
              </p>
              <p>
                My motivation lies in leveraging modern technologies, distributed systems, and cloud platforms to build scalable solutions
                that solve complex real-world problems, with a focus on system reliability, performance optimization, and clean architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">


            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Professional Experience
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              A journey through innovative companies where I've built scalable data solutions
            </p>
          </div>
            <div className="grid gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Company Image with Grey Background */}
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 bg-gray-100">
                          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img 
                              src={exp.image} 
                              alt={exp.company}
                              className={`object-contain rounded-full hover:scale-120 transition-transform duration-300 w-64 h-64 scale-125`}
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h5 className="text-2xl font-bold text-black mb-2 font-styrene group-hover:text-slate-700 transition-colors">
                                {exp.company}
                              </h5>
                              <p className="text-slate-700 font-medium text-lg mb-2 font-styrene">
                                {exp.role}
                              </p>
                            </div>
                            <span className="inline-block bg-white/60 text-slate-800 text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-slate-700 mb-6 leading-relaxed">
                            {exp.details.substring(0, 150)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="text-xs bg-white/60 text-slate-700 px-3 py-1 rounded-full border border-white/40 hover:bg-white/80 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 6 && (
                              <span className="text-xs text-slate-600 px-2 py-1">
                                +{exp.technologies.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Education Section */}
        <div>
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">

            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Academic Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Educational foundation that shaped my analytical thinking and technical expertise
            </p>
          </div>
            <div className="grid gap-8">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedEducation(edu)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Institution Image with Grey Background */}
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 bg-gray-100">
                          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img 
                              src={edu.image} 
                              alt={edu.institution}
                              className="w-28 h-28 object-contain rounded-full hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h5 className="text-2xl font-bold text-black mb-2 font-styrene group-hover:text-slate-700 transition-colors">
                                {edu.institution}
                              </h5>
                              <p className="text-slate-700 font-medium text-lg mb-2 font-styrene">
                                {edu.degree}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="inline-block bg-white/60 text-slate-800 text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap">
                                {edu.period}
                              </span>
                              {edu.gpa && (
                                <span className="inline-block bg-green-50/80 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
                                  GPA: {edu.gpa}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-slate-700 mb-6 leading-relaxed">
                            {edu.details.substring(0, 150)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.slice(0, 6).map((course, courseIndex) => (
                              <span 
                                key={courseIndex} 
                                className="text-xs bg-white/60 text-slate-700 px-3 py-1 rounded-full border border-white/40 hover:bg-white/80 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                            {edu.coursework.length > 6 && (
                              <span className="text-xs text-slate-600 px-2 py-1">
                                +{edu.coursework.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedExperience && (
        <ExperienceModal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />
      )}

      {selectedEducation && (
        <EducationModal
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          education={selectedEducation}
        />
      )}
    </section>
  );
};

export default About;
