# HP2 - Hero with Marquee Component

A Next.js project featuring an animated marquee hero section with shadcn/ui, Tailwind CSS, and TypeScript.

## Project Structure

```
hp2/
├── app/
│   ├── globals.css          # Global styles with Tailwind & CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page using HeroWithMarquee
├── components/
│   └── ui/
│       ├── cta-with-marquee.tsx  # Compact hero with marquee (default)
│       └── demo.tsx              # Full-width hero variant
├── lib/
│   └── utils.ts             # cn() utility for merging classes
├── package.json
├── tailwind.config.ts       # Tailwind config with marquee animation
├── tsconfig.json
└── next.config.ts
```

## Features

✅ **shadcn/ui project structure** - Organized with `/components/ui` convention
✅ **Tailwind CSS 3** - Full Tailwind support with custom animations
✅ **TypeScript** - Full type safety
✅ **Marquee Animation** - Smooth infinite scrolling with configurable speed
✅ **Scramble Button** - Interactive text scramble effect on hover
✅ **Responsive Design** - Mobile-first responsive layout
✅ **Next.js Image Optimization** - Automatic image optimization from Unsplash

## Components

### HeroWithMarquee (cta-with-marquee.tsx)
The default compact variant with:
- Two-column grid layout (text + marquee)
- Two rows of scrolling images
- Scramble button with animation
- Rounded image cards with gaps

### HeroWithMarqueeLarge (demo.tsx)
Full-width variant with:
- Full-bleed marquee images
- Vignette edge gradients
- Larger image sizes
- No gaps between images

## Component Props

### Marquee Component
```tsx
interface MarqueeProps {
  children: ReactNode;      // Content to scroll
  pauseOnHover?: boolean;   // Pause animation on hover
  reverse?: boolean;        // Reverse scroll direction
  className?: string;       // Additional classes
  speed?: number;          // Animation duration in seconds (default: 40)
}
```

## Why `/components/ui` Directory?

The `/components/ui` directory is a shadcn/ui convention that:

1. **Separates concerns** - Keeps reusable UI primitives separate from feature components
2. **Matches shadcn/ui CLI** - All shadcn components install to this directory
3. **Improves maintainability** - Clear distinction between:
   - `components/ui/*` - Reusable UI components
   - `components/*` - Feature-specific components
4. **Follows best practices** - Standard pattern in modern Next.js apps

## Installation & Usage

### Install dependencies:
```bash
npm install
```

### Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for production:
```bash
npm run build
npm start
```

## Customization

### Change Images
Edit the `images` and `images2` arrays in the component:
```tsx
const images = [
  "https://images.unsplash.com/photo-xxx?w=400&h=400&fit=crop",
  // Add more image URLs
];
```

### Adjust Speed
Modify the `speed` prop on the Marquee component:
```tsx
<Marquee speed={20}>  {/* Faster */}
<Marquee speed={60}>  {/* Slower */}
```

### Customize Text
Edit the content in the component:
```tsx
<h1>Your Custom Headline</h1>
<p>Your custom date/description</p>
```

### Switch Components
To use the full-width variant, edit `app/page.tsx`:
```tsx
import HeroWithMarqueeLarge from "@/components/ui/demo";

export default function Home() {
  return <HeroWithMarqueeLarge />;
}
```

## Theme Customization

The project uses CSS variables for theming. Edit `app/globals.css` to customize:

```css
:root {
  --primary: 0 0% 9%;           /* Primary button color */
  --primary-foreground: 0 0% 98%; /* Button text color */
  --background: 0 0% 100%;      /* Page background */
  /* ... more variables */
}
```

## Marquee Animation

The marquee animation is defined in `tailwind.config.ts`:

```ts
keyframes: {
  marquee: {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(calc(-100% - var(--gap)))" },
  },
},
animation: {
  marquee: "marquee var(--duration) linear infinite",
}
```

This creates a seamless infinite scroll effect by:
1. Duplicating content with `aria-hidden="true"`
2. Animating from 0% to -100% of width
3. Using CSS variables for gap and duration

## Dependencies

### Core
- **next**: ^15.1.3 - React framework
- **react**: ^19.0.0 - UI library
- **typescript**: ^5 - Type safety

### Styling
- **tailwindcss**: ^3.4.1 - Utility-first CSS
- **tailwindcss-animate**: ^1.0.7 - Animation utilities
- **tailwind-merge**: ^2.6.0 - Merge Tailwind classes
- **clsx**: ^2.1.1 - Conditional classes

### shadcn/ui
- **class-variance-authority**: ^0.7.1 - Component variants

## Responsive Behavior

- **Mobile**: Stacked layout with smaller images
- **Tablet**: Two-column grid begins at `lg:` breakpoint
- **Desktop**: Full two-column layout with larger images

## Questions & Answers

### What data/props are passed to the component?
- Currently uses hardcoded Unsplash image URLs
- Can be modified to accept props for dynamic content

### State management requirements?
- Local component state for scramble button animation
- No global state needed

### Required assets?
- Images loaded from Unsplash CDN
- No local image assets required

### Best place to use this component?
- Hero section on landing pages
- Portfolio showcases
- Image gallery headers
- Marketing pages

## License

This project is open source and available under the MIT License.
# tripperhp
