import Link from "next/link";
import { Github, Linkedin, Mail, BookOpen, Code, Trophy } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Learn Blockchain
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Interactive learning platform with comprehensive courses covering
              blockchain fundamentals, cryptography, and Web3 concepts. Master
              blockchain technology at your own pace.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/vivekdhandapani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@blockchainacademy.com"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="text-gray-300 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  <Trophy className="w-4 h-4" />
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="text-gray-300 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  Playground
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  About Author
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">
              Other Courses
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://mathematicsdashboard-vivekdhandapani.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                >
                  Mathematics for ML
                </a>
              </li>
              <li>
                <a
                  href="https://statisticsdashboard-vivekdhandapani.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                >
                  Statistics for ML
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-base">
              © {currentYear} Learn Blockchain. Created by{" "}
              <a
                href="https://www.linkedin.com/in/vivekdhandapani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Vivek Dhandapani
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
