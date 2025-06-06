# 📸 KotigPoto Frontend

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.6-38B2AC)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.38.4-green)](https://supabase.com/)

Modern web application for **KotigPoto** - Indonesia's leading PhotoBox payment gateway system. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **💳 Payment Gateway Integration** - Support for QRIS, RFID cards, and voucher systems
- **📊 Real-time Dashboard** - Live monitoring and analytics for photo booth operations
- **🎯 Multi-device Support** - Responsive design for desktop, tablet, and mobile devices
- **🔐 Secure Authentication** - Powered by Supabase Auth with role-based access control
- **⚡ High Performance** - Optimized with Next.js 14 App Router and Server Components
- **🎨 Modern UI** - Beautiful interface built with Radix UI and Tailwind CSS
- **📱 PWA Ready** - Progressive Web App capabilities with offline support
- **🌐 SEO Optimized** - Complete meta tags, structured data, and sitemap generation

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Database
- **Backend as a Service**: [Supabase](https://supabase.com/)
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)

### State Management & Forms
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

### Additional Features
- **Charts**: [Recharts](https://recharts.org/)
- **QR Codes**: [React QR Code](https://github.com/rosskhanas/react-qr-code)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Date Handling**: [date-fns](https://date-fns.org/)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/potobox.git
cd potobox/frontend
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the frontend directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── dashboard/     # Dashboard pages
│   │   ├── booth/         # Photo booth interface
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   └── components/        # Reusable UI components
│       ├── ui/           # Base UI components
│       └── sections/     # Page sections
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run analyze` | Analyze bundle size |

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
npm run start
```

### Bundle Analysis

```bash
npm run analyze
```

This will generate a detailed bundle analysis to help optimize performance.

## 🎨 Styling Guide

This project uses **Tailwind CSS** for styling with a custom design system:

- **Colors**: Custom color palette defined in `tailwind.config.js`
- **Typography**: Custom font families and sizes
- **Components**: Reusable component classes
- **Responsive Design**: Mobile-first approach

### Custom Components

The project includes a comprehensive UI component library built on top of Radix UI:

- **Buttons** - Various button styles and sizes
- **Forms** - Input fields, selects, and form controls
- **Modals** - Dialog and modal components
- **Navigation** - Header, sidebar, and navigation components
- **Charts** - Data visualization components

## 🔐 Authentication

Authentication is handled by Supabase Auth with the following features:

- **Email/Password** login
- **Role-based access control**
- **Session management**
- **Protected routes**

## 📊 Dashboard Features

The admin dashboard includes:

- **📈 Analytics** - Revenue, transaction, and usage statistics
- **💳 Payment Management** - Transaction history and payment settings
- **🎪 Booth Management** - Photo booth configuration and monitoring
- **👥 User Management** - Customer and admin user management
- **🎫 Voucher System** - Create and manage discount vouchers
- **📱 QR Code Generation** - Generate QR codes for payments

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- Use **TypeScript** for all new code
- Follow **ESLint** and **Prettier** configurations
- Write **meaningful commit messages**
- Add **JSDoc comments** for complex functions

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions:

- **Email**: support@kotigpoto.com
- **Website**: [kotigpoto.com](https://kotigpoto.com)
- **Documentation**: [docs.kotigpoto.com](https://docs.kotigpoto.com)

## 🔄 Version History

- **v1.0.0** - Initial release with core payment gateway features
- **v1.1.0** - Added dashboard analytics and reporting
- **v1.2.0** - Mobile app integration and PWA support

---

<p align="center">
  Made with ❤️ by the KotigPoto Team
</p> 