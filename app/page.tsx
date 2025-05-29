
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-white text-gray-800">
      <section className="text-center space-y-6 max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight">RankBeacon™</h1>
        <p className="text-xl text-gray-600">
          Dominate your local market with smarter, faster SEO. One-time setup or monthly growth plans tailored to your business.
        </p>
        <div className="space-x-4">
          <a href="#pricing" className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700">
            View Pricing
          </a>
          <a href="#contact" className="text-teal-600 border border-teal-600 py-3 px-6 rounded-lg hover:bg-teal-50">
            Get Started
          </a>
        </div>
      </section>

      <section id="pricing" className="py-20 w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
          <p className="mb-12 text-gray-600 text-lg">Flexible options for every stage of your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Solo Tier */}
            <div className="p-6 bg-white border rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">Kickstart</h3>
              <p className="text-gray-500 mb-4">One-time setup for local visibility</p>
              <div className="text-3xl font-bold mb-2">$497</div>
              <p className="text-sm text-gray-400 mb-4">One-time payment</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>✔ Google Business Profile setup</li>
                <li>✔ Keyword & map pack targeting</li>
                <li>✔ Local directory submission</li>
                <li>✔ 30-day performance tracking</li>
              </ul>
              <a href="#contact" className="mt-auto bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
                Choose Plan
              </a>
            </div>

            {/* Starter Tier */}
            <div className="p-6 bg-white border rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">Starter</h3>
              <p className="text-gray-500 mb-4">Ongoing SEO for small businesses</p>
              <div className="text-3xl font-bold mb-2">$799/mo</div>
              <p className="text-sm text-gray-400 mb-4">Billed monthly</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>✔ Kickstart Plan included</li>
                <li>✔ Ongoing SEO maintenance</li>
                <li>✔ Google Business optimization</li>
                <li>✔ Monthly keyword tracking</li>
              </ul>
              <a href="#contact" className="mt-auto bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
                Choose Plan
              </a>
            </div>

            {/* Professional Tier */}
            <div className="relative p-6 bg-white border-2 border-teal-600 rounded-lg shadow-lg flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</div>
              <h3 className="text-2xl font-semibold mb-2">Professional</h3>
              <p className="text-gray-500 mb-4">Growth strategy for scaling brands</p>
              <div className="text-3xl font-bold mb-2">$1,299/mo</div>
              <p className="text-sm text-gray-400 mb-4">Billed monthly</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>✔ Starter Plan included</li>
                <li>✔ On-page SEO for 15 pages</li>
                <li>✔ Citation & link building</li>
                <li>✔ Bi-weekly reporting</li>
              </ul>
              <a href="#contact" className="mt-auto bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
                Choose Plan
              </a>
            </div>

            {/* Enterprise Tier */}
            <div className="p-6 bg-white border rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-4">Dominate across regions & verticals</p>
              <div className="text-3xl font-bold mb-2">$1,999/mo</div>
              <p className="text-sm text-gray-400 mb-4">Billed monthly</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>✔ Everything in Pro</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Local content publishing</li>
                <li>✔ Advanced analytics dashboard</li>
              </ul>
              <a href="#contact" className="mt-auto bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
                Choose Plan
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
