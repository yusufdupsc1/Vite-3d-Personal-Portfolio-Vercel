import { useState } from "react";
import { navigation } from "../../constants/microchat";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <a href='#top' className='flex items-center gap-2 text-lg font-semibold tracking-tight text-white'>
          <span className='inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-emerald-400 to-blue-500 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/40'>
            µ
          </span>
          Microchat
        </a>
        <nav className='hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex'>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='transition hover:text-white hover:underline hover:underline-offset-4'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className='hidden items-center gap-3 md:flex'>
          <a
            href='#pricing'
            className='rounded-lg border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white'
          >
            Pricing
          </a>
          <a
            href='https://vercel.com/import/git'
            target='_blank'
            rel='noreferrer'
            className='rounded-lg bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110'
          >
            Launch app
          </a>
        </div>
        <button
          type='button'
          onClick={() => setMobileOpen((prev) => !prev)}
          className='inline-flex items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-200 transition hover:border-slate-700 hover:text-white md:hidden'
          aria-expanded={mobileOpen}
          aria-label='Toggle navigation'
        >
          <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            {mobileOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen ? (
        <div className='border-t border-slate-800/60 bg-slate-950/95 md:hidden'>
          <nav className='mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-200 sm:px-6'>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='rounded-lg px-3 py-2 transition hover:bg-slate-900/80 hover:text-white'
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href='#pricing'
              className='rounded-lg px-3 py-2 transition hover:bg-slate-900/80 hover:text-white'
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <a
              href='https://vercel.com/import/git'
              target='_blank'
              rel='noreferrer'
              className='rounded-lg bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 px-3 py-2 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110'
              onClick={() => setMobileOpen(false)}
            >
              Launch app
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
