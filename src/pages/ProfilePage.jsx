import React from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ProfilePage = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto">

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white rounded-xl border p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <CheckCircle className="absolute bottom-0 right-0 w-5 h-5 text-emerald-500 bg-white rounded-full" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">Alex Mercer</h2>
              <p className="text-sm text-gray-500">Senior Loan Officer</p>
              <span className="inline-block mt-1 px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                Level 3 Partner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-1">Email Address</p>
              <p className="font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" /> alex.mercer@bankpartner.com
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-1">Phone Number</p>
              <p className="font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> +1 (555) 012-3456
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-1">Employee ID</p>
              <p className="font-medium">BP-883921</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-1">Last Login</p>
              <p className="font-medium">Today, 09:41 AM</p>
            </div>
          </div>
        </div>

        {/* Performance Card */}
        <div className="bg-white rounded-xl border p-6 flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 mb-4">
            <div className="absolute inset-0 rounded-full border-12 border-blue-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">85%</span>
              <span className="text-sm text-emerald-600 font-medium">
                Goal Reached
              </span>
            </div>
          </div>

          <div className="flex gap-6 text-center">
            <div>
              <p className="text-xl font-semibold">12</p>
              <p className="text-xs text-gray-500">Active Referrals</p>
            </div>
            <div>
              <p className="text-xl font-semibold">4</p>
              <p className="text-xs text-gray-500">Cases Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Relationship Manager */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Assigned Relationship Manager</h3>
          <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-600 rounded-full">
            Online Now
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/80?img=32"
              alt="rm"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <p className="font-semibold">Sarah Jenkins</p>
              <p className="text-sm text-gray-500">
                Senior RM • Corporate Division
              </p>
              <p className="text-sm text-gray-500">
                s.jenkins@finance.com
              </p>
            </div>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Message RM
          </button>
        </div>
      </div>

    </main>
  );
};

export default ProfilePage;
