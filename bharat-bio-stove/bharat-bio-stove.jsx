import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Mail, Flame, Leaf, DollarSign, Users, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

export default function BharatBioStove() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappURL = "https://wa.me/918796979076?text=Hello!%20I'm%20interested%20in%20Bharat%20Bio%20Stove.";
  const phoneNumber = "8796979076";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-orange-600" />
              <span className="font-bold text-xl text-gray-900">Bharat Bio Stove</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 font-medium transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 font-medium transition">About</button>
              <button onClick={() => scrollToSection('product')} className="text-gray-700 hover:text-orange-600 font-medium transition">Product</button>
              <button onClick={() => scrollToSection('hiring')} className="text-gray-700 hover:text-orange-600 font-medium transition">Hiring</button>
              <button onClick={() => scrollToSection('dealers')} className="text-gray-700 hover:text-orange-600 font-medium transition">Dealers</button>
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Chat Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50">About</button>
              <button onClick={() => scrollToSection('product')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50">Product</button>
              <button onClick={() => scrollToSection('hiring')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50">Hiring</button>
              <button onClick={() => scrollToSection('dealers')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50">Dealers</button>
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg">Chat on WhatsApp</a>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky WhatsApp Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-40 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                No Smoke.<br />Low Cost.<br /><span className="text-orange-600">Bharat Bio Stove</span>.
              </h1>
              <p className="text-xl text-gray-700 mb-8">Save money and cook clean without expensive LPG. Smokeless biomass cooking for every Indian home.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition font-bold flex items-center justify-center gap-2 text-lg">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
                <button onClick={() => scrollToSection('hiring')} className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold flex items-center justify-center gap-2 text-lg">
                  <Users className="w-5 h-5" /> Apply for Job
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Smokeless</p>
                    <p className="text-sm text-gray-600">Clean cooking environment</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Low Cost</p>
                    <p className="text-sm text-gray-600">Save up to 70% on fuel</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Eco-Friendly</p>
                    <p className="text-sm text-gray-600">Uses agricultural waste</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Easy Fuel</p>
                    <p className="text-sm text-gray-600">Wood, coal, waste materials</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Flame className="w-32 h-32 text-white mx-auto mb-6 opacity-90" />
                  <p className="text-white text-xl font-bold">Biomass Energy</p>
                  <p className="text-orange-100 mt-2">Sustainable Cooking Solutions</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-xl opacity-20"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-600 font-bold text-sm">ABOUT US</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              At Bharat Bio Stove, we're committed to bringing clean cooking to every Indian household. We believe that affordable, smokeless cooking shouldn't be a luxury—it should be a right.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">Reduce LPG dependency across India by providing sustainable, cost-effective biomass cooking solutions to rural households, vendors, and communities.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
                <p className="text-gray-700">Quality craftsmanship, environmental responsibility, and affordability. We're building products that last, work efficiently, and help protect our planet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-orange-600 font-bold text-sm">HOW IT WORKS</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">The Bharat Bio Stove</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Flame className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-900 font-bold text-lg">Advanced Combustion Chamber</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Smoke</h3>
                  <p className="text-gray-700">Advanced combustion technology eliminates smoke and harmful emissions, creating a healthy cooking environment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Saves Money</h3>
                  <p className="text-gray-700">Use cheap, locally available fuel like wood, coal, and agricultural waste. Save up to 70% compared to LPG.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Built to Last</h3>
                  <p className="text-gray-700">Durable, heavy-duty construction designed for years of reliable use in Indian kitchens.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h3>
                  <p className="text-gray-700">Simple design with no complicated parts. Anyone can operate and maintain it easily.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable</h3>
              <p className="text-gray-700">Low initial investment with minimal operating costs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <Leaf className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-700">Reduces carbon footprint and makes use of agricultural waste.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Support</h3>
              <p className="text-gray-700">Expert customer support and warranty coverage included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section id="hiring" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-blue-400 bg-opacity-30 text-blue-100 px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">WE ARE HIRING</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Biomass Stove Experts</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our growing team and help build the future of clean cooking in India.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Experience Required</p>
                    <p className="text-blue-100">2–3 years of stove manufacturing experience</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Full Skills</p>
                    <p className="text-blue-100">Complete knowledge of biomass stove manufacturing</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 bg-opacity-30 p-6 rounded-xl mb-8 border border-blue-400 border-opacity-30">
                <p className="font-bold mb-4">What we offer:</p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Competitive salary</li>
                  <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Free food & accommodation</li>
                  <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Performance-based incentives</li>
                  <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Skill development programs</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
                <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <p className="text-blue-200 text-sm font-bold mb-2">POSITION</p>
                  <p className="text-2xl font-bold">Stove Manufacturing Expert</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold mb-2">LOCATION</p>
                  <div className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5 text-green-300" />
                    Based on project requirements
                  </div>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold mb-2">EMPLOYMENT TYPE</p>
                  <p className="text-lg">Full-Time</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold mb-2">KEY RESPONSIBILITIES</p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Oversee stove manufacturing quality</li>
                    <li>• Train junior staff</li>
                    <li>• Ensure durability standards</li>
                    <li>• Innovation in design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealers Section */}
      <section id="dealers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-orange-600 font-bold text-sm">BUSINESS OPPORTUNITY</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Become a Dealer</h2>
            <p className="text-xl text-gray-700 mt-4">Grow your business with Bharat Bio Stove. Wholesale and bulk orders available with competitive margins.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">High Demand Product</p>
                    <p className="text-sm text-gray-700">Growing market for affordable cooking solutions</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Attractive Margins</p>
                    <p className="text-sm text-gray-700">Competitive wholesale pricing with excellent profit potential</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Marketing Support</p>
                    <p className="text-sm text-gray-700">We provide promotional materials and guidance</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Dedicated Support</p>
                    <p className="text-sm text-gray-700">Expert assistance for your dealers network</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bulk Order Info</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-bold mb-1">MINIMUM ORDER</p>
                  <p className="text-2xl font-bold text-blue-600">50+ Units</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-bold mb-1">DELIVERY TIME</p>
                  <p className="text-lg font-bold text-gray-900">15-30 days (based on order size)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-bold mb-1">PAYMENT TERMS</p>
                  <p className="text-lg font-bold text-gray-900">Flexible options available</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-700 mb-4 font-semibold">Ready to become a partner?</p>
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition font-bold flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Contact for Bulk Orders
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-orange-600 font-bold text-sm">GET IN TOUCH</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Contact Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <Phone className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${phoneNumber}`} className="text-orange-600 font-bold text-lg hover:text-orange-700">
                {phoneNumber}
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-lg hover:text-green-700">
                Chat Now
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-700 font-medium">Mon - Sat: 9AM - 6PM</p>
              <p className="text-gray-600 text-sm">IST</p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white max-w-2xl mx-auto p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Message</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const message = `Name: ${formData.get('name')}\nPhone: ${formData.get('phone')}\nType: ${formData.get('type')}\nMessage: ${formData.get('message')}`;
              window.location.href = `https://wa.me/918796979076?text=${encodeURIComponent(message)}`;
            }} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              />
              <select
                name="type"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              >
                <option value="">Select Inquiry Type</option>
                <option value="Bulk Order">Bulk Order</option>
                <option value="Dealer Partnership">Dealer Partnership</option>
                <option value="Job Application">Job Application</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-orange-600" />
                <span className="font-bold text-white">Bharat Bio Stove</span>
              </div>
              <p className="text-sm">Clean, affordable cooking for every Indian home.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-600">Home</button></li>
                <li><button onClick={() => scrollToSection('product')} className="hover:text-orange-600">Product</button></li>
                <li><button onClick={() => scrollToSection('hiring')} className="hover:text-orange-600">Jobs</button></li>
                <li><button onClick={() => scrollToSection('dealers')} className="hover:text-orange-600">Partners</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={`tel:${phoneNumber}`} className="hover:text-orange-600">{phoneNumber}</a></li>
                <li><a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-orange-600">Instagram</a>
                <a href="#" className="text-gray-500 hover:text-orange-600">Facebook</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Bharat Bio Stove. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-4 md:mt-0">Empowering India with sustainable cooking solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
