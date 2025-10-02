"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseById } from "@/data/courses";
import {
  ArrowLeft, Clock, BarChart, BookOpen, Lightbulb, TrendingUp, Award,
  Shield, Globe, Lock, Users, Zap, CheckCircle, AlertCircle, Info,
  ArrowRight, Database, Network, Cpu, DollarSign, Building, Scale,
  Eye, FileText, Server, Layers, Target, Rocket, LinkIcon, GitBranch,
  Activity, Code2, Briefcase, TrendingDown, Coins, CreditCard, FileCheck,
  Wallet, PiggyBank, Landmark, BarChart3, ShieldCheck, AlertTriangle,
  Mail, Key, Fingerprint, Hash, ShieldAlert, UserCheck, KeyRound, Smartphone,
  HardDrive, CloudOff, Ban, ShieldX, Brain, Atom, Sparkles as SparklesIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = getCourseById(courseId);
  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link
            href="/learn"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Introduction course content - COMPLETE VERSION
  if (courseId === "introduction") {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-16 border-b-2 border-gray-200">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <Link
              href="/learn"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-lg font-medium"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Courses
            </Link>

            <div className="flex items-start gap-8">
              <div className="text-6xl">{course.icon}</div>
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A comprehensive journey through blockchain's history, technology, and transformative impact on global finance.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-lg">
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 mr-2 text-blue-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BarChart className="w-6 h-6 mr-2 text-purple-600" />
                    {course.difficulty}
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                    Module {course.order} of 6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-6xl mx-auto px-8 sm:px-12 py-16">

          {/* PART I: GENESIS OF BLOCKCHAIN */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part I: The Genesis of Blockchain
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            </div>

            {/* Pre-Bitcoin Era */}
            <div className="mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    The Pre-Bitcoin Era: Setting the Stage
                  </h3>
                  <p className="text-lg text-gray-600">
                    Decades of research laid the groundwork for blockchain's revolutionary arrival
                  </p>
                </div>
              </div>

              <div className="prose prose-xl max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The story of blockchain begins long before Bitcoin's emergence in 2008. The conceptual foundations
                  were laid through decades of cryptographic research and attempts to create digital currencies. In the
                  <strong> 1980s and 1990s</strong>, cryptographers and computer scientists were grappling with fundamental questions
                  about creating secure digital transactions without central authorities.
                </p>

                {/* Timeline Visualization */}
                <div className="my-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 border-2 border-blue-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    🕐 Historical Timeline: Path to Bitcoin
                  </h4>

                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-32 flex-shrink-0 text-right">
                        <span className="text-xl font-bold text-blue-600">1980s</span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">David Chaum's DigiCash</h5>
                        <p className="text-gray-700 leading-relaxed">
                          Introduced <strong>blind signatures</strong> and <strong>anonymous digital cash</strong> concepts.
                          Though it failed commercially, DigiCash established crucial precedents for privacy-preserving digital transactions.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Cryptographic Protocols</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Digital Cash</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-32 flex-shrink-0 text-right">
                        <span className="text-2xl font-bold text-purple-600">1990s</span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">The Cypherpunk Movement</h5>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Privacy advocates and cryptographers who believed in using strong cryptography for social change.
                          Key contributors included:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">•</span>
                            <span><strong>Wei Dai</strong> - Proposed "b-money" concept</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">•</span>
                            <span><strong>Nick Szabo</strong> - Conceptualized "bit gold"</span>
                          </li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Privacy Advocacy</span>
                          <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Theoretical Frameworks</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-32 flex-shrink-0 text-right">
                        <span className="text-2xl font-bold text-indigo-600">1980s</span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Byzantine Generals Problem</h5>
                        <p className="text-gray-700 leading-relaxed">
                          <em>"How can distributed systems reach consensus when some participants might be unreliable or malicious?"</em>
                        </p>
                        <p className="text-gray-600 mt-2 text-base">
                          Various solutions were proposed, but none achieved the elegant simplicity that would later characterize Bitcoin's approach.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Distributed Systems</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Consensus</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Concept Box */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 my-10 border-l-4 border-amber-500">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">💡 Key Concept: Digital Scarcity</h4>
                      <p className="text-lg text-gray-700 leading-relaxed mb-3">
                        Early attempts addressed crucial challenges:
                      </p>
                      <ul className="space-y-2 text-lg text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Preventing double-spending</strong> - Ensuring digital tokens can't be copied</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Achieving consensus</strong> - Agreement without central authority</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Creating digital scarcity</strong> - Making digital items provably rare</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Birth of Bitcoin */}
            <div className="mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    The Birth of Bitcoin: Satoshi Nakamoto's Revolution
                  </h3>
                  <p className="text-xl text-gray-600">
                    How one whitepaper changed the course of financial technology forever
                  </p>
                </div>
              </div>

              {/* The Pivotal Moment */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white mb-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-8 mb-6">
                    <div className="text-7xl">📅</div>
                    <div className="flex-1">
                      <div className="text-sm uppercase tracking-wider text-blue-200 mb-2">The Pivotal Moment</div>
                      <h4 className="text-4xl font-bold mb-4">October 31, 2008</h4>
                      <p className="text-2xl leading-relaxed mb-6">
                        An individual or group using the pseudonym <strong>Satoshi Nakamoto</strong> published a whitepaper titled
                        <em> "Bitcoin: A Peer-to-Peer Electronic Cash System"</em> to a cryptography mailing list.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <p className="text-lg leading-relaxed">
                          This nine-page document proposed a solution to the double-spending problem. The timing was significant—
                          the world was in the midst of the <strong>2008 financial crisis</strong>, with trust in traditional financial
                          institutions at historic lows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Made Bitcoin Revolutionary */}
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Revolutionary Innovation</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-lg">
                    Nakamoto's genius wasn't creating new techniques, but <strong>combining existing technologies</strong> in a novel way:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Proof-of-Work</div>
                        <div className="text-gray-600">Adapted from Hashcash (email spam prevention)</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Cryptographic Hashing</div>
                        <div className="text-gray-600">Secure, one-way mathematical functions</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Digital Signatures</div>
                        <div className="text-gray-600">Proving ownership without revealing keys</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">P2P Network</div>
                        <div className="text-gray-600">Direct communication without intermediaries</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Database className="w-7 h-7 text-amber-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">The Genesis Block</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Date</div>
                      <div className="text-2xl font-bold text-gray-900">January 3, 2009</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
                      <div className="text-sm text-gray-600 mb-2">Embedded Message</div>
                      <div className="text-lg italic text-gray-900 leading-relaxed">
                        "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."
                      </div>
                    </div>
                    <div className="bg-amber-100 rounded-xl p-4">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 leading-relaxed">
                          This message served dual purposes: <strong>proof the block wasn't pre-mined</strong> and
                          a <strong>political statement</strong> about Bitcoin's purpose as an alternative to traditional banking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* First Transaction */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 my-8 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🎉</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">The First Bitcoin Transaction</h4>
                    <div className="text-lg text-gray-700 leading-relaxed space-y-2">
                      <p>
                        <strong>January 12, 2009</strong> - Nakamoto sent <strong>10 bitcoins</strong> to developer <strong>Hal Finney</strong>.
                      </p>
                      <p>
                        This marked the beginning of a functioning cryptocurrency network that would grow from a curiosity among
                        cryptography enthusiasts to a <strong>global phenomenon worth hundreds of billions of dollars</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Bitcoin Needed Blockchain */}
            <div className="mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Why Bitcoin Needed Blockchain
                  </h3>
                  <p className="text-xl text-gray-600">
                    Understanding the problem blockchain was designed to solve
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white mb-10 shadow-2xl">
                <h4 className="text-2xl font-bold mb-4">🔑 Core Insight</h4>
                <p className="text-2xl leading-relaxed">
                  The blockchain was <strong>not the goal</strong> of Bitcoin—it was the <strong>means to achieve</strong> the goal
                  of decentralized digital currency.
                </p>
              </div>

              {/* Problem Explanation */}
              <div className="prose prose-xl max-w-none mb-10">
                <p className="text-xl text-gray-700 leading-relaxed">
                  To understand why blockchain was necessary, we must examine the specific problems Bitcoin aimed to solve.
                  Traditional digital payment systems rely on <strong>trusted intermediaries</strong> like banks or payment processors
                  to prevent double-spending and maintain account balances.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-7 h-7 text-red-700" />
                      </div>
                      <h5 className="text-2xl font-bold text-red-900">❌ Traditional Systems</h5>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-red-900 mb-2">Single Points of Failure</div>
                        <div className="text-gray-700">If the central server goes down, the entire system stops</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-red-900 mb-2">Censorship Capabilities</div>
                        <div className="text-gray-700">Central authorities can freeze accounts or block transactions</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-red-900 mb-2">High Transaction Costs</div>
                        <div className="text-gray-700">Intermediaries charge fees at every step</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-red-900 mb-2">No True Irreversibility</div>
                        <div className="text-gray-700">Transactions can be reversed or disputed</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-red-900 mb-2">Requires Institutional Trust</div>
                        <div className="text-gray-700">Must trust banks to maintain accurate records</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-300 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-green-700" />
                      </div>
                      <h5 className="text-2xl font-bold text-green-900">✓ Blockchain Solution</h5>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-green-900 mb-2">Distributed Network</div>
                        <div className="text-gray-700">Thousands of nodes, no single point of failure</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-green-900 mb-2">Censorship Resistant</div>
                        <div className="text-gray-700">No central authority can block transactions</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-green-900 mb-2">Lower Costs</div>
                        <div className="text-gray-700">Peer-to-peer transfers without intermediaries</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-green-900 mb-2">Irreversible Finality</div>
                        <div className="text-gray-700">Once confirmed, transactions are permanent</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="font-bold text-green-900 mb-2">Trustless Operation</div>
                        <div className="text-gray-700">Cryptographic proof replaces institutional trust</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How Blockchain Works */}
              <div className="bg-blue-50 rounded-3xl p-10 my-10 border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Network className="w-10 h-10 text-blue-600" />
                  How the Blockchain Functions
                </h4>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Public Ledger</div>
                        <div className="text-gray-700 leading-relaxed">
                          Records all Bitcoin transactions in sequential, immutable manner. Every participant maintains a copy of this ledger.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Transaction Broadcasting</div>
                        <div className="text-gray-700 leading-relaxed">
                          New transactions are broadcast to all nodes in the network for validation.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Mining Process</div>
                        <div className="text-gray-700 leading-relaxed">
                          Miners compete to bundle transactions into blocks and add them to the chain through proof-of-work.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Security Through Time</div>
                        <div className="text-gray-700 leading-relaxed">
                          Altering historical transactions becomes exponentially more difficult over time, requiring redoing computational work for all subsequent blocks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-xl mb-2">Economic Security</div>
                      <div className="text-lg leading-relaxed">
                        The economic incentives align participants' interests with network security—miners invest resources to earn rewards,
                        and their investment secures the network against attacks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART II: EVOLUTION OF BLOCKCHAIN */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part II: Evolution of Blockchain
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-purple-600"></div>
            </div>

            {/* From Bitcoin to Blockchain Paradigm */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                From Bitcoin's Technology to Blockchain as a Paradigm
              </h3>

              <div className="prose prose-xl max-w-none mb-10">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Initially, blockchain was simply the underlying technology powering Bitcoin, not discussed as a
                  separate concept. The term "blockchain" itself wasn't widely used—Satoshi's white
                  paper referred to it as a <strong>"chain of blocks"</strong> or <strong>"proof-of-work chain."</strong>
                </p>
              </div>

              <div className="my-12 p-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white shadow-2xl">
                <div className="flex items-start gap-8">
                  <div className="text-7xl">🔗</div>
                  <div className="flex-1">
                    <div className="text-sm uppercase tracking-wider text-purple-200 mb-2">The Paradigm Shift</div>
                    <h4 className="text-4xl font-bold mb-4">2014: The Separation</h4>
                    <p className="text-2xl leading-relaxed mb-6">
                      The technology industry began to separate blockchain from Bitcoin conceptually.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <p className="text-lg leading-relaxed">
                        Financial institutions and corporations were intrigued by blockchain's potential but wary of Bitcoin's
                        association with illicit activities. They asked: <em>"Could blockchain's benefits—immutability, transparency,
                        distributed consensus—be applied to other use cases?"</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Components Diagram */}
              <div className="my-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Core Blockchain Components
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-4xl">🔗</span>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Cryptographic Linking</h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Blocks are cryptographically linked together, forming an immutable chain where each block contains the hash of the previous block.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-blue-900 mb-1">Key Technology</div>
                      <div className="text-blue-700">SHA-256 Hash Functions</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-4xl">🤝</span>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Consensus Mechanisms</h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Enables agreement without central authority, allowing distributed participants to validate transactions and maintain shared state.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-purple-900 mb-1">Examples</div>
                      <div className="text-purple-700">PoW, PoS, PBFT, DPoS</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-4xl">🔒</span>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Immutability</h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Once data is recorded, it becomes computationally impractical to alter, providing a permanent and trustworthy record.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-green-900 mb-1">Benefit</div>
                      <div className="text-green-700">Tamper-Evident Records</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethereum Revolution */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                The Ethereum Revolution: Smart Contracts
              </h3>

              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-indigo-200 mb-2">The Next Evolution</div>
                    <h4 className="text-5xl font-bold mb-3">Ethereum</h4>
                    <p className="text-2xl">Proposed 2013 • Launched 2015</p>
                  </div>
                  <div className="text-8xl">⚡</div>
                </div>
                <p className="text-3xl leading-relaxed mb-6">
                  Transformed blockchain from a transaction ledger into a <strong>"world computer"</strong>
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-xl leading-relaxed">
                    Capable of executing <strong>smart contracts</strong>—self-executing programs that automatically
                    enforce agreement terms without intermediaries.
                  </p>
                </div>
              </div>

              {/* Ethereum's Innovation */}
              <div className="prose prose-xl max-w-none mb-10">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ethereum's key innovation was recognizing that blockchain's distributed consensus mechanism could
                  validate not just <em>transactions</em> but <strong>arbitrary state transitions defined by code</strong>.
                  This opened entirely new possibilities.
                </p>
              </div>

              {/* What Ethereum Enabled */}
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                    <h5 className="text-2xl font-bold text-blue-900">💡 New Capabilities</h5>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Decentralized Applications (dApps)</div>
                        <div className="text-gray-600">Applications that run on blockchain without central servers</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Asset Tokenization</div>
                        <div className="text-gray-600">Representing real-world assets as digital tokens</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">DAOs</div>
                        <div className="text-gray-600">Decentralized Autonomous Organizations</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Complex Financial Instruments</div>
                        <div className="text-gray-600">Derivatives, lending protocols, automated market makers</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-8 h-8 text-purple-600" />
                    <h5 className="text-2xl font-bold text-purple-900">🚀 Evolution Path</h5>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900 text-lg">Programmable Money</div>
                        <div className="text-3xl">💰</div>
                      </div>
                      <div className="text-gray-600">Bitcoin enabled peer-to-peer value transfer</div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-purple-600" />
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900 text-lg">Programmable Assets</div>
                        <div className="text-3xl">🎨</div>
                      </div>
                      <div className="text-gray-600">Ethereum enabled any asset to be tokenized</div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-purple-600" />
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900 text-lg">Programmable Organizations</div>
                        <div className="text-3xl">🏛️</div>
                      </div>
                      <div className="text-gray-600">DAOs enable autonomous governance structures</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-World Analogy */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 my-10 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💭</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Real-World Analogy</h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Think of Bitcoin as a <strong>calculator</strong> that can only do one thing well—transfer value.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Ethereum is like a <strong>smartphone</strong>—it can run any application you program for it.
                      Smart contracts are like apps that automatically execute when conditions are met, without needing
                      any human intervention or trust in a middleman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART III: UNDERSTANDING DISTRIBUTED LEDGER TECHNOLOGY (DLT) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-teal-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part III: Understanding Distributed Ledger Technology
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-teal-600 to-green-600"></div>
            </div>

            {/* Conceptual Foundations */}
            <div className="mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Conceptual Foundations of Distributed Ledgers
                  </h3>
                  <p className="text-xl text-gray-600">
                    A paradigm shift in how we conceive of record-keeping and data management
                  </p>
                </div>
              </div>

              <div className="prose prose-xl max-w-none mb-10">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Distributed Ledger Technology represents a fundamental reimagining of record-keeping. Traditional ledgers,
                  whether physical books or centralized databases, rely on a <strong>single authoritative copy</strong> maintained
                  by a trusted entity. DLT distributes the ledger across multiple participants, with mechanisms to ensure all
                  copies remain synchronized and consistent.
                </p>
              </div>

              {/* Comparison: Traditional vs DLT */}
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center">
                      <Server className="w-7 h-7 text-red-700" />
                    </div>
                    <h5 className="text-2xl font-bold text-red-900">Traditional Ledgers</h5>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-red-900 mb-2">Single Point of Failure</div>
                      <div className="text-gray-700">Central entity controls everything</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-red-900 mb-2">Target for Attacks</div>
                      <div className="text-gray-700">Compromise one location = compromise all data</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-red-900 mb-2">Trust Required</div>
                      <div className="text-gray-700">Must trust the controlling institution</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-red-900 mb-2">Potential for Manipulation</div>
                      <div className="text-gray-700">Central authority can alter records</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center">
                      <Network className="w-7 h-7 text-green-700" />
                    </div>
                    <h5 className="text-2xl font-bold text-green-900">Distributed Ledgers</h5>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-green-900 mb-2">No Single Point of Failure</div>
                      <div className="text-gray-700">Distributed across many participants</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-green-900 mb-2">Attack Resistant</div>
                      <div className="text-gray-700">Must compromise majority of network</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-green-900 mb-2">Trustless Operation</div>
                      <div className="text-gray-700">Consensus through cryptographic proof</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="font-bold text-green-900 mb-2">Tamper-Evident</div>
                      <div className="text-gray-700">All participants can verify integrity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insight Box */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 my-10 border-l-4 border-teal-600">
                <div className="flex items-start gap-4">
                  <Target className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">🎯 Core Innovation</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      DLT enables <strong>"trustless" systems</strong> where trust emerges from <em>transparency</em>,
                      <em> cryptographic proof</em>, and <em>economic incentives</em> rather than institutional authority.
                      The ledger becomes a <strong>shared source of truth</strong> that all participants can verify independently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Blockchain Implements DLT */}
            <div className="mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    How Blockchain Implements DLT Principles
                  </h3>
                  <p className="text-xl text-gray-600">
                    A specific implementation with unique properties and mechanisms
                  </p>
                </div>
              </div>

              {/* Blockchain Structure Visualization */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 my-10 border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                  <Layers className="w-10 h-10 text-blue-600" />
                  Blockchain's Key Properties
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-4xl mb-4 text-center">🔗</div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3 text-center">Cryptographic Linking</h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Each block contains a hash of the previous block, creating an immutable chain where altering one block requires changing all subsequent blocks.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-blue-900">Security Benefit</div>
                      <div className="text-blue-700">Tamper-evidence through cryptography</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-4xl mb-4 text-center">⏰</div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3 text-center">Temporal Ordering</h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Transactions are organized chronologically, providing a clear historical record of all events in sequence.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-purple-900">Audit Benefit</div>
                      <div className="text-purple-700">Complete transaction history</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-4xl mb-4 text-center">🔒</div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3 text-center">Increasing Security</h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Security grows over time as more blocks are added, making historical alterations exponentially more difficult.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-green-900">Time Benefit</div>
                      <div className="text-green-700">Stronger with each new block</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Flow */}
              <div className="my-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🔄 Maintaining Consistency: The Process
                </h4>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-lg">
                        1
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Transaction Initiation</div>
                        <div className="text-gray-700 leading-relaxed">
                          A participant initiates a transaction and broadcasts it to all nodes in the network.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-bold text-lg">
                        2
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Validation</div>
                        <div className="text-gray-700 leading-relaxed">
                          Nodes validate the transaction according to predefined rules (sufficient balance, valid signatures, etc.).
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold text-lg">
                        3
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Block Creation</div>
                        <div className="text-gray-700 leading-relaxed">
                          Miners or validators compete/collaborate to include the transaction in a new block using the consensus mechanism.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-orange-600 font-bold text-lg">
                        4
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 mb-2">Ledger Update</div>
                        <div className="text-gray-700 leading-relaxed">
                          Once added to the chain, all nodes update their local copy of the ledger. Everyone now has the same view of transaction history.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparing with Other DLT Approaches */}
            <div className="mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Blockchain vs Other DLT Approaches
                  </h3>
                  <p className="text-xl text-gray-600">
                    Understanding the broader landscape of distributed ledger technologies
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-3">Blockchain</h5>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Transactions grouped into blocks, linked cryptographically. Linear chain structure with strong immutability.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 mb-3">
                    <div className="text-sm font-medium text-blue-900 mb-1">Best For</div>
                    <div className="text-blue-700">High auditability, transparency</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> Bitcoin, Ethereum
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <GitBranch className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-3">DAG (Directed Acyclic Graph)</h5>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Transactions linked directly to each other, allowing parallel processing without blocks or miners.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 mb-3">
                    <div className="text-sm font-medium text-purple-900 mb-1">Best For</div>
                    <div className="text-purple-700">High scalability, low fees</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> IOTA, Hedera Hashgraph
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-3">BFT Consensus</h5>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Byzantine Fault Tolerance among known participants. Faster consensus with controlled membership.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 mb-3">
                    <div className="text-sm font-medium text-green-900 mb-1">Best For</div>
                    <div className="text-green-700">Performance, enterprise use</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> Tendermint, PBFT
                  </div>
                </div>
              </div>

              {/* Real-World Analogy */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 my-10 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💭</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Real-World Analogy: Different Record-Keeping Systems</h4>
                    <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                      <p>
                        <strong>Blockchain</strong> is like a <em>notarized ledger book</em> where each page is stamped and
                        references the previous page—very secure but sequential.
                      </p>
                      <p>
                        <strong>DAG</strong> is like a <em>bulletin board</em> where people can pin notes that reference
                        previous notes—more flexible and parallel.
                      </p>
                      <p>
                        <strong>BFT</strong> is like a <em>committee meeting</em> where known members vote on decisions—
                        faster consensus but requires trust in membership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART IV: KEY BLOCKCHAIN FEATURES */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-red-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part IV: Key Blockchain Features
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-orange-600"></div>
            </div>

            {/* The Four Pillars */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Immutability */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 border-2 border-red-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Lock className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">1. Immutability</h3>
                </div>
                <p className="text-xl font-semibold text-gray-800 mb-4">The Foundation of Trust</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The extreme difficulty of altering data once recorded. Each block contains a hash of the previous block—
                  changing any historical transaction requires recalculating all subsequent blocks.
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Why It Matters
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Records become permanent history that cannot be secretly altered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Creates unprecedented levels of accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Older transactions become exponentially more secure</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-red-900">
                      <strong>Challenge:</strong> Inability to easily correct errors or remove sensitive information. Balance needed with practical requirements.
                    </div>
                  </div>
                </div>
              </div>

              {/* Transparency */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-blue-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">2. Transparency</h3>
                </div>
                <p className="text-xl font-semibold text-gray-800 mb-4">Radical Openness</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In public blockchains, the entire transaction history is visible to anyone. Every transaction from the
                  genesis block to the present can be independently verified.
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    Revolutionary Implications
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Continuous auditing</strong> by anyone with technical capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Organizations can prove solvency</strong> without traditional auditors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Supply chains can verify</strong> product authenticity and origin</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <strong>Privacy Consideration:</strong> While addresses are pseudonymous, transaction patterns can reveal identities. Privacy-enhancing technologies like zero-knowledge proofs help balance transparency with confidentiality.
                    </div>
                  </div>
                </div>
              </div>

              {/* Decentralization */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Network className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">3. Decentralization</h3>
                </div>
                <p className="text-xl font-semibold text-gray-800 mb-4">Eliminating Single Points of Failure</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Responsibility is distributed across potentially thousands of independent participants. Decentralization
                  occurs at multiple levels: data storage, validation, and governance.
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    Security & Social Benefits
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>Attack requires 51% of resources</strong>—exponentially expensive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>Resilience to failures</strong>—network continues if some nodes go offline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>Reduces gatekeepers' power</strong>—enabling new economic activity</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-100 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-purple-900">
                      <strong>Trade-offs:</strong> Slower decision-making, difficulty upgrading protocols, potential for fragmentation. Crucial to understand when decentralization provides genuine value.
                    </div>
                  </div>
                </div>
              </div>

              {/* Consensus Mechanisms */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">4. Consensus</h3>
                </div>
                <p className="text-xl font-semibold text-gray-800 mb-4">Agreement Without Authority</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  How can multiple parties agree on truth without a central authority? Consensus mechanisms solve the
                  Byzantine Fault Tolerance problem through algorithmic solutions.
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="font-bold text-green-900 mb-4">Main Approaches:</div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Proof of Work (PoW)</div>
                        <div className="text-gray-600 text-sm">Computational competition—secure but energy-intensive</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Coins className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Proof of Stake (PoS)</div>
                        <div className="text-gray-600 text-sm">Economic stake-based selection—energy-efficient</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Other Mechanisms</div>
                        <div className="text-gray-600 text-sm">DPoS, PBFT, Proof of History—different trade-offs</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-green-900">
                      <strong>Key Insight:</strong> Each mechanism makes different trade-offs between decentralization, scalability, and security—the "blockchain trilemma."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART V: BLOCKCHAIN'S RELEVANCE TO FINANCIAL SYSTEMS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part V: Blockchain's Relevance to Financial Systems
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-teal-600 to-emerald-600"></div>
            </div>

            <div className="prose prose-xl max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                The financial sector stands at the forefront of blockchain adoption. From revolutionizing payments to
                enabling entirely new paradigms like DeFi, blockchain offers solutions to long-standing inefficiencies
                while creating unprecedented opportunities for innovation.
              </p>
            </div>

            {/* Financial Use Cases Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Payments & Remittances */}
              <div className="bg-white rounded-3xl p-8 border-2 border-emerald-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <CreditCard className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payments & Remittances</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Direct peer-to-peer transfers settling in minutes instead of days, with dramatically lower fees.
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 mb-4">
                  <div className="font-bold text-emerald-900 mb-2">Traditional Problems:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Multiple intermediaries add time & cost</li>
                    <li>• Days to settle international transfers</li>
                    <li>• Fees often exceed 7% for remittances</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded-xl p-4">
                  <div className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Blockchain Solution:
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Settles in minutes or hours</li>
                    <li>• Dramatically lower transaction costs</li>
                    <li>• Programmable payment conditions</li>
                  </ul>
                </div>
              </div>

              {/* Securities Trading */}
              <div className="bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Securities & Settlement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Near-instantaneous settlement, reducing counterparty risk and freeing up locked capital.
                </p>
                <div className="bg-blue-50 rounded-xl p-4 mb-4">
                  <div className="font-bold text-blue-900 mb-2">Current T+2 Settlement:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Two-day settlement period</li>
                    <li>• Counterparty risk during delay</li>
                    <li>• Multiple reconciliation steps</li>
                  </ul>
                </div>
                <div className="bg-cyan-100 rounded-xl p-4">
                  <div className="font-bold text-cyan-900 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    With Tokenization:
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Real-time settlement</li>
                    <li>• Fractional ownership possible</li>
                    <li>• 24/7 global trading</li>
                  </ul>
                </div>
              </div>

              {/* DeFi */}
              <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Wallet className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Decentralized Finance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Reconstructing the entire financial system without traditional intermediaries.
                </p>
                <div className="bg-purple-50 rounded-xl p-4 mb-4">
                  <div className="font-bold text-purple-900 mb-2">DeFi Services:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lending & borrowing protocols</li>
                    <li>• Decentralized exchanges (DEXs)</li>
                    <li>• Derivatives & complex instruments</li>
                    <li>• Yield farming & liquidity provision</li>
                  </ul>
                </div>
                <div className="bg-pink-100 rounded-xl p-4">
                  <div className="text-sm text-gray-700">
                    <strong>Composability</strong> enables "money legos"—combining protocols to create novel financial products at unprecedented speed.
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Inclusion Impact */}
            <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-12 text-white mb-12 shadow-2xl">
              <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                <Globe className="w-12 h-12" />
                Transforming Financial Inclusion
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4">The Problem</h4>
                  <p className="text-lg leading-relaxed mb-4">
                    Traditional banking requires extensive infrastructure, documentation, and minimum balances that
                    <strong> exclude billions of people globally</strong>.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-base">
                      The unbanked and underbanked populations lack access to basic financial services, limiting
                      their participation in the global digital economy.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4">Blockchain Solution</h4>
                  <p className="text-lg leading-relaxed mb-4">
                    Blockchain-based payment systems require <strong>only internet access</strong>, serving anyone
                    regardless of location, wealth, or documentation status.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="space-y-2 text-base">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>No minimum balance requirements</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Accessible from mobile devices</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Cross-border without restrictions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CBDCs & Banking Infrastructure */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-10 border-2 border-indigo-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Landmark className="w-10 h-10 text-indigo-600" />
                Central Bank Digital Currencies (CBDCs)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Perhaps the most significant potential transformation of banking infrastructure. Many central banks
                are exploring or piloting CBDCs—digital versions of national currencies built on blockchain or DLT infrastructure.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Potential Benefits
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">•</span>
                      <span>Efficiency of cryptocurrencies with traditional currency stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">•</span>
                      <span>More effective monetary policy transmission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">•</span>
                      <span>Reduced cost of cash handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1 font-bold">•</span>
                      <span>Better financial inclusion</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                    Important Concerns
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span>Privacy implications of government-tracked transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span>Impact on commercial banking business models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span>Potential for increased surveillance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span>Design choices will shape future financial systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART VI: THE HOW OF BLOCKCHAIN IMPLEMENTATION */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part VI: The How of Blockchain Implementation
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
            </div>

            {/* Technical Architecture */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Technical Architecture and Components</h3>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-10 mb-10 border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🏗️ The Layered Architecture
                </h4>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Network className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Networking Layer</h5>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Peer-to-peer network where nodes communicate directly without central servers. Handles peer
                          discovery, message propagation, and synchronization.
                        </p>
                        <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                          <strong>Process:</strong> When you initiate a transaction, it's broadcast to neighboring nodes,
                          which validate and propagate it further—ensuring all nodes eventually receive all transactions.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lock className="w-7 h-7 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Cryptographic Layer</h5>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Provides security foundations through public key cryptography, hash functions, Merkle trees,
                          and digital signatures.
                        </p>
                        <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                          <strong>Security Emerges From:</strong> Mathematical proofs rather than trusted authorities.
                          The strength depends on underlying cryptographic assumptions (e.g., difficulty of factoring large primes).
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Consensus Layer</h5>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Coordinates agreement among distributed nodes through transaction validation rules, block creation
                          mechanisms, and fork resolution rules.
                        </p>
                        <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                          <strong>Balances:</strong> Security against attacks, fairness in participation, efficiency in
                          resource usage, and finality in transaction confirmation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mining & Validation */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">The Mining and Validation Process</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Proof of Work</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Miners collect transactions, verify validity, and engage in computational race to find a nonce that
                    produces a hash meeting difficulty requirements.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-4 mb-4">
                    <h5 className="font-bold text-orange-900 mb-2">Economic Dynamics:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• More miners join → difficulty increases</li>
                      <li>• Protocol auto-adjusts for consistent block times</li>
                      <li>• Miners balance operational costs vs rewards</li>
                      <li>• Creates market-driven security budget</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded-lg p-3 text-sm">
                    <strong>Energy Consumption:</strong> High computational requirements lead to significant
                    electricity use, driving development of alternative mechanisms.
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Coins className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Proof of Stake</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Validators are selected based on their stake in the network. Selection might be random (weighted by stake)
                    or involve delegation where token holders vote for validators.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4 mb-4">
                    <h5 className="font-bold text-green-900 mb-2">Key Advantages:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Dramatically reduced energy consumption</li>
                      <li>• Economic security through stake at risk</li>
                      <li>• Validators lose stake if malicious</li>
                      <li>• More about verification than computation</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3 text-sm">
                    <strong>Considerations:</strong> "Nothing at stake" problem and potential stake centralization
                    require careful protocol design.
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Contracts */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Smart Contracts and Programmability</h3>

              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-4xl font-bold mb-3">Evolution to Programmable Platform</h4>
                    <p className="text-2xl">From transaction ledger to autonomous execution</p>
                  </div>
                  <div className="text-8xl">💻</div>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                  Smart contracts are essentially programs that run on the blockchain, automatically executing predefined
                  logic when conditions are met. The code and its execution are <strong>transparent and verifiable</strong> by
                  all network participants.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-lg leading-relaxed">
                    Once deployed, smart contracts operate <strong>autonomously without possibility of downtime, censorship,
                    or third-party interference</strong>—enabling trustless automation of complex multi-party agreements.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-7 h-7 text-red-600" />
                    Unique Challenges
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Lock className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Immutability</div>
                        <div className="text-gray-600 text-sm">Bugs can't be easily patched—mistakes can be costly. Requires extensive testing and audits.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Activity className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Deterministic Execution</div>
                        <div className="text-gray-600 text-sm">Must produce identical results on all nodes. No randomness or external data without oracles.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Gas Mechanisms</div>
                        <div className="text-gray-600 text-sm">Computation costs money to prevent infinite loops. Must optimize for efficiency.</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-green-600" />
                    Evolving Ecosystem
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Audited Libraries</div>
                        <div className="text-gray-600 text-sm">Reusable contracts reduce vulnerability risks through battle-tested code.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Formal Verification</div>
                        <div className="text-gray-600 text-sm">Mathematical proofs of contract properties increase confidence in security.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Layers className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Layer-2 Solutions</div>
                        <div className="text-gray-600 text-sm">Complex computation off-chain while maintaining on-chain security guarantees.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART VII: CHALLENGES AND FUTURE DIRECTIONS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-orange-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part VII: Challenges and Future Directions
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-red-600"></div>
            </div>

            {/* The Blockchain Trilemma */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 mb-12 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">⚖️ The Blockchain Trilemma</h3>
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                The most fundamental technical challenge: simultaneously achieving <strong>decentralization</strong>,
                <strong> security</strong>, and <strong>scalability</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl mb-4 text-center">🌐</div>
                  <h4 className="text-xl font-bold text-center text-gray-900 mb-3">Decentralization</h4>
                  <p className="text-gray-700 text-center">
                    Thousands of nodes can participate without permission
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl mb-4 text-center">🔒</div>
                  <h4 className="text-xl font-bold text-center text-gray-900 mb-3">Security</h4>
                  <p className="text-gray-700 text-center">
                    Resistant to attacks and Byzantine failures
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl mb-4 text-center">⚡</div>
                  <h4 className="text-xl font-bold text-center text-gray-900 mb-3">Scalability</h4>
                  <p className="text-gray-700 text-center">
                    Thousands of transactions per second
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h5 className="font-bold text-gray-900 mb-3">Current Reality:</h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bitcoin processes ~7 TPS, Ethereum ~15 TPS, while Visa handles thousands. This limitation stems from
                  every node processing every transaction and maintaining entire state.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>The Challenge:</strong> As transaction volume increases, so do computational, storage, and
                    bandwidth requirements. If too high, only well-resourced entities can run nodes, leading to centralization.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalability Solutions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Scalability Solutions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Layers className="w-7 h-7 text-blue-600" />
                    Layer-2 Solutions
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Process transactions off the main blockchain while inheriting its security guarantees.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-bold text-blue-900 mb-1">Lightning Network (Bitcoin)</div>
                      <div className="text-sm text-gray-700">Payment channels for unlimited off-chain transactions, settling on-chain only when closing.</div>
                    </div>
                    <div className="bg-cyan-50 rounded-lg p-4">
                      <div className="font-bold text-cyan-900 mb-1">Rollups (Ethereum)</div>
                      <div className="text-sm text-gray-700">Bundle many transactions into single on-chain settlements. Thousands of TPS possible.</div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <div className="font-bold text-indigo-900 mb-1">State Channels</div>
                      <div className="text-sm text-gray-700">Participants conduct unlimited transactions, settling on-chain only at conclusion.</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <GitBranch className="w-7 h-7 text-purple-600" />
                    Alternative Architectures
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Different structural approaches to achieve higher throughput.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="font-bold text-purple-900 mb-1">Sharding</div>
                      <div className="text-sm text-gray-700">Divide network into smaller groups processing transactions in parallel.</div>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <div className="font-bold text-pink-900 mb-1">DAG Structures</div>
                      <div className="text-sm text-gray-700">Allow parallel transaction processing without blocks. Different security trade-offs.</div>
                    </div>
                    <div className="bg-fuchsia-50 rounded-lg p-4">
                      <div className="font-bold text-fuchsia-900 mb-1">High-Performance Chains</div>
                      <div className="text-sm text-gray-700">Optimized consensus with powerful hardware requirements. Thousands of TPS but higher centralization.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory & Interoperability */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Scale className="w-7 h-7 text-amber-600" />
                  Regulatory Challenges
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complex and evolving landscape with jurisdictions taking varied approaches.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-gray-900 mb-2">Key Questions:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Are crypto assets currencies, commodities, or securities?</li>
                      <li>• How to apply AML/KYC to pseudonymous systems?</li>
                      <li>• What's the legal status of smart contracts and DAOs?</li>
                      <li>• How to handle borderless, decentralized networks?</li>
                    </ul>
                  </div>
                  <div className="bg-amber-100 rounded-lg p-3 text-sm text-gray-700">
                    Regulatory clarity will significantly influence blockchain's development and institutional adoption trajectory.
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <LinkIcon className="w-7 h-7 text-teal-600" />
                  Interoperability
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fragmented ecosystem where assets and data are siloed within individual chains.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-gray-900 mb-2">Solutions Emerging:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Bridge Protocols</strong> - Lock assets on one chain, mint on another</li>
                      <li>• <strong>Cross-chain Communication</strong> - Polkadot, Cosmos ecosystems</li>
                      <li>• <strong>Standardization Efforts</strong> - Common frameworks (ERC-20, ERC-721)</li>
                      <li>• <strong>Atomic Swaps</strong> - Trustless exchange between chains</li>
                    </ul>
                  </div>
                  <div className="bg-teal-100 rounded-lg p-3 text-sm text-gray-700">
                    Vision: "Internet of blockchains" where specialized chains collaborate seamlessly.
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-4xl font-bold mb-6">🌟 The Ongoing Evolution</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Blockchain technology has traveled a remarkable journey from Bitcoin's underlying infrastructure to
                  becoming a foundational technology with potential applications across industries.
                </p>
                <p>
                  The <strong>core innovation—achieving consensus without central authority</strong>—has proven robust
                  and valuable. The financial sector stands at the forefront of adoption, but realizing blockchain's full
                  potential requires overcoming significant technical, regulatory, and usability challenges.
                </p>
                <p className="text-xl font-semibold">
                  Looking forward, blockchain's evolution will likely involve:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">Continued experimentation</span>
                    </div>
                    <p className="text-sm">Exploring new consensus mechanisms and architectures</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">Gradual maturation</span>
                    </div>
                    <p className="text-sm">Better tools, security practices, and user experiences</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">Selective adoption</span>
                    </div>
                    <p className="text-sm">Where the technology provides clear, demonstrable value</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">Thoughtful integration</span>
                    </div>
                    <p className="text-sm">Leveraging strengths while addressing limitations</p>
                  </div>
                </div>
                <p className="text-xl font-bold">
                  The story of blockchain is still being written. From Satoshi Nakamoto's whitepaper to today's diverse
                  ecosystem, the technology has shown remarkable resilience and evolution.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Course Completion */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-16">
            <Award className="w-24 h-24 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">
              🎉 Course Complete!
            </h3>
            <p className="text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
              You've completed all seven parts covering the complete journey of blockchain—from its genesis to future challenges!
            </p>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Explored: <strong>History</strong>, <strong>Evolution</strong>, <strong>DLT Principles</strong>,
              <strong> Key Features</strong>, <strong>Financial Applications</strong>, <strong>Implementation</strong>, and <strong>Future Directions</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/learn"
                className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all text-xl shadow-xl"
              >
                Explore More Courses
              </Link>
              <Link
                href="/playground"
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all text-xl"
              >
                Try Interactive Tools
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Security Foundations course content - COMPLETE VERSION
  if (courseId === "security") {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-16 border-b-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
            <Link
              href="/learn"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-xl font-medium"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Courses
            </Link>

            <div className="flex items-start gap-8">
              <div className="text-7xl">{course.icon}</div>
              <div className="flex-1">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                  {course.title}
                </h1>
                <p className="text-3xl text-gray-700 leading-relaxed mb-8">
                  Master the cryptographic foundations that secure the blockchain world—from ancient ciphers to quantum-resistant encryption.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-xl">
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 mr-2 text-purple-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BarChart className="w-6 h-6 mr-2 text-pink-600" />
                    {course.difficulty}
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BookOpen className="w-6 h-6 mr-2 text-rose-600" />
                    Module {course.order} of 6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-7xl mx-auto px-8 sm:px-12 py-16">

          {/* PART I: THE BASICS OF ENCRYPTION */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part I: The Basics of Encryption
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-purple-600"></div>
            </div>

            {/* Elementary School Note-Passing Analogy */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 mb-12 border-2 border-blue-300">
              <div className="flex items-start gap-6">
                <div className="text-6xl">✉️</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Elementary School Note</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Imagine you're back in elementary school. You want to pass a note to your friend across the classroom
                    without the teacher understanding what you're saying. So you develop a simple code: you both agree that
                    <strong className="text-blue-600"> every letter will be shifted by 3 positions in the alphabet</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-800 mb-4"><strong>Example:</strong></p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
                        <div className="text-sm font-bold text-red-900 mb-2">📝 Original Message:</div>
                        <div className="text-2xl font-mono text-gray-900">"HELLO"</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
                        <div className="text-sm font-bold text-green-900 mb-2">🔒 Encrypted Message:</div>
                        <div className="text-2xl font-mono text-gray-900">"KHOOR"</div>
                      </div>
                    </div>
                    <div className="mt-4 text-gray-600 text-base">
                      H → K (shift by 3), E → H, L → O, L → O, O → R
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This is <strong className="text-purple-600">encryption</strong> in its simplest form. You've taken readable
                    information (plaintext) and transformed it into something unreadable (ciphertext) using a secret rule (the key).
                    Only someone who knows the rule can reverse the process—this is called <strong className="text-purple-600">decryption</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Historical Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-purple-600" />
                Evolution of Encryption: From Ancient Times to Digital Age
              </h3>

              <div className="space-y-6">
                <div className="relative pl-10 pb-8 border-l-4 border-purple-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-white"></div>
                  <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                    <div className="text-sm font-bold text-purple-900 mb-2">ANCIENT TIMES (Caesar Cipher)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Julius Caesar's Secret Code</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Julius Caesar used this exact technique (shifting letters by 3) to communicate with his generals.
                      It's called the <strong>Caesar Cipher</strong>. While simple by today's standards, it was effective
                      because most people in ancient Rome couldn't read at all—let alone decode encrypted messages.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-bold text-gray-900 mb-2">⚔️ Military Use:</div>
                      <p className="text-gray-700 text-sm">
                        Caesar's military orders were protected from enemy interception, giving Rome a tactical advantage
                        in warfare communication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-10 pb-8 border-l-4 border-blue-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="text-sm font-bold text-blue-900 mb-2">WORLD WAR II (Enigma Machine)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">The Enigma Code</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Fast forward to World War II. The Nazis used a machine called <strong>Enigma</strong> that created
                      incredibly complex ciphers using rotating mechanical wheels. Each day, the machine settings would change,
                      making the code nearly impossible to break—or so the Nazis thought.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-bold text-gray-900 mb-2">🧠 Alan Turing's Breakthrough:</div>
                      <p className="text-gray-700 text-sm mb-2">
                        British mathematician Alan Turing built an electromechanical machine (the Bombe) that could test
                        thousands of possible Enigma settings per minute, ultimately cracking the code.
                      </p>
                      <p className="text-gray-700 text-sm font-bold">
                        Historical estimate: This shortened WWII by 2-4 years and saved millions of lives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-10 pb-8 border-l-4 border-emerald-300">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white"></div>
                  <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
                    <div className="text-sm font-bold text-emerald-900 mb-2">1970s (DES - Data Encryption Standard)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Age Begins</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As computers emerged, encryption moved from mechanical devices to mathematical algorithms. The U.S.
                      government adopted <strong>DES (Data Encryption Standard)</strong> in 1977—using a 56-bit key to
                      scramble data electronically.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-bold text-gray-900 mb-2">✅ Advantages:</div>
                          <p className="text-gray-700 text-sm">Fast, electronic, standardized across industries</p>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 mb-2">❌ Problems:</div>
                          <p className="text-gray-700 text-sm">56-bit keys became crackable as computers got faster (broken in 1998)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-600 border-4 border-white"></div>
                  <div className="bg-pink-50 rounded-xl p-6 border-2 border-pink-200">
                    <div className="text-sm font-bold text-pink-900 mb-2">2001-PRESENT (AES - Advanced Encryption Standard)</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Today's Gold Standard</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      After an international competition, the U.S. government adopted <strong>AES (Advanced Encryption Standard)</strong>
                      in 2001. AES uses 128, 192, or 256-bit keys—exponentially stronger than DES.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="text-sm font-bold text-gray-900 mb-2">🔢 How Strong is AES-256?</div>
                      <p className="text-gray-700 text-sm mb-2">
                        A 256-bit key has 2<sup>256</sup> possible combinations. That's more combinations than there are atoms
                        in the observable universe.
                      </p>
                      <div className="bg-pink-100 rounded-lg p-3 text-sm text-gray-800 font-mono">
                        2<sup>256</sup> = 115,792,089,237,316,195,423,570,985,008,687,907,853,269,984,665,640,564,039,457,584,007,913,129,639,936
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4">
                      <p className="text-gray-800 font-bold text-lg">
                        💡 Even if you could check 1 trillion keys per second, it would take longer than the age of the
                        universe to try them all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Symmetric vs Asymmetric Encryption */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Key className="w-8 h-8 text-purple-600" />
                Two Fundamentally Different Approaches
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <Key className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Symmetric Encryption</h4>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong>The Same Key for Lock and Unlock</strong>
                  </p>
                  <div className="bg-white rounded-xl p-5 mb-4">
                    <div className="text-sm font-bold text-gray-900 mb-3">🏠 Real-World Analogy:</div>
                    <p className="text-gray-700 leading-relaxed">
                      Think of your house key. The same physical key that locks your door also unlocks it. In symmetric
                      encryption, both the sender and receiver use <strong>the exact same secret key</strong> to encrypt
                      and decrypt messages.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-600">
                      <div className="font-bold text-green-900 mb-1">✅ Advantages:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Extremely fast (suitable for large data)</li>
                        <li>• Low computational overhead</li>
                        <li>• Perfect for encrypting files on your computer</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-600">
                      <div className="font-bold text-red-900 mb-1">❌ The Big Problem:</div>
                      <p className="text-sm text-gray-700">
                        <strong>Key Distribution:</strong> How do you securely give the key to the other person? If you
                        send it over email or text, an interceptor could steal it and decrypt everything!
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-amber-100 rounded-lg p-4">
                    <p className="text-sm text-gray-800">
                      <strong>Examples:</strong> AES, DES, 3DES, Blowfish
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                      <KeyRound className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Asymmetric Encryption</h4>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong>Two Different Keys: Public and Private</strong>
                  </p>
                  <div className="bg-white rounded-xl p-5 mb-4">
                    <div className="text-sm font-bold text-gray-900 mb-3">📬 Real-World Analogy:</div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Think of a mailbox with a slot in it. <strong>Anyone</strong> can drop a letter in the slot (that's
                      the <strong className="text-indigo-600">public key</strong>), but <strong>only you</strong> have the
                      key to open the mailbox and read the letters (that's the <strong className="text-purple-600">private key</strong>).
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-700">
                      The magic: These two keys are mathematically linked but cannot be derived from each other.
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-600">
                      <div className="font-bold text-green-900 mb-1">✅ Advantages:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• No secure channel needed for key exchange</li>
                        <li>• Public key can be shared openly</li>
                        <li>• Enables digital signatures</li>
                        <li>• Foundation of cryptocurrency security</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-600">
                      <div className="font-bold text-red-900 mb-1">❌ Trade-offs:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Much slower than symmetric encryption</li>
                        <li>• Requires more computational power</li>
                        <li>• Not practical for large files</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-indigo-100 rounded-lg p-4">
                    <p className="text-sm text-gray-800">
                      <strong>Examples:</strong> RSA, ECC (Elliptic Curve), DSA
                    </p>
                  </div>
                </div>
              </div>

              {/* Hybrid Approach */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🔄</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">The Best of Both Worlds: Hybrid Encryption</h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Modern systems (like HTTPS, which secures your web browsing) use <strong>both</strong> types together:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div className="bg-white rounded-xl p-5 flex-1">
                          <h5 className="font-bold text-gray-900 mb-2">Asymmetric Key Exchange (Slow but Secure)</h5>
                          <p className="text-gray-700">
                            Use asymmetric encryption to securely exchange a <strong>symmetric key</strong>. Since this is
                            a small piece of data (just the key), the slowness doesn't matter.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div className="bg-white rounded-xl p-5 flex-1">
                          <h5 className="font-bold text-gray-900 mb-2">Symmetric Encryption for Data (Fast)</h5>
                          <p className="text-gray-700">
                            Once both parties have the symmetric key, use it to encrypt the actual data. This is fast
                            enough to handle large files, video streams, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-5">
                      <p className="text-gray-800 font-bold text-lg">
                        🌐 This is exactly how your browser secures communications with websites using HTTPS/TLS!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HTTPS/TLS Handshake Visualization */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-purple-600" />
                How HTTPS Protects Your Web Browsing
              </h3>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-300 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Every time you see the 🔒 padlock icon in your browser's address bar, a sophisticated encryption
                  process called the <strong>TLS Handshake</strong> has occurred. Let's walk through it step-by-step:
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-cyan-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Client Hello</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Your browser (client) sends a message to the website's server saying: "Hello! I want to establish
                        a secure connection. Here are the encryption methods I support."
                      </p>
                      <div className="bg-cyan-50 rounded-lg p-3 text-sm text-gray-700">
                        Includes: TLS version, supported cipher suites, random data for later calculations
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-blue-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Server Hello + Certificate</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        The server responds: "Hello! Let's use <strong>this</strong> encryption method. Here's my
                        <strong className="text-blue-600"> digital certificate</strong> to prove I'm the real website
                        (not an impostor)."
                      </p>
                      <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700 mb-3">
                        The certificate contains the server's <strong>public key</strong> and is signed by a trusted
                        Certificate Authority (CA)
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700 border-l-4 border-yellow-500">
                        <strong>🔍 Your browser checks:</strong> Is this certificate signed by a CA I trust? Is it still
                        valid (not expired)? Does the domain name match?
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-indigo-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Key Exchange</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Your browser generates a random <strong className="text-indigo-600">symmetric session key</strong>
                        and encrypts it using the server's <strong>public key</strong> (from the certificate). Then it
                        sends this encrypted key to the server.
                      </p>
                      <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-700">
                        Only the server can decrypt this message (using its private key). Now both sides have the same
                        secret symmetric key!
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-purple-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Secure Communication Begins</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Both your browser and the server now use the <strong>symmetric session key</strong> to encrypt
                        all further communication. This is fast enough to handle images, videos, and real-time interactions.
                      </p>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-sm text-gray-700">
                        <strong>🔒 Result:</strong> Everything you send and receive is encrypted. Even if someone intercepts
                        the data, they see only gibberish without the session key.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 rounded-xl p-6 border-2 border-cyan-400">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-10 h-10 text-blue-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-2">Why This Matters</h5>
                      <p className="text-gray-700 leading-relaxed">
                        This process happens in <strong>milliseconds</strong> every time you visit a website. It protects
                        your passwords, credit card numbers, private messages, and browsing history from eavesdroppers—whether
                        they're hackers on public Wi-Fi or even your Internet Service Provider. Without HTTPS/TLS, the internet
                        as we know it (online banking, shopping, private communication) would be impossible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-400">
              <div className="flex items-start gap-6">
                <Target className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways from Part I</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Encryption</strong> transforms readable information into unreadable code, protecting it from unauthorized access
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Symmetric encryption</strong> uses one key for both locking and unlocking (fast but has key distribution problems)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Asymmetric encryption</strong> uses two keys (public and private) that solve the key distribution problem
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Modern systems</strong> combine both approaches: asymmetric for key exchange, symmetric for data encryption
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>HTTPS/TLS</strong> protects billions of web connections daily using this hybrid approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART II: UNDERSTANDING DIGITAL SECURITY IN THE MODERN WORLD */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-rose-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part II: Understanding Digital Security
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-rose-600 to-pink-600"></div>
            </div>

            {/* CIA Triad Introduction */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-10 mb-12 border-2 border-rose-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Three Pillars of Information Security</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  The CIA Triad (not the spy agency!) represents the three fundamental goals of cybersecurity:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 border-2 border-blue-300 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-9 h-9 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 text-center mb-3">Confidentiality</h4>
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    Information should only be accessible to authorized parties
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                    <p className="text-sm text-gray-600">
                      Your medical records should only be viewable by you and your doctors—not by strangers or hackers
                    </p>
                  </div>
                  <div className="mt-4 bg-blue-100 rounded-lg p-3">
                    <p className="text-sm font-bold text-blue-900 mb-1">Achieved through:</p>
                    <p className="text-sm text-gray-700">Encryption, access controls, authentication</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-green-300 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-9 h-9 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-900 text-center mb-3">Integrity</h4>
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    Information should not be altered or tampered with
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                    <p className="text-sm text-gray-600">
                      A bank transfer of $100 shouldn't be changed to $100,000 by an attacker midway through transmission
                    </p>
                  </div>
                  <div className="mt-4 bg-green-100 rounded-lg p-3">
                    <p className="text-sm font-bold text-green-900 mb-1">Achieved through:</p>
                    <p className="text-sm text-gray-700">Hashing, digital signatures, checksums</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-purple-300 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-9 h-9 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-purple-900 text-center mb-3">Availability</h4>
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    Information should be accessible when needed by authorized users
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                    <p className="text-sm text-gray-600">
                      A hospital's patient database must be available 24/7 for emergency care—downtime could cost lives
                    </p>
                  </div>
                  <div className="mt-4 bg-purple-100 rounded-lg p-3">
                    <p className="text-sm font-bold text-purple-900 mb-1">Achieved through:</p>
                    <p className="text-sm text-gray-700">Redundancy, backups, DDoS protection</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-rose-300">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-rose-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong className="text-rose-600">Important Note:</strong> These three goals often conflict! For example,
                      maximum security (confidentiality) might reduce availability (harder to access). Good security design
                      balances all three based on the specific needs of the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medieval Castle Analogy */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-rose-600" />
                Security Layers: The Medieval Castle Defense
              </h3>

              <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-8 border-2 border-gray-300 mb-6">
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-6xl">🏰</div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Think of digital security like a medieval castle. A well-defended castle doesn't rely on just one
                      wall—it has <strong className="text-rose-600">multiple layers of defense</strong>:
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-amber-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-2">The Moat (Perimeter Security)</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        The outer barrier that keeps casual intruders away. In digital systems, this is your
                        <strong> firewall</strong>—filtering incoming traffic and blocking obvious threats.
                      </p>
                      <div className="bg-amber-50 rounded-lg p-3 text-sm text-gray-700">
                        🛡️ Modern equivalent: Network firewalls, intrusion detection systems (IDS)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-blue-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-2">The Gate Guards (Authentication)</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Guards who verify identity before letting anyone through the gate. In digital systems, this is
                        <strong> authentication</strong>—passwords, biometrics, two-factor authentication.
                      </p>
                      <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                        🔑 Modern equivalent: Username/password, fingerprint scanners, authenticator apps
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-green-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-2">Interior Doors (Authorization)</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Even once inside, not everyone can access every room. The king's chambers, treasury, and armory
                        require additional permissions. This is <strong>authorization</strong>—controlling what authenticated
                        users can do.
                      </p>
                      <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                        ✅ Modern equivalent: User roles, permissions, access control lists (ACLs)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-purple-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-2">The Treasure Vault (Encryption)</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Even if an intruder breaches all defenses and reaches the treasure vault, the valuables are
                        locked in iron chests. In digital systems, <strong>encryption</strong> ensures that even stolen
                        data is unreadable.
                      </p>
                      <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                        🔐 Modern equivalent: AES encryption, database encryption, full-disk encryption
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-rose-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-2">The Watchtower (Monitoring & Auditing)</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Guards in the watchtower observe all activity, looking for suspicious behavior. In digital systems,
                        this is <strong>logging and monitoring</strong>—tracking who accesses what and when.
                      </p>
                      <div className="bg-rose-50 rounded-lg p-3 text-sm text-gray-700">
                        👁️ Modern equivalent: Security logs, SIEM systems, anomaly detection
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-6 border-2 border-rose-300">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-10 h-10 text-rose-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-2">Defense in Depth</h5>
                      <p className="text-gray-700 leading-relaxed">
                        This strategy is called <strong>"Defense in Depth"</strong> or <strong>"Layered Security"</strong>.
                        If one layer fails (password stolen, firewall bypassed), other layers still protect the system.
                        This is why modern cybersecurity never relies on a single protection mechanism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentication, Digital Signatures, and Hashing */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-rose-600" />
                Core Security Mechanisms Explained
              </h3>

              <div className="space-y-8">
                {/* Authentication */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Authentication: Proving You Are Who You Claim</h4>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Authentication is the process of verifying identity. There are three main factors:
                  </p>

                  <div className="grid md:grid-cols-3 gap-5 mb-6">
                    <div className="bg-white rounded-xl p-5 border-l-4 border-amber-500">
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-amber-600" />
                        Something You Know
                      </h5>
                      <p className="text-sm text-gray-700 mb-3">Knowledge-based authentication</p>
                      <div className="bg-amber-50 rounded-lg p-3 text-sm text-gray-700">
                        <strong>Examples:</strong> Password, PIN, security questions, passphrase
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Fingerprint className="w-5 h-5 text-green-600" />
                        Something You Are
                      </h5>
                      <p className="text-sm text-gray-700 mb-3">Biometric authentication</p>
                      <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                        <strong>Examples:</strong> Fingerprint, face recognition, iris scan, voice pattern
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border-l-4 border-purple-500">
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-purple-600" />
                        Something You Have
                      </h5>
                      <p className="text-sm text-gray-700 mb-3">Possession-based authentication</p>
                      <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                        <strong>Examples:</strong> Phone (for SMS codes), hardware token, smart card, authenticator app
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 text-xl mb-3">🔐 Multi-Factor Authentication (MFA)</h5>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Using <strong>two or more factors</strong> from different categories dramatically increases security.
                      For example, a password (something you know) + phone verification code (something you have).
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-800 mb-2">
                        <strong>Why MFA matters:</strong>
                      </p>
                      <p className="text-sm text-gray-700">
                        If a hacker steals your password, they still can't access your account without also stealing your
                        phone or fingerprint. This is why Google, banks, and major services strongly encourage (or require) MFA.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Signatures */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Digital Signatures: Proof of Authorship & Integrity</h4>
                  </div>

                  <div className="bg-white rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      A <strong className="text-indigo-600">digital signature</strong> is the electronic equivalent of a
                      handwritten signature, but <strong>far more secure</strong>. It proves two things simultaneously:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                        <h5 className="font-bold text-green-900 mb-2">1. Authentication</h5>
                        <p className="text-sm text-gray-700">
                          The message really came from the claimed sender (you can't forge their private key)
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                        <h5 className="font-bold text-blue-900 mb-2">2. Integrity</h5>
                        <p className="text-sm text-gray-700">
                          The message wasn't altered after being signed (any change invalidates the signature)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-bold text-gray-900 text-xl mb-4">How Digital Signatures Work (Step-by-Step)</h5>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div className="bg-white rounded-xl p-5 flex-1 border-l-4 border-indigo-600">
                          <h6 className="font-bold text-gray-900 mb-2">Hash the Message</h6>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            First, create a cryptographic hash (digital fingerprint) of your message. This condenses the
                            message into a fixed-length string like: <code className="bg-gray-100 px-2 py-1 rounded text-xs">a3f5b9c2...</code>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div className="bg-white rounded-xl p-5 flex-1 border-l-4 border-purple-600">
                          <h6 className="font-bold text-gray-900 mb-2">Encrypt with Private Key</h6>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Encrypt this hash using <strong>your private key</strong>. The encrypted hash becomes the
                            digital signature. Since only you have your private key, only you can create this signature.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div className="bg-white rounded-xl p-5 flex-1 border-l-4 border-pink-600">
                          <h6 className="font-bold text-gray-900 mb-2">Send Message + Signature</h6>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Send both the original message and the digital signature to the recipient. The message itself
                            isn't encrypted (unless you also encrypt it separately for confidentiality).
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div className="bg-white rounded-xl p-5 flex-1 border-l-4 border-cyan-600">
                          <h6 className="font-bold text-gray-900 mb-2">Verification by Recipient</h6>
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">
                            The recipient performs two actions:
                          </p>
                          <div className="space-y-2">
                            <div className="bg-cyan-50 rounded-lg p-3 text-sm text-gray-700">
                              <strong>a)</strong> Hash the received message themselves (produces hash A)
                            </div>
                            <div className="bg-cyan-50 rounded-lg p-3 text-sm text-gray-700">
                              <strong>b)</strong> Decrypt the signature using your <strong>public key</strong> (produces hash B)
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div className="bg-white rounded-xl p-5 flex-1 border-l-4 border-green-600">
                          <h6 className="font-bold text-gray-900 mb-2">Compare Hashes</h6>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            If hash A (from the message) matches hash B (from the signature), then:
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              The message came from you (authentication verified)
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              The message wasn't tampered with (integrity verified)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-10 h-10 text-indigo-600 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-xl mb-2">Real-World Uses of Digital Signatures</h5>
                        <div className="space-y-2 text-gray-700">
                          <p className="text-sm leading-relaxed">
                            • <strong>Software updates:</strong> Verify that updates come from the legitimate developer (not malware)
                          </p>
                          <p className="text-sm leading-relaxed">
                            • <strong>Legal documents:</strong> Digital contracts, NDAs, agreements signed electronically
                          </p>
                          <p className="text-sm leading-relaxed">
                            • <strong>Email security:</strong> S/MIME and PGP use digital signatures to verify email senders
                          </p>
                          <p className="text-sm leading-relaxed">
                            • <strong>Cryptocurrency:</strong> Every blockchain transaction is signed with your private key to prove you authorized it
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hashing */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Hash className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Cryptographic Hashing: Digital Fingerprints</h4>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A <strong className="text-emerald-600">cryptographic hash function</strong> is like a one-way blender
                    for data. You put information in, and it produces a unique fixed-length "fingerprint" (the hash).
                    Critically, you <strong>cannot reverse the process</strong>—you can't get the original data back from
                    the hash.
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h5 className="font-bold text-gray-900 text-xl mb-4">Properties of Cryptographic Hash Functions</h5>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                        <h6 className="font-bold text-emerald-900 mb-2">1. Deterministic</h6>
                        <p className="text-sm text-gray-700">
                          The same input always produces the same hash output
                        </p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-600">
                        <h6 className="font-bold text-teal-900 mb-2">2. Fast Computation</h6>
                        <p className="text-sm text-gray-700">
                          Quick to calculate the hash of any message
                        </p>
                      </div>
                      <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-600">
                        <h6 className="font-bold text-cyan-900 mb-2">3. Irreversible (One-Way)</h6>
                        <p className="text-sm text-gray-700">
                          Impossible to reverse the hash back to the original input
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                        <h6 className="font-bold text-blue-900 mb-2">4. Avalanche Effect</h6>
                        <p className="text-sm text-gray-700">
                          Tiny input change creates completely different hash
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                        <h6 className="font-bold text-purple-900 mb-2">5. Collision-Resistant</h6>
                        <p className="text-sm text-gray-700">
                          Nearly impossible to find two different inputs with same hash
                        </p>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-600">
                        <h6 className="font-bold text-pink-900 mb-2">6. Fixed Output Length</h6>
                        <p className="text-sm text-gray-700">
                          Regardless of input size, hash is always the same length
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h5 className="font-bold text-gray-900 text-xl mb-4">Example: SHA-256 in Action</h5>
                    <p className="text-gray-700 mb-4">
                      SHA-256 (Secure Hash Algorithm 256-bit) is the most common hash function used in blockchain. Let's
                      see how tiny changes dramatically affect the output:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-300">
                        <div className="text-sm font-bold text-emerald-900 mb-2">Input: "Hello"</div>
                        <div className="text-xs font-mono text-gray-800 bg-white p-3 rounded overflow-x-auto">
                          185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
                        </div>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-5 border-2 border-teal-300">
                        <div className="text-sm font-bold text-teal-900 mb-2">Input: "hello" (lowercase 'h')</div>
                        <div className="text-xs font-mono text-gray-800 bg-white p-3 rounded overflow-x-auto">
                          2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
                        </div>
                      </div>
                      <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-300">
                        <div className="text-sm font-bold text-cyan-900 mb-2">Input: "Hello!" (added exclamation)</div>
                        <div className="text-xs font-mono text-gray-800 bg-white p-3 rounded overflow-x-auto">
                          334d016f755cd6dc58c53a86e183882f8ec14f52fb05345887c8a5edd42c87b7
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-emerald-100 rounded-lg p-4">
                      <p className="text-sm text-gray-800">
                        <strong>Notice:</strong> Changing just one character completely changes the entire hash. This
                        "avalanche effect" makes it impossible to predict how input changes affect the output—crucial
                        for security.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 text-xl mb-3">Common Uses of Hashing</h5>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Password Storage</p>
                          <p className="text-gray-700 text-sm">
                            Websites store hashes of your password, not the password itself. When you log in, they hash
                            your input and compare it to the stored hash.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">File Integrity Verification</p>
                          <p className="text-gray-700 text-sm">
                            Download a file and verify its hash matches the official hash to ensure it wasn't corrupted or tampered with.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Blockchain</p>
                          <p className="text-gray-700 text-sm">
                            Each block contains the hash of the previous block, creating an immutable chain. Changing any
                            past block would change its hash, breaking the chain.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Digital Signatures</p>
                          <p className="text-gray-700 text-sm">
                            As we saw earlier, signatures encrypt the hash of a message, not the entire message (much faster).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-8 border-2 border-rose-400">
              <div className="flex items-start gap-6">
                <Target className="w-10 h-10 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways from Part II</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>CIA Triad:</strong> Confidentiality, Integrity, and Availability are the three pillars of information security
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Defense in Depth:</strong> Multiple layers of security protect systems when one layer fails
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Authentication:</strong> Proving identity using what you know, are, or have (or multiple factors)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Digital Signatures:</strong> Prove both authorship and integrity using private/public key pairs
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Cryptographic Hashing:</strong> Creates irreversible digital fingerprints used for integrity verification and blockchain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART III: PUBLIC AND PRIVATE KEYS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part III: Public and Private Keys
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
            </div>

            {/* The Magical Mailbox Analogy */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 mb-12 border-2 border-indigo-300">
              <div className="flex items-start gap-6">
                <div className="text-6xl">📬</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Magical Mailbox</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Imagine a magical mailbox sitting in front of your house. This mailbox has some very special properties:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Public Property (The Slot)</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Anyone</strong> can walk up to your mailbox and drop a letter through the slot. The slot is
                        visible and accessible to everyone on the street. This represents your <strong className="text-indigo-600">public key</strong>—
                        anyone can use it to send you encrypted messages.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-purple-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                          <Key className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Private Property (The Key)</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        However, <strong>only you</strong> have the key to open the mailbox and read the letters inside.
                        No one else can access them. This represents your <strong className="text-purple-600">private key</strong>—
                        only you can use it to decrypt messages sent to you.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-amber-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">The Magic Part</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Here's the truly magical part: Even if someone examines the mailbox slot very carefully, they
                        <strong> cannot figure out</strong> what the key looks like or make a copy of it. The slot (public key)
                        and the key (private key) are <strong className="text-indigo-600">mathematically related</strong>, but
                        you cannot derive one from the other.
                      </p>
                      <div className="bg-amber-50 rounded-lg p-4 text-sm text-gray-700">
                        <strong>Real-World Parallel:</strong> This is based on "trapdoor functions" in mathematics—easy to
                        compute in one direction, but extremely difficult (practically impossible) to reverse.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Pair Generation Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <KeyRound className="w-8 h-8 text-indigo-600" />
                How Key Pairs Are Generated
              </h3>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-300 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In cryptocurrency systems like Bitcoin, your wallet software goes through a specific process to create
                  your key pair. Let's break it down step-by-step:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-cyan-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Generate Random Number (Private Key)</h5>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Your wallet generates a <strong>very large random number</strong>. In Bitcoin, this is a 256-bit number,
                        meaning there are 2<sup>256</sup> possible private keys.
                      </p>
                      <div className="bg-cyan-50 rounded-lg p-4 mb-3">
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Example Private Key (simplified):</strong>
                        </p>
                        <code className="text-xs font-mono text-gray-800 bg-white p-3 rounded block overflow-x-auto">
                          E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262
                        </code>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                        <p className="text-sm text-gray-700">
                          <strong>⚠️ Critical Security Point:</strong> This number must be truly random. If the randomness is
                          weak, attackers could guess your private key. This is why using secure wallet software is essential.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-blue-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Apply Elliptic Curve Mathematics (Public Key)</h5>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The private key is run through a special mathematical function called <strong>Elliptic Curve Cryptography (ECC)</strong>.
                        This creates your <strong>public key</strong>.
                      </p>
                      <div className="bg-blue-50 rounded-lg p-4 mb-3">
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>The Math (Simplified):</strong>
                        </p>
                        <div className="bg-white rounded-lg p-3 text-center font-mono text-sm text-gray-800">
                          Public Key = Private Key × G
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          (Where G is a predetermined "generator point" on the elliptic curve)
                        </p>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          <strong>The Magic:</strong> This calculation is <strong>easy to do forward</strong> (private → public)
                          but <strong>impossible to reverse</strong> (public → private). Even with the world's most powerful
                          supercomputers, deriving the private key from the public key would take billions of years.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="bg-white rounded-xl p-6 flex-1 border-l-4 border-indigo-600">
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Hash to Create Address</h5>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Finally, the public key is hashed (using SHA-256 and RIPEMD-160) and encoded to create your
                        <strong className="text-indigo-600"> cryptocurrency address</strong>—the string you share with others
                        to receive payments.
                      </p>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Example Bitcoin Address:</strong>
                        </p>
                        <code className="text-xs font-mono text-gray-800 bg-white p-3 rounded block overflow-x-auto">
                          1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                        </code>
                        <p className="text-xs text-gray-600 mt-2">
                          (This is actually Satoshi Nakamoto's address from the Genesis Block!)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 rounded-xl p-6 border-2 border-cyan-400">
                  <div className="flex items-start gap-4">
                    <Target className="w-10 h-10 text-blue-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-3">The Journey: Private Key → Public Key → Address</h5>
                      <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-4">
                        <div className="bg-purple-100 rounded-xl p-4 text-center flex-1">
                          <div className="text-sm font-bold text-purple-900 mb-1">Private Key</div>
                          <div className="text-xs text-gray-700">Secret (never share)</div>
                        </div>
                        <ArrowRight className="w-8 h-8 text-gray-600 hidden md:block" />
                        <div className="text-2xl md:hidden">↓</div>
                        <div className="bg-blue-100 rounded-xl p-4 text-center flex-1">
                          <div className="text-sm font-bold text-blue-900 mb-1">Public Key</div>
                          <div className="text-xs text-gray-700">Can share (but typically don't)</div>
                        </div>
                        <ArrowRight className="w-8 h-8 text-gray-600 hidden md:block" />
                        <div className="text-2xl md:hidden">↓</div>
                        <div className="bg-green-100 rounded-xl p-4 text-center flex-1">
                          <div className="text-sm font-bold text-green-900 mb-1">Address</div>
                          <div className="text-xs text-gray-700">Share publicly to receive funds</div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Each step is <strong>one-way</strong>: you can't go backwards from address to public key, or from
                        public key to private key.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HD Wallets */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Wallet className="w-8 h-8 text-indigo-600" />
                Hierarchical Deterministic (HD) Wallets: One Seed, Infinite Keys
              </h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Modern cryptocurrency wallets use a clever system called <strong>HD (Hierarchical Deterministic) Wallets</strong>.
                  Instead of generating random keys individually, they create an entire <strong>tree of key pairs</strong> from
                  a single starting point called a <strong>seed phrase</strong>.
                </p>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Seed Phrase (Mnemonic)</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you create a new HD wallet, it generates a <strong>12 or 24-word phrase</strong> (called a mnemonic).
                    This phrase is a human-readable representation of a large random number that serves as the "master seed."
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-300">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Example 12-Word Seed Phrase:</strong>
                    </p>
                    <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-800 grid grid-cols-2 md:grid-cols-3 gap-2">
                      <span>1. witch</span>
                      <span>2. collapse</span>
                      <span>3. practice</span>
                      <span>4. feed</span>
                      <span>5. shame</span>
                      <span>6. open</span>
                      <span>7. despair</span>
                      <span>8. creek</span>
                      <span>9. road</span>
                      <span>10. again</span>
                      <span>11. ice</span>
                      <span>12. least</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-800 font-bold mb-1">🚨 CRITICAL SECURITY WARNING:</p>
                        <p className="text-sm text-gray-700">
                          Anyone who has your seed phrase can recreate ALL of your private keys and steal ALL of your funds.
                          Never share it, never take a digital photo of it, never store it on a computer. Write it on paper
                          and keep it in a secure location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">How HD Wallets Generate Keys</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Master Seed → Master Key</h5>
                        <p className="text-gray-700 text-sm">
                          The 12/24 words are converted into a 512-bit seed, which generates a "master private key" and
                          "master public key."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Hierarchical Derivation</h5>
                        <p className="text-gray-700 text-sm">
                          From the master key, the wallet can mathematically derive billions of "child" key pairs using a
                          deterministic algorithm (BIP-32 standard).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Infinite Addresses</h5>
                        <p className="text-gray-700 text-sm">
                          Each time you click "Receive" in your wallet, it generates a new address from the next child key.
                          But all addresses are recoverable from the original seed phrase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-6 border-2 border-emerald-400">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-3">Why HD Wallets Are Better</h5>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm"><strong>Privacy:</strong> Generate a new address for each transaction (harder to track)</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm"><strong>Backup:</strong> Only need to backup 12/24 words once, not every new key</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm"><strong>Recovery:</strong> Restore entire wallet on any compatible device with just the seed phrase</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm"><strong>Organization:</strong> Can create separate "accounts" from the same seed (personal, business, etc.)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border-2 border-indigo-400">
              <div className="flex items-start gap-6">
                <Target className="w-10 h-10 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways from Part III</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Public Key:</strong> Like a mailbox slot—anyone can use it to send you encrypted messages
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Private Key:</strong> Like the mailbox key—only you can use it to decrypt messages and prove ownership
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Key Generation:</strong> Private key → Public key → Address (each step is one-way and irreversible)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>HD Wallets:</strong> Generate infinite key pairs from a single 12/24-word seed phrase
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Security:</strong> Protect your private key/seed phrase at all costs—they control your funds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART IV: REAL-WORLD EXAMPLES FROM CRYPTOCURRENCIES */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-amber-600 to-orange-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part IV: Real-World Cryptocurrency Examples
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-amber-600"></div>
            </div>

            {/* Bitcoin's ECDSA */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Coins className="w-8 h-8 text-amber-600" />
                Bitcoin's Digital Signature Algorithm (ECDSA)
              </h3>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-300 mb-6">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Bitcoin uses <strong>ECDSA (Elliptic Curve Digital Signature Algorithm)</strong> with the secp256k1 curve.
                  Let's see how it works in a real Bitcoin transaction:
                </p>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Scenario: Alice Sends 1 BTC to Bob</h4>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                      <div className="bg-orange-50 rounded-xl p-5 flex-1 border-l-4 border-orange-600">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">Alice Creates Transaction</h5>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Alice's wallet creates a transaction that says: "Send 1 BTC from address <code className="bg-white px-2 py-1 rounded text-xs">1Alice...</code>
                          to address <code className="bg-white px-2 py-1 rounded text-xs">1Bob...</code>"
                        </p>
                        <div className="bg-white rounded-lg p-3 text-xs text-gray-600">
                          This transaction includes inputs (where the BTC is coming from) and outputs (where it's going).
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                      <div className="bg-amber-50 rounded-xl p-5 flex-1 border-l-4 border-amber-600">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">Hash the Transaction</h5>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          The transaction data is hashed using SHA-256, creating a unique fingerprint of the transaction.
                        </p>
                        <code className="bg-white p-3 rounded block overflow-x-auto text-xs font-mono text-gray-800">
                          3a7bd3e2... (transaction hash)
                        </code>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                      <div className="bg-yellow-50 rounded-xl p-5 flex-1 border-l-4 border-yellow-600">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">Sign with Private Key</h5>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Alice's wallet uses her <strong>private key</strong> to create a digital signature of the transaction hash.
                          This proves that Alice (the owner of the private key) authorized this transaction.
                        </p>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-700 mb-2"><strong>Signature Components:</strong></p>
                          <div className="space-y-1 text-xs font-mono text-gray-600">
                            <div>r = 6b7a2f8c... (first part)</div>
                            <div>s = 9d4e1b3a... (second part)</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                      <div className="bg-green-50 rounded-xl p-5 flex-1 border-l-4 border-green-600">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">Broadcast to Network</h5>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          The transaction (with signature) is broadcast to the Bitcoin network. Thousands of nodes receive it.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                      <div className="bg-blue-50 rounded-xl p-5 flex-1 border-l-4 border-blue-600">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">Verification by Nodes</h5>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Each node verifies the signature using Alice's <strong>public key</strong> (derived from her address).
                          They check:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Does the signature match the transaction hash?
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Was it signed by the private key corresponding to Alice's address?
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Does Alice have sufficient balance?
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">6</div>
                      <div className="bg-purple-50 rounded-xl p-5 flex-1 border-l-4 border-purple-600">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">Miners Include in Block</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          If verification passes, miners include the transaction in a block. Once the block is mined and added
                          to the blockchain, the transaction is confirmed. Bob now has 1 BTC!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 border-2 border-orange-400">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-10 h-10 text-orange-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-2">Why This Is Secure</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Without Alice's private key, no one can create a valid signature for her address. Even if someone
                        intercepts the transaction, they can't modify it (any change would invalidate the signature) or create
                        a new transaction from her address. The signature proves both <strong>authenticity</strong> (Alice
                        authorized it) and <strong>integrity</strong> (it hasn't been tampered with).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Wallets */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <HardDrive className="w-8 h-8 text-amber-600" />
                Hardware Wallets: Maximum Security
              </h3>

              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl">🔐</div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      A <strong>hardware wallet</strong> is a physical device (like a USB stick) that stores your private keys
                      in a secure chip, completely isolated from the internet and your computer. Popular examples include
                      Ledger Nano S/X and Trezor.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-green-600" />
                      How It Works
                    </h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-800">1</span>
                        </div>
                        <p>Private keys are generated and stored <strong>inside</strong> the secure chip</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-800">2</span>
                        </div>
                        <p>Keys <strong>never leave</strong> the device, even when signing transactions</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-800">3</span>
                        </div>
                        <p>Your computer sends unsigned transactions to the device</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-800">4</span>
                        </div>
                        <p>Device signs transactions internally and returns only the signature</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-800">5</span>
                        </div>
                        <p>You physically confirm each transaction on the device screen</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-blue-600" />
                      Security Benefits
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="font-bold text-blue-900 text-sm mb-1">🛡️ Malware Protection</p>
                        <p className="text-xs text-gray-700">
                          Even if your computer has keyloggers or malware, they can't access your private keys
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="font-bold text-blue-900 text-sm mb-1">👀 Transaction Verification</p>
                        <p className="text-xs text-gray-700">
                          You see and approve each transaction on the device screen before signing
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="font-bold text-blue-900 text-sm mb-1">🔒 PIN Protection</p>
                        <p className="text-xs text-gray-700">
                          Device is locked with a PIN. Too many wrong attempts = device wipes itself
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="font-bold text-blue-900 text-sm mb-1">📝 Seed Backup</p>
                        <p className="text-xs text-gray-700">
                          Still uses 12/24-word seed phrase for recovery if device is lost or broken
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl p-6 border-2 border-gray-400">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-10 h-10 text-gray-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-2">When to Use Hardware Wallets</h5>
                      <p className="text-gray-700 text-sm mb-3">
                        Hardware wallets are essential for anyone holding significant cryptocurrency value ($1,000+). They cost
                        $50-150 but provide the highest security available for personal custody. Think of them as a safe for
                        your digital assets.
                      </p>
                      <p className="text-gray-600 text-xs italic">
                        Note: Software wallets (mobile/desktop apps) are fine for small amounts you use regularly, but hardware
                        wallets should hold your long-term savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multisig and Cold Storage */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Multisig */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Multi-Signature Wallets</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    A <strong>multisig wallet</strong> requires multiple private keys to authorize a transaction. Common
                    configurations:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2">2-of-3 Multisig</h5>
                      <p className="text-sm text-gray-700">
                        3 people hold keys. Any 2 must sign to move funds. Good for partnerships or shared company funds.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2">3-of-5 Multisig</h5>
                      <p className="text-sm text-gray-700">
                        5 board members hold keys. Any 3 must approve. Provides redundancy if 2 keys are lost.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-100 rounded-lg p-4">
                    <p className="text-sm text-gray-800">
                      <strong>Use Cases:</strong> Corporate treasuries, joint accounts, estate planning, preventing single
                      points of failure
                    </p>
                  </div>
                </div>

                {/* Cold Storage */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                      <CloudOff className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Cold Storage</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Cold storage</strong> means keeping private keys completely offline, never connected to the internet.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <HardDrive className="w-5 h-5 text-cyan-600" />
                        Hardware Wallets (Cold)
                      </h5>
                      <p className="text-sm text-gray-700">
                        Only connected briefly to sign transactions, then disconnected
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-cyan-600" />
                        Paper Wallets
                      </h5>
                      <p className="text-sm text-gray-700">
                        Private keys printed on paper, never digital. Secure but inconvenient to use
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-cyan-600" />
                        Air-Gapped Computers
                      </h5>
                      <p className="text-sm text-gray-700">
                        Dedicated computer never connected to internet, used only for signing
                      </p>
                    </div>
                  </div>

                  <div className="bg-cyan-100 rounded-lg p-4">
                    <p className="text-sm text-gray-800">
                      <strong>Best Practice:</strong> Keep 90% of funds in cold storage, 10% in hot wallet for daily use
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-400">
              <div className="flex items-start gap-6">
                <Target className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways from Part IV</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Bitcoin ECDSA:</strong> Every transaction is signed with your private key and verified by the network using your public key
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Hardware Wallets:</strong> Provide maximum security by keeping private keys isolated on a dedicated device
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Multisig:</strong> Requires multiple signatures for transactions, eliminating single points of failure
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Cold Storage:</strong> Keeping private keys completely offline provides the highest level of protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART V: PRACTICAL SECURITY IN THE CRYPTOCURRENCY ERA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-emerald-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part V: Practical Security Best Practices
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-600 to-green-600"></div>
            </div>

            {/* Key Management Best Practices */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-600" />
                Key Management: The Foundation of Crypto Security
              </h3>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300 mb-6">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Your private keys are the <strong>only thing</strong> standing between you and losing all your cryptocurrency.
                  Unlike traditional banking, there's no "Forgot Password" button or customer service to call. Here's how to
                  protect them:
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Seed Phrase Storage</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Your 12/24-word seed phrase is the master key to all your funds. Treat it like gold.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          DO These Things
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Write it on paper or engrave on metal (fire/water resistant)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Store in a safe or safety deposit box</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Consider splitting between 2-3 secure locations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Use a passphrase as an additional 25th word (optional but recommended)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Tell a trusted person where to find it in case of emergency</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-50 rounded-lg p-4">
                        <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                          <Ban className="w-5 h-5" />
                          NEVER Do These Things
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span>Store digitally (no photos, no computer files, no cloud storage)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span>Email or text it to yourself</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span>Share it with anyone (even family, unless necessary)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span>Enter it on websites claiming to "validate" your wallet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span>Store all copies in one location (fire/theft risk)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-600">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lock className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Password & Device Security</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Even with hardware wallets, your devices need protection.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <h5 className="font-bold text-emerald-900 mb-2">🔐 Strong Passwords</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Use a password manager (LastPass, 1Password, Bitwarden) to generate and store unique, complex
                          passwords for every crypto-related service.
                        </p>
                        <div className="bg-white rounded-lg p-3 text-xs text-gray-600">
                          Example: <code className="font-mono">K9#mP$xL2@vN4qR8</code> (not this one—generate your own!)
                        </div>
                      </div>

                      <div className="bg-emerald-50 rounded-lg p-4">
                        <h5 className="font-bold text-emerald-900 mb-2">📱 Two-Factor Authentication (2FA)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Enable 2FA on all exchanges and wallets. Use authenticator apps (Google Authenticator, Authy), NOT SMS.
                        </p>
                        <div className="bg-yellow-50 rounded-lg p-3 text-xs text-gray-700 border-l-4 border-yellow-500">
                          <strong>Warning:</strong> SMS can be intercepted via SIM-swapping attacks. Authenticator apps are safer.
                        </div>
                      </div>

                      <div className="bg-emerald-50 rounded-lg p-4">
                        <h5 className="font-bold text-emerald-900 mb-2">💻 Device Hygiene</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Keep operating system and wallet software updated</li>
                          <li>• Use antivirus/anti-malware software</li>
                          <li>• Don't access crypto wallets on public Wi-Fi</li>
                          <li>• Consider a dedicated computer/phone for crypto only</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Engineering & Scams */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-red-600" />
                Defending Against Social Engineering & Scams
              </h3>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Hackers don't need to break cryptography—they just trick you into giving them access. Be aware of these
                  common attack vectors:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Phishing Attacks</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Fake emails/websites pretending to be legitimate services (exchanges, wallet providers).
                    </p>
                    <div className="bg-red-50 rounded-lg p-3 text-sm text-gray-700 mb-3">
                      <strong>Example:</strong> "Your Coinbase account has been locked. Click here to verify your identity."
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                      <p className="text-xs font-bold text-green-900 mb-1">How to Protect:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Always type URLs manually, never click links in emails</li>
                        <li>• Check URL carefully (coinbase.com vs coinbas.com)</li>
                        <li>• Bookmark legitimate sites</li>
                        <li>• Legitimate services never ask for your seed phrase</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">SIM Swapping</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Attacker convinces your phone carrier to transfer your number to their SIM card, intercepting SMS codes.
                    </p>
                    <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700 mb-3">
                      <strong>Example:</strong> They call customer service pretending to be you, claiming they lost their phone.
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                      <p className="text-xs font-bold text-green-900 mb-1">How to Protect:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Use authenticator apps instead of SMS 2FA</li>
                        <li>• Add a PIN/password to your carrier account</li>
                        <li>• Use a Google Voice number for crypto accounts</li>
                        <li>• Contact carrier to restrict SIM changes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-amber-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Impersonation Scams</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Scammers pose as customer support, influencers, or project founders on social media.
                    </p>
                    <div className="bg-amber-50 rounded-lg p-3 text-sm text-gray-700 mb-3">
                      <strong>Example:</strong> Twitter DM: "I'm Elon Musk. Send 1 BTC, get 2 BTC back!"
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                      <p className="text-xs font-bold text-green-900 mb-1">How to Protect:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• No legitimate company DMs you asking for funds</li>
                        <li>• There are no "giveaways" from real crypto companies</li>
                        <li>• Verify accounts (blue checkmarks, follower counts)</li>
                        <li>• Never share private keys or seed phrases</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Fake Wallet Apps</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Malicious wallet apps in app stores that steal your seed phrase when you enter it.
                    </p>
                    <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700 mb-3">
                      <strong>Example:</strong> App looks identical to MetaMask but is actually malware.
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                      <p className="text-xs font-bold text-green-900 mb-1">How to Protect:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Only download from official sources (wallet website)</li>
                        <li>• Check developer name and reviews carefully</li>
                        <li>• Verify download counts (official apps have millions)</li>
                        <li>• Use hardware wallets for large amounts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6 border-2 border-red-400">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-2">Golden Rule of Crypto Security</h5>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        <strong>If it sounds too good to be true, it is.</strong> No one is giving away free crypto. No one
                        can "double your investment overnight." Legitimate projects don't DM you first. When in doubt, assume
                        it's a scam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recovery & Inheritance Planning */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-green-600" />
                Recovery & Inheritance Planning
              </h3>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Cryptocurrency introduces unique challenges for estate planning. If you pass away without proper planning,
                  your crypto may be lost forever. Here's how to ensure your assets can be recovered:
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Recovery Strategies</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2">Letter of Instructions</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            Write clear instructions for a trusted executor (spouse, family member, lawyer):
                          </p>
                          <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                            <ul className="space-y-1">
                              <li>• Where seed phrases are stored (safe, deposit box)</li>
                              <li>• Which wallets/exchanges you use</li>
                              <li>• How to access hardware wallets (PIN locations)</li>
                              <li>• Trusted crypto expert who can help them</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2">Shamir's Secret Sharing</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            Split your seed phrase into multiple parts (e.g., 3 shares where any 2 can recover the seed):
                          </p>
                          <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-700">
                            Give Share 1 to spouse, Share 2 to lawyer, Share 3 to trusted friend. Any two can collaborate
                            to recover funds, but no single person has full access.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2">Crypto-Specific Estate Services</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            Services like Casa, Unchained Capital offer institutional-grade inheritance solutions:
                          </p>
                          <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                            Multisig wallets where your heirs automatically gain access after your death, verified through
                            legal channels.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2">Time-Lock Smart Contracts</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            Advanced option: Use smart contracts that release funds to heirs if you don't "check in" for a
                            specified period (e.g., 1 year):
                          </p>
                          <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                            Requires technical knowledge but provides automatic, trustless inheritance without relying on
                            any third party.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 border-2 border-blue-400">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-10 h-10 text-blue-600 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-xl mb-2">Important Considerations</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            <span>Don't store seed phrases in your will (wills become public record when you die)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            <span>Update instructions whenever you change wallets or storage methods</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            <span>Test your recovery process with a small amount first</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            <span>Consider tax implications in your jurisdiction</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 border-2 border-green-400">
              <div className="flex items-start gap-6">
                <Target className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways from Part V</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Seed Phrase Protection:</strong> Write on paper, store in safe, never digital, never share
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Device Security:</strong> Strong passwords, 2FA with authenticator apps, updated software, antivirus
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Scam Awareness:</strong> Phishing, SIM swapping, impersonation, fake apps—always verify legitimacy
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Recovery Planning:</strong> Letter of instructions, secret sharing, estate services, or time-lock contracts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART VI: THE FUTURE OF CRYPTOGRAPHIC SECURITY */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <h2 className="text-5xl font-bold text-gray-900 mx-6">
                Part VI: The Future of Cryptographic Security
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-purple-600"></div>
            </div>

            {/* Quantum Computing Threat */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Atom className="w-8 h-8 text-purple-600" />
                The Quantum Computing Challenge
              </h3>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl">⚛️</div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-700 leading-relaxed mb-4">
                      Quantum computers leverage quantum mechanics to perform certain calculations exponentially faster than
                      classical computers. This poses a serious threat to current cryptographic systems.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">How Quantum Computers Break Encryption</h4>

                  <div className="space-y-5">
                    <div className="bg-purple-50 rounded-xl p-5 border-l-4 border-purple-600">
                      <h5 className="font-bold text-purple-900 text-lg mb-3">Shor's Algorithm (1994)</h5>
                      <p className="text-gray-700 text-sm mb-3">
                        Mathematician Peter Shor proved that quantum computers can factor large numbers exponentially faster
                        than classical computers. This breaks:
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <div>
                              <strong>RSA encryption</strong> (used in HTTPS, email, file encryption)
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <div>
                              <strong>Elliptic Curve Cryptography</strong> (used in Bitcoin, Ethereum, most cryptocurrencies)
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-600">
                      <h5 className="font-bold text-pink-900 text-lg mb-3">Current State (2025)</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <h6 className="font-bold text-gray-900 mb-2 text-sm">🔬 Where We Are</h6>
                          <ul className="text-xs text-gray-700 space-y-1">
                            <li>• IBM, Google have ~1,000 qubit systems</li>
                            <li>• High error rates (not yet "useful")</li>
                            <li>• Millions of qubits needed to break Bitcoin</li>
                            <li>• Experts estimate: 10-30 years away</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h6 className="font-bold text-gray-900 mb-2 text-sm">⚠️ The Threat Timeline</h6>
                          <p className="text-xs text-gray-700 mb-2">
                            Even if quantum computers are decades away, we need to act <strong>now</strong> because:
                          </p>
                          <ul className="text-xs text-gray-700 space-y-1">
                            <li>• "Harvest now, decrypt later" attacks</li>
                            <li>• Transition takes 10+ years</li>
                            <li>• Long-term secrets need protection today</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-400">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-10 h-10 text-purple-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xl mb-2">What This Means for Cryptocurrency</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        If a powerful quantum computer is built, an attacker could:
                      </p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 font-bold">1.</span>
                          <span>Derive private keys from public keys (steal funds from addresses that have been used)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 font-bold">2.</span>
                          <span>Forge digital signatures (create unauthorized transactions)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 font-bold">3.</span>
                          <span>Potentially compromise the entire blockchain network</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantum-Resistant Solutions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-600" />
                Post-Quantum Cryptography: The Solution
              </h3>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Cryptographers are developing new algorithms that are secure even against quantum computers. In 2024, NIST
                  (National Institute of Standards and Technology) standardized the first quantum-resistant algorithms.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <SparklesIcon className="w-6 h-6 text-green-600" />
                      Lattice-Based Cryptography
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Based on the difficulty of solving mathematical problems in high-dimensional lattices. Even quantum
                      computers can't solve these efficiently.
                    </p>
                    <div className="bg-green-50 rounded-lg p-3 text-xs text-gray-700">
                      <strong>Example:</strong> CRYSTALS-Kyber (encryption), CRYSTALS-Dilithium (signatures) — standardized by NIST in 2024
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Hash className="w-6 h-6 text-emerald-600" />
                      Hash-Based Signatures
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Build signatures using only hash functions (like SHA-256), which are believed to be quantum-resistant.
                    </p>
                    <div className="bg-emerald-50 rounded-lg p-3 text-xs text-gray-700">
                      <strong>Pros:</strong> Provably secure, simple concept<br/>
                      <strong>Cons:</strong> Large signature sizes, stateful (complex to manage)
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-teal-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Code2 className="w-6 h-6 text-teal-600" />
                      Code-Based Cryptography
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Based on the difficulty of decoding random linear codes. Has been studied for decades.
                    </p>
                    <div className="bg-teal-50 rounded-lg p-3 text-xs text-gray-700">
                      <strong>Example:</strong> Classic McEliece — one of the oldest post-quantum proposals, very large keys
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-cyan-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-6 h-6 text-cyan-600" />
                      Multivariate Cryptography
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Based on solving systems of multivariate polynomial equations over finite fields.
                    </p>
                    <div className="bg-cyan-50 rounded-lg p-3 text-xs text-gray-700">
                      <strong>Status:</strong> Some schemes broken, others still being researched. Less mature than lattice-based.
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Blockchain Transition to Quantum Resistance</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Research Phase (Now - 2026)</h5>
                        <p className="text-sm text-gray-700">
                          Crypto projects experimenting with quantum-resistant signature schemes. NIST standards allow implementation testing.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Hard Fork Proposals (2027-2030)</h5>
                        <p className="text-sm text-gray-700">
                          Major blockchains (Bitcoin, Ethereum) will likely propose upgrades to quantum-resistant algorithms.
                          Community debate and testing period.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Migration Period (2030-2035)</h5>
                        <p className="text-sm text-gray-700">
                          Gradual transition. Old addresses remain valid but users encouraged to move funds to quantum-safe addresses.
                          Hybrid period where both algorithms coexist.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">Full Quantum Resistance (2035+)</h5>
                        <p className="text-sm text-gray-700">
                          All new transactions use quantum-resistant signatures. Old ECDSA addresses deprecated (can still withdraw but not recommended).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero-Knowledge Proofs & Privacy */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-indigo-600" />
                Zero-Knowledge Proofs: Privacy Meets Security
              </h3>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Zero-Knowledge Proofs (ZKPs)</strong> allow you to prove you know something without revealing the
                  information itself. This is revolutionary for privacy and scaling.
                </p>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Simple Analogy: The Cave</h4>
                  <div className="flex items-start gap-6">
                    <div className="text-6xl flex-shrink-0">🗿</div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Imagine a circular cave with a door in the middle that requires a password. You want to prove you know
                        the password without revealing it:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-indigo-50 rounded-lg p-4 text-sm text-gray-700">
                          <strong>1.</strong> You enter the cave and go randomly left or right<br/>
                          <strong>2.</strong> The verifier waits outside and then shouts "Come out from the left!" or "Come out from the right!"<br/>
                          <strong>3.</strong> If you know the password, you can always exit from the requested side (by using the door if needed)<br/>
                          <strong>4.</strong> Repeat many times. If you succeed every time, you must know the password—but the password was never revealed!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Privacy Applications</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <strong>Zcash & Monero:</strong> Hide transaction amounts and sender/receiver identities while still
                        proving transactions are valid
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <strong>Anonymous Voting:</strong> Prove you're eligible to vote without revealing your identity or vote
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <strong>Compliant Privacy:</strong> Prove you passed KYC without revealing personal information to every dApp
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-purple-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Scaling Applications</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <strong>zk-Rollups:</strong> Process thousands of transactions off-chain, submit single ZK proof on-chain
                        (Ethereum scaling)
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <strong>StarkNet & zkSync:</strong> Layer 2 networks that use ZKPs to inherit Ethereum security while
                        achieving 10,000+ TPS
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <strong>Succinct Proofs:</strong> Compress gigabytes of blockchain data into kilobyte-sized proofs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Evolution of Wallet Technology */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Wallet className="w-8 h-8 text-amber-600" />
                The Future of Wallet Technology
              </h3>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Wallets are evolving from simple key storage to sophisticated, user-friendly security systems:
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-amber-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Smartphone className="w-6 h-6 text-amber-600" />
                      Social Recovery Wallets
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Instead of memorizing seed phrases, designate "guardians" (friends, family, services) who can help you
                      recover your wallet.
                    </p>
                    <div className="bg-amber-50 rounded-lg p-4 text-sm text-gray-700">
                      <strong>Example:</strong> Argent wallet — if you lose access, 3 of 5 guardians approve a recovery request
                      to restore your wallet to a new device. No seed phrase needed.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Fingerprint className="w-6 h-6 text-orange-600" />
                      Biometric Authentication
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Hardware wallets integrating fingerprint scanners, face recognition, or iris scanning for frictionless security.
                    </p>
                    <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-700">
                      <strong>Future:</strong> Your phone's biometrics unlock the hardware security chip, which holds keys.
                      Convenient yet secure—no PINs to remember.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-6 h-6 text-red-600" />
                      Account Abstraction (ERC-4337)
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Smart contract wallets that behave like traditional apps: gas-less transactions, spending limits, auto-payments, etc.
                    </p>
                    <div className="bg-red-50 rounded-lg p-4 text-sm text-gray-700">
                      <strong>Benefits:</strong> Pay gas fees in any token, batch transactions, programmable security rules,
                      session keys for dApps
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-pink-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Brain className="w-6 h-6 text-pink-600" />
                      AI-Powered Security
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Machine learning models that detect suspicious transactions and warn you before signing.
                    </p>
                    <div className="bg-pink-50 rounded-lg p-4 text-sm text-gray-700">
                      <strong>Example:</strong> Wallet detects you're about to interact with a contract flagged as malicious
                      or send funds to a known scam address. AI assistant explains the risk in plain English.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-400">
              <div className="flex items-start gap-6">
                <Target className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways from Part VI</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Quantum Threat:</strong> Quantum computers could break current encryption in 10-30 years—preparation starts now
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Post-Quantum Crypto:</strong> Lattice-based and hash-based algorithms provide quantum resistance (NIST standardized 2024)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Zero-Knowledge Proofs:</strong> Enable privacy and scaling—prove knowledge without revealing information
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Wallet Evolution:</strong> Social recovery, biometrics, account abstraction, AI security make crypto more user-friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* Course Completion */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-16">
            <Award className="w-24 h-24 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">
              🎉 Security Foundations Course Complete!
            </h3>
            <p className="text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
              You've mastered all six parts covering encryption, digital security, public/private keys, real-world implementations,
              practical security, and the future of cryptographic systems!
            </p>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Explored: <strong>Encryption Evolution</strong>, <strong>CIA Triad</strong>, <strong>Key Management</strong>,
              <strong> Hardware Wallets</strong>, <strong>Scam Protection</strong>, <strong>Quantum Resistance</strong>, and <strong>ZK Proofs</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/learn"
                className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all text-xl shadow-xl"
              >
                Explore More Courses
              </Link>
              <Link
                href="/playground"
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all text-xl"
              >
                Try Interactive Tools
              </Link>
            </div>
          </div>

        </article>
      </div>
    );
  }

  // Hashing and Integrity course content - COMPLETE VERSION
  if (courseId === "hashing") {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 border-b-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
            <Link
              href="/learn"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-xl font-medium"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Courses
            </Link>

            <div className="flex items-start gap-8">
              <div className="text-7xl">{course.icon}</div>
              <div className="flex-1">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                  {course.title}
                </h1>
                <p className="text-3xl text-gray-700 leading-relaxed mb-8">
                  Discover how cryptographic hash functions create digital fingerprints that ensure data integrity across insurance, taxation, and identity verification systems.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-xl">
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
        <article className="max-w-7xl mx-auto px-8 sm:px-12 py-16">

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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 mb-12 border-2 border-purple-300">
              <div className="flex items-start gap-6">
                <div className="text-6xl">🧬</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is a Hash Function? The Concept of Digital DNA</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Imagine you have a machine that can take <strong className="text-purple-600">anything</strong>—a single word,
                    an entire book, a movie file, or even all of Wikipedia—and produce a <strong className="text-purple-600">unique fingerprint</strong> that's
                    always exactly the same size. No matter what you put in, the fingerprint comes out as a string of exactly
                    <strong className="text-purple-600"> 64 characters</strong> (for SHA-256).
                  </p>
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-800 mb-4"><strong>The Remarkable Properties:</strong></p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">✓</div>
                        <div className="flex-1">
                          <p className="text-gray-700"><strong>Change Detection:</strong> Change even a single comma in a thousand-page
                          book, and you get a completely different fingerprint.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">✓</div>
                        <div className="flex-1">
                          <p className="text-gray-700"><strong>Consistency:</strong> Put the exact same book through the machine a million
                          times, you get the identical fingerprint every time.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">✓</div>
                        <div className="flex-1">
                          <p className="text-gray-700"><strong>One-Way Function:</strong> It's like a blender that turns fruits into
                          smoothies—you can easily blend apples into apple juice, but you can't take apple juice and reconstruct the original apples.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
                    <p className="text-lg text-gray-700 leading-relaxed">
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

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🔧 The SHA-256 Process:</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Padding</h5>
                        <p className="text-gray-700">
                          Take your input data and pad it to ensure it's a multiple of 512 bits. This padding follows a specific pattern
                          that includes the original message length, ensuring different-length messages can't produce the same padded result.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">64 Rounds of Processing</h5>
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
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Output Generation</h5>
                        <p className="text-gray-700">
                          The final output is 256 bits, typically displayed as 64 hexadecimal characters. This is your digital fingerprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avalanche Effect Examples */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-300">
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

              <div className="grid md:grid-cols-2 gap-6">
                {/* Determinism */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
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
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
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
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300">
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
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300">
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
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 mb-12 border-2 border-red-300">
              <div className="flex items-start gap-6">
                <div className="text-6xl">📄</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Fundamental Problem of Digital Document Integrity</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">📝 Physical World</h4>
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
                      <h4 className="text-lg font-bold text-gray-900 mb-3">💻 Digital World</h4>
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
                    <p className="text-lg text-gray-700 leading-relaxed">
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

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">📋 Real-World Scenario: Signing an Important Contract</h4>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-3">Calculate the Hash</h5>
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
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-3">Publish the Hash</h5>
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
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-3">Verification When Disputes Arise</h5>
                        <p className="text-gray-700 mb-4">
                          Two years later, a dispute arises. The other party claims the contract says something different.
                          They present a document with subtle changes:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code2 className="w-7 h-7 text-purple-600" />
                  Universal Verification: Anyone, Anywhere, Anytime
                </h4>

                <p className="text-gray-700 mb-6">
                  The beauty of this system is its simplicity and accessibility. Anyone can verify document integrity
                  without special tools or expertise.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
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

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8 border-2 border-indigo-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🔗 How Blockchain Timestamping Works</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Hash Your Document Locally</h5>
                        <p className="text-gray-700">
                          The document <strong>never leaves your computer</strong>. You calculate its hash locally,
                          maintaining complete privacy and confidentiality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Submit Only the Hash</h5>
                        <p className="text-gray-700">
                          You submit <em>only the hash</em> to a timestamping service, which aggregates multiple hashes
                          and embeds them in a Bitcoin transaction.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Blockchain Confirmation</h5>
                        <p className="text-gray-700">
                          Once the transaction is confirmed in a Bitcoin block, your document's existence at that time
                          is <strong>cryptographically proven</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Anyone Can Verify</h5>
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
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🌍 Real-World Applications of Blockchain Timestamping</h4>

                <div className="grid md:grid-cols-2 gap-6">
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
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">📰</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-blue-900 mb-2">2016 INVESTIGATION</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">The Panama Papers</h4>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">💊</div>
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
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-300">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">⚠️</div>
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

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 mb-8 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">📱 Modern Insurance Claims Flow with Hash Verification</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Photo Submission</h5>
                        <p className="text-gray-700">
                          When a policyholder submits a claim through a mobile app, each photo is <strong>immediately hashed</strong>,
                          and the hash is stored with a timestamp.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Metadata Verification</h5>
                        <p className="text-gray-700">
                          EXIF data (metadata containing time, location, camera information) is preserved and <strong>separately hashed</strong>.
                          This creates a chain of evidence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Multi-Layer Protection</h5>
                        <p className="text-gray-700">
                          Advanced systems hash photos at <strong>multiple resolutions</strong>, preventing claims that processing
                          or compression altered critical details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Investigation & Verification</h5>
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
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BarChart3 className="w-7 h-7 text-emerald-600" />
                  Real-World Implementation Results
                </h4>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-8 border-2 border-purple-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">✈️ Flight Delay Insurance Example</h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🎫</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Step 1: Policy Purchase</h5>
                        <p className="text-gray-700">
                          When you purchase the policy, the smart contract records the <strong>hash of your booking confirmation</strong>,
                          proving you have a ticket for a specific flight.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📡</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Step 2: Oracle Connection</h5>
                        <p className="text-gray-700">
                          The contract connects to flight data oracles (trusted data sources) that provide
                          <strong> cryptographically signed flight status updates</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">⏱️</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Step 3: Delay Detection</h5>
                        <p className="text-gray-700">
                          When oracles report a delay exceeding the policy threshold, they provide the data along with
                          its <strong>hash and digital signature</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">💰</div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">Step 4: Automatic Payout</h5>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h5 className="text-lg font-bold text-gray-900 mb-3">Etherisc Platform</h5>
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

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-300">
                  <div className="text-4xl mb-4">🏢</div>
                  <h5 className="text-lg font-bold text-gray-900 mb-3">AXA Fizzy (Case Study)</h5>
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

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8 border-2 border-indigo-300">
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
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">🏥 Internal Compliance: Health Insurer Example</h4>

                <p className="text-gray-700 mb-6">
                  A major health insurer implemented a hash-based audit system where <strong>every database change</strong> generates a hash of:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 mb-8 border-2 border-blue-300">
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
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">⛓️</div>
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

                    <div className="grid md:grid-cols-2 gap-6">
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

          {/* Continue in next part due to length... */}

        </article>
      </div>
    );
  }

  // Placeholder for other courses
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <Link
          href="/learn"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-lg"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Courses
        </Link>

        <div className="text-center py-20">
          <div className="text-8xl mb-8">{course.icon}</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{course.title}</h1>
          <p className="text-2xl text-gray-600 mb-12">{course.description}</p>
          <div className="bg-blue-50 rounded-2xl p-12 max-w-2xl mx-auto border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</h2>
            <p className="text-lg text-gray-700">
              This course is being developed with comprehensive content from our educational materials.
              Check back soon for the full learning experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}