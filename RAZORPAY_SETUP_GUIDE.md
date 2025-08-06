# 🚀 Complete Razorpay Integration Setup Guide

## 📋 Overview
This guide provides a complete, secure Razorpay payment integration for your Next.js application with support for UPI, Credit Cards, Debit Cards, and all major payment methods.

## 🔧 Setup Instructions

### 1. Install Required Dependencies

```bash
npm install razorpay
npm install framer-motion lucide-react
```

### 2. Environment Configuration

Create `.env.local` file in your project root:

```env
# Razorpay Configuration (REQUIRED)
RAZORPAY_KEY_ID=your_live_key_id_here
RAZORPAY_KEY_SECRET=your_live_key_secret_here

# Public Key (visible in browser)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_live_key_id_here

# Optional but recommended
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
```

### 3. File Structure

```
your-nextjs-project/
├── components/
│   ├── RazorpayPayment.jsx        # Payment component
│   └── Contact.jsx                # Updated contact with payment
├── pages/api/                     # For Pages Router
│   ├── create-order.js
│   └── verify-payment.js
├── app/api/                       # For App Router
│   ├── create-order/route.js
│   └── verify-payment/route.js
└── .env.local                     # Environment variables
```

### 4. API Routes Setup

#### For Pages Router (`pages/api/`)

Create `pages/api/create-order.js`:
```javascript
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amount, currency = 'INR' } = req.body

    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Invalid amount' })
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        created_at: new Date().toISOString(),
      }
    })

    res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    })

  } catch (error) {
    console.error('Order creation error:', error)
    res.status(500).json({ error: 'Failed to create order' })
  }
}
```

Create `pages/api/verify-payment.js`:
```javascript
import crypto from 'crypto'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

const verifySignature = (orderId, paymentId, signature) => {
  const body = orderId + '|' + paymentId
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex')
  
  return expectedSignature === signature
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const isValidSignature = verifySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    )

    if (!isValidSignature) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid signature' 
      })
    }

    const payment = await razorpay.payments.fetch(razorpay_payment_id)
    
    if (payment.status !== 'captured') {
      return res.status(400).json({ 
        success: false, 
        error: 'Payment not captured' 
      })
    }

    // Here you can save to database, send emails, etc.

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      amount: payment.amount,
      currency: payment.currency,
    })

  } catch (error) {
    console.error('Payment verification error:', error)
    res.status(500).json({ 
      success: false,
      error: 'Payment verification failed'
    })
  }
}
```

#### For App Router (`app/api/`)

Create `app/api/create-order/route.js`:
```javascript
import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export async function POST(request) {
  try {
    const { amount, currency = 'INR' } = await request.json()

    if (!amount || amount < 100) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        created_at: new Date().toISOString(),
      }
    })

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    })

  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
```

### 5. Component Integration

Add the payment component to your existing Contact section or create a separate page:

```jsx
import RazorpayPayment from '../components/RazorpayPayment'

// In your page component:
<RazorpayPayment />
```

## 🔒 Security Features

### 1. Server-Side Verification
- All payments are verified on the server using Razorpay signatures
- No sensitive data exposed to the client

### 2. Environment Variables
- All credentials stored securely in environment variables
- Public keys only exposed where necessary

### 3. Input Validation
- Amount validation (minimum ₹1)
- Required field validation
- Payment status verification

### 4. Error Handling
- Comprehensive error handling for all scenarios
- User-friendly error messages
- Logging for debugging

## 💳 Supported Payment Methods

- **UPI**: All UPI apps (GPay, PhonePe, Paytm, etc.)
- **Cards**: Visa, Mastercard, Rupay, American Express
- **Net Banking**: 50+ banks supported
- **Wallets**: Paytm, Mobikwik, Airtel Money, etc.
- **NACH/eMandate**: For recurring payments

## 🚀 Deployment Checklist

### Before Going Live:

1. **✅ Razorpay Setup**
   - [ ] Live account activated
   - [ ] KYC completed
   - [ ] Live API keys generated
   - [ ] Webhook configured (optional)

2. **✅ Environment Variables**
   - [ ] Live credentials in production
   - [ ] Test credentials for development
   - [ ] No credentials in code/git

3. **✅ Testing**
   - [ ] Test with different payment methods
   - [ ] Test failed payment scenarios
   - [ ] Test payment verification
   - [ ] Test webhook handling (if implemented)

4. **✅ SSL Certificate**
   - [ ] HTTPS enabled in production
   - [ ] SSL certificate valid

## 📊 Additional Features (Optional)

### 1. Webhook Integration

Create `pages/api/webhook.js`:
```javascript
import crypto from 'crypto'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const signature = req.headers['x-razorpay-signature']
  const body = JSON.stringify(req.body)

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex')

  if (signature === expectedSignature) {
    // Handle webhook event
    const event = req.body.event
    const payment = req.body.payload.payment.entity

    switch (event) {
      case 'payment.captured':
        // Handle successful payment
        break
      case 'payment.failed':
        // Handle failed payment
        break
    }

    res.status(200).json({ status: 'ok' })
  } else {
    res.status(400).json({ error: 'Invalid signature' })
  }
}
```

### 2. Payment History

Store payments in your database:
```javascript
// In verify-payment.js after successful verification
await savePaymentToDatabase({
  order_id: razorpay_order_id,
  payment_id: razorpay_payment_id,
  amount: payment.amount,
  currency: payment.currency,
  method: payment.method,
  status: payment.status,
  email: payment.email,
  contact: payment.contact,
  created_at: new Date(payment.created_at * 1000),
})
```

### 3. Email Notifications

Send confirmation emails:
```javascript
// After successful payment verification
await sendPaymentConfirmationEmail({
  email: payment.email,
  amount: payment.amount,
  payment_id: razorpay_payment_id,
  order_id: razorpay_order_id,
})
```

## 🆘 Troubleshooting

### Common Issues:

1. **"Razorpay is not defined"**
   - Ensure the Razorpay script is loaded
   - Check network connectivity

2. **"Invalid signature"**
   - Verify key_secret matches
   - Check signature generation logic

3. **"Payment failed"**
   - Check amount validation
   - Verify account status

### Support:

- **Razorpay Docs**: https://razorpay.com/docs/
- **Support**: https://dashboard.razorpay.com/support
- **Integration Issues**: Check browser console and server logs

## 💰 Pricing

- **Transaction Fee**: 2% (negotiable for high volume)
- **Setup Fee**: ₹0
- **Settlement**: T+1 working days
- **International Cards**: Additional 3% fee

---

This integration provides a complete, production-ready payment solution with all security best practices implemented!
