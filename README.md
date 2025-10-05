# Skip E-Commerce - Frontend Assessment

A modern e-commerce application built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Authentication System
- ✅ User Registration with validation
- ✅ User Login
- ✅ Email Verification (Code: `123456`)
- ✅ Token-based authentication
- ✅ Protected routes with middleware
- ✅ Automatic token management in localStorage


## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Form Validation:** React Hook Form + Zod

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd skip-ecommerce

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=https://tinytales.trendline.marketing/api
```

## 🗂️ Project Structure

```
skip-ecommerce/
├── app/
│   ├── (auth)/
│   │   ├── register/        # Registration page
│   │   ├── login/           # Login page
│   │   └── verify/          # Email verification page
│   ├── dashboard/           # Protected dashboard
│   ├── product/[id]/        # Product details page
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── auth/                # Auth-related components
│   ├── product/             # Product-related components
│   │   ├── ProductHeader.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── RatingReviews.tsx
│   │   ├── SimilarItems.tsx
│   │   └── ProductFooter.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       └── Input.tsx
├── lib/
│   ├── api/
│   │   ├── client.ts        # Axios configuration
│   │   └── auth.ts          # Authentication service
│   └── utils.ts             # Utility functions
├── hooks/
│   └── useAuth.ts           # Custom auth hook
├── types/
│   └── index.ts             # TypeScript type definitions
└── middleware.ts            # Route protection middleware
```

## 🎯 API Integration

### Base URL
```
https://tinytales.trendline.marketing/api
```

### Available Endpoints

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/verify-email` - Verify email with code
- `POST /auth/verify-email/resend-code` - Resend verification code
- `GET /auth/user-data` - Get authenticated user data
- `POST /auth/logout` - Logout user

### Testing Credentials

**For Email Verification:**
- Verification Code: `123456`



## 📱 Pages Overview

### 1. Registration Page (`/register`)
- Full name, email, phone, password fields
- Country code selection
- Real-time validation
- API integration with error handling

### 2. Login Page (`/login`)
- Email and password authentication
- Remember me functionality
- Redirect to verify if email not verified
- Token storage in localStorage

### 3. Verify Account Page (`/verify`)
- 6-digit code input
- Auto-focus on input fields
- Paste support for verification code
- Resend code functionality
- Test code: `123456`


### 5. Product Details Page (`/product/[id]`)
- **Desktop View:**
  - Image gallery with navigation
  - Product information panel
  - Color and size selection
  - Quantity management
  - Add to cart functionality
  - Rating & reviews section
  - Similar products carousel
  
- **Mobile View:**
  - Optimized mobile layout
  - Touch-friendly interface
  - Swipeable image gallery
  - Responsive design

## 🎨 Design Implementation

The product page is implemented pixel-perfect from the Figma design:
- [Figma Design Link](https://www.figma.com/design/aXoEQCHovVqfaoSyXq6zAB/Untitled?node-id=1-1771&t=CgxKqvC48gbOXVT7-0)

### Key Features:
- Exact colors, spacing, and typography from design
- Smooth animations and transitions
- Hover effects and interactive states
- Responsive breakpoints for all devices

## 🔐 Authentication Flow

1. User registers → Token saved → Redirect to verify
2. User enters verification code → Email verified → Redirect to dashboard
3. User logs in → Token saved → Check email verification:
   - If verified → Dashboard
   - If not verified → Verify page

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install