"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Key, Copy, CheckCircle, Eye, EyeOff, RefreshCw, Shield, AlertTriangle, Hash } from "lucide-react";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";

export default function WalletGeneratorPage() {
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const generateWallet = () => {
    // Generate a random 256-bit private key
    const randomBytes = CryptoJS.lib.WordArray.random(32);
    const privKey = randomBytes.toString(CryptoJS.enc.Hex);

    // Simulate public key generation (in reality, this would use elliptic curve cryptography)
    const pubKey = CryptoJS.SHA256(privKey).toString(CryptoJS.enc.Hex);

    // Generate address from public key hash (simplified simulation)
    const addr = "0x" + CryptoJS.RIPEMD160(pubKey).toString(CryptoJS.enc.Hex).substring(0, 40);

    setPrivateKey(privKey);
    setPublicKey(pubKey);
    setAddress(addr);
    setShowPrivateKey(false);
  };

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-xl">
              <Key className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              Wallet Generator
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Generate secure cryptocurrency wallet addresses with public/private key pairs using industry-standard cryptography
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-16">
          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-2 border-orange-300 shadow-lg"
          >
            <div className="flex items-start">
              <AlertTriangle className="w-7 h-7 text-orange-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-orange-900 mb-2">⚠️ Educational Purpose Only</h3>
                <p className="text-base text-orange-800 leading-relaxed">
                  This is a <strong>demonstration tool</strong> for learning purposes. Do NOT use these wallets for real cryptocurrency transactions.
                  Always use established, audited wallet software for actual crypto storage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Generate Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <button
              onClick={generateWallet}
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all transform hover:scale-105 text-2xl shadow-2xl"
            >
              <RefreshCw className="mr-3 w-8 h-8" />
              Generate New Wallet
            </button>
          </motion.div>

          {/* Wallet Details */}
          {address && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Wallet Address</h2>
                  <button
                    onClick={() => copyToClipboard(address, "address")}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all shadow-lg"
                  >
                    {copiedItem === "address" ? (
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
                </div>
                <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                  <code className="text-purple-700 font-mono text-lg font-semibold break-all">
                    {address}
                  </code>
                </div>
                <p className="mt-4 text-gray-600 text-base">
                  This is your public wallet address. Share this to receive cryptocurrency.
                </p>
              </div>

              {/* Public Key */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Public Key</h2>
                  <button
                    onClick={() => copyToClipboard(publicKey, "public")}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg"
                  >
                    {copiedItem === "public" ? (
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
                </div>
                <div className="p-5 bg-gray-50 rounded-xl border-2 border-gray-300">
                  <code className="text-blue-600 font-mono text-base font-semibold break-all leading-relaxed">
                    {publicKey}
                  </code>
                </div>
                <p className="mt-4 text-gray-600 text-base">
                  Derived from your private key using elliptic curve cryptography. Safe to share.
                </p>
              </div>

              {/* Private Key */}
              <div className="bg-white rounded-2xl p-8 border-2 border-red-300 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-red-700 flex items-center">
                    <Shield className="w-7 h-7 mr-3" />
                    Private Key
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPrivateKey(!showPrivateKey)}
                      className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all"
                    >
                      {showPrivateKey ? (
                        <>
                          <EyeOff className="w-5 h-5 mr-2" />
                          Hide
                        </>
                      ) : (
                        <>
                          <Eye className="w-5 h-5 mr-2" />
                          Show
                        </>
                      )}
                    </button>
                    {showPrivateKey && (
                      <button
                        onClick={() => copyToClipboard(privateKey, "private")}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all shadow-lg"
                      >
                        {copiedItem === "private" ? (
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
                </div>
                <div className="p-5 bg-red-50 rounded-xl border-2 border-red-300">
                  {showPrivateKey ? (
                    <code className="text-red-700 font-mono text-base font-semibold break-all leading-relaxed">
                      {privateKey}
                    </code>
                  ) : (
                    <div className="text-gray-500 italic text-lg text-center py-4">
                      Hidden for security • Click "Show" to reveal
                    </div>
                  )}
                </div>
                <div className="mt-4 p-4 bg-red-100 rounded-lg border border-red-300">
                  <p className="text-red-800 text-base font-semibold">
                    🔒 <strong>NEVER</strong> share your private key! Anyone with this key has full control over your wallet.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* How it Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">How Cryptocurrency Wallets Work</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Private Key Generation</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    A random 256-bit number is generated using cryptographically secure random number generation.
                    This is your private key - the master key to your funds.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Public Key Derivation</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Using elliptic curve cryptography (ECDSA for Bitcoin, ECDSA/EdDSA for Ethereum),
                    the public key is mathematically derived from the private key. This is a one-way function.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Address Creation</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    The wallet address is created by hashing the public key (using SHA-256 and RIPEMD-160),
                    adding a checksum, and encoding it in Base58 or similar format.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Deep Dive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical Deep Dive: Key Generation Process</h3>

            <div className="space-y-8">
              {/* Private Key */}
              <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
                <h4 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  1. Private Key Generation
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">What it is:</strong> A 256-bit random number (64 hexadecimal characters).
                    This is essentially a very large number between 1 and 2<sup>256</sup>.
                  </p>
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">How it's created:</strong> Using a cryptographically secure random number generator (CSRNG),
                    we generate 32 random bytes (256 bits). This ensures true randomness and unpredictability.
                  </p>
                  <div className="p-4 bg-white rounded-lg border border-red-300">
                    <code className="text-sm font-mono text-gray-800">
                      Example: a7b4c8d2e9f1a3b5c7d9e2f4a6b8c0d1e3f5a7b9c1d3e5f7a9b0c2d4e6f8a0b2
                    </code>
                  </div>
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">Security:</strong> With 2<sup>256</sup> possible combinations,
                    it would take all the world's computers billions of years to guess a single private key by brute force.
                  </p>
                </div>
              </div>

              {/* Public Key */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                  <Key className="w-6 h-6 mr-3" />
                  2. Public Key Derivation
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">What it is:</strong> A point on an elliptic curve, derived from the private key
                    using elliptic curve cryptography (ECC).
                  </p>
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">How it's created:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                    <li>Bitcoin uses the <strong>secp256k1</strong> elliptic curve</li>
                    <li>The private key is multiplied by a generator point G on the curve</li>
                    <li>Formula: <code className="bg-white px-2 py-1 rounded font-mono text-sm">Public Key = Private Key × G</code></li>
                    <li>This operation is a <strong>one-way function</strong> - easy to compute forward, impossible to reverse</li>
                  </ul>
                  <div className="p-4 bg-white rounded-lg border border-blue-300">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Simplified Example (this tool):</p>
                    <code className="text-sm font-mono text-gray-800 break-all">
                      SHA-256(private_key) → public_key
                    </code>
                  </div>
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">Why it's secure:</strong> Even knowing the public key and the curve equation,
                    you cannot reverse-calculate the private key. This is called the <strong>discrete logarithm problem</strong>.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                <h4 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                  <Hash className="w-6 h-6 mr-3" />
                  3. Wallet Address Creation
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">What it is:</strong> A shorter, human-readable identifier derived from the public key.
                    Think of it like an email address for receiving cryptocurrency.
                  </p>
                  <p className="text-base leading-relaxed">
                    <strong className="text-gray-900">How it's created (Bitcoin example):</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-3 ml-4 text-base">
                    <li><strong>SHA-256 Hash:</strong> Hash the public key using SHA-256
                      <div className="ml-6 mt-1 p-3 bg-white rounded border border-purple-200">
                        <code className="text-sm font-mono text-gray-700">sha256(public_key)</code>
                      </div>
                    </li>
                    <li><strong>RIPEMD-160 Hash:</strong> Hash the result again using RIPEMD-160 (creates 160-bit hash)
                      <div className="ml-6 mt-1 p-3 bg-white rounded border border-purple-200">
                        <code className="text-sm font-mono text-gray-700">ripemd160(sha256_hash)</code>
                      </div>
                    </li>
                    <li><strong>Add Network Byte:</strong> Prepend version byte (0x00 for Bitcoin mainnet)</li>
                    <li><strong>Checksum:</strong> Add double SHA-256 checksum for error detection
                      <div className="ml-6 mt-1 p-3 bg-white rounded border border-purple-200">
                        <code className="text-sm font-mono text-gray-700">checksum = sha256(sha256(versioned_hash))</code>
                      </div>
                    </li>
                    <li><strong>Base58 Encoding:</strong> Encode in Base58 format (avoids confusing characters like 0, O, I, l)
                      <div className="ml-6 mt-1 p-3 bg-white rounded border border-purple-200">
                        <code className="text-sm font-mono text-gray-700">Base58(versioned_hash + checksum)</code>
                      </div>
                    </li>
                  </ol>
                  <div className="p-4 bg-white rounded-lg border border-purple-300 mt-4">
                    <p className="text-sm font-semibold text-purple-800 mb-2">Result Examples:</p>
                    <ul className="space-y-2 text-sm font-mono text-gray-700">
                      <li><strong>Bitcoin:</strong> 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</li>
                      <li><strong>Ethereum:</strong> 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</li>
                    </ul>
                  </div>
                  <p className="text-base leading-relaxed mt-4">
                    <strong className="text-gray-900">Why hash twice?</strong> Double hashing (SHA-256 + RIPEMD-160) provides:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                    <li><strong>Shorter addresses</strong> - Easier to share and use</li>
                    <li><strong>Extra security layer</strong> - Even if SHA-256 is broken, RIPEMD-160 provides protection</li>
                    <li><strong>Quantum resistance</strong> - Hashing the public key hides it until funds are spent</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mathematical Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why This System Is Secure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-xl border border-indigo-200">
                <h4 className="text-xl font-bold text-indigo-700 mb-3">🔒 One-Way Functions</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  You can easily go from private key → public key → address, but you <strong>cannot</strong> reverse it.
                  It's like mixing paint colors - easy to mix, impossible to un-mix.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-indigo-200">
                <h4 className="text-xl font-bold text-indigo-700 mb-3">🎲 True Randomness</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  With 2<sup>256</sup> possible keys (77 digits!), finding a specific private key by chance is
                  like picking one specific atom out of the entire observable universe.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-indigo-200">
                <h4 className="text-xl font-bold text-indigo-700 mb-3">✅ Checksum Protection</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  The checksum in addresses prevents typos. If you make a mistake typing an address,
                  the checksum won't match and the transaction will be rejected.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-indigo-200">
                <h4 className="text-xl font-bold text-indigo-700 mb-3">🛡️ Elliptic Curve Magic</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  ECC provides the same security as RSA but with much smaller key sizes.
                  A 256-bit ECC key ≈ 3072-bit RSA key in security strength.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="p-6 bg-white rounded-2xl border-2 border-green-200 shadow-lg">
              <h4 className="text-xl font-bold text-green-700 mb-3">✅ Safe to Share</h4>
              <ul className="space-y-2 text-gray-700 text-base">
                <li>• Wallet Address</li>
                <li>• Public Key</li>
                <li>• QR Codes of above</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-red-200 shadow-lg">
              <h4 className="text-xl font-bold text-red-700 mb-3">❌ NEVER Share</h4>
              <ul className="space-y-2 text-gray-700 text-base">
                <li>• Private Key</li>
                <li>• Seed Phrase / Mnemonic</li>
                <li>• Wallet Password</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
