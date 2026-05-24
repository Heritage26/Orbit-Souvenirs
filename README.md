# 🪐 Orbit Souvenirs Website

A modern, production-ready website for Orbit Souvenirs built with Next.js.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub account** at https://github.com if you don't have one
2. **Create a new repository** on GitHub named `orbit-souvenirs`
3. **Upload all these project files** to the repository
4. **Go to** https://vercel.com and sign up with your GitHub account
5. Click **"Add New Project"**
6. **Import** your `orbit-souvenirs` GitHub repository
7. Leave all settings as default and click **"Deploy"**
8. ✅ Your site will be live in under 60 seconds!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Inside this project folder, run:
vercel

# Follow the prompts and your site goes live instantly
```

---

## 💻 Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
orbit-souvenirs/
├── pages/
│   ├── _app.js        # App wrapper
│   └── index.js       # Main homepage
├── styles/
│   └── globals.css    # All styles
├── public/            # Images & assets (add your logo here)
└── package.json
```

## 🖼️ Adding Your Logo

Place your logo image in the `/public` folder and reference it in `index.js`:
```jsx
import Image from 'next/image';
<Image src="/logo.png" width={180} height={60} alt="Orbit Souvenirs" />
```

## ✏️ Customizing Contact Details

In `pages/index.js`, update:
- Email: `href="mailto:hello@orbitsouvenirs.com"`
- Phone: `href="tel:+2340000000000"`
