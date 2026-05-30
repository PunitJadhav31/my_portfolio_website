import { useState } from "react";
import SectionTitle from "./SectionTitle";

const contactLinks = [
  {
    label: "Email",
    value: "punitjadhav001@gmail.com",
    href: "mailto:punitjadhav001@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/punit-jadhav",
    href: "https://www.linkedin.com/in/punit-jadhav/",
  },
  {
    label: "GitHub",
    value: "github.com/PunitJadhav31",
    href: "https://github.com/PunitJadhav31",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
  label="Contact"
  title="Let’s connect and build something data-driven."
  description="I am open to Data Science, Data Analyst, Business Intelligence, and Analytics internship opportunities where I can apply Python, SQL, Power BI, and machine learning to solve real business problems."
/>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Get in touch
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Open to opportunities
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              If you are hiring for data science, analytics, business
              intelligence, or machine learning internship roles, I would be
              happy to connect. I am especially interested in roles where I can
              work with data pipelines, dashboards, predictive modeling, and
              business decision-making.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
                >
                  <div>
                    <p className="text-sm text-zinc-500">{link.label}</p>
                    <p className="mt-1 text-sm font-medium text-white sm:text-base">
                      {link.value}
                    </p>
                  </div>

                  <span className="text-emerald-300">↗</span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <p className="text-sm leading-7 text-zinc-300">
                Currently based in Dallas, TX and pursuing MS in Business
                Analytics & Artificial Intelligence at The University of Texas
                at Dallas.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-white">
              Send me a message
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Fill out the form below and it will open your email app with a
              ready-to-send message.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/60"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/60"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/60"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Punit Jadhav. All rights reserved.</p>

            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/punit-jadhav/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-emerald-300"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-emerald-300"
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-emerald-300"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;