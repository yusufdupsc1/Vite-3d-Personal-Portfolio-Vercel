const ConversationPreview = () => (
  <div
    id='product'
    className='relative w-full max-w-lg rounded-[2rem] border border-slate-800/60 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur'
  >
    <div className='flex items-center justify-between pb-4'>
      <div>
        <p className='text-xs font-medium uppercase tracking-[0.3em] text-slate-400'>Live inbox</p>
        <h2 className='text-lg font-semibold text-white'>Growth launch campaign</h2>
      </div>
      <div className='flex items-center gap-1 rounded-full border border-slate-800/60 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300'>
        Online
        <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
      </div>
    </div>
    <div className='space-y-4 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4'>
      <div className='flex items-start gap-3'>
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-sm font-semibold text-emerald-300'>
          AV
        </div>
        <div className='flex-1 rounded-2xl bg-slate-800/70 p-3 text-sm text-slate-100 shadow-inner shadow-slate-950/40'>
          Hey there! I just landed on your pricing page — do you offer annual discounts for teams of 20?
        </div>
      </div>
      <div className='flex flex-row-reverse items-start gap-3'>
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-sm font-semibold text-sky-300'>
          You
        </div>
        <div className='flex-1 rounded-2xl bg-gradient-to-br from-sky-500/80 via-indigo-400/80 to-blue-500/80 p-3 text-sm text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.35)]'>
          Absolutely! The Growth plan includes 15% off for annual commitments and comes with automations + analytics.
        </div>
      </div>
      <div className='flex items-start gap-3'>
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/20 text-sm font-semibold text-fuchsia-300'>
          AI
        </div>
        <div className='flex-1 space-y-2 rounded-2xl bg-slate-800/70 p-3 text-sm text-slate-200 shadow-inner shadow-slate-950/40'>
          <p className='font-semibold text-white'>Draft reply</p>
          <p>
            I can also share a quick overview of how automation studio works if you are evaluating onboarding flows. Would that help?
          </p>
          <div className='flex flex-wrap gap-2 pt-1'>
            <button
              type='button'
              className='rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white'
            >
              Insert & send
            </button>
            <button
              type='button'
              className='rounded-full border border-transparent bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:border-slate-700 hover:bg-slate-900'
            >
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-5 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-300'>
      <div className='rounded-2xl border border-slate-800/60 bg-slate-950/70 p-3'>
        <p className='text-[11px] uppercase tracking-[0.25em] text-slate-500'>Handle time</p>
        <p className='mt-2 text-lg text-white'>1m 12s</p>
      </div>
      <div className='rounded-2xl border border-slate-800/60 bg-slate-950/70 p-3'>
        <p className='text-[11px] uppercase tracking-[0.25em] text-slate-500'>Sentiment</p>
        <p className='mt-2 text-lg text-emerald-300'>Delighted</p>
      </div>
      <div className='rounded-2xl border border-slate-800/60 bg-slate-950/70 p-3'>
        <p className='text-[11px] uppercase tracking-[0.25em] text-slate-500'>Priority</p>
        <p className='mt-2 text-lg text-sky-300'>VIP</p>
      </div>
    </div>
  </div>
);

export default ConversationPreview;
