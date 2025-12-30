# Quick Setup Guide

## ✅ What's Already Done

1. ✅ Next.js 15 project initialized with TypeScript
2. ✅ Tailwind CSS 3 configured with custom animations
3. ✅ shadcn/ui structure with `components.json`
4. ✅ `/components/ui` directory created
5. ✅ Marquee animation added to Tailwind config
6. ✅ Both component variants created:
   - `components/ui/cta-with-marquee.tsx` (compact)
   - `components/ui/demo.tsx` (full-width)
7. ✅ All NPM dependencies installed
8. ✅ Main page configured

## 🚀 Run the Project

```bash
# Start development server
npm run dev
```

Then open: http://localhost:3000

## 📁 Project Structure

```
hp2/
├── app/
│   ├── globals.css              # Tailwind + theme variables
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Uses HeroWithMarquee
├── components/
│   └── ui/
│       ├── cta-with-marquee.tsx # Default component ✨
│       └── demo.tsx             # Full-width variant
├── lib/
│   └── utils.ts                 # cn() utility
└── [config files]
```

## 🎨 Switch Components

Edit `app/page.tsx`:

**Option 1 - Compact (Current)**
```tsx
import { HeroWithMarquee } from "@/components/ui/cta-with-marquee";

export default function Home() {
  return <HeroWithMarquee />;
}
```

**Option 2 - Full Width**
```tsx
import HeroWithMarqueeLarge from "@/components/ui/demo";

export default function Home() {
  return <HeroWithMarqueeLarge />;
}
```

## 🔧 Key Features

### Marquee Component
- Infinite scroll animation
- Configurable speed: `<Marquee speed={30}>`
- Reverse direction: `<Marquee reverse>`
- Pause on hover: `<Marquee pauseOnHover>`

### Scramble Button
- Hover to trigger text scramble effect
- Smooth animation with random characters
- Customizable in component

## 📝 Customization Tips

### Change Images
```tsx
const images = [
  "https://images.unsplash.com/photo-xxx?w=400&h=400&fit=crop",
  // Your URLs here
];
```

### Adjust Speed
```tsx
<Marquee speed={20}>  {/* Faster */}
<Marquee speed={60}>  {/* Slower */}
```

### Modify Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: 0 0% 9%;
  --background: 0 0% 100%;
}
```

## 🌐 Image Configuration

Images from Unsplash are already configured in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
}
```

To use other image sources, add them to `remotePatterns`.

## 🛠 Available Scripts

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Production server
npm run lint   # Run ESLint
```

## 📦 Dependencies

All dependencies are installed and ready:

- ✅ Next.js 15.1.3
- ✅ React 19
- ✅ TypeScript 5
- ✅ Tailwind CSS 3.4.1
- ✅ tailwindcss-animate
- ✅ class-variance-authority
- ✅ clsx & tailwind-merge
- ✅ lucide-react (for icons if needed)

## 🎯 Next Steps

1. Run `npm run dev`
2. Open http://localhost:3000
3. Customize content in components
4. Replace images with your own
5. Adjust colors and theme
6. Add more sections as needed

## 💡 Why `/components/ui`?

This directory structure:
- Follows shadcn/ui conventions
- Separates reusable UI from features
- Makes future shadcn component additions seamless
- Improves code organization

## 🐛 Troubleshooting

### Port already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Type errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Image not loading
- Check Unsplash URL is valid
- Verify `next.config.ts` has remotePatterns
- Check browser console for errors

---

Ready to go! Run `npm run dev` and start building. 🚀
