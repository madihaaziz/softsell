import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import { useEffect, useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded transition"
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Page Sections */}
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
      </footer>
    </div>
  );
}
