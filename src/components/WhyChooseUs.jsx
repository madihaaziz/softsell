import { FaShieldAlt, FaClock, FaPercentage, FaHeadset } from 'react-icons/fa';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl mb-4 text-indigo-600" />,
      title: "Secure Transactions",
      description: "Bank-level security for all your transactions and data."
    },
    {
      icon: <FaClock className="text-3xl mb-4 text-indigo-600" />,
      title: "Fast Process",
      description: "From valuation to payment in as little as 48 hours."
    },
    {
      icon: <FaPercentage className="text-3xl mb-4 text-indigo-600" />,
      title: "Best Prices",
      description: "We offer competitive rates based on real-time market data."
    },
    {
      icon: <FaHeadset className="text-3xl mb-4 text-indigo-600" />,
      title: "Dedicated Support",
      description: "Our experts are available to guide you through the process."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}