export const profile = {
  name: 'Aashish Ace',
  role: 'Director & Developer',
  company: 'QwickPing',
  email: 'ashishace007@gmail.com',
  github: 'https://github.com/aashishace',
  linkedin: 'https://www.linkedin.com/in/aashishace',
}

export const featured = {
  id: 'qwickping',
  title: 'QwickPing',
  category: 'Business messaging platform',
  url: 'https://qwickping.com',
  tags: ['Next.js', 'TypeScript', 'Supabase', 'Meta APIs', 'Razorpay'],
  summary: 'Connecting customer conversations, campaign workflows and billing in one business messaging platform.',
  detail: [
    { label: 'The product', text: 'QwickPing helps businesses organize customer messaging through campaigns, shared conversations, templates and automation workflows.' },
    { label: 'My role', text: 'As Director & Developer, I work across product direction and hands-on development: the interface, backend, integrations and the decisions that connect them.' },
    { label: 'Engineering focus', text: 'Next.js application and API routes, Supabase-backed organization and team workflows, Meta messaging integrations, campaign queues and Razorpay subscription and webhook implementation.' },
  ],
}

export const projects = [
  {
    id: 'fieldproof', number: '02', name: 'FieldProof', type: 'Web application', discipline: 'Field operations',
    headline: 'Good field work needs a clear record.',
    description: 'An installation workflow for assigned jobs, guided photo and video capture, offline evidence storage and office review.',
    tags: ['React', 'Firebase', 'PWA', 'IndexedDB'], url: 'https://fieldproof-0007.vercel.app', linkLabel: 'Open application',
    detail: [
      { label: 'The problem', text: 'Installation teams need to collect the right evidence before leaving a site, even when connectivity is unreliable. Office staff need that evidence grouped clearly for review.' },
      { label: 'The implementation', text: 'Assigned-job workflows, guided per-fan capture, device-local originals and an upload queue, reviewer galleries, correction workflows and per-fan ZIP downloads.' },
      { label: 'A decision that matters', text: 'Separate “saved on this device” from “uploaded and confirmed.” Preserve evidence locally before preparation and upload, and leave installation approval to human review.' },
    ],
  },
  {
    id: 'oneo', number: '03', name: 'Oneo Sports', type: 'Collaborative project', discipline: 'Commerce & team workflows',
    headline: 'A team order, without the scattered details.',
    description: 'A sportswear storefront and roster workflow that brings player names, numbers, sizes, designs and exports into one place.',
    tags: ['React', 'TypeScript', 'Supabase', 'Edge Functions'], url: 'https://www.oneo.in', linkLabel: 'Visit website',
    detail: [
      { label: 'The problem', text: 'Custom teamwear combines a retail storefront with a coordination problem: collecting accurate player details and keeping design and fabric choices consistent before production.' },
      { label: 'My contribution', text: 'Collaborative development across the storefront, roster and administration workflows, with source history covering checkout and pricing fixes, size exports, design and fabric content, and interface improvements.' },
      { label: 'Engineering focus', text: 'Supabase-backed server workflows, reusable player information, spreadsheet exports and performance improvements including lazy-loaded pages and cache headers for public responses.' },
    ],
  },
  {
    id: 'angrezistan', number: '04', name: 'Angrezistan', type: 'Mobile application', discipline: 'Learning & practice',
    headline: 'Learning works better when you take part.',
    description: 'A mobile English-learning application with practice activities, game-based exercises, audio and progress workflows.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    detail: [
      { label: 'The product', text: 'An English-learning experience for Hindi-speaking learners, organized around active practice and interactive activities.' },
      { label: 'The implementation', text: 'Mobile screens and services for learning content, practice activities, game sessions, audio, rewards and Firebase-backed progress.' },
      { label: 'Engineering focus', text: 'Reusable practice modules and content services, with attention to how learners move between exercises, feedback and saved progress.' },
    ],
  },
  {
    id: 'i-said-i-would', number: '05', name: 'I Said I Would', type: 'In development', discipline: 'Native Android',
    headline: 'A small promise. A deliberate morning.',
    description: 'A local-first Android app connecting a recorded promise, an alarm, a barcode proof step and a private history.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'CameraX'], url: 'https://github.com/aashishace/i_said_i_woud', linkLabel: 'View source',
    detail: [
      { label: 'The idea', text: 'Turn a personal morning commitment into a specific action, with a private voice recording and a physical barcode or QR proof step.' },
      { label: 'The implementation', text: 'A native Android vertical slice with Room and DataStore, local voice recording, on-device hashed barcode matching, alarm scheduling and boot/time-change recovery.' },
      { label: 'Current status', text: 'In development. Exact-alarm permissions have an explicit fallback; broader real-device alarm reliability and accessibility validation remain part of the next release work.' },
    ],
  },
]

export const archive = [
  { name: 'SandeshX', category: 'Messaging & document workflows', stack: 'React · Supabase · Provider APIs', text: 'Bulk messaging, spreadsheet imports, notices and PDF workflows with WhatsApp, email and SMS integrations.' },
  { name: 'GoPrayag', category: 'Flutter mobility prototype', stack: 'Flutter · Dart · Bloc · Mapbox', text: 'A regional mobility prototype exploring booking, maps and Hindi/English journeys. Demo mode and simulated data are part of the current implementation.' },
  { name: 'Arcbuilders', category: 'Content-led website', stack: 'Next.js · React', text: 'A construction website organized around project content, galleries and a clear presentation of the business.' },
  { name: 'OneSheet', category: 'Android prototype', stack: 'Kotlin · Android', text: 'A CV-building prototype exploring local document workflows. Some service integrations are simulated.' },
]
