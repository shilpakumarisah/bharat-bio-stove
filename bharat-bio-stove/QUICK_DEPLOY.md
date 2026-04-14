# Quick Deployment Guide - Bharat Bio Stove Website

## Deploy in 5 Minutes (Free)

### Method 1: Deploy to Vercel (Recommended - Easiest)

**Step 1: Prepare Files**
1. Create a folder called `bharat-bio-stove`
2. Create these files in the folder:

**package.json**
```json
{
  "name": "bharat-bio-stove",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
```

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**index.html**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bharat Bio Stove - Smokeless Biomass Cooking</title>
    <meta name="description" content="No smoke. Low cost. Smokeless biomass cooking stoves for every Indian home.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**src/main.jsx**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**src/App.jsx** - Copy the entire bharat-bio-stove.jsx content here

**Step 2: Upload to GitHub**
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Bharat Bio Stove website"

# Push to GitHub (create repo on github.com first)
git remote add origin https://github.com/YOUR-USERNAME/bharat-bio-stove.git
git branch -M main
git push -u origin main
```

**Step 3: Deploy to Vercel**
1. Go to vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your GitHub repo
5. Click "Deploy"
6. Done! Your site is live in ~1 minute

Your URL will be: `bharat-bio-stove.vercel.app`

---

### Method 2: Deploy to Netlify

1. **Prepare files** (same as above)
2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```
3. **Build project**
   ```bash
   npm run build
   ```
4. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```
5. Done! Follow the link from terminal

---

### Method 3: Deploy to GitHub Pages (Free)

1. **Create GitHub repo** named `bharat-bio-stove`
2. **Update vite.config.js**
   ```javascript
   export default {
     base: '/bharat-bio-stove/',
     plugins: [react()],
   }
   ```
3. **Add to package.json**
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

Your URL: `yourusername.github.io/bharat-bio-stove`

---

## Quick Changes Before Launch

### 1. Update Phone Number
Replace all instances of `8796979076` with your actual phone number:
```bash
# On Mac/Linux
sed -i 's/8796979076/YOUR-NUMBER/g' src/App.jsx

# Or manually find and replace in the code
```

### 2. Change Business Name (if needed)
Replace "Bharat Bio Stove" with your company name throughout the file.

### 3. Update Contact Info
- Phone number
- WhatsApp message
- Social media links

---

## Complete Step-by-Step: Vercel Deploy

```bash
# 1. Navigate to your folder
cd bharat-bio-stove

# 2. Initialize npm (if not done)
npm init -y

# 3. Install dependencies
npm install react react-dom lucide-react

# 4. Install dev dependencies
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer

# 5. Create all config files (use templates above)

# 6. Initialize Git
git init
git add .
git commit -m "Initial commit"

# 7. Push to GitHub
git remote add origin https://github.com/YOUR-USERNAME/bharat-bio-stove.git
git push -u origin main

# 8. Go to vercel.com, import the repo, and deploy!
```

---

## After Deployment

### 1. Test on Mobile
- Open on iPhone and Android
- Test all buttons and forms
- Test WhatsApp integration

### 2. Set Up Custom Domain
1. Buy domain from GoDaddy/Namecheap/BigRock
2. On Vercel: Settings → Domains
3. Add your custom domain
4. Update domain DNS settings (Vercel will guide you)

### 3. Add to Google Search
1. Go to Google Search Console
2. Add your domain
3. Submit sitemap (auto-generated)
4. Wait 1-2 weeks for indexing

### 4. Monitor Traffic
1. Add Google Analytics to index.html
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

---

## Environment Variables (Optional)

If you want to hide your phone number in code:
1. Create `.env` file
2. Add: `VITE_PHONE_NUMBER=8796979076`
3. Use in code: `process.env.VITE_PHONE_NUMBER`

---

## Troubleshooting

**Deployment failed?**
- Check build logs on Vercel/Netlify
- Ensure all dependencies are listed in package.json
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Site not updating?**
- Clear Vercel cache: Settings → Deployments → Redeploy
- Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

**WhatsApp button not working?**
- Ensure phone number includes country code (91 for India)
- Test on actual WhatsApp-enabled device

---

## Launch Checklist

- [ ] All phone numbers updated
- [ ] Company name correct
- [ ] Website deployed and live
- [ ] Mobile responsive tested
- [ ] WhatsApp integration working
- [ ] Contact form tested
- [ ] Social media links added
- [ ] Custom domain connected
- [ ] Google Analytics added
- [ ] Shared on social media

---

## Support Resources

- **Vercel Docs**: vercel.com/docs
- **Vite Docs**: vitejs.dev
- **React Docs**: react.dev
- **Tailwind Docs**: tailwindcss.com
- **Lucide Icons**: lucide.dev

---

**Estimated deployment time: 15-30 minutes**

Your high-conversion Bharat Bio Stove website is ready to go! 🚀
