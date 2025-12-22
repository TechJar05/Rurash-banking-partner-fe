// import React, { useState } from "react";
// import {
//   Search,
//   Bell,
//   Users,
//   LogOut,
//   LayoutDashboard,
//   MessageSquare,
//   User as UserIcon,
//   Menu,
//   X,
//   Handshake,
//   Plus,
//   Download,
//   Eye,
//   ChevronDown,
//   HelpCircle,
// } from "lucide-react";

// const MyClientsPage = ({ onLogout, onNavigate }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [filters, setFilters] = useState({
//     status: "All",
//     date: "Last 30 Days",
//     rm: "All",
//   });

//   // Mock client data
//   const clients = [
//     {
//       id: 1,
//       name: "Acme Corp",
//       avatar: "AC",
//       avatarBg: "bg-blue-100",
//       caseId: "#RS01",
//       caseType: "Loan Application",
//       rmName: "Sarah Smith",
//       rmAvatar: "👤",
//       currentStage: "Underwriting",
//       progress: 45,
//       status: "In Progress",
//       statusColor: "bg-blue-100 text-blue-700",
//     },
//     {
//       id: 2,
//       name: "John Doe Estate",
//       avatar: "JD",
//       avatarBg: "bg-purple-100",
//       caseId: "#RS0104",
//       caseType: "Wealth Mgmt",
//       rmName: "Mike Ross",
//       rmAvatar: "👤",
//       currentStage: "Initial Review",
//       progress: 10,
//       status: "Pending Docs",
//       statusColor: "bg-yellow-100 text-yellow-700",
//     },
//     {
//       id: 3,
//       name: "Tech Solutions",
//       avatar: "TS",
//       avatarBg: "bg-green-100",
//       caseId: "#RM0499",
//       caseType: "Line of Credit",
//       rmName: "Jane Doe",
//       rmAvatar: "👤",
//       currentStage: "Approved",
//       progress: 100,
//       status: "Closed",
//       statusColor: "bg-green-100 text-green-700",
//     },
//     {
//       id: 4,
//       name: "Global Export",
//       avatar: "GX",
//       avatarBg: "bg-orange-100",
//       caseId: "#RS0100",
//       caseType: "Commercial Mortgage",
//       rmName: "Sarah Smith",
//       rmAvatar: "👤",
//       currentStage: "Legal Review",
//       progress: 65,
//       status: "In Progress",
//       statusColor: "bg-blue-100 text-blue-700",
//     },
//     {
//       id: 5,
//       name: "Silveira Ventures",
//       avatar: "SV",
//       avatarBg: "bg-red-100",
//       caseId: "#RM01129",
//       caseType: "Asset Financing",
//       rmName: "Mike Ross",
//       rmAvatar: "👤",
//       currentStage: "Needs More Info",
//       progress: 25,
//       status: "Action Required",
//       statusColor: "bg-red-100 text-red-700",
//     },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
//         fixed lg:static inset-y-0 left-0 z-30
//         w-56 bg-white border-r border-gray-200 flex flex-col
//         transform transition-transform duration-300 ease-in-out
//         ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }
//       `}
//       >
//         {/* Mobile Close Button */}
//         <button
//           onClick={() => setIsSidebarOpen(false)}
//           className="lg:hidden absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Logo */}
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex flex-col gap-1">
//             <div className="flex items-center gap-2">
//               <div className="w-7 h-7 bg-[#3b82f6] rounded-md flex items-center justify-center flex-shrink-0">
//                 <Handshake className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-base font-bold text-gray-900">
//                 Nexus Bank
//               </span>
//             </div>
//             <span className="text-xs text-gray-500 ml-9">Partner Portal</span>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-3 overflow-y-auto">
//           <ul className="space-y-1">
//             <li>
//               <button
//                 onClick={() => onNavigate("dashboard")}
//                 className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
//               >
//                 <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
//                 <span>Dashboard</span>
//               </button>
//             </li>
//             <li>
//               <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-[#3b82f6] bg-blue-50 rounded-md font-medium">
//                 <Users className="w-4 h-4 flex-shrink-0" />
//                 <span>My Clients</span>
//               </button>
//             </li>
//             <li>
//               <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors relative">
//                 <MessageSquare className="w-4 h-4 flex-shrink-0" />
//                 <span>Chat</span>
//                 <span className="ml-auto w-5 h-5 bg-[#3b82f6] text-white text-xs rounded-full flex items-center justify-center">
//                   1
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
//                 <UserIcon className="w-4 h-4 flex-shrink-0" />
//                 <span>Profile</span>
//               </button>
//             </li>
//           </ul>
//         </nav>

//         {/* User Profile Card */}
//         <div className="p-3 border-t border-gray-200">
//           <div className="flex items-center gap-2 mb-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
//               JW
//             </div>
//             <div className="flex-1 min-w-0">
//               <div className="text-xs font-semibold text-gray-900 truncate">
//                 James Wilson
//               </div>
//               <div className="text-xs text-gray-500 truncate">
//                 Relationship Mgr
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={onLogout}
//             className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
//           >
//             <LogOut className="w-4 h-4 flex-shrink-0" />
//             <span>Log Out</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
//           <div className="flex items-center justify-between gap-4">
//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsSidebarOpen(true)}
//               className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
//             >
//               <Menu className="w-5 h-5" />
//             </button>

//             {/* Search */}
//             <div className="flex-1 max-w-md">
//               <div className="relative">
//                 <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search Client Name or Case ID..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-2">
//               <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Bell className="w-4 h-4" />
//               </button>

//               <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <HelpCircle className="w-4 h-4" />
//                 <span className="hidden md:inline">Help Center</span>
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
//           {/* Page Header */}
//           <div className="mb-6">
//             <div className="flex items-start justify-between mb-2">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-1">
//                   My Clients
//                 </h1>
//                 <p className="text-sm text-gray-600">
//                   Track and manage your referred client cases
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                   <Download className="w-4 h-4" />
//                   Export
//                 </button>
//                 <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#00bcd4] rounded-lg hover:bg-[#00acc1] transition-colors">
//                   <Plus className="w-4 h-4" />
//                   <span className="hidden sm:inline">New Referral</span>
//                   <span className="sm:hidden">New</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Filters */}
//           <div className="mb-6 flex flex-wrap items-center gap-3">
//             <span className="text-sm text-gray-600 font-medium">
//               Filter by:
//             </span>

//             {/* Status Filter */}
//             <div className="relative">
//               <select
//                 value={filters.status}
//                 onChange={(e) =>
//                   setFilters({ ...filters, status: e.target.value })
//                 }
//                 className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
//               >
//                 <option>Status: All</option>
//                 <option>In Progress</option>
//                 <option>Pending Docs</option>
//                 <option>Closed</option>
//                 <option>Action Required</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             {/* Date Filter */}
//             <div className="relative">
//               <select
//                 value={filters.date}
//                 onChange={(e) =>
//                   setFilters({ ...filters, date: e.target.value })
//                 }
//                 className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
//               >
//                 <option>Date: Last 30 Days</option>
//                 <option>Last 7 Days</option>
//                 <option>Last 90 Days</option>
//                 <option>All Time</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             {/* RM Filter */}
//             <div className="relative">
//               <select
//                 value={filters.rm}
//                 onChange={(e) => setFilters({ ...filters, rm: e.target.value })}
//                 className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
//               >
//                 <option>RM: All</option>
//                 <option>Sarah Smith</option>
//                 <option>Mike Ross</option>
//                 <option>Jane Doe</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             <button className="ml-auto text-sm text-[#3b82f6] hover:text-[#2563eb] font-medium">
//               Clear all filters
//             </button>
//           </div>

//           {/* Table */}
//           <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//             {/* Desktop Table */}
//             <div className="hidden lg:block overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       Client Name
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       Case Type
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       RM Name
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       Current Stage
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       Progress
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       Status
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {clients.map((client) => (
//                     <tr
//                       key={client.id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-4 py-4">
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`w-10 h-10 ${client.avatarBg} rounded-lg flex items-center justify-center flex-shrink-0`}
//                           >
//                             <span className="text-sm font-semibold text-gray-700">
//                               {client.avatar}
//                             </span>
//                           </div>
//                           <div>
//                             <div className="font-semibold text-sm text-gray-900">
//                               {client.name}
//                             </div>
//                             <div className="text-xs text-gray-500">
//                               ID: {client.caseId}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-4">
//                         <span className="text-sm text-gray-700">
//                           {client.caseType}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <div className="flex items-center gap-2">
//                           <span className="text-lg">{client.rmAvatar}</span>
//                           <span className="text-sm text-gray-700">
//                             {client.rmName}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-4">
//                         <span className="text-sm text-gray-700">
//                           {client.currentStage}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <div className="flex items-center gap-2">
//                           <div className="flex-1 max-w-[100px] bg-gray-200 rounded-full h-2">
//                             <div
//                               className="bg-blue-500 h-2 rounded-full transition-all"
//                               style={{ width: `${client.progress}%` }}
//                             ></div>
//                           </div>
//                           <span className="text-xs font-medium text-gray-600">
//                             {client.progress}%
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-semibold ${client.statusColor}`}
//                         >
//                           {client.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <td className="px-4 py-4">
//                           <button
//                             onClick={() => onNavigate("clientDetail", client)}
//                             className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//                           >
//                             <Eye className="w-4 h-4" />
//                           </button>
//                         </td>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Mobile Card View */}
//             <div className="lg:hidden divide-y divide-gray-200">
//               {clients.map((client) => (
//                 <div key={client.id} className="p-4">
//                   <div className="flex items-start gap-3 mb-3">
//                     <div
//                       className={`w-12 h-12 ${client.avatarBg} rounded-lg flex items-center justify-center flex-shrink-0`}
//                     >
//                       <span className="text-base font-semibold text-gray-700">
//                         {client.avatar}
//                       </span>
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="font-semibold text-gray-900 mb-1">
//                         {client.name}
//                       </div>
//                       <div className="text-xs text-gray-500 mb-2">
//                         ID: {client.caseId}
//                       </div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <span
//                           className={`px-2.5 py-1 rounded-full text-xs font-semibold ${client.statusColor}`}
//                         >
//                           {client.status}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <div className="flex-1 bg-gray-200 rounded-full h-2">
//                           <div
//                             className="bg-blue-500 h-2 rounded-full"
//                             style={{ width: `${client.progress}%` }}
//                           ></div>
//                         </div>
//                         <span className="text-xs font-medium text-gray-600">
//                           {client.progress}%
//                         </span>
//                       </div>
//                       <div className="text-xs text-gray-600">
//                         <span className="font-medium">Stage:</span>{" "}
//                         {client.currentStage}
//                       </div>
//                     </div>
//                     <td className="px-4 py-4">
//                       <button
//                         onClick={() => onNavigate("clientDetail", client)}
//                         className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//                       >
//                         <Eye className="w-4 h-4" />
//                       </button>
//                     </td>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
//               <div className="text-sm text-gray-600">
//                 Showing <span className="font-medium">1</span> to{" "}
//                 <span className="font-medium">5</span> of{" "}
//                 <span className="font-medium">25</span> entries
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
//                   Previous
//                 </button>
//                 <button className="px-3 py-1.5 text-sm text-white bg-[#3b82f6] rounded-md hover:bg-[#2563eb]">
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MyClientsPage;
import React, { useState } from "react";
import { Plus, Download, Eye, ChevronDown } from "lucide-react";

const MyClientsPage = ({ onNavigate }) => {
  const [filters, setFilters] = useState({
    status: "All",
    date: "Last 30 Days",
    rm: "All",
  });

  // Mock client data
  const clients = [
    {
      id: 1,
      name: "Acme Corp",
      avatar: "AC",
      avatarBg: "bg-blue-100",
      caseId: "#RS01",
      caseType: "Loan Application",
      rmName: "Sarah Smith",
      rmAvatar: "👤",
      currentStage: "Underwriting",
      progress: 45,
      status: "In Progress",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      name: "John Doe Estate",
      avatar: "JD",
      avatarBg: "bg-purple-100",
      caseId: "#RS0104",
      caseType: "Wealth Mgmt",
      rmName: "Mike Ross",
      rmAvatar: "👤",
      currentStage: "Initial Review",
      progress: 10,
      status: "Pending Docs",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 3,
      name: "Tech Solutions",
      avatar: "TS",
      avatarBg: "bg-green-100",
      caseId: "#RM0499",
      caseType: "Line of Credit",
      rmName: "Jane Doe",
      rmAvatar: "👤",
      currentStage: "Approved",
      progress: 100,
      status: "Closed",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 4,
      name: "Global Export",
      avatar: "GX",
      avatarBg: "bg-orange-100",
      caseId: "#RS0100",
      caseType: "Commercial Mortgage",
      rmName: "Sarah Smith",
      rmAvatar: "👤",
      currentStage: "Legal Review",
      progress: 65,
      status: "In Progress",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 5,
      name: "Silveira Ventures",
      avatar: "SV",
      avatarBg: "bg-red-100",
      caseId: "#RM01129",
      caseType: "Asset Financing",
      rmName: "Mike Ross",
      rmAvatar: "👤",
      currentStage: "Needs More Info",
      progress: 25,
      status: "Action Required",
      statusColor: "bg-red-100 text-red-700",
    },
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              My Clients
            </h1>
            <p className="text-sm text-gray-600">
              Track and manage your referred client cases
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={() => onNavigate("newReferral")}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#00bcd4] rounded-lg hover:bg-[#00acc1]"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Referral</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-600 font-medium">Filter by:</span>

        {/* Status Filter */}
        <div className="relative">
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option>Status: All</option>
            <option>In Progress</option>
            <option>Pending Docs</option>
            <option>Closed</option>
            <option>Action Required</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Date Filter */}
        <div className="relative">
          <select
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option>Date: Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>All Time</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* RM Filter */}
        <div className="relative">
          <select
            value={filters.rm}
            onChange={(e) => setFilters({ ...filters, rm: e.target.value })}
            className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option>RM: All</option>
            <option>Sarah Smith</option>
            <option>Mike Ross</option>
            <option>Jane Doe</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <button className="ml-auto text-sm text-[#3b82f6] hover:text-[#2563eb] font-medium">
          Clear all filters
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Client Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Case Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  RM Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Current Stage
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Progress
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clients.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${client.avatarBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-sm font-semibold text-gray-700">
                          {client.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {client.caseId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-700">
                      {client.caseType}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{client.rmAvatar}</span>
                      <span className="text-sm text-gray-700">
                        {client.rmName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-700">
                      {client.currentStage}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[100px] bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${client.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {client.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${client.statusColor}`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => onNavigate("clientDetail", client)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden divide-y divide-gray-200">
          {clients.map((client) => (
            <div key={client.id} className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-12 h-12 ${client.avatarBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-base font-semibold text-gray-700">
                    {client.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 mb-1">
                    {client.name}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    ID: {client.caseId}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${client.statusColor}`}
                    >
                      {client.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${client.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {client.progress}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Stage:</span>{" "}
                    {client.currentStage}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate("clientDetail", client)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">5</span> of{" "}
            <span className="font-medium">25</span> entries
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1.5 text-sm text-white bg-[#3b82f6] rounded-md hover:bg-[#2563eb]">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyClientsPage;
