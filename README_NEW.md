# Baba Adhesive - Industrial Adhesive Manufacturing Website

A modern, professional Next.js website for Baba Adhesive, a leading manufacturer of premium industrial adhesive and glue products.

## 🎯 Business Overview

Baba Adhesive manufactures high-quality industrial adhesive glue products:
- **Panel Glue+ Adhesive**: Multi-purpose bonding for construction and interior work
- **WPC Adhesive**: Specialized for wood-plastic composite applications
- **PVC Adhesive**: Professional-grade for pipes, fittings, and plastic materials
- **Panel Fixing Solutions**: Architectural cladding and ACP sheet installation
- **Furniture Bonding**: Premium adhesive for furniture assembly and manufacturing
- **Industrial Solutions**: Specialized formulations for various applications

## 🌟 Key Features

### Website Functionality
- ✅ Modern responsive design (mobile-first)
- ✅ Product showcase and categories
- ✅ Quote/quotation request system
- ✅ Contact form with inquiry management
- ✅ Admin dashboard for content management
- ✅ Product management system
- ✅ Timeline/Milestones section
- ✅ Customer testimonials
- ✅ SEO-optimized content

### New Features Added
- 🎥 **Cloudinary Video Integration**: Admin can upload product demonstration videos
- 📊 **Admin Dashboard**: Manage products with video support
- 🎨 **Professional Blue Branding**: Modern blue and gray color scheme
- 📱 **Full Responsiveness**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Optimized load times and animations

## 🛠️ Technology Stack

### Frontend
- Next.js 15.1.3
- React 18.3.1
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Zustand (state management)

### Backend
- MongoDB
- Mongoose ODM
- Node.js API routes

### Services
- Cloudinary (for video uploads)
- Google Ads tracking

### Form Handling
- Contact forms with email notifications
- Quote request system
- Admin authentication

## 📦 New Dependencies Added

```json
{
  "cloudinary": "^1.40.0",
  "next-cloudinary": "^6.0.0"
}
```

## 🗂️ Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── about/
│   ├── contact/
│   ├── quote/
│   ├── products/
│   ├── services/
│   ├── testimonials/
│   ├── admin/
│   │   ├── page.tsx               # Admin login
│   │   └── dashboard/
│   │       └── page.tsx           # Admin dashboard
│   └── api/
│       ├── products/              # Product CRUD
│       ├── contacts/              # Contact form
│       ├── timeline/              # Timeline management
│       └── admin/
│           ├── login/
│           └── settings/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   ├── ui/
│   │   ├── header.tsx            # Navigation menu
│   │   ├── product-carousel.tsx
│   │   └── testimonials-*.tsx
│   └── ...other components
├── models/
│   ├── Product.ts                 # Product schema (with video field)
│   ├── Contact.ts
│   ├── Timeline.ts
│   └── Settings.ts
└── lib/
    ├── mongodb.ts
    ├── cloudinary.ts             # NEW: Cloudinary utilities
    ├── googleAds.ts
    └── utils.ts
```

## 🎨 Color Scheme

The website uses an industrial branding approach with:
- **Primary**: Red (#DC2626)
- **Secondary**: Yellow (#FBBF24)
- **Accent**: Black (#000000)
- **Background**: White (#FFFFFF)

## 🔐 Admin Features

### Access the Admin Dashboard
1. Navigate to `/admin`
2. Log in with credentials
3. Manage:
   - ✅ Products (with video upload to Cloudinary)
   - ✅ Timeline events
   - ✅ Contacts & inquiries
   - ✅ Site settings

### Product Management
- Add/Edit/Delete products
- Upload product images
- **NEW**: Upload product demonstration videos via Cloudinary
- Set featured products
- Categorize products
- Manage specifications

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Configure MongoDB connection
# Configure Cloudinary credentials
# Configure admin credentials
```

### Environment Variables Required

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
ADMIN_SECRET=1234  # Change this!
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Touch-friendly interfaces
- Smooth animations on all devices

## 🎬 Cloudinary Video Integration

### For Admins:
1. Go to Admin Dashboard → Products
2. Add or edit a product
3. Paste Cloudinary video URL in "Video URL (Cloudinary)" field
4. Save the product

### Features:
- Easy video management
- Direct Cloudinary URL support
- Responsive video playback
- Admin-controlled video updates

## 📊 SEO Optimization

- Meta tags for all pages
- Structured data (Schema markup)
- Sitemap generation
- Robot.txt configured
- Open Graph tags
- Keyword-optimized content

## 📞 Contact Information

**Company**: Baba Adhesive  
**Email**: info@babadhesive.com  
**Phone**: +91 863 043 4973  
**Industries Served**: Furniture Manufacturing, Interior Work, Construction, Woodworking, Modular Kitchens, ACP/Laminate Installation

## 🤝 Industries Served

- Furniture Manufacturing
- Interior & Panel Work
- Construction Industry
- Woodworking Workshops
- Modular Kitchen Industry
- ACP & Laminate Installation

## 📝 License

© 2026 Baba Adhesive. All rights reserved.
Developed by [Jain Agency](https://www.thejainagency.shop)

## 🔄 Recent Updates

### Version 2.0 - Adhesive Transformation
- ✅ Complete rebranding from steel to adhesive
- ✅ Updated color scheme (red/yellow/black)
- ✅ Added Cloudinary video integration
- ✅ Updated product categories
- ✅ Updated all content and branding
- ✅ Enhanced admin dashboard with video support
- ✅ Updated contact information
- ✅ Improved SEO for adhesive industry

---

For support or inquiries, contact the development team or visit our website.
