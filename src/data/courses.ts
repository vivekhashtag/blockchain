export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon: string;
  color: string;
  topics: string[];
  pdfFile: string;
  order: number;
}

export const courses: Course[] = [
  {
    id: "introduction",
    title: "Introduction to Blockchain",
    description: "Explore the history, technology, and financial impact of blockchain. Learn about Bitcoin origins, distributed ledger technology, and key blockchain features.",
    duration: "3 hours",
    difficulty: "Beginner",
    icon: "🔗",
    color: "from-blue-400 via-purple-500 to-cyan-400",
    topics: [
      "Bitcoin Origins",
      "Distributed Ledger Technology",
      "Key Blockchain Features",
      "Financial Relevance"
    ],
    pdfFile: "Part 01 _ Introduction to Blockchain_ History, Technology, and Financial Impact.pdf",
    order: 1
  },
  {
    id: "security",
    title: "Security Foundations",
    description: "Master encryption basics, public/private keys, and digital signatures with real cryptocurrency examples and practical wallet demonstrations.",
    duration: "2.5 hours",
    difficulty: "Beginner",
    icon: "🔐",
    color: "from-purple-400 via-pink-500 to-rose-400",
    topics: [
      "Encryption Basics",
      "Public/Private Keys",
      "Digital Signatures",
      "Cryptocurrency Wallets"
    ],
    pdfFile: "Part 02 _ Security Foundations_ Encryption, Digital Security, and Cryptographic Keys Explained.pdf",
    order: 2
  },
  {
    id: "hashing",
    title: "Hashing and Integrity",
    description: "Understand SHA-256, document verification, and applications in insurance, tax, and eKYC systems. Learn about digital fingerprinting and tamper-proof systems.",
    duration: "2 hours",
    difficulty: "Intermediate",
    icon: "#️⃣",
    color: "from-emerald-400 via-green-500 to-teal-400",
    topics: [
      "SHA-256 Algorithm",
      "Document Verification",
      "Digital Fingerprinting",
      "Real-world Applications"
    ],
    pdfFile: "Part 03 Hashing and Integrity_ Cryptographic Hash Functions and Real-World Applications.pdf",
    order: 3
  },
  {
    id: "financial",
    title: "Blockchain in Finance",
    description: "Discover smart contracts, settlements, auditing, and India's blockchain ecosystem including UIDAI and GSTN implementations.",
    duration: "3 hours",
    difficulty: "Intermediate",
    icon: "💰",
    color: "from-amber-400 via-orange-500 to-red-400",
    topics: [
      "Smart Contracts",
      "Settlement Systems",
      "Auditing Applications",
      "India's Blockchain Ecosystem"
    ],
    pdfFile: "Part 04 Blockchain in Financial Use Cases_ Transactions, Smart Contracts, and Real-World Implementations.pdf",
    order: 4
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts & Legal",
    description: "Deep dive into programmable agreements, their legal implications, DeFi future, and the concept of code as law.",
    duration: "2.5 hours",
    difficulty: "Advanced",
    icon: "📜",
    color: "from-red-400 via-pink-500 to-purple-400",
    topics: [
      "How Smart Contracts Work",
      "Legal Implications",
      "DeFi Future",
      "Code as Law"
    ],
    pdfFile: "Part 05 Smart Contracts and Legal Considerations_ A Complete Guide to Code as Law.pdf",
    order: 5
  },
  {
    id: "advanced",
    title: "Advanced Topics",
    description: "Explore consensus algorithms, Layer 2 solutions, zero-knowledge proofs, NFTs, and Web3 - covering cutting-edge blockchain trends.",
    duration: "3.5 hours",
    difficulty: "Advanced",
    icon: "🚀",
    color: "from-indigo-400 via-purple-500 to-pink-400",
    topics: [
      "Consensus Algorithms",
      "Layer 2 Solutions",
      "Zero-Knowledge Proofs",
      "NFTs & Web3"
    ],
    pdfFile: "Part 06 Advanced Blockchain Topics_ From Consensus to Web3 - A Complete Guide.pdf",
    order: 6
  }
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getCoursesCount(): number {
  return courses.length;
}