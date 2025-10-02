"use client";

import Link from "next/link";
import { getCourseById } from "@/data/courses";
import {
  ArrowLeft,
  Clock,
  BarChart,
  BookOpen,
  Code2,
  Scale,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Coins,
  Network,
  FileCode,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Globe,
  Lock,
  Unlock,
  Brain,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function SmartContractsCoursePage() {
  const course = getCourseById("smart-contracts");

  if (!course) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">Course Not Found</h1>
            <p className="mt-4 text-xl text-gray-600">
              The course you're looking for doesn't exist.
            </p>
            <Link
              href="/learn"
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-xl font-semibold text-white hover:from-blue-700 hover:to-purple-700"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      {/* Navigation */}
      <div className="container mx-auto max-w-7xl px-6">
        <Link
          href="/learn"
          className="inline-flex items-center text-xl text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="mr-2 h-6 w-6" />
          Back to Courses
        </Link>

        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-red-100 to-pink-100 text-red-900 text-xl font-semibold">
              {course.difficulty}
            </span>
            <span className="px-6 py-2 rounded-full bg-gray-100 text-gray-900 text-xl font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {course.duration}
            </span>
            <span className="px-6 py-2 rounded-full bg-blue-100 text-blue-900 text-xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Module {course.order}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
            {course.title}
          </h1>

          <p className="text-3xl text-gray-700 leading-relaxed max-w-5xl">
            {course.description}
          </p>
        </motion.div>

        {/* ============================================ */}
        {/* PART I: UNDERSTANDING SMART CONTRACTS */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold shadow-xl">
              I
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                Understanding Smart Contracts
              </h2>
              <p className="text-2xl text-gray-600">
                From Vending Machines to Code as Law
              </p>
            </div>
          </div>

          {/* Nick Szabo's Vision - Hero Card */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 mb-12 border-2 border-blue-200">
            <div className="flex items-start gap-6 mb-8">
              <Lightbulb className="w-16 h-16 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  The Vending Machine Analogy (1994)
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  Computer scientist <strong>Nick Szabo</strong> first coined the term "smart contract" in 1994,
                  using a <strong>vending machine</strong> as his foundational analogy.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-6">
                  <Coins className="w-10 h-10 text-blue-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Traditional Vending Machine</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <p className="text-xl text-gray-700 pt-1">You insert coins ($2)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <p className="text-xl text-gray-700 pt-1">You select a product (Coca-Cola)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <p className="text-xl text-gray-700 pt-1">Machine verifies payment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <p className="text-xl text-gray-700 pt-1">Machine dispenses product automatically</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <p className="text-xl text-gray-700 pt-1">Machine returns change if needed</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-lg text-gray-700 italic">
                    <strong>Key Insight:</strong> No human intermediary needed. The machine enforces the contract
                    between buyer and seller automatically.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-300">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-10 h-10 text-purple-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Blockchain Smart Contract</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <p className="text-xl text-gray-700 pt-1">You send cryptocurrency (0.05 ETH)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <p className="text-xl text-gray-700 pt-1">Smart contract verifies payment on blockchain</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <p className="text-xl text-gray-700 pt-1">Code checks conditions are met</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <p className="text-xl text-gray-700 pt-1">Contract executes automatically (transfer asset)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <p className="text-xl text-gray-700 pt-1">Transaction recorded immutably on blockchain</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <p className="text-lg text-gray-700 italic">
                    <strong>Evolution:</strong> Same principle, but executed by code on a decentralized network
                    with cryptographic guarantees and permanent records.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What is a Smart Contract? */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Target className="w-12 h-12 text-blue-600" />
              What is a Smart Contract?
            </h3>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-8">
              <p className="text-3xl font-bold mb-6">
                A smart contract is a self-executing program stored on a blockchain that automatically
                enforces the terms of an agreement when predetermined conditions are met.
              </p>
              <p className="text-2xl leading-relaxed">
                Unlike traditional contracts that rely on legal systems for enforcement, smart contracts
                are enforced by <strong>code</strong> and <strong>mathematics</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <FileCode className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">1. Code</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Written in programming languages like <strong>Solidity</strong> (Ethereum),
                  <strong>Rust</strong> (Solana), or <strong>Move</strong> (Aptos). The code defines
                  the rules and logic of the agreement.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <Network className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">2. State</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Maintains data on the blockchain (balances, ownership, status). State changes only
                  when transactions are executed and validated by the network.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg">
                <Zap className="w-12 h-12 text-teal-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">3. Execution</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Triggered by transactions. When conditions are met (e.g., payment received),
                  the contract executes automatically without human intervention.
                </p>
              </div>
            </div>
          </div>

          {/* Why Blockchain Enables Smart Contracts */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Rocket className="w-12 h-12 text-purple-600" />
              Why Blockchain Enables Smart Contracts
            </h3>

            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              Smart contracts existed conceptually since 1994, but blockchain technology provided the
              necessary infrastructure to make them <strong>practical</strong> and <strong>trustworthy</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-300">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-10 h-10 text-red-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Pre-Blockchain Era</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">No Decentralized Execution</p>
                      <p className="text-lg text-gray-700">
                        Required trusted central servers vulnerable to manipulation, downtime, or censorship.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">No Immutable Storage</p>
                      <p className="text-lg text-gray-700">
                        Contract code could be altered after deployment. No permanent audit trail.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Trust Required</p>
                      <p className="text-lg text-gray-700">
                        Parties still needed to trust the organization hosting the contract logic.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">No Native Digital Assets</p>
                      <p className="text-lg text-gray-700">
                        Difficult to transfer value programmatically without payment processors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Blockchain Era (2015+)</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Decentralized Execution</p>
                      <p className="text-lg text-gray-700">
                        Code runs on thousands of nodes. No single point of failure or control.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Immutable Code</p>
                      <p className="text-lg text-gray-700">
                        Once deployed, contract code cannot be changed. Every action is permanently recorded.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Trustless Execution</p>
                      <p className="text-lg text-gray-700">
                        Cryptographic verification ensures contracts execute exactly as programmed.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Native Cryptocurrency</p>
                      <p className="text-lg text-gray-700">
                        Built-in digital assets (ETH, SOL) enable instant, programmable value transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Spectrum of Smart Contracts */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <BarChart className="w-12 h-12 text-blue-600" />
              The Spectrum: From Simple to Complex
            </h3>

            <div className="space-y-8">
              {/* Level 1: Simple */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-8 border-green-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Simple Contracts</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      Basic token transfers, escrow arrangements, simple voting mechanisms.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-green-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: ERC-20 Token</p>
                        <p className="text-base text-gray-700">
                          Standardized token contract with functions like transfer(), balanceOf(), and approve().
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-green-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: Multi-Signature Wallet</p>
                        <p className="text-base text-gray-700">
                          Requires multiple approvals (e.g., 3 out of 5 signatures) before executing transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 2: Intermediate */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border-l-8 border-yellow-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Intermediate Contracts</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      DeFi protocols with lending, borrowing, staking, and basic automated market makers.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-yellow-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: Compound Finance</p>
                        <p className="text-base text-gray-700">
                          Algorithmic money market where users lend/borrow crypto with dynamic interest rates.
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-yellow-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: Uniswap V2</p>
                        <p className="text-base text-gray-700">
                          Automated market maker using constant product formula (x * y = k) for token swaps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 3: Complex */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-l-8 border-orange-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Complex Contracts</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      Advanced DeFi protocols with derivatives, synthetic assets, and cross-chain operations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-orange-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: MakerDAO</p>
                        <p className="text-base text-gray-700">
                          Decentralized stablecoin system with collateralized debt positions, liquidation mechanisms,
                          and governance voting.
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-orange-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: Aave</p>
                        <p className="text-base text-gray-700">
                          Multi-chain lending protocol with flash loans, rate switching, credit delegation,
                          and risk parameters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 4: Highly Complex */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-8 border-purple-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Highly Complex Contracts</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      Composable systems, DAOs, derivatives exchanges, and protocols with multiple interconnected contracts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-purple-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: Synthetix</p>
                        <p className="text-base text-gray-700">
                          Synthetic asset platform with staking, debt pools, oracle price feeds,
                          and perpetual futures trading.
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-purple-300">
                        <p className="text-lg font-semibold text-gray-900 mb-2">Example: Yearn Finance</p>
                        <p className="text-base text-gray-700">
                          Yield optimizer that automatically moves funds between protocols (Compound, Aave, Curve)
                          to maximize returns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part I</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  Smart contracts are <strong>self-executing programs</strong> that automate agreements without
                  intermediaries. Blockchain provides the <strong>decentralized infrastructure</strong> needed
                  to make Szabo's 1994 vision a reality.
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  From simple token transfers to complex DeFi ecosystems, smart contracts represent a fundamental
                  shift from "code running on servers" to <strong>"code as law"</strong> enforced by mathematics
                  and cryptography.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* PART II: HOW SMART CONTRACTS WORK */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white text-3xl font-bold shadow-xl">
              II
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                How Smart Contracts Work
              </h2>
              <p className="text-2xl text-gray-600">
                Lifecycle, Gas, Oracles, and Composability
              </p>
            </div>
          </div>

          {/* Smart Contract Lifecycle */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Rocket className="w-12 h-12 text-blue-600" />
              The Smart Contract Lifecycle
            </h3>

            <div className="space-y-6">
              {/* Step 1: Creation */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-8 border-blue-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Creation & Compilation</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      Developers write smart contracts in high-level languages like <strong>Solidity</strong>,
                      <strong>Vyper</strong>, or <strong>Rust</strong>. The code is then compiled into bytecode
                      that the blockchain virtual machine can execute.
                    </p>
                    <div className="bg-white rounded-xl p-6 border border-blue-300">
                      <p className="text-lg font-mono text-gray-800 mb-3">
                        <strong>Example: Simple Solidity Contract</strong>
                      </p>
                      <pre className="text-sm text-gray-700 bg-gray-50 p-4 rounded overflow-x-auto">
{`contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Deployment */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-8 border-purple-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Deployment</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      The compiled bytecode is deployed to the blockchain via a special transaction.
                      The contract is assigned a unique <strong>address</strong> (like 0x742d35Cc6634C0532925a3b844Bc454e4438f44e).
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-xl p-4 border border-purple-300">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Cost</p>
                        <p className="text-base text-gray-700">Deployer pays gas fees (can be $10-$1000+ depending on complexity and network)</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-purple-300">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Immutability</p>
                        <p className="text-base text-gray-700">Once deployed, code cannot be changed (unless upgradeable proxy pattern used)</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-purple-300">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Public</p>
                        <p className="text-base text-gray-700">Anyone can view the contract code and interact with public functions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Execution */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-8 border-green-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Execution & State Changes</h4>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      Users send transactions to call contract functions. The EVM (Ethereum Virtual Machine)
                      or equivalent executes the code, modifying the contract's state on the blockchain.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6 border border-green-300">
                        <p className="text-lg font-semibold text-gray-900 mb-3">Transaction Flow:</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-mono text-sm">User sends TX</span>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-mono text-sm">Miners/Validators verify</span>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-mono text-sm">EVM executes code</span>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-mono text-sm">State updated</span>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-mono text-sm">Confirmed on blockchain</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gas Mechanism */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Zap className="w-12 h-12 text-yellow-600" />
              Understanding Gas: The Computational Fuel
            </h3>

            <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-3xl p-10 mb-8 border-2 border-yellow-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                Gas is a unit of measurement for computational work on the blockchain. Every operation
                (addition, storage, transfer) consumes a specific amount of gas.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                <strong>Why Gas Exists:</strong> Prevents infinite loops and spam attacks. Forces developers
                to write efficient code. Compensates validators for computational resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Coins className="w-10 h-10 text-yellow-600" />
                  Gas Cost Examples
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-lg text-gray-700">Addition (ADD)</span>
                    <span className="font-mono font-bold text-yellow-700">3 gas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-lg text-gray-700">Multiplication (MUL)</span>
                    <span className="font-mono font-bold text-yellow-700">5 gas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-lg text-gray-700">Store 256 bits (SSTORE)</span>
                    <span className="font-mono font-bold text-yellow-700">20,000 gas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-lg text-gray-700">Create contract</span>
                    <span className="font-mono font-bold text-yellow-700">32,000+ gas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-lg text-gray-700">ERC-20 transfer</span>
                    <span className="font-mono font-bold text-yellow-700">~21,000-60,000 gas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">Uniswap swap</span>
                    <span className="font-mono font-bold text-yellow-700">~150,000 gas</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-orange-300 shadow-lg">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-10 h-10 text-orange-600" />
                  Gas Price & Fees
                </h4>
                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-300">
                    <p className="text-xl font-semibold text-gray-900 mb-3">Formula:</p>
                    <p className="text-2xl font-mono text-orange-700 mb-4">
                      Transaction Fee = Gas Used × Gas Price
                    </p>
                    <p className="text-lg text-gray-700">
                      Gas price fluctuates based on network demand (measured in <strong>Gwei</strong> on Ethereum,
                      where 1 Gwei = 0.000000001 ETH)
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-300">
                    <p className="text-xl font-semibold text-gray-900 mb-3">Real Example:</p>
                    <div className="space-y-2 text-gray-700">
                      <p className="text-lg">• Gas used: <span className="font-mono font-bold">100,000</span></p>
                      <p className="text-lg">• Gas price: <span className="font-mono font-bold">50 Gwei</span></p>
                      <p className="text-lg">• Fee: <span className="font-mono font-bold">0.005 ETH ($12 if ETH = $2,400)</span></p>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4 border border-red-300">
                    <p className="text-sm text-red-800 italic">
                      ⚠️ During network congestion (NFT mints, major events), gas prices can spike to 200-500 Gwei,
                      making transactions very expensive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gas Optimization Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-300">
              <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Brain className="w-10 h-10 text-blue-600" />
                Gas Optimization Strategies
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-lg font-semibold text-gray-900 mb-2">Minimize Storage</p>
                  <p className="text-base text-gray-700">
                    Storage (SSTORE) is expensive. Use memory/calldata when possible. Pack variables into single slots.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-lg font-semibold text-gray-900 mb-2">Batch Operations</p>
                  <p className="text-base text-gray-700">
                    Combine multiple operations into single transactions. Use loops efficiently.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-lg font-semibold text-gray-900 mb-2">Use Events, Not Storage</p>
                  <p className="text-base text-gray-700">
                    For historical data, emit events instead of storing. Events are much cheaper.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Oracles */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Globe className="w-12 h-12 text-teal-600" />
              Oracles: Connecting Smart Contracts to the Real World
            </h3>

            <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-3xl p-10 mb-8 border-2 border-teal-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                The Oracle Problem: Blockchains are <strong>isolated</strong> systems.
                They cannot access external data (stock prices, weather, sports scores) on their own.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                <strong>Oracles</strong> are trusted data providers that feed real-world information
                into smart contracts, enabling them to react to external events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-300">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-10 h-10 text-red-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Without Oracles</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Smart contracts are <strong>blind</strong> to:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Stock prices (for DeFi derivatives)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Weather data (for parametric insurance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Sports scores (for prediction markets)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>IoT sensor data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Flight delays, election results, etc.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                  <h4 className="text-3xl font-bold text-gray-900">With Oracles (Chainlink)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    <strong>Chainlink</strong> is the leading decentralized oracle network:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 border border-green-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Price Feeds</p>
                      <p className="text-base text-gray-700">
                        ETH/USD, BTC/USD, AAPL/USD updated every ~1 minute. Used by Aave, Synthetix, dYdX.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">VRF (Verifiable Random Function)</p>
                      <p className="text-base text-gray-700">
                        Provably fair randomness for NFT minting, gaming, lotteries.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Any API</p>
                      <p className="text-base text-gray-700">
                        Connect to any web API (weather, sports, IoT) using Chainlink Functions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Example */}
            <div className="bg-white rounded-2xl p-8 border-2 border-teal-300 shadow-lg">
              <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lightbulb className="w-10 h-10 text-yellow-600" />
                Real-World Example: Parametric Flight Insurance
              </h4>
              <div className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>Scenario:</strong> You buy insurance for Flight AA123 from NYC to LA.
                  If the flight is delayed &gt;3 hours, you get $500 automatically.
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">1</div>
                      <p className="text-lg text-gray-800">Smart contract created with policy terms</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">2</div>
                      <p className="text-lg text-gray-800">Chainlink oracle monitors FlightStats API</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">3</div>
                      <p className="text-lg text-gray-800">Flight delayed 4 hours → Oracle updates contract</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">4</div>
                      <p className="text-lg text-gray-800">Contract automatically pays $500 to your wallet</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic">
                  No claims process. No paperwork. No waiting weeks for reimbursement.
                </p>
              </div>
            </div>
          </div>

          {/* Composability */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Network className="w-12 h-12 text-purple-600" />
              Composability: Money Legos
            </h3>

            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-3xl p-10 mb-8 border-2 border-purple-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                Composability means smart contracts can <strong>call other smart contracts</strong>,
                combining functionality like Lego blocks to create complex systems.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                This is DeFi's superpower: protocols building on top of protocols, creating an
                interconnected financial system where innovation compounds.
              </p>
            </div>

            {/* Flash Loans Example */}
            <div className="bg-white rounded-2xl p-10 border-2 border-purple-300 shadow-xl mb-8">
              <h4 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="w-12 h-12 text-purple-600" />
                Composability in Action: Flash Loans
              </h4>

              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                A <strong>flash loan</strong> lets you borrow millions of dollars with <strong>zero collateral</strong>,
                as long as you repay within the same transaction (same block).
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 mb-8">
                <p className="text-xl font-semibold text-gray-900 mb-6">Transaction Flow (all in one TX):</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Borrow</p>
                      <p className="text-base text-gray-700">Get 10,000 ETH from Aave (worth $24M)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Arbitrage</p>
                      <p className="text-base text-gray-700">Buy token on Uniswap at $100, sell on SushiSwap at $101</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Repay + Fee</p>
                      <p className="text-base text-gray-700">Return 10,000 ETH + 0.09% fee (9 ETH = $21,600)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Profit</p>
                      <p className="text-base text-gray-700 font-bold">Keep the difference (potentially thousands of dollars)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-300">
                  <p className="text-base text-gray-700">
                    <strong>Key:</strong> If you can't repay, the <strong>entire transaction reverts</strong>
                    (fails atomically). No risk to the lender!
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-lg font-bold text-gray-900 mb-2">Use Cases</p>
                  <ul className="text-base text-gray-700 space-y-2">
                    <li>• Arbitrage across DEXs</li>
                    <li>• Collateral swaps</li>
                    <li>• Liquidation protection</li>
                    <li>• Debt refinancing</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="text-lg font-bold text-gray-900 mb-2">Protocols Offering</p>
                  <ul className="text-base text-gray-700 space-y-2">
                    <li>• Aave ($13B TVL)</li>
                    <li>• dYdX</li>
                    <li>• Balancer</li>
                    <li>• Uniswap V3</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <p className="text-lg font-bold text-gray-900 mb-2">Volume</p>
                  <p className="text-base text-gray-700">
                    Over <strong>$50 billion</strong> in flash loan volume since 2020.
                    Some single transactions move $100M+.
                  </p>
                </div>
              </div>
            </div>

            {/* DeFi Stack Composability */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border-2 border-blue-300">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">The DeFi Stack: Protocols Building on Protocols</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900 mb-2">Base Layer: Lending (Compound, Aave)</p>
                    <p className="text-lg text-gray-700">Supply USDC, earn 3% APY</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900 mb-2">Aggregation Layer: Yearn Finance</p>
                    <p className="text-lg text-gray-700">Automatically moves your USDC between Compound/Aave for best rate → 4.5% APY</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900 mb-2">Derivative Layer: Convex Finance</p>
                    <p className="text-lg text-gray-700">Boosts Yearn returns by staking LP tokens → 7% APY + governance tokens</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-300">
                <p className="text-xl text-gray-800">
                  <strong>Result:</strong> Your $10,000 USDC is simultaneously being lent on Aave,
                  optimized by Yearn, and boosted by Convex — all through automated smart contract interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part II</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  Smart contracts follow a <strong>creation → deployment → execution</strong> lifecycle, consuming
                  <strong>gas</strong> for computational work. <strong>Oracles</strong> connect contracts to real-world
                  data, while <strong>composability</strong> enables protocols to build on each other.
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  These four pillars (lifecycle, gas, oracles, composability) transform smart contracts from
                  isolated programs into a living, breathing financial ecosystem.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* PART III: LEGAL IMPLICATIONS */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 text-white text-3xl font-bold shadow-xl">
              III
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                Legal Implications of Smart Contracts
              </h2>
              <p className="text-2xl text-gray-600">
                When Code Meets Law
              </p>
            </div>
          </div>

          {/* Legal Status */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Scale className="w-12 h-12 text-red-600" />
              Legal Status: Are Smart Contracts "Contracts"?
            </h3>

            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-10 mb-8 border-2 border-red-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                The fundamental question: Do smart contracts qualify as legally binding contracts
                under traditional law?
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                <strong>Short answer:</strong> It depends on jurisdiction, but in many cases, <strong>yes</strong> —
                if they meet the traditional requirements of a contract.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-green-300 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Traditional Contract Requirements</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Offer & Acceptance</p>
                      <p className="text-lg text-gray-700">One party proposes terms, the other accepts. ✅ Smart contracts meet this.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Consideration</p>
                      <p className="text-lg text-gray-700">Something of value exchanged (money, tokens). ✅ Smart contracts facilitate this.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Intention to Create Legal Relations</p>
                      <p className="text-lg text-gray-700">Parties intend to be legally bound. ⚠️ Can be ambiguous with code.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Certainty & Completeness</p>
                      <p className="text-lg text-gray-700">Terms must be clear and complete. ✅ Code is deterministic.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-10 h-10 text-yellow-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Legal Challenges</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Interpretation</p>
                      <p className="text-lg text-gray-700">
                        If code has a bug, which interpretation matters: the code as written, or the parties' intent?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Capacity & Consent</p>
                      <p className="text-lg text-gray-700">
                        How do you verify that parties had legal capacity (age, mental state) and gave informed consent?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Enforceability</p>
                      <p className="text-lg text-gray-700">
                        Smart contracts self-execute. Courts can't "undo" a transaction after it's finalized on-chain.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Jurisdiction</p>
                      <p className="text-lg text-gray-700">
                        Blockchain is global. Which country's laws apply? Where do you sue?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jurisdiction & Enforcement */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Globe className="w-12 h-12 text-blue-600" />
              Jurisdiction & Enforcement Challenges
            </h3>

            <div className="space-y-8">
              {/* Challenge 1 */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-8 border-red-500">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <XCircle className="w-10 h-10 text-red-600" />
                  Challenge 1: Cross-Border Transactions
                </h4>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Alice (in USA) and Bob (in Singapore) enter a smart contract for a token sale. A dispute arises.
                  <strong> Which court has jurisdiction?</strong>
                </p>
                <div className="bg-white rounded-xl p-6 border border-red-300">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Traditional approach:</strong> Contracts specify governing law and dispute resolution venue
                    ("This contract is governed by New York law, disputes resolved in Manhattan courts").
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Smart contract problem:</strong> Code doesn't specify jurisdiction. Parties may be
                    pseudonymous. Both parties could claim their local law applies.
                  </p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 border-l-8 border-orange-500">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Lock className="w-10 h-10 text-orange-600" />
                  Challenge 2: Irreversibility vs. Legal Remedies
                </h4>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Smart contracts execute automatically and irreversibly. But legal systems provide remedies like
                  <strong> rescission</strong> (voiding a contract) and <strong>restitution</strong> (returning parties to original position).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-orange-300">
                    <p className="text-lg font-semibold text-gray-900 mb-3">Example: Fraud</p>
                    <p className="text-base text-gray-700">
                      Alice tricks Bob into signing a smart contract under false pretenses. Legally, Bob should get
                      his money back. But the smart contract already executed and distributed funds to 100 parties.
                      <strong> Courts can't reverse blockchain transactions.</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-orange-300">
                    <p className="text-lg font-semibold text-gray-900 mb-3">Example: Mistake</p>
                    <p className="text-base text-gray-700">
                      A developer makes a typo: sends 10,000 ETH instead of 10 ETH. Traditional contracts allow
                      correction for mutual mistake. Smart contracts? <strong>Transaction is final.</strong>
                      (Unless recipient voluntarily returns funds.)
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8 border-l-8 border-yellow-500">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-10 h-10 text-yellow-600" />
                  Challenge 3: Identifying Parties
                </h4>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Blockchain addresses (0x742d35Cc...) don't reveal identity. If you need to sue someone, you must
                  first <strong>identify</strong> them — which can be impossible with decentralized systems.
                </p>
                <div className="bg-white rounded-xl p-6 border border-yellow-300">
                  <p className="text-lg text-gray-700">
                    <strong>Real case:</strong> The DAO hack (2016). Attacker drained $60M using a recursive call exploit.
                    Community knew the address holding stolen funds, but couldn't identify the person. Legal action was
                    impossible. Solution? <strong>Ethereum hard fork</strong> to reverse the hack — controversial and
                    not legally enforced.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Liability in Autonomous Systems */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Shield className="w-12 h-12 text-purple-600" />
              Liability in Autonomous Systems
            </h3>

            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-3xl p-10 mb-8 border-2 border-purple-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                If a smart contract causes harm (financial loss, data breach), <strong>who is liable?</strong>
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                This question becomes especially complex with DAOs (Decentralized Autonomous Organizations)
                where there's no clear "owner" or "operator."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-300 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Developer Liability?</h4>
                <p className="text-lg text-gray-700 mb-4">
                  If a bug in the code causes losses, is the developer liable?
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700"><strong>Argument for:</strong> Negligence, professional malpractice</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700"><strong>Argument against:</strong> Open-source software disclaimers, users accepted risk</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-300 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">User Liability?</h4>
                <p className="text-lg text-gray-700 mb-4">
                  If a user interacts with a contract knowing it's risky, are they responsible for losses?
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700"><strong>Argument for:</strong> "Code is law," caveat emptor (buyer beware)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700"><strong>Argument against:</strong> Consumer protection laws, unfair terms, information asymmetry</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-pink-300 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Protocol/DAO Liability?</h4>
                <p className="text-lg text-gray-700 mb-4">
                  Can a DAO itself be sued as a legal entity?
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700"><strong>Wyoming, Vermont:</strong> Recognize DAOs as legal entities (DAO LLCs)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700"><strong>Most jurisdictions:</strong> No clear legal status. General partnership? Unincorporated association?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-50 rounded-2xl p-8 border-2 border-red-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                Recent Legal Development: Ooki DAO (2022)
              </h4>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                The U.S. CFTC sued <strong>Ooki DAO</strong> (formerly bZx Protocol) for operating an unregistered
                trading platform. Key precedent: the CFTC argued DAO token holders are <strong>jointly liable</strong>
                as members of an unincorporated association.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Implication:</strong> Participating in a DAO (even just holding governance tokens) could expose
                you to legal liability for the DAO's actions. This sent shockwaves through the DeFi community.
              </p>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part III</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  Smart contracts exist in a <strong>legal gray area</strong>. They can meet traditional contract
                  requirements, but face challenges with <strong>jurisdiction</strong>, <strong>irreversibility</strong>,
                  and <strong>liability</strong>.
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  As the technology matures, legal frameworks are evolving — but for now, "code as law" clashes
                  with traditional legal systems in complex ways.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* PART IV: COMPLIANCE AND AUDIT */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 text-white text-3xl font-bold shadow-xl">
              IV
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                Compliance and Audit
              </h2>
              <p className="text-2xl text-gray-600">
                Bridging DeFi and Regulation
              </p>
            </div>
          </div>

          {/* KYC/AML in DeFi */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Shield className="w-12 h-12 text-green-600" />
              KYC/AML in DeFi: The Tension
            </h3>

            <div className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 rounded-3xl p-10 mb-8 border-2 border-green-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                DeFi's promise: <strong>Permissionless</strong>, open financial access for anyone with an internet connection.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Traditional finance requirement: <strong>KYC (Know Your Customer)</strong> and <strong>AML (Anti-Money Laundering)</strong>
                checks to prevent illegal activity.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed mt-4">
                <strong>The conflict:</strong> How do you verify identity on a pseudonymous blockchain while maintaining
                decentralization and privacy?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-6">
                  <Unlock className="w-10 h-10 text-blue-600" />
                  <h4 className="text-3xl font-bold text-gray-900">DeFi Philosophy</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Financial Inclusion:</strong> 1.7 billion adults worldwide are unbanked. DeFi provides access without requiring government ID.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Privacy Rights:</strong> Users shouldn't need to share personal data with every protocol they interact with.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Censorship Resistance:</strong> No single entity can freeze accounts or block transactions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Transparency:</strong> All transactions are public on-chain. Better auditability than traditional finance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-300">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-10 h-10 text-red-600" />
                  <h4 className="text-3xl font-bold text-gray-900">Regulatory Concerns</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Money Laundering:</strong> Criminals could use DeFi to "clean" illicit funds by moving them through protocols.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Terrorist Financing:</strong> Anonymous transactions could fund illegal activities.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Tax Evasion:</strong> Without identity verification, users could hide income and capital gains.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      <strong>Consumer Protection:</strong> How do you protect users from scams, hacks, or their own mistakes?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Solutions */}
            <div className="bg-white rounded-2xl p-10 border-2 border-green-300 shadow-xl">
              <h4 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Lightbulb className="w-12 h-12 text-yellow-600" />
                Emerging Solutions: Bridging the Gap
              </h4>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-8 border-purple-500">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">1. Decentralized Identity (DID)</h5>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Users verify identity <strong>once</strong> with a trusted provider, receive a cryptographic credential,
                    and reuse it across protocols without sharing personal data.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-purple-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Example: Civic</p>
                      <p className="text-base text-gray-700">
                        Users store identity on their device. Smart contracts verify credentials via zero-knowledge proofs
                        without seeing actual data.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-purple-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Example: BrightID</p>
                      <p className="text-base text-gray-700">
                        Social verification system proving you're a unique human without revealing identity. Used by Gitcoin for Sybil resistance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-8 border-blue-500">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">2. On-Chain Analytics & Risk Scoring</h5>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Analyze blockchain transaction patterns to identify suspicious activity <strong>without</strong> knowing user identity.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-blue-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Chainalysis</p>
                      <p className="text-base text-gray-700">
                        Tracks crypto flows, flags addresses linked to sanctioned entities (Tornado Cash, North Korean hackers).
                        Used by law enforcement and DeFi protocols.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-blue-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">TRM Labs</p>
                      <p className="text-base text-gray-700">
                        Real-time transaction monitoring. Protocols like Aave use TRM to block sanctioned addresses at smart contract level.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-8 border-green-500">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">3. Hybrid Models: Permissioned DeFi</h5>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Some protocols add KYC at specific entry/exit points (fiat on-ramps) while keeping core DeFi activities permissionless.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-green-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Coinbase DeFi Wallet</p>
                      <p className="text-base text-gray-700">
                        Users verify identity when converting fiat ↔ crypto. Once funds are on-chain, they can interact with DeFi freely.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-green-300">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Compound Treasury</p>
                      <p className="text-base text-gray-700">
                        Institutional DeFi product requiring KYC. Separate from public Compound protocol. Targets banks, fintechs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Contract Auditing */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <FileCode className="w-12 h-12 text-blue-600" />
              Smart Contract Auditing: Ensuring Code Security
            </h3>

            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-10 mb-8 border-2 border-red-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                Smart contracts are <strong>immutable</strong>. Once deployed, bugs can't be easily fixed.
                A single vulnerability can drain millions of dollars.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                <strong>Solution:</strong> Professional security audits by specialized firms before deployment.
              </p>
            </div>

            {/* The Audit Process */}
            <div className="bg-white rounded-2xl p-10 border-2 border-blue-300 shadow-xl mb-8">
              <h4 className="text-4xl font-bold text-gray-900 mb-8">The Audit Process</h4>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Static Analysis</h5>
                    <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                      Automated tools scan code for known vulnerabilities (reentrancy, integer overflow, access control issues).
                    </p>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-300">
                      <p className="text-lg text-gray-700">
                        <strong>Tools:</strong> Slither, Mythril, Securify. Can catch 60-70% of common bugs automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Manual Review</h5>
                    <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                      Expert auditors read every line of code, checking business logic, economic incentives, edge cases.
                    </p>
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-300">
                      <p className="text-lg text-gray-700">
                        <strong>Focus areas:</strong> Access control, economic attacks (flash loan exploits), gas optimization,
                        integration with other protocols.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Formal Verification</h5>
                    <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                      Mathematical proofs that code behaves exactly as specified under <strong>all possible conditions</strong>.
                    </p>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-300">
                      <p className="text-lg text-gray-700">
                        <strong>Used for:</strong> High-value contracts (MakerDAO, Uniswap V3 core). Expensive and time-consuming,
                        but provides highest assurance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Report & Remediation</h5>
                    <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                      Auditors deliver a report classifying vulnerabilities by severity (Critical, High, Medium, Low).
                    </p>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-300">
                      <p className="text-lg text-gray-700">
                        <strong>Developers fix issues</strong>, auditors verify fixes, then issue final report.
                        Often made public to build trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Audit Firms */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-300 mb-8">
              <h4 className="text-3xl font-bold text-gray-900 mb-8">Leading Audit Firms</h4>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">🔷 CertiK</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      <strong>Specialty:</strong> Formal verification, AI-powered audits
                    </p>
                    <p className="text-base text-gray-700 mb-3">
                      <strong>Notable clients:</strong> Binance Smart Chain, Polygon, Aave, Cronos
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Cost:</strong> $50K-$300K depending on complexity
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">🔷 Trail of Bits</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      <strong>Specialty:</strong> Penetration testing, cryptographic review
                    </p>
                    <p className="text-base text-gray-700 mb-3">
                      <strong>Notable clients:</strong> MakerDAO, Compound, USDC, Chainlink
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Cost:</strong> $100K-$500K+ for comprehensive audits
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">🔷 OpenZeppelin</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      <strong>Specialty:</strong> ERC token standards, upgradeable contracts
                    </p>
                    <p className="text-base text-gray-700 mb-3">
                      <strong>Notable clients:</strong> Coinbase, The Graph, Aave, Ethereum Foundation
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Cost:</strong> $40K-$200K; also provide open-source libraries
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-orange-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">🔷 ConsenSys Diligence</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      <strong>Specialty:</strong> Ethereum ecosystem, Layer 2 solutions
                    </p>
                    <p className="text-base text-gray-700 mb-3">
                      <strong>Notable clients:</strong> Uniswap, 1inch, Balancer, Gnosis Safe
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Cost:</strong> $60K-$250K; MythX automated tool available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bug Bounties */}
            <div className="bg-white rounded-2xl p-10 border-2 border-green-300 shadow-xl">
              <h4 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Coins className="w-12 h-12 text-green-600" />
                Bug Bounties: Crowdsourced Security
              </h4>

              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                After audits, protocols often run <strong>bug bounty programs</strong> offering rewards to hackers
                who responsibly disclose vulnerabilities.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Immunefi</h5>
                  <p className="text-lg text-gray-700 mb-4">
                    Leading DeFi bug bounty platform. <strong>$85M+</strong> in total bounties paid.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-purple-300">
                    <p className="text-base text-gray-700 mb-2">
                      <strong>Top bounty:</strong> $10M from Wormhole
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Typical range:</strong> $1K-$2M depending on severity
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">HackerOne</h5>
                  <p className="text-lg text-gray-700 mb-4">
                    General security platform with crypto/blockchain category. <strong>400K+</strong> researchers.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-300">
                    <p className="text-base text-gray-700 mb-2">
                      <strong>Clients:</strong> Coinbase, Kraken, Blockchain.com
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Typical range:</strong> $500-$100K
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Code4rena</h5>
                  <p className="text-lg text-gray-700 mb-4">
                    Audit contests where community competes to find bugs. <strong>$40M+</strong> awarded.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-300">
                    <p className="text-base text-gray-700 mb-2">
                      <strong>Format:</strong> 1-2 week competitions, $50K-$500K prize pools
                    </p>
                    <p className="text-base text-gray-700">
                      <strong>Benefit:</strong> Multiple perspectives, faster than traditional audits
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <p className="text-xl text-gray-800">
                  <strong>⚠️ Important:</strong> Even with audits and bug bounties, vulnerabilities can slip through.
                  Major hacks still occur. <strong>No audit guarantees 100% security.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part IV</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  Smart contracts face a <strong>compliance paradox</strong>: balancing permissionless access with
                  regulatory requirements. <strong>Decentralized identity</strong> and <strong>on-chain analytics</strong>
                  offer potential solutions.
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  Security audits by firms like CertiK, Trail of Bits, and OpenZeppelin are essential before deployment,
                  supplemented by bug bounty programs to catch remaining vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* PART V: THE FUTURE OF DeFi */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-3xl font-bold shadow-xl">
              V
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                The Future of DeFi
              </h2>
              <p className="text-2xl text-gray-600">
                CBDCs, RWAs, and the Evolution of Finance
              </p>
            </div>
          </div>

          {/* DeFi 2.0 */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Rocket className="w-12 h-12 text-cyan-600" />
              DeFi 2.0: Next Generation Protocols
            </h3>

            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 rounded-3xl p-10 mb-8 border-2 border-cyan-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                DeFi 1.0 (2019-2021): Lending, DEXs, yield farming. Explosive growth but unsustainable incentives.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                <strong>DeFi 2.0</strong> (2022+): Focus on <strong>sustainability</strong>, <strong>capital efficiency</strong>,
                and <strong>real-world integration</strong>.
              </p>
            </div>

            <div className="space-y-8">
              {/* Protocol-Owned Liquidity */}
              <div className="bg-white rounded-2xl p-10 border-2 border-cyan-300 shadow-xl">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Network className="w-10 h-10 text-cyan-600" />
                  1. Protocol-Owned Liquidity (POL)
                </h4>

                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>Problem with DeFi 1.0:</strong> Protocols rented liquidity by paying high APYs (100%-1000%+).
                  When rewards dried up, liquidity providers fled → "mercenary capital."
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-8 h-8 text-red-600" />
                      <h5 className="text-2xl font-bold text-gray-900">Old Model (Renting)</h5>
                    </div>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Emit governance tokens as rewards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>LPs farm and dump tokens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Token price falls → APY falls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>LPs leave → protocol dies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                      <h5 className="text-2xl font-bold text-gray-900">New Model (Owning)</h5>
                    </div>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Protocol buys its own liquidity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Permanent, reliable liquidity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Keeps trading fees → revenue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Sustainable without infinite emissions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-300">
                  <p className="text-lg font-semibold text-gray-900 mb-3">Example: OlympusDAO (3,3)</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Users bond their LP tokens to the protocol in exchange for discounted OHM tokens.
                    Protocol owns the LP tokens permanently. Pioneered POL model (though OHM's tokenomics had issues).
                  </p>
                </div>
              </div>

              {/* Real-World Assets */}
              <div className="bg-white rounded-2xl p-10 border-2 border-blue-300 shadow-xl">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Globe className="w-10 h-10 text-blue-600" />
                  2. Real-World Assets (RWAs)
                </h4>

                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Bringing <strong>traditional financial assets</strong> onto blockchain: real estate, corporate bonds,
                  invoices, commodities, art, etc.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-6 border-2 border-blue-300">
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    Why RWAs Matter: Unlocking $16 Trillion Market
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-3">Benefits for TradFi:</p>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li>• 24/7 trading (no market hours)</li>
                        <li>• Fractional ownership (own 0.1% of building)</li>
                        <li>• Instant settlement (T+0 vs T+2)</li>
                        <li>• Lower costs (no intermediaries)</li>
                        <li>• Global accessibility</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-3">Benefits for DeFi:</p>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li>• Stable, real yield (not inflationary token rewards)</li>
                        <li>• Collateral for loans (borrow against real estate)</li>
                        <li>• Diversification beyond crypto</li>
                        <li>• Institutional capital inflow</li>
                        <li>• Lower volatility</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      🏢 MakerDAO RWA Vaults
                    </h5>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      MakerDAO now backs DAI stablecoin with <strong>$1.3B in real-world assets</strong> (U.S. Treasury bonds,
                      corporate bonds) alongside crypto collateral.
                    </p>
                    <p className="text-base text-gray-700">
                      Result: DAI earns ~5% yield from Treasuries, making it more sustainable than pure crypto-backed stablecoins.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      🏠 Centrifuge: Tokenized Real Estate & Invoices
                    </h5>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      Platform for tokenizing real-world assets. <strong>$500M+ in loans</strong> backed by invoices,
                      real estate, royalties.
                    </p>
                    <p className="text-base text-gray-700">
                      Example: Spotify royalties → tokenized → used as collateral → borrow USDC on Aave.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                    <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      💎 Ondo Finance: Institutional-Grade Tokenized Funds
                    </h5>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      Tokenizes U.S. Treasuries and money market funds. <strong>OUSG</strong> (Ondo U.S. Government Securities)
                      token backed 1:1 by short-term Treasuries.
                    </p>
                    <p className="text-base text-gray-700">
                      Target: Institutions wanting blockchain exposure with TradFi safety. KYC/AML required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Institutional DeFi */}
              <div className="bg-white rounded-2xl p-10 border-2 border-purple-300 shadow-xl">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-10 h-10 text-purple-600" />
                  3. Institutional DeFi
                </h4>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Traditional finance institutions (banks, hedge funds, asset managers) entering DeFi with
                  <strong> permissioned</strong> or <strong>compliant</strong> versions of public protocols.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">JPMorgan Onyx</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Blockchain division handling <strong>$1B+ daily</strong> in repo transactions.
                    </p>
                    <ul className="space-y-2 text-base text-gray-700">
                      <li>• <strong>JPM Coin:</strong> Bank-issued stablecoin for instant settlements</li>
                      <li>• <strong>Programmable payments:</strong> Smart contracts for conditional payments</li>
                      <li>• <strong>Target:</strong> Institutional clients, not retail</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">Goldman Sachs GS DAP</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Digital Asset Platform for tokenizing bonds, funds, derivatives.
                    </p>
                    <ul className="space-y-2 text-base text-gray-700">
                      <li>• Issued first <strong>digital bond on blockchain</strong> (€100M)</li>
                      <li>• Partnered with Chainlink for oracle services</li>
                      <li>• Exploring tokenized mutual funds</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">BlackRock & Securitize</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      World's largest asset manager ($10T AUM) tokenizing money market fund.
                    </p>
                    <ul className="space-y-2 text-base text-gray-700">
                      <li>• <strong>BUIDL fund:</strong> First tokenized money market fund on Ethereum</li>
                      <li>• Instant redemption, 24/7 trading</li>
                      <li>• Signal of mainstream institutional adoption</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">SWIFT & Chainlink CCIP</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Traditional banking network integrating with blockchain.
                    </p>
                    <ul className="space-y-2 text-base text-gray-700">
                      <li>• Pilot program: SWIFT messages triggering smart contracts</li>
                      <li>• Enables banks to interact with DeFi without rebuilding infrastructure</li>
                      <li>• <strong>11,000+ banks</strong> potentially connected to blockchain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CBDCs Meeting DeFi */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Coins className="w-12 h-12 text-blue-600" />
              Central Bank Digital Currencies (CBDCs) Meeting DeFi
            </h3>

            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 mb-8 border-2 border-blue-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                <strong>130+ countries</strong> (98% of global GDP) are exploring CBDCs — digital versions of fiat
                currencies issued by central banks.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Question: Will CBDCs run on public blockchains and interact with DeFi, or remain isolated on
                private networks?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-red-300 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🇨🇳 China: e-CNY (Digital Yuan)
                </h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Most advanced CBDC. <strong>$250B+</strong> in transactions.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• <strong>Centralized</strong> - controlled by PBOC</li>
                  <li>• Offline payments via NFC</li>
                  <li>• Programmable (expiring stimulus money)</li>
                  <li>• <strong>NOT</strong> compatible with public DeFi</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-blue-300 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🇪🇺 Europe: Digital Euro
                </h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  In development, expected <strong>2026-2028</strong>.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Privacy-focused (anonymous small payments)</li>
                  <li>• Interoperable across EU</li>
                  <li>• Exploring <strong>hybrid model</strong>: private blockchain + DeFi bridges</li>
                  <li>• ECB researching smart contract integration</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-green-300 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🇮🇳 India: e₹ (Digital Rupee)
                </h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Pilots launched 2022. <strong>5M+ users</strong>.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Wholesale (banks) + Retail pilots</li>
                  <li>• Focus on financial inclusion</li>
                  <li>• Cross-border settlement tests with UAE, Singapore</li>
                  <li>• Strict KYC, anti-crypto stance</li>
                </ul>
              </div>
            </div>

            {/* CBDC + DeFi Integration */}
            <div className="bg-white rounded-2xl p-10 border-2 border-purple-300 shadow-xl">
              <h4 className="text-4xl font-bold text-gray-900 mb-8">
                The Vision: CBDCs + DeFi Smart Contracts
              </h4>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
                  <p className="text-xl font-bold text-gray-900 mb-3">Programmable Payments</p>
                  <p className="text-lg text-gray-700">
                    Government issues stimulus payment in CBDC that <strong>expires in 3 months</strong> if not spent.
                    Smart contract automatically enforces expiry.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
                  <p className="text-xl font-bold text-gray-900 mb-3">Conditional Transfers</p>
                  <p className="text-lg text-gray-700">
                    Agricultural subsidy CBDC that can <strong>only be spent on seeds and fertilizer</strong>.
                    Smart contract restricts merchant categories.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                  <p className="text-xl font-bold text-gray-900 mb-3">Cross-Border Settlements</p>
                  <p className="text-lg text-gray-700">
                    Indian e₹ ↔ Singapore CBDC swap via smart contract in <strong>seconds</strong>, not days.
                    No correspondent banks, no SWIFT delays.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300">
                  <p className="text-xl font-bold text-gray-900 mb-3">DeFi Lending with CBDCs</p>
                  <p className="text-lg text-gray-700">
                    Borrow digital euros on Aave using tokenized real estate as collateral.
                    Instant settlement, transparent rates, no bank approval needed.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <p className="text-xl text-gray-800">
                  <strong>⚠️ Challenge:</strong> Central banks want <strong>control</strong> (freeze accounts, reverse
                  transactions, collect data). DeFi wants <strong>permissionless access</strong>. Finding middle ground
                  is the key technical and political challenge of the 2020s.
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part V</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  DeFi 2.0 focuses on <strong>sustainability</strong> (protocol-owned liquidity), <strong>real-world
                  integration</strong> (tokenized assets), and <strong>institutional adoption</strong> (BlackRock, JPMorgan).
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  CBDCs will reshape global finance. Whether they integrate with public DeFi or create parallel systems
                  will determine the next decade of blockchain innovation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* PART VI: PRACTICAL IMPLICATIONS */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white text-3xl font-bold shadow-xl">
              VI
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                Practical Implications
              </h2>
              <p className="text-2xl text-gray-600">
                Current Applications and Real-World Impact
              </p>
            </div>
          </div>

          {/* Current Applications */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Rocket className="w-12 h-12 text-orange-600" />
              Smart Contracts in Action Today
            </h3>

            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-10 mb-8 border-2 border-orange-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                Beyond financial speculation, smart contracts are solving real problems across multiple industries.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Here are the most impactful use cases today (2025).
              </p>
            </div>

            <div className="space-y-8">
              {/* Creative Industries */}
              <div className="bg-white rounded-2xl p-10 border-2 border-purple-300 shadow-xl">
                <h4 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  🎨 Creative Industries: NFTs & Royalties
                </h4>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Smart contracts revolutionize how artists, musicians, and creators monetize and protect their work.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">NFT Royalties</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Artists embed <strong>perpetual royalties</strong> (typically 5-10%) directly into NFT smart contracts.
                      Every secondary sale automatically pays the creator.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-blue-300">
                      <p className="text-base text-gray-700 mb-2">
                        <strong>Example:</strong> Beeple sells NFT for $100 → resold for $200 → Beeple gets $10 instantly
                      </p>
                      <p className="text-base text-gray-700">
                        Traditional art: Artist gets $0 from resales. Smart contracts: <strong>forever income stream</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">Music Rights</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      <strong>Royal</strong> tokenizes music royalties. Fans buy fractional ownership, earn streaming revenue.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-purple-300">
                      <p className="text-base text-gray-700 mb-2">
                        <strong>Example:</strong> Nas sold rights to two songs as NFTs. Buyers earn Spotify/Apple Music royalties monthly.
                      </p>
                      <p className="text-base text-gray-700">
                        Smart contract handles splits: 50% to token holders, 50% to artist. <strong>Automated, transparent.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supply Chain */}
              <div className="bg-white rounded-2xl p-10 border-2 border-green-300 shadow-xl">
                <h4 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  📦 Supply Chain & Provenance
                </h4>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Track goods from origin to consumer, verify authenticity, automate payments upon delivery.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">Walmart + IBM Food Trust</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Track food products on blockchain. <strong>Reduced trace time from 7 days to 2.2 seconds</strong>
                      for contamination investigations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-green-300">
                        <p className="text-base font-semibold text-gray-900 mb-2">Before Blockchain:</p>
                        <p className="text-sm text-gray-700">
                          E. coli outbreak → manual paper trail → weeks to find source → entire category recalled
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-green-300">
                        <p className="text-base font-semibold text-gray-900 mb-2">With Smart Contracts:</p>
                        <p className="text-sm text-gray-700">
                          Instant farm-to-shelf tracking → pinpoint contaminated batch in seconds → recall only affected items
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">De Beers Tracr: Diamond Provenance</h5>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Tracks diamonds from mine to retail using blockchain. Prevents <strong>conflict diamonds</strong>
                      (blood diamonds) from entering supply chain.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-blue-300">
                      <p className="text-base text-gray-700">
                        Smart contract records: Mine origin → Cutter → Polisher → Wholesaler → Retailer. Each transfer verified.
                        Consumers scan QR code to see complete history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Inclusion */}
              <div className="bg-white rounded-2xl p-10 border-2 border-teal-300 shadow-xl">
                <h4 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  🌍 Financial Inclusion & Remittances
                </h4>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Smart contracts enable financial services for the 1.7 billion unbanked adults worldwide.
                </p>

                <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-xl p-8 mb-6 border-2 border-teal-300">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">The Remittance Problem</h5>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    <strong>$700B+</strong> sent annually by migrant workers to families in developing countries.
                    Traditional fees: <strong>6-7%</strong> on average (World Bank data).
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                      <p className="text-lg font-semibold text-gray-900 mb-3">Traditional (Western Union, MoneyGram):</p>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li>• Send $100 → Recipient gets $93</li>
                        <li>• Takes 1-3 days</li>
                        <li>• Requires bank account or pickup location</li>
                        <li>• Hidden exchange rate markups</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                      <p className="text-lg font-semibold text-gray-900 mb-3">Smart Contract (Stellar, Ripple):</p>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li>• Send $100 → Recipient gets $99.50</li>
                        <li>• Takes 3-5 seconds</li>
                        <li>• Only needs smartphone</li>
                        <li>• Transparent rates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Real Impact: Nigeria 🇳🇬</h5>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>40% of Nigerian adults</strong> are unbanked but have smartphones. DeFi protocols enable:
                    savings accounts earning 4-8% APY (vs 1% at banks), instant cross-border payments, access to USD
                    stablecoins as hedge against naira inflation (15%+).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk vs Reward - Moving to completion card for space */}
          <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-300">
            <p className="text-2xl text-gray-800 mb-4 font-bold">
              💡 Bottom Line: Smart Contracts Are Powerful But Unforgiving
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Traditional finance has safety nets: FDIC insurance, chargebacks, court appeals. Smart contracts don't.
              <strong> Code executes exactly as written</strong>, bugs and all. This demands higher user diligence
              and better security practices than Web2.
            </p>
          </div>

          {/* Key Takeaway */}
          <div className="mt-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part VI</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  Smart contracts are <strong>already transforming</strong> creative industries (NFT royalties), supply chains
                  (Walmart food tracking), and financial inclusion (remittances, unbanked access).
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  Real-world applications exist today beyond speculation, but users must understand the trade-offs between
                  innovation and immutability.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* PART VII: CONCLUSION & FUTURE */}
        {/* ============================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Part Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl font-bold shadow-xl">
              VII
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-2">
                Legal Strategies & The Future
              </h2>
              <p className="text-2xl text-gray-600">
                Navigating the Evolving Landscape
              </p>
            </div>
          </div>

          {/* Regulatory Evolution */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Globe className="w-12 h-12 text-blue-600" />
              Regulatory Evolution: 2024-2030
            </h3>

            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 mb-8 border-2 border-blue-300">
              <p className="text-3xl font-bold text-gray-900 mb-6">
                The regulatory landscape is consolidating. 2024-2025 marks a turning point from "Wild West" to
                established frameworks.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-300 shadow-lg">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">🇪🇺 Europe: MiCA (Markets in Crypto-Assets)</h4>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Comprehensive regulation effective <strong>2024-2025</strong>. Sets global standard.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-300">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Stablecoins</p>
                    <p className="text-base text-gray-700">Must hold reserves, get licensed. USDT/USDC comply or face bans.</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-300">
                    <p className="text-lg font-semibold text-gray-900 mb-2">DeFi Protocols</p>
                    <p className="text-base text-gray-700">If there's a "legal person" behind it, they're liable. Fully decentralized DAOs in gray area.</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-300">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Consumer Protection</p>
                    <p className="text-base text-gray-700">Mandatory disclosures, right to withdraw, compensation schemes.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-300 shadow-lg">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">🇺🇸 USA: Fragmented but Consolidating</h4>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  SEC vs CFTC turf war. Legislation pending. <strong>2025 likely brings clarity</strong> (or more confusion).
                </p>
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-300">
                    <p className="text-lg font-semibold text-gray-900 mb-2">SEC Approach: Most Tokens Are Securities</p>
                    <p className="text-base text-gray-700">
                      Ripple, Coinbase, Binance sued. Howey Test applied. BTC/ETH likely commodities, most altcoins = securities.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-300">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Potential Legislation: FIT21, DCCPA</p>
                    <p className="text-base text-gray-700">
                      Bills in Congress defining crypto jurisdiction. Would clarify SEC vs CFTC split, create safe harbors for DeFi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <Rocket className="w-12 h-12 text-cyan-600" />
              Conclusion: Code, Law, and the Future
            </h3>

            <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <p className="text-4xl font-bold mb-8">
                Smart contracts represent a fundamental reimagining of how agreements work.
              </p>
              <div className="space-y-6 text-2xl leading-relaxed">
                <p>
                  <strong>Technical Innovation:</strong> Self-executing code enforced by mathematics, not institutions.
                </p>
                <p>
                  <strong>Legal Challenge:</strong> Traditional legal systems designed for human interpretation clashing
                  with deterministic code execution.
                </p>
                <p>
                  <strong>Practical Reality:</strong> Already transforming finance, supply chains, creative industries.
                  $100B+ in value locked in DeFi protocols.
                </p>
                <p>
                  <strong>Future Trajectory:</strong> Hybrid systems emerge. Code handles routine, humans handle exceptions.
                  Regulation consolidates (MiCA, UK framework). CBDCs integrate with DeFi.
                </p>
                <p className="text-3xl font-bold mt-8">
                  The question isn't <em>"Will smart contracts work?"</em> — they already do.
                </p>
                <p className="text-3xl font-bold">
                  The question is: <em>"How will law adapt to programmable agreements?"</em>
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="text-3xl font-bold mb-4">Key Takeaway: Part VII</h4>
                <p className="text-2xl leading-relaxed mb-4">
                  Regulation is consolidating globally (MiCA in Europe, frameworks in UK/US). The 2030s will see
                  <strong> computational law</strong>: human judgment + automated enforcement working together.
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  Smart contracts aren't replacing legal systems — they're augmenting them. Developers and users must
                  navigate evolving regulations while embracing the transformative potential of code-based agreements.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Course Completion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="text-8xl mb-6">🎉</div>
            <h2 className="text-6xl font-bold mb-6">Course Complete!</h2>
            <p className="text-3xl mb-8 leading-relaxed max-w-4xl mx-auto">
              You've mastered Smart Contracts & Legal Considerations — from Nick Szabo's vending machine analogy
              to DeFi 2.0, CBDCs, and computational law.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-2xl mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ Understanding Smart Contracts
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ How They Work (Gas, Oracles, Composability)
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ Legal Implications
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ Compliance & Audit
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ DeFi Future & RWAs
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ Practical Applications
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                ✅ Legal Strategies
              </div>
            </div>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/learn"
                className="inline-block rounded-xl bg-white text-purple-600 px-10 py-5 text-2xl font-semibold hover:bg-gray-100 transition-all"
              >
                ← Back to Courses
              </Link>
              <Link
                href="/learn/advanced"
                className="inline-block rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 text-2xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all"
              >
                Next: Advanced Topics →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
