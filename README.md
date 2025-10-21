# Premium Real Estate Website - Next.js

## 🏠 Modern Real Estate Website Built with Next.js

This is a complete, professional real estate website built with Next.js, featuring organized photo sections for different property types, server-side rendering, and optimal performance.

## 📁 Next.js Project Structure

```
Premium-Real-Estate/
├── pages/
│   ├── index.js        # Main homepage (React component)
│   └── _app.js         # Next.js app wrapper
├── components/         # Reusable React components
├── styles/
│   └── globals.css     # Global styles
├── public/             # Static assets
├── images/             # Photo organization folder
│   ├── studios/        # Studio apartment photos
│   ├── one-bedroom/    # One bedroom apartment photos
│   ├── two-bedroom/    # Two bedroom apartment photos
│   ├── three-bedroom/  # Three bedroom house photos
│   ├── four-bedroom/   # Four bedroom house photos
│   ├── five-bedroom/   # Five bedroom house photos
│   ├── six-bedroom/    # Six bedroom house photos
│   ├── villas/         # Luxury villa photos
│   ├── featured/       # Featured property photos
│   └── about/          # About us / team photos
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment config
```

## 📸 Where to Add Photos

### 🏢 Property Category Photos

#### **Studios** (`images/studios/`)
- **Main photo needed**: `studio-main.jpg` (category card cover)
- Add multiple studio apartment photos for galleries
- Recommended: 5-10 high-quality photos

#### **One Bedroom** (`images/one-bedroom/`)
- **Main photo needed**: `one-bedroom-main.jpg` (category card cover)
- Add various one-bedroom apartment photos
- Recommended: 8-15 photos

#### **Two Bedroom** (`images/two-bedroom/`)
- **Main photo needed**: `two-bedroom-main.jpg` (category card cover)
- Add two-bedroom apartment/house photos
- Recommended: 10-20 photos

#### **Three Bedroom** (`images/three-bedroom/`)
- **Main photo needed**: `three-bedroom-main.jpg` (category card cover)
- Add three-bedroom house photos
- Recommended: 15-25 photos

#### **Four Bedroom** (`images/four-bedroom/`)
- **Main photo needed**: `four-bedroom-main.jpg` (category card cover)
- Add four-bedroom house photos
- Recommended: 12-20 photos

#### **Five Bedroom** (`images/five-bedroom/`)
- **Main photo needed**: `five-bedroom-main.jpg` (category card cover)
- Add five-bedroom luxury house photos
- Recommended: 10-18 photos

#### **Six Bedroom** (`images/six-bedroom/`)
- **Main photo needed**: `six-bedroom-main.jpg` (category card cover)
- Add six-bedroom executive house photos
- Recommended: 8-15 photos

#### **Villas** (`images/villas/`)
- **Main photo needed**: `villa-main.jpg` (category card cover)
- Add luxury villa photos (exteriors, interiors, pools, gardens)
- Recommended: 15-30 photos

### ⭐ Featured Properties (`images/featured/`)
- **`property-1.jpg`** - Featured luxury apartment
- **`property-2.jpg`** - Featured family house
- **`property-3.jpg`** - Featured exclusive villa
- Add more featured property photos as needed

### 👥 About Section (`images/about/`)
- **`team.jpg`** - Team photo or office photo
- Add additional company/team photos

## 🎨 Photo Requirements

### **Image Specifications:**
- **Format**: JPG, PNG, WebP
- **Resolution**: Minimum 1920x1080 (Full HD)
- **Aspect Ratio**: 16:9 or 4:3 for best results
- **File Size**: Optimized for web (200KB - 2MB)

### **Photo Quality Guidelines:**
- ✅ High resolution and sharp focus
- ✅ Good lighting (natural light preferred)
- ✅ Professional composition
- ✅ Clean and staged interiors
- ✅ Multiple angles of each property
- ✅ Exterior and interior shots

## 🖼️ Photo Categories to Include

### **For Each Property Type:**
1. **Exterior shots** - Front view, side views, backyard
2. **Living areas** - Living room, dining room, family room
3. **Kitchen** - Multiple angles, appliances, storage
4. **Bedrooms** - Master bedroom, guest bedrooms
5. **Bathrooms** - Master bath, guest bath, powder room
6. **Special features** - Pool, garden, garage, balcony
7. **Neighborhood** - Street view, nearby amenities

## 🚀 How to Run the Next.js Website

### Development Mode:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build:
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export (for static hosting):
```bash
# Export as static site
npm run build
npm run export
```

## � Next.js Features Included

- ✅ **Server-Side Rendering (SSR)** - Better SEO and performance
- ✅ **Image Optimization** - Next.js automatic image optimization
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **React Components** - Modern component-based architecture
- ✅ **Property Categories** - Organized by bedroom count and villas
- ✅ **Search Functionality** - Interactive property search
- ✅ **Contact Form** - React-powered lead capture form
- ✅ **Smooth Animations** - Professional visual effects
- ✅ **TypeScript Ready** - Type-safe development
- ✅ **Fast Loading** - Next.js performance optimizations
- ✅ **SEO Optimized** - Built-in SEO features

## 🛠️ Customization

### **To Update Text Content:**
1. Open `index.html` in a text editor
2. Find the section you want to modify
3. Update the text content
4. Save the file

### **To Change Colors:**
1. Open `styles.css`
2. Look for color values (hex codes like #2c5aa0)
3. Replace with your brand colors
4. Save the file

### **To Add More Properties:**
1. Copy an existing property card in `index.html`
2. Update the image source and property details
3. Add the corresponding photo to the appropriate folder

## 📞 Contact Information

Update the contact information in the website:
- **Address**: Line 238 in `index.html`
- **Phone**: Lines 244 and 379 in `index.html`
- **Email**: Line 250 in `index.html`

## 🌟 Pro Tips

1. **Compress photos** before uploading for faster loading
2. **Use consistent naming** for easy organization
3. **Take multiple shots** of each property from different angles
4. **Stage properties** for better visual appeal
5. **Include lifestyle shots** showing people using the spaces
6. **Add virtual tours** for premium properties (optional)

---

**Ready to go live?** Just add your photos to the organized folders and your professional real estate website is ready to attract clients! 🏡✨