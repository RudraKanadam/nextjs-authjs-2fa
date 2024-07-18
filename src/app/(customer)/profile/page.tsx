import React from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Edit,
  Settings,
} from "lucide-react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="bg-gray-100 p-8 rounded-lg max-w-7xl mx-aut justify-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4 xl:gap-4">
          {/* Profile Card */}
          <div className="col-span-1">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center flex-col">
                <Image
                  src="/profile_pic.png"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="h-40 w-40 rounded-full border-2 border-white"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold">Sami Rahman</h2>
                  <p className="text-gray-600">Last login: 07 Aug 2018 14:54</p>
                  <p className="text-gray-600">Windows 10 Pro, New York (US)</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-gray-600" />
                  <span>+1-856-569-909-1236</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span>Samirahman002@gmail.com</span>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-gray-600">SMS alerts activation</span>
                <div className="bg-green-500 rounded-full w-6 h-6"></div>
              </div>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-full w-full">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* xPay Accounts */}
          <div className="col-span-1">
            <div className="bg-white shadow rounded-lg p-8 h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My xPay accounts</h2>
                <Edit className="text-gray-600 cursor-pointer" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span>Active account</span>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-full">
                    Block Account
                  </button>
                </div>
                <p className="text-gray-600 mb-6">8040 5060 8098 4525</p>
                <div className="flex justify-between items-center mb-4">
                  <span>Blocked account</span>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-full">
                    Unblock Account
                  </button>
                </div>
                <p className="text-gray-600">7568 2098 3123 2145</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-span-1">
            <div className="bg-white shadow rounded-lg p-8 h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Recent Activities</h2>
                <Calendar className="text-gray-600 cursor-pointer" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span>Logged in from New York</span>
                  <span className="text-gray-600">Today at 08:45 AM</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span>Paid phone bill</span>
                  <span className="text-gray-600">Yesterday at 02:30 PM</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span>Unblocked account</span>
                  <span className="text-gray-600">2 days ago at 10:15 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="col-span-1">
            <div className="bg-white shadow rounded-lg p-8 h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Settings</h2>
                <Settings className="text-gray-600 cursor-pointer" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span>Enable notifications</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span>Change password</span>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
                    Change
                  </button>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span>Update profile</span>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
