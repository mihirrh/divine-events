# Deploying Divine Events to Cloudflare Pages

## Overview

This Next.js 15 website can be deployed to **Cloudflare Pages** for free with excellent performance, global CDN, and automatic SSL.

---

## Prerequisites

1. A Cloudflare account (free): https://dash.cloudflare.com/sign-up
2. Git repository (GitHub, GitLab, or Bitbucket)
3. Your website code pushed to the repository

---

## Deployment Methods

### Method 1: Direct Git Integration (Recommended)

#### Step 1: Push Code to Git Repository

```bash
cd divine-events

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Divine Events luxury website"

# Add your remote repository
git remote add origin https://github.com/yourusername/divine-events.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your repository
6. Select your **divine-events** repository

#### Step 3: Configure Build Settings

Use these exact settings:

```
Production branch: main
Build command: npm run build
Build output directory: .next
Root directory: /
```

**Environment Variables:**
```
NODE_VERSION=18
```

#### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait 2-5 minutes for the build to complete
3. Your site will be live at: `https://divine-events-xxx.pages.dev`

---

### Method 2: Wrangler CLI (Advanced)

#### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

#### Step 2: Login to Cloudflare

```bash
wrangler login
```

#### Step 3: Create Cloudflare Pages Project

```bash
cd divine-events
wrangler pages project create divine-events
```

#### Step 4: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy .next
```

---

## Custom Domain Setup

### Step 1: Add Custom Domain

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain: `divineevents.co.uk`

### Step 2: Configure DNS

If your domain is already on Cloudflare:
- DNS records will be added automatically

If your domain is elsewhere:
1. Add a CNAME record:
   ```
   Name: @ (or www)
   Target: divine-events-xxx.pages.dev
   ```
2. Or point nameservers to Cloudflare

### Step 3: SSL Certificate

- Cloudflare automatically provisions SSL certificates
- Your site will be available at `https://divineevents.co.uk`
- Force HTTPS in Cloudflare SSL/TLS settings

---

## Performance Optimization

### Enable Cloudflare Features

1. **Auto Minify**
   - Go to Speed → Optimization
   - Enable: JavaScript, CSS, HTML

2. **Brotli Compression**
   - Automatically enabled on Cloudflare

3. **Caching**
   - Go to Caching → Configuration
   - Set Browser Cache TTL: 4 hours
   - Enable Always Online

4. **Image Optimization**
   - Go to Speed → Optimization
   - Enable Polish (Lossless or Lossy)
   - Enable WebP conversion

---

## Environment Variables

If you need environment variables (API keys, etc.):

### Via Dashboard:
1. Go to your Pages project
2. Click **Settings** → **Environment variables**
3. Add variables for Production and Preview

### Via Wrangler:
```bash
wrangler pages secret put API_KEY
```

---

## Continuous Deployment

Once connected to Git:

1. **Automatic Deployments**
   - Every push to `main` branch triggers production deployment
   - Pull requests create preview deployments

2. **Preview Deployments**
   - Each PR gets a unique URL
   - Test changes before merging

3. **Rollback**
   - Go to Deployments tab
   - Click **Rollback** on any previous deployment

---

## Build Configuration

### package.json Scripts

Ensure these scripts exist:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Next.js Configuration

The current `next.config.ts` is already optimized for Cloudflare Pages.

---

## Troubleshooting

### Build Fails

**Issue**: Build timeout or memory error

**Solution**: Increase build resources in Cloudflare Pages settings

### Images Not Loading

**Issue**: Images return 404

**Solution**: 
1. Ensure images are in `public/` folder
2. Use relative paths: `/images/logo.png`
3. Check image paths are correct

### Fonts Not Loading

**Issue**: Custom fonts not displaying

**Solution**:
- Fonts are loaded from Google Fonts (already configured)
- Check `app/globals.css` import is correct

### 404 on Routes

**Issue**: Direct URL access returns 404

**Solution**:
- Cloudflare Pages automatically handles Next.js routing
- Ensure `output: 'standalone'` is NOT in next.config.ts

---

## Cost

**Cloudflare Pages Pricing:**

- **Free Tier:**
  - 500 builds per month
  - Unlimited requests
  - Unlimited bandwidth
  - 100 custom domains

- **Paid Tier ($20/month):**
  - 5,000 builds per month
  - Advanced features
  - Priority support

**For Divine Events**: Free tier is more than sufficient!

---

## Monitoring

### Analytics

1. Go to your Pages project
2. Click **Analytics**
3. View:
   - Page views
   - Unique visitors
   - Top pages
   - Geographic distribution

### Web Analytics (Free)

1. Enable Cloudflare Web Analytics
2. Add tracking code to your site
3. Get detailed visitor insights

---

## Security

### Recommended Settings

1. **SSL/TLS**: Full (strict)
2. **Always Use HTTPS**: On
3. **Automatic HTTPS Rewrites**: On
4. **Minimum TLS Version**: 1.2
5. **TLS 1.3**: On

### Firewall Rules

Create rules to:
- Block malicious traffic
- Rate limit requests
- Protect against DDoS

---

## Quick Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] Connected repository to Cloudflare Pages
- [ ] Build settings configured correctly
- [ ] First deployment successful
- [ ] Custom domain added (optional)
- [ ] SSL certificate active
- [ ] Performance features enabled
- [ ] Analytics configured

---

## Support

**Cloudflare Documentation:**
- https://developers.cloudflare.com/pages/

**Next.js on Cloudflare:**
- https://developers.cloudflare.com/pages/framework-guides/nextjs/

**Community:**
- Cloudflare Discord: https://discord.gg/cloudflaredev
- Cloudflare Community: https://community.cloudflare.com/

---

## Alternative: Vercel Deployment

If you prefer Vercel (made by Next.js creators):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd divine-events
vercel

# Follow prompts
```

Vercel offers:
- Automatic Next.js optimization
- Edge functions
- Image optimization
- Analytics

---

## Conclusion

Your Divine Events website is **fully compatible** with Cloudflare Pages and will run perfectly with:

✅ Fast global CDN
✅ Automatic SSL
✅ Free hosting
✅ Continuous deployment
✅ Preview deployments
✅ Custom domains
✅ Analytics

**Recommended**: Use Cloudflare Pages for the best balance of performance, features, and cost.