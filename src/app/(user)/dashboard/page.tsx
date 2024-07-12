// pages/dashboard.jsx

import React from "react";
import {
  LayoutDashboard,
  SunMedium,
  Droplet,
  BarChart3,
  Video,
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  LifeBuoy,
  Cloud,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg font-semibold">Alicia Koch</span>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Overview
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Customers
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Products
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Settings
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded"
          />
          <img
            src="/user-icon.png"
            alt="User Icon"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
      <main className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button
            variant="default"
            className="focus-visible:none focus-visible:ring-offset-0"
          >
            Download
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600">Total Revenue</h2>
            <p className="text-2xl font-semibold">$45,231.89</p>
            <span className="text-green-500">+20.1% from last month</span>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600">Subscriptions</h2>
            <p className="text-2xl font-semibold">+2350</p>
            <span className="text-green-500">+180.1% from last month</span>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600">Sales</h2>
            <p className="text-2xl font-semibold">+12,234</p>
            <span className="text-green-500">+19% from last month</span>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600">Active Now</h2>
            <p className="text-2xl font-semibold">+573</p>
            <span className="text-green-500">+201 since last hour</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600">Overview</h2>
            {/* Replace with actual chart */}
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600">Recent Sales</h2>
            <ul>
              <li className="flex justify-between">
                <div>
                  <p>Olivia Martin</p>
                  <p className="text-gray-500">olivia.martin@email.com</p>
                </div>
                <p className="text-green-500">+$1,999.00</p>
              </li>
              <li className="flex justify-between">
                <div>
                  <p>Jackson Lee</p>
                  <p className="text-gray-500">jackson.lee@email.com</p>
                </div>
                <p className="text-green-500">+$39.00</p>
              </li>
              <li className="flex justify-between">
                <div>
                  <p>Isabella Nguyen</p>
                  <p className="text-gray-500">isabella.nguyen@email.com</p>
                </div>
                <p className="text-green-500">+$299.00</p>
              </li>
              <li className="flex justify-between">
                <div>
                  <p>William Kim</p>
                  <p className="text-gray-500">will@email.com</p>
                </div>
                <p className="text-green-500">+$99.00</p>
              </li>
              <li className="flex justify-between">
                <div>
                  <p>Sofia Davis</p>
                  <p className="text-gray-500">sofia.davis@email.com</p>
                </div>
                <p className="text-green-500">+$39.00</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
