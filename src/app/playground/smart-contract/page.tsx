"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Code, Play, CheckCircle, XCircle, FileCode, Sparkles, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";

interface CompilationResult {
  success: boolean;
  message: string;
  bytecode?: string;
  abi?: string;
}

interface ExecutionResult {
  success: boolean;
  output: string;
  gasUsed?: number;
}

const defaultContract = `// Simple Storage Smart Contract
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;

    // Store a number
    function store(uint256 num) public {
        value = num;
    }

    // Retrieve the stored number
    function retrieve() public view returns (uint256) {
        return value;
    }
}`;

const exampleContracts = [
  {
    name: "Simple Storage",
    code: defaultContract
  },
  {
    name: "Counter",
    code: `// Counter Contract
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count = 0;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Counter cannot go below 0");
        count -= 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}`
  },
  {
    name: "Greeting",
    code: `// Greeting Contract
pragma solidity ^0.8.0;

contract Greeting {
    string private greeting = "Hello, World!";

    function setGreeting(string memory newGreeting) public {
        greeting = newGreeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}`
  },
  {
    name: "Token (ERC-20 Basic)",
    code: `// Simple Token Contract
pragma solidity ^0.8.0;

contract SimpleToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint256 public totalSupply = 1000000;

    mapping(address => uint256) public balances;

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        return true;
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }
}`
  }
];

export default function SmartContractLabPage() {
  const [code, setCode] = useState(defaultContract);
  const [compilationResult, setCompilationResult] = useState<CompilationResult | null>(null);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [functionInput, setFunctionInput] = useState("");

  const compileContract = () => {
    setIsCompiling(true);
    setCompilationResult(null);
    setExecutionResult(null);

    // Simulate compilation (in real app, this would use solc compiler)
    setTimeout(() => {
      // Basic validation
      if (!code.includes("contract")) {
        setCompilationResult({
          success: false,
          message: "Error: No contract definition found. Contract must include 'contract' keyword."
        });
        setIsCompiling(false);
        return;
      }

      if (!code.includes("pragma solidity")) {
        setCompilationResult({
          success: false,
          message: "Warning: Missing pragma statement. Add 'pragma solidity ^0.8.0;' at the top."
        });
        setIsCompiling(false);
        return;
      }

      // Simulate successful compilation
      const simulatedBytecode = "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220...";

      const simulatedABI = JSON.stringify([
        {
          "inputs": [],
          "name": "retrieve",
          "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [{ "internalType": "uint256", "name": "num", "type": "uint256" }],
          "name": "store",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ], null, 2);

      setCompilationResult({
        success: true,
        message: "✓ Compilation successful! Contract is ready to deploy.",
        bytecode: simulatedBytecode,
        abi: simulatedABI
      });
      setIsCompiling(false);
    }, 1500);
  };

  const executeContract = () => {
    if (!compilationResult?.success) {
      alert("Please compile the contract first!");
      return;
    }

    setIsExecuting(true);

    // Simulate contract execution
    setTimeout(() => {
      const gasUsed = Math.floor(Math.random() * 50000) + 21000;

      setExecutionResult({
        success: true,
        output: functionInput ?
          `Function executed successfully!\nInput: ${functionInput}\nOutput: Value stored/retrieved successfully` :
          "Contract deployed successfully to simulated network!\nContract Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0",
        gasUsed
      });
      setIsExecuting(false);
    }, 1000);
  };

  const loadExample = (example: typeof exampleContracts[0]) => {
    setCode(example.code);
    setCompilationResult(null);
    setExecutionResult(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-20 md:py-24">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6 shadow-xl">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              Smart Contract Lab
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Write, compile, and test Solidity smart contracts in a safe sandbox environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          {/* Example Contracts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Contracts</h2>
            <div className="flex flex-wrap gap-3">
              {exampleContracts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 text-pink-700 font-semibold rounded-xl border-2 border-pink-200 transition-all text-base"
                >
                  <FileCode className="w-4 h-4 inline mr-2" />
                  {example.name}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Code Editor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Code className="w-8 h-8 mr-3 text-pink-600" />
                  Solidity Code Editor
                </h2>

                <div className="border-2 border-gray-300 rounded-xl overflow-hidden mb-6">
                  <Editor
                    height="400px"
                    defaultLanguage="sol"
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      lineNumbers: "on",
                      roundedSelection: false,
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      tabSize: 4,
                    }}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={compileContract}
                    disabled={isCompiling}
                    className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl disabled:opacity-50"
                  >
                    <Sparkles className="w-6 h-6 mr-2" />
                    {isCompiling ? "Compiling..." : "Compile Contract"}
                  </button>

                  <button
                    onClick={executeContract}
                    disabled={!compilationResult?.success || isExecuting}
                    className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg text-xl disabled:opacity-50"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    {isExecuting ? "Executing..." : "Deploy & Execute"}
                  </button>
                </div>
              </div>

              {/* Smart Contract Basics */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Contract Basics</h3>
                <div className="space-y-3 text-base text-gray-700">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">1</div>
                    <p><strong className="text-gray-900">Pragma:</strong> Specifies Solidity version (e.g., pragma solidity ^0.8.0;)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">2</div>
                    <p><strong className="text-gray-900">Contract:</strong> Like a class in OOP, contains state variables and functions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">3</div>
                    <p><strong className="text-gray-900">State Variables:</strong> Permanently stored on blockchain (costs gas to modify)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">4</div>
                    <p><strong className="text-gray-900">Functions:</strong> Can be public, private, view (read-only), or payable</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">5</div>
                    <p><strong className="text-gray-900">Gas:</strong> Every operation costs gas (paid in ETH) to prevent spam</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Output Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Compilation Result */}
              {compilationResult && (
                <div className={`bg-white rounded-2xl p-8 border-2 shadow-xl mb-8 ${
                  compilationResult.success ? "border-green-300" : "border-red-300"
                }`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    {compilationResult.success ? (
                      <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                    ) : (
                      <XCircle className="w-8 h-8 mr-3 text-red-600" />
                    )}
                    Compilation Result
                  </h2>

                  <div className={`p-6 rounded-xl mb-6 ${
                    compilationResult.success ? "bg-green-50" : "bg-red-50"
                  }`}>
                    <p className={`text-lg font-semibold ${
                      compilationResult.success ? "text-green-700" : "text-red-700"
                    }`}>
                      {compilationResult.message}
                    </p>
                  </div>

                  {compilationResult.success && compilationResult.bytecode && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Bytecode (Contract Binary)</h3>
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-300">
                          <code className="text-sm font-mono text-gray-600 break-all">
                            {compilationResult.bytecode.substring(0, 200)}...
                          </code>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">ABI (Application Binary Interface)</h3>
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-300 max-h-40 overflow-y-auto">
                          <pre className="text-xs font-mono text-gray-600">
                            {compilationResult.abi}
                          </pre>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Execution Result */}
              {executionResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-green-300 shadow-xl mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                    Execution Result
                  </h2>

                  <div className="p-6 bg-green-50 rounded-xl mb-6">
                    <p className="text-lg text-green-700 whitespace-pre-line">
                      {executionResult.output}
                    </p>
                  </div>

                  {executionResult.gasUsed && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <span className="text-gray-600 text-base">Gas Used:</span>
                        <div className="text-blue-600 font-bold text-xl font-mono mt-1">
                          {executionResult.gasUsed.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                        <span className="text-gray-600 text-base">Status:</span>
                        <div className="text-purple-600 font-bold text-xl mt-1">
                          Success ✓
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Function Testing */}
              {compilationResult?.success && (
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Contract Functions</h2>

                  <div className="mb-4">
                    <label className="text-base font-semibold text-gray-900 block mb-3">
                      Function Input (Optional)
                    </label>
                    <input
                      type="text"
                      value={functionInput}
                      onChange={(e) => setFunctionInput(e.target.value)}
                      placeholder="e.g., 42 for store function"
                      className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-all"
                    />
                  </div>

                  <p className="text-sm text-gray-600">
                    Enter a value to test contract functions. Click "Deploy & Execute" to simulate contract interaction.
                  </p>
                </div>
              )}

              {/* Security Warning */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-300 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-7 h-7 mr-3 text-orange-600" />
                  Security Best Practices
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-orange-200">
                    <h4 className="font-bold text-orange-700 text-lg mb-2">✓ Use require() for validation</h4>
                    <p className="text-gray-700 text-base">Always validate inputs and check conditions before state changes</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-orange-200">
                    <h4 className="font-bold text-orange-700 text-lg mb-2">✓ Protect against reentrancy</h4>
                    <p className="text-gray-700 text-base">Update state before external calls to prevent reentrancy attacks</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-orange-200">
                    <h4 className="font-bold text-orange-700 text-lg mb-2">✓ Test thoroughly</h4>
                    <p className="text-gray-700 text-base">Audit and test contracts extensively before mainnet deployment</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-orange-200">
                    <h4 className="font-bold text-orange-700 text-lg mb-2">✓ Keep it simple</h4>
                    <p className="text-gray-700 text-base">Complex code = more bugs. Follow the KISS principle</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
