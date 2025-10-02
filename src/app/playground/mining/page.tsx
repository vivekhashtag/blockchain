"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Zap, TrendingUp, Award, Play, Pause, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";

interface MiningStats {
  attempts: number;
  hashRate: number;
  difficulty: number;
  timeElapsed: number;
  blocksMined: number;
}

export default function MiningSimulatorPage() {
  const [difficulty, setDifficulty] = useState(3);
  const [isMining, setIsMining] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [nonce, setNonce] = useState(0);
  const [blockData, setBlockData] = useState("Block #1: Alice sends 10 BTC to Bob");
  const [stats, setStats] = useState<MiningStats>({
    attempts: 0,
    hashRate: 0,
    difficulty: 3,
    timeElapsed: 0,
    blocksMined: 0
  });
  const [foundHash, setFoundHash] = useState<string | null>(null);
  const [foundNonce, setFoundNonce] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  const target = "0".repeat(difficulty);

  const calculateHash = (data: string, nonce: number): string => {
    return CryptoJS.SHA256(data + nonce).toString();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isMining && !foundHash) {
      const start = startTime || Date.now();
      if (!startTime) setStartTime(start);

      interval = setInterval(() => {
        let attempts = 0;
        let hash = "";
        let currentNonce = nonce;

        // Process 2000 hashes per interval for speed
        for (let i = 0; i < 2000; i++) {
          hash = calculateHash(blockData, currentNonce);
          attempts++;

          if (hash.substring(0, difficulty) === target) {
            // Found valid hash!
            setFoundHash(hash);
            setFoundNonce(currentNonce);
            setCurrentHash(hash);
            setNonce(currentNonce);
            setIsMining(false);

            const timeElapsed = (Date.now() - start) / 1000;
            setStats(prev => ({
              ...prev,
              attempts: prev.attempts + attempts,
              timeElapsed,
              blocksMined: prev.blocksMined + 1,
              hashRate: Math.round((prev.attempts + attempts) / timeElapsed)
            }));

            clearInterval(interval);
            return;
          }
          currentNonce++;
        }

        // Update UI
        setCurrentHash(hash);
        setNonce(currentNonce);

        const elapsed = (Date.now() - start) / 1000;
        setStats(prev => ({
          ...prev,
          attempts: prev.attempts + attempts,
          timeElapsed: elapsed,
          hashRate: elapsed > 0 ? Math.round((prev.attempts + attempts) / elapsed) : 0
        }));
      }, 50);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMining, nonce, blockData, difficulty, target, foundHash, startTime]);

  const startMining = () => {
    if (!isMining && !foundHash) {
      setIsMining(true);
      setStartTime(Date.now());
    }
  };

  const pauseMining = () => {
    setIsMining(false);
  };

  const reset = () => {
    setIsMining(false);
    setCurrentHash("");
    setNonce(0);
    setFoundHash(null);
    setFoundNonce(null);
    setStartTime(null);
    setStats({
      attempts: 0,
      hashRate: 0,
      difficulty,
      timeElapsed: 0,
      blocksMined: 0
    });
  };

  const changeDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
    reset();
    setStats(prev => ({ ...prev, difficulty: newDifficulty }));
  };

  const isValidHash = currentHash.substring(0, difficulty) === target;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-12 md:py-16 lg:py-24">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6 shadow-xl">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6">
              Mining Simulator
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Experience proof-of-work mining in real-time. Adjust difficulty and see how miners find valid blocks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6 md:gap-8 lg:gap-10">
            {/* Control Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Block Data */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Block Data</h2>
                <textarea
                  value={blockData}
                  onChange={(e) => {
                    setBlockData(e.target.value);
                    reset();
                  }}
                  placeholder="Enter block data..."
                  className="w-full h-32 px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all resize-none font-mono"
                  disabled={isMining}
                />
              </div>

              {/* Difficulty Selector */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mining Difficulty</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Difficulty determines how many leading zeros are required in the hash.
                </p>

                <div className="grid grid-cols-5 gap-3 mb-6">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => changeDifficulty(level)}
                      disabled={isMining}
                      className={`px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                        difficulty === level
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      } ${isMining ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="text-base text-gray-700">
                    <strong className="text-orange-600">Target:</strong>{" "}
                    <code className="font-mono bg-white px-2 py-1 rounded">{target}...</code>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Hash must start with {difficulty} zero{difficulty > 1 ? "s" : ""}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Controls</h2>
                <div className="flex gap-4">
                  {!foundHash && (
                    <>
                      {!isMining ? (
                        <button
                          onClick={startMining}
                          className="flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl"
                        >
                          <Play className="w-6 h-6 mr-2" />
                          Start Mining
                        </button>
                      ) : (
                        <button
                          onClick={pauseMining}
                          className="flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-xl transition-all shadow-lg text-xl"
                        >
                          <Pause className="w-6 h-6 mr-2" />
                          Pause
                        </button>
                      )}
                    </>
                  )}

                  <button
                    onClick={reset}
                    className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl"
                  >
                    <RotateCcw className="w-6 h-6 mr-2" />
                    Reset
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Mining Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Current Hash */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Current Hash</h2>

                <div className={`p-6 rounded-xl border-2 mb-6 ${
                  foundHash
                    ? "bg-green-50 border-green-300"
                    : isValidHash && currentHash
                    ? "bg-green-50 border-green-300"
                    : "bg-gray-50 border-gray-300"
                }`}>
                  {currentHash ? (
                    <code className={`font-mono text-base font-semibold break-all leading-relaxed ${
                      foundHash || isValidHash ? "text-green-600" : "text-gray-600"
                    }`}>
                      {currentHash}
                    </code>
                  ) : (
                    <span className="text-gray-400 italic text-lg">Start mining to see hashes...</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-gray-600 text-base">Current Nonce:</span>
                    <div className="text-gray-900 font-bold text-xl font-mono mt-1">
                      {nonce.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-gray-600 text-base">Status:</span>
                    <div className={`font-bold text-xl mt-1 ${
                      foundHash ? "text-green-600" : isMining ? "text-orange-600" : "text-gray-600"
                    }`}>
                      {foundHash ? "✓ Found!" : isMining ? "Mining..." : "Ready"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {foundHash && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 shadow-xl mb-8"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                    Block Mined Successfully! 🎉
                  </h3>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-white text-center">
                      <div className="text-lg mb-2">Valid Hash Found!</div>
                      <div className="text-xl md:text-2xl font-bold font-mono">Nonce: {foundNonce?.toLocaleString()}</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Mining Statistics */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-orange-600" />
                  Mining Statistics
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-lg font-medium">Total Attempts</span>
                      <span className="text-orange-600 text-xl md:text-2xl font-bold font-mono">
                        {stats.attempts.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-lg font-medium flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-orange-600" />
                        Hash Rate
                      </span>
                      <span className="text-orange-600 text-xl md:text-2xl font-bold font-mono">
                        {stats.hashRate.toLocaleString()} H/s
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-lg font-medium">Time Elapsed</span>
                      <span className="text-orange-600 text-xl md:text-2xl font-bold font-mono">
                        {stats.timeElapsed.toFixed(2)}s
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-lg font-medium">Blocks Mined</span>
                      <span className="text-orange-600 text-xl md:text-2xl font-bold font-mono">
                        {stats.blocksMined}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Educational Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 border-2 border-blue-200 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Proof-of-Work Mining Works</h3>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">The Process</h4>
                  <ol className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
                      <span>Miner takes block data (transactions)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
                      <span>Adds a nonce (number used once) starting at 0</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
                      <span>Computes SHA-256 hash of data + nonce</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
                      <span>Checks if hash meets difficulty target</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</span>
                      <span>If no, increment nonce and repeat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</span>
                      <span>If yes, block is mined! Broadcast to network</span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">Key Concepts</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-blue-200">
                      <h5 className="font-bold text-gray-900 text-lg mb-2">Difficulty</h5>
                      <p className="text-gray-700">
                        Higher difficulty = more leading zeros required = exponentially more attempts needed
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-blue-200">
                      <h5 className="font-bold text-gray-900 text-lg mb-2">Nonce</h5>
                      <p className="text-gray-700">
                        A random number that miners increment to find a valid hash
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-blue-200">
                      <h5 className="font-bold text-gray-900 text-lg mb-2">Hash Rate</h5>
                      <p className="text-gray-700">
                        Number of hash calculations per second. Bitcoin network: ~400 EH/s (exahashes)
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-blue-200">
                      <h5 className="font-bold text-gray-900 text-lg mb-2">Energy Cost</h5>
                      <p className="text-gray-700">
                        Real mining consumes significant electricity - this incentivizes security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
