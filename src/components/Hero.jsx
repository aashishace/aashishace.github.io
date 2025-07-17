import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import profileImage from '../assets/1728299807332.jpg'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-elevated" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-indigo/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left side - Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block text-text-primary">Aashish Ace</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-text-secondary mb-4">
                M.Sc IT with expertise in #Android, #Python,
              </p>
              <p className="text-lg md:text-xl text-text-secondary">
                #Flutter, #Firebase, #NodeJS & #React.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block bg-dark-elevated border border-dark-border rounded-lg px-4 py-2">
                <span className="text-text-secondary text-sm">Currently Senior Software Engineer @ </span>
                <span className="text-brand-indigo font-medium">Directi</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={scrollToAbout}
                className="btn-primary"
              >
                Me
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Work
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Blog
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Contact
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Profile image container with glow effect */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo via-accent-purple to-brand-indigo-light rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-dark-bg rounded-full p-4">
                    <img
                      src={profileImage}
                      alt="Aashish Ace - Full-Stack Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-dark-elevated border border-dark-border rounded-lg px-3 py-2 shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium text-brand-indigo">📱 Mobile Apps</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-dark-elevated border border-dark-border rounded-lg px-3 py-2 shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-sm font-medium text-accent-green">⚛️ Backend, Frontend</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 bg-dark-elevated border border-dark-border rounded-lg px-3 py-2 shadow-lg"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium text-accent-purple">🔥 Solopreneur, Ad-Tech</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-8 bg-dark-elevated border border-dark-border rounded-lg px-3 py-2 shadow-lg"
                animate={{ x: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-sm font-medium text-accent-yellow">💡 Consultant</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
