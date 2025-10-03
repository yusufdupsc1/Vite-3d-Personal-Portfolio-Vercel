# 🔧 Complete Vercel Setup Guide

## 📋 What You Need

You mentioned you have your Vercel token - great! Now we need to get the other two values and set everything up.

## Step 1: Get Your Vercel Organization ID and Project ID

### Option A: Using Vercel CLI (Recommended - Easiest)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   - This will open your browser
   - Login with the same account you used to get the token

3. **Navigate to your project directory and link it:**
   ```bash
   cd /path/to/your/Vite-3d-Personal-Portfolio-Vercel
   vercel link
   ```
   
   You'll see prompts like:
   ```
   ? Set up and deploy "~/Vite-3d-Personal-Portfolio-Vercel"? [Y/n] y
   ? Which scope do you want to deploy to? [Your Username/Organization]
   ? Link to existing project? [y/N] n
   ? What's your project's name? vite-3d-personal-portfolio-vercel
   ? In which directory is your code located? ./
   ```

4. **Get your IDs:**
   After linking, check the `.vercel/project.json` file:
   ```bash
   cat .vercel/project.json
   ```
   
   You'll see something like:
   ```json
   {
     "orgId": "team_xxxxxxxxxxxxxxxxxx",
     "projectId": "prj_xxxxxxxxxxxxxxxxxx"
   }
   ```

### Option B: Manual Method (If CLI doesn't work)

1. **Go to your Vercel Dashboard:** https://vercel.com/dashboard
2. **Find your Organization ID:**
   - Click on your profile/team name in the top-left
   - Go to "Settings" 
   - Look for "General" → "Team ID" (this is your orgId)

3. **Find your Project ID:**
   - Go to your project in the dashboard
   - Click on "Settings"
   - Look for "General" → "Project ID"

## Step 2: Add Secrets to GitHub

1. **Go to your GitHub repository:**
   https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel

2. **Navigate to Settings:**
   - Click "Settings" tab (top of repository)
   - Click "Secrets and variables" in left sidebar
   - Click "Actions"

3. **Add Repository Secrets:**
   Click "New repository secret" for each of these:

   **Secret 1:**
   - Name: `VERCEL_TOKEN`
   - Value: `[paste your vercel token here]`

   **Secret 2:**
   - Name: `VERCEL_ORG_ID`
   - Value: `[paste your org ID from step 1]`

   **Secret 3:**
   - Name: `VERCEL_PROJECT_ID`
   - Value: `[paste your project ID from step 1]`

## Step 3: Test the Setup

1. **Go to your Pull Request:**
   https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/pull/1

2. **Check if CI is passing:**
   - Look for green checkmarks ✅
   - If there are red X marks, click to see what failed

3. **Merge the Pull Request:**
   - Once CI passes, click "Merge pull request"
   - This will trigger the deployment workflow

## Step 4: Verify Deployment

After merging:

1. **Check GitHub Actions:**
   - Go to "Actions" tab in your repository
   - Look for "Deploy to Vercel" workflow
   - It should show as successful ✅

2. **Check Vercel Dashboard:**
   - Go to https://vercel.com/dashboard
   - Your project should show a new deployment
   - Click on it to see the live URL

## 🚨 Troubleshooting

### If Vercel CLI doesn't work:
```bash
# Try logging out and back in
vercel logout
vercel login

# Or try with specific email
vercel login --email your-email@example.com
```

### If you get permission errors:
- Make sure you're using the same Vercel account that owns the token
- Check that your token has the right permissions

### If GitHub Actions fail:
1. Check the error message in the Actions tab
2. Common issues:
   - Wrong secret names (must be exact: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`)
   - Invalid token or IDs
   - Vercel project not properly configured

## 📱 Quick Reference

### Secret Names (Must be exact):
```
VERCEL_TOKEN
VERCEL_ORG_ID  
VERCEL_PROJECT_ID
```

### Where to find values:
- **Token**: You already have this ✅
- **Org ID**: From `.vercel/project.json` after `vercel link`
- **Project ID**: From `.vercel/project.json` after `vercel link`

### GitHub Secrets Location:
Repository → Settings → Secrets and variables → Actions → New repository secret

## 🎯 What Happens After Setup

Once everything is configured:

1. **Every push to `main`** = Automatic deployment
2. **Every Pull Request** = Automatic testing
3. **Live website updates** = No manual work needed
4. **Security scanning** = Automatic vulnerability checks

Your modern 3D portfolio will be live and automatically updated! 🚀

## ❓ Need Help?

If you run into issues:
1. Check the error messages in GitHub Actions
2. Verify all three secrets are added correctly
3. Make sure your Vercel token is valid
4. Ensure you're using the same Vercel account

Let me know if you need help with any of these steps! 🤝