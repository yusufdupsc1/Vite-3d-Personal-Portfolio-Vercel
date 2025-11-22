import { testimonials } from "../../constants/microchat";

const Testimonials = () => (
  <section
    id='testimonials'
    className='border-b border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24'
  >
    <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-300'>Loved by teams</p>
        <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
          Modern support orgs run on Microchat.
        </h2>
        <p className='text-base leading-relaxed text-slate-300'>
          From scrappy startups to global enterprises, Microchat unlocks faster replies and more delighted customers.
        </p>
      </div>
      <div className='mt-12 grid gap-8 md:grid-cols-3'>
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className='flex h-full flex-col justify-between rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/50'
          >
            <blockquote className='text-sm leading-relaxed text-slate-200'>
              “{testimonial.quote}”
            </blockquote>
            <figcaption className='mt-6 text-sm font-semibold text-white'>
              <div>{testimonial.author}</div>
              <div className='mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500'>{testimonial.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
