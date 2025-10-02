"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Key, CheckCircle, XCircle, Copy, Eye, EyeOff, FileSignature, Lock } from "lucide-react";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";

export default function DigitalSignaturePage() {
  const [message, setMessage] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [signature, setSignature] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verificationSignature, setVerificationSignature] = useState("");
  const [verificationPublicKey, setVerificationPublicKey] = useState("");
  const [verificationResult, setVerificationResult] = useState<boolean | null>(null);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copiedSignature, setCopiedSignature] = useState(false);

  const generateKeyPair = () => {
    // Generate a private key (256-bit random)
    const randomBytes = CryptoJS.lib.WordArray.random(32);
    const privKey = randomBytes.toString(CryptoJS.enc.Hex);

    // Simulate public key derivation from private key
    const pubKey = CryptoJS.SHA256(privKey).toString(CryptoJS.enc.Hex);

    setPrivateKey(privKey);
    setPublicKey(pubKey);
    setSignature("");
  };

  const signMessage = () => {
    if (!message || !privateKey) {
      alert("Please enter a message and generate a key pair first!");
      return;
    }

    // Create signature: Hash(message + private key)
    // In real ECDSA, this would use elliptic curve mathematics
    const sig = CryptoJS.SHA256(message + privateKey).toString(CryptoJS.enc.Hex);
    setSignature(sig);

    // Auto-fill verification fields
    setVerificationMessage(message);
    setVerificationSignature(sig);
    setVerificationPublicKey(publicKey);
  };

  const verifySignature = () => {
    if (!verificationMessage || !verificationSignature || !verificationPublicKey) {
      alert("Please fill all verification fields!");
      return;
    }

    // Reverse the private key from public key (only works in this simplified simulation)
    // In real crypto, this is computationally infeasible
    const derivedPrivateKey = findPrivateKey(verificationPublicKey);

    if (!derivedPrivateKey) {
      setVerificationResult(false);
      return;
    }

    // Recreate signature with message and derived private key
    const expectedSignature = CryptoJS.SHA256(verificationMessage + derivedPrivateKey).toString(CryptoJS.enc.Hex);

    // Compare signatures
    setVerificationResult(expectedSignature === verificationSignature);
  };

  // Simulate finding private key from public key (ONLY FOR DEMO - impossible in real crypto)
  const findPrivateKey = (pubKey: string): string | null => {
    // Check if it matches our current public key
    if (pubKey === publicKey) {
      return privateKey;
    }
    return null;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSignature(true);
    setTimeout(() => setCopiedSignature(false), 2000);
  };

  const exampleMessages = [
    "I authorize payment of $1000 to Alice",
    "Transfer 5 BTC to address 1A1zP1...",
    "This document is authentic and unmodified",
    "I agree to the terms and conditions"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 md:py-24">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6 shadow-xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              Digital Signatures
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sign messages with your private key and verify authenticity using public key cryptography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Signing Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileSignature className="w-8 h-8 mr-3 text-indigo-600" />
                  Sign a Message
                </h2>

                {/* Key Generation */}
                <div className="mb-6">
                  <button
                    onClick={generateKeyPair}
                    className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl"
                  >
                    <Key className="w-6 h-6 mr-2" />
                    Generate Key Pair
                  </button>
                </div>

                {/* Keys Display */}
                {privateKey && (
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-base font-semibold text-red-700 flex items-center">
                          <Lock className="w-5 h-5 mr-2" />
                          Private Key (Keep Secret!)
                        </label>
                        <button
                          onClick={() => setShowPrivateKey(!showPrivateKey)}
                          className="text-red-600 hover:text-red-800"
                        >
                          {showPrivateKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      <code className="text-sm font-mono break-all text-red-600 font-semibold">
                        {showPrivateKey ? privateKey : "•".repeat(64)}
                      </code>
                    </div>

                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <label className="text-base font-semibold text-green-700 block mb-2 flex items-center">
                        <Key className="w-5 h-5 mr-2" />
                        Public Key (Share Freely)
                      </label>
                      <code className="text-sm font-mono break-all text-green-600 font-semibold">
                        {publicKey}
                      </code>
                    </div>
                  </div>
                )}

                {/* Message Input */}
                <div className="mb-6">
                  <label className="text-lg font-semibold text-gray-900 block mb-3">Message to Sign</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here..."
                    className="w-full h-32 px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all resize-none"
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exampleMessages.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setMessage(example)}
                        className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm rounded-lg border border-indigo-200 transition-all"
                      >
                        Example {index + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sign Button */}
                <button
                  onClick={signMessage}
                  disabled={!message || !privateKey}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FileSignature className="w-6 h-6 mr-2" />
                  Sign Message
                </button>

                {/* Signature Output */}
                {signature && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-purple-700">Digital Signature</h3>
                      <button
                        onClick={() => copyToClipboard(signature)}
                        className="flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all text-sm"
                      >
                        {copiedSignature ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <code className="text-sm font-mono break-all text-purple-600 font-semibold block">
                      {signature}
                    </code>
                  </motion.div>
                )}
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How Digital Signatures Work</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hash the Message</h4>
                      <p className="text-gray-700 text-base">Create a unique fingerprint of the message using SHA-256</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Encrypt with Private Key</h4>
                      <p className="text-gray-700 text-base">Use your private key to encrypt the hash (this is the signature)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Share Message + Signature</h4>
                      <p className="text-gray-700 text-base">Send both the original message and signature to recipient</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Verify with Public Key</h4>
                      <p className="text-gray-700 text-base">Anyone can verify authenticity using your public key</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Verification Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                  Verify a Signature
                </h2>

                {/* Message Input */}
                <div className="mb-6">
                  <label className="text-lg font-semibold text-gray-900 block mb-3">Message</label>
                  <textarea
                    value={verificationMessage}
                    onChange={(e) => setVerificationMessage(e.target.value)}
                    placeholder="Enter the message to verify..."
                    className="w-full h-24 px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all resize-none"
                  />
                </div>

                {/* Signature Input */}
                <div className="mb-6">
                  <label className="text-lg font-semibold text-gray-900 block mb-3">Signature</label>
                  <textarea
                    value={verificationSignature}
                    onChange={(e) => setVerificationSignature(e.target.value)}
                    placeholder="Paste the signature here..."
                    className="w-full h-24 px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all resize-none font-mono"
                  />
                </div>

                {/* Public Key Input */}
                <div className="mb-6">
                  <label className="text-lg font-semibold text-gray-900 block mb-3">Public Key</label>
                  <textarea
                    value={verificationPublicKey}
                    onChange={(e) => setVerificationPublicKey(e.target.value)}
                    placeholder="Paste the signer's public key..."
                    className="w-full h-24 px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all resize-none font-mono"
                  />
                </div>

                {/* Verify Button */}
                <button
                  onClick={verifySignature}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl"
                >
                  <Shield className="w-6 h-6 mr-2" />
                  Verify Signature
                </button>

                {/* Verification Result */}
                {verificationResult !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mt-6 p-6 rounded-xl border-2 ${
                      verificationResult
                        ? "bg-green-50 border-green-300"
                        : "bg-red-50 border-red-300"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      {verificationResult ? (
                        <>
                          <CheckCircle className="w-12 h-12 text-green-600 mr-4" />
                          <div>
                            <h3 className="text-2xl font-bold text-green-700 mb-1">Valid Signature ✓</h3>
                            <p className="text-green-600 text-lg">This message was signed by the owner of this public key</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-12 h-12 text-red-600 mr-4" />
                          <div>
                            <h3 className="text-2xl font-bold text-red-700 mb-1">Invalid Signature ✗</h3>
                            <p className="text-red-600 text-lg">Signature does not match or message was tampered with</p>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Security Properties */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-7 h-7 mr-3 text-purple-600" />
                  Security Properties
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 text-lg mb-2">Authentication</h4>
                    <p className="text-gray-700">Proves the message came from the holder of the private key</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 text-lg mb-2">Integrity</h4>
                    <p className="text-gray-700">Any change to the message invalidates the signature</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 text-lg mb-2">Non-Repudiation</h4>
                    <p className="text-gray-700">Signer cannot deny signing the message (only they have the private key)</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 text-lg mb-2">Public Verification</h4>
                    <p className="text-gray-700">Anyone with the public key can verify, but only private key holder can sign</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Real-World Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10 border-2 border-indigo-200 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real-World Applications</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl border border-indigo-200">
                  <div className="text-3xl mb-4">🏦</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Cryptocurrency Transactions</h4>
                  <p className="text-gray-700">Every Bitcoin transaction is signed with the sender's private key to prove ownership</p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-indigo-200">
                  <div className="text-3xl mb-4">📧</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Email Security (PGP/GPG)</h4>
                  <p className="text-gray-700">Sign and encrypt emails to ensure authenticity and privacy</p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-indigo-200">
                  <div className="text-3xl mb-4">💻</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Software Distribution</h4>
                  <p className="text-gray-700">Developers sign code releases to verify authenticity and prevent tampering</p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-indigo-200">
                  <div className="text-3xl mb-4">📜</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Contracts</h4>
                  <p className="text-gray-700">Sign legal documents electronically with legally binding digital signatures</p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-indigo-200">
                  <div className="text-3xl mb-4">🔐</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">SSL/TLS Certificates</h4>
                  <p className="text-gray-700">Websites use digital signatures to prove their identity and establish secure connections</p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-indigo-200">
                  <div className="text-3xl mb-4">🆔</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Identity</h4>
                  <p className="text-gray-700">Prove your identity online without revealing sensitive information</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
