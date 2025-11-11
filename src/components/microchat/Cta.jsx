const Cta = () => (
  <section className='relative overflow-hidden py-24'>
    <div className='absolute inset-0 bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-emerald-500/20 blur-3xl' aria-hidden='true' />
    <div className='relative mx-auto max-w-4xl rounded-[3rem] border border-slate-800/60 bg-slate-950/90 px-6 py-16 text-center shadow-2xl shadow-slate-950/60 sm:px-12'>
      <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-300'>Ready in minutes</p>
      <h2 className='mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
        Deploy on Vercel and start chatting today.
      </h2>
      <p className='mt-4 text-base leading-relaxed text-slate-300'>
        Connect your data sources, invite your team, and go live with a single script tag. No credit card required.
      </p>
      <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
        <a
          href='https://vercel.com/new'
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110'
        >
          Deploy to Vercel
        </a>
        <a
          href='mailto:hello@microchat.dev'
          className='inline-flex items-center justify-center rounded-lg border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white'
        >
          Contact sales
        </a>
      </div>
    </div>
  </section>
);

export default Cta;
