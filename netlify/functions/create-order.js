const Razorpay = require('razorpay')

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    console.log('Function started. Event body:', event.body)
    
    // Parse request body
    let requestData
    try {
      requestData = JSON.parse(event.body)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON in request body' }),
      }
    }

    const { amount, currency = 'INR' } = requestData

    // Debug logging
    console.log('Environment check:', {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
      keyIdLength: process.env.RAZORPAY_KEY_ID?.length,
      keyIdPrefix: process.env.RAZORPAY_KEY_ID?.substring(0, 8),
      amount,
      currency,
      nodeVersion: process.version
    })

    // Validate amount
    if (!amount || amount < 1) {
      console.error('Invalid amount:', amount)
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid amount' }),
      }
    }

    // Check environment variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Missing Razorpay credentials in environment variables')
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Server configuration error: Missing payment credentials' 
        }),
      }
    }

    // Initialize Razorpay with error handling
    let razorpay
    try {
      razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      })
      console.log('Razorpay instance created successfully')
    } catch (razorpayInitError) {
      console.error('Razorpay initialization failed:', razorpayInitError)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Payment service initialization failed',
          details: razorpayInitError.message 
        }),
      }
    }

    // Create order
    console.log('Creating Razorpay order with amount:', amount * 100, 'paise')
    
    let order
    try {
      order = await razorpay.orders.create({
        amount: amount * 100, // Amount in paise
        currency: currency,
        receipt: `receipt_${Date.now()}`,
        notes: {
          service: 'Development Services',
          created_at: new Date().toISOString(),
        },
      })
      console.log('Order created successfully:', order.id)
    } catch (orderError) {
      console.error('Razorpay order creation failed:', orderError)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Failed to create payment order',
          details: orderError.message,
          razorpayError: orderError.error || orderError
        }),
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      }),
    }
  } catch (error) {
    console.error('Unexpected error in create-order function:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message,
        stack: error.stack
      }),
    }
  }
}
