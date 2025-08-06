import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, MapPin, Calendar, CreditCard } from 'lucide-react'
import RazorpayPayment from './RazorpayPayment'

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact')
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "ashishace007@gmail.com",
      action: "mailto:ashishace007@gmail.com",
      color: "text-brand-indigo"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Connect directly on WhatsApp",
      value: "+91 7503294187",
      action: "https://wa.me/917503294187",
      color: "text-accent-green"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Call",
      description: "Let's discuss your project",
      value: "Book a meeting",
      action: "https://wa.me/917503294187?text=Hi%20Aashish,%20I'd%20like%20to%20schedule%20a%20call%20to%20discuss%20a%20project.",
      color: "text-accent-purple"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Response Time",
      description: "I'll get back to you",
      value: "Within 24 hours",
      action: "#",
      color: "text-accent-yellow"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aashishace",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aashishace",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aashish.ace",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aashishace",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header with Tabs */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Let's Work Together
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              I'm always interested in new opportunities, exciting projects, and meaningful collaborations. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-dark-elevated p-1 rounded-xl border border-dark-border">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'contact'
                      ? 'bg-brand-indigo text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'payment'
                      ? 'bg-brand-indigo text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <CreditCard size={16} />
                  Make Payment
                </button>
              </div>
            </div>
            
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-accent-purple mx-auto rounded-full"></div>
          </motion.div>

          {/* Tab Content */}
          {activeTab === 'contact' ? (
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left side - Contact Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    Whether you have a project in mind, need technical consultation, or just want to connect, 
                    I'd love to hear from you. I'm currently available for freelance projects and full-time opportunities.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.action}
                      variants={itemVariants}
                      className="block p-6 bg-dark-elevated border border-dark-border rounded-xl hover:border-brand-indigo-light transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-text-primary mb-2">
                        {method.title}
                      </h4>
                      <p className="text-text-secondary text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-brand-indigo font-medium">
                        {method.value}
                      </p>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">
                    Follow me on social media
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right side - CTA Card */}
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-brand-indigo via-brand-indigo-light to-accent-purple p-1 rounded-2xl">
                  <div className="bg-dark-bg rounded-2xl p-8 h-full">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-brand-indigo to-accent-purple rounded-2xl flex items-center justify-center mx-auto">
                        <Mail className="w-10 h-10 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-4">
                          Ready to Start a Project?
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-8">
                          I'm excited to learn about your project and explore how we can work together. 
                          Let's schedule a call to discuss your requirements and see how I can help bring your vision to life.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <a
                          href="mailto:ashishace007@gmail.com"
                          className="btn-primary w-full flex items-center justify-center gap-2"
                        >
                          <Mail size={20} />
                          Send me an email
                        </a>
                        
                        <div className="text-text-secondary text-sm">
                          or
                        </div>
                        
                        <a
                          href="https://www.linkedin.com/in/aashishace"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary w-full flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Connect on LinkedIn
                        </a>
                      </div>

                      <div className="pt-6 border-t border-dark-border">
                        <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                            Available for projects
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-indigo rounded-full"></div>
                            Quick response
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Payment Tab Content */
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Secure Payment Portal
                </h3>
                <p className="text-text-secondary">
                  Make payments for services, consultations, or project milestones using our secure payment gateway.
                </p>
              </div>
              
              <RazorpayPayment />
              
              <div className="mt-8 text-center">
                <p className="text-sm text-text-secondary mb-4">
                  Having trouble with payment? Contact me directly:
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="mailto:ashishace007@gmail.com"
                    className="text-brand-indigo hover:text-brand-indigo-light transition-colors duration-300"
                  >
                    ashishace007@gmail.com
                  </a>
                  <span className="text-text-secondary">|</span>
                  <a
                    href="https://wa.me/917503294187"
                    className="text-accent-green hover:text-accent-green-dark transition-colors duration-300"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
