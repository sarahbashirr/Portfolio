import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, ArrowRight, Download, GraduationCap } from 'lucide-react';

// Define interfaces for type safety
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  featured: boolean;
  category: string;
  code?: string;
  demo?: string;
  preview?: string;
  pdf?: string;
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectFilter, setProjectFilter] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'education', 'about', 'skills', 'projects', 'experience'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/pdfs/SarahBashirCV.pdf'; // Path to your CV in the public folder
    link.download = 'SarahBashirCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { 
      icon: <Code className="w-8 h-8" />, 
      title: 'Frontend Development', 
      desc: 'React, Next.js, TypeScript, HTML, CSS, Tailwind CSS' 
    },
    { 
      icon: <Database className="w-8 h-8" />, 
      title: 'Backend Development', 
      desc: 'Laravel, Firebase, MySQL, APIs' 
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: 'Full Stack Development', 
      desc: 'React + Laravel, MERN stack basics, Cloud Services' 
    },
    { 
      icon: <Palette className="w-8 h-8" />, 
      title: 'Graphic Design', 
      desc: 'Adobe Illustrator, Photoshop, Figma, Logo & Social Media Design', 
    }
  ];

  const projects: Project[] = [
    {
        id: 1,
        title: 'Tabashir, Tutoring Platform',
        description: 'Website in progress, connecting students and tutors with personalized browsing, booking, and chat features.',
        longDescription: 'Tabashir is an intuitive tutoring platform that allows students to browse and filter tutors based on their preferences, while enabling tutors to create profiles, manage availability, and communicate with students. Built with Next.js, TypeScript, and Tailwind CSS, the platform provides seamless booking, consultation scheduling, and chat functionality, ensuring a personalized and efficient learning experience for both students and tutors.',
        tech: ['React', 'Next.js', 'Tailwind', 'Firebase', 'TypeScript'],
        featured: false,
        category: 'Full Stack',
        preview: '/images/tabashir.landing.png'
      },
    {
      id: 2,
      title: 'Medical Platform',
      description: 'React for frontend and Laravel for backend with OpenAI API integration',
      longDescription: 'Medicare Platform is a full-stack healthcare web application where users can log in as patients or doctors, each with their own profile. Patients can book appointments, receive reminders, and consult doctors, while doctors can accept or decline requests. The platform also integrates OpenAI-powered health assistance, allowing patients to input symptoms and get preliminary AI-driven guidance. Built with React, Laravel, Firebase, and MySQL, it combines a responsive frontend with a robust backend for a seamless healthcare experience.',
      tech: ['React', 'Laravel', 'PHP', 'MySQL', 'APIs'],
      code: 'https://github.com/sarahbashirr/Medicare.git',
      featured: true,
      category: 'Full Stack'
    },
    {
        id: 3,
        title: 'Admin Panel for Service Provider App',
        description: 'An internship project, Admin Panel web app built for managing users, service providers, requests, appointments, reviews, and roles with real-time updates and secure access.',
        longDescription: 'An Admin Panel web app built with React, TypeScript, and Firebase, allowing administrators to manage users, service providers, requests, appointments, reviews, and roles with real-time updates and role-based access control.',
        tech: ['React', 'Tailwind', 'TypeScript' ,'Node.js', 'Firebase'],
        featured: true,
        category: 'Full Stack'
      },
    {
      id: 4,
      title: 'Hospital Management System',
      description: 'Fully Functioning JavaFX Application with MySQL Database Connection, including seamless communication between front-end and back-end.',
      longDescription: 'Fully Functioning JavaFX Application with MySQL Database Connection, including seamless communication between front-end and back-end. Includes Admin interface where patients, appointments and other data fields can be fully manipulated using MySQL.',
      tech: ['JavaFX', 'MySQL'],
      code: 'https://github.com/sarahbashirr/JavaFx-Hospital-Management-System.git',
      featured: false,
      category: 'Full Stack'
    },
    {
        id: 5,
        title: 'Destination Website',
        description: 'Designed using HTML & CSS for front-end, as well as JavaScript and JSON array for storage.',
        longDescription: 'Destination Website is a frontend-focused web application built with HTML, CSS, and JavaScript. It allows users to add, remove, and search cities based on categories, making it easy to explore different destinations. The interface emphasizes user-friendly design and interactive functionality, providing a seamless experience for browsing and managing city information.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        demo: 'https://destinationwebsite.netlify.app/',
        code: 'https://github.com/sarahbashirr/HTML-CSS-JS-travel-website.git',
        featured: false,
        category: 'Frontend'
      },
    {
      id: 6,
      title: 'Hotel Management System',
      description: 'Developed using C++ while implementing the principles of Data Structures and OOP programming.',
      longDescription: 'Developed using C++ while applying the principles of Data Structures and Object-Oriented Programming (OOP). The project features dedicated sections for a hotel, spa, and gym, each supporting full CRUD (Create, Read, Update, Delete) operations with all data stored in Excel files. Additionally, linked pricing functionality allows users to select services across these sections, with the system automatically calculating the total cost based on the chosen options.',
      tech: ['C++'],
      code: 'https://github.com/sarahbashirr/Cpp-Hotel-Management-System.git',
      featured: false,
      category: 'Frontend'
    },
    {
        id: 7,
        title: 'UX/UI Design, Medicare',
        description: 'User-centered design for a healthcare platform connecting patients with doctors.',
        longDescription: 'A complete UX/UI design project for the Medicare web application. Using a user-centered approach, the design process included user research, wireframing, and prototyping in Figma. The focus was on creating an intuitive interface where patients can search for doctors by specialization, view real-time availability, and book appointments seamlessly. The final design emphasizes accessibility, clear navigation, and a modern healthcare aesthetic.',
        tech: ['Figma', 'Wire framing', 'Prototyping'],
        featured: false,
        category: 'UX/UI',
        pdf: '/pdfs/ux-ui-project-1.pdf'
      },
      {
        id: 8,
        title: 'Ethereal Escapes',
        description: 'A 3-page travel website design highlighting destinations, experiences, and easy navigation.',
        longDescription: 'A UX/UI project creating a 3-page destination website in Figma. The design showcases a clean and modern travel aesthetic, with pages for the homepage, destination listings, and a detail view. The focus was on intuitive navigation, engaging visuals, and a layout that inspires users to explore travel options. The project demonstrates skills in wireframing, visual hierarchy, and prototyping for a seamless browsing experience.',
        tech: ['Figma','Accessibility'],
        featured: false,
        category: 'UX/UI',
        pdf: '/pdfs/ux-ui-project-2.pdf'
      },
  ];

  // Define the filter categories explicitly
  const projectCategories = ['All', 'Frontend', 'Full Stack', 'UX/UI'];

  // Map your projects to the new categories
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(project => {
        const categoryMap: { [key: string]: string } = {
          'Frontend': 'Frontend',
          'Full Stack': 'Full Stack',
          'Graphic Design': 'Graphic Design',
          'UX/UI': 'UX/UI'
        };
        return categoryMap[project.category] === projectFilter;
      });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'education', 'about', 'skills', 'projects', 'experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'education', 'about', 'skills', 'projects', 'experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base capitalize text-gray-300 hover:text-blue-400 transition-colors w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <img
                  src="/images/profile.jpeg"
                  alt="Sarah Bashir"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Sarah Bashir
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through code and design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              View My Work <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-3 border border-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              Download CV <Download size={18} />
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/sarahbashirr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sarah-bashir-2607242a3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sarahbashir2005@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="bg-gray-900/50 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 hover:border-blue-500/30">
            <div className="flex items-start gap-6">
              <div className="text-blue-400 mt-2">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
                <h4 className="text-xl text-blue-400 mb-3">Antonine University</h4>
                <p className="text-gray-300 mb-4">September 2022 - December 2025</p>
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing a Bachelor's degree in Computer Science, focusing on software development, 
                  data structures, algorithms, and full-stack web development. Gaining comprehensive knowledge 
                  in programming languages, database management, and modern development frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <h3 className="text-2xl font-bold mb-6 text-blue-400">
            I'm Sarah, a passionate developer
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi! I'm Sarah Bashir, a computer science student and full-stack developer. I build user-friendly web and mobile apps using React, Next.js, TypeScript, Laravel, Firebase, and SQL databases, combining clean frontend design with robust backend logic.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            When I'm not coding, I enjoy graphic design, creating logos, and designing social media posts. I'm always excited to collaborate on projects and continue growing as a developer.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">2 Years Developing</span>
            <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-300">Remote Friendly</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-300">Available for Hire</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 group border border-gray-800 hover:border-blue-500/30">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
                <p className="text-gray-400 mb-4">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 
                'Next.js', 
                'TypeScript', 
                'Laravel', 
                'Firebase', 
                'MySQL', 
                'HTML', 
                'CSS', 
                'Tailwind CSS', 
                'C++',
                'C',
                'Figma', 
                'Adobe Illustrator', 
                'Adobe Photoshop',
                'Azure'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 cursor-default border border-gray-700 hover:border-blue-500/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setProjectFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  projectFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 group border border-gray-800 hover:border-blue-500/30">
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm border border-gray-700">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.preview && (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink size={16} /> Preview Landing
                      </button>
                    )}
                    
                    {project.pdf && (
                      <a 
                        href={project.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink size={16} /> View PDF
                      </a>
                    )}

                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    
                    {project.code && (
                      <a 
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}

                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-600 hover:text-blue-500 transition-colors ml-auto"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-800"></div>

            {/* 42 Beirut Piscine */}
            {/* 42 Beirut Piscine */}
            <div className="relative flex items-center mb-12 md:flex-row">
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full border-4 border-black"></div>
              <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
                <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">42 Beirut Piscine</h3>
                    <span className="text-blue-400 font-semibold">Month-long</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    At 42 Beirut, I completed the Piscine, an intensive, month-long coding bootcamp where I worked on a series of C programming projects under pressure. The peer-to-peer evaluation system helped me improve through collaborative feedback while developing strong problem-solving skills in a competitive environment. This experience taught me to adapt quickly, work independently, and manage time effectively in high-stress situations.
                  </p>
                </div>
              </div>
            </div>

            {/* Diraya Internship */}
            <div className="relative flex items-center mb-12 md:flex-row-reverse">
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full border-4 border-black"></div>
              <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Diraya Internship</h3>
                    <span className="text-blue-400 font-semibold">Internship</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    During my internship at Diraya, I worked on an admin panel for a service provider app. I used React and Firebase to implement CRUD operations, ensuring smooth functionality for users and administrators. This experience strengthened my full-stack development skills and gave me practical exposure to real-world project workflows, collaborative coding, and deploying functional web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors border border-gray-600 z-10"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              {/* Show preview image if it's the Tabashir project */}
              {selectedProject.preview && (
                <div className="mb-6">
                  <img 
                    src={selectedProject.preview}
                    alt={`${selectedProject.title} Landing Page`}
                    className="w-full h-auto object-contain rounded-lg border border-gray-700"
                  />
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-500/30">
                  {selectedProject.category}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 rounded-lg text-gray-300 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.pdf && (
                  <a 
                    href={selectedProject.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> View PDF
                  </a>
                )}
                
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {selectedProject.code && (
                  <a 
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Github size={18} /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;