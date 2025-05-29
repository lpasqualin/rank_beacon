import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronDown, Globe, LineChart, Search, Settings, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">RankBeacon™</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#what" className="text-sm font-medium hover:text-teal-500 transition-colors">
              What's Included
            </a>
            <a href="#who" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Who It's For
            </a>
            <a href="#how" className="text-sm font-medium hover:text-teal-500 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-teal-500 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Dominate Local Search Results with RankBeacon™
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
                  Boost your local business visibility and attract more customers with our proven SEO strategies.
                </p>
              </div>
              <a href="#pricing">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg px-8">
                  View Pricing
                </Button>
              </a>
              <div className="pt-8 flex items-center justify-center">
                <a
                  href="#what"
                  className="flex flex-col items-center text-gray-500 hover:text-teal-500 transition-colors"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ChevronDown className="h-5 w-5 animate-bounce mt-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section id="what" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What's Included</h2>
              <p className="text-xl text-gray-500 max-w-2xl">
                Everything you need to boost your local search rankings and attract more customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <Search className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Keyword Research</h3>
                <p className="text-gray-500">
                  Discover the exact terms your potential customers are searching for in your local area.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <Globe className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Google Business Profile</h3>
                <p className="text-gray-500">
                  Optimization of your Google Business Profile to improve local visibility and engagement.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <Settings className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">On-Page SEO</h3>
                <p className="text-gray-500">
                  Technical optimization of your website to improve search engine visibility and rankings.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <LineChart className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
                <p className="text-gray-500">Regular reports and analytics to track your progress and measure ROI.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Review Management</h3>
                <p className="text-gray-500">
                  Strategies to generate and manage customer reviews to build trust and authority.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Citation Building</h3>
                <p className="text-gray-500">
                  Creation and optimization of business listings across the web to boost local relevance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Who It's For</h2>
              <p className="text-xl text-gray-500 max-w-2xl">
                RankBeacon™ is designed for local businesses looking to increase their visibility and customer base.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4">Retail Stores</h3>
                <p className="text-gray-500 mb-4">
                  Drive foot traffic to your physical location with improved local search visibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Increase store visits</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Highlight special offers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Showcase product availability</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4">Service Providers</h3>
                <p className="text-gray-500 mb-4">Connect with local customers searching for your specific services.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Target service-specific keywords</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Highlight service areas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Showcase expertise and credentials</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4">Restaurants & Cafes</h3>
                <p className="text-gray-500 mb-4">
                  Attract hungry customers searching for dining options in your area.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Optimize for "near me" searches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Highlight menu and specials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Manage and showcase reviews</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4">Healthcare Providers</h3>
                <p className="text-gray-500 mb-4">Help patients find your practice when they need your services.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Target specialty-specific searches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Highlight credentials and services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Optimize for insurance-related queries</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4">Professional Services</h3>
                <p className="text-gray-500 mb-4">
                  Connect with clients searching for legal, financial, or consulting services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Establish local authority</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Highlight expertise and credentials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Target specific service keywords</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4">Home Services</h3>
                <p className="text-gray-500 mb-4">
                  Reach homeowners searching for contractors, repair services, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Target service area keywords</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Showcase past projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Highlight emergency availability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
              <p className="text-xl text-gray-500 max-w-2xl">
                Our proven process to boost your local search rankings and attract more customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-500">
                  We analyze your business, competitors, and target market to create a customized strategy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-500">
                  We optimize your online presence, including your website and Google Business Profile.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                <p className="text-gray-500">
                  We track your rankings and performance, making adjustments as needed to improve results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-teal-600">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-500">
                  As your visibility increases, we focus on converting visitors into customers and scaling your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Pricing Plans</h2>
              <p className="text-xl text-gray-500 max-w-2xl">
                Choose the perfect plan for your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-gray-500 mt-2">Perfect for small local businesses</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$499</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Basic keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>On-page SEO for 5 pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border-2 border-teal-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 mt-2">Ideal for established local businesses</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$899</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Advanced keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>On-page SEO for 15 pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Local citation building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Review management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Bi-weekly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Priority email & phone support</span>
                  </li>
                </ul>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 mt-2">For businesses with multiple locations</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$1,499</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Multi-location strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Content marketing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Link building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Weekly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-500 max-w-2xl">
                Find answers to common questions about our local SEO services.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
                  <AccordionContent>
                    Local SEO results typically begin to appear within 30-90 days, depending on your market competition,
                    current online presence, and the specific strategies implemented. You'll receive regular progress
                    reports to track improvements in rankings, traffic, and conversions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to sign a long-term contract?</AccordionTrigger>
                  <AccordionContent>
                    We offer month-to-month services with no long-term contracts required. However, SEO is a long-term
                    strategy, and we recommend a minimum commitment of 6 months to see meaningful results. Many of our
                    clients choose to continue working with us for years as they see the ongoing value.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What makes RankBeacon™ different from other SEO services?</AccordionTrigger>
                  <AccordionContent>
                    RankBeacon™ specializes exclusively in local SEO, allowing us to develop deep expertise in the
                    strategies that work specifically for local businesses. We provide transparent reporting, a
                    dedicated account manager, and a proven process that has helped hundreds of local businesses
                    increase their visibility and customer base.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can you guarantee #1 rankings on Google?</AccordionTrigger>
                  <AccordionContent>
                    No reputable SEO company can guarantee #1 rankings, as search algorithms consider hundreds of
                    factors and are constantly changing. What we do guarantee is that we'll implement proven strategies,
                    provide transparent reporting, and continuously optimize your campaign to achieve the best possible
                    results for your business.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you work with businesses in any industry?</AccordionTrigger>
                  <AccordionContent>
                    We work with local businesses across most industries, including retail, healthcare, professional
                    services, home services, restaurants, and more. However, we limit the number of clients we accept in
                    the same industry and location to avoid conflicts of interest and ensure we can deliver the best
                    results for each client.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What do I need to provide to get started?</AccordionTrigger>
                  <AccordionContent>
                    To get started, we'll need access to your Google Business Profile, website analytics, and basic
                    information about your business, services, and target market. Our team will guide you through the
                    onboarding process and collect all necessary information to develop your customized local SEO
                    strategy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Dominate Local Search?</h2>
              <p className="text-xl max-w-2xl">
                Join hundreds of local businesses that have increased their visibility, traffic, and customers with
                RankBeacon™.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-600">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      
<section id="pricing" className="py-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing for Serious Local Results</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Starter Plan */}
      <div className="border rounded-xl p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Starter</h3>
        <p className="text-4xl font-bold mb-2">$49<span className="text-lg font-normal">/mo</span></p>
        <ul className="text-sm mb-6 space-y-2">
          <li>Basic Google Profile Setup</li>
          <li>Local Listings Sync (3)</li>
          <li>Email Support</li>
        </ul>
        <Button className="w-full">Start Now</Button>
      </div>

      {/* Pro Plan */}
      <div className="border rounded-xl p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-4xl font-bold mb-2">$99<span className="text-lg font-normal">/mo</span></p>
        <ul className="text-sm mb-6 space-y-2">
          <li>Everything in Starter</li>
          <li>Weekly SEO Reporting</li>
          <li>Listings Sync (10)</li>
        </ul>
        <Button className="w-full">Start Now</Button>
      </div>

      {/* Growth Plan (Anchor) */}
      <div className="border-2 border-teal-500 rounded-xl p-6 shadow-md text-center bg-teal-50 scale-105">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">Growth</h3>
        <p className="text-4xl font-bold mb-2 text-teal-700">$199<span className="text-lg font-normal">/mo</span></p>
        <ul className="text-sm mb-6 space-y-2 text-teal-800">
          <li>Everything in Pro</li>
          <li>AI-Driven SEO Optimization</li>
          <li>Google Map Pack Domination</li>
        </ul>
        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Most Popular</Button>
      </div>

      {/* Enterprise Plan */}
      <div className="border rounded-xl p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
        <p className="text-4xl font-bold mb-2">$399<span className="text-lg font-normal">/mo</span></p>
        <ul className="text-sm mb-6 space-y-2">
          <li>Everything in Growth</li>
          <li>Custom SEO Funnels</li>
          <li>Priority Support & Reports</li>
        </ul>
        <Button className="w-full">Start Now</Button>
      </div>

    </div>
  </div>
</section>

</main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold text-white">RankBeacon™</span>
              </div>
              <p className="text-sm">
                Helping local businesses dominate search results and attract more customers since 2015.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Local SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Google Business Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Citation Building
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Review Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Content Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 mt-0.5 text-teal-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 mt-0.5 text-teal-400"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@rankbeacon.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 mt-0.5 text-teal-400"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>
                    123 Main Street
                    <br />
                    Suite 101
                    <br />
                    Anytown, USA 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} RankBeacon™. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-teal-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-teal-400">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-teal-400">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
