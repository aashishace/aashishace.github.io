import React from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import RefundPolicy from './components/RefundPolicy'

// Downloadable previews use hash routing; hosted URLs keep the existing router.
const PortfolioRouter = window.location.protocol === 'file:' ? HashRouter : Router

// Main Portfolio Page Component
const PortfolioPage = () => (
  <MotionConfig reducedMotion="user">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-dark-elevated focus:text-text-primary focus:px-5 focus:py-3 focus:rounded-lg">Skip to content</a>
    <Navigation />
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </MotionConfig>
)

function App() {
  return (
    <PortfolioRouter>
      <div className="min-h-screen bg-dark-bg">
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={<PortfolioPage />} />
          
          {/* Legal Pages */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </PortfolioRouter>
  )
}

export default App
