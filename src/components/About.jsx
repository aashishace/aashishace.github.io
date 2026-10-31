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
                  I build mobile applications and full-stack web platforms, with an M.Sc IT background
                  and experience connecting interfaces, data and business workflows.
                </p>
              </div>

              <div>
                <p className="text-text-secondary leading-relaxed">
                  I'm currently Director & Developer at QwickPing, working across product direction and
                  hands-on development. My work spans business messaging, custom commerce, field operations
                  and mobile learning, including FieldProof, Oneo Sports and Angrezistan.
                </p>
              </div>

              <div className="border-l-2 border-brand-indigo pl-4 py-1">
                <p className="text-xs font-medium text-accent-purple mb-2">Previous role · 2023–2025</p>
                <h4 className="text-base font-semibold text-text-primary mb-1">Senior Full-Stack Software Engineer</h4>
                <p className="text-sm text-text-secondary mb-2">Directi Internet Solutions Pvt Ltd</p>
                <p className="text-sm leading-relaxed text-text-secondary">Full-stack application development, microservices and API integration.</p>
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
                    Building mobile applications using React Native, Flutter and native Android,
                      with attention to clear workflows, local storage and device behavior.
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
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Native Android & Architecture</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Building with Kotlin, Jetpack Compose, Room and CameraX, including
                      local-first storage, barcode workflows and device-aware behavior.
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
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Backend & Frontend</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Connecting React and Next.js interfaces with Supabase, Firebase, APIs and
                      business rules across full-stack applications.
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
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Product & Development</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Working across product direction and hands-on development at QwickPing,
                      from messaging workflows to teams, integrations and billing.
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
