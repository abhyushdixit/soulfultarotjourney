import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';

export default function Home() {
  return (
    <>
      <Head><title>Soulful Tarot Journey By Aashi | Home</title><link rel="icon" href="/favicon.ico" /></Head>
      <Navbar />
      <main className="bg-mist text-deepPurple px-4 pt-20 pb-24 min-h-screen">
        <ScrollFade>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif mb-6 leading-tight">Embark on a Soulful Journey</h1>
              <p className="text-lg text-deepPurple/80 mb-8">Discover your truth, heal with intention, and awaken your inner wisdom.</p>
              <Link href="/services" className="inline-block px-6 py-3 bg-deepPurple text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                Explore Our Services
              </Link>
            </div>
            <div className="relative w-full h-72 sm:h-96 md:h-[500px] shadow-lg rounded-3xl overflow-hidden group">
              <Image
                src="/bg2.png"
                alt="Tarot cards"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </ScrollFade>

        <ScrollFade delay={0.3}>
          <section className="mt-24 text-center">
            <h2 className="text-3xl font-serif mb-8">Why Soulful Tarot Journey By Aashi?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {['✨ Personalized Insights', '💫 Holistic Healing', '🔮 Safe Sacred Space'].map((txt, idx) => (
                <div key={idx} className="p-6 rounded-xl shadow-md bg-lavender/60 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-3">{txt.split(' ')[0]}</div>
                  <h3 className="text-xl font-serif mb-2">{txt.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-deepPurple/80">Experience focused healing and self-discovery.</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollFade>
      </main>
      <Footer />
    </>
  );
}
