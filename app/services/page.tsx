import packages from "../data/packages.json";

export default function Services() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Internet Packages
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {packages.map((plan, i) => (
          <div
            key={i}
            className="relative backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-8 transition transform hover:-translate-y-2 hover:shadow-3xl"
          >
            {/* Badge */}
            {plan.name === "Premium" && (
              <span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                BEST DEAL
              </span>
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {plan.name}
            </h2>

            <p className="text-gray-700">Speed</p>
            <p className="text-lg font-semibold mb-4">{plan.speed}</p>

            <p className="text-gray-700">Price</p>
            <p className="text-2xl font-bold text-red-600 mb-6">
              {plan.price}
            </p>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-lg hover:scale-105 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}