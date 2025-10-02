"use client";

import Link from "next/link";
import { getCourseById } from "@/data/courses";
import {
  ArrowLeft, Clock, BarChart, BookOpen, Cpu, Zap,
  Shield, TrendingUp, Network, Layers, GitBranch,
  Lock, Unlock, Server, Brain
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdvancedCoursePage() {
  const course = getCourseById("advanced");

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

        {/* PART I: CONSENSUS ALGORITHMS DEEP DIVE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-2xl font-bold mb-8">
            Part I
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Consensus Algorithms Deep Dive - The Heart of Blockchain
          </h2>

          {/* Proof of Work */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Cpu className="h-10 w-10 text-blue-600" />
              Proof of Work (PoW): The Original Security Model
            </h3>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 mb-8 border-2 border-blue-200">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>The Classroom Analogy:</strong> Imagine you're in a classroom where the teacher asks a really hard math problem,
                and whoever solves it first gets to write the next page in the class journal. That's essentially Proof of Work.
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                Miners compete to solve complex mathematical puzzles, and the winner gets to add the next block to the blockchain.
                The "work" is computational effort—running billions of calculations per second until finding the right answer.
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">🛡️ The Economic Security Model</h4>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-green-300">
                <h5 className="text-2xl font-bold text-green-700 mb-4">Why PoW Works</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-xl text-gray-800">Bitcoin miners use more electricity than Argentina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-xl text-gray-800">51% attack would cost billions in hardware + electricity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-xl text-gray-800">Attacking crashes Bitcoin price → stolen coins worthless</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-xl text-gray-800">14+ years without successful 51% attack</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-300">
                <h5 className="text-2xl font-bold text-red-700 mb-4">Significant Drawbacks</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-xl text-gray-800">Slow block times (Bitcoin: 10 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-xl text-gray-800">Limited throughput (7 TPS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-xl text-gray-800">Mining centralization (China had 65% hash power)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-xl text-gray-800">Environmental concerns (0.5% of global electricity)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <p className="text-2xl text-gray-800 leading-relaxed italic">
                <strong>Economic Game Theory:</strong> It's like spending $10 billion to rob a bank, only to find that
                your robbery made all money worthless. This economic model has kept Bitcoin secure for over 14 years.
              </p>
            </div>
          </div>

          {/* Proof of Stake */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lock className="h-10 w-10 text-purple-600" />
              Proof of Stake (PoS): Security Through Economic Stake
            </h3>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 mb-8 border-2 border-purple-200">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>The Judge Analogy:</strong> Instead of proving you did work by showing a solved puzzle,
                you prove commitment by putting money at risk. If you validate honestly, you earn rewards.
                If you cheat, you lose your stake through "slashing."
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                It's like being a judge who must post a million-dollar bond—you'll judge fairly because
                unfair judgments cost you that bond.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 mb-8 border-2 border-green-300">
              <h4 className="text-3xl font-bold text-green-700 mb-6">🚀 Ethereum's Historic Transition (2022)</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <p className="text-5xl font-bold text-green-600 mb-2">99.95%</p>
                  <p className="text-xl text-gray-700">Energy Reduction</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <p className="text-5xl font-bold text-blue-600 mb-2">32 ETH</p>
                  <p className="text-xl text-gray-700">Minimum Stake (~$60K)</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <p className="text-5xl font-bold text-purple-600 mb-2">Random</p>
                  <p className="text-xl text-gray-700">Validator Selection</p>
                </div>
              </div>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">📊 Selection Process Variants</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                <h5 className="text-2xl font-bold text-purple-700 mb-3">Ethereum PoS</h5>
                <p className="text-xl text-gray-800">Random selection, probability proportional to stake.
                Multiple validators attest to each block, sharing rewards.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                <h5 className="text-2xl font-bold text-blue-700 mb-3">Delegated PoS (DPoS)</h5>
                <p className="text-xl text-gray-800">Users vote for validators who represent them.
                More democratic but potentially less secure.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                <h5 className="text-2xl font-bold text-green-700 mb-3">Nominated PoS (NPoS)</h5>
                <p className="text-xl text-gray-800">Nominators back validators with their stake.
                Used by Polkadot for enhanced security.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-cyan-300">
                <h5 className="text-2xl font-bold text-cyan-700 mb-3">Liquid PoS</h5>
                <p className="text-xl text-gray-800">Staked tokens remain liquid for trading.
                Best of both worlds—earn rewards + maintain liquidity.</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 border-l-4 border-yellow-500 mb-8">
              <h5 className="text-2xl font-bold text-yellow-900 mb-4">⚠️ The "Nothing at Stake" Problem</h5>
              <p className="text-xl text-gray-800 mb-4">
                Validators could theoretically validate multiple competing chains since it costs nothing to validate
                (unlike PoW where you spend electricity).
              </p>
              <p className="text-xl text-gray-800">
                <strong>Solutions:</strong> Slashing penalties for validating conflicting blocks + requiring validators
                to lock stakes for periods (like a certificate of deposit).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
                <h5 className="text-2xl font-bold text-red-700 mb-3">Critics Argue</h5>
                <p className="text-xl text-gray-800">PoS favors the wealthy (rich get richer through staking rewards)
                and could lead to centralization.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                <h5 className="text-2xl font-bold text-green-700 mb-3">Supporters Counter</h5>
                <p className="text-xl text-gray-800">PoW also favors those with capital for mining equipment,
                and PoS at least doesn't waste energy.</p>
              </div>
            </div>
          </div>

          {/* PBFT */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Network className="h-10 w-10 text-indigo-600" />
              Practical Byzantine Fault Tolerance (PBFT): Speed Through Known Validators
            </h3>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-10 mb-8 border-2 border-indigo-200">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>The Board of Directors Analogy:</strong> Instead of open competition, PBFT uses a known set
                of validators who vote on blocks. Imagine a board of directors where any decision requires
                two-thirds agreement.
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                Even if up to one-third of directors are corrupt or offline, the honest majority can still make decisions.
                This is much faster than PoW or PoS—blocks finalize in seconds!
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">🔄 How PBFT Works</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-indigo-200">
                  <p className="text-xl text-gray-800"><strong>Proposal:</strong> A leader (primary node) proposes a block</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-indigo-200">
                  <p className="text-xl text-gray-800"><strong>Validation:</strong> Other nodes validate and vote on the block</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-indigo-200">
                  <p className="text-xl text-gray-800"><strong>Consensus:</strong> If two-thirds agree, the block is accepted (final!)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-indigo-200">
                  <p className="text-xl text-gray-800"><strong>Timeout:</strong> If leader is offline/malicious, timeout triggers new leader selection</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600 mb-8">
              <h5 className="text-2xl font-bold text-blue-900 mb-4">🧠 The Byzantine Generals Problem</h5>
              <p className="text-xl text-gray-800">
                How can distributed generals coordinate an attack when some might be traitors sending false messages?
                PBFT solves this mathematically, guaranteeing correct operation as long as fewer than one-third of nodes are faulty.
                This is <strong>deterministic</strong>—blocks are immediately final, no forks or reorganizations!
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Trade-offs: Speed vs Scale</h4>
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-300 mb-8">
              <h5 className="text-2xl font-bold text-red-700 mb-4">Scalability Limitation: n² Message Complexity</h5>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-4xl font-bold text-green-600 mb-2">10 nodes</p>
                  <p className="text-xl text-gray-700">100 messages</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-4xl font-bold text-yellow-600 mb-2">100 nodes</p>
                  <p className="text-xl text-gray-700">10,000 messages</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-4xl font-bold text-red-600 mb-2">1,000 nodes</p>
                  <p className="text-xl text-gray-700">1 million messages!</p>
                </div>
              </div>
              <p className="text-xl text-gray-800 mt-6">
                This communication overhead limits PBFT to smaller validator sets. Also requires validators to be
                known and authenticated—no anonymous participants.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-300">
              <h5 className="text-2xl font-bold text-green-700 mb-4">Perfect Use Case: Enterprise Blockchains</h5>
              <p className="text-xl text-gray-800 mb-4">
                <strong>IBM's Hyperledger Fabric:</strong> 10-20 known organizations need fast, final consensus.
                PBFT is unsuitable for public blockchains but excellent for consortium chains.
              </p>
            </div>
          </div>

          {/* Emerging Mechanisms */}
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="h-10 w-10 text-teal-600" />
              Emerging Consensus Mechanisms: Innovation Continues
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-teal-300">
                <h4 className="text-2xl font-bold text-teal-700 mb-4">🏛️ Proof of Authority (PoA)</h4>
                <p className="text-xl text-gray-800 mb-3">
                  Uses reputation instead of stake—validators are known, trusted entities whose reputation is at stake.
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Use Case:</strong> Ethereum Ropsten testnet. Extremely fast and efficient for private chains.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-orange-300">
                <h4 className="text-2xl font-bold text-orange-700 mb-4">⏰ Proof of History (PoH)</h4>
                <p className="text-xl text-gray-800 mb-3">
                  Used by Solana. Creates a historical record proving events occurred in a specific sequence.
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Result:</strong> Enables thousands of TPS through parallel processing without waiting for global consensus on time.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-pink-300">
                <h4 className="text-2xl font-bold text-pink-700 mb-4">💾 Proof of Space</h4>
                <p className="text-xl text-gray-800 mb-3">
                  Used by Chia. Replaces computation with storage—fill hard drives with precomputed data.
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Benefit:</strong> Uses 100x less energy than PoW while maintaining similar security properties.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-300">
                <h4 className="text-2xl font-bold text-red-700 mb-4">🔥 Proof of Burn</h4>
                <p className="text-xl text-gray-800 mb-3">
                  Involves destroying cryptocurrency to earn the right to validate—literally burning money to show commitment.
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Reality:</strong> Rarely used alone but sometimes combined with other mechanisms.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 rounded-2xl p-10 border-2 border-purple-300">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">🔮 The Future: Hybrid Mechanisms</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-2xl">•</span>
                  <span className="text-xl text-gray-800"><strong>Ethereum:</strong> PoS for block production + additional committees for finalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">•</span>
                  <span className="text-xl text-gray-800"><strong>Polkadot:</strong> Nominated PoS + parallel chain validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-2xl">•</span>
                  <span className="text-xl text-gray-800"><strong>Dynamic Switching:</strong> Use PBFT normally, fall back to PoW under attack</span>
                </li>
              </ul>
              <p className="text-xl text-gray-800 mt-6 italic">
                There's no perfect consensus mechanism—only different tools for different purposes.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Key Takeaways: Consensus Algorithms
            </h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>PoW:</strong> Maximum security through economic cost, but slow and energy-intensive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>PoS:</strong> 99.95% energy reduction, but "rich get richer" concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>PBFT:</strong> Fast finality for enterprise, but doesn't scale to public blockchains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>Future:</strong> Hybrid mechanisms combining multiple approaches for optimal trade-offs</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART II: LAYER 2 SOLUTIONS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-2xl font-bold mb-8">
            Part II
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Layer 2 Solutions - Breaking the Blockchain Trilemma
          </h2>

          {/* Understanding the Trilemma */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Layers className="h-10 w-10 text-purple-600" />
              Understanding the Scalability Challenge
            </h3>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 mb-8 border-2 border-red-300">
              <h4 className="text-3xl font-bold text-red-700 mb-6">⚠️ The Blockchain Trilemma</h4>
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                You can optimize for <strong>security</strong>, <strong>decentralization</strong>, or <strong>scalability</strong>,
                but improving one often sacrifices others.
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                It's like trying to make a car that's simultaneously fast, safe, and cheap—you can have two, but rarely all three.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-300">
                <h4 className="text-2xl font-bold text-blue-700 mb-4">Bitcoin's Choice</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-xl text-gray-700">Security</span>
                    <span className="font-bold text-2xl text-green-600">✓✓✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-xl text-gray-700">Decentralization</span>
                    <span className="font-bold text-2xl text-green-600">✓✓✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-xl text-gray-700">Scalability</span>
                    <span className="font-bold text-2xl text-red-600">7 TPS</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-300">
                <h4 className="text-2xl font-bold text-red-700 mb-4">Visa for Comparison</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-xl text-gray-700">Security</span>
                    <span className="font-bold text-2xl text-yellow-600">Centralized</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-xl text-gray-700">Decentralization</span>
                    <span className="font-bold text-2xl text-red-600">None</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-xl text-gray-700">Scalability</span>
                    <span className="font-bold text-2xl text-green-600">65,000 TPS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600 mb-8">
              <p className="text-2xl text-gray-800 leading-relaxed">
                <strong>The Problem:</strong> Every Bitcoin node must download, verify, and store every transaction forever.
                If Bitcoin processed Visa-level volume, the blockchain would grow by terabytes daily, requiring data center-level
                resources. Only large corporations could afford to participate, destroying decentralization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 border-2 border-green-300">
              <h4 className="text-3xl font-bold text-green-700 mb-6">💡 Layer 2: The Elegant Solution</h4>
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>The Bar Tab Analogy:</strong> Instead of paying for each drink immediately (on-chain transaction),
                you open a tab (Layer 2 channel), order many drinks (off-chain transactions), then settle the final bill
                (closing channel on-chain).
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                The bar doesn't need to process each drink as a separate credit card transaction, and the blockchain
                doesn't need to record every micro-transaction. This can increase throughput by <strong>1000x or more</strong>!
              </p>
            </div>
          </div>

          {/* Lightning Network */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="h-10 w-10 text-yellow-600" />
              Lightning Network: Bitcoin's Payment Superhighway
            </h3>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-10 mb-8 border-2 border-yellow-300">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                The Lightning Network enables <strong>instant Bitcoin transactions</strong> by creating payment channels between users.
                You and your coffee shop create a running tab that you settle monthly instead of paying for each coffee.
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                You can buy 1,000 coffees with only <strong>two on-chain transactions</strong>: opening and closing the channel!
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">⚡ How Payment Channels Work</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-yellow-200">
                  <p className="text-xl text-gray-800"><strong>Open Channel:</strong> Lock Bitcoin in smart contract with coffee shop</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-yellow-200">
                  <p className="text-xl text-gray-800"><strong>Off-Chain Transactions:</strong> Every coffee updates balance privately—instant & pennies in fees</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border-2 border-yellow-200">
                  <p className="text-xl text-gray-800"><strong>Close Channel:</strong> Settle final balance on-chain when you're done</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-300 mb-8">
              <h4 className="text-3xl font-bold text-purple-700 mb-6">🌐 The Network Part: Routing Magic</h4>
              <p className="text-2xl text-gray-800 mb-6 leading-relaxed">
                You don't need channels with everyone—payments can route through intermediaries!
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-xl text-gray-800 leading-relaxed">
                  If <strong>Alice</strong> has a channel with <strong>Bob</strong>, and Bob has a channel with <strong>Charlie</strong>,
                  Alice can pay Charlie through Bob. Bob can't steal the money—cryptographic proofs ensure he either forwards
                  the payment or it reverses automatically.
                </p>
              </div>
              <p className="text-xl text-gray-700 italic">
                This creates a mesh network where payments find routes like internet packets. Large nodes (exchanges) become
                hubs, enabling payments to route anywhere.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-300 mb-8">
              <h4 className="text-2xl font-bold text-green-700 mb-4">🇸🇻 Real-World Impact: El Salvador</h4>
              <p className="text-xl text-gray-800 leading-relaxed">
                El Salvador uses Lightning for national Bitcoin adoption because on-chain fees would exceed many citizens'
                daily wages. Lightning enables instant, low-cost payments for everyday transactions.
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Lightning Limitations</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                <h5 className="text-xl font-bold text-red-700 mb-3">Liquidity Lock-up</h5>
                <p className="text-lg text-gray-700">Need to lock up Bitcoin in channels, reducing liquidity</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                <h5 className="text-xl font-bold text-red-700 mb-3">Offline Partners</h5>
                <p className="text-lg text-gray-700">If channel partner goes offline, funds temporarily stuck</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                <h5 className="text-xl font-bold text-red-700 mb-3">Routing Challenges</h5>
                <p className="text-lg text-gray-700">Large payments difficult if channels lack capacity</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                <h5 className="text-xl font-bold text-red-700 mb-3">Always Online</h5>
                <p className="text-lg text-gray-700">Need to be online to receive payments (unlike on-chain)</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <p className="text-xl text-gray-800 leading-relaxed">
                <strong>Current Status:</strong> Lightning processes millions of transactions daily. Major companies like
                Cash App and Strike build consumer applications on it. It's proved that Layer 2 can transform a slow
                store-of-value blockchain into a functional payment network.
              </p>
            </div>
          </div>

          {/* Rollups */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <GitBranch className="h-10 w-10 text-blue-600" />
              Rollups: Ethereum's Scaling Solution
            </h3>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 mb-8 border-2 border-blue-200">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>The Shipping Container Analogy:</strong> Rollups bundle hundreds of transactions into a single
                Layer 1 transaction, like a shipping container holding many packages.
              </p>
              <p className="text-2xl text-gray-800 leading-relaxed">
                This can increase throughput to <strong>2,000+ TPS</strong> while maintaining Ethereum's security!
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">🔀 Two Main Types of Rollups</h4>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-orange-300">
                <h5 className="text-2xl font-bold text-orange-700 mb-4">Optimistic Rollups</h5>
                <p className="text-xl text-gray-800 mb-4">
                  <strong>Assume transactions are valid unless proven otherwise.</strong>
                </p>
                <p className="text-lg text-gray-600 mb-4 italic">
                  Like the honor system with a referee—everyone is trusted to be honest, but if someone cheats,
                  anyone can call the referee (submit a fraud proof) and reverse the cheating.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <p className="text-lg text-gray-700"><strong>Leaders:</strong> Arbitrum, Optimism</p>
                  <p className="text-lg text-gray-700"><strong>Daily Volume:</strong> Billions of dollars</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-lg text-red-700"><strong>Trade-off:</strong> 7-day waiting period to withdraw to Layer 1 (time for fraud proofs)</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-300">
                <h5 className="text-2xl font-bold text-purple-700 mb-4">ZK-Rollups (Zero-Knowledge)</h5>
                <p className="text-xl text-gray-800 mb-4">
                  <strong>Use cryptographic proofs to guarantee validity.</strong>
                </p>
                <p className="text-lg text-gray-600 mb-4 italic">
                  Like having a mathematician check everyone's homework and provide a certificate that all answers are
                  correct, without showing the actual work.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <p className="text-lg text-gray-700"><strong>Leaders:</strong> zkSync, StarkNet</p>
                  <p className="text-lg text-gray-700"><strong>Advantage:</strong> No withdrawal delay!</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-lg text-yellow-700"><strong>Challenge:</strong> More complex to build, limited smart contract support currently</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 border-l-4 border-yellow-500 mb-8">
              <p className="text-2xl text-gray-800 leading-relaxed italic">
                <strong>The Joke in Ethereum:</strong> ZK-Rollups are always "6 months away" from full functionality.
                But when they arrive, they'll be game-changing!
              </p>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">🛡️ Why Rollups Inherit Ethereum's Security</h4>
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-300 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-xl text-gray-800"><strong>Data on Ethereum:</strong> All rollup data is stored on Ethereum in compressed form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-xl text-gray-800"><strong>Operator Failure Protection:</strong> If rollup operator disappears, users can still withdraw using on-chain data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-xl text-gray-800"><strong>Unlike Sidechains:</strong> No separate security model—Ethereum secures everything</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-10 border-2 border-blue-300">
              <h4 className="text-3xl font-bold text-blue-700 mb-6">🔮 Vitalik's Vision: Rollup-Centric Ethereum</h4>
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                Ethereum's future is "rollup-centric"—Layer 1 becomes a <strong>security and data availability layer</strong>
                while actual usage happens on Layer 2.
              </p>
              <p className="text-xl text-gray-700 italic">
                Think of Ethereum as the foundation and rollups as the skyscrapers built on top!
              </p>
            </div>
          </div>

          {/* Sidechains & Bridges */}
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Server className="h-10 w-10 text-indigo-600" />
              Sidechains and Alternative Approaches
            </h3>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10 mb-8 border-2 border-indigo-200">
              <h4 className="text-3xl font-bold text-indigo-700 mb-6">Sidechains: Independent but Connected</h4>
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>The Allied Countries Analogy:</strong> Sidechains are independent blockchains with their own
                governments (consensus mechanisms) but shared trade agreements (bridges to main chain).
              </p>
              <p className="text-xl text-gray-700">
                This independence allows innovation—different consensus, block times, features. But it also means
                <strong className="text-red-600"> less security</strong>—if sidechain validators collude, they can steal bridged funds.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-300 mb-8">
              <h4 className="text-2xl font-bold text-green-700 mb-4">🟣 Polygon (Formerly Matic): Success Story</h4>
              <p className="text-xl text-gray-800 mb-4">
                Ethereum's most successful sidechain, processing <strong>more transactions than Ethereum itself!</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">Billions</p>
                  <p className="text-lg text-gray-700">Daily Volume</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">Low Fees</p>
                  <p className="text-lg text-gray-700">Pennies per tx</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-4xl font-bold text-purple-600 mb-2">Fast</p>
                  <p className="text-lg text-gray-700">2-second blocks</p>
                </div>
              </div>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">⚠️ Bridge Security: The Weak Point</h4>
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-300 mb-8">
              <p className="text-2xl text-red-700 font-bold mb-6">Over $2 Billion Stolen in Bridge Hacks</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-700 mb-3">🔴 Ronin Bridge Hack</h5>
                  <p className="text-lg text-gray-700 mb-2"><strong>$625 million</strong> stolen</p>
                  <p className="text-base text-gray-600">Attackers compromised validator keys through spear phishing</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-700 mb-3">🔴 Wormhole Hack</h5>
                  <p className="text-lg text-gray-700 mb-2"><strong>$326 million</strong> stolen</p>
                  <p className="text-base text-gray-600">Exploited signature verification bug</p>
                </div>
              </div>
              <p className="text-xl text-gray-800 mt-6">
                <strong>The Problem:</strong> Bridges lock assets on one chain and mint representations on another.
                If attackers can mint without locking or unlock without burning, they create money from nothing!
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600 mb-8">
              <h4 className="text-2xl font-bold text-blue-900 mb-4">🔐 Defense Strategies</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span className="text-lg text-gray-800">Use official bridges maintained by chain developers, not third-party solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span className="text-lg text-gray-800">Require more confirmations for smaller chains to reduce attack profitability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span className="text-lg text-gray-800">Implement multi-signature requirements and time delays for large withdrawals</span>
                </li>
              </ul>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-6">🔗 Other Scaling Approaches</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-teal-300">
                <h5 className="text-2xl font-bold text-teal-700 mb-3">State Channels</h5>
                <p className="text-lg text-gray-700 mb-3">
                  Generalize Lightning's approach beyond payments. Any smart contract interaction can happen off-chain.
                </p>
                <p className="text-base text-gray-600 italic">
                  <strong>Use Case:</strong> Gaming applications—players make moves off-chain, only final game state settles on-chain.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-pink-300">
                <h5 className="text-2xl font-bold text-pink-700 mb-3">Plasma Chains</h5>
                <p className="text-lg text-gray-700 mb-3">
                  Create hierarchical structures of child chains reporting to parent chains.
                </p>
                <p className="text-base text-gray-600 italic">
                  <strong>Theory:</strong> Infinite scaling. <strong>Reality:</strong> Complex exit procedures limit practical use.
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Key Takeaways: Layer 2 Solutions
            </h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>Blockchain Trilemma:</strong> Can't have security, decentralization, AND scalability—Layer 2 is the escape</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>Lightning Network:</strong> Transforms Bitcoin into payment network (1000x throughput increase)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>Rollups:</strong> Bundle transactions for 2000+ TPS while inheriting Layer 1 security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>Bridges:</strong> Critical infrastructure but also weak points ($2B+ stolen in hacks)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span><strong>Future:</strong> Multiple Layer 2 solutions coexisting—users choose based on security/speed/cost needs</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART III: BLOCKCHAIN PROGRAMMING (Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-2xl font-bold mb-8">
            Part III
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Blockchain Programming - Building the Future
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-10 mb-12 border-2 border-green-300">
            <h3 className="text-4xl font-bold text-green-700 mb-6">Programming Languages & Tools</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                <h4 className="text-2xl font-bold text-blue-700 mb-3">Solidity</h4>
                <p className="text-lg text-gray-700 mb-3">Dominates Ethereum development. JavaScript-like but statically typed.</p>
                <p className="text-base text-gray-600"><strong>Warning:</strong> Mistakes mean lost money—$50M DAO hack was a recursive function call bug!</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-orange-300">
                <h4 className="text-2xl font-bold text-orange-700 mb-3">Rust</h4>
                <p className="text-lg text-gray-700 mb-3">Used by Solana, Polkadot, Near. Safer but steeper learning curve.</p>
                <p className="text-base text-gray-600">Prevents entire categories of bugs through ownership system.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">Vyper & Move</h4>
                <p className="text-lg text-gray-700 mb-3">Vyper: Python-like, simpler. Move: Assets as first-class resources.</p>
                <p className="text-base text-gray-600">Each makes different trade-offs for safety vs features.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-green-300">
              <h4 className="text-2xl font-bold text-green-700 mb-4">Development Tools</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <span className="text-lg text-gray-800"><strong>Remix IDE:</strong> Browser-based, perfect for learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <span className="text-lg text-gray-800"><strong>Hardhat/Truffle:</strong> Professional frameworks with testing & deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <span className="text-lg text-gray-800"><strong>Ganache:</strong> Local blockchain for testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <span className="text-lg text-gray-800"><strong>Security Tools:</strong> Slither, MythX scan for vulnerabilities</span>
                </li>
              </ul>
              <p className="text-xl text-gray-700 mt-6 italic">Mantra: "Test twice, deploy once" – deployment is forever!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Key Takeaways: Programming
            </h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Solidity dominates but Rust gaining for performance chains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Professional developers test extensively—more test code than contract code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Common patterns: Checks-Effects-Interactions, Pull over Push, Factory patterns</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART IV: INFRASTRUCTURE & NODES (Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full text-2xl font-bold mb-8">
            Part IV
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Infrastructure & Running Nodes - Participating in the Network
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border-2 border-indigo-300">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">Running a Full Node</h3>
              <p className="text-xl text-gray-800 mb-6">Your own complete blockchain copy—verify everything independently!</p>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-bold text-gray-800 mb-2">Bitcoin: Modest Requirements</p>
                  <p className="text-base text-gray-600">2GB RAM, 500GB storage, decent internet. Could run on Raspberry Pi ($50)!</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-bold text-gray-800 mb-2">Ethereum: More Demanding</p>
                  <p className="text-base text-gray-600">16GB RAM, 2TB+ fast SSD. State grows as smart contracts store data.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-bold text-gray-800 mb-2">Solana: Extreme</p>
                  <p className="text-base text-gray-600">128GB RAM, NVMe SSDs, gigabit internet. Performance = expensive nodes.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-lg text-gray-800"><strong>Why Run a Node?</strong> Privacy, sovereignty, contribute to decentralization!</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
              <h3 className="text-3xl font-bold text-purple-700 mb-6">Light Clients & RPC Providers</h3>

              <div className="bg-white rounded-xl p-6 mb-6 border-2 border-purple-200">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">Light Clients (SPV)</h4>
                <p className="text-lg text-gray-700 mb-3">Download only block headers (80 bytes/block), not entire blockchain.</p>
                <p className="text-base text-gray-600">Mobile wallets like MetaMask use this. Request Merkle proofs to verify transactions.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-blue-700 mb-3">RPC Providers</h4>
                <p className="text-lg text-gray-700 mb-3">Infura, Alchemy, QuickNode—the unsung heroes making blockchain accessible!</p>
                <p className="text-base text-gray-600 mb-3">Handle billions of requests daily. Free tiers generous for developers.</p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500 mt-4">
                  <p className="text-sm text-red-700"><strong>Risk:</strong> If Infura goes down, much of Ethereum becomes inaccessible. Centralization concern!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-300 mb-12">
            <h3 className="text-3xl font-bold text-blue-700 mb-6">IPFS & Decentralized Storage</h3>
            <p className="text-xl text-gray-800 mb-6">Storing data on-chain costs ~$15,000 per MB! IPFS provides cheap alternative.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">How IPFS Works</h4>
                <p className="text-lg text-gray-700">Files split into chunks, distributed across peers, retrieved by content hash.</p>
                <p className="text-base text-gray-600 mt-3"><strong>NFT Example:</strong> Token stores IPFS hash, actual image lives on IPFS. Costs pennies vs millions!</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Persistence Challenge</h4>
                <p className="text-lg text-gray-700">Someone must "pin" (store) files. Services like Pinata ensure NFTs don't disappear.</p>
                <p className="text-base text-gray-600 mt-3"><strong>Solutions:</strong> Arweave, Filecoin use economics to ensure permanent storage.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Key Takeaways: Infrastructure
            </h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Running nodes ensures privacy & sovereignty but requires resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>RPC providers critical but create centralization—use multiple for failover</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>IPFS solves on-chain storage costs but requires active maintenance</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART V: TOKENOMICS & TRADING (Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-2xl font-bold mb-8">
            Part V
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Tokenomics & Trading - The Economics of Digital Assets
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Utility Tokens</h3>
              <p className="text-lg text-gray-700 mb-3">Like arcade tokens—give access to a service.</p>
              <p className="text-base text-gray-600"><strong>Examples:</strong> Filecoin (storage), Chainlink (oracles), ETH (gas)</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Governance Tokens</h3>
              <p className="text-lg text-gray-700 mb-3">Voting power in protocols. Like voting shares.</p>
              <p className="text-base text-gray-600"><strong>Examples:</strong> UNI (Uniswap), MKR (MakerDAO)</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Security Tokens</h3>
              <p className="text-lg text-gray-700 mb-3">Traditional securities on blockchain.</p>
              <p className="text-base text-gray-600"><strong>Heavily regulated:</strong> Selling unregistered = massive fines/charges</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 mb-12 border-2 border-red-300">
            <h3 className="text-4xl font-bold text-red-700 mb-6">⚠️ Tokenomics Design: Make or Break</h3>
            <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
              Bad tokenomics kills projects regardless of tech. Terra/Luna's death spiral: UST lost peg →
              LUNA hyperinflation (350M to 6.5 trillion supply in 3 days!) → total collapse.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Supply Mechanics</h4>
                <p className="text-base text-gray-700">Bitcoin: Fixed 21M (scarcity). Ethereum: Deflationary after EIP-1559. Gaming: Infinite supply for rewards.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Distribution</h4>
                <p className="text-base text-gray-700">Bitcoin: Mining (anyone). Modern: VC funding = concentrated ownership. Fair launches = broad distribution.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Unlock Cliffs</h4>
                <p className="text-base text-gray-700">When early investor tokens become sellable, often causing price crashes. Design carefully!</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-300">
              <h3 className="text-3xl font-bold text-blue-700 mb-6">DEX vs CEX</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-bold text-blue-700 mb-2">CEX (Binance, Coinbase)</h4>
                  <p className="text-sm text-gray-700">✓ Better prices, faster, easier. ✗ Require KYC, can freeze funds, risk hacks/insolvency (FTX!)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-bold text-purple-700 mb-2">DEX (Uniswap, Sushiswap)</h4>
                  <p className="text-sm text-gray-700">✓ Self-custody, censorship-resistant, transparent. ✗ Higher fees (gas), worse prices (slippage)</p>
                </div>
              </div>
              <p className="text-base text-gray-600 mt-4 italic">Most traders use both—CEX for trading, DEX for long-tail tokens.</p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-300">
              <h3 className="text-3xl font-bold text-green-700 mb-6">AMMs: Math Replaces Market Makers</h3>
              <p className="text-lg text-gray-800 mb-4">
                Uniswap's constant product formula (x × y = k) automatically prices trades based on pool ratios.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-base text-gray-700 mb-2"><strong>Example:</strong> Pool has 100 ETH + 200,000 USDC</p>
                <p className="text-base text-gray-700 mb-2">→ ETH costs $2,000</p>
                <p className="text-base text-gray-700">Buy 10 ETH → Pool has 90 ETH + 220,000 USDC → ETH now $2,444!</p>
              </div>
              <p className="text-base text-gray-600 italic">Elegant: Anyone can trade anytime without counterparties placing orders.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Key Takeaways: Tokenomics & Trading
            </h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Tokenomics design more important than technology—bad economics = death spiral</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>AMMs revolutionized DeFi but have impermanent loss risks for LPs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>CEX vs DEX: Different trade-offs—most use both strategically</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART VI: MEV & Advanced Economics (Highly Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-2xl font-bold mb-8">
            Part VI
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            MEV & Advanced Economics - The Hidden Game
          </h2>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-10 mb-8 border-2 border-red-300">
            <h3 className="text-4xl font-bold text-red-700 mb-6">⚠️ Maximum Extractable Value (MEV)</h3>
            <p className="text-2xl text-gray-800 mb-6 leading-relaxed">
              <strong>MEV = Profit from reordering/including/excluding transactions.</strong> Over $1 billion extracted in 2023.
              It's like an auctioneer seeing sealed bids before opening them—place your own bid $1 higher!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                <h4 className="text-xl font-bold text-green-700 mb-3">✓ Beneficial MEV: Arbitrage</h4>
                <p className="text-base text-gray-700">ETH costs $2,000 on Uniswap, $2,010 on Sushiswap. Bots buy/sell, equalizing prices. Benefits ecosystem!</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-300">
                <h4 className="text-xl font-bold text-red-700 mb-3">✗ Predatory MEV: Sandwich Attacks</h4>
                <p className="text-base text-gray-700">Bot sees your buy order, buys first (price up), your order executes (worse price), bot sells (profit). You pay $5 more, bot keeps it!</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-900 mb-3">Liquidation MEV: Algorithmic Warfare</h4>
              <p className="text-lg text-gray-700">When loans become under-collateralized, whoever liquidates first gets 5-10% bounty. Bots spend millions yearly in gas fees competing. Some bots pay $100K gas for $110K profit!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6">Key Takeaways: MEV</h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>MEV is inevitable on transparent blockchains—hidden tax on users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Flashbots: 90%+ Ethereum blocks use it, sharing MEV profits with miners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Protection: Private mempools, MEV-resistant DEXs (CoWswap), TWAP orders</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART VII: Privacy Tech (Highly Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-2xl font-bold mb-8">
            Part VII
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Zero-Knowledge Proofs & Privacy - Privacy in Transparent World
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 mb-8 border-2 border-purple-300">
            <h3 className="text-4xl font-bold text-purple-700 mb-6">🔐 Zero-Knowledge Proofs Explained</h3>
            <p className="text-2xl text-gray-800 mb-6 leading-relaxed">
              <strong>The Color-Blind Analogy:</strong> Prove you can see colors to a color-blind person by consistently identifying
              which ball is which after they shuffle them. After many rounds, they're convinced you see colors—but they never learn what colors look like!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                <h4 className="text-2xl font-bold text-blue-700 mb-3">zk-SNARKs</h4>
                <p className="text-lg text-gray-700 mb-3">Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge</p>
                <p className="text-base text-gray-600"><strong>✓</strong> Smaller, faster to verify</p>
                <p className="text-base text-gray-600"><strong>✗</strong> Require trusted setup ceremony (destroy random numbers or fake proofs possible!)</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">zk-STARKs</h4>
                <p className="text-lg text-gray-700 mb-3">Scalable Transparent Arguments of Knowledge</p>
                <p className="text-base text-gray-600"><strong>✓</strong> No trusted setup, quantum-resistant</p>
                <p className="text-base text-gray-600"><strong>✗</strong> Larger proof sizes (but improving!)</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
              <h4 className="text-2xl font-bold text-green-700 mb-4">Real Applications</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600">•</span>
                  <span className="text-lg text-gray-800"><strong>Privacy Coins:</strong> Monero (ring signatures), Zcash (zk-SNARKs for optional privacy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">•</span>
                  <span className="text-lg text-gray-800"><strong>Private DeFi:</strong> Aztec Network (private trades/lending on Ethereum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">•</span>
                  <span className="text-lg text-gray-800"><strong>Identity:</strong> Polygon ID (prove you're 21+ without revealing exact age)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6">Key Takeaways: Privacy Tech</h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>ZK proofs enable proving statements without revealing underlying data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Already powering ZK-Rollups (scalability) + privacy applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Future: Private voting, selective disclosure identity, compliant privacy</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART VIII: Enterprise Platforms (Highly Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-2xl font-bold mb-8">
            Part VIII
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Enterprise Blockchains - Blockchain Goes Corporate
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Hyperledger Fabric</h3>
              <p className="text-lg text-gray-700 mb-3"><strong>IBM + Linux Foundation.</strong> Permissioned, channels for privacy.</p>
              <p className="text-base text-gray-600 mb-3"><strong>Use Cases:</strong> Walmart food tracking (E. coli source in 2.2 sec vs weeks), Maersk TradeLens (shipping, 40% faster docs)</p>
              <p className="text-sm text-green-600"><strong>✓</strong> Thousands of TPS, enterprise-grade</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
              <h3 className="text-2xl font-bold text-green-700 mb-4">R3 Corda</h3>
              <p className="text-lg text-gray-700 mb-3"><strong>Built for banks.</strong> Not a blockchain—distributed ledger, transactions only involve relevant parties.</p>
              <p className="text-base text-gray-600 mb-3"><strong>Use Cases:</strong> Italian Banking Spunta (100+ banks, interbank reconciliation real-time), HSBC/ING letters of credit (5-10 days → &lt;24 hours)</p>
              <p className="text-sm text-green-600"><strong>✓</strong> Privacy-by-design, legal prose integration</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Enterprise Ethereum</h3>
              <p className="text-lg text-gray-700 mb-3"><strong>Quorum (JPMorgan).</strong> Private Ethereum with permissions.</p>
              <p className="text-base text-gray-600 mb-3"><strong>Use Cases:</strong> JPM Coin (billions daily settlement, instant vs days), Liink (400+ banks, cross-border compliance)</p>
              <p className="text-sm text-green-600"><strong>✓</strong> Leverages Ethereum ecosystem + tools</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6">Key Takeaways: Enterprise</h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Permissioned blockchains for known participants—PBFT consensus, thousands TPS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Production systems processing billions in value (not experiments!)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Platform choice depends on: permissions, performance, privacy, integration needs</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART IX: NFTs, Web3, DAOs (Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-bold mb-8">
            Part IX
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            NFTs, Web3 & DAOs - The Cultural Revolution
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-300">
              <h3 className="text-3xl font-bold text-pink-700 mb-4">NFTs</h3>
              <p className="text-lg text-gray-700 mb-4">Non-Fungible Tokens—unique digital ownership via ERC-721/1155 standards.</p>
              <p className="text-base text-gray-600 mb-3"><strong>Beyond JPEGs:</strong> Gaming items (true ownership if game shuts down), music royalties (auto-split revenue), event tickets (anti-counterfeit + proof of attendance)</p>
              <p className="text-sm text-yellow-600"><strong>Challenge:</strong> Metadata often centralized (IPFS requires pinning). 2021-2022 speculation bubble overshadowed utility.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">Web3</h3>
              <p className="text-lg text-gray-700 mb-4">Read-Write-Own. Users control data, identity, value creation.</p>
              <p className="text-base text-gray-600 mb-3"><strong>Applications:</strong> Lens Protocol (own your social graph—followers move with you!), Filecoin/Arweave (decentralized storage), Akash (decentralized compute)</p>
              <p className="text-sm text-yellow-600"><strong>Reality:</strong> Slower, more expensive than centralized. "Progressive decentralization"—start centralized, gradually decentralize.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-300">
              <h3 className="text-3xl font-bold text-purple-700 mb-4">DAOs</h3>
              <p className="text-lg text-gray-700 mb-4">Decentralized Autonomous Organizations—coordinate without corporations via token voting.</p>
              <p className="text-base text-gray-600 mb-3"><strong>Examples:</strong> MakerDAO (governs stablecoin, billions in assets), Gitcoin (funds public goods), Constitution DAO ($40M raised in a week!)</p>
              <p className="text-sm text-yellow-600"><strong>Challenges:</strong> Voter apathy, whale dominance, legal uncertainty. Adding traditional structures (foundations, managers).</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6">Key Takeaways: NFTs/Web3/DAOs</h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>NFTs enable verifiable digital ownership + interoperability (use across platforms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Web3: Hybrid future (decentralized + centralized) more likely than pure decentralization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>DAOs: Experiments in governance—pure code insufficient, human flexibility needed</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* PART X: Lessons from Failures (Condensed) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-full text-2xl font-bold mb-8">
            Part X
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Lessons from Major Failures - Learning from Disaster
          </h2>

          <div className="space-y-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 border-2 border-red-300">
              <h3 className="text-4xl font-bold text-red-700 mb-6">💥 Terra/Luna Collapse: $60B Algorithmic Failure</h3>
              <p className="text-2xl text-gray-800 mb-6 leading-relaxed">
                UST algorithmic stablecoin maintained $1 peg through LUNA token minting/burning. Worked during growth...
                catastrophic during contraction.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-red-700 mb-3">The Death Spiral (May 2022)</h4>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">1️⃣ Large UST sales broke $1 peg</p>
                  <p className="text-lg text-gray-700">2️⃣ Users rushed to redeem UST for LUNA</p>
                  <p className="text-lg text-gray-700">3️⃣ Massive LUNA minting crashed price</p>
                  <p className="text-lg text-gray-700">4️⃣ LUNA supply: 350M → <strong className="text-red-600">6.5 TRILLION</strong> in 3 days (hyperinflation!)</p>
                  <p className="text-lg text-gray-700">5️⃣ Total collapse. Suicides reported. 😢</p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-lg text-gray-800"><strong>Lessons:</strong> Algorithmic stability extremely difficult. Recursive systems fragile. Anchor's 20% yields unsustainable. High yields often hide problems.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-10 border-2 border-orange-300">
              <h3 className="text-4xl font-bold text-orange-700 mb-6">🏦 FTX: When Fraud Meets Crypto</h3>
              <p className="text-2xl text-gray-800 mb-6 leading-relaxed">
                Sam Bankman-Fried (SBF), "effective altruist" who testified to Congress, secretly loaned <strong>$10B+ customer funds</strong>
                to Alameda Research (his trading firm).
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-orange-700 mb-3">The Mechanics of Fraud</h4>
                <ul className="space-y-2">
                  <li className="text-lg text-gray-700">• FTX created backdoors allowing Alameda unlimited margin (infinite customer money!)</li>
                  <li className="text-lg text-gray-700">• Alameda positions exempt from liquidation—accumulated billions in losses</li>
                  <li className="text-lg text-gray-700">• FTT token used as collateral despite being printed by FTX</li>
                  <li className="text-lg text-gray-700">• When Binance's CZ tweeted about selling FTT → bank run → <strong className="text-red-600">$8B missing</strong></li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-lg text-gray-800"><strong>Lessons:</strong> "Not your keys, not your coins." Regulatory arbitrage enables fraud. Celebrity endorsements ≠ legitimacy. Complexity hides fraud. Crypto doesn't eliminate traditional financial crimes.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 border-2 border-purple-300">
              <h3 className="text-4xl font-bold text-purple-700 mb-6">🔐 Major Hacks: Technical Failures</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-700 mb-3">🔴 Ronin Bridge: $625M</h4>
                  <p className="text-base text-gray-700 mb-2">Sky Mavis controlled 4 of 9 validator keys. Gave 5th validator key for "efficiency." Hackers compromised 5 keys via spear phishing.</p>
                  <p className="text-sm text-red-600"><strong>Lesson:</strong> Bridges are critical infrastructure—no shortcuts! Monitoring systems failed (6 days unnoticed!).</p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-700 mb-3">🔴 Wormhole: $326M</h4>
                  <p className="text-base text-gray-700 mb-2">Exploited signature verification bug in cross-chain messaging. Different chains interpret data differently.</p>
                  <p className="text-sm text-red-600"><strong>Lesson:</strong> Cross-chain protocols must account for different semantics. Complexity = vulnerability.</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 mt-6 border-l-4 border-red-500">
                <p className="text-lg text-gray-800"><strong>Pattern:</strong> Over $2B stolen in bridge hacks. Every major hack preventable with known best practices—but pressure to ship fast overrides security.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-10 text-white">
            <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Key Takeaways: Failures
            </h4>
            <ul className="space-y-3 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Failures teach as much as successes—Terra showed algorithmic limits, FTX proved human nature unchanged</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Security requires: multiple oracles, time delays, limited protocol interdependencies, emergency pauses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">✓</span>
                <span>Industry resilience—continuing to innovate despite spectacular failures—suggests something fundamental being built</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* COURSE COMPLETION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="text-8xl mb-6">🎉</div>
            <h2 className="text-6xl font-bold mb-6">Course Complete!</h2>
            <p className="text-3xl mb-8">Congratulations! You've mastered advanced blockchain topics!</p>

            <div className="flex flex-wrap gap-6 justify-center mb-8 text-xl">
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Consensus Algorithms (PoW, PoS, PBFT)</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Layer 2 Solutions (Lightning, Rollups)</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Blockchain Programming</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Infrastructure & Nodes</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Tokenomics & Trading</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ MEV & Advanced Economics</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Zero-Knowledge Proofs & Privacy</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Enterprise Blockchains</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ NFTs, Web3 & DAOs</div>
              <div className="bg-white/20 rounded-xl px-6 py-3">✅ Lessons from Major Failures</div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/learn"
                className="inline-block rounded-xl bg-white text-purple-600 px-10 py-5 text-2xl font-semibold hover:bg-gray-100 transition-all"
              >
                ← Back to Courses
              </Link>
              <Link
                href="/"
                className="inline-block rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-5 text-2xl font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all"
              >
                🏠 Home
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-white/30">
              <p className="text-2xl mb-4">🎓 All 6 Courses Complete!</p>
              <p className="text-xl text-white/90">
                You've completed the entire Blockchain Academy curriculum. You now have comprehensive knowledge
                from blockchain fundamentals to advanced topics. Ready to build the future!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
