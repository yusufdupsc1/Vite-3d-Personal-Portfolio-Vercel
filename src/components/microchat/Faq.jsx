import { faqs } from "../../constants/microchat";

const Faq = () => (
  <section id='faq' className='border-b border-slate-800/60 bg-slate-950/60 py-24'>
    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl space-y-4 text-center sm:mx-auto'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-300'>FAQ</p>
        <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
          Answers to common questions.
        </h2>
        <p className='text-base leading-relaxed text-slate-300'>
          Can’t find what you’re looking for? Drop us a message from the widget and we’ll follow up in minutes.
        </p>
      </div>
      <div className='mt-12 space-y-6'>
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className='group rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 transition hover:border-slate-700'
          >
            <summary className='flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-white'>
              {faq.question}
              <span className='ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-sm text-slate-300 transition group-open:rotate-45'>
                +
              </span>
            </summary>
            <p className='mt-4 text-sm leading-relaxed text-slate-300'>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
