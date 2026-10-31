import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { archive, featured, projects } from '../data/portfolio'

function TechTags({ tags }) {
  return <div className="flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="px-3 py-1 bg-dark-bg border border-dark-border rounded-lg text-xs font-medium text-text-secondary">{tag}</span>)}</div>
}

function ProjectDetails({ items }) {
  return <details className="project-details border-t border-dark-border pt-4 mt-5">
    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-text-primary"><span>More about the work</span><span className="details-plus text-brand-indigo-light" aria-hidden="true">+</span></summary>
    <div className="space-y-4 pt-5">{items.map(item => <div key={item.label}><h4 className="text-sm font-medium text-text-primary mb-1">{item.label}</h4><p className="text-sm leading-relaxed text-text-secondary">{item.text}</p></div>)}</div>
  </details>
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const category = project => ['angrezistan', 'i-said-i-would'].includes(project.id) ? 'mobile' : 'web'
  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length + 1 },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => category(p) === 'web').length + 1 },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => category(p) === 'mobile').length },
  ]
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => category(p) === activeFilter)
  const showFeatured = activeFilter !== 'mobile'
  const variants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.45 } },
  }

  return <section id="projects" className="section-padding bg-dark-bg-alt">
    <div className="container-custom">
      <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">Featured Projects</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-7">Selected work across business platforms, field operations and mobile applications.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-accent-purple mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter projects">
          {filters.map(filter => <button key={filter.id} type="button" aria-pressed={activeFilter === filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-5 py-3 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${activeFilter === filter.id ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20' : 'bg-dark-elevated border border-dark-border text-text-secondary hover:border-brand-indigo-light hover:text-text-primary'}`}>{filter.label}<span className="ml-2 text-xs opacity-75">({filter.count})</span></button>)}
        </div>

        {showFeatured && <article className="card relative border-brand-indigo/50 mb-7 p-6 md:p-8 lg:p-10" aria-labelledby="qwickping-title">
          <div className="flex flex-wrap gap-3 items-center justify-between mb-7">
            <span className="inline-flex text-xs font-medium bg-brand-indigo/15 border border-brand-indigo/30 text-accent-purple rounded-full px-3 py-1">Current focus · Featured project</span>
            <span className="text-text-secondary text-xs md:text-sm">Director & Developer</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-7 lg:gap-12">
            <div><h3 id="qwickping-title" className="text-3xl md:text-4xl font-bold text-text-primary mb-3">QwickPing</h3><p className="text-accent-purple font-medium mb-4">Business messaging platform</p><p className="text-text-secondary leading-relaxed mb-6">{featured.summary}</p><TechTags tags={featured.tags} /></div>
            <div className="lg:border-l lg:border-dark-border lg:pl-10"><h4 className="text-base font-semibold text-text-primary mb-3">Product direction. Hands-on development.</h4><p className="text-text-secondary text-sm leading-relaxed mb-5">I work across the product, interface, backend and integrations—connecting customer messaging with campaign workflows, team access and billing.</p><ul className="space-y-3 text-sm text-text-secondary"><li><span className="text-accent-purple mr-2" aria-hidden="true">▪</span>Messaging, templates and campaign queues</li><li><span className="text-accent-purple mr-2" aria-hidden="true">▪</span>Organization and team workflows</li><li><span className="text-accent-purple mr-2" aria-hidden="true">▪</span>Provider APIs, subscriptions and webhooks</li></ul></div>
          </div>
          <ProjectDetails items={featured.detail} />
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 mt-6 text-sm"><ExternalLink size={16} aria-hidden="true" />Visit QwickPing</a>
        </article>}

        <div className="grid md:grid-cols-2 gap-6" aria-label="Selected projects">
          {filtered.map(project => <article key={project.id} className="card flex flex-col p-6 md:p-7" aria-labelledby={`project-${project.id}`}>
            <div className="flex items-center justify-between gap-3 mb-4"><span className="text-xs text-accent-purple">{project.discipline}</span><span className="text-[11px] text-text-secondary border border-dark-border rounded-full px-2.5 py-1">{project.type}</span></div>
            <h3 id={`project-${project.id}`} className="text-xl md:text-2xl font-semibold text-text-primary mb-3">{project.name}</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>
            <TechTags tags={project.tags} />
            <ProjectDetails items={project.detail} />
            {project.url && <div className="mt-auto pt-5"><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent-purple hover:text-accent-purple transition-colors"><ExternalLink size={15} aria-hidden="true" />{project.linkLabel}</a></div>}
          </article>)}
        </div>
        <p className="sr-only" role="status">Showing {filtered.length + (showFeatured ? 1 : 0)} {activeFilter === 'all' ? 'selected' : activeFilter} projects.</p>

        <details id="project-archive" className="project-details card mt-8 p-6 md:p-7">
          <summary className="cursor-pointer flex items-center justify-between gap-5"><div><h3 className="text-lg font-semibold text-text-primary">Project archive</h3><p className="text-text-secondary text-sm mt-1">Earlier work and prototypes.</p></div><span className="details-plus text-brand-indigo-light text-xl" aria-hidden="true">+</span></summary>
          <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-dark-border">{archive.map(project => <article key={project.name}><h4 className="text-base font-medium text-text-primary mb-1">{project.name}</h4><p className="text-xs text-accent-purple mb-2">{project.category}</p><p className="text-sm text-text-secondary leading-relaxed">{project.text}</p><p className="text-xs text-text-secondary mt-3">{project.stack}</p></article>)}</div>
        </details>

        <div className="text-center mt-10"><a href="https://github.com/aashishace" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 text-sm"><Github size={18} aria-hidden="true" />More on GitHub</a></div>
      </motion.div>
    </div>
  </section>
}
