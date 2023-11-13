import { BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { StarsCanvas } from "./components";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Works = lazy(() => import("./components/Works"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Suspense>
            <Navbar />
          </Suspense>
          <Suspense>
            <Hero />
          </Suspense>
        </div>
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Experience />
        </Suspense>
        <Suspense>
          <Works />
        </Suspense>
        <Suspense>
          <Feedbacks />
        </Suspense>
        <Suspense>
          <Tech />
        </Suspense>
        <div className="relative z-0">
        <Suspense>
          <Contact />
        </Suspense>

          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
