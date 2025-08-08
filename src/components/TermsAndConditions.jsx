import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, FileText, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import LegalNavigation from './LegalNavigation'

const TermsAndConditions = () => {
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
      transition: { duration: 0.6 }
    }
  }

  return (
    <>
      <LegalNavigation />
      <div className="min-h-screen bg-dark-bg py-20">
      <div className="container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-brand-indigo hover:text-brand-indigo-light mb-4">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-brand-indigo" />
              <h1 className="text-4xl font-bold text-text-primary">Terms and Conditions</h1>
            </div>
            <p className="text-text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="card space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                Welcome to 007Labs. These Terms and Conditions ("Terms") govern your use of our website and services. 
                By accessing our website or engaging our services, you agree to be bound by these Terms. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. Services Offered</h2>
              <div className="space-y-4 text-text-secondary">
                <p>007Labs provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full-Stack Web Development (React, Node.js, Next.js)</li>
                  <li>Mobile App Development (React Native, Flutter)</li>
                  <li>UI/UX Design and Prototyping</li>
                  <li>API Development and Integration</li>
                  <li>Database Design and Management</li>
                  <li>Technical Consulting and Code Review</li>
                  <li>Website Maintenance and Support</li>
                </ul>
                <p>
                  All services are provided on a project basis or through ongoing maintenance agreements 
                  as specified in individual contracts or proposals.
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Payment Terms</h2>
              <div className="space-y-4 text-text-secondary">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payments are processed securely through Razorpay</li>
                  <li>Project fees are typically structured as: 50% upfront, 50% upon completion</li>
                  <li>Hourly consulting rates are billed monthly</li>
                  <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                  <li>Late payments may incur additional charges as specified in project agreements</li>
                  <li>Refunds are subject to our Refund Policy</li>
                </ul>
              </div>
            </section>

            {/* Project Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Project Timeline and Delivery</h2>
              <div className="space-y-4 text-text-secondary">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project timelines are estimates and may vary based on project complexity</li>
                  <li>Delays caused by client feedback, revisions, or resource unavailability may extend timelines</li>
                  <li>We will communicate any potential delays promptly</li>
                  <li>Final delivery requires client approval and final payment</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Intellectual Property</h2>
              <div className="space-y-4 text-text-secondary">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upon full payment, clients receive full ownership of custom-developed code and designs</li>
                  <li>Third-party libraries, frameworks, and tools retain their original licenses</li>
                  <li>007Labs retains the right to showcase completed projects in our portfolio</li>
                  <li>Any pre-existing intellectual property remains with its original owner</li>
                </ul>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Client Responsibilities</h2>
              <div className="space-y-4 text-text-secondary">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate project requirements and specifications</li>
                  <li>Supply necessary content, assets, and access credentials promptly</li>
                  <li>Respond to communications and provide feedback within agreed timeframes</li>
                  <li>Ensure all provided content is original or properly licensed</li>
                  <li>Make payments according to agreed schedules</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  007Labs shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising from the use of our services. Our total liability shall not exceed the amount paid 
                  for the specific service in question.
                </p>
                <p>
                  We provide services "as is" and make no warranties regarding uninterrupted operation 
                  or error-free performance of delivered solutions.
                </p>
              </div>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Confidentiality</h2>
              <p className="text-text-secondary leading-relaxed">
                We respect the confidentiality of all client information and project details. 
                Any sensitive information shared during the course of our engagement will be kept strictly confidential 
                and will not be disclosed to third parties without explicit consent.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9. Termination</h2>
              <div className="space-y-4 text-text-secondary">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Either party may terminate services with written notice</li>
                  <li>Upon termination, payment is due for all work completed to date</li>
                  <li>Client will receive all work completed up to the termination date</li>
                  <li>Ongoing maintenance agreements may be terminated with 30 days notice</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">10. Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these Terms shall be subject to the jurisdiction of courts in India.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">11. Changes to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify these Terms at any time. 
                Updated Terms will be posted on our website with the revision date. 
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-dark-bg p-6 rounded-lg border border-dark-border">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-indigo" />
                Contact Information
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-text-secondary">
                <p><strong>Email:</strong> contact@007labs.com</p>
                <p><strong>Website:</strong> https://aashishace.netlify.app</p>
                <p><strong>Business:</strong> 007Labs - Full-Stack Development Services</p>
              </div>
            </section>

          </motion.div>
        </motion.div>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions
