"use client"
import { useState } from 'react';
import Head from 'next/head';

// Define TypeScript interfaces
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Features of the Vickrey auction platform
  const features: Feature[] = [
    {
      title: "Second-Price Mechanism",
      description: "Our Vickrey auctions ensure the winner pays the second-highest bid, promoting truthful bidding and optimal price discovery.",
      icon: "🏆",
    },
    {
      title: "Internet Computer Powered",
      description: "Built on the Internet Computer blockchain for true decentralization, transparency, and immutable auction records.",
      icon: "⛓️",
    },
    {
      title: "Gas-Free Transactions",
      description: "No transaction fees for bidding or creating auctions, making it accessible to all participants.",
      icon: "💸",
    },
    {
      title: "Private Sealed Bids",
      description: "Your bids remain confidential until the auction ends, preventing price manipulation.",
      icon: "🔒",
    },
    {
      title: "Smart Contract Escrow",
      description: "Funds are securely held in smart contracts until auction completion, ensuring fair settlements.",
      icon: "📝",
    },
    {
      title: "Real-time Analytics",
      description: "Access detailed auction analytics and historical data to inform your bidding strategy.",
      icon: "📊",
    },
  ];

  // FAQs about Vickrey auctions and the platform
  const faqs: FAQ[] = [
    {
      question: "What is a Vickrey auction?",
      answer: "A Vickrey auction is a type of sealed-bid auction where bidders submit bids without knowing others&apos; bids. The highest bidder wins but pays the second-highest bid price. This encourages honest bidding as your bid only determines if you win, not what you pay.",
    },
    {
      question: "How does the Internet Computer blockchain enhance Vickrey auctions?",
      answer: "The Internet Computer provides a decentralized, transparent infrastructure that ensures auction integrity. Smart contracts automatically execute auction rules, bid sealing is cryptographically secure, and the transaction history is immutable and verifiable.",
    },
    {
      question: "Are there any fees to participate in auctions?",
      answer: "Unlike traditional blockchain platforms, our solution on the Internet Computer doesn&apos;t require gas fees for transactions. We charge a small percentage fee (3%) only on successful auction completions.",
    },
    {
      question: "How do I know the auction is fair?",
      answer: "All auction logic is implemented in open-source smart contracts that can be verified. Bids remain sealed until the auction ends, and the entire process is automated without human intervention. The blockchain ensures transparency while maintaining bid privacy during the auction.",
    },
    {
      question: "What types of items can be auctioned?",
      answer: "Our platform supports digital assets like NFTs, domain names, and digital collectibles. We&apos;re also developing support for physical item auctions with integrated escrow and verification systems.",
    },
    {
      question: "How do I get started?",
      answer: "Sign up for early access using the form on this page. Once launched, you&apos;ll need to create an Internet Computer wallet (we recommend Plug Wallet) and connect it to our platform to start participating in auctions.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would call an API to store the email
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Head>
        <title>Vickrey Auctions | Internet Computer</title>
        <meta name="description" content="Decentralized Vickrey auctions on the Internet Computer blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation - Mobile Optimized */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">VickreyChain</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
              <span onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium cursor-pointer">Features</span>
              <span onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium cursor-pointer">How It Works</span>
              <span onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium cursor-pointer">FAQ</span>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <span 
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }} 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer"
              >
                Features
              </span>
              <span 
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }} 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer"
              >
                How It Works
              </span>
              <span 
                onClick={() => {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }} 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer"
              >
                FAQ
              </span>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-center sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Transparent</span>
                  <span className="block text-indigo-600">Vickrey Auctions</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  The first fully decentralized Vickrey auction platform built on the Internet Computer blockchain. Experience the fairest auction mechanism with complete transparency and zero gas fees.
                </p>
                <div className="mt-8 sm:mt-12">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">Email address</label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Get Early Access
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="rounded-md bg-green-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Thanks for signing up! We&apos;ll notify you when we launch.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                <div className="relative">
                  <div className="w-full relative bg-gradient-to-r from-indigo-500 to-purple-600 h-64 sm:h-96 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30,20 L70,20 L80,40 L50,90 L20,40 Z" fill="white" />
                        <circle cx="50" cy="35" r="10" fill="white" />
                        <path d="M25,30 L45,30 L45,60 L25,60 Z" fill="white" opacity="0.5" transform="translate(60, 0)" />
                      </svg>
                    </div>
                    <div className="absolute top-2 right-2 sm:top-6 sm:right-6 bg-white bg-opacity-20 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                      <span className="text-white text-xs font-medium">Secure Blockchain</span>
                    </div>
                    <div className="text-center z-10 px-4 sm:px-6">
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Internet Computer Auctions</h3>
                      <p className="text-white text-opacity-80 text-sm sm:text-base">Transparent, efficient, and secure bidding</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="text-white font-medium text-base sm:text-lg mb-1 sm:mb-2">Complete Auction Transparency</div>
                    <p className="text-white text-opacity-90 text-xs sm:text-sm">
                      Our platform provides real-time insights and verifiable outcomes for all auction participants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Vickrey Auctions Work - Mobile Optimized */}
      <section id="how-it-works" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Understanding Vickrey Auctions
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
              The optimal auction format that encourages honest bidding and maximizes value for both buyers and sellers.
            </p>
          </div>

          <div className="mt-10 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <span className="text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Submit Sealed Bids</h3>
                <p className="mt-2 text-base text-gray-500">
                  All participants submit their bids privately. No one, including the auctioneer, knows what others have bid during this phase.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <span className="text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Auction Closes</h3>
                <p className="mt-2 text-base text-gray-500">
                  When the auction period ends, all bids are cryptographically revealed and verified by the blockchain.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <span className="text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Second-Price Settlement</h3>
                <p className="mt-2 text-base text-gray-500">
                  The highest bidder wins but pays only the amount of the second-highest bid, promoting honest valuation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section id="features" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Platform
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
              Combining the efficiency of Vickrey auctions with the power of the Internet Computer blockchain.
            </p>
          </div>

          <div className="mt-10 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section id="faq" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
              Everything you need to know about our Vickrey auction platform.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <dl className="space-y-6 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="pt-6">
                  <dt className="text-base sm:text-lg font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm sm:text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to experience the future of auctions?</span>
              <span className="block text-indigo-200 mt-1">Join our platform today.</span>
            </h2>
            <div className="mt-8 lg:mt-0">
              <button
                onClick={() => document.getElementById('email')?.focus()}
                className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          
          
          <div className="mt-8 sm:mt-12  sm:pt-8">
            <p className="text-sm sm:text-base text-gray-400 text-center">
              &copy; 2025 VickreyChain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}