import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Smartphone, Shield, CheckCircle, AlertCircle } from 'lucide-react'

// Load Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

const RazorpayPayment = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentStatus, setPaymentStatus] = useState(null)
  
  // Predefined amounts
  const predefinedAmounts = [
    { amount: 5000, label: '₹5,000', popular: false },
    { amount: 10000, label: '₹10,000', popular: true },
    { amount: 25000, label: '₹25,000', popular: false },
    { amount: 50000, label: '₹50,000', popular: false },
  ]

  // Payment configuration - Live mode with Netlify Functions
  const RAZORPAY_CONFIG = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_live_S5wXKZFOtlNH75', // Environment variable fallback
    currency: 'INR',
    name: '007Labs',
    description: 'Payment for Development Services',
    image: '/assets/1728299807332.jpg',
    theme: {
      color: '#3451b2'
    }
  }

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
    setPaymentStatus(null)
    console.log('Amount selected:', amount)
  }

  const handleCustomAmount = (value) => {
    setCustomAmount(value)
    setSelectedAmount(null)
    setPaymentStatus(null)
    console.log('Custom amount:', value)
  }

  const createOrder = async (amount) => {
    try {
      const response = await fetch('/.netlify/functions/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'INR',
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create order')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Order creation failed:', error)
      throw error
    }
  }

  const verifyPayment = async (paymentData) => {
    try {
      const response = await fetch('/.netlify/functions/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      })
      
      if (!response.ok) {
        throw new Error('Payment verification failed')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Payment verification failed:', error)
      throw error
    }
  }

  const initiatePayment = async () => {
    const amount = selectedAmount || parseFloat(customAmount)
    
    console.log('Initiating payment for amount:', amount)
    
    if (!amount || amount < 1) {
      setPaymentStatus({ type: 'error', message: 'Please enter a valid amount' })
      return
    }

    try {
      setIsLoading(true)
      setPaymentStatus(null)

      console.log('Loading Razorpay script...')
      
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load')
      }

      console.log('Razorpay script loaded successfully')

      // Create order via Netlify function
      console.log('Creating order...')
      const order = await createOrder(amount)
      console.log('Order created:', order)

      // Razorpay options with proper order_id
      const options = {
        key: RAZORPAY_CONFIG.key,
        amount: order.amount, // Amount from server (in paise)
        currency: order.currency,
        name: RAZORPAY_CONFIG.name,
        description: `${RAZORPAY_CONFIG.description} - ₹${amount}`,
        image: RAZORPAY_CONFIG.image,
        order_id: order.id, // Server-generated order ID
        handler: async function (response) {
          console.log('Payment successful:', response)
          
          try {
            // Verify payment
            const verificationResult = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
            
            console.log('Verification result:', verificationResult)
            
            setPaymentStatus({ 
              type: 'success', 
              message: 'Payment completed successfully!',
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id
            })
            setSelectedAmount(null)
            setCustomAmount('')
            
          } catch (verifyError) {
            console.error('Payment verification failed:', verifyError)
            setPaymentStatus({
              type: 'error',
              message: 'Payment verification failed. Please contact support.'
            })
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        notes: {
          service: 'Development Services',
          amount: `₹${amount}`
        },
        theme: {
          color: RAZORPAY_CONFIG.theme.color
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal dismissed')
            setPaymentStatus({ type: 'error', message: 'Payment was cancelled' })
            setIsLoading(false)
          }
        }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()

    } catch (error) {
      console.error('Payment initiation failed:', error)
      setPaymentStatus({ 
        type: 'error', 
        message: `Payment failed: ${error.message}` 
      })
    } finally {
      setIsLoading(false)
    }
  }

  console.log('RazorpayPayment component rendered', { selectedAmount, customAmount, paymentStatus })

  // Success state
  if (paymentStatus?.type === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="card bg-gradient-to-r from-accent-green/10 to-accent-green/5 border-accent-green/20">
          <CheckCircle className="w-16 h-16 text-accent-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Payment Successful!
          </h3>
          <p className="text-text-secondary mb-2">
            Thank you for your payment. 
          </p>
          <p className="text-sm text-text-secondary mb-6">
            Payment ID: {paymentStatus.paymentId}
          </p>
          <button 
            className="btn-primary w-full"
            onClick={() => {
              setPaymentStatus(null)
              setSelectedAmount(null)
              setCustomAmount('')
            }}
          >
            Make Another Payment
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="card max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Secure Payment
        </h3>
        <p className="text-text-secondary mb-4">
          Choose an amount and proceed with secure payment
        </p>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-dark-bg rounded-lg border border-dark-border">
          <div className="flex flex-col items-center gap-1">
            <CreditCard size={20} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Cards</span>
          </div>
        </div>
        <div className="text-center p-3 bg-dark-bg rounded-lg border border-dark-border">
          <div className="flex flex-col items-center gap-1">
            <Smartphone size={20} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">UPI</span>
          </div>
        </div>
        <div className="text-center p-3 bg-dark-bg rounded-lg border border-dark-border">
          <div className="flex flex-col items-center gap-1">
            <Shield size={20} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Secure</span>
          </div>
        </div>
      </div>

      {/* Predefined Amounts */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Quick Amounts</h4>
        <div className="grid grid-cols-2 gap-3">
          {predefinedAmounts.map((item) => (
            <button
              key={item.amount}
              onClick={() => handleAmountSelect(item.amount)}
              className={`
                p-4 rounded-lg border transition-all duration-300 text-left relative
                ${selectedAmount === item.amount
                  ? 'border-brand-indigo bg-brand-indigo/10'
                  : 'border-dark-border hover:border-brand-indigo-light'
                }
              `}
            >
              {item.popular && (
                <span className="absolute -top-2 -right-2 bg-accent-purple text-dark-bg text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="text-lg font-semibold text-text-primary">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Custom Amount</h4>
        <div className="relative">
          <input
            type="number"
            value={customAmount}
            onChange={(e) => handleCustomAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-4 pl-8 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:border-brand-indigo focus:outline-none"
            min="1"
          />
          <span className="absolute left-3 top-4 text-text-secondary">₹</span>
        </div>
      </div>

      {/* Error Message */}
      {paymentStatus?.type === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-accent-red/10 border border-accent-red/20 rounded-lg"
        >
          <div className="flex items-center gap-2 text-accent-red">
            <AlertCircle size={16} />
            <span className="text-sm">{paymentStatus.message}</span>
          </div>
        </motion.div>
      )}

      {/* Pay Button */}
      <button
        className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={initiatePayment}
        disabled={isLoading || (!selectedAmount && !customAmount)}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          `Pay ₹${selectedAmount || customAmount || '0'}`
        )}
      </button>

      {/* Security Notice */}
      <div className="mt-4 p-3 bg-dark-bg rounded-lg">
        <div className="flex items-center gap-2 text-text-secondary text-sm">
          <Shield size={16} />
          <span>
            Payments are processed securely by Razorpay. Your card details are never stored.
          </span>
        </div>
      </div>
    </div>
  )
}

export default RazorpayPayment
