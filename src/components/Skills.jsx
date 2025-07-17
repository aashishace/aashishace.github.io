import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Dart", color: "text-blue-400" },
        { name: "JavaScript", color: "text-yellow-400" },
        { name: "Java", color: "text-orange-400" },
        { name: "Kotlin", color: "text-purple-400" },
        { name: "TypeScript", color: "text-blue-500" },
        { name: "YAML", color: "text-green-400" },
        { name: "Python", color: "text-green-500" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Android", color: "text-green-500" },
        { name: "Astro", color: "text-purple-400" },
        { name: "EJS", color: "text-gray-400" },
        { name: "Express", color: "text-gray-300" },
        { name: "Flutter", color: "text-blue-400" },
        { name: "DecapCMS", color: "text-gray-400" },
        { name: "Astro", color: "text-orange-500" },
        { name: "VitePress", color: "text-green-400" },
        { name: "Vue.js", color: "text-green-500" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Android Studio", color: "text-green-500" },
        { name: "Docker", color: "text-blue-500" },
        { name: "GitHub", color: "text-gray-300" },
        { name: "GitHub Actions", color: "text-blue-400" },
        { name: "Gradle", color: "text-blue-600" },
        { name: "IntelliJ IDEA", color: "text-blue-500" },
        { name: "NodeJS", color: "text-green-500" },
        { name: "PNPM", color: "text-orange-400" },
        { name: "Postman", color: "text-orange-500" }
      ]
    },
    {
      title: "Hosting Platforms",
      skills: [
        { name: "AWS", color: "text-orange-500" },
        { name: "Cloudflare", color: "text-orange-500" },
        { name: "Firebase", color: "text-yellow-500" },
        { name: "Hostinger", color: "text-purple-500" }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-dark-bg">
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
              Tech I've worked with
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              A mix of languages, frameworks, and tools I've used across different projects
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-accent-purple mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-tag group-hover:scale-105 group-hover:border-brand-indigo-light">
                        <span className={`${skill.color} font-medium`}>
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-dark-elevated border border-dark-border rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of development. Whether it's 
                diving into the latest mobile development patterns, experimenting with new backend 
                technologies, or optimizing cloud architectures, learning is a continuous journey.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/30">
                  🎯 Problem Solver
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-green/20 text-accent-green border border-accent-green/30">
                  🚀 Performance Focused
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                  📱 Mobile First
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/30">
                  ☁️ Cloud Native
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
