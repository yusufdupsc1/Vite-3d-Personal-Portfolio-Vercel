import { BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useState } from "react";

import CanvasLoader from "./components/Loader";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Works = lazy(() => import("./components/Works"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  const [mountStars, setMountStars] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const enable = () => setMountStars(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enable);
      return () => {
        if ("cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = window.setTimeout(enable, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Suspense fallback={<CanvasLoader />}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<CanvasLoader />}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<CanvasLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <Works />
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <Feedbacks />
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <Tech />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<CanvasLoader />}>
            <Contact />
          </Suspense>

          <Suspense fallback={null}>
            {mountStars ? <StarsCanvas /> : null}
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
