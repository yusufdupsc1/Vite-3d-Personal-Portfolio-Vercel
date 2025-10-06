import React, { lazy, Suspense, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import CanvasLoader from "./Loader";
import { profile } from "../constants/profile";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const isEmailConfigured = useMemo(
    () => Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey),
    []
  );

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      setStatus("Email service is not configured yet. Please reach out directly via email.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        emailConfig.publicKey
      );

      setStatus("Thanks for reaching out! I'll reply shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100/80 p-8 rounded-2xl backdrop-blur'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Let's collaborate.</h3>

        <div className='mt-6 rounded-xl border border-white/5 bg-black-200/40 p-5 text-sm text-secondary shadow-lg shadow-black/20'>
          <p className='font-semibold text-white'>Available for:</p>
          <ul className='mt-3 list-disc space-y-2 pl-5'>
            {profile.openTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className='mt-4 flex flex-wrap items-center gap-3 text-sm'>
            <a
              href={`mailto:${profile.email}`}
              className='rounded-full border border-white/10 px-4 py-2 text-white transition-colors hover:border-[#915EFF] hover:text-[#915EFF]'
            >
              {profile.email}
            </a>
            <a
              href={profile.socials.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-white/10 px-4 py-2 text-white transition-colors hover:border-[#915EFF] hover:text-[#915EFF]'
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF] focus-visible:outline-none'
              required
              minLength={2}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='you@example.com'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF] focus-visible:outline-none'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>How can I help?</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me about your project, timeline, and goals.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF] focus-visible:outline-none'
              required
              minLength={10}
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-[#915EFF] to-[#583b96] py-3 px-8 rounded-xl outline-none w-fit text-white font-semibold shadow-md shadow-primary/40 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#915EFF] disabled:cursor-not-allowed disabled:opacity-60'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
          {status && <p className='text-sm text-secondary'>{status}</p>}
          {!isEmailConfigured && (
            <p className='text-xs text-yellow-300'>
              Email credentials are not configured. Update your <code>.env</code> or GitHub secrets to enable the form.
            </p>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[360px]'
      >
        <Suspense fallback={<CanvasLoader />}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
