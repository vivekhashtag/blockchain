"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Code, User } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/learn", label: "Courses", icon: BookOpen },
    { href: "/playground", label: "Playground", icon: Code },
    { href: "/about", label: "About Author", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-md">
                ⛓️
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Learn Blockchain
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href ||
                             (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center space-x-2 px-6 py-3.5 rounded-xl transition-all duration-300 font-medium text-lg
                    ${isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}