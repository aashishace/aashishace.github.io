import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
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

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-dark-bg-alt">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-accent-purple mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left side - Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
                  Full-Stack Developer & Mobile App Specialist
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I'm a passionate developer with an M.Sc IT background and strong technical expertise across 
                  mobile app development, full-stack web applications, and modern cloud technologies.
                </p>
              </div>

              <div>
                <p className="text-text-secondary leading-relaxed">
                  Currently working as a Senior Software Engineer at Directi, I specialize in creating innovative solutions 
                  that bridge the gap between business needs and technical excellence. My experience includes building 
                  scalable mobile applications, robust backend systems, and intuitive user interfaces.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">What I bring to the table:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-brand-indigo mr-2 mt-1">▪</span>
                    Cross-platform mobile development expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-indigo mr-2 mt-1">▪</span>
                    Full-stack web application development
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-indigo mr-2 mt-1">▪</span>
                    Cloud-native architecture and DevOps practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-indigo mr-2 mt-1">▪</span>
                    Business-oriented technical solutions
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right side - Experience cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              
              {/* Experience Card 1 */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-indigo rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Mobile Apps</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Building multi-platform Mobile Apps using React Native, Flutter, and native Android/iOS development 
                      with seamless user experiences and performance optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card 2 */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🌐</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Google Certified Developer</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Proficient in Android app development and architecture, 
                      with expertise in modern Android Architecture Components and Jetpack libraries. Certified for Google 
                      Certifications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card 3 */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Backend, Frontend</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Familiar with WordPress, Ghost, Vue.js and Appwrite, 
                      for rapid prototyping to Internet and modern projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card 4 */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Solopreneur, Ad-Tech Consultant</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Experience with Google Play, AdMob, Firebase and cutting-edge ad-tech platforms, policy compliance, 
                      and revenue policy compliance.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
