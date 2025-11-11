import { featureCards, metrics } from "../../constants/microchat";

const FeatureGrid = () => (
  <section
    id='features'
    className='border-b border-slate-800/60 bg-slate-950/40 py-24'
  >
    <div className='mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-300'>Platform</p>
        <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
          Designed for flow, built for scale.
        </h2>
        <p className='text-base leading-relaxed text-slate-300'>
          Microchat keeps your team focused on the conversations that matter with opinionated workflows, instant automations, and observability out of the box.
        </p>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        {featureCards.map((feature) => (
          <div
            key={feature.title}
            className='group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/50 transition duration-300 hover:border-slate-700 hover:shadow-sky-500/20'
          >
            <div className='absolute inset-x-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 opacity-0 transition duration-300 group-hover:opacity-100' />
            <h3 className='text-xl font-semibold text-white'>{feature.title}</h3>
            <p className='mt-4 text-sm leading-relaxed text-slate-300'>{feature.description}</p>
            <div className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300'>
              Explore feature
              <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14M13 5l7 7-7 7' />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <dl className='grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 sm:grid-cols-2 lg:grid-cols-4'>
        {metrics.map((metric) => (
          <div key={metric.label} className='space-y-2 text-center sm:text-left'>
            <dt className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-500'>{metric.label}</dt>
            <dd className='text-3xl font-semibold text-white'>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default FeatureGrid;
