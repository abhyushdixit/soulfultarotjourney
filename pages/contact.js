import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Soulful Tarot Journey By Aashi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-mist text-deepPurple px-4 pt-20 pb-24 min-h-screen">
        <ScrollFade>
          <h1 className="text-4xl font-serif text-center mb-12">Contact Us</h1>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Contact Form */}
            <div className="bg-white p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-deepPurple/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-deepPurple/40"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-deepPurple/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-deepPurple/40"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-deepPurple/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-deepPurple/40"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl border border-deepPurple/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-deepPurple/40 h-32 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-deepPurple hover:bg-deepPurple/90 text-white py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
                {status && <p className="text-sm pt-2">{status}</p>}
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-lavender/40 p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Write to us</h2>

              <p className="text-base font-semibold mb-4">
                For Booking Sessions & Business:
              </p>

              <div className="space-y-4 text-base">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-xl" />
                  <span>+91 79903 43362</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl" />
                  <span>soulfultarotjourney@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-xl" />
                  <span>Jaipur, India</span>
                </div>
              </div>

              <div className="pt-6">
                <p className="font-semibold mb-2">Follow us:</p>
                <div className="flex gap-5">
                  <a
                    href="https://instagram.com/soulful_tarot_journey_by_aashi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.youtube.com/@SOULFULTAROTJOURNEYByAashi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-2xl hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </main>

      <Footer />
    </>
  );
}
