# Acadiana Exteriors

**Professional pressure washing and exterior maintenance services for Acadiana, Louisiana.**

🌐 **Website**: [acadianaexteriors.com](https://acadianaexteriors.com)
📧 **Contact**: Jonathan (Primary POC)
🚀 **Status**: MVP Development - ASAP Launch

---

## 📋 Project Overview

Acadiana Exteriors is a Progressive Web Application (PWA) built to power a modern pressure washing and property maintenance business. The platform grows from a simple marketing site to a full business management system with customer bookings, job scheduling, and payment processing.

### Key Features

**Phase 1 (Current - Week 1 MVP)**
- 🏠 Marketing website with service pages
- 📝 Quote request form with email notifications
- 📱 Mobile-responsive design
- 🎨 Louisiana-inspired branding
- 📊 Google Analytics integration

**Phase 2 (Weeks 2-3)**
- 👤 Customer accounts and authentication
- 📅 Online booking system
- 🔔 Email confirmations and reminders

**Phase 3 (Month 2+)**
- 🛠️ Admin dashboard for job management
- 💳 Payment processing (Stripe)
- 📈 Revenue tracking and analytics

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (React, App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

### Backend & Infrastructure
- **Hosting**: [Vercel](https://vercel.com/) (Free tier: 100 GB bandwidth/month)
- **Database**: [Neon PostgreSQL](https://neon.tech/) (Free tier: 512 MB)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/) (Free tier: 10,000 MAU)
- **File Storage**: [Cloudinary](https://cloudinary.com/) (Free tier: 25 GB)
- **Email**: [Resend](https://resend.com/) (Free tier: 3,000 emails/month)

### Analytics & Monitoring
- **Analytics**: Google Analytics 4
- **Error Tracking**: [Sentry](https://sentry.io/) (Free tier: 5K errors/month)

### Development Tools
- **Language**: TypeScript
- **Version Control**: Git + GitHub
- **Package Manager**: npm (or yarn/pnpm)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v20 or higher
- [Git](https://git-scm.com/)
- A code editor ([VS Code](https://code.visualstudio.com/) recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/acadiana-exteriors.git
   cd acadiana-exteriors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   # Database (Neon)
   DATABASE_URL="postgresql://..."

   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
   CLERK_SECRET_KEY="sk_..."

   # Email (Resend)
   RESEND_API_KEY="re_..."

   # File Upload (Cloudinary)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
   CLOUDINARY_API_KEY="..."
   CLOUDINARY_API_SECRET="..."

   # Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID="G-..."

   # Error Tracking (Sentry)
   NEXT_PUBLIC_SENTRY_DSN="..."
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open the app**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
acadiana-exteriors/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (marketing)/          # Public marketing pages
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── services/         # Service detail pages
│   │   │   ├── about/            # About us page
│   │   │   ├── gallery/          # Photo gallery
│   │   │   └── contact/          # Contact page
│   │   ├── (booking)/            # Quote & booking flows
│   │   │   ├── quote/            # Quote request form
│   │   │   └── book/             # Online booking
│   │   ├── (dashboard)/          # Protected dashboards
│   │   │   ├── admin/            # Admin panel
│   │   │   └── customer/         # Customer portal
│   │   ├── api/                  # API routes
│   │   │   ├── quote/            # Quote submission
│   │   │   ├── booking/          # Booking creation
│   │   │   └── webhooks/         # Stripe, Clerk webhooks
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── marketing/            # Marketing page components
│   │   ├── booking/              # Booking flow components
│   │   └── dashboard/            # Dashboard components
│   ├── lib/                      # Utility functions
│   │   ├── db.ts                 # Prisma client
│   │   ├── email.ts              # Email templates & sending
│   │   ├── cloudinary.ts         # Image upload utilities
│   │   └── utils.ts              # General utilities
│   └── types/                    # TypeScript type definitions
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Database migrations
├── public/                       # Static assets
│   ├── images/                   # Images
│   └── favicon.ico               # Favicon
├── .env.local                    # Environment variables (not in git)
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 🌟 Key Services & Setup

### 1. Neon PostgreSQL (Database)

1. Go to [neon.tech](https://neon.tech)
2. Create a new project: "acadiana-exteriors"
3. Copy the connection string
4. Add to `.env.local` as `DATABASE_URL`

### 2. Clerk (Authentication)

1. Go to [clerk.com](https://clerk.com)
2. Create a new application: "Acadiana Exteriors"
3. Get your API keys from the dashboard
4. Add to `.env.local`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

### 3. Resend (Email)

1. Go to [resend.com](https://resend.com)
2. Create an API key
3. Verify your domain: `acadianaexteriors.com`
4. Add to `.env.local` as `RESEND_API_KEY`

### 4. Cloudinary (Image Storage)

1. Go to [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add to `.env.local`:
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

### 5. Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for `acadianaexteriors.com`
3. Get your Measurement ID (starts with `G-`)
4. Add to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### 6. Vercel (Hosting)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add all environment variables in the Vercel dashboard
4. Deploy! 🚀

---

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Build for production |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma migrate dev` | Create and apply a new migration |
| `npx prisma generate` | Generate Prisma Client |

---

## 🎨 Brand Guidelines

### Colors (Louisiana-inspired)
- **Primary Blue**: `#0066CC` (Professional, trustworthy)
- **Accent Green**: `#00A86B` (Fresh, clean, nature)
- **Neutral Gray**: `#64748B` (Professional text)
- **Light Background**: `#F8FAFC` (Clean, modern)

### Typography
- **Headings**: System font stack (Inter, SF Pro, Segoe UI)
- **Body**: System font stack
- **Monospace**: Consolas, Monaco (for code)

### Logo
- To be designed in Canva
- Should incorporate Louisiana elements (subtle)
- Modern, clean, professional

---

## 📊 Free Tier Limits

| Service | Free Limit | Upgrade Trigger | Cost |
|---------|-----------|-----------------|------|
| Vercel | 100 GB bandwidth/month | 5,000+ visitors/month | $20/mo |
| Neon | 512 MB database | 2,000+ customers | $19/mo |
| Clerk | 10,000 MAU | 10,000+ active users | $25/mo |
| Cloudinary | 25 GB bandwidth/month | Heavy photo usage | $89/mo |
| Resend | 3,000 emails/month | 750+ bookings/month | $20/mo |

**Estimated runway**: 6-12 months before needing upgrades (likely at $10K-20K monthly revenue)

---

## 🚢 Deployment

### Automatic Deployments (Recommended)

1. Push code to GitHub `main` branch
2. Vercel automatically deploys
3. Check deployment at `acadianaexteriors.vercel.app`
4. Custom domain configured: `acadianaexteriors.com`

### Manual Deployment

```bash
npm run build
vercel --prod
```

---

## 📝 Roadmap

### ✅ Phase 1: Marketing MVP (Week 1)
- [x] Set up Next.js project
- [ ] Design homepage with hero section
- [ ] Create service pages (pressure washing, windows, gutters)
- [ ] Build about page (Brandon & Jonathan)
- [ ] Add contact form with Resend integration
- [ ] Implement quote request form
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Deploy to Vercel

### 🔄 Phase 2: Customer Portal (Weeks 2-3)
- [ ] Integrate Clerk authentication
- [ ] Build customer dashboard
- [ ] Create booking flow with calendar
- [ ] Set up Neon database with Prisma
- [ ] Email confirmations for bookings
- [ ] Quote status tracking

### ⏳ Phase 3: Admin Dashboard (Month 2)
- [ ] Admin authentication and roles
- [ ] Job management interface
- [ ] Customer database view
- [ ] Basic invoice generation
- [ ] Revenue tracking
- [ ] Before/after photo uploads

### 🎯 Phase 4: Advanced Features (Month 3+)
- [ ] Stripe payment processing
- [ ] SMS notifications (Twilio)
- [ ] Route optimization (Google Maps)
- [ ] Customer testimonials
- [ ] Referral program
- [ ] Blog for SEO

---

## 🤝 Contributing

This is a private project for Acadiana Exteriors. If you're part of the team:

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "Add your feature"`
3. Push to GitHub: `git push origin feature/your-feature-name`
4. Create a Pull Request for review

---

## 📄 License

Private project - All rights reserved by Acadiana Exteriors (Brandon & Jonathan)

---

## 📞 Support & Contact

- **Primary Contact**: Jonathan
- **Website**: [acadianaexteriors.com](https://acadianaexteriors.com)
- **Email**: (To be configured with Resend)

---

## 📚 Additional Resources

- [Full Implementation Plan](C:\Users\jonat\.claude\plans\iridescent-humming-raven.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Clerk Docs](https://clerk.com/docs)

---

**Built with ❤️ in Acadiana, Louisiana**
