export default function Testimonials() {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 in unused licenses. The process was seamless!",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechForward Inc."
    },
    {
      quote: "As a small business, every dollar counts. SoftSell provided fair valuation and quick payment.",
      name: "Michael Chen",
      role: "CEO",
      company: "Horizon Solutions"
    }
  ];

  return (
    <section className="py-16 bg-indigo-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}