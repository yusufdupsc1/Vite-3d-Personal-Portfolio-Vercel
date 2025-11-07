import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { profile } from "../constants/profile";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const socialLinks = useMemo(
    () => [
      { label: "GitHub", url: profile.socials.github },
      { label: "LinkedIn", url: profile.socials.linkedin },
      { label: "Twitter", url: profile.socials.twitter }
    ].filter((social) => Boolean(social.url)),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setToggle(false);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const target = document.documentElement;
    if (toggle) {
      target.style.overflow = "hidden";
    } else {
      target.style.overflow = "";
    }

    return () => {
      target.style.overflow = "";
    };
  }, [toggle]);

  useEffect(() => {
    if (!toggle) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md bg-primary/90" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          <img
            src={logo}
            alt='Yusuf Ali logo'
            className='w-9 h-9 object-contain'
            loading='lazy'
            decoding='async'
          />
          <span className='flex flex-col text-left'>
            <span className='text-white text-[18px] font-bold leading-tight'>
              {profile.name}
            </span>
            <span className='text-secondary text-xs sm:text-sm leading-tight'>
              {profile.title}
            </span>
          </span>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
            >
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.socials.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[16px] font-medium text-secondary hover:text-white transition-colors'
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type='button'
          className='sm:hidden flex flex-1 justify-end items-center'
          onClick={() => setToggle((prev) => !prev)}
          aria-label='Toggle navigation'
          aria-expanded={toggle}
          aria-controls='mobile-nav'
        >
          <img
            src={toggle ? close : menu}
            alt='menu icon'
            className='w-[28px] h-[28px] object-contain'
          />
        </button>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            key='mobile-nav'
            id='mobile-nav'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='sm:hidden fixed inset-0 z-30'
            role='dialog'
            aria-modal='true'
          >
            <button
              type='button'
              aria-label='Close navigation'
              className='absolute inset-0 bg-black/60 backdrop-blur-sm'
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className='absolute right-0 top-0 h-full w-full max-w-xs bg-primary/95 border-l border-white/10 shadow-2xl flex flex-col'
            >
              <div className='flex items-center justify-between px-6 py-5 border-b border-white/10'>
                <div className='flex flex-col text-left'>
                  <span className='text-white text-lg font-semibold'>{profile.name}</span>
                  <span className='text-secondary text-xs uppercase tracking-[0.2em]'>
                    {profile.title}
                  </span>
                </div>
                <button
                  type='button'
                  onClick={closeMenu}
                  className='text-secondary hover:text-white transition-colors'
                  aria-label='Close menu'
                >
                  <img src={close} alt='Close menu' className='w-6 h-6' />
                </button>
              </div>

              <div className='flex-1 overflow-y-auto px-6 py-8'>
                <ul className='space-y-6'>
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        onClick={() => {
                          setActive(nav.title);
                          closeMenu();
                        }}
                        className={`block text-lg font-medium tracking-wide transition-colors ${
                          active === nav.title ? "text-white" : "text-secondary hover:text-white"
                        }`}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='px-6 py-6 border-t border-white/10'>
                <span className='block text-xs uppercase text-secondary tracking-[0.3em] mb-4'>
                  Connect
                </span>
                <div className='flex flex-col gap-3'>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm font-medium text-secondary hover:text-white transition-colors'
                      onClick={closeMenu}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
