# 📸 Image Management Guide - Next.js Real Estate Website

## 🎯 **Where to Add Your Images**

### **Recommended Structure: `/public/images`**
```
public/
└── images/
    ├── studios/           # Studio apartment photos
    ├── one-bedroom/       # One bedroom photos  
    ├── two-bedroom/       # Two bedroom photos
    ├── three-bedroom/     # Three bedroom photos
    ├── four-bedroom/      # Four bedroom photos
    ├── five-bedroom/      # Five bedroom photos
    ├── six-bedroom/       # Six bedroom photos
    ├── villas/            # Luxury villa photos
    ├── featured/          # Featured property photos
    └── about/             # Team/company photos
```

## 📋 **Priority Images Needed**

### **Main Category Photos (Most Important):**
1. **`public/images/studios/studio-main.jpg`** - Studio apartments cover
2. **`public/images/one-bedroom/one-bedroom-main.jpg`** - One bedroom cover  
3. **`public/images/two-bedroom/two-bedroom-main.jpg`** - Two bedroom cover
4. **`public/images/three-bedroom/three-bedroom-main.jpg`** - Three bedroom cover
5. **`public/images/four-bedroom/four-bedroom-main.jpg`** - Four bedroom cover
6. **`public/images/five-bedroom/five-bedroom-main.jpg`** - Five bedroom cover  
7. **`public/images/six-bedroom/six-bedroom-main.jpg`** - Six bedroom cover
8. **`public/images/villas/villa-main.jpg`** - Luxury villas cover

### **Featured Properties:**
9. **`public/images/featured/property-1.jpg`** - First featured property
10. **`public/images/featured/property-2.jpg`** - Second featured property  
11. **`public/images/featured/property-3.jpg`** - Third featured property

### **About Section:**
12. **`public/images/about/team.jpg`** - Your team or office photo

## 🔧 **How to Update Images in Next.js Code**

### **Option 1: Replace Unsplash URLs with Local Images**

Edit `/pages/index.js` and replace the Unsplash URLs:

**Current (Unsplash):**
```javascript
image: 'https://images.unsplash.com/photo-1522708323590-...'
```

**Updated (Local):**
```javascript
image: '/images/studios/studio-main.jpg'
```

### **Option 2: Keep Current Unsplash Images (No Change Needed)**
- Your website already has beautiful professional images
- These load fast and look professional
- No action required if you're happy with them

## 💡 **Next.js Image Optimization Benefits**

When you add local images to `/public/images/`, Next.js automatically:

✅ **Optimizes file size** - Converts to WebP format  
✅ **Lazy loading** - Images load as user scrolls  
✅ **Responsive sizing** - Serves different sizes for different devices  
✅ **Better performance** - Faster loading times  
✅ **SEO friendly** - Better search engine optimization  

## 📐 **Image Requirements**

### **Recommended Specifications:**
- **Format**: JPG, PNG, WebP
- **Resolution**: 1920x1080 (Full HD) minimum
- **Aspect Ratio**: 16:9 for best results
- **File Size**: Under 2MB (Next.js will optimize)
- **Quality**: High resolution, professional photography

### **Image Types Needed:**
- **Exterior shots** - Building fronts, landscapes
- **Interior shots** - Living rooms, kitchens, bedrooms
- **Detail shots** - Modern fixtures, amenities
- **Lifestyle shots** - People enjoying the spaces

## 🔄 **How to Switch from Unsplash to Your Images**

### **Step 1: Add Your Images**
Place your images in the appropriate `/public/images/` folders

### **Step 2: Update the Code**
In `/pages/index.js`, find the `categoryData` array and update:

```javascript
// Before (Unsplash)
image: 'https://images.unsplash.com/photo-...'

// After (Your images)
image: '/images/studios/studio-main.jpg'
```

### **Step 3: Test Locally**
```bash
npm run dev
```
Visit http://localhost:3000 to see your images

## 🌐 **Current Status**

**✅ Ready to Use**: Your website currently uses high-quality Unsplash images  
**✅ Professional Look**: Images are already optimized and beautiful  
**✅ Optional Upgrade**: You can add your own images anytime  

## 🎨 **Pro Tips**

### **Image Optimization:**
- Use tools like TinyPNG to compress before adding
- Keep original high-res versions as backups
- Consider hiring a professional photographer

### **Naming Convention:**
- Use descriptive names: `luxury-studio-downtown.jpg`
- Keep names consistent: `bedroom-1.jpg`, `bedroom-2.jpg`
- Use lowercase and hyphens

### **Multiple Images per Category:**
Add as many as you want in each folder:
```
public/images/studios/
├── studio-main.jpg          # Main category image
├── studio-downtown-1.jpg    # Additional properties
├── studio-downtown-2.jpg    # Additional properties
├── studio-midtown-1.jpg     # Additional properties
└── studio-waterfront.jpg    # Additional properties
```

**Your Next.js website is ready to use as-is, or can be easily customized with your own professional real estate photography!** 📸🏡