const features = [
  {
    title: "🧠 AI-Powered Lean Canvas",
    description: "Generate your full business model instantly from your idea.",
  },
  {
    title: "🎨 Branding & Logo",
    description: "Get names, slogans, colors, and logo ideas in seconds.",
  },
  {
    title: "🌐 Website Generator",
    description: "Instant landing page with your brand and customer focus.",
  },
  {
    title: "📊 Market Research",
    description: "Get insights, trends, and competitor analysis.",
  },
  {
    title: "📄 Pitch Deck",
    description:
      "Auto-generated investor-ready slide deck with design & content.",
  },
  {
    title: "🤖 Always-On AI Agent",
    description: "Ask your AI co-founder questions 24/7.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">What You Get</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
