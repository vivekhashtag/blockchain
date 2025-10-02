"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Blocks, User, ArrowRight, Zap, CheckCircle, XCircle,
  Pickaxe, AlertTriangle, Play, RotateCcw, Hash, Clock, Link2, Edit3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CryptoJS from "crypto-js";

interface Transaction {
  from: string;
  to: string;
  amount: number;
  timestamp: string;
}

interface Block {
  index: number;
  timestamp: string;
  transactions: Transaction[];
  previousHash: string;
  hash: string;
  nonce: number;
}

type Step = "intro" | "create-tx" | "mempool" | "mining" | "validation" | "added" | "tamper-test";

export default function BlockchainVisualizerPage() {
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const [blockchain, setBlockchain] = useState<Block[]>([
    {
      index: 0,
      timestamp: new Date("2024-01-01").toISOString(),
      transactions: [],
      previousHash: "0",
      hash: "000a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
      nonce: 0,
    },
  ]);

  const [pendingTransaction, setPendingTransaction] = useState<Transaction | null>(null);
  const [mempool, setMempool] = useState<Transaction[]>([]);
  const [isMining, setIsMining] = useState(false);
  const [miningProgress, setMiningProgress] = useState(0);
  const [newBlock, setNewBlock] = useState<Block | null>(null);
  const [isValid, setIsValid] = useState(true);

  // Form inputs
  const [fromAddress, setFromAddress] = useState("Alice");
  const [toAddress, setToAddress] = useState("Bob");
  const [amount, setAmount] = useState("10");

  function calculateHash(
    index: number,
    timestamp: string,
    transactions: Transaction[],
    previousHash: string,
    nonce: number
  ): string {
    const data = index + timestamp + JSON.stringify(transactions) + previousHash + nonce;
    return CryptoJS.SHA256(data).toString();
  }

  function mineBlock(block: Block, difficulty: number = 3): Promise<Block> {
    return new Promise((resolve) => {
      const target = "0".repeat(difficulty);
      let nonce = 0;
      let hash = "";
      let attempts = 0;

      // Simulate mining with visual feedback
      const mineInterval = setInterval(() => {
        // Process multiple hashes per interval for speed
        for (let i = 0; i < 1000; i++) {
          hash = calculateHash(block.index, block.timestamp, block.transactions, block.previousHash, nonce);
          attempts++;

          if (hash.substring(0, difficulty) === target) {
            clearInterval(mineInterval);
            setMiningProgress(100);
            setTimeout(() => {
              resolve({ ...block, hash, nonce });
            }, 500); // Small delay to show 100%
            return;
          }
          nonce++;
        }

        // Update progress based on attempts (simulated)
        const progress = Math.min((attempts / 5000) * 100, 95);
        setMiningProgress(progress);
      }, 50);
    });
  }

  const createTransaction = () => {
    const tx: Transaction = {
      from: fromAddress,
      to: toAddress,
      amount: parseFloat(amount) || 0,
      timestamp: new Date().toISOString(),
    };
    setPendingTransaction(tx);
    setCurrentStep("mempool");
  };

  const addToMempool = () => {
    if (pendingTransaction) {
      setMempool([...mempool, pendingTransaction]);
      setPendingTransaction(null);
      setCurrentStep("mining");
    }
  };

  const startMining = async () => {
    setIsMining(true);
    setMiningProgress(0);

    const lastBlock = blockchain[blockchain.length - 1];
    const block: Block = {
      index: lastBlock.index + 1,
      timestamp: new Date().toISOString(),
      transactions: mempool,
      previousHash: lastBlock.hash,
      hash: "",
      nonce: 0,
    };

    const minedBlock = await mineBlock(block);
    setNewBlock(minedBlock);
    setIsMining(false);
    setCurrentStep("validation");
  };

  const validateAndAddBlock = () => {
    if (newBlock) {
      // Validate previous hash
      const lastBlock = blockchain[blockchain.length - 1];
      if (newBlock.previousHash === lastBlock.hash && newBlock.hash.startsWith("000")) {
        setBlockchain([...blockchain, newBlock]);
        setMempool([]);
        setNewBlock(null);
        setIsValid(true);
        setCurrentStep("added");
      } else {
        setIsValid(false);
      }
    }
  };

  const tamperBlock = (index: number) => {
    const newChain = [...blockchain];
    if (newChain[index].transactions.length > 0) {
      newChain[index].transactions[0].amount = 999999;
    }
    setBlockchain(newChain);
    setIsValid(false);
  };

  const resetDemo = () => {
    setBlockchain([
      {
        index: 0,
        timestamp: new Date("2024-01-01").toISOString(),
        transactions: [],
        previousHash: "0",
        hash: "000a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
        nonce: 0,
      },
    ]);
    setPendingTransaction(null);
    setMempool([]);
    setNewBlock(null);
    setIsMining(false);
    setMiningProgress(0);
    setIsValid(true);
    setCurrentStep("intro");
    setFromAddress("Alice");
    setToAddress("Bob");
    setAmount("10");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-xl">
              <Blocks className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6">
              Blockchain Visualizer
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Step-by-step guide: See how transactions become blocks in a blockchain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Progress Steps */}
          <div className="mb-12 bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {[
                { id: "intro", label: "1. Genesis Block", icon: Blocks },
                { id: "create-tx", label: "2. Create Transaction", icon: User },
                { id: "mempool", label: "3. Mempool", icon: Clock },
                { id: "mining", label: "4. Mining", icon: Pickaxe },
                { id: "validation", label: "5. Validation", icon: CheckCircle },
                { id: "added", label: "6. Block Added", icon: Zap },
                { id: "tamper-test", label: "7. Tamper Test", icon: AlertTriangle },
              ].map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = ["intro", "create-tx", "mempool", "mining", "validation", "added", "tamper-test"].indexOf(currentStep) > index;

                return (
                  <div
                    key={step.id}
                    className={`flex items-center ${
                      isActive
                        ? "bg-blue-100 px-4 py-2 rounded-lg"
                        : isCompleted
                        ? "opacity-50"
                        : "opacity-30"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-2 ${isActive ? "text-blue-600" : "text-gray-600"}`} />
                    <span className={`text-sm font-semibold ${isActive ? "text-blue-900" : "text-gray-600"}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 1: Introduction & Genesis Block */}
          <AnimatePresence mode="wait">
            {currentStep === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-300 shadow-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Step 1: The Genesis Block</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Every blockchain starts with a <strong>Genesis Block</strong> (Block #0). This is the first block,
                    hardcoded into the blockchain, with no previous hash. Let's see it:
                  </p>

                  {/* Genesis Block Display */}
                  <div className="bg-white rounded-xl p-6 border-2 border-purple-400 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-4">
                        0
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Genesis Block</h3>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{new Date(blockchain[0].timestamp).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-semibold text-gray-600">Previous Hash:</span>
                        <code className="block text-sm font-mono text-purple-700 mt-1">
                          {blockchain[0].previousHash} (none - this is the first block!)
                        </code>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-300">
                        <span className="text-sm font-semibold text-gray-600">Block Hash:</span>
                        <code className="block text-sm font-mono text-green-700 mt-1 break-all">
                          {blockchain[0].hash}
                        </code>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep("create-tx")}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg"
                  >
                    Next: Create a Transaction
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Create Transaction */}
            {currentStep === "create-tx" && (
              <motion.div
                key="create-tx"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-300 shadow-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Step 2: Create a Transaction</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    When Alice wants to send cryptocurrency to Bob, she creates a transaction. Let's create one:
                  </p>

                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200 mb-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">From (Sender)</label>
                        <input
                          type="text"
                          value={fromAddress}
                          onChange={(e) => setFromAddress(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">To (Receiver)</label>
                        <input
                          type="text"
                          value={toAddress}
                          onChange={(e) => setToAddress(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (BTC)</label>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Visual Representation */}
                    <div className="mt-8 flex items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-2">
                          {fromAddress.charAt(0)}
                        </div>
                        <p className="font-semibold text-gray-900">{fromAddress}</p>
                        <p className="text-sm text-gray-600">Sender</p>
                      </div>

                      <div className="flex flex-col items-center">
                        <ArrowRight className="w-12 h-12 text-green-600 mb-2" />
                        <div className="px-4 py-2 bg-green-100 rounded-lg border-2 border-green-300">
                          <p className="font-bold text-green-800 text-xl">{amount} BTC</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-2">
                          {toAddress.charAt(0)}
                        </div>
                        <p className="font-semibold text-gray-900">{toAddress}</p>
                        <p className="text-sm text-gray-600">Receiver</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={createTransaction}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg"
                  >
                    Create & Broadcast Transaction
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Mempool */}
            {currentStep === "mempool" && pendingTransaction && (
              <motion.div
                key="mempool"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-yellow-300 shadow-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Step 3: Transaction in Mempool</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    The transaction is broadcast to the network and placed in the <strong>mempool</strong> (memory pool).
                    Miners will pick it up to include in the next block.
                  </p>

                  <div className="bg-white rounded-xl p-6 border-2 border-yellow-400 mb-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-8 h-8 text-yellow-600 mr-3" />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Pending Transaction</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-gray-600">From:</p>
                        <p className="font-bold text-gray-900 text-lg">{pendingTransaction.from}</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-sm text-gray-600">To:</p>
                        <p className="font-bold text-gray-900 text-lg">{pendingTransaction.to}</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm text-gray-600">Amount:</p>
                        <p className="font-bold text-gray-900 text-lg">{pendingTransaction.amount} BTC</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600">Timestamp:</p>
                        <p className="font-mono text-gray-900">{new Date(pendingTransaction.timestamp).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-400">
                      <p className="text-yellow-800 text-base">
                        ⏳ <strong>Status:</strong> Waiting in mempool for a miner to include it in a block...
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={addToMempool}
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-yellow-700 hover:to-orange-700 transition-all shadow-lg"
                  >
                    Next: Miners Start Working
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Mining */}
            {currentStep === "mining" && (
              <motion.div
                key="mining"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border-2 border-orange-300 shadow-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Step 4: Mining the Block</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Miners compete to solve a cryptographic puzzle (Proof of Work). They must find a <strong>nonce</strong> (number)
                    that when hashed with the block data, produces a hash starting with multiple zeros.
                  </p>

                  {!isMining && !newBlock && (
                    <div className="bg-white rounded-xl p-6 border-2 border-orange-400 mb-6">
                      <div className="flex items-center mb-4">
                        <Pickaxe className="w-8 h-8 text-orange-600 mr-3" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Ready to Mine</h3>
                      </div>
                      <p className="text-gray-700 text-lg mb-4">
                        Click below to start mining. The miner will try different nonce values until finding a hash
                        that starts with <code className="bg-gray-100 px-2 py-1 rounded font-mono">000</code> (3 zeros - Proof of Work!)
                      </p>
                      <button
                        onClick={startMining}
                        className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-orange-700 hover:to-red-700 transition-all shadow-lg"
                      >
                        <Pickaxe className="mr-3 w-6 h-6" />
                        Start Mining
                      </button>
                    </div>
                  )}

                  {isMining && (
                    <div className="bg-white rounded-xl p-6 border-2 border-orange-400 mb-6">
                      <div className="flex items-center mb-4">
                        <Pickaxe className="w-8 h-8 text-orange-600 mr-3 animate-bounce" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Mining in Progress...</h3>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Finding nonce...</span>
                          <span>{miningProgress.toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full transition-all"
                            style={{ width: `${miningProgress}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 text-base">
                        The miner is testing thousands of nonce values per second...
                      </p>
                    </div>
                  )}

                  {newBlock && (
                    <div className="bg-white rounded-xl p-6 border-2 border-green-400 mb-6">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl md:text-2xl font-bold text-green-900">Block Mined Successfully!</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-semibold text-gray-600">Nonce Found:</span>
                          <p className="font-mono text-xl font-bold text-gray-900">{newBlock.nonce}</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border border-green-300">
                          <span className="text-sm font-semibold text-gray-600">Block Hash (starts with 000):</span>
                          <code className="block text-sm font-mono text-green-700 mt-1 break-all">
                            {newBlock.hash}
                          </code>
                        </div>
                      </div>
                      <button
                        onClick={() => setCurrentStep("validation")}
                        className="w-full mt-4 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
                      >
                        Next: Validate Block
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 5: Validation */}
            {currentStep === "validation" && newBlock && (
              <motion.div
                key="validation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border-2 border-green-300 shadow-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Step 5: Validating the Block</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Before adding to the blockchain, the network validates the block by checking:
                  </p>

                  <div className="bg-white rounded-xl p-6 border-2 border-green-400 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Validation Checks:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-300">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">1. Hash starts with required zeros (000)</p>
                          <code className="text-sm font-mono text-green-700 break-all">{newBlock.hash}</code>
                        </div>
                      </div>

                      <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-300">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">2. Previous hash matches last block</p>
                          <code className="text-sm font-mono text-green-700 break-all">
                            {newBlock.previousHash} === {blockchain[blockchain.length - 1].hash}
                          </code>
                        </div>
                      </div>

                      <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-300">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">3. Transactions are valid</p>
                          <p className="text-sm text-gray-600">
                            {newBlock.transactions.length} transaction(s) verified
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-100 rounded-lg border-2 border-green-400">
                      <p className="text-green-800 text-lg font-semibold">
                        ✅ All validation checks passed! Block is ready to be added to the chain.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={validateAndAddBlock}
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
                  >
                    Add Block to Blockchain
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 6: Block Added */}
            {currentStep === "added" && (
              <motion.div
                key="added"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-300 shadow-xl">
                  <div className="text-center mb-8">
                    <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">🎉 Block Successfully Added!</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      The block is now permanently part of the blockchain. The transaction is confirmed!
                    </p>
                  </div>

                  {/* Show the Blockchain */}
                  <div className="space-y-6 mb-8">
                    {blockchain.map((block, index) => (
                      <div key={index}>
                        {index > 0 && (
                          <div className="flex justify-center my-4">
                            <Link2 className="w-8 h-8 text-blue-500" />
                          </div>
                        )}
                        <div
                          className={`bg-white rounded-xl p-6 border-2 ${
                            index === 0
                              ? "border-purple-400 bg-gradient-to-r from-purple-50 to-pink-50"
                              : "border-blue-400 bg-gradient-to-r from-blue-50 to-cyan-50"
                          }`}
                        >
                          <div className="flex items-center mb-4">
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4 ${
                                index === 0
                                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                  : "bg-gradient-to-r from-blue-500 to-cyan-500"
                              }`}
                            >
                              {block.index}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">
                                {index === 0 ? "Genesis Block" : `Block #${block.index}`}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {new Date(block.timestamp).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          {block.transactions.length > 0 && (
                            <div className="mb-3 p-3 bg-white rounded-lg border border-gray-300">
                              <p className="text-sm font-semibold text-gray-600 mb-2">Transactions:</p>
                              {block.transactions.map((tx, txIndex) => (
                                <p key={txIndex} className="text-gray-900">
                                  {tx.from} → {tx.to}: <strong>{tx.amount} BTC</strong>
                                </p>
                              ))}
                            </div>
                          )}

                          <div className="space-y-2">
                            <div className="p-2 bg-gray-50 rounded">
                              <p className="text-xs text-gray-600">Previous Hash:</p>
                              <code className="text-xs font-mono text-gray-700 break-all">
                                {block.previousHash}
                              </code>
                            </div>
                            <div className="p-2 bg-green-50 rounded border border-green-300">
                              <p className="text-xs text-gray-600">Block Hash:</p>
                              <code className="text-xs font-mono text-green-700 break-all">
                                {block.hash}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setCurrentStep("tamper-test")}
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl text-xl flex items-center justify-center hover:from-orange-700 hover:to-red-700 transition-all shadow-lg"
                    >
                      Test: Try to Tamper
                      <AlertTriangle className="ml-3 w-6 h-6" />
                    </button>
                    <button
                      onClick={resetDemo}
                      className="flex-1 px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl text-xl flex items-center justify-center transition-all shadow-lg"
                    >
                      <RotateCcw className="mr-3 w-6 h-6" />
                      Start Over
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 7: Tamper Test */}
            {currentStep === "tamper-test" && (
              <motion.div
                key="tamper-test"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-red-300 shadow-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Step 7: Test Blockchain Immutability</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Now let's see why blockchain is <strong>immutable</strong>. Try tampering with a previous block's data:
                  </p>

                  {/* Show all blocks with tamper option */}
                  <div className="space-y-6 mb-8">
                    {blockchain.map((block, index) => (
                      <div key={index}>
                        {index > 0 && (
                          <div className="flex justify-center my-4">
                            <Link2 className="w-8 h-8 text-blue-500" />
                          </div>
                        )}
                        <div
                          className={`bg-white rounded-xl p-6 border-2 ${
                            index === 0
                              ? "border-purple-400"
                              : !isValid && block.transactions.length > 0 &&
                                block.transactions[0].amount === 999999
                              ? "border-red-500 bg-red-50"
                              : "border-blue-400"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4 ${
                                  index === 0
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                    : "bg-gradient-to-r from-blue-500 to-cyan-500"
                                }`}
                              >
                                {block.index}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {index === 0 ? "Genesis Block" : `Block #${block.index}`}
                                </h3>
                              </div>
                            </div>
                            {index > 0 && (
                              <button
                                onClick={() => tamperBlock(index)}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all flex items-center"
                              >
                                <Edit3 className="w-4 h-4 mr-2" />
                                Tamper with this Block
                              </button>
                            )}
                          </div>

                          {block.transactions.length > 0 && (
                            <div className={`mb-3 p-3 rounded-lg border ${
                              !isValid && block.transactions[0].amount === 999999
                                ? "bg-red-100 border-red-400"
                                : "bg-white border-gray-300"
                            }`}>
                              <p className="text-sm font-semibold text-gray-600 mb-2">Transaction Data:</p>
                              {block.transactions.map((tx, txIndex) => (
                                <p key={txIndex} className={`font-bold ${
                                  !isValid && tx.amount === 999999 ? "text-red-700" : "text-gray-900"
                                }`}>
                                  {tx.from} → {tx.to}: {tx.amount} BTC
                                  {!isValid && tx.amount === 999999 && (
                                    <span className="ml-2 text-red-600">[TAMPERED!]</span>
                                  )}
                                </p>
                              ))}
                            </div>
                          )}

                          <div className="space-y-2">
                            <div className="p-2 bg-gray-50 rounded">
                              <p className="text-xs text-gray-600">Block Hash:</p>
                              <code className="text-xs font-mono text-gray-700 break-all">
                                {block.hash}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!isValid && (
                    <div className="p-6 bg-red-100 rounded-xl border-2 border-red-400 mb-6">
                      <div className="flex items-start">
                        <XCircle className="w-8 h-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-2">❌ Chain Invalid!</h3>
                          <p className="text-red-800 text-lg leading-relaxed">
                            By changing the transaction amount, the block's hash has changed. But the next block still
                            points to the <strong>old hash</strong>, breaking the chain! In a real blockchain network,
                            this tampering would be immediately detected and rejected by all other nodes.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isValid && (
                    <div className="p-6 bg-green-100 rounded-xl border-2 border-green-400 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-2">✅ Chain Still Valid</h3>
                          <p className="text-green-800 text-lg leading-relaxed">
                            No tampering detected. Click "Tamper with this Block" on any block to see what happens!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={resetDemo}
                    className="w-full px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl text-xl flex items-center justify-center transition-all shadow-lg"
                  >
                    <RotateCcw className="mr-3 w-6 h-6" />
                    Start New Demo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
