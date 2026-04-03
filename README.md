# 6Stars ⭐

A modern, full-stack cleaning services web application built with Next.js, MongoDB, and Supabase. Features a beautiful component library, real-time data management, and a responsive UI powered by TailwindCSS.

**Live Demo:** [https://6-stars.vercel.app](https://6-stars.vercel.app)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Development Guide](#development-guide)
- [API Integration](#api-integration)
- [Component Library](#component-library)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **Modern UI Components**: Comprehensive Radix UI component library with TailwindCSS styling
- **Full-Stack Architecture**: Next.js 14 with API routes and database integration
- **Real-time Database**: MongoDB integration for flexible data storage
- **Authentication**: Supabase authentication and SSR support
- **Dark Mode Support**: Built-in theme switching with next-themes
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Form Validation**: React Hook Form with Zod schema validation
- **Charts & Analytics**: Recharts integration for data visualization
- **Toast Notifications**: Sonner for user feedback
- **Carousel Support**: Embla Carousel for image/content carousels
- **Accessibility**: WCAG compliant with Radix UI primitives
- **Fullscreen Hero Video**: Modern landing page with optimized video background
- **Multi-language Support**: English and Danish translations
- **Booking System**: Integrated booking form with WhatsApp integration

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14.2.3](https://nextjs.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Styling**: [TailwindCSS 3.4.1](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Animations**: [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)

### Forms & Validation
- **Form Management**: [React Hook Form 7.58.1](https://react-hook-form.com/)
- **Schema Validation**: [Zod 3.25.67](https://zod.dev/)
- **Resolver**: [@hookform/resolvers](https://github.com/react-hook-form/resolvers)

### Data Visualization & Tables
- **Charts**: [Recharts 2.15.3](https://recharts.org/)
- **Tables**: [@tanstack/react-table 8.21.3](https://tanstack.com/table/)
- **Carousel**: [embla-carousel-react 8.6.0](https://www.embla-carousel.com/)

### Backend & Database
- **Database**: [MongoDB 6.6.0](https://www.mongodb.com/)
- **HTTP Client**: [Axios 1.10.0](https://axios-http.com/)
- **Backend**: Next.js API Routes

### Authentication & Services
- **Auth Service**: [Supabase](https://supabase.com/)
- **Supabase JS**: [@supabase/supabase-js 2.45.0](https://supabase.com/docs/reference/javascript)
- **SSR Support**: [@supabase/ssr 0.5.0](https://supabase.com/docs/guides/auth/server-side-rendering)

### Utilities
- **UUID Generation**: [uuid 9.0.1](https://github.com/uuidjs/uuid)
- **Command Palette**: [cmdk 1.1.1](https://cmdk.paco.me/)
- **OTP Input**: [input-otp 1.4.2](https://input-otp.modui.org/)
- **Class Utilities**: [clsx 2.1.1](https://github.com/lukeed/clsx), [tailwind-merge 3.3.1](https://github.com/dcastil/tailwind-merge)
- **Dates**: [date-fns 4.1.0](https://date-fns.org/)
- **Calendar**: [react-day-picker 9.7.0](https://react-day-picker.js.org/)
- **Drawers**: [vaul 1.1.2](https://github.com/emilkowalski/vaul)
- **Notifications**: [Sonner 2.0.5](https://sonner.emilkowal.ski/)
- **Resizable Panels**: [react-resizable-panels 3.0.3](https://github.com/bvaughn/react-resizable-panels)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (recommended 20+)
- **Yarn** 1.22.22+ (or npm/pnpm)
- **MongoDB** instance (local or Atlas)
- **Supabase** account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sabin147/6Stars.git
   cd 6Stars
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Optional: Analytics, etc.
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Add your hero video** (optional)
   
   Place your video file in `/public/hero-video.mp4`
   - Recommended: 5-12 seconds, 3-6MB, MP4 format
   - See [VIDEO_INSTRUCTIONS.md](./VIDEO_INSTRUCTIONS.md) for details

5. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
6Stars/
├── app/                      # Next.js 14 App Router
│   ├── api/                  # API routes
│   │   └── [[...path]]/     # Catch-all API handler
│   ├── globals.css           # Global styles & animations
│   ├── layout.js             # Root layout with metadata
│   └── page.js               # Homepage component
├── components/               # React components
│   └── ui/                   # Shadcn UI components
│       ├── button.jsx
│       ├── card.jsx
│       ├── dialog.jsx
│       └── ...               # 40+ components
├── hooks/                    # Custom React hooks
│   └── use-toast.js
├── lib/                      # Utilities & config
│   ├── translations.js       # i18n translations (EN/DA)
│   └── utils.js              # Helper functions
├── public/                   # Static assets
│   └── hero-video.mp4        # Hero background video
├── components.json           # Shadcn UI config
├── jsconfig.json             # JavaScript config
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS config
├── tailwind.config.js        # Tailwind configuration
└── VIDEO_INSTRUCTIONS.md     # Hero video setup guide
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | ✅ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | ❌ |

### Example `.env.local`

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## 📜 Available Scripts

```bash
# Development server (optimized memory)
yarn dev

# Development without hot reload
yarn dev:no-reload

# Development with webpack
yarn dev:webpack

# Production build
yarn build

# Start production server
yarn start
```

### Script Details

- **`yarn dev`**: Starts development server on `0.0.0.0:3000` with memory optimization
- **`yarn build`**: Creates optimized production build
- **`yarn start`**: Runs production server

---

## 🔧 Development Guide

### Adding New Components

Use Shadcn CLI to add pre-built components:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add form
```

### Creating New Pages

1. Create a new folder in `app/`
2. Add `page.js` for the route
3. (Optional) Add `layout.js` for nested layout

Example:
```
app/
└── services/
    └── page.js         # Route: /services
```

### Modifying Translations

Edit `lib/translations.js`:

```javascript
export const translations = {
  en: {
    // English translations
  },
  da: {
    // Danish translations
  }
}
```

### Styling Guidelines

- Use **Tailwind utility classes** for styling
- Follow **mobile-first** approach
- Use **CSS variables** for theme colors (defined in `globals.css`)
- Maintain **consistent spacing** (4px increments)

---

## 🔌 API Integration

### API Routes

API routes are located in `app/api/[[...path]]/route.js`

#### Example: Booking Endpoint

```javascript
// POST /api/bookings
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+45 12345678",
  "service": "office",
  "date": "2024-04-15",
  "notes": "Need window cleaning"
}
```

### MongoDB Connection

The app uses MongoDB for data storage. Connection is established via `mongodb` package.

```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
```

---

## 🎨 Component Library

### Available Components (40+)

**Layout & Structure**
- Accordion, Card, Separator, Tabs, Collapsible

**Forms & Input**
- Button, Input, Label, Checkbox, Switch, Radio Group, Select, Slider, Textarea, Form

**Overlays & Dialogs**
- Dialog, Alert Dialog, Drawer, Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu

**Navigation**
- Navigation Menu, Menubar, Command

**Data Display**
- Table, Avatar, Badge, Progress, Scroll Area

**Feedback**
- Toast, Sonner (notifications)

**Specialized**
- Calendar, Date Picker, OTP Input, Carousel

### Usage Example

```jsx
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello World</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.local`

4. **Deploy**
   - Push to `main` branch triggers automatic deployment
   - Production URL: `https://your-app.vercel.app`

### Manual Deployment

```bash
# Build
yarn build

# Start production server
yarn start
```

Server runs on `http://localhost:3000`

---

## 🧪 Testing

### Local Testing

```bash
# Start development server
yarn dev

# In another terminal, test API
curl http://localhost:3000/api/health
```

### Video Testing

Check [VIDEO_INSTRUCTIONS.md](./VIDEO_INSTRUCTIONS.md) for hero video testing checklist:
- ✅ Desktop autoplay
- ✅ Mobile playback
- ✅ Loop seamlessness
- ✅ Loading speed

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Use **ESLint** rules (configured in project)
- Follow **Prettier** formatting
- Write **descriptive commit messages**
- Add **comments** for complex logic

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 📞 Contact & Support

**6star Rengøring og Services ApS**

- 🌐 Website: [https://6-stars.vercel.app](https://6-stars.vercel.app)
- 📧 Email: contact@6stars.dk
- 📱 WhatsApp: +45 31862094
- 📍 Location: Copenhagen, Denmark

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Vercel](https://vercel.com/) - Hosting platform
- [MongoDB](https://www.mongodb.com/) - Database
- [Supabase](https://supabase.com/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling

---

## 📈 Stats

- **Components**: 40+ UI components
- **Dependencies**: 60+ npm packages
- **Languages**: English & Danish
- **Deployment**: Vercel (auto-deploy)
- **Performance**: Optimized for Web Vitals

---

**Built with ❤️ in Copenhagen** 🇩🇰
