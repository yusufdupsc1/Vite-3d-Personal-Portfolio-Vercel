import { navigation } from "../../constants/microchat";

const Footer = () => (
  <footer className='border-t border-slate-800/60 bg-slate-950/80'>
    <div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-2 text-center sm:text-left'>
        <div className='text-base font-semibold text-white'>Microchat</div>
        <p className='text-xs text-slate-500'>Built on Vercel’s edge network for teams that move fast.</p>
      </div>
      <nav className='flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] sm:justify-end'>
        {navigation.map((item) => (
          <a key={item.label} href={item.href} className='transition hover:text-white'>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
