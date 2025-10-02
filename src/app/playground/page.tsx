"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hash, Key, Blocks, Code, Shield, Cpu, Zap, CheckCircle, Play } from "lucide-react";

export default function PlaygroundPage() {
  const tools = [
    {
      id: "hash",
      title: "Hash Calculator",
      description: "Calculate SHA-256 hashes and see how small changes create completely different outputs through the avalanche effect",
      icon: Hash,
      color: "from-green-500 to-emerald-500",
      href: "/playground/hash",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: "wallet",
      title: "Wallet Generator",
      description: "Generate secure cryptocurrency wallet addresses with public/private key pairs using industry-standard cryptography",
      icon: Key,
      color: "from-purple-500 to-pink-500",
      href: "/playground/wallet",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      id: "blockchain",
      title: "Blockchain Visualizer",
      description: "Visualize how blocks are cryptographically linked together to form an immutable chain structure",
      icon: Blocks,
      color: "from-blue-500 to-cyan-500",
      href: "/playground/blockchain",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: "mining",
      title: "Mining Simulator",
      description: "Experience proof-of-work mining, see how nonces are found, and understand difficulty adjustments",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      href: "/playground/mining",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: "signature",
      title: "Digital Signatures",
      description: "Sign and verify messages using elliptic curve cryptography to ensure authenticity and integrity",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      href: "/playground/signature",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      id: "smart-contract",
      title: "Smart Contract Lab",
      description: "Write, compile, and test simple smart contracts in a safe sandbox environment",
      icon: Code,
      color: "from-pink-500 to-rose-500",
      href: "/playground/smart-contract",
      bgColor: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold mb-6 md:mb-10 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Playground
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Hands-on interactive tools to experiment with blockchain concepts and understand how they work in practice
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-600" />
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No Installation</div>
              <div className="text-gray-600 text-base md:text-lg">Run directly in your browser</div>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
              <Zap className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-blue-600" />
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Real-time Results</div>
              <div className="text-gray-600 text-base md:text-lg">See instant feedback</div>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white shadow-xl border border-gray-200 sm:col-span-2 md:col-span-1">
              <Play className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-purple-600" />
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Learn by Doing</div>
              <div className="text-gray-600 text-base md:text-lg">Practice makes perfect</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Interactive Tools
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Choose a tool to start exploring blockchain technology hands-on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={tool.href}>
                    <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.bgColor} opacity-50 group-hover:opacity-70 transition-opacity`} />

                      <div className="relative p-6 md:p-8">
                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                          {tool.title}
                        </h3>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                          {tool.description}
                        </p>

                        <div className="flex items-center text-blue-600 text-base md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          Try it now
                          <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 md:p-10 lg:p-12 bg-white rounded-3xl shadow-2xl border-2 border-gray-200"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Learn by Experimenting
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
              These interactive tools help you understand blockchain concepts through practical experimentation.
              Each tool is designed to demonstrate specific aspects of blockchain technology in an intuitive,
              visual way. Start with any tool that interests you!
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-base md:text-lg lg:text-xl shadow-xl"
            >
              Back to Courses
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}