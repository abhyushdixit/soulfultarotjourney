import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar } from 'react-icons/fa';

const services = [
  { title: 'Tarot Reading', desc: 'Insight & clarity through intuitive tarot sessions.', icon: '/icons/tarot.png' },
  { title: 'Reiki Healing', desc: 'Energy balancing to soothe mind, body & spirit.', icon: '/icons/reiki.png' },
  { title: 'Numerology', desc: 'Discover your life path through sacred numbers.', icon: '/icons/numerology.png' },
];

const pricing = [
  {
    name: 'Divine Healing',
    price: '₹2100',
    duration: '2hr voice call',
    features: ['Unlimited questions', 'Guided healing'],
  },
  {
    name: 'Sacred Healing',
    price: '₹5100',
    duration: '2hr physical session',
    features: ['Unlimited questions', 'Personal meet in Jaipur'],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Soulful Tarot Journey By Aashi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="bg-mist text-deepPurple px-4 pt-20 pb-24 min-h-screen">
        <ScrollFade>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-serif mb-10">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-lavender/60 rounded-xl p-6 shadow-md transition-transform overflow-hidden"
                >
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={100}
                    height={100}
                    className="absolute opacity-30 top-4 right-4 w-16 h-16 object-contain"
                  />
                  <h2 className="text-2xl font-serif mb-2 relative z-10">{s.title}</h2>
                  <p className="text-sm text-deepPurple/80 relative z-10">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFade>

        {/* Pricing Plans */}
        <ScrollFade>
          <div className="max-w-4xl mx-auto mt-24 text-center">
            <h2 className="text-3xl font-serif mb-6">Book a Live Tarot Session</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-lavender rounded-xl p-6 shadow-md text-left hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-serif mb-2 text-deepPurple">{plan.name}</h3>
                  <p className="text-2xl font-bold text-amethyst mb-2">{plan.price}</p>
                  <p className="text-sm mb-4">{plan.duration}</p>
                  <ul className="text-sm text-deepPurple/80 list-disc pl-5 space-y-1 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-deepPurple text-white px-6 py-3 rounded-full shadow-lg hover:bg-deepPurple/90 transition"
            >
              Book Now
            </Link>
          </div>
        </ScrollFade>

        {/* Reviews Carousel */}
        <ScrollFade>
          <div className="max-w-4xl mx-auto mt-24 text-center">
            <h2 className="text-3xl font-serif mb-6">Client Reviews</h2>
            <div className="overflow-hidden relative">
              <motion.div
                className="flex gap-6 animate-scroll-x"
                initial={{ x: 0 }}
                animate={{ x: ['0%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
              >
                {[
                  { name: 'Priya Sharma', rating: 5, text: 'Felt truly heard and healed.' },
                  { name: 'Rajeev Mehta', rating: 4, text: 'A calming and insightful session.' },
                  { name: 'Neha Gupta', rating: 5, text: 'Pure divine energy. Highly recommended!' },
                  { name: 'Ankita Sinha', rating: 5, text: 'Each card made perfect sense to me.' },
                  { name: 'Karan Verma', rating: 4, text: 'Very relaxing and accurate.' },
                  { name: 'Meera Reddy', rating: 5, text: 'I finally feel clear and focused.' },
                  { name: 'Aman Kapoor', rating: 4, text: 'Warm energy and professional guidance.' },
                  { name: 'Sneha Iyer', rating: 5, text: 'Helped me overcome spiritual blocks.' },
                  { name: 'Rohit Joshi', rating: 4, text: 'A wonderful blend of logic and intuition.' },
                ].map((review, idx) => (
                  <div
                    key={idx}
                    className="min-w-[300px] bg-lavender/70 rounded-xl p-4 shadow-md hover:shadow-xl transition"
                  >
                    <p className="text-sm font-semibold text-deepPurple">{review.name}</p>
                    <div className="flex justify-center text-deepPurple-500">
                      {[...Array(5)].map((_, i) =>
                        i < review.rating ? (
                          <FaStar key={i} className="w-4 h-4" />
                        ) : (
                          <FaRegStar key={i} className="w-4 h-4" />
                        )
                      )}
                    </div>

                    <p className="text-sm text-deepPurple/80 mt-2 italic">“{review.text}”</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </ScrollFade>
      </main>

      <Footer />
    </>
  );
}
