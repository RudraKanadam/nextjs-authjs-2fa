"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Monitor,
  Bell,
  Thermometer,
  Droplet,
  CloudDrizzle,
  Sun,
  Camera,
  Video,
  Cpu,
  Calendar,
  Sliders,
  BatteryCharging,
  BarChart2,
  FileText,
  Settings,
  Users,
  UploadCloud,
  HelpCircle,
  BookOpen,
  Cloud,
  ChevronDown,
  LogOut,
  Server,
  UserCheck,
  ShieldAlert,
} from "lucide-react";

const AdminSidebar = () => {
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
      <div className="p-4 text-2xl font-bold">Syner Solar Admin</div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <LayoutDashboard className="mr-2" /> Admin Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/monitoring"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <Monitor className="mr-2" /> Monitoring
            </Link>
          </li>
          <li>
            <Link
              href="/admin/alerts"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <Bell className="mr-2" /> Alerts
            </Link>
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <button
              onClick={() => toggleDropdown("sensorManagement")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Cpu className="mr-2" /> Sensor Management
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "sensorManagement" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "sensorManagement" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/sensor-management/temperature"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Thermometer className="mr-2" /> Temperature Sensors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/sensor-management/humidity"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Droplet className="mr-2" /> Humidity Sensors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/sensor-management/ph"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <CloudDrizzle className="mr-2" /> pH Sensors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/sensor-management/light"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Sun className="mr-2" /> Light Sensors
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("cameraManagement")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Camera className="mr-2" /> Camera Management
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "cameraManagement" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "cameraManagement" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/camera-management/live-feed"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Camera className="mr-2" /> Live Feed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/camera-management/snapshots"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Video className="mr-2" /> Snapshots & Recordings
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("controlPanel")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Sliders className="mr-2" /> Control Panel
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "controlPanel" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "controlPanel" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/control/watering"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Droplet className="mr-2" /> Watering Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/control/scheduling"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Calendar className="mr-2" /> Scheduling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/control/manual-override"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Sliders className="mr-2" /> Manual Override
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("solarPowerMonitoring")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Sun className="mr-2" /> Solar Power
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "solarPowerMonitoring" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "solarPowerMonitoring" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/solar/power-generation"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Sun className="mr-2" /> Power Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/solar/battery-status"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <BatteryCharging className="mr-2" /> Battery Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/solar/efficiency-reports"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <BarChart2 className="mr-2" /> Efficiency Reports
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("analyticsReports")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <BarChart2 className="mr-2" /> Analytics
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "analyticsReports" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "analyticsReports" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/analytics/data-export"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <UploadCloud className="mr-2" /> Data Export
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/analytics/historical-data"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <FileText className="mr-2" /> Historical Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/analytics/performance-reports"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <BarChart2 className="mr-2" /> Performance Reports
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <button
              onClick={() => toggleDropdown("userManagement")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <UserCheck className="mr-2" /> User Management
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "userManagement" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "userManagement" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/user-management"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Users className="mr-2" /> Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/roles"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Settings className="mr-2" /> Roles & Permissions
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <button
              onClick={() => toggleDropdown("settingsConfiguration")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Settings className="mr-2" /> Settings
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "settingsConfiguration" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "settingsConfiguration" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/settings/system"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Settings className="mr-2" /> System Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/settings/user-preferences"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Users className="mr-2" /> User Preferences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/settings/backup-restore"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Cloud className="mr-2" /> Backup & Restore
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("supportDocumentation")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <HelpCircle className="mr-2" /> Support
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "supportDocumentation" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "supportDocumentation" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/admin/support/help"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <HelpCircle className="mr-2" /> Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/support/documentation"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <BookOpen className="mr-2" /> User Documentation
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

export default AdminSidebar;
