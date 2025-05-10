import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionButton = motion.button;


export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="text-4xl mb-4 text-indigo-600" />,
      title: "Upload License",
      description: "Provide details about your unused software licenses through our secure platform."
    },
    {
      icon: <FaSearchDollar className="text-4xl mb-4 text-indigo-600" />,
      title: "Get Valuation",
      description: "Our system analyzes the market and provides a fair valuation within 24 hours."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl mb-4 text-indigo-600" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment directly to your bank account."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Section Title */}
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works!
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              className="p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="flex justify-center">{step.icon}</div>

              {/* Animated Step Title */}
              <motion.h3 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.3 }} 
                className="text-xl font-semibold mb-3"
              >
                {step.title}
              </motion.h3>

              {/* Animated Step Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.4 }} 
                className="text-gray-600 dark:text-gray-300"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
