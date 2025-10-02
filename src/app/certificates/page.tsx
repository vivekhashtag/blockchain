"use client";

import { motion } from "framer-motion";
import { Award, Lock } from "lucide-react";

export default function CertificatesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Complete courses to earn blockchain-verified certificates of achievement
          </p>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 max-w-md mx-auto">
            <Lock className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              No Certificates Yet
            </h2>
            <p className="text-gray-400 text-sm">
              Start completing courses to earn your first certificate. Each certificate is uniquely generated and verifiable on the blockchain.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}