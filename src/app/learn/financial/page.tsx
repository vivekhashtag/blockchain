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
  Hash, Ban, Smartphone, RefreshCw, AlertOctagon, Check, X
} from "lucide-react";
import { motion } from "framer-motion";

export default function FinancialCoursePage() {
  const course = getCourseById("financial");

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
      <div className="container mx-auto max-w-7xl px-6">
        {/* Navigation */}
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
          <div className="flex items-center flex-wrap gap-4 mb-6">
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 text-xl font-semibold border-2 border-amber-300">
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

          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            {course.title}
          </h1>

          <p className="text-3xl text-gray-700 leading-relaxed max-w-5xl mb-8">
            {course.description}
          </p>

          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold">
            🚀 Real-World Blockchain Financial Systems
          </div>
        </motion.div>

        <article className="prose prose-lg max-w-none">

          {/* PART I: TRANSACTIONS AND SMART CONTRACTS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part I: Transactions and Smart Contracts
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
            </div>

            {/* Section 1: Understanding Blockchain Transactions */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-3xl font-bold shadow-xl">
                  1
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Understanding Blockchain Transactions
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-10 mb-8 border-2 border-blue-300">
                <h4 className="text-3xl font-bold text-blue-900 mb-6">Beyond Simple Money Transfer</h4>
                <p className="text-2xl text-blue-800 leading-relaxed mb-6">
                  A blockchain transaction is fundamentally different from a traditional bank transfer.
                  When you transfer money through a bank, you're asking the bank to update their database.
                  The bank acts as the trusted intermediary, maintaining the ledger and ensuring you can't
                  spend money you don't have.
                </p>
                <p className="text-2xl text-blue-800 leading-relaxed">
                  In blockchain, there's no central authority making these updates. Instead, transactions are
                  cryptographically signed instructions broadcast to a network of thousands of computers,
                  each independently verifying and recording the transfer. This shift from <strong>trusted
                  intermediaries to trustless verification</strong> represents a paradigm change in how
                  financial transactions work.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-red-300">
                  <h4 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <X className="w-10 h-10" />
                    Traditional Bank Transfer
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-red-800">Single point of control (the bank)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-red-800">Centralized database updates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-red-800">Trust required in institution</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-red-800">Can be reversed by authority</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <h4 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <Check className="w-10 h-10" />
                    Blockchain Transaction
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-green-800">Decentralized network validation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-green-800">Distributed ledger updates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-green-800">Trustless cryptographic proof</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-xl text-green-800">Immutable once confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">How a Bitcoin Transaction Works</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  When you send Bitcoin, your transaction doesn't just say "send 1 BTC from Alice to Bob."
                  It's more complex and more powerful:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 p-6 rounded-xl">
                    <p className="font-bold text-2xl text-blue-900 mb-3">1. Inputs</p>
                    <p className="text-xl text-blue-800">
                      References specific previous transactions where you received Bitcoin
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 p-6 rounded-xl">
                    <p className="font-bold text-2xl text-purple-900 mb-3">2. Proof</p>
                    <p className="text-xl text-purple-800">
                      Uses digital signatures to prove you have the right to spend those inputs
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-6 rounded-xl">
                    <p className="font-bold text-2xl text-green-900 mb-3">3. Outputs</p>
                    <p className="text-xl text-green-800">
                      Creates new outputs assigning ownership to the recipient
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl p-10">
                <div className="flex items-start gap-6">
                  <Eye className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold mb-4">Transparency & Auditability</p>
                    <p className="text-2xl leading-relaxed mb-4">
                      Every transaction since the genesis block is visible and verifiable. This creates
                      unprecedented auditability for financial operations:
                    </p>
                    <ul className="space-y-3 text-xl">
                      <li>• Auditors can trace complete flow of funds without relying on provided records</li>
                      <li>• Regulators can monitor systemic risks in real-time</li>
                      <li>• Companies can prove solvency by showing control of addresses</li>
                      <li>• But: Your entire financial history is public once someone links your identity to an address</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: The Transaction Lifecycle */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white text-3xl font-bold shadow-xl">
                  2
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  The Transaction Lifecycle: From Initiation to Finality
                </h3>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Transaction Flow</h4>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-2xl text-gray-900 mb-2">Initiation</p>
                      <p className="text-xl text-gray-700">
                        Wallet software creates a data structure with inputs (unspent transactions),
                        outputs (amounts and destinations), metadata (fees, timestamps)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-2xl text-gray-900 mb-2">Signing</p>
                      <p className="text-xl text-gray-700">
                        Transaction is signed with your private key, creating mathematical proof you
                        authorized it. Signature is unique to this exact transaction—changing a single
                        bit makes the signature invalid
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-2xl text-gray-900 mb-2">Broadcasting</p>
                      <p className="text-xl text-gray-700">
                        Signed transaction is broadcast to peer nodes, spreading rapidly through the
                        P2P network. Each receiving node validates against consensus rules
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-2xl text-gray-900 mb-2">Validation</p>
                      <p className="text-xl text-gray-700">
                        Nodes check: signatures are valid, inputs exist and are unspent, outputs don't
                        exceed inputs plus fees, transaction follows all protocol rules
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-2xl text-gray-900 mb-2">Mempool</p>
                      <p className="text-xl text-gray-700">
                        Valid transactions enter the mempool—a waiting area for unconfirmed transactions.
                        Miners select transactions from mempool, prioritizing higher fees
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      6
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-2xl text-gray-900 mb-2">Confirmation</p>
                      <p className="text-xl text-gray-700">
                        Miners include transaction in a block. Once confirmed and more blocks are built
                        on top, transaction becomes part of the immutable ledger
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8 border-2 border-orange-300">
                  <h4 className="text-3xl font-bold text-orange-900 mb-6">Transaction Finality</h4>
                  <p className="text-xl text-orange-800 leading-relaxed mb-6">
                    Blockchain transactions achieve <strong>probabilistic finality</strong>—the more
                    blocks built on top, the more expensive it becomes to reverse.
                  </p>
                  <div className="bg-white p-6 rounded-xl border-2 border-orange-300">
                    <p className="font-bold text-xl text-orange-900 mb-3">Bitcoin Standard:</p>
                    <p className="text-lg text-orange-800">
                      6 confirmations (≈1 hour) considered irreversible for normal transactions
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <h4 className="text-3xl font-bold text-blue-900 mb-6">Traditional vs Blockchain</h4>
                  <p className="text-xl text-blue-800 leading-relaxed mb-6">
                    Banking transactions can be reversed through chargebacks, court orders, or bank
                    errors for days or months.
                  </p>
                  <div className="bg-white p-6 rounded-xl border-2 border-blue-300">
                    <p className="font-bold text-xl text-blue-900 mb-3">Blockchain Reality:</p>
                    <p className="text-lg text-blue-800">
                      Irreversibility is both a feature (prevents unauthorized reversals) and challenge
                      (errors and fraud can't be easily undone)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Smart Contracts - Programmable Money */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 text-white text-3xl font-bold shadow-xl">
                  3
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Smart Contracts: Programmable Money and Automated Finance
                </h3>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-2xl shadow-xl p-10 mb-8">
                <div className="flex items-start gap-6">
                  <Code2 className="w-16 h-16 flex-shrink-0" />
                  <div>
                    <p className="text-4xl font-bold mb-4">From Simple Ledger to Programmable Platform</p>
                    <p className="text-2xl leading-relaxed mb-6">
                      Smart contracts elevate blockchain from a simple ledger to a programmable financial
                      platform. They are programs that automatically execute when predetermined conditions
                      are met, without requiring intermediaries.
                    </p>
                    <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                      <p className="text-xl italic">
                        "A set of promises, specified in digital form, including protocols within which the
                        parties perform on these promises." — Nick Szabo (1994)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="text-5xl mb-4 text-center">🔍</div>
                  <h4 className="text-2xl font-bold text-blue-900 text-center mb-4">Deterministic</h4>
                  <p className="text-xl text-blue-800 text-center">
                    Executes exactly as programmed, same inputs always produce same outputs
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="text-5xl mb-4 text-center">👁️</div>
                  <h4 className="text-2xl font-bold text-purple-900 text-center mb-4">Transparent</h4>
                  <p className="text-xl text-purple-800 text-center">
                    Code is visible to everyone, cannot be changed once deployed (immutable)
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <div className="text-5xl mb-4 text-center">⚡</div>
                  <h4 className="text-2xl font-bold text-green-900 text-center mb-4">Unstoppable</h4>
                  <p className="text-xl text-green-800 text-center">
                    Executes regardless of who invokes it, no one can prevent execution
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Simple Escrow Example</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                    <p className="font-bold text-2xl text-blue-900 mb-3">Step 1</p>
                    <p className="text-xl text-blue-800">Buyer sends payment to smart contract</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                    <p className="font-bold text-2xl text-purple-900 mb-3">Step 2</p>
                    <p className="text-xl text-purple-800">Seller delivers goods/services</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                    <p className="font-bold text-2xl text-green-900 mb-3">Step 3</p>
                    <p className="text-xl text-green-800">Upon confirmation, contract automatically releases payment</p>
                  </div>
                </div>
                <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 mt-6">
                  <p className="text-xl text-green-900 font-semibold text-center">
                    ✅ No escrow agent needed • No trust between parties required • No one can prevent execution
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                <h4 className="text-3xl font-bold text-blue-900 mb-6">Real-World Smart Contract Applications</h4>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                    <div className="flex items-start gap-4">
                      <Building className="w-12 h-12 text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-2xl text-purple-900 mb-3">Compound - Lending Protocol</p>
                        <p className="text-xl text-gray-700 mb-3">
                          Facilitated <strong>billions in loans</strong> without any human intervention. Users
                          supply assets to lending pools, smart contracts automatically set interest rates
                          based on supply and demand, manage collateral, and liquidate under-collateralized positions.
                        </p>
                        <p className="text-lg text-gray-600">✓ No employees • ✓ 24/7 operation • ✓ Fully automated</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-green-300">
                    <div className="flex items-start gap-4">
                      <Coins className="w-12 h-12 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-2xl text-green-900 mb-3">MakerDAO - Stablecoin</p>
                        <p className="text-xl text-gray-700 mb-3">
                          Issues <strong>DAI</strong>, a stablecoin backed by cryptocurrency collateral,
                          entirely through smart contracts that manage collateral ratios, liquidations, and governance.
                        </p>
                        <p className="text-lg text-gray-600">✓ Algorithmic stability • ✓ Decentralized governance • ✓ Over-collateralized</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-blue-300">
                    <div className="flex items-start gap-4">
                      <RefreshCw className="w-12 h-12 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-2xl text-blue-900 mb-3">Uniswap - Decentralized Exchange</p>
                        <p className="text-xl text-gray-700 mb-3">
                          Uses automated market maker smart contracts enabling trading without order books or
                          centralized matching engines. Processed <strong>hundreds of billions in volume</strong>.
                        </p>
                        <p className="text-lg text-gray-600">✓ No order books • ✓ Constant liquidity • ✓ Permissionless</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Smart Contract Security */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 text-white text-3xl font-bold shadow-xl">
                  4
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Smart Contract Security: The Double-Edged Sword
                </h3>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-red-300 mb-8">
                <div className="flex items-start gap-6">
                  <AlertTriangle className="w-16 h-16 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold text-red-900 mb-4">Code is Law - For Better or Worse</p>
                    <p className="text-2xl text-red-800 leading-relaxed mb-4">
                      The immutability and automation that make smart contracts powerful also make them
                      dangerous when implemented incorrectly. Unlike traditional software where bugs can be
                      patched, smart contract bugs can be catastrophic and permanent.
                    </p>
                    <p className="text-xl text-red-800 italic">
                      "The contract executes exactly as written, even if that differs from what was intended."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">⚠️ The DAO Hack of 2016</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                      The DAO raised <strong>$150 million</strong> to create a decentralized venture capital
                      fund. However, a recursive calling vulnerability allowed an attacker to drain
                      <strong className="text-red-600"> $50 million</strong>.
                    </p>
                    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                      <p className="font-bold text-xl text-red-900 mb-3">The Vulnerability:</p>
                      <p className="text-lg text-red-800">
                        Attacker repeatedly called the withdrawal function before balances updated,
                        draining funds. The code functioned exactly as written—the problem was that
                        what was written didn't match what was intended.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300 mb-4">
                      <p className="font-bold text-xl text-blue-900 mb-3">The Aftermath:</p>
                      <p className="text-lg text-blue-800 mb-3">
                        Led to Ethereum's controversial hard fork, splitting the network into:
                      </p>
                      <ul className="space-y-2 text-lg text-blue-800">
                        <li>• <strong>Ethereum</strong> - Reversed the hack</li>
                        <li>• <strong>Ethereum Classic</strong> - Maintained immutability</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-xl border-2 border-yellow-400">
                      <p className="font-bold text-xl text-yellow-900 mb-2">Key Lesson:</p>
                      <p className="text-lg text-yellow-800">
                        Smart contracts require different development approaches than traditional
                        software, emphasizing formal verification and extensive auditing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-300 mb-8">
                <h4 className="text-3xl font-bold text-purple-900 mb-6">Modern Smart Contract Security Practices</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                    <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
                    <p className="font-bold text-xl text-purple-900 mb-3">Formal Verification</p>
                    <p className="text-lg text-purple-800">
                      Mathematical proofs to verify contract behavior matches specifications
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-blue-300">
                    <Activity className="w-10 h-10 text-blue-600 mb-4" />
                    <p className="font-bold text-xl text-blue-900 mb-3">Automated Analysis</p>
                    <p className="text-lg text-blue-800">
                      Tools like MythX and Slither automatically detect common vulnerabilities
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-green-300">
                    <DollarSign className="w-10 h-10 text-green-600 mb-4" />
                    <p className="font-bold text-xl text-green-900 mb-3">Bug Bounties</p>
                    <p className="text-lg text-green-800">
                      Millions in rewards for finding flaws before deployment
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-orange-300">
                    <Users className="w-10 h-10 text-orange-600 mb-4" />
                    <p className="font-bold text-xl text-orange-900 mb-3">Professional Audits</p>
                    <p className="text-lg text-orange-800">
                      Specialized firms conduct thorough code reviews before launch
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-teal-300">
                    <Clock className="w-10 h-10 text-teal-600 mb-4" />
                    <p className="font-bold text-xl text-teal-900 mb-3">Time Locks</p>
                    <p className="text-lg text-teal-800">
                      Delay contract changes, giving users time to review and exit
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-pink-300">
                    <Lock className="w-10 h-10 text-pink-600 mb-4" />
                    <p className="font-bold text-xl text-pink-900 mb-3">Multi-Signature Controls</p>
                    <p className="text-lg text-pink-800">
                      Require multiple parties to approve critical operations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl shadow-xl p-10">
                <div className="flex items-start gap-6">
                  <AlertOctagon className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold mb-4">Recent Major Hacks Still Occur</p>
                    <p className="text-2xl leading-relaxed mb-6">
                      Despite improved practices, smart contract hacks still happen regularly, with
                      billions lost annually:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="font-bold text-xl mb-2">Poly Network (2021)</p>
                        <p className="text-lg">$610 million stolen (later returned)</p>
                      </div>
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="font-bold text-xl mb-2">Wormhole Bridge (2022)</p>
                        <p className="text-lg">$326 million exploited</p>
                      </div>
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="font-bold text-xl mb-2">Ongoing Challenge</p>
                        <p className="text-lg">Security remains critical concern</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Composability - Money LEGOs */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white text-3xl font-bold shadow-xl">
                  5
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Composability: The Financial LEGO Revolution
                </h3>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl shadow-xl p-10 mb-8">
                <div className="flex items-start gap-6">
                  <Layers className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-4xl font-bold mb-4">Building Blocks of Finance</p>
                    <p className="text-2xl leading-relaxed mb-6">
                      Smart contracts' composability—the ability to combine and build upon existing
                      contracts—has created an explosion of financial innovation. Developers can combine
                      existing protocols like LEGO blocks, creating complex financial products without
                      rebuilding basic components.
                    </p>
                    <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                      <p className="text-xl">
                        A single transaction might: <strong>borrow from Aave → swap on Uniswap → provide
                        liquidity on Curve → earn yield on Yearn</strong> — all in one atomic transaction!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 mb-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Flash Loans: The Impossible Made Possible</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                      Flash loans are <strong>uncollateralized loans</strong> that must be borrowed and
                      repaid within the same transaction. If repayment fails, the entire transaction reverts
                      as if it never happened.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                      <p className="font-bold text-xl text-purple-900 mb-3">How is this possible?</p>
                      <p className="text-lg text-purple-800 mb-3">
                        Smart contract composability makes it work. The loan exists only for the duration
                        of one transaction—seconds or less. No credit check, no collateral, zero risk to lender.
                      </p>
                      <p className="text-lg text-purple-800 font-semibold">
                        Anyone can borrow millions of dollars for one transaction!
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">Use Cases:</h5>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                        <p className="font-bold text-xl text-blue-900 mb-2">Arbitrage Trading</p>
                        <p className="text-lg text-blue-800">
                          Borrow millions, exploit price differences across exchanges, repay loan + keep profit
                        </p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                        <p className="font-bold text-xl text-green-900 mb-2">Collateral Swapping</p>
                        <p className="text-lg text-green-800">
                          Swap collateral in lending positions without closing and reopening
                        </p>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300">
                        <p className="font-bold text-xl text-orange-900 mb-2">Debt Refinancing</p>
                        <p className="text-lg text-orange-800">
                          Move debt between protocols to get better rates instantly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                <h4 className="text-3xl font-bold text-green-900 mb-6">Yield Aggregators: Automated Optimization</h4>
                <div className="flex items-start gap-6 mb-6">
                  <TrendingUp className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-2xl text-green-800 leading-relaxed mb-4">
                      <strong>Yearn Finance</strong> showcases advanced composability. It doesn't directly
                      generate yield—instead, smart contracts automatically move user funds between different
                      protocols to maximize returns.
                    </p>
                    <p className="text-xl text-green-700">
                      Your funds might be: lending on Compound today → providing liquidity on Curve tomorrow →
                      farming governance tokens on a new protocol next week — all automatically optimized!
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-green-300">
                  <p className="font-bold text-xl text-green-900 mb-3">Traditional Finance Comparison:</p>
                  <p className="text-lg text-green-800">
                    Imagine a savings account that automatically moves your money between different banks
                    to get the best interest rate, or a mutual fund that instantly rebalances across
                    hundreds of strategies based on real-time performance. This is composability in action!
                  </p>
                </div>
              </div>
            </div>

          </motion.section>

          {/* PART II: BLOCKCHAIN FOR SETTLEMENTS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part II: Blockchain for Settlements
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-purple-600"></div>
            </div>

            {/* Section 1: The Settlement Revolution */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white text-3xl font-bold shadow-xl">
                  1
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  The Settlement Revolution: From T+2 to Real-Time
                </h3>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-10 mb-8 border-2 border-purple-300">
                <h4 className="text-3xl font-bold text-purple-900 mb-6">The Problem with Traditional Settlement</h4>
                <p className="text-2xl text-purple-800 leading-relaxed mb-6">
                  When you buy stocks, the trade executes immediately, but <strong>settlement</strong>—the
                  actual exchange of securities for payment—typically takes <strong>two business days (T+2)</strong>.
                  During this period, both parties face counterparty risk, capital is locked up, and a complex
                  choreography of clearing houses, custodians, and settlement systems work to complete the transaction.
                </p>
                <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                  <p className="text-xl text-purple-900 font-semibold mb-3">💰 The Cost of Delay:</p>
                  <ul className="space-y-2 text-xl text-purple-800">
                    <li>• Post-trade processing costs the industry <strong>$17-24 billion annually</strong></li>
                    <li>• Creates systemic risk (see 2021 GameStop trading frenzy)</li>
                    <li>• Requires massive collateral to manage settlement risk</li>
                    <li>• Ties up capital that could be used elsewhere</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-red-300">
                  <h4 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <AlertCircle className="w-10 h-10" />
                    Traditional Settlement (T+2)
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-red-300">
                      <p className="font-bold text-lg text-red-900">Day 0: Trade Execution</p>
                      <p className="text-base text-red-800">You buy 100 shares at $50 each</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-orange-300">
                      <p className="font-bold text-lg text-orange-900">Day 1: Clearing</p>
                      <p className="text-base text-orange-800">Clearing houses net obligations, verify details</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-yellow-300">
                      <p className="font-bold text-lg text-yellow-900">Day 2: Settlement</p>
                      <p className="text-base text-yellow-800">Finally receive shares, money transferred</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl border-2 border-red-400">
                      <p className="text-lg text-red-900 font-semibold">
                        ⚠️ 2 days of counterparty risk, locked capital, systemic exposure
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <h4 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-10 h-10" />
                    Blockchain Settlement (Real-Time)
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-green-300">
                      <p className="font-bold text-lg text-green-900">Instant: Atomic Swap</p>
                      <p className="text-base text-green-800">Securities and payment transfer simultaneously</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-teal-300">
                      <p className="font-bold text-lg text-teal-900">Smart Contracts</p>
                      <p className="text-base text-teal-800">Automatically handle corporate actions, compliance</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-blue-300">
                      <p className="font-bold text-lg text-blue-900">24/7 Operation</p>
                      <p className="text-base text-blue-800">No business hours, weekends, or holidays</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl border-2 border-green-400">
                      <p className="text-lg text-green-900 font-semibold">
                        ✅ Zero counterparty risk, freed capital, reduced systemic exposure
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-10">
                <div className="flex items-start gap-6">
                  <Zap className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-4xl font-bold mb-4">Atomic Swaps: The Key Innovation</p>
                    <p className="text-2xl leading-relaxed mb-6">
                      In a blockchain settlement, the transfer of securities and payment happen in the
                      <strong> same transaction</strong>. Either both legs complete, or neither does,
                      eliminating counterparty risk entirely.
                    </p>
                    <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                      <p className="text-xl">
                        Smart contracts encode complex settlement logic: corporate actions, regulatory
                        compliance, multi-party transactions—all executed automatically without intermediaries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Real-World Settlement Implementations */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-3xl font-bold shadow-xl">
                  2
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Real-World Settlement Implementations
                </h3>
              </div>

              <div className="space-y-8">
                {/* JPMorgan JPM Coin */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Building className="w-16 h-16 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-blue-900 mb-4">JPMorgan's JPM Coin</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Launched in 2019, JPM Coin is a stablecoin used for <strong>instant settlement</strong>
                        between JPMorgan's institutional clients. When Client A wants to pay Client B (both
                        JPMorgan customers), they use JPM Coin for instant settlement rather than waiting for
                        wire transfers.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                      <p className="font-bold text-xl text-blue-900 mb-3">📊 Scale</p>
                      <p className="text-lg text-blue-800">
                        Processed <strong>hundreds of billions</strong> in transactions
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                      <p className="font-bold text-xl text-purple-900 mb-3">🏢 Major Clients</p>
                      <p className="text-lg text-purple-800">
                        Siemens uses it for global treasury operations
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                      <p className="font-bold text-xl text-green-900 mb-3">⏰ 24/7</p>
                      <p className="text-lg text-green-800">
                        Eliminates internal settlement delays
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-2 border-blue-300 mt-6">
                    <p className="text-xl text-blue-900">
                      <strong>Onyx Platform:</strong> JPMorgan is expanding to multicurrency settlements
                      and interbank transactions
                    </p>
                  </div>
                </div>

                {/* DTCC Project Whitney */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="flex items-start gap-6 mb-6">
                    <FileText className="w-16 h-16 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-purple-900 mb-4">DTCC's Project Whitney</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Explores blockchain for <strong>private market securities</strong> settlement.
                        Private securities traditionally involve manual processes, paper certificates, and
                        weeks-long settlement. DTCC's blockchain platform digitizes these securities and
                        automates settlement.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                      <p className="font-bold text-xl text-purple-900 mb-3">⏱️ Speed</p>
                      <p className="text-lg text-purple-800">
                        Reduced settlement time from <strong>weeks to minutes</strong>
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                      <p className="font-bold text-xl text-blue-900 mb-3">📋 Standardization</p>
                      <p className="text-lg text-blue-800">
                        Smart contracts enforce consistent processes across markets
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300 mt-6">
                    <p className="text-xl text-purple-900">
                      <strong>Key Innovation:</strong> Easier to build blockchain-native systems than
                      retrofit existing processes for markets lacking established infrastructure
                    </p>
                  </div>
                </div>

                {/* Central Bank Projects */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Landmark className="w-16 h-16 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-green-900 mb-4">Central Bank Digital Currencies (CBDCs)</h4>
                      <p className="text-2xl text-green-800 leading-relaxed mb-4">
                        Central banks worldwide are exploring blockchain for high-value interbank settlement
                        through CBDC projects. These systems maintain the safety of central bank money while
                        enabling instant, 24/7 settlement.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border-2 border-blue-300">
                      <p className="text-xl font-bold text-blue-900 mb-3">🇨🇦 Project Jasper</p>
                      <p className="text-lg text-blue-800">Bank of Canada</p>
                      <p className="text-base text-blue-700 mt-2">Real-time gross settlement system</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                      <p className="text-xl font-bold text-purple-900 mb-3">🇸🇬 Project Ubin</p>
                      <p className="text-lg text-purple-800">Monetary Authority of Singapore</p>
                      <p className="text-base text-purple-700 mt-2">Evolved into production system (Partior)</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-green-300">
                      <p className="text-xl font-bold text-green-900 mb-3">🇪🇺🇯🇵 Project Stella</p>
                      <p className="text-lg text-green-800">ECB and Bank of Japan</p>
                      <p className="text-base text-green-700 mt-2">Cross-border payment research</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl mt-6">
                    <p className="text-2xl font-bold mb-3">🚀 Partior Platform (Singapore)</p>
                    <p className="text-xl leading-relaxed">
                      JPMorgan and Temasek launched Partior for <strong>multicurrency settlement</strong>.
                      Banks settle foreign exchange and cross-border payments instantly using tokenized
                      commercial bank money. Proves blockchain can meet stringent requirements of
                      systemically important financial infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Cross-Border Settlement */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white text-3xl font-bold shadow-xl">
                  3
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Cross-Border Settlement: Breaking Down Barriers
                </h3>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8 border-2 border-orange-300 mb-8">
                <div className="flex items-start gap-6">
                  <Globe className="w-16 h-16 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold text-orange-900 mb-4">The Cross-Border Inefficiency Problem</p>
                    <p className="text-2xl text-orange-800 leading-relaxed mb-6">
                      A payment from New York to Mumbai might take <strong>days</strong>, cost
                      <strong> 5-10% in fees</strong>, and pass through multiple correspondent banks.
                      The sender often doesn't know the final fee or arrival time. Recipients might receive
                      less than expected due to hidden fees.
                    </p>
                    <div className="bg-white p-6 rounded-xl border-2 border-orange-300">
                      <p className="text-xl text-orange-900 font-semibold mb-3">💸 Impact on Remittances:</p>
                      <p className="text-lg text-orange-800">
                        Migrant workers sending money home lose <strong>billions annually</strong> to fees.
                        Blockchain promises direct, instant, transparent transfers regardless of borders or
                        banking relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Ripple */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="flex items-center gap-4 mb-6">
                    <Network className="w-12 h-12 text-blue-600" />
                    <h4 className="text-3xl font-bold text-blue-900">Ripple & XRP Ledger</h4>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Rather than moving money through correspondent banking networks, Ripple enables
                    <strong> direct transfer of value</strong> using XRP as a bridge currency.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300 mb-6">
                    <p className="font-bold text-lg text-blue-900 mb-3">How it Works:</p>
                    <ol className="space-y-2 text-lg text-blue-800">
                      <li>1️⃣ Bank in Mexico converts pesos → XRP</li>
                      <li>2️⃣ Transfer XRP across network (seconds)</li>
                      <li>3️⃣ Convert XRP → Thai baht</li>
                    </ol>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <p className="text-lg text-gray-700">Minutes instead of days</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <p className="text-lg text-gray-700">Pennies instead of dollars in fees</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <p className="text-lg text-gray-700">Complete transparency</p>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl border-2 border-blue-300 mt-6">
                    <p className="text-lg text-blue-900 font-semibold">
                      Processed <strong>billions</strong> in cross-border payments for financial institutions
                    </p>
                  </div>
                </div>

                {/* Stellar */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="flex items-center gap-4 mb-6">
                    <TrendingUp className="w-12 h-12 text-purple-600" />
                    <h4 className="text-3xl font-bold text-purple-900">Stellar Network</h4>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Created by Ripple co-founder, Stellar takes a more <strong>decentralized approach</strong>.
                    Anyone can issue tokens representing real-world assets, with a decentralized exchange
                    for converting between them.
                  </p>
                  <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300 mb-6">
                    <p className="font-bold text-lg text-purple-900 mb-3">Real Implementations:</p>
                    <ul className="space-y-3 text-lg text-purple-800">
                      <li>• <strong>MoneyGram:</strong> Instant remittances with stablecoins</li>
                      <li>• <strong>World Bank:</strong> Issued bonds on Stellar</li>
                      <li>• <strong>IBM World Wire:</strong> Banks clear and settle cross-border payments</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl border-2 border-purple-300">
                    <p className="text-lg text-purple-900 font-semibold">
                      Blockchain-based cross-border settlement isn't theoretical—it's happening at scale,
                      saving time and money for millions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Securities Settlement & Tokenization */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white text-3xl font-bold shadow-xl">
                  4
                </div>
                <h3 className="text-5xl font-bold text-gray-900">
                  Securities Settlement: Tokenization and Beyond
                </h3>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-2xl shadow-xl p-10 mb-8">
                <div className="flex items-start gap-6">
                  <FileCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-4xl font-bold mb-4">The Tokenization Revolution</p>
                    <p className="text-2xl leading-relaxed mb-6">
                      Tokenization represents stocks, bonds, and other financial instruments as blockchain
                      tokens. Traditional securities exist as entries in custodian databases. Tokenized
                      securities exist as blockchain tokens, with ownership tracked on a distributed ledger
                      and transfers happening peer-to-peer.
                    </p>
                    <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                      <p className="text-xl font-bold mb-3">This Enables:</p>
                      <ul className="space-y-2 text-lg">
                        <li>✓ Fractional ownership (own 0.1 shares instead of 1)</li>
                        <li>✓ 24/7 trading (no market hours)</li>
                        <li>✓ Instant settlement (no T+2 delay)</li>
                        <li>✓ Programmable compliance (rules enforced by smart contracts)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Swiss SIX Digital Exchange */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Award className="w-16 h-16 text-red-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-red-900 mb-4">🇨🇭 Swiss SIX Digital Exchange (SDX)</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Launched in 2021 as the <strong>world's first fully regulated digital asset exchange</strong>
                        operated by a major stock exchange. SDX enables trading and settlement of tokenized
                        securities, with the Swiss National Bank providing wholesale CBDC for payment.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                      <p className="font-bold text-xl text-red-900 mb-3">⚡ Instant Settlement</p>
                      <p className="text-lg text-red-800">
                        Trades settle immediately, not T+2
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300">
                      <p className="font-bold text-xl text-orange-900 mb-3">🤖 Automated Actions</p>
                      <p className="text-lg text-orange-800">
                        Corporate actions execute via smart contracts
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
                      <p className="font-bold text-xl text-yellow-900 mb-3">24/7 Operations</p>
                      <p className="text-lg text-yellow-800">
                        No market hours or holidays
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-2 border-red-300 mt-6">
                    <p className="text-xl text-red-900">
                      <strong>Major Issuers:</strong> City of Lugano, World Bank. Success has inspired London
                      Stock Exchange, Deutsche Börse, and others to develop similar platforms.
                    </p>
                  </div>
                </div>

                {/* European Investment Bank */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Building className="w-16 h-16 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-blue-900 mb-4">🇪🇺 European Investment Bank (EIB) Digital Bonds</h4>
                      <p className="text-2xl text-blue-800 leading-relaxed mb-4">
                        EIB's progressive digital bond issuances showcase the evolution of tokenized securities:
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl border-2 border-blue-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                        <p className="font-bold text-2xl text-blue-900">2021: €100M on Ethereum</p>
                      </div>
                      <p className="text-lg text-blue-800 ml-16">
                        Settlement in traditional currency, proved blockchain could handle bond issuance
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                        <p className="font-bold text-2xl text-purple-900">2022: On-chain CBDC Settlement</p>
                      </div>
                      <p className="text-lg text-purple-800 ml-16">
                        Used experimental CBDC for payment, full blockchain settlement
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-green-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                        <p className="font-bold text-2xl text-green-900">2023: Multi-currency Bonds</p>
                      </div>
                      <p className="text-lg text-green-800 ml-16">
                        Settled with multiple CBDCs, handled complex compliance and corporate actions
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl mt-6">
                    <p className="text-xl leading-relaxed">
                      <strong>Major Participants:</strong> Goldman Sachs, Santander, Societe Generale.
                      These aren't experiments—they're production issuances of real securities, proving
                      blockchain can handle the complexity of modern capital markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* Part III: Auditing and Claims */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part III: Auditing and Claims Processing
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-cyan-600 to-teal-600"></div>
            </div>

            {/* Section 1: Continuous Auditing */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  The Continuous Auditing Revolution
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-blue-200">
                <h4 className="text-3xl font-bold text-blue-900 mb-6">From Periodic Reviews to Real-Time Transparency</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  Traditional auditing is like checking your bank balance once a month—by the time you discover
                  an issue, weeks of transactions have passed. Blockchain enables <strong>continuous auditing</strong>,
                  where every transaction is instantly verifiable by all authorized parties.
                </p>
              </div>

              {/* Traditional vs Blockchain Auditing */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-red-300">
                  <h4 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <X className="w-10 h-10" />
                    Traditional Auditing
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-red-800">Annual or Quarterly Reviews</p>
                        <p className="text-lg text-gray-700">Fraud can go undetected for months</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-red-800">Manual Sampling</p>
                        <p className="text-lg text-gray-700">Auditors review only 10-20% of transactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-red-800">Data Silos</p>
                        <p className="text-lg text-gray-700">Information scattered across systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-red-800">High Costs</p>
                        <p className="text-lg text-gray-700">Global audit fees exceed $35 billion annually</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <h4 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <Check className="w-10 h-10" />
                    Blockchain Continuous Auditing
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-green-800">Real-Time Monitoring</p>
                        <p className="text-lg text-gray-700">Anomalies detected instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-green-800">100% Transaction Coverage</p>
                        <p className="text-lg text-gray-700">Every transaction is auditable and traceable</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-green-800">Single Source of Truth</p>
                        <p className="text-lg text-gray-700">All parties access the same immutable ledger</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl font-semibold text-green-800">Reduced Costs</p>
                        <p className="text-lg text-gray-700">Automation cuts audit time by 60-80%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-teal-300">
                <h4 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-3">
                  <Zap className="w-10 h-10 text-teal-600" />
                  Key Benefits of Blockchain Auditing
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-600">
                    <Eye className="w-12 h-12 text-teal-600 mb-4" />
                    <p className="text-xl font-semibold text-gray-900 mb-2">Complete Transparency</p>
                    <p className="text-lg text-gray-700">
                      Regulators can access real-time financial data without waiting for annual reports
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                    <Shield className="w-12 h-12 text-purple-600 mb-4" />
                    <p className="text-xl font-semibold text-gray-900 mb-2">Fraud Prevention</p>
                    <p className="text-lg text-gray-700">
                      Immutable records prevent tampering and retroactive modifications
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                    <TrendingDown className="w-12 h-12 text-blue-600 mb-4" />
                    <p className="text-xl font-semibold text-gray-900 mb-2">Cost Efficiency</p>
                    <p className="text-lg text-gray-700">
                      Deloitte estimates 30-50% reduction in audit costs with blockchain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Smart Contract Auditing */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Auditing the "Code as Law": Smart Contract Security
                </h3>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-purple-200">
                <h4 className="text-3xl font-bold text-purple-900 mb-6">Why Smart Contract Audits Matter</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  When a smart contract holds millions (or billions) of dollars, a single bug can be catastrophic.
                  The <strong>2016 DAO hack</strong> (which we covered in Part I) demonstrated this—$60 million was stolen
                  due to a reentrancy vulnerability that a proper audit would have caught.
                </p>
                <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg">
                  <p className="text-xl text-red-900 flex items-start gap-3">
                    <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
                    <span>
                      <strong>2021-2023 DeFi Hacks:</strong> Over $6 billion lost to smart contract exploits.
                      The majority could have been prevented with thorough audits.
                    </span>
                  </p>
                </div>
              </div>

              {/* Audit Process */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-purple-300">
                <h4 className="text-3xl font-bold text-purple-900 mb-6">The Smart Contract Audit Process</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-900 rounded-full text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Code Review</h5>
                      <p className="text-xl text-gray-700">
                        Auditors manually examine every line of Solidity code for common vulnerabilities
                        (reentrancy, integer overflow, access control flaws)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-900 rounded-full text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Automated Scanning</h5>
                      <p className="text-xl text-gray-700">
                        Tools like <strong>MythX</strong>, <strong>Slither</strong>, and <strong>Securify</strong> scan
                        for known patterns of bugs and security issues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-900 rounded-full text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Formal Verification</h5>
                      <p className="text-xl text-gray-700">
                        Mathematical proofs ensure the contract behaves exactly as intended under all conditions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-900 rounded-full text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Penetration Testing</h5>
                      <p className="text-xl text-gray-700">
                        "White hat" hackers attempt to exploit the contract on a testnet before mainnet deployment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leading Audit Firms */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border-2 border-indigo-300">
                <h4 className="text-3xl font-bold text-indigo-900 mb-6">Leading Smart Contract Audit Firms</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-indigo-900 mb-3">CertiK</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      Audited over $310 billion in assets. Used formal verification for protocols like Aave,
                      Polygon, and Binance Smart Chain.
                    </p>
                    <p className="text-base text-indigo-600 font-semibold">Focus: AI-powered security analysis</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-indigo-900 mb-3">Trail of Bits</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      Developed Slither and Echidna tools. Audited MakerDAO, Compound, and Uniswap V3.
                    </p>
                    <p className="text-base text-indigo-600 font-semibold">Focus: Deep security research</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-indigo-900 mb-3">OpenZeppelin</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      Creators of industry-standard smart contract libraries. Audited Coinbase, Ethereum Foundation projects.
                    </p>
                    <p className="text-base text-indigo-600 font-semibold">Focus: Best practices & standards</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-indigo-900 mb-3">ConsenSys Diligence</h5>
                    <p className="text-lg text-gray-700 mb-3">
                      Part of the ConsenSys ecosystem. Audited Uniswap, Filecoin, Gnosis Safe.
                    </p>
                    <p className="text-base text-indigo-600 font-semibold">Focus: Ethereum ecosystem expertise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Insurance Claims on Blockchain */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Automated Insurance Claims: From Weeks to Seconds
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-blue-200">
                <h4 className="text-3xl font-bold text-blue-900 mb-6">The Claims Processing Problem</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  Traditional insurance claims are a nightmare: paperwork, adjuster visits, weeks of waiting,
                  disputes over coverage. The average claim takes <strong>30-60 days</strong> to settle,
                  and fraud costs the industry <strong>$80 billion annually</strong>.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Blockchain changes this with <strong>parametric insurance</strong>—smart contracts that
                  automatically trigger payouts when predefined conditions are met, verified by trusted data sources (oracles).
                </p>
              </div>

              {/* How Parametric Insurance Works */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-teal-300">
                <h4 className="text-3xl font-bold text-teal-900 mb-6">How Parametric Insurance Works</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-full text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1 bg-teal-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Define Trigger Event</h5>
                      <p className="text-xl text-gray-700">
                        Example: Flight delayed &gt; 2 hours, Earthquake &gt; 6.5 magnitude, Crop yield &lt; 50% of average
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-full text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1 bg-teal-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Smart Contract Creation</h5>
                      <p className="text-xl text-gray-700">
                        Policy terms coded into an immutable smart contract. Premium paid upfront and held in escrow.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-full text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1 bg-teal-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Oracle Data Feed</h5>
                      <p className="text-xl text-gray-700">
                        Trusted oracles (Chainlink, APIs) provide real-world data: weather, flight status, earthquake sensors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-full text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1 bg-teal-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">Automatic Payout</h5>
                      <p className="text-xl text-gray-700">
                        When trigger condition is met, smart contract instantly releases funds—no claims adjuster needed!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-World Insurance Examples */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8 border-2 border-orange-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Zap className="w-16 h-16 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-orange-900 mb-4">Etherisc: Decentralized Insurance</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        <strong>Flight Delay Insurance:</strong> Buy a policy for $10. If your flight is delayed
                        &gt; 45 minutes (verified by FlightStats API), receive automatic payout within 15 seconds.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>Crop Insurance (Kenya):</strong> Farmers insure against drought. Weather data from
                        IoT sensors triggers payouts automatically—no need to file claims or prove damages.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-orange-600">$2M+</p>
                      <p className="text-lg text-gray-700">Policies Issued</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-orange-600">98%</p>
                      <p className="text-lg text-gray-700">Cost Reduction</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-orange-600">15 sec</p>
                      <p className="text-lg text-gray-700">Payout Time</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Shield className="w-16 h-16 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-green-900 mb-4">Lemonade: AI + Blockchain Insurance</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Lemonade uses blockchain to record all claims immutably. Their <strong>"Instant Everything"</strong>
                        model paid a theft claim in <strong>3 seconds</strong>—a world record.
                      </p>
                      <p className="text-xl text-gray-700">
                        How it works: AI bot (Jim) processes claim → Checks blockchain for fraud patterns →
                        Approves and pays instantly if legitimate
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg">
                    <p className="text-xl text-green-900">
                      <strong>Impact:</strong> 30% of claims settled instantly, zero paperwork, 90% customer satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Multi-Party Complex Scenarios */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Complex Multi-Party Scenarios: Marine Insurance & Beyond
                </h3>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-indigo-200">
                <h4 className="text-3xl font-bold text-indigo-900 mb-6">The Challenge: Coordinating Multiple Stakeholders</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  Some insurance scenarios involve dozens of parties: shippers, insurers, reinsurers, brokers,
                  customs, banks. A single shipment might have <strong>20+ documents</strong> exchanged via
                  fax and email—creating delays, errors, and fraud opportunities.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Blockchain enables <strong>shared ledger visibility</strong> where all parties see the same
                  information in real-time, eliminating reconciliation headaches.
                </p>
              </div>

              {/* Insurwave Case Study */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-300">
                <div className="flex items-start gap-6 mb-6">
                  <Network className="w-16 h-16 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-3xl font-bold text-blue-900 mb-4">
                      Insurwave: Marine Insurance Revolution (EY + Maersk + Microsoft)
                    </h4>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                      Launched in 2018, Insurwave is a blockchain platform for marine cargo insurance.
                      It connects ship owners (Maersk), insurers (AIG, Liberty Mutual, MS Amlin),
                      and brokers on a single ledger.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h5 className="text-2xl font-bold text-blue-900 mb-4">How It Works</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-200 text-blue-900 rounded-full text-lg font-bold flex-shrink-0">
                        1
                      </div>
                      <p className="text-xl text-gray-700">
                        <strong>Vessel Data Upload:</strong> Ship's location, cargo value, route automatically
                        uploaded to blockchain via IoT sensors
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-200 text-blue-900 rounded-full text-lg font-bold flex-shrink-0">
                        2
                      </div>
                      <p className="text-xl text-gray-700">
                        <strong>Risk Assessment:</strong> AI analyzes weather, piracy zones, ship condition.
                        Premium calculated in real-time
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-200 text-blue-900 rounded-full text-lg font-bold flex-shrink-0">
                        3
                      </div>
                      <p className="text-xl text-gray-700">
                        <strong>Instant Coverage:</strong> Policy activated within seconds. All parties
                        (insurer, reinsurer, broker) see identical contract
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-200 text-blue-900 rounded-full text-lg font-bold flex-shrink-0">
                        4
                      </div>
                      <p className="text-xl text-gray-700">
                        <strong>Claims Processing:</strong> If incident occurs (storm damage, theft),
                        oracle data triggers smart contract payout
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">1000+</p>
                    <p className="text-lg">Vessels Insured</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">75%</p>
                    <p className="text-lg">Time Saved</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">$20B+</p>
                    <p className="text-lg">Insured Value</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">30%</p>
                    <p className="text-lg">Cost Reduction</p>
                  </div>
                </div>
              </div>

              {/* B3i Consortium */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                <div className="flex items-start gap-6 mb-6">
                  <Building className="w-16 h-16 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-3xl font-bold text-purple-900 mb-4">
                      B3i: Blockchain Insurance Industry Initiative
                    </h4>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                      A consortium of <strong>40+ global insurers</strong> (Allianz, AXA, Swiss Re, Munich Re, Zurich)
                      building shared blockchain infrastructure for reinsurance.
                    </p>
                    <p className="text-xl text-gray-700 mb-4">
                      <strong>Use Case:</strong> Catastrophe excess-of-loss (Cat XOL) reinsurance. When a hurricane
                      hits, blockchain instantly calculates which reinsurers owe what amounts—previously took weeks
                      of manual reconciliation.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-lg">
                  <p className="text-xl text-purple-900">
                    <strong>Result:</strong> Settlement time reduced from 3-6 months to 24 hours. Claims processing
                    costs cut by 40%.
                  </p>
                </div>
              </div>
            </div>

          </motion.section>

          {/* Part IV: India's Blockchain Ecosystem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-red-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part IV: India's Blockchain Ecosystem
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-orange-600"></div>
            </div>

            {/* Section 1: UIDAI and Digital Identity */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  UIDAI (Aadhaar): World's Largest Biometric Identity System
                </h3>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-orange-200">
                <div className="flex items-start gap-6 mb-6">
                  <Users className="w-20 h-20 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-3xl font-bold text-orange-900 mb-6">Aadhaar: Transforming 1.4 Billion Lives</h4>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                      India's <strong>Unique Identification Authority of India (UIDAI)</strong> manages Aadhaar,
                      the world's largest biometric database with <strong>1.39 billion enrolled citizens</strong>.
                      While not blockchain-based initially, UIDAI is exploring blockchain for enhanced security
                      and privacy.
                    </p>
                    <p className="text-xl text-gray-700">
                      🇮🇳 Aadhaar processes <strong>60+ million authentication requests daily</strong> for banking,
                      welfare, SIM cards, and government services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Challenges */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-red-300">
                <h4 className="text-3xl font-bold text-red-900 mb-6">Challenges with Centralized Aadhaar System</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                    <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
                    <h5 className="text-2xl font-bold text-red-800 mb-3">Privacy Concerns</h5>
                    <p className="text-lg text-gray-700">
                      Central database creates a "honeypot" for hackers. Data breaches in 2018 exposed
                      millions of records.
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                    <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
                    <h5 className="text-2xl font-bold text-red-800 mb-3">Single Point of Failure</h5>
                    <p className="text-lg text-gray-700">
                      If UIDAI servers go down (as in March 2023), millions cannot access banking or government services.
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                    <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
                    <h5 className="text-2xl font-bold text-red-800 mb-3">Unauthorized Surveillance</h5>
                    <p className="text-lg text-gray-700">
                      Government can track every citizen's activities across all services—raising civil liberty concerns.
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                    <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
                    <h5 className="text-2xl font-bold text-red-800 mb-3">Data Sharing Without Consent</h5>
                    <p className="text-lg text-gray-700">
                      Third-party apps access Aadhaar data without explicit user control over what's shared.
                    </p>
                  </div>
                </div>
              </div>

              {/* Blockchain Solution */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                <h4 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <Rocket className="w-10 h-10 text-green-600" />
                  How Blockchain Can Transform Aadhaar
                </h4>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">1. Self-Sovereign Identity (SSI)</h5>
                    <p className="text-xl text-gray-700 mb-3">
                      Instead of UIDAI holding all data, citizens store encrypted identity credentials on their devices.
                      Blockchain anchors cryptographic proofs (hashes) for verification.
                    </p>
                    <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg">
                      <p className="text-lg text-green-900">
                        <strong>Example:</strong> Bank verifies "Is this person over 18?" without seeing birthdate.
                        Zero-knowledge proof on blockchain confirms eligibility.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">2. Decentralized Storage</h5>
                    <p className="text-xl text-gray-700 mb-3">
                      Biometric data distributed across multiple nodes (state governments, banks, telecom)
                      using sharding—no single entity holds complete database.
                    </p>
                    <p className="text-lg text-gray-700">
                      Even if one node is compromised, attackers can't reconstruct full identity.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">3. Audit Trail & Consent Management</h5>
                    <p className="text-xl text-gray-700 mb-3">
                      Every access to Aadhaar data recorded immutably on blockchain. Citizens see who accessed
                      what data and when—like a "credit report" for privacy.
                    </p>
                    <p className="text-lg text-gray-700">
                      Smart contracts enforce consent: "Bank can verify KYC, but NOT access my address history."
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">4. Cross-Border Interoperability</h5>
                    <p className="text-xl text-gray-700">
                      Indian citizens working abroad can use blockchain-verified Aadhaar for international KYC
                      without exposing raw biometric data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pilot Projects */}
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <p className="text-xl text-blue-900">
                  <strong>Status (2024):</strong> UIDAI partnered with <strong>IIT Kanpur</strong> and
                  <strong> C-DAC Pune</strong> to pilot blockchain-based consent management for Aadhaar.
                  Expected rollout: 2025-2026 for select states.
                </p>
              </div>
            </div>

            {/* Section 2: GSTN - Goods and Services Tax Network */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  GSTN: Revolutionizing India's Tax Infrastructure with Blockchain
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-blue-200">
                <div className="flex items-start gap-6 mb-6">
                  <FileText className="w-20 h-20 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-3xl font-bold text-blue-900 mb-6">GSTN: The World's Largest Tax Network</h4>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                      India's <strong>Goods and Services Tax Network (GSTN)</strong> processes tax filings for
                      <strong> 14+ million businesses</strong>, generating <strong>₹1.87 trillion</strong> ($225 billion)
                      in monthly revenue (as of 2024).
                    </p>
                    <p className="text-xl text-gray-700">
                      The system handles <strong>7+ billion invoices annually</strong>—making it the world's largest
                      real-time tax infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              {/* GST Fraud Challenge */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-red-300">
                <h4 className="text-3xl font-bold text-red-900 mb-6">The ₹45,000 Crore Fraud Problem</h4>
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <Ban className="w-12 h-12 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        <strong>Fake Invoice Scam:</strong> Shell companies create fake invoices to claim fraudulent
                        Input Tax Credit (ITC). In 2022-23, the government detected <strong>₹45,000 crore</strong>
                        ($5.4 billion) in fake ITC claims.
                      </p>
                      <p className="text-xl text-gray-700">
                        <strong>How it works:</strong> Company A creates fake purchase invoice from non-existent
                        Company B → Claims ITC refund → Government loses revenue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-100 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">8,500+</p>
                    <p className="text-lg text-gray-700">Fake Firms Detected (2023)</p>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-orange-600 mb-2">₹45,000 Cr</p>
                    <p className="text-lg text-gray-700">Fraudulent Claims (2023)</p>
                  </div>
                  <div className="bg-yellow-100 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-yellow-600 mb-2">6 months</p>
                    <p className="text-lg text-gray-700">Average Detection Time</p>
                  </div>
                </div>
              </div>

              {/* Blockchain Solution for GST */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-300">
                <h4 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-10 h-10 text-green-600" />
                  Blockchain-Powered GST: The Solution
                </h4>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-900 rounded-full text-xl font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h5 className="text-2xl font-bold text-gray-900 mb-3">Invoice Anchoring on Blockchain</h5>
                        <p className="text-xl text-gray-700 mb-3">
                          Every invoice's hash recorded on blockchain at creation time. Suppliers, buyers, and
                          tax authorities see same immutable record.
                        </p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-lg text-gray-700">
                            <strong>Result:</strong> Impossible to create fake invoices after the fact.
                            Blockchain timestamp proves invoice authenticity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-900 rounded-full text-xl font-bold flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h5 className="text-2xl font-bold text-gray-900 mb-3">Real-Time ITC Verification</h5>
                        <p className="text-xl text-gray-700 mb-3">
                          Smart contracts automatically match supplier's outward supply (GSTR-1) with buyer's
                          inward supply (GSTR-2). Mismatch? ITC claim rejected instantly.
                        </p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-lg text-gray-700">
                            <strong>Current system:</strong> Manual reconciliation takes 6 months.
                            <br />
                            <strong>Blockchain:</strong> Instant verification, 99.9% fraud reduction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-900 rounded-full text-xl font-bold flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h5 className="text-2xl font-bold text-gray-900 mb-3">Supply Chain Traceability</h5>
                        <p className="text-xl text-gray-700 mb-3">
                          Track goods from manufacturer → distributor → retailer. Each transfer recorded
                          on blockchain with geolocation and timestamp.
                        </p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-lg text-gray-700">
                            <strong>Use case:</strong> Pharmaceutical supply chain. Ensures medicines aren't
                            diverted to black market or counterfeited.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-900 rounded-full text-xl font-bold flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <h5 className="text-2xl font-bold text-gray-900 mb-3">Cross-State Reconciliation</h5>
                        <p className="text-xl text-gray-700 mb-3">
                          Inter-state transactions automatically reconciled on shared blockchain. IGST
                          (Integrated GST) settlement happens in real-time instead of monthly.
                        </p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-lg text-gray-700">
                            <strong>Impact:</strong> Saves ₹12,000 crore annually in reconciliation costs
                            for state governments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilot Implementation */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                <div className="flex items-start gap-6 mb-6">
                  <Target className="w-16 h-16 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-3xl font-bold text-purple-900 mb-4">
                      GSTN Blockchain Pilot: "Project G-Block" (2023-2024)
                    </h4>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                      In partnership with <strong>IIT Madras</strong> and <strong>Infosys</strong>, GSTN launched
                      a blockchain pilot in <strong>Maharashtra and Gujarat</strong> (covering 2 million businesses).
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-purple-900 mb-3">Technology Stack</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-700">
                          <strong>Hyperledger Fabric:</strong> Permissioned blockchain for GSTN nodes
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-700">
                          <strong>IPFS:</strong> Invoice storage (hashes on blockchain, files on IPFS)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-700">
                          <strong>Oracles:</strong> Bank APIs verify payment proof before ITC approval
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-purple-900 mb-3">Results (6-month pilot)</h5>
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-lg p-4">
                        <p className="text-3xl font-bold text-purple-600">92%</p>
                        <p className="text-lg text-gray-700">Reduction in fake ITC claims</p>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <p className="text-3xl font-bold text-indigo-600">48 hours</p>
                        <p className="text-lg text-gray-700">Fraud detection (was 6 months)</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-3xl font-bold text-blue-600">₹8,400 Cr</p>
                        <p className="text-lg text-gray-700">Projected annual savings</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-lg">
                  <p className="text-xl text-purple-900">
                    <strong>National Rollout:</strong> Expected by April 2025 for all 14+ million GST-registered
                    businesses. Will make India the first country with fully blockchain-integrated national tax system.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Other Indian Blockchain Initiatives */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Other Major Blockchain Projects in India
                </h3>
              </div>

              <div className="space-y-8">
                {/* RBI CBDC */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Landmark className="w-16 h-16 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-blue-900 mb-4">
                        RBI Digital Rupee (e₹): India's CBDC
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Reserve Bank of India launched <strong>Digital Rupee (e₹-R for retail, e₹-W for wholesale)</strong>
                        in December 2022. As of 2024, <strong>5 million users</strong> transact daily.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        Uses a <strong>two-tier distribution model</strong>: RBI issues to banks → Banks distribute to
                        citizens via mobile wallets. Blockchain ensures every e₹ is traceable to prevent counterfeiting.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">5M+</p>
                      <p className="text-lg text-gray-700">Active Users</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">₹1.3 Cr</p>
                      <p className="text-lg text-gray-700">Daily Transaction Volume</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">16 Banks</p>
                      <p className="text-lg text-gray-700">Participating (SBI, HDFC, ICICI)</p>
                    </div>
                  </div>
                </div>

                {/* TReDS */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <div className="flex items-start gap-6">
                    <Network className="w-16 h-16 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-green-900 mb-4">
                        TReDS: Blockchain for MSME Invoice Financing
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        <strong>Trade Receivables Discounting System (TReDS)</strong> uses blockchain to help
                        small businesses get paid faster. MSMEs upload invoices → Financiers bid to buy them
                        at discount → Instant cash flow for suppliers.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        Powered by <strong>RBI-mandated platforms</strong>: RXIL (NSE), M1xchange, Invoicemart.
                        Blockchain ensures invoice authenticity and prevents double-financing fraud.
                      </p>
                      <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg">
                        <p className="text-xl text-green-900">
                          <strong>Impact:</strong> ₹1.2 lakh crore ($14.4 billion) financed since 2020.
                          Average payment cycle reduced from 60 days to 3 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* National Blockchain Framework */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="flex items-start gap-6">
                    <Globe className="w-16 h-16 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-purple-900 mb-4">
                        National Blockchain Framework (NBF) by MeitY
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Ministry of Electronics & IT launched <strong>NBF</strong> in 2024—a shared blockchain
                        infrastructure for all government departments. Think of it as "Blockchain-as-a-Service"
                        for India.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>Planned Use Cases:</strong>
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4">
                          <h5 className="text-xl font-bold text-purple-900 mb-2">Land Records</h5>
                          <p className="text-lg text-gray-700">
                            Digitize 12 crore land titles across India. Prevent property fraud via immutable records.
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-4">
                          <h5 className="text-xl font-bold text-purple-900 mb-2">Educational Certificates</h5>
                          <p className="text-lg text-gray-700">
                            Blockchain-verified degrees. Maharashtra already issues 1 million blockchain diplomas annually.
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-4">
                          <h5 className="text-xl font-bold text-purple-900 mb-2">Healthcare Records</h5>
                          <p className="text-lg text-gray-700">
                            Unified health ID with blockchain. Patients control who accesses medical history.
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-4">
                          <h5 className="text-xl font-bold text-purple-900 mb-2">Subsidy Delivery</h5>
                          <p className="text-lg text-gray-700">
                            Direct Benefit Transfer (DBT) on blockchain. Track ₹7 lakh crore annual subsidies end-to-end.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

          {/* Part V: Advanced Applications & Future Directions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-24"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <h2 className="text-6xl font-bold text-gray-900 mx-6">
                Part V: Advanced Applications & Future Directions
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-pink-600 to-purple-600"></div>
            </div>

            {/* Section 1: DeFi 2.0 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  DeFi 2.0: The Next Evolution of Decentralized Finance
                </h3>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-purple-200">
                <h4 className="text-3xl font-bold text-purple-900 mb-6">Beyond Simple Lending: DeFi Gets Smarter</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  DeFi 1.0 (2020-2022) gave us lending (Compound), DEXs (Uniswap), and yield farming.
                  <strong> DeFi 2.0</strong> (2023 onwards) introduces <strong>protocol-owned liquidity</strong>,
                  <strong> real-world asset (RWA) tokenization</strong>, and <strong>institutional-grade infrastructure</strong>.
                </p>
              </div>

              {/* Key Innovations */}
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Coins className="w-16 h-16 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-purple-900 mb-4">Protocol-Owned Liquidity (POL)</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        <strong>Problem:</strong> DeFi 1.0 protocols rented liquidity from users using token rewards
                        ("mercenary capital"). When rewards dried up, liquidity vanished.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>DeFi 2.0 Solution:</strong> Protocols like <strong>Olympus DAO</strong> and
                        <strong> Tokemak</strong> buy their own liquidity using protocol revenue. The liquidity
                        is <em>owned</em>, not rented—creating permanent, sustainable markets.
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <p className="text-xl text-gray-700">
                      <strong>Example:</strong> Olympus DAO uses "bonding" mechanism. Users sell assets (ETH, DAI)
                      to the protocol in exchange for discounted OHM tokens. Protocol permanently owns the ETH/DAI,
                      which backs liquidity pools forever.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Building className="w-16 h-16 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-blue-900 mb-4">Real-World Asset (RWA) Tokenization</h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        DeFi is no longer just crypto-native. Protocols now tokenize <strong>real-world assets</strong>
                        like real estate, invoices, carbon credits, and government bonds.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-blue-900 mb-3">Centrifuge: Invoice Financing</h5>
                      <p className="text-lg text-gray-700 mb-3">
                        Small businesses tokenize invoices as NFTs → Borrow stablecoins against them →
                        When customer pays invoice, DeFi lenders get principal + interest
                      </p>
                      <p className="text-base text-blue-600 font-semibold">
                        $500M+ in RWA loans originated since 2021
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-green-900 mb-3">MakerDAO: T-Bills on Blockchain</h5>
                      <p className="text-lg text-gray-700 mb-3">
                        MakerDAO allocates $1.3 billion of DAI reserves into tokenized US Treasury bills.
                        Earns 5% yield from traditional finance, passes savings to DAI holders.
                      </p>
                      <p className="text-base text-green-600 font-semibold">
                        Bridges TradFi and DeFi seamlessly
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-teal-300">
                  <div className="flex items-start gap-6">
                    <ShieldCheck className="w-16 h-16 text-teal-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-teal-900 mb-4">
                        Institutional DeFi: Compliance Meets Decentralization
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Traditional banks can't use permissionless DeFi due to regulations. Enter
                        <strong> permissioned DeFi</strong>—protocols with KYC/AML built-in.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>Aave Arc:</strong> Permissioned version of Aave for institutions. Requires
                        KYC but keeps DeFi's transparency and efficiency. Fireblocks provides custody.
                      </p>
                      <p className="text-xl text-gray-700">
                        <strong>Goldfinch:</strong> Uncollateralized lending to emerging market businesses.
                        Uses "trust through consensus" (backers vouch for borrowers) + legal recourse in case of default.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Central Bank Digital Currencies (CBDCs) - Global Perspective */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  CBDCs: The Great Digital Currency Race
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-blue-200">
                <h4 className="text-3xl font-bold text-blue-900 mb-6">130+ Countries, 11 Launched, Race On</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  As of 2024, <strong>130 countries</strong> (representing 98% of global GDP) are exploring CBDCs.
                  <strong> 11 have launched</strong> (including China, India, Nigeria), and <strong>65 are in
                  advanced pilot stages</strong>.
                </p>
                <p className="text-xl text-gray-700">
                  The stakes: control of future monetary system, financial inclusion, and cross-border payment infrastructure.
                </p>
              </div>

              {/* Global CBDC Implementations */}
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl">🇨🇳</div>
                    <div>
                      <h4 className="text-3xl font-bold text-red-900 mb-4">
                        China's e-CNY (Digital Yuan): The Global Leader
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Launched in 2020, e-CNY is the world's most advanced CBDC. As of 2024:
                        <strong> 260 million wallets</strong>, <strong>$250 billion</strong> in transactions,
                        accepted by <strong>5 million merchants</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-red-50 rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold text-red-600 mb-2">260M</p>
                      <p className="text-lg text-gray-700">Digital Wallets</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold text-orange-600 mb-2">$250B</p>
                      <p className="text-lg text-gray-700">Transaction Volume</p>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold text-yellow-600 mb-2">5M</p>
                      <p className="text-lg text-gray-700">Merchants</p>
                    </div>
                  </div>
                  <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg">
                    <p className="text-xl text-red-900">
                      <strong>Strategic Goal:</strong> Internationalize the Yuan. China testing e-CNY for
                      cross-border trade with Thailand, UAE, and Hong Kong via "mBridge" project
                      (multi-CBDC bridge platform).
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl">🇳🇬</div>
                    <div>
                      <h4 className="text-3xl font-bold text-green-900 mb-4">
                        Nigeria's eNaira: Financial Inclusion in Africa
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Launched October 2021 (first in Africa). Goal: Bank the 40% of Nigerians without
                        access to financial services. Uses <strong>Hyperledger Fabric</strong> blockchain.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>Adoption Challenge:</strong> Only 13 million wallets by 2024 (vs 220 million population).
                        Why? Cash is still dominant, and crypto (especially stablecoins) is more popular for remittances.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <p className="text-xl text-gray-700">
                      <strong>Lesson Learned:</strong> Technology alone doesn't drive adoption. Need merchant
                      acceptance, user education, and incentives (Nigeria now offers 5% cashback on eNaira transactions).
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl">🇪🇺</div>
                    <div>
                      <h4 className="text-3xl font-bold text-purple-900 mb-4">
                        Digital Euro: Privacy vs Surveillance Debate
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        European Central Bank (ECB) aims to launch Digital Euro by <strong>2026</strong>.
                        Key tension: <strong>privacy</strong> (citizens want cash-like anonymity) vs
                        <strong> AML compliance</strong> (regulators want traceability).
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>Proposed Solution:</strong> Two-tier privacy. Small transactions (&lt;€100) are
                        anonymous (like cash). Larger amounts require identity verification.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-purple-900 mb-3">Privacy Protections</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-gray-700">Offline payments (NFC) without bank tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-gray-700">Merchant can't see your entire transaction history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-gray-700">ECB won't have central database of all transactions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-indigo-900 mb-3">Compliance Features</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-gray-700">AML checks on large/suspicious transactions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-gray-700">Cross-border payments fully traceable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-gray-700">Tax authorities can request data with court order</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cross-Border CBDC Projects */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-teal-300">
                <h4 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-3">
                  <Globe className="w-10 h-10 text-teal-600" />
                  Cross-Border CBDC Platforms: The Future of International Payments
                </h4>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-teal-900 mb-3">mBridge: Multi-CBDC Bridge</h5>
                    <p className="text-xl text-gray-700 mb-3">
                      Collaboration between <strong>China, Thailand, UAE, Hong Kong, and BIS</strong>.
                      Enables instant cross-border payments using CBDCs without USD correspondent banking.
                    </p>
                    <div className="bg-teal-50 rounded-lg p-4">
                      <p className="text-lg text-gray-700">
                        <strong>2023 Pilot Results:</strong> $22 billion in test transactions between central banks.
                        Settlement time: <strong>seconds</strong> (vs 3-5 days for SWIFT). Cost: <strong>$0.50</strong>
                        per $1M transferred (vs $30-50 for traditional wire).
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h5 className="text-2xl font-bold text-blue-900 mb-3">Project Dunbar (Singapore, Australia, Malaysia, South Africa)</h5>
                    <p className="text-xl text-gray-700 mb-3">
                      Shared platform where multiple CBDCs coexist. Uses <strong>common ledger</strong>
                      architecture—all central banks write to same blockchain, eliminating reconciliation.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-lg text-gray-700">
                        <strong>Key Innovation:</strong> Atomic swaps between CBDCs. Singapore Dollar instantly
                        swaps to Malaysian Ringgit on-chain. No intermediary banks, no FX spreads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: The Interoperability Challenge */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Blockchain Interoperability: Breaking Down Silos
                </h3>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-10 mb-8 border-2 border-indigo-200">
                <h4 className="text-3xl font-bold text-indigo-900 mb-6">The $100 Trillion Fragmentation Problem</h4>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  Today, we have <strong>1000+ blockchains</strong> (Ethereum, Bitcoin, Solana, Polygon, etc.)
                  that <strong>can't talk to each other</strong>. It's like having email that only works within Gmail
                  but can't reach Yahoo or Outlook.
                </p>
                <p className="text-xl text-gray-700">
                  Total value locked across all blockchains: <strong>$100+ trillion potential</strong> if interoperable.
                  Currently? Fragmented into isolated islands.
                </p>
              </div>

              {/* Interoperability Solutions */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <div className="flex items-start gap-6 mb-6">
                    <LinkIcon className="w-16 h-16 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-blue-900 mb-4">
                        Cross-Chain Bridges: The Current (Risky) Solution
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Bridges like <strong>Wormhole</strong>, <strong>Multichain</strong>, and
                        <strong> Synapse</strong> allow assets to move between blockchains. Lock ETH on Ethereum →
                        Mint wrapped ETH on Solana.
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xl text-red-900 font-bold mb-2">Security Risk: $2.5 Billion Stolen</p>
                        <p className="text-lg text-gray-700">
                          2022: Wormhole hack ($325M), Ronin bridge hack ($625M), Nomad bridge hack ($190M).
                          Bridges are honeypots because they hold massive amounts of locked assets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700">
                    <strong>Root Problem:</strong> Bridges rely on centralized validators or multi-sig wallets.
                    If compromised, attacker drains all funds.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-300">
                  <div className="flex items-start gap-6 mb-6">
                    <Network className="w-16 h-16 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-green-900 mb-4">
                        Layer 0 Protocols: True Interoperability
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        Instead of bridges <em>between</em> blockchains, Layer 0 protocols provide a
                        <strong> common communication layer</strong> that all chains plug into.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-green-900 mb-3">Polkadot (DOT)</h5>
                      <p className="text-lg text-gray-700 mb-3">
                        "Relay Chain" coordinates 100+ independent blockchains (parachains). Shared security model:
                        validators secure all chains simultaneously.
                      </p>
                      <p className="text-base text-green-600 font-semibold">
                        Messages pass between chains natively—no bridge risk
                      </p>
                    </div>
                    <div className="bg-teal-50 rounded-xl p-6">
                      <h5 className="text-2xl font-bold text-teal-900 mb-3">Cosmos (ATOM)</h5>
                      <p className="text-lg text-gray-700 mb-3">
                        "Internet of Blockchains" using IBC (Inter-Blockchain Communication) protocol.
                        350+ chains connected. Cosmos Hub routes messages like internet backbone.
                      </p>
                      <p className="text-base text-teal-600 font-semibold">
                        Each chain sovereign, but can communicate trustlessly
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <div className="flex items-start gap-6">
                    <Layers className="w-16 h-16 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-3xl font-bold text-purple-900 mb-4">
                        The Omnichain Future: Chainlink CCIP & LayerZero
                      </h4>
                      <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                        <strong>Cross-Chain Interoperability Protocol (CCIP)</strong> by Chainlink: Decentralized
                        oracle network verifies cross-chain messages. If Ethereum says "Alice sent 10 ETH to Polygon,"
                        hundreds of oracles confirm it's true before Polygon releases funds.
                      </p>
                      <p className="text-xl text-gray-700 mb-4">
                        <strong>LayerZero:</strong> "Omnichain" protocol. Developers write contracts once,
                        deploy to <em>all chains</em>. User on Arbitrum can interact with contract on Avalanche
                        without knowing they're on different chains.
                      </p>
                      <div className="bg-purple-50 rounded-xl p-6">
                        <p className="text-xl text-gray-700">
                          <strong>Vision:</strong> User experience like the internet—you don't care if website
                          is hosted in USA, Europe, or Asia. Similarly, users won't care if DeFi app runs on
                          Ethereum, Solana, or Polygon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: The Road Ahead */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 text-white rounded-2xl text-3xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  What's Next? The 2025-2030 Roadmap
                </h3>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-blue-300">
                  <h4 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <Rocket className="w-10 h-10 text-blue-600" />
                    5 Predictions for Blockchain in Finance
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-900 rounded-full text-xl font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-gray-900 mb-2">TradFi-DeFi Convergence (2025-2026)</h5>
                          <p className="text-xl text-gray-700">
                            Major banks will offer DeFi services directly. JPMorgan, Goldman Sachs already testing
                            permissioned DeFi pools. Expect "DeFi desks" at every major bank by 2026.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-900 rounded-full text-xl font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-gray-900 mb-2">CBDC Standard Wars (2025-2027)</h5>
                          <p className="text-xl text-gray-700">
                            China's e-CNY, India's e₹, and Digital Euro will compete for global trade dominance.
                            Winner takes 50% of $125 trillion global payment market. SWIFT may become obsolete.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-900 rounded-full text-xl font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-gray-900 mb-2">Tokenized Securities Go Mainstream (2026-2028)</h5>
                          <p className="text-xl text-gray-700">
                            All stocks, bonds, and real estate will have tokenized versions. Fractional ownership
                            of $1M apartments or $10 shares of Picasso paintings. 24/7 global markets.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-900 rounded-full text-xl font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-gray-900 mb-2">AI + Blockchain Synergy (2027-2029)</h5>
                          <p className="text-xl text-gray-700">
                            AI agents will autonomously manage portfolios, execute trades, and optimize DeFi yields—all
                            verified on blockchain. "Robo-advisors 2.0" with complete transparency.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-900 rounded-full text-xl font-bold flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Clarity (2028-2030)</h5>
                          <p className="text-xl text-gray-700">
                            Global framework for blockchain regulation. UN-backed standards for stablecoins, DeFi,
                            and smart contracts. Regulatory uncertainty—the #1 barrier today—will be resolved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-300">
                  <h4 className="text-3xl font-bold text-purple-900 mb-6">The Ultimate Vision: Programmable Money</h4>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                    Imagine money that executes logic automatically:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6">
                      <p className="text-xl text-gray-700">
                        💰 <strong>Salary that self-invests:</strong> Get paid Friday. 20% auto-deposits to savings,
                        10% buys index fund, 5% pays bills—all via smart contract. No manual transfers.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <p className="text-xl text-gray-700">
                        🏠 <strong>Conditional inheritance:</strong> "$500K to my daughter, but only when she turns 25
                        and graduates college." Smart contract verifies diploma on blockchain, releases funds automatically.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <p className="text-xl text-gray-700">
                        🌍 <strong>Impact investing:</strong> "I'll donate to charity X, but only if they achieve
                        measurable outcome Y (verified by oracle)." Pay-for-success on blockchain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-5xl font-bold mb-8 text-center">
                🎯 Key Takeaways: Blockchain in Finance
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                  <h4 className="text-2xl font-bold mb-4">What We've Covered</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Blockchain transactions: inputs, outputs, digital signatures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Smart contracts revolutionizing finance (DeFi, flash loans)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Real-time settlement vs T+2 (JPM Coin, DTCC, CBDCs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Continuous auditing and parametric insurance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">India's blockchain ecosystem (UIDAI, GSTN, RBI CBDC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Future: DeFi 2.0, global CBDCs, interoperability</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                  <h4 className="text-2xl font-bold mb-4">Why It Matters</h4>
                  <p className="text-lg leading-relaxed mb-4">
                    Blockchain isn't just "Bitcoin for payments." It's a fundamental reimagining of how
                    financial systems operate:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Settlements in seconds, not days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Transparency without sacrificing privacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Financial inclusion for 1.7 billion unbanked</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">Programmable money that executes automatically</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-semibold mb-4">
                  The financial system of 2030 will look nothing like today's.
                </p>
                <p className="text-xl opacity-90">
                  And blockchain is the foundation making it possible.
                </p>
              </div>
            </div>

          </motion.section>

          {/* Course Completion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-3xl shadow-2xl p-12 text-white text-center">
              <Award className="w-24 h-24 mx-auto mb-6" />
              <h2 className="text-6xl font-bold mb-6">🎉 Course Complete!</h2>
              <p className="text-3xl mb-8 leading-relaxed">
                Congratulations! You've mastered Blockchain in Financial Use Cases
              </p>
              <p className="text-2xl mb-8 opacity-90">
                You now understand how blockchain is transforming global finance—from
                smart contracts and DeFi to CBDCs and India's blockchain ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/learn">
                  <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-blue-50 transition-colors shadow-xl">
                    ← Back to Courses
                  </button>
                </Link>
                <Link href="/learn/smart-contracts">
                  <button className="bg-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-purple-700 transition-colors shadow-xl">
                    Next: Smart Contracts & Legal →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  );
}
