"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Folder,
  Users,
  Settings,
  HelpCircle,
  BookOpen,
  ChevronDown,
  LogOut,
} from "lucide-react";
import Image from "next/image";

const InternalSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <aside className="w-64 h-screen bg-zinc-50 text-black">
      <div className="p-4 text-2xl font-bold">
        {" "}
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
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <LayoutDashboard className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <button
              onClick={() => toggleDropdown("projects")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Folder className="mr-2" /> Projects
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "projects" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "projects" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/projects/active"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    Active Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/archive"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    Archived Projects
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/users"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <Users className="mr-2" /> Users
            </Link>
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <button
              onClick={() => toggleDropdown("settings")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Settings className="mr-2" /> Settings
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "settings" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "settings" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/settings/general"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    General Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings/account"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    Account Settings
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("support")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <HelpCircle className="mr-2" /> Support
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "support" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "support" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/support/help"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support/documentation"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <BookOpen className="mr-2" /> Documentation
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <Link
              href="/logout"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <LogOut className="mr-2" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default InternalSidebar;
