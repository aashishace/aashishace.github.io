import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

// Main Portfolio Page Component
const PortfolioPage = () => (
  <>
    <Navigation />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
