# Security Policy

## Supported Versions

We actively support the following versions of this project:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Create a Public Issue

Please do not create a public GitHub issue for security vulnerabilities. This could put users at risk.

### 2. Report Privately

Send an email to [security@example.com](mailto:security@example.com) with:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Any suggested fixes (if available)

### 3. Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Varies based on severity

### 4. Disclosure Policy

- We will acknowledge receipt of your vulnerability report
- We will investigate and validate the vulnerability
- We will work on a fix and coordinate disclosure
- We will credit you in our security advisory (unless you prefer to remain anonymous)

## Security Best Practices

When contributing to this project, please follow these security guidelines:

### Dependencies
- Keep all dependencies up to date
- Use `npm audit` to check for vulnerabilities
- Avoid dependencies with known security issues

### Code Security
- Validate all user inputs
- Use environment variables for sensitive data
- Implement proper error handling
- Follow secure coding practices

### Environment Variables
- Never commit `.env` files to version control
- Use strong, unique values for all secrets
- Rotate secrets regularly
- Use different secrets for different environments

## Automated Security Measures

This project includes several automated security measures:

- **Dependency Scanning**: GitHub Dependabot alerts
- **Code Scanning**: CodeQL analysis
- **Security Headers**: Configured in deployment
- **Input Validation**: Client and server-side validation

## Security Headers

The following security headers are configured:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

## Third-Party Services

This project may use the following third-party services:

- **EmailJS**: For contact form functionality
- **Vercel**: For hosting and deployment
- **GitHub**: For version control and CI/CD

Please review their respective security policies and terms of service.

## Contact

For security-related questions or concerns:

- **Email**: [security@example.com](mailto:security@example.com)
- **GPG Key**: Available upon request

Thank you for helping keep our project secure!