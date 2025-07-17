import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Smartphone, Globe, Database, Palette } from 'lucide-react'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const projectsGridRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const projects = [
    {
      id: 1,
      title: "Angrezistan - English Learning Platform",
      description: "Currently ongoing project - A comprehensive English learning platform helping users improve their language skills with interactive lessons, practice exercises, and progress tracking.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Education"],
      category: "web",
      status: "in-progress",
      liveUrl: "#",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      featured: false
    },
    {
      id: 2,
      title: "DroneX - Drone Delivery Services",
      description: "India's first drone delivery service for FMCG and other services. Revolutionary platform enabling fast and efficient delivery through drone technology.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
      tags: ["React Native", "IoT", "GPS", "Logistics"],
      category: "mobile",
      status: "in-progress",
      liveUrl: "#",
      githubUrl: "#",
      icon: <Smartphone className="w-5 h-5" />,
      featured: false
    },
    {
      id: 3,
      title: "BestRide - Ride Hailing Aggregator",
      description: "Ongoing mobile app project - A comprehensive ride hailing aggregator platform connecting riders with multiple transport services for seamless urban mobility.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      tags: ["React Native", "GPS", "Real-time", "Payments"],
      category: "mobile",
      status: "in-progress",
      liveUrl: "#",
      githubUrl: "#",
      icon: <Smartphone className="w-5 h-5" />,
      featured: false
    },
    {
      id: 4,
      title: "Siena Film",
      description: "Professional film production website showcasing cinematic projects, portfolios, and production services with elegant design and smooth animations.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop",
      tags: ["React", "Framer Motion", "Creative", "Portfolio"],
      category: "web",
      status: "completed",
      liveUrl: "https://www.siena.film/",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      featured: true
    },
    {
      id: 5,
      title: "Aether1.ai",
      description: "Collaboration project - AI-powered platform with advanced specifications and cutting-edge technology solutions, featuring modern UI/UX design.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["React", "AI/ML", "TypeScript", "Next.js"],
      category: "web",
      status: "completed",
      liveUrl: "https://www.aether1.ai/specs",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      featured: true
    },
    {
      id: 6,
      title: "Dial ERP",
      description: "Comprehensive enterprise solution - Complete ERP system with advanced business management capabilities, multi-module architecture, and real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Express", "PostgreSQL", "Enterprise"],
      category: "web",
      status: "completed",
      liveUrl: "https://www.dialerp.com/",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      featured: true
    },
    {
      id: 7,
      title: "Microservices API Gateway",
      description: "Scalable microservices architecture with API gateway, service discovery, load balancing, and comprehensive monitoring. Built for high-traffic applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tags: ["Node.js", "Docker", "Kubernetes", "Redis"],
      category: "backend",
      status: "completed",
      liveUrl: "#",
      githubUrl: "https://github.com/aashishace/microservices-gateway",
      icon: <Database className="w-5 h-5" />,
      featured: false
    },
    {
      id: 8,
      title: "Real-time Chat System",
      description: "Production-ready chat application with WebSocket support, message encryption, file sharing, and scalable architecture supporting thousands of concurrent users.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      tags: ["Socket.io", "Redis", "MongoDB", "WebRTC"],
      category: "backend",
      status: "completed",
      liveUrl: "#",
      githubUrl: "https://github.com/aashishace/realtime-chat",
      icon: <Database className="w-5 h-5" />,
      featured: false
    },
    {
      id: 9,
      title: "Dealsify - Deal Aggregator",
      description: "Smart deal aggregation platform with ML-powered recommendations, price tracking, real-time notifications, and comprehensive deal analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Machine Learning", "Web Scraping", "Analytics"],
      category: "web",
      status: "completed",
      liveUrl: "https://www.dealsify.in/",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      featured: false
    },
    {
      id: 10,
      title: "Rugby Ranker",
      description: "Android app for viewing and predicting international rugby rankings. Features live scores, fixtures, results, and 'Points Exchange' system for predictions.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      tags: ["Android", "Kotlin", "API Integration", "Sports"],
      category: "mobile",
      status: "completed",
      liveUrl: "https://play.google.com/store/apps/details?id=com.ricknout.rugbyranker&hl=en",
      githubUrl: "#",
      icon: <Smartphone className="w-5 h-5" />,
      featured: false
    },
    {
      id: 11,
      title: "White Bills Pro",
      description: "Professional accounting application from Dial ERP. Helps companies manage billing, payment pickup, unlimited agents, and secure pickup assignments.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tags: ["Android", "ERP", "Accounting", "Business"],
      category: "mobile",
      status: "completed",
      liveUrl: "https://play.google.com/store/apps/details?id=com.whitebills.pro&hl=en",
      githubUrl: "#",
      icon: <Smartphone className="w-5 h-5" />,
      featured: false
    },
    {
      id: 12,
      title: "Beat Plan - Field Force Automation",
      description: "Revolutionary field force automation app with customer profiling, live schemes, order prediction, GPS-based coverage, and employee performance tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Android", "GPS", "CRM", "Analytics"],
      category: "mobile",
      status: "completed",
      liveUrl: "https://play.google.com/store/apps/details?id=com.beatplan.plus&hl=en",
      githubUrl: "#",
      icon: <Smartphone className="w-5 h-5" />,
      featured: false
    },
    {
      id: 13,
      title: "Furnishka - Furniture Ecommerce",
      description: "Complete furniture store ecommerce platform with product catalog, shopping cart, payment integration, and inventory management.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      tags: ["React", "Ecommerce", "Payments", "Inventory"],
      category: "web",
      status: "completed",
      liveUrl: "https://www.furnishka.com/",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      featured: false
    },
    {
      id: 14,
      title: "GraphQL API Boilerplate",
      description: "Production-ready GraphQL API boilerplate with authentication, authorization, caching, and comprehensive testing. Open source template for rapid development.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tags: ["GraphQL", "Apollo", "PostgreSQL", "Jest"],
      category: "backend",
      status: "completed",
      liveUrl: "#",
      githubUrl: "https://github.com/aashishace/graphql-boilerplate",
      icon: <Database className="w-5 h-5" />,
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  // Function to handle filter changes with smooth scrolling
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    
    // If not "all", scroll to the projects grid
    if (filterId !== 'all' && projectsGridRef.current) {
      setTimeout(() => {
        projectsGridRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    }
  }

  // Get section title based on active filter
  const getSectionTitle = () => {
    const filterLabels = {
      'all': 'All Projects',
      'mobile': 'Mobile Apps',
      'web': 'Web Applications',
      'backend': 'Backend Projects'
    }
    return filterLabels[activeFilter] || 'All Projects'
  }

  return (
    <section id="projects" className="section-padding bg-dark-bg-alt">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              A showcase of my recent work across mobile apps, web applications, and backend systems
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-accent-purple mx-auto rounded-full"></div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/25'
                    : 'bg-dark-elevated border border-dark-border text-text-secondary hover:border-brand-indigo-light hover:text-text-primary'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-75">({filter.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Featured Projects Section - Only show when 'all' filter is active */}
          {activeFilter === 'all' && (
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
                ✨ Featured Projects
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <motion.div
                    key={`featured-${project.id}`}
                    variants={itemVariants}
                    className="card group hover:scale-105 transition-transform duration-300 border-2 border-brand-indigo/20"
                    whileHover={{ y: -5 }}
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-brand-indigo to-accent-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>

                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-lg mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Action Buttons */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.status === 'completed' && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-brand-indigo hover:bg-brand-indigo-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-elevated border border-dark-border hover:border-brand-indigo-light text-text-secondary hover:text-text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {project.title}
                        </h3>
                        <div className="text-brand-indigo">
                          {project.icon}
                        </div>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-dark-bg border border-dark-border rounded-lg text-xs font-medium text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Projects Section with Dynamic Title */}
          <motion.div variants={itemVariants} className="mb-8" ref={projectsGridRef}>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
              {getSectionTitle()}
            </h3>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed'
                        ? 'bg-accent-green/20 text-accent-green border border-accent-green/30'
                        : 'bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/30'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.status === 'completed' && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-brand-indigo hover:bg-brand-indigo-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.status === 'in-progress' && (
                      <div className="flex-1 bg-accent-yellow/20 border border-accent-yellow/30 text-accent-yellow px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></span>
                        In Development
                      </div>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-elevated border border-dark-border hover:border-brand-indigo-light text-text-secondary hover:text-text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <div className="text-brand-indigo">
                      {project.icon}
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-bg border border-dark-border rounded-lg text-xs font-medium text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="https://github.com/aashishace"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View More Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
