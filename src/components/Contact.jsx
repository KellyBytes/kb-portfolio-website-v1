import { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [phone, setPhone] = useState('');
  const form = useRef();
  const { isThemeChanging } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send. Please try again');
        }
      );
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
        6,
        10
      )}`;
    }
  };

  const handleChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  return (
    <div
      id="contact"
      className="scroll-mt-56 lg:scroll-mt-0 ld:max-w-xl xl:max-w-2xl 2xl:max-w-3xl min-h-screen px-8 pt-6 sm:px-12 md:px-16 lg:pl-0 lg:pr-16 lg:py-18 2xl:py-32 flex flex-col justify-start items-center"
    >
      <h2 className="text-2xl font-light uppercase mb-8 text-shadow-md">
        Connect with Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center space-y-4 lg:space-y-6"
      >
        <label className="flex flex-col text-shadow-sm">
          Name *
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-[clamp(18.75rem,15rem+18.75vw,37.5rem)] h-10 pl-3 mt-1 text-[var(--c-secondary)] bg-[var(--bg-secondary)] outline-0 border border-[var(--c-accent)] rounded-md placeholder-gray-400 dark:placeholder-amber-400/40"
          />
        </label>
        <label className="flex flex-col text-shadow-sm">
          Email Address *
          <input
            type="email"
            name="email"
            required
            placeholder="abc@example.com"
            className="w-[clamp(18.75rem,15rem+18.75vw,37.5rem)] h-10 pl-3 mt-1 text-[var(--c-secondary)] bg-[var(--bg-secondary)] outline-0 border border-[var(--c-accent)] rounded-md placeholder-gray-400 dark:placeholder-amber-400/40"
          />
        </label>
        <label className="flex flex-col text-shadow-sm">
          Phone Number
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="(XXX) XXX-XXXX"
            maxLength={14}
            className="w-[clamp(18.75rem,15rem+18.75vw,37.5rem)] h-10 pl-3 mt-1 text-[var(--c-secondary)] bg-[var(--bg-secondary)] outline-0 border border-[var(--c-accent)] rounded-md placeholder-gray-400 dark:placeholder-amber-400/40"
          />
        </label>
        <label className="flex flex-col text-shadow-sm">
          Message *
          <textarea
            name="message"
            required
            placeholder="Type your message here..."
            className="w-[clamp(18.75rem,15rem+18.75vw,37.5rem)] pl-3 mt-1 text-[var(--c-secondary)] bg-[var(--bg-secondary)] outline-0 border border-[var(--c-accent)] rounded-md placeholder-gray-400 dark:placeholder-amber-400/40 min-h-30 max-h-50 resize-y p-3"
          ></textarea>
        </label>
        <button
          type="submit"
          className={`w-[clamp(18.75rem,15rem+18.75vw,37.5rem)] h-10 mt-2 text-lg outline-0 rounded-md bg-[var(--c-accent)] text-neutral-100 dark:text-slate-900 hover:opacity-70 hover:scale-98 uppercase font-bold cursor-pointer tracking-wide text-shadow-md shadow-md shadow-gray-700/20 transform active:translate-y-0.5  ${
            isThemeChanging ? 'transition-none' : 'transition duration-300'
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
