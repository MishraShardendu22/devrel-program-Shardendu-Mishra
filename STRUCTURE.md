# Project Structure Documentation

This document provides a detailed overview of the Keploy DevRel Program website's architecture and organization.

## 📂 Directory Structure

```
devrel-program/
├── src/                          # Source code
│   ├── app/                      # Next.js 15 App Router
│   │   ├── layout.tsx           # Root layout with fonts, metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   ├── custom.css           # Custom utility styles
│   │   ├── sitemap.ts           # Sitemap generation
│   │   └── favicon.ico          # Site favicon
│   │
│   ├── components/              # React components
│   │   ├── Footer.tsx           # Site footer with social links
│   │   ├── Header.tsx           # Site header/hero
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Join.tsx             # CTA section
│   │   ├── Menu.tsx             # Mobile menu
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── StructuredData.tsx   # SEO structured data
│   │   ├── Testimonial.tsx      # Testimonials carousel
│   │   └── WhyUs.tsx            # Benefits section
│   │
│   ├── lib/                     # Utility functions & constants
│   │   ├── utils.ts             # Helper functions (cn, formatDate, etc.)
│   │   └── constants.ts         # App-wide constants (URLs, config)
│   │
│   └── styles/                  # CSS files
│       ├── base.css             # Base/reset styles
│       ├── fonts.css            # Font definitions
│       ├── main.css             # Main styles
│       ├── vendor.css           # Third-party styles
│       └── font-awesome/        # Font Awesome icons
│           └── micons/          # Custom icon font
│
├── public/                      # Static assets (served as-is)
│   ├── cohort3.webp             # Images
│   ├── keploy-logo.webp
│   ├── robots.txt              # SEO robots file
│   ├── site.webmanifest        # PWA manifest
│   └── testimonials/           # Testimonial images
│
├── fonts/                       # Custom fonts
│   ├── lora/                   # Lora font family
│   └── montserrat/             # Montserrat font family
│
├── .editorconfig               # Editor configuration
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Prettier ignore patterns
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Dependencies and scripts
├── pnpm-lock.yaml              # pnpm lockfile
├── pnpm-workspace.yaml         # pnpm workspace config
├── README.md                   # Project documentation
├── CONTRIBUTING.md             # Contribution guidelines
├── CODE_OF_CONDUCT.md          # Code of conduct
├── LICENSE                     # Apache 2.0 license
└── SECURITY.md                 # Security policy
```

## 🗂️ Key Directories Explained

### `src/app/` - Next.js App Router

The `app` directory uses Next.js 15's App Router with the following key files:

- **`layout.tsx`**: Root layout that wraps all pages
  - Configures fonts (Lora, Montserrat)
  - Sets up metadata for SEO
  - Includes global navigation and structured data
  - Imports all CSS files

- **`page.tsx`**: Homepage component
  - Composes all major sections (Hero, WhyUs, Testimonials, Join)
  - Server-rendered by default for optimal performance

- **`sitemap.ts`**: Dynamic sitemap generation for SEO
  - Auto-generated at build time
  - Helps search engines crawl the site

### `src/components/` - React Components

All reusable UI components organized by feature:

| Component            | Purpose                              |
| -------------------- | ------------------------------------ |
| `Header.tsx`         | Top header section                   |
| `Navbar.tsx`         | Navigation menu with logo and links  |
| `Menu.tsx`           | Mobile hamburger menu                |
| `Hero.tsx`           | Main hero section with CTA           |
| `WhyUs.tsx`          | Benefits/features grid               |
| `Testimonial.tsx`    | Testimonial cards/carousel           |
| `Join.tsx`           | Call-to-action section               |
| `Footer.tsx`         | Site footer with links and copyright |
| `StructuredData.tsx` | JSON-LD structured data for SEO      |

**Component Guidelines:**

- Each component is a separate file
- Use TypeScript for type safety
- Export as named exports
- Keep components focused and single-purpose
- Use Tailwind CSS for styling

### `src/lib/` - Utilities & Constants

Shared code that can be imported throughout the app:

#### `utils.ts`

Common utility functions:

```typescript
cn(); // Combine class names
formatDate(); // Format dates consistently
truncateText(); // Truncate with ellipsis
```

#### `constants.ts`

Application-wide constants:

```typescript
SITE_CONFIG; // Site metadata, URLs
PROGRAM_DETAILS; // Program duration, timelines
SOCIAL_LINKS; // Social media URLs
```

### `src/styles/` - CSS Files

Organized stylesheet architecture:

- **`base.css`**: CSS reset, base element styles
- **`fonts.css`**: @font-face declarations for custom fonts
- **`main.css`**: Main site styles, components, utilities
- **`vendor.css`**: Third-party library styles
- **`font-awesome/`**: Font Awesome icon font
- **`micons/`**: Custom icon font

**Import order in `layout.tsx`:**

1. `globals.css` (Next.js global styles with Tailwind)
2. `base.css`
3. `vendor.css`
4. `main.css`
5. `fonts.css`
6. Icon fonts (font-awesome, micons)
7. `custom.css`

### `public/` - Static Assets

Files served directly without processing:

- **Images**: Logos, backgrounds, photos
- **`robots.txt`**: Search engine crawling rules
- **`site.webmanifest`**: PWA configuration
- **`testimonials/`**: Testimonial profile images

**Best practices:**

- Optimize images before adding (use WebP when possible)
- Use descriptive filenames
- Keep file sizes small for performance

### `fonts/` - Custom Fonts

Local font files for better performance and privacy:

- **Lora**: Serif font for headings
- **Montserrat**: Sans-serif font for body text

Fonts are loaded using Next.js `localFont` for optimal performance.

## 🔧 Configuration Files

### `.editorconfig`

Ensures consistent coding style across different editors:

- 2-space indentation
- UTF-8 encoding
- LF line endings
- Trim trailing whitespace

### `.prettierrc`

Code formatting rules:

- Single quotes
- 2-space indentation
- 100 character line length
- Semicolons required
- Trailing commas (ES5)

### `eslint.config.mjs`

Linting rules for code quality:

- Next.js recommended rules
- TypeScript rules
- React hooks rules
- Custom rules for consistency

### `tsconfig.json`

TypeScript compiler options:

- Strict mode enabled
- Path aliases (`@/*` → `./src/*`)
- ES2017 target
- Module resolution: bundler

### `next.config.ts`

Next.js configuration:

- Turbopack enabled for faster builds
- Image optimization settings
- Environment variables

### `tailwind.config.js`

Tailwind CSS customization:

- Custom colors
- Font families
- Breakpoints
- Plugins

## 🎨 Styling Architecture

The project uses a hybrid approach:

1. **Tailwind CSS**: Utility-first for most components
2. **Custom CSS**: For complex layouts and legacy styles
3. **CSS Modules**: Not currently used, but supported

**Styling precedence:**

1. Inline Tailwind utilities
2. Custom component classes
3. Global styles

## 🔄 Data Flow

```
layout.tsx (Root)
    ↓
page.tsx (Homepage)
    ↓
├── Header
├── Hero
├── WhyUs
├── Testimonial
├── Join
└── Footer
```

- **Server Components**: All components are server components by default
- **No client state**: Currently static, no client-side interactivity
- **Build-time rendering**: Pages are generated at build time

## 📦 Dependencies

### Core Dependencies

- `next` (15.5.4): React framework
- `react` (19.1.0): UI library
- `react-dom` (19.1.0): React DOM renderer
- `lucide-react`: Icon library
- `nodemailer`: Email functionality

### Dev Dependencies

- `typescript`: Type checking
- `eslint`: Linting
- `prettier`: Code formatting
- `tailwindcss`: Styling
- `@types/*`: TypeScript type definitions

## 🚀 Scripts Overview

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm format       # Format with Prettier
pnpm format:check # Check formatting
pnpm type-check   # TypeScript type checking
```

## 🔍 SEO & Performance

### SEO Features

- ✅ Metadata in `layout.tsx`
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Semantic HTML

### Performance Optimizations

- ✅ Server-side rendering
- ✅ Image optimization (Next.js Image)
- ✅ Font optimization (local fonts)
- ✅ Code splitting (automatic)
- ✅ Turbopack for fast builds
- ✅ Static generation

## 🎯 Adding New Features

### Adding a New Component

1. Create file in `src/components/`:

   ```typescript
   // src/components/NewSection.tsx
   export const NewSection = () => {
     return <section>Content</section>;
   };
   ```

2. Import in `page.tsx`:

   ```typescript
   import { NewSection } from '@/components/NewSection';
   ```

3. Add to page:
   ```typescript
   <NewSection />
   ```

### Adding a New Page

1. Create directory in `src/app/`:

   ```
   src/app/about/page.tsx
   ```

2. Export default component:

   ```typescript
   export default function AboutPage() {
     return <div>About</div>;
   }
   ```

3. Access at `/about`

### Adding Utility Functions

1. Add to `src/lib/utils.ts`:

   ```typescript
   export function newUtility() {
     // Implementation
   }
   ```

2. Import where needed:
   ```typescript
   import { newUtility } from '@/lib/utils';
   ```

## 🔐 Environment Variables

Create `.env.local` for environment-specific config:

```env
# Example variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- Prefix with `NEXT_PUBLIC_` for client-side access
- Never commit `.env.local` to Git
- Document required variables in README

## 📚 Additional Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/reference/react/use-server)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

For questions about the project structure, ask in the [GitHub Discussions](https://github.com/keploy/devrel-program/discussions) or on [Slack](https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg).
