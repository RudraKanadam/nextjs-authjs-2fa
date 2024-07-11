"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import {
  Menu,
  MenuItem,
  SimpleMenuItem,
  HoveredLink,
  ProductItem,
} from "../ui/navbar-menu";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Ensure the correct import

const GlobalNavbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-transparent backdrop-blur-lg z-[100] flex items-center justify-between">
      <Link href="/">
        <aside className="flex items-center gap-[2px]">
          <Image
            src="/boiler.png"
            width={40}
            height={40}
            alt="Boiler Logo"
            className="shadow-sm"
          />
          <p className="text-3xl font-bold">Plate</p>
        </aside>
      </Link>

      <div
        className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block"
        onMouseLeave={() => setActive(null)} // Reset active state when leaving the entire menu
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>

          <SimpleMenuItem item="Code" href="/code" setActive={setActive} />

          <MenuItem setActive={setActive} active={active} item="Documentation">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>

          <SimpleMenuItem
            item="Contact"
            href="/contact"
            setActive={setActive}
          />
        </Menu>
      </div>

      <aside className="flex items-center gap-4">
        <Link
          href="/login"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-300 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
            Get Started
          </span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden"
        >
          <MenuIcon />
        </button>
      </aside>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="fixed inset-0 bg-white dark:bg-black shadow-md p-4 md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
              className="absolute top-4 right-4"
            >
              <FaTimes size={24} className="text-black dark:text-white" />
            </button>
            <Menu setActive={setActive}>
              <div className="flex flex-col space-y-2">
                <MenuItem setActive={setActive} active={active} item="Features">
                  <HoveredLink href="#" className="bg-white dark:bg-black">
                    Features
                  </HoveredLink>
                </MenuItem>
                <SimpleMenuItem
                  item="Code"
                  href="/code"
                  setActive={setActive}
                />
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Documentation"
                >
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="Algochurn"
                      href="https://algochurn.com"
                      src="https://assets.aceternity.com/demos/algochurn.webp"
                      description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                      title="Tailwind Master Kit"
                      href="https://tailwindmasterkit.com"
                      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                      description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                      title="Moonbeam"
                      href="https://gomoonbeam.com"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                      description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                      title="Rogue"
                      href="https://userogue.com"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                  </div>
                </MenuItem>
                <SimpleMenuItem
                  item="Contact"
                  href="/contact"
                  setActive={setActive}
                />
              </div>
            </Menu>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default GlobalNavbar;
