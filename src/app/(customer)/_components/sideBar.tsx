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
} from "lucide-react";

const Sidebar = () => {
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
      <div className="p-4 text-2xl font-bold">Syner Solar</div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <LayoutDashboard className="mr-2" /> Main Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/monitoring/real-time"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <Monitor className="mr-2" /> Real-time Monitoring
            </Link>
          </li>
          <li>
            <Link
              href="/alerts"
              className="flex items-center p-4 hover:bg-zinc-100"
            >
              <Bell className="mr-2" /> Alerts
            </Link>
          </li>
          <li className="mt-4 border-t border-gray-300"></li>
          <li>
            <button
              onClick={() => toggleDropdown("sensors")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Cpu className="mr-2" /> Sensors
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "sensors" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "sensors" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/sensor-data/temperature"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Thermometer className="mr-2" /> Temperature
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sensor-data/humidity"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Droplet className="mr-2" /> Humidity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sensor-data/ph"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <CloudDrizzle className="mr-2" /> pH Levels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sensor-data/light"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Sun className="mr-2" /> Light Intensity
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("cameraMonitoring")}
              className="flex items-center p-4 w-full text-left hover:bg-zinc-100"
            >
              <Camera className="mr-2" /> Camera
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "cameraMonitoring" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "cameraMonitoring" && (
              <ul className="pl-4">
                <li>
                  <Link
                    href="/camera/live-feed"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Camera className="mr-2" /> Live Feed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/camera/snapshots"
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
                    href="/control/watering"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Droplet className="mr-2" /> Watering Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="/control/scheduling"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Calendar className="mr-2" /> Scheduling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/control/manual-override"
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
                    href="/solar/power-generation"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Sun className="mr-2" /> Power Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solar/battery-status"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <BatteryCharging className="mr-2" /> Battery Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solar/efficiency-reports"
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
                    href="/analytics/data-export"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <UploadCloud className="mr-2" /> Data Export
                  </Link>
                </li>
                <li>
                  <Link
                    href="/analytics/historical-data"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <FileText className="mr-2" /> Historical Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/analytics/performance-reports"
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
                    href="/settings/system"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Settings className="mr-2" /> System Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings/user-preferences"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <Users className="mr-2" /> User Preferences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings/backup-restore"
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
                    href="/support/help"
                    className="flex items-center p-4 hover:bg-zinc-100"
                  >
                    <HelpCircle className="mr-2" /> Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support/documentation"
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

export default Sidebar;
