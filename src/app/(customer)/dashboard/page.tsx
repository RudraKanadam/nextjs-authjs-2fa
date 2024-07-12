// pages/dashboard.jsx

import React from "react";
import {
  SunMedium,
  Droplet,
  BarChart3,
  Video,
  BatteryCharging,
  Camera,
  Leaf,
  Search,
  Activity,
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
import InternalSidebar from "../_components/sideBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <InternalSidebar />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            <Card className="flex flex-col items-start">
              <CardHeader className="flex justify-between w-full">
                <CardTitle className="text-md">Solar Panels</CardTitle>
                <SunMedium className="text-gray-600" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl">120 kW</CardDescription>
                <span className="text-green-500">
                  Operational Efficiency: 85%
                </span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <CardHeader className="flex justify-between w-full">
                <CardTitle className="text-md">Water Motors</CardTitle>
                <Droplet className="text-gray-600" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl">4 Active</CardDescription>
                <span className="text-green-500">Water Flow: 2500 L/h</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <CardHeader className="flex justify-between w-full">
                <CardTitle className="text-md">Plant Sites</CardTitle>
                <Leaf className="text-gray-600" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl">56 Sites</CardDescription>
                <span className="text-green-500">Health: Good</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <CardHeader className="flex justify-between w-full">
                <CardTitle className="text-md">Electricity Usage</CardTitle>
                <BatteryCharging className="text-gray-600" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl">350 kWh</CardDescription>
                <span className="text-green-500">+10% from last month</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-start">
              <CardHeader className="flex justify-between w-full">
                <CardTitle className="text-md">Cameras</CardTitle>
                <Camera className="text-gray-600" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl">8 Active</CardDescription>
                <span className="text-green-500">No issues detected</span>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <CardTitle>Overview</CardTitle>
                <BarChart3 className="text-gray-600" />
              </CardHeader>
              <CardContent>
                {/* Replace with actual chart */}
                <div className="h-48 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex justify-between items-center">
                <CardTitle>Recent Activity</CardTitle>
                <Activity className="text-gray-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>
                  You made 265 actions this month.
                </CardDescription>
                <ul>
                  <li className="flex justify-between">
                    <div>
                      <p>Olivia Martin</p>
                      <p className="text-gray-500">olivia.martin@email.com</p>
                    </div>
                    <p className="text-green-500">Checked water levels</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>Jackson Lee</p>
                      <p className="text-gray-500">jackson.lee@email.com</p>
                    </div>
                    <p className="text-green-500">Adjusted solar panels</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>Isabella Nguyen</p>
                      <p className="text-gray-500">isabella.nguyen@email.com</p>
                    </div>
                    <p className="text-green-500">Pruned plants</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>William Kim</p>
                      <p className="text-gray-500">will@email.com</p>
                    </div>
                    <p className="text-green-500">Checked cameras</p>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <p>Sofia Davis</p>
                      <p className="text-gray-500">sofia.davis@email.com</p>
                    </div>
                    <p className="text-green-500">Analyzed data</p>
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
