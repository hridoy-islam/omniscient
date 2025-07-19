"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Settings,
  HelpCircle,
  DollarSign,
  Headphones,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    {
      name: "Features",
      href: "features",
      icon: <Settings className="w-5 h-5" />,
    },
    { name: "FAQ", href: "faq", icon: <HelpCircle className="w-5 h-5" /> },
    {
      name: "Pricing",
      href: "pricing",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      name: "Support",
      href: "support",
      icon: <Headphones className="w-5 h-5" />,
    },
    { name: "Contact", href: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={"/"}>
              <Image src="/logo.png" alt="" width={200} height={100} />
            </Link>
            {/* <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">R</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950"></div>
              </div>
              <div>
                <div className="text-white font-black text-2xl">RoboFX</div>
                <div className="text-blue-400 font-medium text-xs uppercase tracking-wider">
                  AI Trader
                </div>
              </div>
            </div> */}

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium group"
                >
                  <span className="group-hover:text-blue-400 transition-colors">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Status Indicator */}
              <div
                onClick={() =>
                  openModal({
                    title: "Get Started with AI Trading",
                    subtitle:
                      "Download your trading robot and start your automated trading journey",
                    buttonText: "Start Trading Now",
                    type: "download",
                  })
                }
                className="hidden md:flex items-center space-x-2 glass rounded-full px-4 py-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">
                  Live Trading
                </span>
              </div>

              {/* CTA Button */}

              <Button
                onClick={() =>
                  openModal({
                    title: "Get Started with AI Trading",
                    subtitle:
                      "Download your trading robot and start your automated trading journey",
                    buttonText: "Start Trading Now",
                    type: "download",
                  })
                }
                className="btn-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 hidden md:block"
              >
                Start Trading
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:bg-slate-800/50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-slate-800/50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Algopips</div>
                <div className="text-blue-400 text-xs">AI Trader</div>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-4 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <Button
              onClick={() =>
                openModal({
                  title: "Get Started with AI Trading",
                  subtitle:
                    "Download your trading robot and start your automated trading journey",
                  buttonText: "Start Trading Now",
                  type: "download",
                })
              }
              className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg"
            >
              Start Trading
            </Button>

            <div className="flex items-center justify-center space-x-2 mt-4 text-slate-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Trading</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
