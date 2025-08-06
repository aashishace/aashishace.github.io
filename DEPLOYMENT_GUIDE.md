# 🚀 007Labs Payment System - Deployment Guide

## ✅ Configuration Complete!

Your Razorpay payment system is now configured with your live credentials:

### 🔑 Credentials Configured:
- **Key ID**: `rzp_live_S5wXKZFOtlNH75`
- **Business Name**: 007Labs
- **Currency**: INR
- **Logo**: Your profile picture from `/assets/1728299807332.jpg`
- **Email Receipts**: Enabled (automatic via Razorpay)

### 💰 Payment Amounts Available:
- **₹5,000** - Small Projects
- **₹10,000** - Medium Projects (Most Popular)
- **₹25,000** - Large Projects
- **₹50,000** - Enterprise Projects
- **Custom Amount** - Any amount the customer specifies

---

## 🚀 Next Steps for Deployment:

### 1. **Move Files to Your Next.js Project**
Copy these files to your Next.js project:

```
📁 Your Next.js Project/
├── pages/api/           (or app/api/ for App Router)
│   ├── create-order.js
│   └── verify-payment.js
├── components/
│   └── RazorpayPayment.jsx
└── .env.local           (with your credentials)
```

### 2. **Install Required Dependencies**
```bash
npm install razorpay framer-motion lucide-react
```

### 3. **Update Your Contact Page**
Add the payment component to your contact form:

```jsx
import RazorpayPayment from '../components/RazorpayPayment'

// In your contact page
<RazorpayPayment />
```

### 4. **Configure Razorpay Dashboard**
1. Login to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Go to **Settings > Webhooks**
3. Add webhook URL: `https://yourdomain.com/api/verify-payment`
4. Select events: `payment.captured`, `payment.failed`
5. Copy the webhook secret and add to `.env.local`:
   ```
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
   ```

### 5. **Test the Integration**
1. Deploy your Next.js app
2. Navigate to the contact/payment section
3. Try a test payment with Razorpay test cards:
   - **Card**: 4111 1111 1111 1111
   - **CVV**: Any 3 digits
   - **Expiry**: Any future date

---

## 🔒 Security Features Included:

✅ **Server-side order creation**
✅ **Payment signature verification**
✅ **Amount validation**
✅ **HTTPS enforcement**
✅ **Environment variable protection**
✅ **Error handling & logging**
✅ **Live mode credentials**

---

## 📱 Payment Methods Supported:

- 💳 **Credit/Debit Cards** (Visa, MasterCard, RuPay, Amex)
- 📱 **UPI** (GPay, PhonePe, Paytm, BHIM)
- 🏦 **Net Banking** (All major banks)
- 💰 **Wallets** (Paytm, PhonePe, Amazon Pay)
- 💸 **EMI Options** (for eligible amounts)

---

## 🎯 Customer Experience:

1. **Select Amount**: Choose from predefined amounts or enter custom amount
2. **Secure Checkout**: Razorpay's secure payment gateway
3. **Multiple Options**: All major payment methods available
4. **Instant Confirmation**: Real-time payment status
5. **Email Receipt**: Automatic receipt via Razorpay
6. **Mobile Optimized**: Works perfectly on all devices

---

## 🔧 Customization Options:

### Change Payment Amounts:
Edit `predefinedAmounts` in `RazorpayPayment.jsx`:
```jsx
const predefinedAmounts = [
  { amount: 5000, label: '₹5,000', popular: false },
  { amount: 15000, label: '₹15,000', popular: true },
  // Add more amounts as needed
]
```

### Update Business Info:
Modify `RAZORPAY_CONFIG` in the component:
```jsx
const RAZORPAY_CONFIG = {
  name: '007Labs',
  description: 'Payment for Development Services',
  // Update as needed
}
```

---

## 📞 Support:

- **Razorpay Support**: support@razorpay.com
- **Documentation**: https://razorpay.com/docs/
- **Dashboard**: https://dashboard.razorpay.com

Your payment system is production-ready and secure! 🎉

---

## 🎨 UI Preview:

The payment component includes:
- Clean, modern design matching your portfolio
- Dark theme with accent colors
- Responsive design for all devices
- Loading states and success/error messages
- Security badges for customer confidence
- Integration with your existing Contact section

**Ready to accept payments! 💸**
