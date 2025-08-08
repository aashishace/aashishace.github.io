import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import LegalNavigation from './LegalNavigation'

const PrivacyPolicy = () => {
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
              <Lock className="w-8 h-8 text-brand-indigo" />
              <h1 className="text-4xl font-bold text-text-primary">Privacy Policy</h1>
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
                At 007Labs, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website 
                or use our services. By using our services, you consent to the practices described in this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. Information We Collect</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-brand-indigo" />
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-text-secondary">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information (company name, project requirements)</li>
                    <li>Payment information (processed securely through Razorpay)</li>
                    <li>Communication preferences and project specifications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-brand-indigo" />
                    Usage Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-text-secondary">
                    <li>Website usage analytics and navigation patterns</li>
                    <li>Device information (browser type, operating system)</li>
                    <li>IP address and geolocation data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Project Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-text-secondary">
                    <li>Project requirements and specifications</li>
                    <li>Design preferences and feedback</li>
                    <li>Technical requirements and constraints</li>
                    <li>Communication history and project documentation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-text-secondary">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Delivery:</strong> To provide development services and technical support</li>
                  <li><strong>Communication:</strong> To respond to inquiries and provide project updates</li>
                  <li><strong>Payment Processing:</strong> To handle invoicing and secure payment transactions</li>
                  <li><strong>Website Improvement:</strong> To analyze usage patterns and enhance user experience</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Marketing:</strong> To send relevant service updates (with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Payment Information Security */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Payment Information Security</h2>
              <div className="bg-accent-green/10 p-6 rounded-lg border border-accent-green/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" />
                  <div className="space-y-3 text-text-secondary">
                    <p className="font-semibold text-text-primary">Secure Payment Processing</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>All payments are processed through Razorpay, a PCI DSS compliant payment gateway</li>
                      <li>We do not store your credit card or banking information on our servers</li>
                      <li>Payment data is encrypted using industry-standard SSL/TLS protocols</li>
                      <li>Transaction details are securely handled by certified financial institutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-text-secondary">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Trusted third-party services (hosting, payment processing, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing specific information</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Data Security</h2>
              <div className="space-y-4 text-text-secondary">
                <p>We implement robust security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL/TLS encryption for all data transmission</li>
                  <li>Secure server infrastructure with regular security updates</li>
                  <li>Access controls and authentication for sensitive data</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Backup and disaster recovery procedures</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information, no method of transmission over the internet 
                  is 100% secure. We cannot guarantee absolute security but continuously work to improve our defenses.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-text-secondary">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
                <p className="mt-4">
                  You can control cookie settings through your browser preferences. 
                  Disabling cookies may affect some website functionality.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Data Retention</h2>
              <div className="space-y-4 text-text-secondary">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Project Data:</strong> Retained for the duration of the project plus 2 years for support purposes</li>
                  <li><strong>Financial Records:</strong> Maintained for 7 years as required by tax regulations</li>
                  <li><strong>Communication History:</strong> Kept for 3 years for reference and support</li>
                  <li><strong>Website Analytics:</strong> Anonymized data retained for 2 years</li>
                </ul>
                <p className="mt-4">
                  Data is securely deleted when no longer needed, unless retention is required by law.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9. Your Rights and Choices</h2>
              <div className="space-y-4 text-text-secondary">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">10. Third-Party Services</h2>
              <div className="space-y-4 text-text-secondary">
                <p>Our website and services may include links to third-party websites or integrate with external services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Razorpay:</strong> Payment processing (subject to Razorpay's privacy policy)</li>
                  <li><strong>Netlify:</strong> Website hosting and content delivery</li>
                  <li><strong>Analytics Services:</strong> Website usage analysis</li>
                </ul>
                <p className="mt-4">
                  These third-party services have their own privacy policies. 
                  We are not responsible for their privacy practices.
                </p>
              </div>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">11. Updates to This Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes by posting the updated policy on our website with a new effective date. 
                We encourage you to review this policy regularly.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-dark-bg p-6 rounded-lg border border-dark-border">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-indigo" />
                Contact Us About Privacy
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Email:</strong> privacy@007labs.com</p>
                <p><strong>General Contact:</strong> contact@007labs.com</p>
                <p><strong>Website:</strong> https://aashishace.netlify.app</p>
                <p><strong>Response Time:</strong> We will respond to privacy inquiries within 48 hours</p>
              </div>
            </section>

          </motion.div>
        </motion.div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
