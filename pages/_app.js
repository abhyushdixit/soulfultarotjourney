import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import { AnimatePresence, motion } from 'framer-motion';

NProgress.configure({ showSpinner: false, speed: 300 });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
