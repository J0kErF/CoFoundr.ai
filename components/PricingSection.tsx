const plans = [
  {
    name: "Starter",
    subtitle: "For curious builders",
    price: "Free",
    features: [
      "✅ 1 idea per month",
      "✅ Lean canvas + branding",
      "❌ No website or PDF export",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "For early-stage founders",
    price: "$29/mo",
    features: [
      "✅ Unlimited ideas",
      "✅ Full startup toolkit",
      "✅ Website + PDF exports",
      "✅ AI co-founder chat",
    ],
    highlight: true,
  },
  {
    name: "Founder+",
    subtitle: "For accelerators & teams",
    price: "$99/mo",
    features: [
      "✅ Everything in Pro",
      "✅ Team collaboration",
      "✅ Custom branding toolkit",
      "✅ Priority support",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Simple, Transparent Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${
                plan.highlight
                  ? "border-2 border-indigo-600 shadow-lg"
                  : "shadow-sm"
              }`}
            >
              <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
              <p className="text-gray-600 mb-4">{plan.subtitle}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="text-left space-y-2 mb-6 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
