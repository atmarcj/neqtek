# Complete Vercel Deployment Guide for NeQTeK Website

## Prerequisites
1. **GitHub Account** - [github.com](https://github.com)
2. **Vercel Account** - [vercel.com](https://vercel.com) (can sign up with GitHub)
3. **Git installed locally** - [git-scm.com](https://git-scm.com)

## Step 1: Prepare Your Local Repository

### 1.1 Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: NeQTeK website ready for deployment"
```

### 1.2 Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `neqtek-website` (or your preferred name)
4. Make it **Public** (recommended for free Vercel hosting)
5. Don't initialize with README (you already have files)
6. Click "Create repository"

### 1.3 Push to GitHub
```bash
# Replace 'yourusername' with your actual GitHub username
git remote add origin https://github.com/yourusername/neqtek-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Sign Up/Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub" for easiest setup
4. Authorize Vercel to access your GitHub repositories

### 2.2 Import Your Project
1. On Vercel dashboard, click "New Project"
2. Find your `neqtek-website` repository
3. Click "Import"

### 2.3 Configure Project Settings
**Framework Preset**: Choose "Other" or "Vite"

**Build Settings**:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables**: None required for this project (uses in-memory storage)

### 2.4 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. You'll get a URL like: `https://neqtek-website-abc123.vercel.app`

## Step 3: Verify Deployment

### 3.1 Test Website Features
Visit your deployed URL and verify:
- ✅ Home page loads with animations
- ✅ Language switcher works (EN/FR/ES)
- ✅ Navigation between pages
- ✅ Services page displays correctly
- ✅ Contact form submits successfully
- ✅ Responsive design on mobile

### 3.2 Check API Endpoints
Test contact form submission to ensure backend is working.

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `neqtek.com`)
4. Follow DNS configuration instructions

### 4.2 Configure DNS
Update your domain's DNS settings with your provider:
- Add CNAME record pointing to `cname.vercel-dns.com`
- Or add A record with Vercel's IP addresses

## Step 5: Continuous Deployment

### 5.1 Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- Pull requests create preview deployments
- No additional configuration needed

### 5.2 Making Updates
```bash
# Make your changes locally
git add .
git commit -m "Update: description of changes"
git push origin main
# Vercel automatically deploys in ~2 minutes
```

## Troubleshooting

### Common Issues and Solutions

**Build Fails**:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Contact Form Not Working**:
- Check function logs in Vercel dashboard
- Verify API routes are properly configured
- Test locally first with `npm run dev`

**Styling Issues**:
- Ensure Tailwind CSS builds correctly
- Check for missing CSS imports
- Verify responsive design on Vercel's preview

**404 Errors on Page Refresh**:
- Already configured in `vercel.json` with proper routing
- Should work automatically with our setup

## Performance Optimization

### 5.1 Vercel Features (Automatically Enabled)
- ✅ Global CDN
- ✅ Image optimization
- ✅ Automatic HTTPS
- ✅ Edge caching
- ✅ Compression

### 5.2 Monitor Performance
- Use Vercel Analytics (available in dashboard)
- Monitor Core Web Vitals
- Check function execution logs

## Cost Information

### Free Tier Includes:
- ✅ Unlimited static sites
- ✅ 100GB bandwidth/month
- ✅ 100 function executions/month
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Global CDN

Perfect for the NeQTeK website's needs!

## Final Checklist

Before going live:
- [ ] Test all pages and features
- [ ] Verify contact form submissions
- [ ] Test language switching
- [ ] Check mobile responsiveness  
- [ ] Verify custom domain (if used)
- [ ] Test performance with Lighthouse
- [ ] Set up monitoring/analytics

## Support

If you encounter issues:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review function logs in Vercel dashboard
3. Test locally first with `npm run dev`
4. Contact Vercel support through their dashboard

Your NeQTeK website is now live and globally accessible! 🚀