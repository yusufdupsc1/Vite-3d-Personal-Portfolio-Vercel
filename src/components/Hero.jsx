import React, { lazy, Suspense, useMemo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import CanvasLoader from "./Loader";
import { profile } from "../constants/profile";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  const observerOptions = useMemo(
    () => ({ rootMargin: "-20% 0px", threshold: 0.15 }),
    []
  );
  const { ref, isIntersecting } = useIntersectionObserver(observerOptions);

  const heroHighlight = useMemo(
    () => profile.heroHighlights?.[0] ?? "Building delightful digital products",
    []
  );

  return (
    <section
      ref={ref}
      className='relative w-full h-screen mx-auto'
      aria-label='Introduction'
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-2xl'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#583b96]'>{profile.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {profile.tagline}
            <br className='sm:block hidden' />
            <span className='text-sm sm:text-base text-secondary block mt-4'>
              {heroHighlight}
            </span>
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-4 text-sm sm:text-base'>
            <span className='rounded-full bg-[#2c2141]/70 px-4 py-2 text-white shadow-lg shadow-primary/20'>
              {profile.status}
            </span>
            <span className='rounded-full border border-[#583b96]/60 px-4 py-2 text-white/80 backdrop-blur-sm'>
              {profile.location}
            </span>
            <a
              className='rounded-full bg-gradient-to-r from-[#915EFF] to-[#583b96] px-5 py-2 font-semibold text-white shadow-lg shadow-[#915EFF]/40 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#915EFF]'
              href='#work'
            >
              Explore my work
            </a>
          </div>
        </div>
      </div>

      <div className='h-full w-full pt-24 sm:pt-0'>
        <Suspense fallback={<CanvasLoader />}>
          {isIntersecting ? (
            <ComputersCanvas />
          ) : (
            <div
              className='mx-auto h-[320px] max-w-5xl animate-pulse rounded-3xl bg-gradient-to-br from-[#1d1836] via-[#241b42] to-[#120f23] opacity-70'
              aria-hidden='true'
            />
          )}
        </Suspense>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[60px] rounded-3xl border-4 border-double bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-900 shadow-lg shadow-blue-500/50 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
