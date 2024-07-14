// pages/dashboard.jsx

import React from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Package,
  Star,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-1 min-h-screen bg-gray-100 p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        <Card className="mb-8 w-[20%]">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex w-full rounded-full items-center justify-center p-4"
              >
                <ShoppingCart className="mr-2" />
                Recent Orders
              </Button>
              <Button
                variant="outline"
                className="flex w-full rounded-full items-center justify-center p-4"
              >
                <Heart className="mr-2" />
                Wishlist
              </Button>
              <Button
                variant="outline"
                className="flex w-full rounded-full items-center justify-center p-4"
              >
                <Package className="mr-2" />
                Orders in Progress
              </Button>
              <Button
                variant="outline"
                className="flex w-full rounded-full items-center justify-center p-4"
              >
                <Star className="mr-2" />
                Recently Liked Items
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
