import React from "react";
import InternalSidebar from "./_components/sideBar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <InternalSidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <header className="flex justify-end items-center p-4">
          <div className="relative w-[17%]">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-10 py-1.5 text-sm w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
