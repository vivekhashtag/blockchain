"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Hash, Copy, CheckCircle, Zap, Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";

export default function HashCalculatorPage() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);
  const [previousInputs, setPreviousInputs] = useState<Array<{input: string, hash: string}>>([]);

  useEffect(() => {
    if (input) {
      const hashValue = CryptoJS.SHA256(input).toString();
      setHash(hashValue);
    } else {
      setHash("");
    }
  }, [input]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addToHistory = () => {
    if (input && hash) {
      setPreviousInputs(prev => [{ input, hash }, ...prev.slice(0, 4)]);
    }
  };

  const examples = [
    "Hello World",
    "blockchain",
    "Bitcoin",
    "12345",
    "The quick brown fox jumps over the lazy dog"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              href="/playground"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-lg font-medium"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Playground
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-xl">
              <Hash className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 md:mb-6">
              SHA-256 Hash Calculator
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Enter any text to see its SHA-256 hash. Notice how even a tiny change completely transforms the output.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Input Text</h2>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onBlur={addToHistory}
                  placeholder="Type or paste your text here..."
                  className="w-full h-40 px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all resize-none font-mono"
                />
                <div className="mt-6">
                  <p className="text-lg font-semibold text-gray-700 mb-3">Try these examples:</p>
                  <div className="flex flex-wrap gap-3">
                    {examples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(example)}
                        className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 text-gray-700 text-base rounded-lg border border-green-200 transition-all font-medium"
                      >
                        "{example}"
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Properties */}
              <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-7 h-7 mr-3 text-green-600" />
                  SHA-256 Properties
                </h3>
                <ul className="space-y-4 text-base">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900 font-semibold">Deterministic:</strong> Same input always produces the same hash
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900 font-semibold">Fixed Size:</strong> Output is always 256 bits (64 hex characters)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900 font-semibold">Avalanche Effect:</strong> Small changes cause drastic output changes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900 font-semibold">One-Way:</strong> Cannot reverse the hash to get original input
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Output Hash</h2>
                  {hash && (
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all shadow-lg text-base"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5 mr-2" />
                          Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-300 min-h-[100px] break-all">
                  {hash ? (
                    <code className="text-green-600 font-mono text-base font-semibold leading-relaxed">
                      {hash}
                    </code>
                  ) : (
                    <span className="text-gray-400 italic text-lg">Hash will appear here...</span>
                  )}
                </div>
                {hash && (
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-600 text-base">Length:</span>
                      <div className="text-gray-900 font-bold text-xl font-mono mt-1">{hash.length} chars</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-600 text-base">Bits:</span>
                      <div className="text-gray-900 font-bold text-xl font-mono mt-1">256 bits</div>
                    </div>
                  </div>
                )}
              </div>

              {/* History */}
              {previousInputs.length > 0 && (
                <div className="mt-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Hashes</h3>
                  <div className="space-y-4">
                    {previousInputs.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        <div className="text-base text-gray-600 mb-2 truncate font-medium">
                          Input: "{item.input}"
                        </div>
                        <code className="text-sm text-green-600 font-mono break-all font-semibold">
                          {item.hash}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 shadow-lg">
                <p className="text-base text-gray-700 leading-relaxed">
                  <strong className="text-blue-600 text-lg">💡 Try this:</strong> Type "Hello" and see the hash. Then change it to "hello" (lowercase).
                  Notice how the entire hash changes completely even though only one letter changed case!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}