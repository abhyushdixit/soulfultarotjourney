import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Soulful Tarot Journey By Aashi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="bg-mist text-deepPurple px-4 pt-24 pb-32 min-h-screen">
        {/* Intro Section with Image and Text */}
        <ScrollFade>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
            {/* Profile Image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-deepPurple group transition-transform hover:scale-105 duration-300">
              <Image
                src="/aashi.jpeg"
                alt="Aashi"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Description Text */}
            <div className="text-right max-w-2xl group hover:scale-[1.01] transition-transform duration-300">
              <h1 className="text-4xl font-serif mb-4">About Soulful Tarot Journey By Aashi</h1>
              <p className="text-md leading-relaxed text-deepPurple/90 mb-3">
                Namaste, I am <strong>Aashi</strong>. Welcome to the Soulful Tarot Journey Family.
              </p>
              <div className="space-y-2 text-sm sm:text-base text-deepPurple/80 mb-4">
                {[
                  'Psychic & Intuitive Tarot Card Reader',
                  'Reiki Healer',
                  'Spiritual Advisor & Motivator',
                ].map((text, idx) => (
                  <div key={idx} className="flex justify-end items-center gap-2 group-hover:translate-x-1 transition-all">
                    <IconStar />
                    <span>{text}</span>
                    <IconStar />
                  </div>
                ))}
              </div>
              <p className="text-md leading-relaxed text-deepPurple/80">
                I am an intuitive tarot card reader who strives to heal people through divine guidance — based on the combined
                knowledge of Tarot, Numerology, and Vaastu. I am your companion on this beautiful soulful journey called <strong className="italic">life</strong>.
              </p>
            </div>
          </div>
        </ScrollFade>

        {/* Legal Disclaimer */}
        <ScrollFade delay={0.2}>
          <div className="max-w-3xl mx-auto bg-lavender/60 p-6 rounded-lg shadow text-sm leading-relaxed mb-16 hover:shadow-lg transition duration-300">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <IconCheck /> Legal Disclaimer
            </h3>
            <p>
              While I believe that tarot reading supports spiritual and personal growth through intuitive predictions, it is ultimately
              viewed as a form of entertainment. The information shared should not be considered a directive for any specific course of action.
            </p>
            <p className="mt-2 italic text-deepPurple/70">
              This journey is dedicated to God, Guruji, the Universe, and all my beloved Clients. Thank you and blessings to you always.
            </p>
          </div>
        </ScrollFade>

        {/* Timeline Section */}
        <ScrollFade delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-center mb-8">My Spiritual Journey</h2>
            <ul className="space-y-6 relative border-l-2 border-deepPurple/60 pl-8">
              {[
                { year: '2018', text: 'Discovered deep intuitive connection with spiritual energies.' },
                { year: '2019', text: 'Completed Reiki healing and energy balancing training.' },
                { year: '2020', text: 'Began public tarot readings and numerology sessions.' },
                { year: '2022–Now', text: 'Offering online consultations, building the Soulful Tarot Journey community.' },
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative group hover:scale-[1.01] transition-transform duration-300"
                >
                  {/* Dot */}
                  <div className="absolute -left-[0.625rem] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-deepPurple rounded-full z-10"></div>
                  {/* Line connector to dot is handled via border-l above */}
                  <div className="pl-2">
                    <span className="font-semibold">{item.year}</span> – {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollFade>
      </main>

      <Footer />
    </>
  );
}

// Icons used in place of emojis
function IconStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amethyst" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.1-.6L12 2 9.1 8.7 2 9.3l5.4 4.7-1.6 7z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amethyst  -600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
