// pages/dashboard.jsx

import React from "react";
import {
  LayoutDashboard,
  Users as UsersIcon,
  ShoppingCart,
  Activity,
  DollarSign,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CustomerSidebar from "../_components/sideBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <CustomerSidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <main className="p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="relative mr-10 w-[17%]">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-10 py-1.5 text-sm w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Card className="flex flex-col items-start">
              <DollarSign className="mx-2 mt-2 text-gray-600" />
              <CardHeader className="flex items-center space-x-2">
                <div>
                  <CardTitle className="text-md">Total Revenue</CardTitle>
                  <CardDescription className="text-xl">
                    $45,231.89
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="text-green-500">+20.1% from last month</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <UsersIcon className="mx-2 mt-2 text-gray-600" />
              <CardHeader className="flex items-center space-x-2">
                <div>
                  <CardTitle className="text-md">Subscriptions</CardTitle>
                  <CardDescription className="text-xl">+2350</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="text-green-500">+180.1% from last month</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <ShoppingCart className="mx-2 mt-2 text-gray-600" />
              <CardHeader className="flex items-center space-x-2">
                <div>
                  <CardTitle className="text-md">Sales</CardTitle>
                  <CardDescription className="text-xl">+12,234</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="text-green-500">+19% from last month</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <Activity className="mx-2 mt-2 text-gray-600" />
              <CardHeader className="flex items-center space-x-2">
                <div>
                  <CardTitle className="text-md">Active Now</CardTitle>
                  <CardDescription className="text-xl">+573</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="text-green-500">+201 since last hour</span>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Replace with actual chart */}
                <div className="h-48 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  You have 265 recent activities this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="flex justify-between">
                    <div>
                      <p>Olivia Martin</p>
                      <p className="text-gray-500">olivia.martin@email.com</p>
                    </div>
                    <p className="text-green-500">Completed a project</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>Jackson Lee</p>
                      <p className="text-gray-500">jackson.lee@email.com</p>
                    </div>
                    <p className="text-green-500">Updated profile</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>Isabella Nguyen</p>
                      <p className="text-gray-500">isabella.nguyen@email.com</p>
                    </div>
                    <p className="text-green-500">Started a new project</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>William Kim</p>
                      <p className="text-gray-500">will@email.com</p>
                    </div>
                    <p className="text-green-500">Joined a team</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>Sofia Davis</p>
                      <p className="text-gray-500">sofia.davis@email.com</p>
                    </div>
                    <p className="text-green-500">Completed a task</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
