# Aashish Ace - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing my work as a Full-Stack Developer & Mobile App Specialist.

The original dark theme is retained. QwickPing is the lead project, followed by
FieldProof, Oneo Sports, Angrezistan and I Said I Would. Project cards use text
descriptions and expandable details; earlier work is in the archive.

### Updating portfolio content

- Project descriptions, stacks and links: `src/data/portfolio.js`.
- Current role and introduction: `src/components/Hero.jsx` and `About.jsx`.
- Downloadable CV: replace `public/Aashish_Ace_CV.pdf` while keeping that filename.
- Run `npm run build` before publishing. The postbuild script generates direct
  legal-page entry points for GitHub Pages.
- Pushes to `main` build and deploy through `.github/workflows/deploy.yml`.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices from mobile to desktop
- **Dark Theme**: Beautiful dark theme with carefully chosen colors
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Header navigation
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   ├── Contact.jsx     # Contact information
│   └── Footer.jsx      # Footer component
├── index.css           # Global styles with Tailwind
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22 (matches GitHub Actions)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aashishace/aashishace.github.io.git
cd aashishace.github.io
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

```bash
npm run build
# or
pnpm build
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

To deploy manually:
```bash
npm run deploy
# or
pnpm deploy
```

## 🎨 Design System

### Colors
- **Background**: #1b1b1f (main), #161618 (alt), #202127 (elevated)
- **Text**: rgba(255, 255, 245, 0.86) (primary), rgba(235, 235, 245, 0.6) (secondary)
- **Brand**: Indigo-based (#3451b2, #3a5ccc, #5672cd)
- **Accents**: Purple, Green, Yellow, Red variants

### Typography
- **Font**: Inter (with fallbacks)
- **Base Size**: 16px with 1.4 line height
- **Optimization**: antialiased, optimizeLegibility

## 📱 Sections

- **Hero**: Introduction with profile image and CTA buttons
- **About**: Personal background and experience highlights
- **Skills**: Technology stack organized by categories
- **Projects**: Featured projects with filtering capabilities
- **Contact**: Contact information and social links
- **Footer**: Additional links and copyright information

## 🔧 Customization

To customize the portfolio for your own use:

1. Update personal information in the components
2. Replace project data in `Projects.jsx`
3. Update skills in `Skills.jsx`
4. Modify color scheme in `tailwind.config.js`
5. Update social links throughout the components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aashish Ace**
- Portfolio: [https://aashishace.github.io](https://aashishace.github.io)
- GitHub: [https://github.com/aashishace](https://github.com/aashishace)
- LinkedIn: [https://linkedin.com/in/aashishace](https://linkedin.com/in/aashishace)
- Instagram: [https://instagram.com/aashish.ace](https://instagram.com/aashish.ace)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show your support

Give a ⭐️ if you like this project!
