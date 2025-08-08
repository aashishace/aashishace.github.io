import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FileText, Lock, RefreshCw } from 'lucide-react'

const LegalNavigation = () => {
  const location = useLocation()
  
  const legalPages = [
    {
      path: '/terms-and-conditions',
      name: 'Terms & Conditions',
      icon: FileText
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      icon: Lock
    },
    {
      path: '/refund-policy',
      name: 'Refund Policy',
      icon: RefreshCw
    }
  ]

  return (
    <div className="bg-dark-bg border-b border-dark-border sticky top-0 z-50">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-brand-indigo hover:text-brand-indigo-light font-semibold">
            ← Back to Portfolio
          </Link>
          
          <nav className="flex items-center gap-6">
            {legalPages.map((page) => {
              const Icon = page.icon
              const isActive = location.pathname === page.path
              
              return (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? 'bg-brand-indigo text-white'
                      : 'text-text-secondary hover:text-text-primary hover:bg-dark-border'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden md:inline">{page.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default LegalNavigation
