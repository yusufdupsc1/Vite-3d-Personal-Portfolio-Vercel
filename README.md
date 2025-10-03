# 🚀 Modern 3D Portfolio Website

[![CI/CD Pipeline](https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/actions/workflows/ci.yml/badge.svg)](https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/actions/workflows/ci.yml)
[![Deploy to Vercel](https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/actions/workflows/deploy.yml/badge.svg)](https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white)](https://threejs.org/)

A cutting-edge 3D portfolio website built with modern web technologies and 2025 best practices. Features stunning 3D graphics, smooth animations, and a responsive design that showcases your work in an immersive way.

![3D Portfolio Preview](https://i.ibb.co/9ykhLtM/Thumbnail.png)

## ✨ Features

- 🎨 **Stunning 3D Graphics** - Interactive 3D models and animations using Three.js
- ⚡ **Lightning Fast** - Built with Vite for optimal performance and development experience
- 📱 **Fully Responsive** - Seamless experience across all devices and screen sizes
- 🎭 **Smooth Animations** - Beautiful transitions and micro-interactions with Framer Motion
- 🔧 **TypeScript Support** - Full type safety and better developer experience
- 🎯 **Modern Architecture** - Clean, maintainable code with industry best practices
- 📧 **Contact Form** - Integrated email functionality with EmailJS
- 🚀 **Optimized Performance** - Code splitting, lazy loading, and bundle optimization
- 🔒 **Security First** - Built-in security headers and vulnerability scanning
- 🧪 **Comprehensive Testing** - Unit tests with Vitest and Testing Library

## 🛠️ Tech Stack

### Core Technologies
- **[React 18](https://reactjs.org/)** - Modern React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 6](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt)** - Tilt hover effects

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting with modern rules
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[Testing Library](https://testing-library.com/)** - Simple and complete testing utilities

### Deployment & CI/CD
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[GitHub Actions](https://github.com/features/actions)** - Automated CI/CD pipeline

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel.git
   cd Vite-3d-Personal-Portfolio-Vercel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:12000`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |
| `npm run test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run coverage` | Generate test coverage report |

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D canvas components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Experience.jsx  # Experience timeline
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation
│   ├── Tech.jsx        # Technologies
│   └── Works.jsx       # Projects showcase
├── constants/          # Application constants
├── hoc/               # Higher-order components
├── utils/             # Utility functions
├── assets/            # Static assets
├── test/              # Test configuration
└── styles.js          # Global styles
```

## 🎨 Customization

### Adding Your Content

1. **Update personal information** in `src/constants/index.js`
2. **Replace images** in `src/assets/`
3. **Modify 3D models** in `src/components/canvas/`
4. **Customize colors** in `tailwind.config.cjs`

### Environment Variables

Create a `.env.local` file with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run coverage

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🔧 Performance Optimization

This project includes several performance optimizations:

- **Code Splitting** - Automatic route-based code splitting
- **Bundle Analysis** - Optimized chunk sizes
- **Image Optimization** - Lazy loading and modern formats
- **3D Model Optimization** - Efficient loading and rendering
- **Caching Strategies** - Optimal browser caching

## 🔒 Security

Security features included:

- **Dependency Scanning** - Automated vulnerability checks
- **Security Headers** - CORS and security headers configured
- **Input Validation** - Form validation and sanitization
- **Environment Variables** - Secure configuration management

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** - For the amazing 3D graphics library
- **React Three Fiber** - For making Three.js accessible in React
- **Vercel** - For the excellent deployment platform
- **Open Source Community** - For all the amazing tools and libraries

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yusufdupsc1/Vite-3d-Personal-Portfolio-Vercel/discussions)

---

<div align="center">
  <p>Made with ❤️ and modern web technologies</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
