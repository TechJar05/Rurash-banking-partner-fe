import React from "react";
import {
  LogOut,
  LayoutDashboard,
  MessageSquare,
  User as UserIcon,
  Users,
  X,
  Handshake,
} from "lucide-react";

const Sidebar = ({
  activePage,
  onNavigate,
  onLogout,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <div
      className={`
      fixed lg:static inset-y-0 left-0 z-30
      w-56 bg-white border-r border-gray-200 flex flex-col
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      {/* Mobile Close Button */}
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="lg:hidden absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#3b82f6] rounded-md flex items-center justify-center flex-shrink-0">
              <Handshake className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-base font-bold text-gray-900 block leading-none">
                Rurash Partner
              </span>
              <span className="text-xs text-gray-500 block leading-none mt-0.5">
                Portal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => onNavigate("dashboard")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-md font-medium transition-colors ${
                activePage === "dashboard"
                  ? "text-[#3b82f6] bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("clients")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-md font-medium transition-colors ${
                activePage === "clients" ||
                activePage === "clientDetail" ||
                activePage === "newReferral"
                  ? "text-[#3b82f6] bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>My Clients</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("chat")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-md font-medium transition-colors ${
                activePage === "chat"
                  ? "text-[#3b82f6] bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>Chat</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("profile")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-md font-medium transition-colors ${
                activePage === "profile"
                  ? "text-[#3b82f6] bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <span>Profile</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* User Profile Card */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
            AM
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900 truncate">
              Alex Morgan
            </div>
            <div className="text-xs text-gray-500 truncate">Senior Partner</div>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
