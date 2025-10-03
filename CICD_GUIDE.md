# 🚀 CI/CD Pipeline Guide

This guide explains how to use the automated CI/CD pipeline set up for your 3D portfolio website.

## 📋 Overview

Your repository now includes two GitHub Actions workflows:

1. **CI Pipeline** (`ci.yml`) - Runs tests, linting, and security checks
2. **Deployment Pipeline** (`deploy.yml`) - Automatically deploys to Vercel

## 🔄 How CI/CD Works

### Automatic Triggers

The pipelines automatically run when:

- **Push to `main` branch**: Triggers both CI and deployment
- **Push to `develop` branch**: Triggers CI only
- **Pull Request to `main`**: Triggers CI for validation
- **Manual trigger**: You can manually run deployment via GitHub UI

### CI Pipeline Jobs

1. **Test & Lint** (runs on Node.js 18.x and 20.x)
   - Type checking with TypeScript
   - ESLint code quality checks
   - Unit tests with Vitest
   - Test coverage reporting

2. **Build**
   - Production build verification
   - Artifact storage for deployment

3. **Security Audit**
   - npm security audit
   - Dependency vulnerability scanning

## 🛠️ Setup Instructions

### 1. Repository Secrets Configuration

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

#### For Vercel Deployment:
```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

#### Optional (for enhanced features):
```
CODECOV_TOKEN=your_codecov_token  # For test coverage reporting
```

### 2. Getting Vercel Credentials

#### Vercel Token:
1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Create a new token
3. Copy and add to GitHub secrets as `VERCEL_TOKEN`

#### Vercel Org ID and Project ID:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel link` in your project directory
3. Check `.vercel/project.json` for the IDs
4. Add them to GitHub secrets

### 3. Environment Setup (Optional)

Create a `production` environment in GitHub:
1. Go to Settings → Environments
2. Create "production" environment
3. Add protection rules if needed

## 📊 Monitoring Your Pipeline

### Viewing Pipeline Status

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. View running/completed workflows

### Pipeline Badges

Add these badges to your README:

```markdown
![CI Status](https://github.com/yourusername/yourrepo/workflows/CI%2FCD%20Pipeline/badge.svg)
![Deploy Status](https://github.com/yourusername/yourrepo/workflows/Deploy%20to%20Vercel/badge.svg)
```

## 🔧 Development Workflow

### Recommended Git Flow

1. **Feature Development**:
   ```bash
   git checkout -b feature/new-feature
   # Make changes
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

2. **Create Pull Request**:
   - CI pipeline runs automatically
   - Review code and pipeline results
   - Merge when all checks pass

3. **Deployment**:
   - Merge to `main` triggers automatic deployment
   - Monitor deployment in Actions tab

### Branch Strategy

- `main` - Production branch (auto-deploys)
- `develop` - Development branch (CI only)
- `feature/*` - Feature branches (CI on PR)

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check TypeScript errors: `npm run type-check`
   - Fix linting issues: `npm run lint:fix`
   - Verify tests pass: `npm run test`

2. **Deployment Failures**:
   - Verify Vercel secrets are correct
   - Check build succeeds locally: `npm run build`
   - Review Vercel dashboard for errors

3. **Security Audit Failures**:
   - Update vulnerable dependencies: `npm audit fix`
   - Review security report in Actions artifacts

### Pipeline Debugging

1. **View Detailed Logs**:
   - Click on failed workflow in Actions tab
   - Expand failed job steps
   - Review error messages

2. **Local Testing**:
   ```bash
   # Run the same checks locally
   npm run type-check
   npm run lint
   npm run test
   npm run build
   npm audit
   ```

## 📈 Advanced Features

### Manual Deployment

1. Go to Actions tab
2. Select "Deploy to Vercel" workflow
3. Click "Run workflow"
4. Choose branch and run

### Custom Environments

Add staging environment:

```yaml
# In deploy.yml
environment: 
  name: staging
  url: https://your-staging-url.vercel.app
```

### Notification Setup

Add Slack/Discord notifications:

```yaml
- name: Notify on failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## 🎯 Best Practices

1. **Always create PRs** for code changes
2. **Wait for CI to pass** before merging
3. **Monitor deployment status** after merging
4. **Keep dependencies updated** regularly
5. **Review security audit results** weekly

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/git)
- [Vitest Testing Framework](https://vitest.dev/)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)

---

Your CI/CD pipeline is now ready! 🎉

Every push to `main` will automatically:
✅ Run tests and quality checks
✅ Build your application
✅ Deploy to Vercel
✅ Perform security audits

Happy coding! 🚀