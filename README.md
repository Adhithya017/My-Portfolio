# Adithya Acharya — Personal Portfolio

A stunning, animated 3D personal portfolio website built with modern web technologies.

![Portfolio Preview](./public/og-image.png)

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Custom CSS (Glassmorphism, Animations)
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Animations:** Framer Motion + CSS Animations
- **Smooth Scrolling:** Lenis
- **Icons:** Lucide React + React Icons
- **Fonts:** Space Grotesk (headings) + Inter (body)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles, design tokens, animations
│   ├── layout.tsx           # Root layout with fonts & meta
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── Navbar.tsx           # Fixed glass navbar with mobile menu
│   ├── PageLoader.tsx       # Animated AA monogram loader
│   ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│   ├── CustomCursor.tsx     # Animated cursor with glow effects
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero with animated text & photo
│   │   ├── AboutSection.tsx     # About with count-up stats
│   │   ├── SkillsSection.tsx    # Tabbed skill grid with icons
│   │   ├── ExperienceSection.tsx # Timeline layout
│   │   ├── ProjectsSection.tsx  # 3D tilt project cards
│   │   ├── EducationSection.tsx # Education cards
│   │   ├── CertificationsSection.tsx # Flip card certifications
│   │   ├── ContactSection.tsx   # Contact form + info cards
│   │   └── Footer.tsx          # Footer with socials
│   └── three/
│       ├── HeroScene.tsx       # Three.js hero canvas
│       ├── ParticleField.tsx   # Mouse-reactive particles
│       ├── WireframeGlobe.tsx  # Rotating wireframe icosahedron
│       └── ContactScene.tsx    # Animated wave plane
├── data/
│   └── portfolio.ts        # All portfolio content (easy to edit)
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    ├── profile.jpg          # ⬅️ DROP YOUR PHOTO HERE
    └── Adithya_Acharya_Resume.pdf  # ⬅️ DROP YOUR RESUME PDF HERE
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your assets:**
   - Drop your profile photo at `public/profile.jpg`
   - Drop your resume PDF at `public/Adithya_Acharya_Resume.pdf`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

All portfolio content is centralized in [`data/portfolio.ts`](./data/portfolio.ts). Edit this single file to update:
- Personal information
- Experience entries
- Projects
- Skills
- Education
- Certifications
- Social links

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and deploy

Or use the CLI:
```bash
npx vercel
```

## ✨ Features

- 🌌 3D particle field reactive to mouse movement
- 🎭 Animated page loader with AA monogram
- 🖱️ Custom animated cursor with glow effects
- 💎 Glassmorphism cards throughout
- 🎬 Scroll-triggered animations (Framer Motion)
- 🧈 Buttery smooth scrolling (Lenis)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Dark futuristic "developer cosmos" theme
- ⚡ Optimized performance with lazy-loaded 3D scenes
- ♿ Reduced motion support
- 🔍 SEO optimized with Open Graph meta tags

## 📄 License

© 2026 Adithya Acharya. All rights reserved.
