import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Twitter, Github } from "../icons";

const productLinks = [
  { label: "About", href: "" },
  { label: "How it works", href: "" },
  { label: "Pricing", href: "" },
  { label: "FAQ", href: "" },
];

const resourceLinks = [
  { label: "Documentation", href: "" },
  { label: "API Reference", href: "" },
  { label: "Support", href: "" },
  { label: "Contact", href: "" },
];

const socialLinks = [
  { icon: Twitter, href: "", label: "Twitter" },
  { icon: Github, href: "", label: "GitHub" },
  { icon: MessageCircle, href: "", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-10">
          <div className="max-sm:w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <Image
                  src="/images/logos/offline-bridge-logo-purple.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-white font-semibold text-2xl max-sm:text-xl">
                Offline Bridge
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Making crypto accessible to everyone, everywhere. Send and receive
              digital payments from any phone.
            </p>
          </div>

          <div className="flex md:justify-center md:items-center max-sm:w-full gap-20 max-sm:flex-col max-sm:gap-10">
            <div className="">
              <h3 className="text-white text-2xl font-semibold mb-4 max-sm:text-xl">
                Product
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="text-white text-2xl font-semibold mb-4 max-sm:text-xl">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Offline Bridge. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-[#1a1a24] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252532] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
