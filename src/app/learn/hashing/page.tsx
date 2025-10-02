"use client";

import Link from "next/link";
import { getCourseById } from "@/data/courses";
import {
  ArrowLeft, Clock, BarChart, BookOpen, Lightbulb, TrendingUp, Award,
  Shield, Globe, Lock, Users, Zap, CheckCircle, AlertCircle, Info,
  ArrowRight, Database, Network, Cpu, DollarSign, Building, Scale,
  Eye, FileText, Server, Layers, Target, Rocket, LinkIcon, GitBranch,
  Activity, Code2, Briefcase, TrendingDown, Coins, CreditCard, FileCheck,
  Wallet, PiggyBank, Landmark, BarChart3, ShieldCheck, AlertTriangle,
  Hash, Ban, Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

export default function HashingCoursePage() {
  const course = getCourseById("hashing");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The Hashing and Integrity course could not be found.</p>
          <Link
            href="/learn"
            className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 border-b-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:px-16">
            <Link
              href="/learn"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 md:mb-6 lg:mb-8 transition-colors text-xl font-medium"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Courses
            </Link>

            <div className="flex items-start gap-8">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{course.icon}</div>
              <div className="flex-1">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                  {course.title}
                </h1>
                <p className="text-3xl text-gray-700 leading-relaxed mb-8">
                  Discover how cryptographic hash functions create digital fingerprints that ensure data integrity across insurance, taxation, and identity verification systems.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xl">
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 mr-2 text-teal-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BarChart className="w-6 h-6 mr-2 text-cyan-600" />
                    {course.difficulty}
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                    Module {course.order} of 6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">

          {/* PART I: UNDERSTANDING CRYPTOGRAPHIC HASH FUNCTIONS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part I: Understanding Cryptographic Hash Functions
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-cyan-600 to-teal-600"></div>
            </div>

            {/* Digital DNA Concept */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 mb-6 md:mb-8 lg:mb-12 border-2 border-purple-300">
              <div className="flex items-start gap-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">🧬</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is a Hash Function? The Concept of Digital DNA</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Imagine you have a machine that can take <strong className="text-purple-600">anything</strong>—a single word,
                    an entire book, a movie file, or even all of Wikipedia—and produce a <strong className="text-purple-600">unique fingerprint</strong> that's
                    always exactly the same size. No matter what you put in, the fingerprint comes out as a string of exactly
                    <strong className="text-purple-600"> 64 characters</strong> (for SHA-256).
                  </p>
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <p className="text-base md:text-lg text-gray-800 mb-4"><strong>The Remarkable Properties:</strong></p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="text-base md:text-lg sm:text-xl md:text-2xl">✓</div>
                        <div className="flex-1">
                          <p className="text-gray-700"><strong>Change Detection:</strong> Change even a single comma in a thousand-page
                          book, and you get a completely different fingerprint.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-base md:text-lg sm:text-xl md:text-2xl">✓</div>
                        <div className="flex-1">
                          <p className="text-gray-700"><strong>Consistency:</strong> Put the exact same book through the machine a million
                          times, you get the identical fingerprint every time.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-base md:text-lg sm:text-xl md:text-2xl">✓</div>
                        <div className="flex-1">
                          <p className="text-gray-700"><strong>One-Way Function:</strong> It's like a blender that turns fruits into
                          smoothies—you can easily blend apples into apple juice, but you can't take apple juice and reconstruct the original apples.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong className="text-teal-900">💡 Key Insight:</strong> Even if someone has the hash of your password or document,
                      they can't work backward to figure out what the original was. They would have to try <em>every possible input</em> until
                      they found one that produces the same hash—a process that could take <strong>billions of years</strong> for a strong hash function.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SHA-256 Mathematics */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Hash className="w-8 h-8 text-cyan-600" />
                The Mathematics Behind the Magic: How SHA-256 Works
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                SHA-256 (Secure Hash Algorithm 256-bit) is like a sophisticated recipe that takes your input data and scrambles it
                through a series of precise mathematical operations. Think of it as making bread: you start with ingredients (your input data),
                and through a series of specific steps—mixing, kneading, rising, baking—you end up with something completely transformed.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🔧 The SHA-256 Process:</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Padding</h5>
                        <p className="text-gray-700">
                          Take your input data and pad it to ensure it's a multiple of 512 bits. This padding follows a specific pattern
                          that includes the original message length, ensuring different-length messages can't produce the same padded result.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">64 Rounds of Processing</h5>
                        <p className="text-gray-700">
                          The core algorithm runs 64 rounds of mathematical operations involving bitwise operations (AND, OR, XOR, NOT),
                          additions, and rotations. Each round uses the output of the previous round, creating a cascade effect where
                          early changes propagate and amplify through all subsequent rounds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Output Generation</h5>
                        <p className="text-gray-700">
                          The final output is 256 bits, typically displayed as 64 hexadecimal characters. This is your digital fingerprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avalanche Effect Examples */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-amber-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-amber-600" />
                  The Avalanche Effect: Small Changes, Huge Differences
                </h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-sm font-bold text-gray-600 mb-3">Example 1: "Hello" vs "hello"</div>
                    <div className="space-y-3">
                      <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <div className="text-sm font-bold text-green-900 mb-2">Input: "Hello"</div>
                        <div className="font-mono text-sm text-gray-800 break-all">
                          185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
                        </div>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <div className="text-sm font-bold text-blue-900 mb-2">Input: "hello" (lowercase h)</div>
                        <div className="font-mono text-sm text-gray-800 break-all">
                          2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4">
                      Notice how the hashes are <strong>completely different</strong>—not just slightly modified.
                      This is the avalanche effect in action!
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="text-sm font-bold text-gray-600 mb-3">Example 2: Adding an exclamation mark</div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                        <div className="text-sm font-bold text-purple-900 mb-2">Input: "Hello!"</div>
                        <div className="font-mono text-sm text-gray-800 break-all">
                          334d016f755cd6dc58c53a86e183882f8ec14f52fb05345887c8a5edd42c87b7
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4">
                      Again, a completely different result. This sensitivity to change is what makes hash functions
                      perfect for detecting <em>any</em> alteration in data, no matter how small.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Properties of Secure Hash Functions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-teal-600" />
                The Properties That Make Hash Functions Cryptographically Secure
              </h3>

              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Determinism */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-blue-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">1. Determinism</h4>
                  <p className="text-gray-700 mb-4">
                    The same input must <strong>always</strong> produce the same output. If hashing "Bitcoin"
                    sometimes gave you one hash and sometimes another, the function would be useless for verification.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Why it matters:</strong> This property allows you to verify data integrity across time and space.
                      A document hashed today will produce the same hash in ten years.
                    </p>
                  </div>
                </div>

                {/* Avalanche Effect */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-purple-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">2. Avalanche Effect</h4>
                  <p className="text-gray-700 mb-4">
                    Small changes in input create <strong>large changes</strong> in output. This prevents attackers from
                    making controlled modifications to forge documents.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Protection:</strong> You can't change "pay $100" to "pay $1000" and adjust other parts
                      of the document to maintain the same hash.
                    </p>
                  </div>
                </div>

                {/* Pre-image Resistance */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-emerald-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">3. Pre-image Resistance (One-Way)</h4>
                  <p className="text-gray-700 mb-4">
                    Given a hash output, it should be computationally <strong>infeasible</strong> to find any input
                    that produces that hash.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Security benefit:</strong> Websites store the hash of your password, not the password itself.
                      Even if hackers steal the database, they can't reverse the hashes to get passwords.
                    </p>
                  </div>
                </div>

                {/* Collision Resistance */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-amber-300">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">4. Collision Resistance</h4>
                  <p className="text-gray-700 mb-4">
                    It should be practically <strong>impossible</strong> to find two different inputs that produce
                    the same hash.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Why it matters:</strong> While collisions must theoretically exist (infinite possible inputs
                      mapping to finite outputs), finding them should take so long that it's practically impossible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lifecycle of Hash Functions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-cyan-600" />
                The Lifecycle of Popular Hash Functions
              </h3>

              <div className="space-y-6">
                {/* MD5 */}
                <div className="relative pl-10 pb-8 border-l-4 border-red-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600 border-4 border-white"></div>
                  <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                    <div className="text-sm font-bold text-red-900 mb-2">1991-2004: MD5 (BROKEN)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Message Digest 5</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Once the standard for data integrity, producing a 128-bit hash. Fast and widely adopted.
                      By 2004, researchers found practical collision attacks. By 2008, researchers could create rogue
                      Certificate Authority certificates using MD5 collisions.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Ban className="w-5 h-5 text-red-600" />
                        <div className="text-sm font-bold text-red-900">Current Status:</div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Considered <strong>broken for security purposes</strong>, though still used for non-security
                        applications like checksums for data corruption detection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SHA-1 */}
                <div className="relative pl-10 pb-8 border-l-4 border-orange-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-white"></div>
                  <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                    <div className="text-sm font-bold text-orange-900 mb-2">1995-2017: SHA-1 (DEPRECATED)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Secure Hash Algorithm 1</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Developed by the NSA, produced a 160-bit hash. Became the backbone of many security systems, from
                      SSL certificates to Git commits. Theoretical weaknesses discovered in 2005. Google demonstrated the
                      first practical collision in 2017 ("SHAttered" attack).
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Attack Cost:</strong> 6,500 CPU years + 110 GPU years ≈ $110,000 in cloud computing
                      </p>
                      <p className="text-gray-700 text-sm">
                        While expensive, it proved SHA-1 was broken. Systems still relying on SHA-1 are vulnerable
                        to sophisticated attackers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SHA-256 */}
                <div className="relative pl-10 pb-8 border-l-4 border-green-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-green-600 border-4 border-white"></div>
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <div className="text-sm font-bold text-green-900 mb-2">2001-PRESENT: SHA-256 (CURRENT STANDARD)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">SHA-2 Family (256-bit)</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Part of the SHA-2 family designed by the NSA. The current gold standard used in Bitcoin, SSL certificates,
                      and countless security applications. Design improvements include larger state size, more rounds of processing,
                      and better diffusion of changes.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div className="text-sm font-bold text-green-900">Current Status:</div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Despite intensive scrutiny by the world's best cryptographers and massive financial incentives
                        to break it, <strong>no practical attacks have been found</strong>. Considered secure for the foreseeable future.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SHA-3 */}
                <div className="relative pl-10 border-l-4 border-blue-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="text-sm font-bold text-blue-900 mb-2">2012-PRESENT: SHA-3 (FUTURE INSURANCE)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Keccak Algorithm</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Selected through a public competition, based on completely different mathematical principles than SHA-2.
                      Provides an alternative that remains secure even if weaknesses are discovered in SHA-2.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-gray-700 text-sm">
                        <strong>Purpose:</strong> It's not that SHA-2 is broken—SHA-3 exists as insurance, ensuring we have
                        a ready alternative built on fundamentally different mathematics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART II: DOCUMENT INTEGRITY USING HASH VALUES */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part II: Document Integrity Using Hash Values
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
            </div>

            {/* The Problem of Digital Documents */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 mb-6 md:mb-8 lg:mb-12 border-2 border-red-300">
              <div className="flex items-start gap-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">📄</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Fundamental Problem of Digital Document Integrity</h3>

                  <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">📝 Physical World</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Original signatures are hard to forge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Official seals indicate authenticity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Watermarks prevent counterfeiting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Physical possession matters</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">💻 Digital World</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Perfect copies are instant and free</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>No "original" in traditional sense</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Files modified without visible traces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Metadata and timestamps can be forged</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600 p-6 rounded-lg">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong className="text-teal-900">💡 The Hash Solution:</strong> By creating a unique fingerprint of a
                      document at a specific point in time, you can prove its integrity <strong>without relying on any third party</strong>.
                      The hash serves as mathematical proof of the document's exact content. If even one character changes, the hash changes completely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Guide to Creating and Verifying Hashes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-blue-600" />
                Creating and Verifying Document Hashes: A Practical Guide
              </h3>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">📋 Real-World Scenario: Signing an Important Contract</h4>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3">Calculate the Hash</h5>
                        <p className="text-gray-700 mb-4">
                          After both parties agree to the final version of your business partnership agreement, you calculate its SHA-256 hash:
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm break-all text-gray-800">
                          7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730
                        </div>
                        <p className="text-gray-600 text-sm mt-3">
                          This hash uniquely represents your exact contract—every word, every comma, every space.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3">Publish the Hash</h5>
                        <p className="text-gray-700 mb-3">
                          You can safely publish this hash in multiple locations:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>On your website</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Include it in emails to stakeholders</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Store it in multiple backup locations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Even publish it in a newspaper classified ad!</span>
                          </li>
                        </ul>
                        <div className="mt-4 bg-teal-50 border-l-4 border-teal-600 p-4 rounded">
                          <p className="text-sm text-gray-700">
                            <strong>Privacy maintained:</strong> The hash reveals nothing about the contract's contents,
                            maintaining confidentiality while enabling verification.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3">Verification When Disputes Arise</h5>
                        <p className="text-gray-700 mb-4">
                          Two years later, a dispute arises. The other party claims the contract says something different.
                          They present a document with subtle changes:
                        </p>
                        <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                            <div className="text-sm font-bold text-red-900 mb-2">⚠️ Their Version:</div>
                            <p className="text-gray-700 text-sm">Pay <span className="font-bold">$100.00</span> (decimal point moved)</p>
                          </div>
                          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                            <div className="text-sm font-bold text-green-900 mb-2">✓ Original Version:</div>
                            <p className="text-gray-700 text-sm">Pay <span className="font-bold">$10,000</span> (correct amount)</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                          <strong>Resolution is simple and mathematical:</strong>
                        </p>
                        <ol className="space-y-2 text-gray-700 ml-4">
                          <li>1. Hash the document they're presenting → Doesn't match original hash ❌</li>
                          <li>2. Hash your version → Matches the recorded hash ✅</li>
                          <li>3. Mathematical proof of authenticity established</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Universal Verification Tools */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-purple-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code2 className="w-7 h-7 text-purple-600" />
                  Universal Verification: Anyone, Anywhere, Anytime
                </h4>

                <p className="text-gray-700 mb-6">
                  The beauty of this system is its simplicity and accessibility. Anyone can verify document integrity
                  without special tools or expertise.
                </p>

                <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl mb-3">🍎</div>
                    <h5 className="font-bold text-gray-900 mb-2">Mac / Linux</h5>
                    <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
                      sha256sum document.pdf
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl mb-3">🪟</div>
                    <h5 className="font-bold text-gray-900 mb-2">Windows</h5>
                    <div className="bg-gray-100 rounded p-3 font-mono text-xs text-gray-800 break-all">
                      certUtil -hashfile document.pdf SHA256
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl mb-3">💻</div>
                    <h5 className="font-bold text-gray-900 mb-2">Programming</h5>
                    <p className="text-sm text-gray-700">Python's hashlib, JavaScript's crypto module, Java's MessageDigest</p>
                  </div>
                </div>

                <div className="mt-6 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong className="text-teal-900">🌍 Universal Standard:</strong> A hash calculated on a Mac in New York today
                    will match one calculated on a Linux server in Tokyo ten years from now, provided the document remains unchanged.
                  </p>
                </div>
              </div>
            </div>

            {/* Blockchain and Timestamping */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <LinkIcon className="w-8 h-8 text-indigo-600" />
                Blockchain and Timestamping: Proving When Documents Existed
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                While hashes prove document <strong>integrity</strong>, they don't inherently prove <strong>when</strong> a
                document existed. This is where blockchain technology and trusted timestamping services come in.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-indigo-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🔗 How Blockchain Timestamping Works</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Hash Your Document Locally</h5>
                        <p className="text-gray-700">
                          The document <strong>never leaves your computer</strong>. You calculate its hash locally,
                          maintaining complete privacy and confidentiality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Submit Only the Hash</h5>
                        <p className="text-gray-700">
                          You submit <em>only the hash</em> to a timestamping service, which aggregates multiple hashes
                          and embeds them in a Bitcoin transaction.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Blockchain Confirmation</h5>
                        <p className="text-gray-700">
                          Once the transaction is confirmed in a Bitcoin block, your document's existence at that time
                          is <strong>cryptographically proven</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Anyone Can Verify</h5>
                        <p className="text-gray-700">
                          Anyone can verify this proof by checking that your document's hash links to a transaction in a specific block.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">🔐 Stronger Than Traditional Notarization:</strong> Since Bitcoin blocks are
                    computationally expensive to create and practically impossible to forge historically, this creates stronger proof
                    than traditional notarization. It's like having <strong>millions of witnesses</strong> around the world simultaneously
                    confirming "yes, this document existed at this time."
                  </p>
                </div>
              </div>

              {/* Real-World Applications */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-gray-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🌍 Real-World Applications of Blockchain Timestamping</h4>

                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
                    <div className="text-3xl mb-3">📰</div>
                    <h5 className="font-bold text-gray-900 mb-2">Journalism</h5>
                    <p className="text-gray-700">
                      Journalists use it to prove when they received leaked documents, protecting sources while establishing timelines.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                    <div className="text-3xl mb-3">🔬</div>
                    <h5 className="font-bold text-gray-900 mb-2">Research</h5>
                    <p className="text-gray-700">
                      Researchers timestamp findings to establish priority for discoveries and protect intellectual property.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                    <div className="text-3xl mb-3">🎨</div>
                    <h5 className="font-bold text-gray-900 mb-2">Creative Works</h5>
                    <p className="text-gray-700">
                      Artists and writers timestamp their creative works to prove authorship before publication.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                    <div className="text-3xl mb-3">🏢</div>
                    <h5 className="font-bold text-gray-900 mb-2">Corporate IP</h5>
                    <p className="text-gray-700">
                      Companies timestamp trade secrets and internal documents to establish intellectual property rights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-red-600" />
                Case Studies: Real Document Integrity Breaches and Solutions
              </h3>

              <div className="space-y-6">
                {/* Panama Papers */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">📰</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-blue-900 mb-2">2016 INVESTIGATION</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">The Panama Papers</h4>
                      <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                        <div className="bg-white rounded-xl p-5">
                          <h5 className="font-bold text-gray-900 mb-2">📊 The Challenge</h5>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• 11.5 million documents</li>
                            <li>• 2.6 terabytes of data</li>
                            <li>• Anonymous source</li>
                            <li>• Need to verify authenticity</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-5">
                          <h5 className="font-bold text-gray-900 mb-2">✅ The Hash Solution</h5>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Each document was hashed</li>
                            <li>• Created searchable index</li>
                            <li>• Ensured no alterations in transit</li>
                            <li>• Enabled 400+ journalists collaboration</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        The ICIJ used hash functions extensively to manage and verify documents. When sharing documents
                        between journalists worldwide, hashes ensured nothing was altered, allowing secure collaboration
                        while maintaining document integrity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pharmaceutical Trial Data */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-emerald-300">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">💊</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-emerald-900 mb-2">2020 LITIGATION CASE</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Pharmaceutical Company Drug Trial Data</h4>
                      <div className="bg-white rounded-xl p-6 mb-4">
                        <h5 className="font-bold text-gray-900 mb-3">The Accusation:</h5>
                        <p className="text-gray-700 mb-4">
                          Plaintiff claimed the company had <strong>altered trial results</strong> after adverse events occurred,
                          potentially facing billions in damages.
                        </p>
                        <h5 className="font-bold text-gray-900 mb-3">The Defense:</h5>
                        <p className="text-gray-700 mb-4">
                          The company had implemented a <strong>hash-based integrity system</strong> years earlier, calculating
                          SHA-256 hashes of all trial data files and storing them in an immutable audit log.
                        </p>
                        <h5 className="font-bold text-gray-900 mb-3">The Outcome:</h5>
                        <p className="text-gray-700">
                          When challenged, they proved that data presented to regulators <strong>matched exactly</strong> what was
                          recorded during trials. The hashes showed <strong>no alterations</strong> had occurred.
                        </p>
                      </div>
                      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <strong className="text-emerald-900">💰 Result:</strong> Saved from potentially billions in damages.
                          This case became a textbook example of why companies should implement hash-based integrity systems
                          <em>before</em> they need them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SolarWinds Hack */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-red-300">
                  <div className="flex items-start gap-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">⚠️</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-red-900 mb-2">2020 SECURITY BREACH</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">The SolarWinds Supply Chain Attack</h4>
                      <p className="text-gray-700 mb-4">
                        Attackers infiltrated SolarWinds' software development process and inserted <strong>malware</strong> into
                        legitimate software updates. These compromised updates were properly signed with SolarWinds' digital certificate,
                        making them appear legitimate.
                      </p>
                      <div className="bg-white rounded-xl p-6 mb-4">
                        <h5 className="font-bold text-gray-900 mb-3">🔍 The Discovery:</h5>
                        <p className="text-gray-700">
                          Security researchers found that the <strong>hashes of the compromised files</strong> didn't match those of
                          the original, clean versions. Organizations that had saved and verified hashes of their software could
                          identify compromised versions.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <strong className="text-red-900">⚡ Critical Lesson:</strong> This incident led to increased emphasis on
                          software bills of materials (SBOMs) and hash verification in supply chain security. It proved that
                          <strong> even signed software needs independent hash verification</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART III: APPLICATIONS IN INSURANCE */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-emerald-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part III: Applications in Insurance
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-600 to-green-600"></div>
            </div>

            {/* Revolutionizing Claims Processing */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-600" />
                Revolutionizing Insurance Claims Processing
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                The insurance industry processes <strong>millions of claims annually</strong>, each requiring extensive
                documentation—photos of damage, medical records, police reports, repair estimates. Hash functions are transforming
                this landscape by creating <strong>immutable digital fingerprints</strong> of all claim documents at the moment of submission.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">📱 Modern Insurance Claims Flow with Hash Verification</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Photo Submission</h5>
                        <p className="text-gray-700">
                          When a policyholder submits a claim through a mobile app, each photo is <strong>immediately hashed</strong>,
                          and the hash is stored with a timestamp.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Metadata Verification</h5>
                        <p className="text-gray-700">
                          EXIF data (metadata containing time, location, camera information) is preserved and <strong>separately hashed</strong>.
                          This creates a chain of evidence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Multi-Layer Protection</h5>
                        <p className="text-gray-700">
                          Advanced systems hash photos at <strong>multiple resolutions</strong>, preventing claims that processing
                          or compression altered critical details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Investigation & Verification</h5>
                        <p className="text-gray-700">
                          If questions arise during investigation, adjusters can <strong>verify photos haven't been doctored</strong> by
                          comparing current hashes with those recorded at submission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Results */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-emerald-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BarChart3 className="w-7 h-7 text-emerald-600" />
                  Real-World Implementation Results
                </h4>

                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-4xl mb-3">📊</div>
                    <h5 className="font-bold text-gray-900 mb-2">30% Fraud Reduction</h5>
                    <p className="text-gray-700 text-sm">
                      A major auto insurance company reported implementing hash-based verification reduced fraudulent claims
                      by 30% in the first year.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h5 className="font-bold text-gray-900 mb-2">Psychological Deterrent</h5>
                    <p className="text-gray-700 text-sm">
                      When claimants know all submissions are cryptographically fingerprinted and can be verified,
                      they're significantly less likely to attempt fraud.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-bold text-gray-900 mb-4">🔍 Caught Fraud Examples:</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">
                        <strong>Water Damage Photos:</strong> Hash analysis revealed photos were identical to ones submitted
                        in a claim two years earlier, just with modified EXIF data.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">
                        <strong>Altered Invoices:</strong> Medical clinic submitted altered invoices—the hash of the "original"
                        PDF didn't match the hash recorded when the invoice was supposedly generated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Contracts and Automated Settlement */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-600" />
                Smart Contracts and Automated Settlement
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                The combination of <strong>hash functions and smart contracts</strong> is creating a new paradigm in insurance:
                <em>parametric insurance with automated settlement</em>. No claims adjustment needed—payouts trigger automatically
                based on predefined parameters.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-purple-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">✈️ Flight Delay Insurance Example</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-xl sm:text-2xl md:text-3xl">🎫</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Step 1: Policy Purchase</h5>
                        <p className="text-gray-700">
                          When you purchase the policy, the smart contract records the <strong>hash of your booking confirmation</strong>,
                          proving you have a ticket for a specific flight.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-xl sm:text-2xl md:text-3xl">📡</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Step 2: Oracle Connection</h5>
                        <p className="text-gray-700">
                          The contract connects to flight data oracles (trusted data sources) that provide
                          <strong> cryptographically signed flight status updates</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-xl sm:text-2xl md:text-3xl">⏱️</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Step 3: Delay Detection</h5>
                        <p className="text-gray-700">
                          When oracles report a delay exceeding the policy threshold, they provide the data along with
                          its <strong>hash and digital signature</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-xl sm:text-2xl md:text-3xl">💰</div>
                      <div className="flex-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 mb-2">Step 4: Automatic Payout</h5>
                        <p className="text-gray-700">
                          The smart contract verifies the hash matches the signed data, confirms the signature is from a
                          trusted oracle, and <strong>automatically triggers payment</strong> to your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong className="text-teal-900">🎯 Result:</strong> No claims forms, no waiting, no possibility of denial
                    for valid claims. The entire process is <strong>transparent, verifiable, and automatic</strong>.
                  </p>
                </div>
              </div>

              {/* Real-World Examples */}
              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl md:rounded-2xl p-6 border-2 border-gray-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3">Etherisc Platform</h5>
                  <p className="text-gray-700 mb-4">
                    Decentralized insurance platform using Ethereum smart contracts. Their flight delay insurance product has
                    processed <strong>thousands of automatic payouts</strong>.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Each policy and payout is recorded on blockchain with associated hashes, creating an immutable audit trail
                      for regulatory review.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-6 border-2 border-gray-300">
                  <div className="text-4xl mb-4">🏢</div>
                  <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3">AXA Fizzy (Case Study)</h5>
                  <p className="text-gray-700 mb-4">
                    Major insurer's flight delay product (now discontinued but instructive) demonstrated hash verification
                    could process claims in <strong>seconds rather than weeks</strong>.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Proved that major insurers see value in hash-based automated settlement for improving customer experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance and Audit Trails */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-purple-600" />
                Regulatory Compliance and Audit Trails
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Insurance is one of the most <strong>heavily regulated industries</strong>, with requirements for data retention,
                audit trails, and regulatory reporting. Hash functions are streamlining this process by creating
                <strong> cryptographic proof of compliance</strong>.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-indigo-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">📋 Solvency II Reporting (Europe)</h4>

                <p className="text-gray-700 mb-6">
                  Requires insurers to regularly report their financial position to regulators. These reports contain
                  <strong> sensitive competitive information</strong>, so insurers are reluctant to share them broadly.
                </p>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">🔐 Hash-Based Solution:</h5>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                      <span>Insurers submit <strong>report hashes</strong> to regulators immediately upon internal completion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                      <span>This proves <strong>when reports were finalized</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                      <span>Actual reports are provided later</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
                      <span>Regulators verify reports <strong>haven't been altered</strong> by checking hashes</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong className="text-indigo-900">🛡️ Prevents "Window Dressing":</strong> The practice of temporarily
                    improving financial positions just for reporting dates. Some European insurers now continuously hash their
                    financial records, creating an immutable audit trail.
                  </p>
                </div>
              </div>

              {/* Internal Compliance */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-gray-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🏥 Internal Compliance: Health Insurer Example</h4>

                <p className="text-gray-700 mb-6">
                  A major health insurer implemented a hash-based audit system where <strong>every database change</strong> generates a hash of:
                </p>

                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                    <h5 className="font-bold text-gray-900 mb-3">🔍 What Gets Hashed:</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ The modified record</li>
                      <li>✓ The change itself</li>
                      <li>✓ The user making the change</li>
                      <li>✓ Timestamp</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                    <h5 className="font-bold text-gray-900 mb-3">🛡️ Protection Provided:</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Append-only audit log</li>
                      <li>✓ Can't be modified without detection</li>
                      <li>✓ Proves decision timeline</li>
                      <li>✓ Shows proper procedures followed</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong className="text-green-900">✅ Regulatory Investigation Outcome:</strong> When regulators investigated
                    claims of improper claim denials, the insurer could prove exactly what decisions were made when, by whom, and
                    based on what data. The hash trail showed claim denials followed proper procedures,
                    <strong> avoiding millions in potential fines</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Reinsurance */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-blue-600" />
                Reinsurance and Risk Transfer
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Reinsurance—insurance for insurance companies—involves <strong>complex contracts and enormous financial stakes</strong>.
                A single catastrophic event might trigger claims across hundreds of primary insurers, who then claim from dozens of reinsurers.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🏛️ London Market Implementation</h4>

                <p className="text-gray-700 mb-6">
                  Lloyd's of London and associated companies are pioneering hash-based systems for reinsurance contracts:
                </p>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">📝 Contract Hash Recording:</h5>
                  <ol className="space-y-3 text-gray-700">
                    <li>1. When a reinsurance treaty is agreed, <strong>every party calculates its hash</strong></li>
                    <li>2. Hashes are recorded in a <strong>shared ledger</strong></li>
                    <li>3. This prevents disputes over contract terms—there's cryptographic proof</li>
                    <li>4. No party can later claim different terms were agreed</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">🌀 Hurricane Maria Example (2017):</strong> Caused over $90 billion in damages.
                    Companies with hash-based contract management could <strong>quickly verify coverage terms</strong>, while others
                    spent months in disputes over contract interpretations and versions.
                  </p>
                </div>
              </div>

              {/* B3i Consortium */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-gray-300">
                <div className="flex items-start gap-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">⛓️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">B3i (Blockchain Insurance Industry Initiative)</h4>
                    <p className="text-gray-700 mb-6">
                      Consortium of major insurers and reinsurers developed a blockchain-based platform using hash functions
                      to manage reinsurance contracts.
                    </p>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border-2 border-purple-200">
                      <h5 className="font-bold text-gray-900 mb-3">🎯 Property Catastrophe Excess of Loss Product:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Uses smart contracts where terms are <strong>hashed and stored on blockchain</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>When catastrophic event occurs, claims automatically flow through the reinsurance chain</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Each layer's coverage verified through <strong>hash comparison</strong></span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
                        <div className="text-3xl mb-2">⚡</div>
                        <h6 className="font-bold text-gray-900 mb-2">Settlement Speed</h6>
                        <p className="text-gray-700 text-sm">Reduces settlement time from <strong>months to days</strong></p>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                        <div className="text-3xl mb-2">🤝</div>
                        <h6 className="font-bold text-gray-900 mb-2">Dispute Elimination</h6>
                        <p className="text-gray-700 text-sm">Eliminates disputes over contract terms through hash immutability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART IV: APPLICATIONS IN TAX FILINGS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-teal-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part IV: Applications in Tax Filings
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-teal-600 to-green-600"></div>
            </div>

            {/* Digital Transformation of Tax Systems */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Digital Transformation of Tax Systems</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                    Tax authorities worldwide are moving from paper-based to electronic filing, creating new challenges for ensuring document integrity and proof of filing. Hash functions have become fundamental to modern tax systems, creating cryptographic proof that protects both taxpayers and authorities.
                  </p>
                </div>
              </div>

              {/* Real-World Tax Systems */}
              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-green-200">
                  <Landmark className="w-12 h-12 text-green-600 mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">India GST System</h4>
                  <p className="text-xl text-gray-700 mb-4">Processing over 100 million returns monthly using SHA-256 hashes</p>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Hash of complete return provided as receipt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Prevents post-filing manipulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Builds trust in digital system</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-blue-200">
                  <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">US IRS E-Filing</h4>
                  <p className="text-xl text-gray-700 mb-4">Multiple layers of hash verification in electronic submissions</p>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Each form and schedule individually hashed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Transmission corruption detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Cryptographic filing confirmation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preventing Tax Fraud */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Preventing Tax Fraud Through Hash Verification</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    Tax fraud costs governments hundreds of billions annually. Hash functions create immutable fingerprints that detect tampering and trace fraud to its source.
                  </p>
                </div>
              </div>

              {/* Fraud Prevention Example */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-red-200 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Fraudulent Tax Preparer Detection</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">The Scam</h5>
                    <p className="text-gray-700 text-lg">Preparer shows client one version, files different version claiming larger refund, pockets the difference</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Hash-Based Prevention</h5>
                    <ul className="space-y-2 text-gray-700 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">1.</span>
                        <span>Client receives hash of approved return</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">2.</span>
                        <span>Preparer must include client-approved hash when filing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">3.</span>
                        <span>System rejects if filed return doesn't match approved hash</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
                    <p className="text-green-900 font-semibold text-lg">Result: Thousands of fraudulent preparers caught through hash analysis</p>
                  </div>
                </div>
              </div>

              {/* Cross-Border Compliance */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-purple-200">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Cross-Border Tax Compliance</h4>
                <p className="text-xl text-gray-700 mb-6">
                  The OECD's Common Reporting Standard uses Merkle trees for efficient verification of millions of account records exchanged between countries.
                </p>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <Hash className="w-10 h-10 text-purple-600 mb-3" />
                    <h5 className="font-bold text-gray-900 mb-2">Individual Hashing</h5>
                    <p className="text-gray-700">Each account report hashed before transmission</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <Network className="w-10 h-10 text-purple-600 mb-3" />
                    <h5 className="font-bold text-gray-900 mb-2">Merkle Tree</h5>
                    <p className="text-gray-700">Millions of records in hierarchical hash structure</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <ShieldCheck className="w-10 h-10 text-purple-600 mb-3" />
                    <h5 className="font-bold text-gray-900 mb-2">Verification</h5>
                    <p className="text-gray-700">Cryptographic proof without revealing all data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Reporting */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Reporting and Continuous Compliance</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    The future of tax compliance is continuous, real-time reporting with hash functions ensuring integrity throughout billions of transactions.
                  </p>
                </div>
              </div>

              {/* Country Examples */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-l-8 border-yellow-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-base md:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">🇪🇸</span>
                    <h4 className="text-3xl font-bold text-gray-900">Spain's SII System</h4>
                  </div>
                  <p className="text-xl text-gray-700 mb-6">Immediate Supply of Information requires invoice reporting within 4 days</p>
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl">
                      <p className="font-bold text-gray-900 mb-2">How it works:</p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Each invoice hashed when reported</li>
                        <li>• Cross-references sales and purchases</li>
                        <li>• Discrepancies trigger investigation</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
                      <p className="font-bold text-green-900 mb-2">Results:</p>
                      <p className="text-green-800 text-xl">€600 million recovered in first year</p>
                      <p className="text-green-700">Dramatic reduction in VAT fraud</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-l-8 border-green-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-base md:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">🇧🇷</span>
                    <h4 className="text-3xl font-bold text-gray-900">Brazil's NF-e System</h4>
                  </div>
                  <p className="text-xl text-gray-700 mb-6">Electronic invoice system processing over 2 billion invoices annually</p>
                  <div className="bg-white p-6 rounded-xl">
                    <p className="font-bold text-gray-900 mb-3">Hash-Based Features:</p>
                    <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span>Unique hash per transaction</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span>QR code verification</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span>Prevents duplicate/phantom transactions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain in Tax */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Blockchain in Tax Administration</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    Experimental blockchain systems demonstrate how distributed ledgers and hash functions could revolutionize government revenue collection.
                  </p>
                </div>
              </div>

              {/* Implementation Examples */}
              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-base md:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">🇨🇳</span>
                    <h4 className="text-2xl font-bold text-gray-900">Shenzhen, China</h4>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg mb-4">Millions of blockchain-based tax invoices issued</p>
                  <div className="bg-white p-6 rounded-xl space-y-3 text-gray-700">
                    <p>✓ Transaction hash recorded on blockchain</p>
                    <p>✓ Immutable audit trail</p>
                    <p>✓ Over $15 billion in transactions processed</p>
                    <p className="text-green-700 font-semibold">Prevents duplicate deductions and fake invoices</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-base md:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">🇹🇭</span>
                    <h4 className="text-2xl font-bold text-gray-900">Thailand VAT Refunds</h4>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg mb-4">Blockchain system for tourist VAT refunds</p>
                  <div className="bg-white p-6 rounded-xl space-y-3 text-gray-700">
                    <p>✓ Receipts hashed and recorded on blockchain</p>
                    <p>✓ Smart contracts process refunds</p>
                    <p>✓ Refund processing: weeks → minutes</p>
                    <p className="text-green-700 font-semibold">40% reduction in fraudulent claims</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART V: APPLICATIONS IN eKYC */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part V: Applications in eKYC
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
            </div>

            {/* Digital Identity Challenge */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">The Challenge of Digital Identity Verification</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                    Know Your Customer (KYC) regulations require financial institutions to verify identities, but traditional manual processes are slow, expensive, and error-prone. Electronic KYC using hash functions streamlines this while improving security.
                  </p>
                </div>
              </div>

              {/* KYC Scale & Cost */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-red-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">The Scale of the KYC Challenge</h4>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">$60-500</p>
                    <p className="text-gray-700">Cost per customer for traditional KYC</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center">
                    <p className="text-4xl font-bold text-orange-600 mb-2">Thousands</p>
                    <p className="text-gray-700">Daily onboarding at major banks</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center">
                    <p className="text-4xl font-bold text-green-600 mb-2">70%</p>
                    <p className="text-gray-700">Cost reduction with hash-based eKYC</p>
                  </div>
                </div>
              </div>

              {/* Experience Comparison */}
              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-gray-400">
                  <div className="flex items-center gap-3 mb-4">
                    <Ban className="w-10 h-10 text-red-600" />
                    <h4 className="text-2xl font-bold text-gray-900">Traditional KYC</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li>• Visit branch with physical documents</li>
                    <li>• Wait days for verification</li>
                    <li>• Repeat at each institution</li>
                    <li>• Manual review prone to errors</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-green-300">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                    <h4 className="text-2xl font-bold text-gray-900">Hash-Based eKYC</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li>• Photograph documents via smartphone</li>
                    <li>• Verification in minutes</li>
                    <li>• Reusable digital identity</li>
                    <li>• Automated, accurate processing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Document Verification */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Document Verification and Anti-Tampering</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    Multi-layer hashing makes document tampering nearly impossible by creating separate hashes for every element of an identity document.
                  </p>
                </div>
              </div>

              {/* Multi-Layer Hashing Process */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-blue-200">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Multi-Layer Hash Verification</h4>
                <p className="text-xl text-gray-700 mb-8">When a customer photographs their passport, the system creates multiple verification layers:</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-3">1</div>
                    <h5 className="font-bold text-gray-900 mb-2">Image Hash</h5>
                    <p className="text-gray-700 text-sm">Full document photo hashed</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-3">2</div>
                    <h5 className="font-bold text-gray-900 mb-2">OCR Text Hash</h5>
                    <p className="text-gray-700 text-sm">Extracted text data hashed separately</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-3">3</div>
                    <h5 className="font-bold text-gray-900 mb-2">Photo Hash</h5>
                    <p className="text-gray-700 text-sm">Portrait photo extracted and hashed</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-3">4</div>
                    <h5 className="font-bold text-gray-900 mb-2">Composite Hash</h5>
                    <p className="text-gray-700 text-sm">All elements combined into one hash</p>
                  </div>
                </div>
              </div>

              {/* Real-World Fraud Detection */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-l-8 border-yellow-500 mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <AlertTriangle className="w-12 h-12 text-orange-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Forgery Detection Success Story</h4>
                </div>
                <p className="text-xl text-gray-700 mb-4">
                  A major bank detected a sophisticated forgery ring using high-quality fake passports. While visually perfect, hash analysis of microprinting regions revealed subtle differences invisible to human reviewers.
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-green-900 font-semibold">Result: Ring had successfully opened hundreds of accounts at other banks but was caught by hash verification</p>
                </div>
              </div>
            </div>

            {/* Privacy-Preserving Verification */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Privacy-Preserving Identity Verification</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    Hash functions enable zero-knowledge identity proofs—proving attributes without revealing underlying data.
                  </p>
                </div>
              </div>

              {/* India's Aadhaar System */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-orange-200 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🇮🇳</span>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">India's Aadhaar System</h4>
                    <p className="text-xl text-gray-600">Serving 1.3 billion people with hash-based privacy</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-3">How it works:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Biometric data captured and hashed</li>
                      <li>• Authentication via hash comparison</li>
                      <li>• Banks see only yes/no result</li>
                      <li>• Biometric data never shared</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl border-2 border-green-300">
                    <h5 className="font-bold text-green-900 mb-3">Results:</h5>
                    <p className="text-green-800 text-2xl font-bold mb-2">50 Billion+</p>
                    <p className="text-green-700">Authentications processed while maintaining privacy</p>
                  </div>
                </div>
              </div>

              {/* EU eIDAS */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🇪🇺</span>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">EU eIDAS Cross-Border Identity</h4>
                    <p className="text-xl text-gray-600">Hash-based trust framework for EU citizens</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  When a German citizen opens a bank account in France, their German digital identity can be verified without sharing unnecessary data.
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <p className="font-bold text-gray-900 mb-3">Process:</p>
                  <div className="space-y-3 text-gray-700">
                    <p>1️⃣ Germany provides signed hash attestation: "Person with hash X verified as adult EU citizen"</p>
                    <p>2️⃣ France verifies signature and hash</p>
                    <p>3️⃣ No underlying German identity documents revealed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain Identity */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Blockchain-Based Identity Systems</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    Self-sovereign identity gives individuals control over their identity data through cryptographic proofs anchored to blockchains.
                  </p>
                </div>
              </div>

              {/* Implementation Examples */}
              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-blue-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Microsoft ION</h4>
                  <p className="text-gray-700 text-base md:text-lg mb-4">Identity Overlay Network built on Bitcoin</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Decentralized identifiers (DIDs) linked to public keys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Identity attributes hashed and stored on devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Proofs verified via blockchain hashes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-purple-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">MIT Blockchain Diplomas</h4>
                  <p className="text-gray-700 text-base md:text-lg mb-4">Educational credentials on blockchain</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Diploma hashes anchored to blockchain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Instant, forgery-proof verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Combats fake degree industry</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Estonia e-Residency */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-l-8 border-blue-500">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🇪🇪</span>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">Estonia's e-Residency Program</h4>
                    <p className="text-xl text-gray-600">Government-backed blockchain identity</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Every operation logged to blockchain using hash chains, creating immutable audit trails that protect both users and government.
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <p className="font-bold text-gray-900 mb-3">Enabled Capabilities:</p>
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <p>✓ Establish EU businesses entirely online</p>
                    <p>✓ Hash verification ensures identity integrity</p>
                    <p>✓ Prove authorized actions via blockchain</p>
                    <p>✓ Thousands of global entrepreneurs served</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Inclusion */}
            <div className="mb-16">
              <div className="flex items-start gap-4 md:gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Financial Inclusion Through Hash-Based eKYC</h3>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                    Progressive KYC using hash functions extends financial services to populations lacking traditional identity documents.
                  </p>
                </div>
              </div>

              {/* Kenya M-Pesa */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-green-200 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🇰🇪</span>
                  <h4 className="text-3xl font-bold text-gray-900">Kenya's M-Pesa System</h4>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Mobile money system demonstrating progressive identity verification
                </p>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-3">Step 1: Basic</h5>
                    <p className="text-gray-700">SIM registration hash = basic identity</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-3">Step 2: Build Trust</h5>
                    <p className="text-gray-700">Behavioral hashes prove consistent patterns</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-3">Step 3: Full Access</h5>
                    <p className="text-gray-700">Loans, insurance unlocked after sufficient history</p>
                  </div>
                </div>
                <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 mt-6">
                  <p className="text-green-900 font-semibold text-lg">Impact: Millions without traditional banking relationships now have financial services</p>
                </div>
              </div>

              {/* Philippines Digital Banks */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🇵🇭</span>
                  <h4 className="text-3xl font-bold text-gray-900">Philippines Digital Banking</h4>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  BSP regulations explicitly recognize hash-based eKYC, enabling purely smartphone-based onboarding
                </p>
                <div className="bg-white p-6 md:p-8 rounded-xl">
                  <p className="font-bold text-gray-900 mb-4">Multi-Layer Hash Security:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Smartphone className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Device Fingerprinting</p>
                        <p className="text-gray-700">Hardware hashes ensure one device per account</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Activity className="w-8 h-8 text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Behavioral Biometrics</p>
                        <p className="text-gray-700">Usage pattern hashes detect account takeover</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FileCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Document Hashes</p>
                        <p className="text-gray-700">Enable instant verification</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300 mt-6">
                    <p className="text-green-900 font-semibold">Result: 90% lower KYC costs with lower fraud rates</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART VI: ADVANCED TOPICS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-pink-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part VI: Advanced Topics in Hashing and Integrity
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-red-600"></div>
            </div>

            {/* Section 1: Merkle Trees */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 text-white text-3xl font-bold shadow-xl">
                  1
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Merkle Trees: Efficient Verification at Scale
                </h3>
              </div>

              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-200">
                  <h4 className="text-3xl font-bold text-gray-900 mb-6">What is a Merkle Tree?</h4>
                  <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                    A Merkle tree (or hash tree) is a data structure where every leaf node is a hash of a data block,
                    and every non-leaf node is a hash of its children. This creates a tree of hashes that allows
                    efficient and secure verification of large data structures.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                    <p className="text-xl text-blue-900 font-semibold mb-4">Construction Process:</p>
                    <ol className="space-y-3 text-xl text-blue-900">
                      <li>1. Hash each data block (leaf nodes)</li>
                      <li>2. Combine pairs of hashes and hash them together</li>
                      <li>3. Repeat until single root hash remains</li>
                      <li>4. Root hash represents entire dataset</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-green-300">
                  <h4 className="text-3xl font-bold text-green-900 mb-6">Why Merkle Trees Matter</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-2xl text-green-900">Efficient Verification</p>
                        <p className="text-xl text-green-800">Verify single transaction without downloading entire blockchain</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-2xl text-green-900">Logarithmic Proof Size</p>
                        <p className="text-xl text-green-800">Verify millions of transactions with ~20 hashes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-2xl text-green-900">Tamper Detection</p>
                        <p className="text-xl text-green-800">Any data change propagates to root hash</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Real-World Applications</h4>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="border-2 border-blue-300 rounded-xl p-6 bg-blue-50">
                    <div className="text-4xl mb-4">₿</div>
                    <h5 className="text-2xl font-bold text-blue-900 mb-4">Bitcoin</h5>
                    <p className="text-xl text-blue-800">
                      Every Bitcoin block contains a Merkle root of all transactions. Light clients can verify
                      payments without downloading the full blockchain.
                    </p>
                  </div>
                  <div className="border-2 border-purple-300 rounded-xl p-6 bg-purple-50">
                    <div className="text-4xl mb-4">🔐</div>
                    <h5 className="text-2xl font-bold text-purple-900 mb-4">Certificate Transparency</h5>
                    <p className="text-xl text-purple-800">
                      Google's CT logs use Merkle trees to create publicly auditable, append-only logs of
                      SSL certificates, preventing rogue certificates.
                    </p>
                  </div>
                  <div className="border-2 border-green-300 rounded-xl p-6 bg-green-50">
                    <div className="text-4xl mb-4">💾</div>
                    <h5 className="text-2xl font-bold text-green-900 mb-4">Git Version Control</h5>
                    <p className="text-xl text-green-800">
                      Git uses hash trees to track file changes efficiently. Each commit's hash depends on
                      the hash tree of its contents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl md:rounded-2xl shadow-xl p-10">
                <div className="flex items-start gap-6">
                  <Hash className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold mb-4">Merkle Proof Example</p>
                    <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                      To verify Transaction #7 in a block with 1,000 transactions, you only need ~10 hashes
                      (log₂(1000) ≈ 10) instead of all 1,000 transactions. This is how light wallets work!
                    </p>
                    <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                      <p className="text-xl font-mono">
                        Path: Tx7 → Hash(Tx7+Tx8) → Hash(Parent) → ... → Root Hash
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Hash Chains and Proof of Sequence */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-3xl font-bold shadow-xl">
                  2
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Hash Chains and Proof of Sequence
                </h3>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">What is a Hash Chain?</h4>
                <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  A hash chain links data blocks together where each block contains the hash of the previous block.
                  This creates an immutable sequence where tampering with any block breaks the entire chain.
                </p>
                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-2 border-gray-300">
                  <p className="text-xl font-mono text-center mb-6">
                    Block 1 → Hash(Block 1) → Block 2 → Hash(Block 2) → Block 3 → ...
                  </p>
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
                      <p className="font-bold text-xl text-blue-900 mb-2">Block N</p>
                      <p className="text-base md:text-lg text-blue-800">Data: "Transaction A"</p>
                      <p className="text-base md:text-lg text-blue-800">Previous Hash: abc123...</p>
                    </div>
                    <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
                      <p className="font-bold text-xl text-purple-900 mb-2">Block N+1</p>
                      <p className="text-base md:text-lg text-purple-800">Data: "Transaction B"</p>
                      <p className="text-base md:text-lg text-purple-800">Previous Hash: def456...</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
                      <p className="font-bold text-xl text-green-900 mb-2">Block N+2</p>
                      <p className="text-base md:text-lg text-green-800">Data: "Transaction C"</p>
                      <p className="text-base md:text-lg text-green-800">Previous Hash: ghi789...</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-300">
                  <h4 className="text-3xl font-bold text-blue-900 mb-6">Applications</h4>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <p className="font-bold text-2xl text-blue-900 mb-2">Git Commit History</p>
                      <p className="text-xl text-blue-800">
                        Each commit includes hash of parent commit, creating tamper-evident version history
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <p className="font-bold text-2xl text-purple-900 mb-2">Blockchain Ledgers</p>
                      <p className="text-xl text-purple-800">
                        Each block cryptographically linked to previous, making history immutable
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <p className="font-bold text-2xl text-green-900 mb-2">Audit Logs</p>
                      <p className="text-xl text-green-800">
                        Financial audit logs use hash chains to prove sequence and prevent backdating
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-orange-300">
                  <h4 className="text-3xl font-bold text-orange-900 mb-6">Why It Matters</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="w-10 h-10 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-2xl text-orange-900">Tamper Evidence</p>
                        <p className="text-xl text-orange-800">Changing any historical block invalidates all subsequent blocks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-2xl text-red-900">Chronological Proof</p>
                        <p className="text-xl text-red-800">Proves sequence of events without trusted timestamps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-2xl text-green-900">Efficient Verification</p>
                        <p className="text-xl text-green-800">Verify chain integrity by checking each link</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Homomorphic Hashing and Advanced Techniques */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white text-3xl font-bold shadow-xl">
                  3
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Homomorphic Hashing and Advanced Techniques
                </h3>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Homomorphic Hashing</h4>
                <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  Homomorphic hash functions allow certain operations to be performed on hashed data without
                  revealing the original data. This enables privacy-preserving computations.
                </p>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                    <p className="font-bold text-2xl text-purple-900 mb-4">Mathematical Property</p>
                    <p className="text-xl text-purple-800 mb-4">
                      For operation ⊕: H(A ⊕ B) = H(A) ⊕ H(B)
                    </p>
                    <p className="text-base md:text-lg text-purple-700">
                      This allows combining hashes without knowing underlying data
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                    <p className="font-bold text-2xl text-blue-900 mb-4">Use Case: Privacy-Preserving Auditing</p>
                    <p className="text-xl text-blue-800">
                      Auditors can verify totals match without seeing individual transaction amounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-indigo-300 mb-8">
                <h4 className="text-3xl font-bold text-indigo-900 mb-6">Fuzzy Hashing (ssdeep)</h4>
                <p className="text-2xl text-indigo-800 leading-relaxed mb-6">
                  Unlike cryptographic hashes where one bit change creates completely different hash,
                  fuzzy hashing creates similar hashes for similar files.
                </p>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-indigo-300">
                    <p className="font-bold text-xl text-indigo-900 mb-4">Traditional Hash (SHA-256)</p>
                    <div className="space-y-3 text-lg">
                      <p className="text-gray-700">File A: <span className="font-mono text-sm">abc123...</span></p>
                      <p className="text-gray-700">File A' (1 byte different): <span className="font-mono text-sm">xyz789...</span></p>
                      <p className="text-red-600 font-semibold">Completely different hashes</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                    <p className="font-bold text-xl text-purple-900 mb-4">Fuzzy Hash (ssdeep)</p>
                    <div className="space-y-3 text-lg">
                      <p className="text-gray-700">File A: <span className="font-mono text-sm">abc123...</span></p>
                      <p className="text-gray-700">File A' (1 byte different): <span className="font-mono text-sm">abc124...</span></p>
                      <p className="text-green-600 font-semibold">95% similarity detected</p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-100 p-6 rounded-xl border-2 border-indigo-300 mt-6">
                  <p className="font-bold text-xl text-indigo-900 mb-3">Applications:</p>
                  <ul className="space-y-2 text-xl text-indigo-800">
                    <li>• Malware detection (identify variants of known malware)</li>
                    <li>• Plagiarism detection (find similar documents)</li>
                    <li>• Digital forensics (locate modified files)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-200">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Committed Bloom Filters</h4>
                <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  Combine Bloom filters (probabilistic data structures) with cryptographic commitments to
                  enable private set membership proofs.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                  <p className="font-bold text-xl text-blue-900 mb-4">Example: Password Breach Detection</p>
                  <p className="text-xl text-blue-800 mb-4">
                    Check if your password appears in leaked databases without revealing your password to the
                    checking service.
                  </p>
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-300">
                      <p className="font-semibold text-blue-900">Step 1</p>
                      <p className="text-sm text-blue-800">Hash your password locally</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-300">
                      <p className="font-semibold text-blue-900">Step 2</p>
                      <p className="text-sm text-blue-800">Query Bloom filter with hash</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-300">
                      <p className="font-semibold text-blue-900">Step 3</p>
                      <p className="text-sm text-blue-800">Get yes/no without exposing password</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: The Future - Post-Quantum Hashing */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white text-3xl font-bold shadow-xl">
                  4
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  The Future: Post-Quantum Hashing and Beyond
                </h3>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-orange-300 mb-8">
                <div className="flex items-start gap-6">
                  <AlertTriangle className="w-16 h-16 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-3xl font-bold text-orange-900 mb-4">The Quantum Threat</h4>
                    <p className="text-2xl text-orange-800 leading-relaxed mb-4">
                      Quantum computers threaten asymmetric cryptography (RSA, ECDSA) but have limited impact
                      on hash functions. However, they reduce security margins.
                    </p>
                    <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6">
                      <div className="bg-white p-6 rounded-xl border-2 border-red-300">
                        <p className="font-bold text-xl text-red-900 mb-3">Classical Security</p>
                        <p className="text-base md:text-lg text-red-800">SHA-256 provides 256-bit security against brute force</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-2 border-orange-300">
                        <p className="font-bold text-xl text-orange-900 mb-3">Quantum Security</p>
                        <p className="text-base md:text-lg text-orange-800">Grover's algorithm reduces to ~128-bit effective security</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Post-Quantum Hash Functions</h4>
                <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  NIST is standardizing quantum-resistant algorithms. Hash-based signatures are leading candidates.
                </p>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                    <h5 className="text-2xl font-bold text-blue-900 mb-4">SPHINCS+ (Hash-Based Signatures)</h5>
                    <p className="text-xl text-blue-800 mb-4">
                      Uses only hash functions for digital signatures - inherently quantum-resistant
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                      <p className="font-semibold text-blue-900 mb-2">Trade-offs:</p>
                      <ul className="space-y-2 text-base md:text-lg text-blue-800">
                        <li>✅ Quantum-safe</li>
                        <li>✅ Well-understood security</li>
                        <li>⚠️ Larger signature sizes (16-49 KB vs 64 bytes for ECDSA)</li>
                        <li>⚠️ Slower verification</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                    <h5 className="text-2xl font-bold text-purple-900 mb-4">SHA-3 (Keccak)</h5>
                    <p className="text-xl text-purple-800 mb-4">
                      Different internal structure from SHA-2, provides diversity in case of cryptanalytic breakthroughs
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                      <p className="font-semibold text-purple-900 mb-2">Advantages:</p>
                      <ul className="space-y-2 text-base md:text-lg text-purple-800">
                        <li>✅ More resistant to length-extension attacks</li>
                        <li>✅ Flexible output sizes</li>
                        <li>✅ Better hardware performance</li>
                        <li>✅ Quantum-resistant</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-xl md:rounded-2xl shadow-xl p-10">
                <div className="flex items-start gap-6">
                  <Network className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold mb-4">Looking Ahead: Hybrid Approaches</p>
                    <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                      The future likely involves hybrid systems combining multiple hash algorithms and
                      post-quantum techniques for defense in depth.
                    </p>
                    <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-2">Multi-Algorithm</p>
                        <p className="text-lg">Use SHA-256 + SHA-3 for redundancy</p>
                      </div>
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-2">Gradual Migration</p>
                        <p className="text-lg">Transition period supporting both classical and quantum-safe</p>
                      </div>
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="font-bold text-base sm:text-base md:text-lg md:text-xl lg:text-2xl mb-2">Agile Cryptography</p>
                        <p className="text-lg">Design systems to swap algorithms as needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Conclusion */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 text-white text-3xl font-bold shadow-xl">
                  5
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Conclusion: The Invisible Foundation of Digital Trust
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl md:rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 xl:p-12 mb-8">
                <h4 className="text-4xl font-bold mb-6">From Simple Checksums to Global Infrastructure</h4>
                <p className="text-base sm:text-base md:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
                  Cryptographic hash functions have evolved from simple data verification tools into the
                  invisible foundation of digital trust. They secure everything from your morning coffee
                  purchase to international tax systems.
                </p>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-white/20 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-sm">
                    <p className="text-3xl font-bold mb-4">What We've Learned</p>
                    <ul className="space-y-3 text-xl">
                      <li>✓ Hash functions create digital fingerprints</li>
                      <li>✓ One-way nature prevents reverse engineering</li>
                      <li>✓ Avalanche effect detects tampering</li>
                      <li>✓ Real-world applications in insurance, tax, eKYC</li>
                      <li>✓ Advanced structures like Merkle trees enable efficiency</li>
                      <li>✓ Post-quantum security is on the horizon</li>
                    </ul>
                  </div>
                  <div className="bg-white/20 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-sm">
                    <p className="text-3xl font-bold mb-4">Why It Matters</p>
                    <ul className="space-y-3 text-xl">
                      <li>💰 Prevents tax fraud saving billions</li>
                      <li>🏥 Protects medical records integrity</li>
                      <li>🪪 Enables privacy-preserving identity</li>
                      <li>🌍 Powers global financial infrastructure</li>
                      <li>🔐 Foundations for blockchain technology</li>
                      <li>🚀 Enables future decentralized systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-300">
                  <div className="text-5xl mb-6 text-center">🔐</div>
                  <h5 className="text-2xl font-bold text-blue-900 text-center mb-4">Security</h5>
                  <p className="text-xl text-blue-800 text-center">
                    Hash functions provide cryptographic guarantees that underpin digital security worldwide
                  </p>
                </div>
                <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-purple-300">
                  <div className="text-5xl mb-6 text-center">⚡</div>
                  <h5 className="text-2xl font-bold text-purple-900 text-center mb-4">Efficiency</h5>
                  <p className="text-xl text-purple-800 text-center">
                    Constant-size outputs and fast computation make hashes practical at global scale
                  </p>
                </div>
                <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-2 border-green-300">
                  <div className="text-5xl mb-6 text-center">🌐</div>
                  <h5 className="text-2xl font-bold text-green-900 text-center mb-4">Trust</h5>
                  <p className="text-xl text-green-800 text-center">
                    Enable trustless verification - don't trust, verify through mathematics
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border-2 border-green-300">
                <div className="flex items-start gap-6">
                  <CheckCircle className="w-16 h-16 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold text-green-900 mb-4">The Journey Continues</p>
                    <p className="text-2xl text-green-800 leading-relaxed mb-6">
                      As we move toward a quantum computing era and increasingly digital society, hash functions
                      will continue to evolve. New applications will emerge, security margins will be strengthened,
                      and the fundamental principle will remain: trust through mathematics, not authority.
                    </p>
                    <p className="text-2xl text-green-800 leading-relaxed">
                      Whether you're a developer implementing blockchain applications, a business leader evaluating
                      digital transformation, or simply a curious learner, understanding hash functions gives you
                      insight into the invisible mechanisms that make our digital world trustworthy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* COURSE COMPLETION CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white rounded-xl md:rounded-2xl md:rounded-3xl shadow-2xl p-16 text-center">
              <div className="text-8xl mb-8">🎓</div>
              <h2 className="text-6xl font-bold mb-6">Congratulations!</h2>
              <p className="text-3xl mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                You've completed the Hashing and Integrity course
              </p>
              <div className="grid md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12 text-left">
                <div className="bg-white/20 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl mb-4">📚</div>
                  <p className="text-2xl font-bold mb-3">What You Learned</p>
                  <ul className="space-y-2 text-xl">
                    <li>• Cryptographic hash functions</li>
                    <li>• Document integrity verification</li>
                    <li>• Real-world applications</li>
                    <li>• Advanced techniques</li>
                    <li>• Post-quantum security</li>
                  </ul>
                </div>
                <div className="bg-white/20 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl mb-4">🛠️</div>
                  <p className="text-2xl font-bold mb-3">Practical Skills</p>
                  <ul className="space-y-2 text-xl">
                    <li>• Verify document integrity</li>
                    <li>• Implement hash chains</li>
                    <li>• Use Merkle trees</li>
                    <li>• Evaluate security needs</li>
                    <li>• Design tamper-proof systems</li>
                  </ul>
                </div>
                <div className="bg-white/20 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl mb-4">🚀</div>
                  <p className="text-2xl font-bold mb-3">Next Steps</p>
                  <ul className="space-y-2 text-xl">
                    <li>• Blockchain in Finance</li>
                    <li>• Smart Contracts & Legal</li>
                    <li>• Advanced Topics</li>
                    <li>• Hands-On Playground</li>
                    <li>• Build real projects!</li>
                  </ul>
                </div>
              </div>
              <Link
                href="/learn"
                className="inline-block bg-white text-blue-600 px-12 py-6 rounded-xl md:rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Continue to Next Module →
              </Link>
            </div>
          </motion.div>

        </article>
      </div>
  );
}
