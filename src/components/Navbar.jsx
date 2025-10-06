import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { profile } from "../constants/profile";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setToggle(false);

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
        >
          <img
            src={toggle ? close : menu}
            alt='menu icon'
            className='w-[28px] h-[28px] object-contain'
          />
        </button>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl shadow-lg shadow-black/20`}
        >
          <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setActive(nav.title);
                    closeMenu();
                  }}
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
                className='font-medium text-[16px] text-secondary hover:text-white transition-colors'
                onClick={closeMenu}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
