// components/Hero.jsx
import { motion } from 'framer-motion';

const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionButton = motion.button;
const MotionDiv = motion.div;

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
        <div className="flex justify-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SoftSell</h2>
        </div>

      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <MotionH1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Turn Unused Software into Cash
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10"
        >
          SoftSell helps businesses recover value from unused software licenses quickly and securely.
        </MotionP>
        <MotionButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Sell My Licenses
        </MotionButton>
      </MotionDiv>
    </section>
  );
}