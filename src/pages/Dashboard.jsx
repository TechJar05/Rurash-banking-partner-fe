// import React, { useState } from 'react';
// import { 
//   Search, 
//   Bell, 
//   Users, 
//   TrendingUp, 
//   Hourglass, 
//   CheckCircle, 
//   LogOut,
//   LayoutDashboard,
//   MessageSquare,
//   User as UserIcon,
//   ArrowRight,
//   Menu,
//   X,
  
//   Handshake
// } from 'lucide-react';

// const Dashboard = ({ onLogout , onNavigate  }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Mock data
//   const stats = [
//     {
//       icon: Users,
//       label: 'TOTAL REFERRED',
//       value: '124',
//       subtitle: 'Active client base',
//       color: 'blue',
//       bgColor: 'bg-blue-50',
//       iconColor: 'text-[#3b82f6]'
//     },
//     {
//       icon: Hourglass,
//       label: 'IN PROGRESS',
//       value: '45',
//       subtitle: 'Cases pending',
//       trend: '+12%',
//       trendColor: 'text-green-600',
//       color: 'orange',
//       bgColor: 'bg-orange-50',
//       iconColor: 'text-orange-500',
//       progress: 65
//     },
//     {
//       icon: CheckCircle,
//       label: 'COMPLETED',
//       value: '79',
//       subtitle: 'Successfully funded',
//       color: 'green',
//       bgColor: 'bg-green-50',
//       iconColor: 'text-green-600'
//     }
//   ];

//   const recentClients = [
//     {
//       id: 1,
//       name: 'John Doe',
//       avatar: 'JD',
//       type: 'Mortgage Refinance',
//       caseId: '#CS-2023-884',
//       status: 'Underwriting',
//       statusColor: 'bg-yellow-100 text-yellow-700',
//       lastUpdate: '3 hours ago'
//     },
//     {
//       id: 2,
//       name: 'Sarah Smith',
//       avatar: 'SS',
//       type: 'Business Loan',
//       caseId: '#CS-2023-912',
//       status: 'Doc Review',
//       statusColor: 'bg-blue-100 text-blue-700',
//       lastUpdate: '5 hours ago'
//     },
//     {
//       id: 3,
//       name: 'Acme Corp',
//       avatar: 'AC',
//       type: 'Equipment Leasing',
//       caseId: '#CS-2023-771',
//       status: 'Funding Complete',
//       statusColor: 'bg-green-100 text-green-700',
//       lastUpdate: '1 day ago'
//     },
//     {
//       id: 4,
//       name: 'Michael Chen',
//       avatar: 'MC',
//       type: 'Personal Loan',
//       caseId: '#CS-2023-955',
//       status: 'New Lead',
//       statusColor: 'bg-purple-100 text-purple-700',
//       lastUpdate: '2 days ago'
//     }
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
//       <div className={`
//         fixed lg:static inset-y-0 left-0 z-30
//         w-56 bg-white border-r border-gray-200 flex flex-col
//         transform transition-transform duration-300 ease-in-out
//         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//       `}>
//         {/* Mobile Close Button */}
//         <button
//           onClick={() => setIsSidebarOpen(false)}
//           className="lg:hidden absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Logo */}
//        <div className="p-4 border-b border-gray-200">
//   <div className="flex items-center gap-2">
//     <div className="w-7 h-7 bg-[#3b82f6] rounded-md flex items-center justify-center flex-shrink-0">
//       <Handshake  className="w-4 h-4 text-white" />
//     </div>
//     <span className="text-base font-bold text-gray-900">Rurash Partner</span>
//   </div>
// </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-3 overflow-y-auto">
//           <ul className="space-y-1">
//             <li>
//               <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-[#3b82f6] bg-blue-50 rounded-md font-medium">
//                 <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
//                 <span>Dashboard</span>
//               </button>
//             </li>
//           <li>
//   <button 
//     onClick={() => onNavigate('clients')}
//     className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
//   >
//     <Users className="w-4 h-4 flex-shrink-0" />
//     <span>My Clients</span>
//   </button>
// </li>
//             <li>
//               <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
//                 <MessageSquare className="w-4 h-4 flex-shrink-0" />
//                 <span>Chat</span>
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

//         {/* Logout */}
//         <div className="p-3 border-t border-gray-200">
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
//                   placeholder="Search Client or Case ID..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* User Info */}
//             <div className="flex items-center gap-3">
//               <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Bell className="w-4 h-4" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
              
//               <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200">
//                 <div className="text-right hidden md:block">
//                   <div className="text-xs font-semibold text-gray-900">Alex Morgan</div>
//                   <div className="text-xs text-gray-500">Senior Partner</div>
//                 </div>
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
//                   AM
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
//           {/* Welcome Section */}
//           <div className="mb-6">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Welcome back, Alex</h1>
//             <p className="text-sm text-gray-600">Here is the latest activity on your referred clients</p>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
//                   <div className="flex items-start justify-between mb-3">
//                     <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                       <Icon className={`w-5 h-5 ${stat.iconColor}`} />
//                     </div>
//                     {stat.trend && (
//                       <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
//                         <TrendingUp className="w-3 h-3" />
//                         {stat.trend}
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="text-xs font-semibold text-gray-500 mb-0.5">{stat.label}</div>
//                   <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
//                   <div className="text-xs text-gray-600 mb-2">{stat.subtitle}</div>
                  
//                   {stat.progress && (
//                     <div className="w-full bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
//                         style={{ width: `${stat.progress}%` }}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Recent Client Updates */}
//           <div className="bg-white rounded-lg border border-gray-200">
//             <div className="p-4 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-base sm:text-lg font-bold text-gray-900">Recent Client Updates</h2>
//                 <button className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb] transition-colors">
//                   View All <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Desktop Table View */}
//             <div className="hidden md:block overflow-x-auto">
//               {/* Table Header */}
//               <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
//                 <div className="col-span-4">Client Name</div>
//                 <div className="col-span-3">Case ID</div>
//                 <div className="col-span-3">Status</div>
//                 <div className="col-span-2">Last Updated</div>
//               </div>

//               {/* Table Body */}
//               <div className="divide-y divide-gray-200">
//                 {recentClients.map((client) => (
//                   <div key={client.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 transition-colors">
//                     <div className="col-span-4 flex items-center gap-2.5">
//                       <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
//                         {client.avatar}
//                       </div>
//                       <div className="min-w-0">
//                         <div className="font-semibold text-gray-900 text-sm truncate">{client.name}</div>
//                         <div className="text-xs text-gray-500 truncate">{client.type}</div>
//                       </div>
//                     </div>
//                     <div className="col-span-3 flex items-center">
//                       <span className="text-sm text-gray-700 font-medium">{client.caseId}</span>
//                     </div>
//                     <div className="col-span-3 flex items-center">
//                       <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${client.statusColor}`}>
//                         {client.status}
//                       </span>
//                     </div>
//                     <div className="col-span-2 flex items-center">
//                       <span className="text-sm text-gray-500">{client.lastUpdate}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile Card View */}
//             <div className="md:hidden divide-y divide-gray-200">
//               {recentClients.map((client) => (
//                 <div key={client.id} className="p-4 hover:bg-gray-50 transition-colors">
//                   <div className="flex items-start gap-3 mb-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
//                       {client.avatar}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="font-semibold text-gray-900 text-sm mb-0.5">{client.name}</div>
//                       <div className="text-xs text-gray-500 mb-2">{client.type}</div>
//                       <div className="flex items-center gap-2 flex-wrap">
//                         <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${client.statusColor}`}>
//                           {client.status}
//                         </span>
//                         <span className="text-xs text-gray-500">{client.lastUpdate}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-600 font-medium">{client.caseId}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Hourglass, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

const Dashboard = ({ onNavigate }) => {
  // Mock data
  const stats = [
    {
      icon: Users,
      label: 'TOTAL REFERRED',
      value: '124',
      subtitle: 'Active client base',
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-[#3b82f6]'
    },
    {
      icon: Hourglass,
      label: 'IN PROGRESS',
      value: '45',
      subtitle: 'Cases pending',
      trend: '+12%',
      trendColor: 'text-green-600',
      color: 'orange',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      progress: 65
    },
    {
      icon: CheckCircle,
      label: 'COMPLETED',
      value: '79',
      subtitle: 'Successfully funded',
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  const recentClients = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'JD',
      type: 'Mortgage Refinance',
      caseId: '#CS-2023-884',
      status: 'Underwriting',
      statusColor: 'bg-yellow-100 text-yellow-700',
      lastUpdate: '3 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      avatar: 'SS',
      type: 'Business Loan',
      caseId: '#CS-2023-912',
      status: 'Doc Review',
      statusColor: 'bg-blue-100 text-blue-700',
      lastUpdate: '5 hours ago'
    },
    {
      id: 3,
      name: 'Acme Corp',
      avatar: 'AC',
      type: 'Equipment Leasing',
      caseId: '#CS-2023-771',
      status: 'Funding Complete',
      statusColor: 'bg-green-100 text-green-700',
      lastUpdate: '1 day ago'
    },
    {
      id: 4,
      name: 'Michael Chen',
      avatar: 'MC',
      type: 'Personal Loan',
      caseId: '#CS-2023-955',
      status: 'New Lead',
      statusColor: 'bg-purple-100 text-purple-700',
      lastUpdate: '2 days ago'
    }
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Welcome back, Alex</h1>
        <p className="text-sm text-gray-600">Here is the latest activity on your referred clients</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                {stat.trend && (
                  <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </div>
                )}
              </div>
              
              <div className="text-xs font-semibold text-gray-500 mb-0.5">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600 mb-2">{stat.subtitle}</div>
              
              {stat.progress && (
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Recent Client Updates */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">Recent Client Updates</h2>
            <button 
              onClick={() => onNavigate('clients')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb] transition-colors"
            >
              View All <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
            <div className="col-span-4">Client Name</div>
            <div className="col-span-3">Case ID</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2">Last Updated</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {recentClients.map((client) => (
              <div key={client.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 transition-colors">
                <div className="col-span-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                    {client.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm truncate">{client.name}</div>
                    <div className="text-xs text-gray-500 truncate">{client.type}</div>
                  </div>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className="text-sm text-gray-700 font-medium">{client.caseId}</span>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${client.statusColor}`}>
                    {client.status}
                  </span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-500">{client.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-200">
          {recentClients.map((client) => (
            <div key={client.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {client.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">{client.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{client.type}</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${client.statusColor}`}>
                      {client.status}
                    </span>
                    <span className="text-xs text-gray-500">{client.lastUpdate}</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 font-medium">{client.caseId}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;