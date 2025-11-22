import { plans } from "../../constants/microchat";

const Pricing = () => (
  <section id='pricing' className='border-b border-slate-800/60 bg-slate-950/40 py-24'>
    <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-300'>Pricing</p>
        <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
          Choose a plan that grows with you.
        </h2>
        <p className='text-base leading-relaxed text-slate-300'>
          Every plan comes with realtime messaging, the unified inbox, and access to our library of automation templates.
        </p>
      </div>
      <div className='mt-12 grid gap-8 md:grid-cols-3'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/50 ${
              plan.highlighted ? "ring-2 ring-sky-400" : ""
            }`}
          >
            {plan.highlighted ? (
              <span className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-lg shadow-sky-500/30'>
                Most popular
              </span>
            ) : null}
            <h3 className='text-2xl font-semibold text-white'>{plan.name}</h3>
            <p className='mt-3 text-sm leading-relaxed text-slate-300'>{plan.description}</p>
            <div className='mt-6 flex items-baseline gap-2'>
              <span className='text-4xl font-semibold text-white'>{plan.price}</span>
              <span className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-500'>{plan.frequency}</span>
            </div>
            <ul className='mt-6 space-y-3 text-sm text-slate-200'>
              {plan.highlights.map((highlight) => (
                <li key={highlight} className='flex items-start gap-3'>
                  <span className='mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]' />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className='mt-10'>
              <a
                href='https://vercel.com/import/git'
                target='_blank'
                rel='noreferrer'
                className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 text-slate-950 shadow-lg shadow-sky-500/30 hover:brightness-110"
                    : "border border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white"
                }`}
              >
                {plan.highlighted ? "Start trial" : "Talk to sales"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
