# How to Add Images to Divine Events Website

## 📸 About Images

**Important:** This website was built with **image prompts** throughout the code, not actual generated images. The prompts are detailed descriptions that you can use to generate professional luxury wedding photography.

## 🎨 Adding Your Logo

You mentioned you have `logo.png`. Here's how to add it:

### Step 1: Add Logo to Public Folder

1. Place your `logo.png` file in the `/public` folder:
   ```
   divine-events/public/logo.png
   ```

### Step 2: Update Navigation Component

The navigation component is already set up to use text. To use your logo image instead:

1. Open `components/navigation.tsx`
2. Find the logo section (around line 48)
3. Replace the text with:

```tsx
<Link href="/" className="flex items-center space-x-2">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image
      src="/logo.png"
      alt="Divine Events"
      width={180}
      height={60}
      className="h-12 w-auto"
    />
  </motion.div>
</Link>
```

4. Add the Image import at the top:
```tsx
import Image from "next/image";
```

## 🖼️ Adding Wedding Photos

### Where to Find Image Prompts

Image prompts are included as comments throughout the code. Look for comments like:

```tsx
{/* Image Prompt: Ultra luxury South Asian wedding mandap... */}
```

### Locations of Image Prompts

1. **Homepage** (`app/page.tsx`):
   - Hero section background
   - Services section images
   - Why choose us section

2. **Mandap Hire Page** (`app/services/mandap-hire/page.tsx`):
   - Hero background
   - Each mandap style (6 different prompts)
   - Feature section images

3. **Leicester Page** (`app/locations/leicester/page.tsx`):
   - Hero background
   - Venue showcase images

### How to Generate Images

#### Option 1: AI Image Generation

Use these AI tools with the provided prompts:

1. **Midjourney** (Recommended for luxury photography)
   - Copy the image prompt
   - Paste into Midjourney
   - Add parameters: `--ar 16:9 --v 6 --style raw`

2. **DALL-E 3**
   - Use via ChatGPT Plus
   - Paste the prompt
   - Request high resolution

3. **Stable Diffusion**
   - Use locally or via DreamStudio
   - Add style: "professional photography, editorial, luxury"

#### Option 2: Professional Photography

- Hire a professional wedding photographer
- Use the prompts as a shot list
- Request editorial-style luxury photography

#### Option 3: Stock Photography

Search for:
- "luxury Asian wedding mandap"
- "Indian wedding decor UK"
- "luxury wedding venue"
- "South Asian wedding ceremony"

**Recommended Stock Sites:**
- Unsplash (free)
- Pexels (free)
- Shutterstock (paid)
- Getty Images (paid)

### Adding Images to the Website

#### Method 1: Replace Background Placeholders

Find sections with colored backgrounds like:

```tsx
<div className="w-full h-full bg-gradient-to-br from-luxury-gold/30 to-luxury-burgundy/30" />
```

Replace with:

```tsx
<Image
  src="/images/mandap-1.jpg"
  alt="Luxury wedding mandap"
  fill
  className="object-cover"
/>
```

#### Method 2: Update Background Images

Find sections with inline styles:

```tsx
style={{
  backgroundImage: `url('data:image/svg+xml...')`,
}}
```

Replace with:

```tsx
style={{
  backgroundImage: `url('/images/hero-background.jpg')`,
}}
```

### Recommended Image Sizes

```
Hero Backgrounds: 1920x1080px (16:9)
Service Cards: 800x600px (4:3)
Portfolio Grid: 1200x900px (4:3)
Mandap Showcases: 1600x1200px (4:3)
Mobile Hero: 768x1024px (3:4)
```

### Image Optimization

1. **Compress images** before uploading:
   - Use TinyPNG.com
   - Or ImageOptim (Mac)
   - Target: < 200KB per image

2. **Use Next.js Image component**:
   ```tsx
   import Image from "next/image";
   
   <Image
     src="/images/photo.jpg"
     alt="Description"
     width={1200}
     height={800}
     quality={85}
     priority={false} // true for above-fold images
   />
   ```

3. **Create multiple sizes**:
   - Desktop: 1920px wide
   - Tablet: 1024px wide
   - Mobile: 768px wide

## 📁 Recommended Folder Structure

```
public/
├── logo.png
├── favicon.ico
├── og-image.jpg (for social sharing)
└── images/
    ├── hero/
    │   ├── home-hero.jpg
    │   ├── services-hero.jpg
    │   └── contact-hero.jpg
    ├── mandaps/
    │   ├── classic-ivory.jpg
    │   ├── royal-gold.jpg
    │   ├── contemporary-white.jpg
    │   ├── floral-paradise.jpg
    │   ├── crystal-palace.jpg
    │   └── bespoke.jpg
    ├── locations/
    │   ├── leicester-venue.jpg
    │   ├── birmingham-venue.jpg
    │   └── london-venue.jpg
    └── portfolio/
        ├── wedding-1.jpg
        ├── wedding-2.jpg
        ├── wedding-3.jpg
        └── ...
```

## 🎯 Priority Images to Add First

1. **Logo** - Add to navigation immediately
2. **Hero Background** - Homepage first impression
3. **Mandap Showcases** - 6 different styles
4. **Portfolio Grid** - At least 6-9 wedding photos
5. **Location Images** - Leicester, Birmingham, London

## ✅ Image Checklist

Before adding images, ensure they:

- [ ] Match the luxury aesthetic (Vogue Weddings style)
- [ ] Are high resolution (minimum 1920px wide)
- [ ] Are properly compressed (< 200KB each)
- [ ] Have appropriate alt text for SEO
- [ ] Show South Asian wedding elements
- [ ] Feature UK venues when possible
- [ ] Are professionally shot or AI-generated
- [ ] Match the cream/gold color scheme

## 🚫 Images to Avoid

- Generic stock photos that look cheap
- Low resolution or pixelated images
- Images with watermarks
- Photos that don't match the luxury aesthetic
- Overly bright or flashy images
- Images with competing branding

## 💡 Pro Tips

1. **Consistency**: Use similar photography styles across all images
2. **Color Grading**: Apply a warm, luxury color grade
3. **Composition**: Use professional composition rules
4. **Lighting**: Prefer soft, cinematic lighting
5. **Details**: Include close-ups of mandap details
6. **People**: Show happy couples and families
7. **Venues**: Feature recognizable UK venues

## 📞 Need Help?

If you need assistance:
1. The image prompts are very detailed - use them exactly as written
2. Consider hiring a professional photographer for real wedding shoots
3. Build a portfolio by photographing actual events
4. Start with AI-generated images as placeholders

---

**Remember:** The website is fully functional without images. The colored backgrounds and gradients serve as elegant placeholders until you add your photography.