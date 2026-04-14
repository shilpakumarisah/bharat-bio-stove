# Bharat Bio Stove - Website Setup Guide

## Overview
This is a modern, fully responsive website for Bharat Bio Stove built with React and Tailwind CSS. It includes all required sections, sticky WhatsApp button, contact forms, and mobile optimization.

## Features Included
✅ Hero section with strong CTAs (WhatsApp & Job Application)
✅ About Us section with mission and vision
✅ Product information with benefits
✅ Hiring section for skilled stove makers
✅ Dealer/Bulk order section
✅ Contact form integrated with WhatsApp
✅ Sticky WhatsApp button on all pages
✅ Fully responsive (mobile, tablet, desktop)
✅ Fast loading with Tailwind CSS
✅ Orange, Blue, White color theme
✅ Icons from lucide-react
✅ Smooth scroll navigation
✅ Social media ready (Instagram, Facebook links)

## How to Use

### Option 1: Run with Vite (Recommended)
```bash
npm create vite@latest bharat-bio-stove -- --template react
cd bharat-bio-stove
npm install
# Replace the contents of src/App.jsx with this file
npm run dev
```

### Option 2: Use with Next.js
```bash
npx create-next-app@latest
# Place the component in pages/index.js
npm run dev
```

### Option 3: Deploy to Vercel (Free Hosting)
1. Create a GitHub account
2. Push your React code to GitHub
3. Visit vercel.com and connect your GitHub repo
4. Vercel will auto-deploy your site
5. You'll get a live URL (e.g., bharat-bio-stove.vercel.app)

## Installation Steps (Vite Method)

```bash
# 1. Create new Vite project
npm create vite@latest bharat-bio-stove -- --template react

# 2. Navigate to project
cd bharat-bio-stove

# 3. Install dependencies
npm install

# 4. Install required packages if not included
npm install lucide-react

# 5. Replace src/App.jsx with the provided code

# 6. Start development server
npm run dev

# 7. Build for production
npm run build

# 8. Deploy to hosting service
```

## Customization Guide

### Change Phone Number
Find and replace `8796979076` with your actual phone number throughout the file.

### Change WhatsApp Message
The WhatsApp URL is constructed here:
```javascript
const whatsappURL = "https://wa.me/918796979076?text=Hello!%20I'm%20interested%20in%20Bharat%20Bio%20Stove.";
```
Modify the `text=` parameter to change the default message.

### Update Colors
The color scheme uses Tailwind CSS classes:
- **Orange**: `bg-orange-600`, `text-orange-600`, `border-orange-600`
- **Blue**: `bg-blue-600`, `text-blue-600`, `border-blue-600`
- **Green**: Used for checkmarks and WhatsApp button

To change colors, replace all instances:
- `orange-600` → your preferred color (e.g., `red-600`, `yellow-600`)
- `blue-600` → your preferred color

### Add Your Company Details
1. **Name**: Replace "Bharat Bio Stove" with your company name
2. **Phone**: Update `8796979076` throughout
3. **Logo**: Replace the `<Flame>` icon with your logo
4. **Business hours**: Update in contact section

### Add Social Media Links
Find the footer section and update:
```javascript
<a href="#" className="hover:text-orange-600">Instagram</a>
<a href="#" className="hover:text-orange-600">Facebook</a>
```
Replace `#` with your actual social media URLs.

## Content Sections

### 1. Hero Section (`id="home"`)
- Main headline and subheadline
- Two CTA buttons (WhatsApp and Job Application)
- Key benefits grid

### 2. About Section (`id="about"`)
- Mission statement
- Vision and values

### 3. Product Section (`id="product"`)
- How the stove works
- Four key features with icons
- Benefits cards

### 4. Hiring Section (`id="hiring"`)
- Job position details
- Experience requirements
- Benefits offered
- Contact buttons (WhatsApp and Phone)

### 5. Dealers Section (`id="dealers"`)
- Partnership benefits
- Bulk order information
- Contact for bulk orders

### 6. Contact Section (`id="contact"`)
- Phone, WhatsApp, and hours
- Quick contact form that sends via WhatsApp
- Inquiry type dropdown

## Performance Tips

1. **Images**: Add product images by importing and placing in relevant sections
2. **SEO**: Add meta tags in the HTML head:
   ```html
   <title>Bharat Bio Stove - Smokeless Biomass Cooking</title>
   <meta name="description" content="No smoke. Low cost. Smokeless biomass cooking stoves for rural households.">
   ```

3. **Analytics**: Add Google Analytics code to track visitors
4. **Mobile Testing**: Test on actual mobile devices before launch

## Hosting Options

### Free Options:
1. **Vercel** (Best for React) - vercel.com
2. **Netlify** - netlify.com
3. **GitHub Pages** - github.com

### Paid Options:
1. **AWS** - aws.amazon.com
2. **DigitalOcean** - digitalocean.com
3. **Hostinger** - hostinger.com (cheap shared hosting)

## Domain Setup

1. Buy domain from: GoDaddy, Namecheap, or BigRock
2. Point domain DNS to your hosting provider
3. Set up SSL/HTTPS (most hosts do this automatically now)

## WhatsApp Integration

The website uses WhatsApp Web API (click-to-chat):
- Users click WhatsApp button
- Opens WhatsApp with pre-filled message
- Works on both mobile and desktop
- No backend server needed

## Contact Form

The contact form sends messages via WhatsApp:
1. User fills form with name, phone, type, message
2. Data is formatted as text
3. Opens WhatsApp with pre-filled message
4. No email backend needed

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

## Troubleshooting

**WhatsApp button not opening?**
- Check if WhatsApp is installed on the device
- On desktop, user needs WhatsApp Web enabled
- Ensure phone number format is correct (country code included)

**Form not working?**
- Check browser console for errors
- Ensure WhatsApp is available on the user's device
- Test with actual WhatsApp account

**Styling issues?**
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure Tailwind CSS is properly installed
- Check if lucide-react icons are loaded

## Next Steps

1. ✅ Deploy to hosting provider
2. ✅ Connect custom domain
3. ✅ Set up Google Analytics
4. ✅ Create Google My Business listing
5. ✅ Share website on social media
6. ✅ Monitor leads and conversions

## Support

For any questions or customizations:
- Contact the development team
- Check React documentation: react.dev
- Tailwind CSS docs: tailwindcss.com

---

**Ready to launch!** Your modern, high-conversion website is ready to generate leads for Bharat Bio Stove. 🚀
