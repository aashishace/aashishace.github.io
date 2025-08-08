import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCw, CreditCard, Clock, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import LegalNavigation from './LegalNavigation'

const RefundPolicy = () => {
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
              <RefreshCw className="w-8 h-8 text-brand-indigo" />
              <h1 className="text-4xl font-bold text-text-primary">Refund Policy</h1>
            </div>
            <p className="text-text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="card space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Overview</h2>
              <p className="text-text-secondary leading-relaxed">
                At 007Labs, we strive to deliver high-quality development services that meet your expectations. 
                This Refund Policy outlines the conditions under which refunds may be requested and processed. 
                We believe in transparent communication and fair business practices.
              </p>
            </section>

            {/* Refund Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. Refund Eligibility</h2>
              
              <div className="space-y-6">
                <div className="bg-accent-green/10 p-6 rounded-lg border border-accent-green/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-accent-green" />
                    Eligible for Full Refund
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary">
                    <li>Project cancellation within 24 hours of initial payment (before work begins)</li>
                    <li>Failure to deliver agreed-upon services due to our inability to complete the project</li>
                    <li>Significant deviation from agreed specifications without client consent</li>
                    <li>Technical impossibility discovered after project assessment</li>
                  </ul>
                </div>

                <div className="bg-accent-yellow/10 p-6 rounded-lg border border-accent-yellow/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-yellow" />
                    Eligible for Partial Refund
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary">
                    <li>Project termination by client after work has commenced (refund based on work completed)</li>
                    <li>Mutual agreement to scope reduction during project execution</li>
                    <li>Force majeure events preventing project completion</li>
                  </ul>
                </div>

                <div className="bg-accent-red/10 p-6 rounded-lg border border-accent-red/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent-red" />
                    Not Eligible for Refund
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary">
                    <li>Change of mind after project delivery and client approval</li>
                    <li>Completed projects that meet agreed specifications</li>
                    <li>Services already rendered (consulting, code reviews, completed milestones)</li>
                    <li>Third-party service costs (hosting, domains, licenses) already incurred</li>
                    <li>Delays caused by client non-responsiveness or delayed feedback</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Refund Process */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Refund Request Process</h2>
              <div className="space-y-4 text-text-secondary">
                <p>To request a refund, please follow these steps:</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-indigo rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Submit Request</h4>
                      <p>Send a detailed refund request to <strong>refunds@007labs.com</strong> including:</p>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Project details and payment reference</li>
                        <li>Reason for refund request</li>
                        <li>Supporting documentation (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-indigo rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Review Process</h4>
                      <p>We will review your request within 48 hours and may contact you for additional information.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-indigo rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Decision Notification</h4>
                      <p>You will receive our decision via email within 5 business days.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-indigo rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Refund Processing</h4>
                      <p>Approved refunds will be processed within 7-10 business days to the original payment method.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment-Specific Policies */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Payment-Specific Refund Policies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Project-Based Payments</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-text-secondary">
                    <li><strong>50% Upfront Payment:</strong> Refundable if project hasn't started</li>
                    <li><strong>Milestone Payments:</strong> Refunds calculated based on completed work</li>
                    <li><strong>Final Payment:</strong> Non-refundable once project is delivered and approved</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Hourly Consulting</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-text-secondary">
                    <li>Billed hours are non-refundable once services are rendered</li>
                    <li>Prepaid hours can be refunded if not used within 90 days</li>
                    <li>Consultation sessions are charged upon completion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Maintenance & Support</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-text-secondary">
                    <li>Monthly subscriptions: Pro-rated refund for unused portion</li>
                    <li>Annual plans: Refund available within first 30 days</li>
                    <li>Used support hours are non-refundable</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Special Circumstances */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Special Circumstances</h2>
              <div className="space-y-4 text-text-secondary">
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Technical Issues</h3>
                  <p>
                    If technical limitations prevent project completion after work has begun, 
                    we will provide a full refund minus any third-party costs already incurred.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Scope Changes</h3>
                  <p>
                    Significant scope changes requested by the client may result in additional charges. 
                    If the client chooses to cancel due to scope changes, refunds will be calculated 
                    based on work completed under the original scope.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Communication Issues</h3>
                  <p>
                    Projects may be terminated if the client is unresponsive for more than 30 days. 
                    In such cases, payment for completed work is non-refundable.
                  </p>
                </div>
              </div>
            </section>

            {/* Processing Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Refund Processing Timeline</h2>
              <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Review Timeline</h3>
                    <ul className="space-y-1 text-text-secondary">
                      <li>Initial Response: 24-48 hours</li>
                      <li>Decision: 3-5 business days</li>
                      <li>Complex Cases: Up to 10 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Payment Processing</h3>
                    <ul className="space-y-1 text-text-secondary">
                      <li>Credit/Debit Cards: 5-7 business days</li>
                      <li>Bank Transfers: 7-10 business days</li>
                      <li>UPI/Digital Wallets: 3-5 business days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Dispute Resolution</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  If you disagree with our refund decision, we encourage open communication to resolve the matter:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Schedule a discussion call to review the case in detail</li>
                  <li>Provide additional documentation or clarification</li>
                  <li>Consider alternative solutions (project modifications, credit for future work)</li>
                  <li>Escalate to management review for complex disputes</li>
                </ul>
              </div>
            </section>

            {/* Chargebacks and Payment Disputes */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Chargebacks and Payment Disputes</h2>
              <div className="bg-accent-yellow/10 p-6 rounded-lg border border-accent-yellow/20">
                <p className="text-text-secondary leading-relaxed">
                  <strong>Important:</strong> Please contact us directly before initiating a chargeback with your bank. 
                  Chargebacks can result in additional fees and may affect future service availability. 
                  We are committed to resolving disputes fairly and promptly through direct communication.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-dark-bg p-6 rounded-lg border border-dark-border">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-brand-indigo" />
                Refund Support Contact
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For all refund-related inquiries and requests:
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Refund Requests:</strong> refunds@007labs.com</p>
                <p><strong>General Support:</strong> contact@007labs.com</p>
                <p><strong>Phone Consultation:</strong> Available upon request</p>
                <p><strong>Response Time:</strong> 24-48 hours for all refund inquiries</p>
                <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM IST</p>
              </div>
            </section>

          </motion.div>
        </motion.div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
