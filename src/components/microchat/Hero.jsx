import ConversationPreview from "./ConversationPreview";
import { highlights } from "../../constants/microchat";

const Hero = () => (
  <section id='top' className='relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
    <div className='absolute -right-40 -top-40 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl sm:h-96 sm:w-96' aria-hidden='true' />
    <div className='absolute bottom-[-10rem] left-[-8rem] h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl sm:h-96 sm:w-96' aria-hidden='true' />
    <div className='mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8'>
      <div className='max-w-xl space-y-6'>
        <span className='inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-300 shadow-lg shadow-sky-500/10'>
          Lightning fast support
        </span>
        <h1 className='text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl'>
          Customer conversations that feel human, not hectic.
        </h1>
        <p className='text-base leading-relaxed text-slate-300 sm:text-lg'>
          Microchat centralizes every message and powers your team with intelligent automations so you can deliver personal, 24/7 support without adding headcount.
        </p>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
          <a
            href='#pricing'
            className='inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110'
          >
            Start for free
          </a>
          <a
            href='#product'
            className='inline-flex items-center justify-center rounded-lg border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white'
          >
            See product tour
          </a>
        </div>
        <div className='grid gap-5 pt-6 sm:grid-cols-3 sm:gap-6'>
          {highlights.map((item) => (
            <div
              key={item.title}
              className='rounded-2xl border border-slate-800/60 bg-slate-900/70 p-4 shadow-inner shadow-slate-950/40 transition hover:border-slate-700'
            >
              <h3 className='text-sm font-semibold text-white'>{item.title}</h3>
              <p className='mt-2 text-xs leading-relaxed text-slate-400'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex flex-1 justify-center lg:justify-end'>
        <ConversationPreview />
      </div>
    </div>
  </section>
);

export default Hero;
