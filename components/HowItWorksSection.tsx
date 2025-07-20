const steps = [
  {
    number: "1",
    title: "Input Your Idea",
    description: "Just describe your idea in plain language. No pitch deck needed.",
  },
  {
    number: "2",
    title: "AI Builds Your Startup",
    description:
      "From brand identity to business model, let our AI co-founder do the heavy lifting.",
  },
  {
    number: "3",
    title: "Launch, Validate, Iterate",
    description:
      "Deploy your site, collect feedback, and refine your vision — fast.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-28 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-16">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="text-indigo-600 text-4xl font-bold mb-4">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
