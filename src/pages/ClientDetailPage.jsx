// import React, { useState } from 'react';
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
//   TrendingUp,
//   CheckCircle2,
//   Mail,
//   Phone,
//   MapPin,
//   Building2,
//   FileText,
//   MessageCircle,
//   ChevronRight
// } from 'lucide-react';

// const ClientDetailPage = ({ onLogout, onNavigate, clientData }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Default client data if none provided
//   const client = clientData || {
//     name: 'Acme Corp Holdings',
//     caseNumber: '#CASE-88291',
//     status: 'ACTIVE CASE',
//     category: 'CORPORATE',
//     lastUpdated: 'Oct 24, 2023',
//     progress: 40,
//     currentStage: 'Valuation',
//     stages: [
//       { id: 1, name: 'Initiated', status: 'completed', step: '1' },
//       { id: 2, name: 'Valuation', status: 'in-progress', step: '2' },
//       { id: 3, name: 'Payment', status: 'pending', step: '3' },
//       { id: 4, name: 'Execution', status: 'pending', step: '4' },
//       { id: 5, name: 'Completed', status: 'pending', step: '5' }
//     ],
//     email: 'contact@acme-hold...',
//     phone: '+1 (555) 123-0464',
//     entityType: 'LLC (Limited Liability)',
//     jurisdiction: 'Delaware, USA',
//     address: '1200 Market Street, Suite 500, Wilmington, DE 19801',
//     rm: {
//       name: 'Sarah Jenkins',
//       title: 'Senior Relationship Manager',
//       email: 'sarah.jenkins@partnerbank.com',
//       avatar: '👤',
//       lastContact: 'Today, 9:41 AM',
//       avgResponseTime: '< 15 Mins',
//       online: true
//     }
//   };

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
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex flex-col gap-1">
//             <div className="flex items-center gap-2">
//               <div className="w-7 h-7 bg-[#3b82f6] rounded-md flex items-center justify-center flex-shrink-0">
//                 <Handshake className="w-4 h-4 text-white" />
//               </div>
//               <div>
//                 <span className="text-base font-bold text-gray-900 block leading-none">PartnerBank</span>
//                 <span className="text-xs text-gray-500 block leading-none mt-0.5">DASHBOARD</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-3 overflow-y-auto">
//           <ul className="space-y-1">
//             <li>
//               <button 
//                 onClick={() => onNavigate('dashboard')}
//                 className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
//               >
//                 <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
//                 <span>Dashboard</span>
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => onNavigate('clients')}
//                 className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-[#3b82f6] bg-blue-50 rounded-md font-medium"
//               >
//                 <Users className="w-4 h-4 flex-shrink-0" />
//                 <span>My Clients</span>
//               </button>
//             </li>
//             <li>
//               <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors relative">
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

//         {/* User Profile Card */}
//         <div className="p-3 border-t border-gray-200">
//           <div className="flex items-center gap-2 mb-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
//               AM
//             </div>
//             <div className="flex-1 min-w-0">
//               <div className="text-xs font-semibold text-gray-900 truncate">Alex Morgan</div>
//               <div className="text-xs text-gray-500 truncate">Senior Partner</div>
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

//             <h1 className="text-lg font-bold text-gray-900 hidden sm:block">Client Detail</h1>

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

//             {/* Right Actions */}
//             <div className="flex items-center gap-2">
//               <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Bell className="w-4 h-4" />
//               </button>
              
//               <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200">
//                 <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
//                   AM
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
//           {/* Breadcrumb */}
//           <div className="mb-4 flex items-center gap-2 text-sm">
//             <button 
//               onClick={() => onNavigate('clients')}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               My Clients
//             </button>
//             <ChevronRight className="w-4 h-4 text-gray-400" />
//             <span className="text-gray-900 font-medium">{client.name}</span>
//           </div>

//           {/* Client Header */}
//           <div className="mb-6">
//             <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
//                     {client.status}
//                   </span>
//                   <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
//                     {client.category}
//                   </span>
//                 </div>
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">{client.name}</h1>
//                 <div className="flex items-center gap-3 text-sm text-gray-600">
//                   <div className="flex items-center gap-1.5">
//                     <FileText className="w-4 h-4" />
//                     <span>Case Number: <span className="font-medium text-gray-900">{client.caseNumber}</span></span>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-xs text-gray-500 mb-1">LAST UPDATED</div>
//                 <div className="text-sm font-semibold text-gray-900">{client.lastUpdated}</div>
//               </div>
//             </div>
//           </div>

//           {/* Progress Status */}
//           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <TrendingUp className="w-5 h-5 text-green-600" />
//                 <h2 className="text-lg font-bold text-gray-900">Progress Status</h2>
//               </div>
//               <span className="text-sm font-semibold text-green-600">{client.progress}% Completed</span>
//             </div>

//             {/* Progress Steps */}
//             <div className="relative">
//               {/* Progress Line */}
//               <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
//                 <div 
//                   className="h-full bg-green-500 transition-all duration-500"
//                   style={{ width: `${(client.stages.filter(s => s.status === 'completed').length / client.stages.length) * 100}%` }}
//                 ></div>
//               </div>

//               {/* Steps */}
//               <div className="relative flex justify-between">
//                 {client.stages.map((stage, index) => (
//                   <div key={stage.id} className="flex flex-col items-center" style={{ width: `${100 / client.stages.length}%` }}>
//                     <div className={`
//                       w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-3 z-10
//                       ${stage.status === 'completed' ? 'bg-green-500 text-white' : 
//                         stage.status === 'in-progress' ? 'bg-white border-2 border-green-500 text-green-600' : 
//                         'bg-gray-100 text-gray-400'}
//                     `}>
//                       {stage.status === 'completed' ? (
//                         <CheckCircle2 className="w-5 h-5" />
//                       ) : stage.status === 'in-progress' ? (
//                         <TrendingUp className="w-5 h-5" />
//                       ) : (
//                         stage.step
//                       )}
//                     </div>
//                     <div className="text-center">
//                       <div className={`text-sm font-semibold mb-1 ${
//                         stage.status === 'completed' || stage.status === 'in-progress' ? 'text-gray-900' : 'text-gray-400'
//                       }`}>
//                         {stage.name}
//                       </div>
//                       <div className={`text-xs ${
//                         stage.status === 'completed' ? 'text-gray-500' : 
//                         stage.status === 'in-progress' ? 'text-green-600 font-medium' : 
//                         'text-gray-400'
//                       }`}>
//                         {stage.status === 'completed' ? 'Completed' : 
//                          stage.status === 'in-progress' ? 'In Progress' : 
//                          'Pending'}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Info Cards Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Client Info */}
//             <div className="bg-white rounded-lg border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <Building2 className="w-5 h-5 text-blue-600" />
//                   <h2 className="text-lg font-bold text-gray-900">Client Info</h2>
//                 </div>
//                 <button className="text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb]">
//                   View Full Profile
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">EMAIL ADDRESS</div>
//                   <div className="text-sm text-gray-900">{client.email}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">PHONE NUMBER</div>
//                   <div className="text-sm text-gray-900">{client.phone}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">ENTITY TYPE</div>
//                   <div className="text-sm text-gray-900">{client.entityType}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">JURISDICTION</div>
//                   <div className="text-sm text-gray-900">{client.jurisdiction}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">PRIMARY ADDRESS</div>
//                   <div className="text-sm text-gray-900">{client.address}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Assigned RM */}
//             <div className="bg-white rounded-lg border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <UserIcon className="w-5 h-5 text-green-600" />
//                   <h2 className="text-lg font-bold text-gray-900">Assigned RM</h2>
//                 </div>
//                 {client.rm.online && (
//                   <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
//                     <span className="w-2 h-2 bg-green-600 rounded-full"></span>
//                     Online
//                   </span>
//                 )}
//               </div>

//               <div className="flex items-start gap-4 mb-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <span className="text-2xl">{client.rm.avatar}</span>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">{client.rm.name}</h3>
//                   <p className="text-sm text-gray-600 mb-2">{client.rm.title}</p>
//                   <div className="flex items-center gap-1.5 text-sm text-gray-600">
//                     <Mail className="w-4 h-4" />
//                     <span>{client.rm.email}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">LAST CONTACT</div>
//                   <div className="text-sm font-semibold text-gray-900">{client.rm.lastContact}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs font-semibold text-gray-500 mb-1">AVG. RESPONSE TIME</div>
//                   <div className="text-sm font-semibold text-gray-900">{client.rm.avgResponseTime}</div>
//                 </div>
//               </div>

//               <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#00bcd4] text-white rounded-lg font-semibold hover:bg-[#00acc1] transition-colors">
//                 <MessageCircle className="w-4 h-4" />
//                 Chat with RM
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ClientDetailPage;


import React from 'react';
import { 
  TrendingUp,
  CheckCircle2,
  Building2,
  FileText,
  MessageCircle,
  ChevronRight,
  User as UserIcon
} from 'lucide-react';

const ClientDetailPage = ({ onNavigate, clientData }) => {
  // Default stages
  const defaultStages = [
    { id: 1, name: 'Initiated', status: 'completed', step: '1' },
    { id: 2, name: 'Valuation', status: 'in-progress', step: '2' },
    { id: 3, name: 'Payment', status: 'pending', step: '3' },
    { id: 4, name: 'Execution', status: 'pending', step: '4' },
    { id: 5, name: 'Completed', status: 'pending', step: '5' }
  ];

  // Default RM
  const defaultRM = {
    name: 'Sarah Jenkins',
    title: 'Senior Relationship Manager',
    email: 'sarah.jenkins@partnerbank.com',
    avatar: '👤',
    lastContact: 'Today, 9:41 AM',
    avgResponseTime: '< 15 Mins',
    online: true
  };

  // Build client object safely
  const client = {
    name: clientData?.name || 'Acme Corp Holdings',
    caseNumber: clientData?.caseId || clientData?.caseNumber || '#CASE-88291',
    status: clientData?.status || 'ACTIVE CASE',
    category: clientData?.category || 'CORPORATE',
    lastUpdated: clientData?.lastUpdated || 'Oct 24, 2023',
    progress: clientData?.progress || 40,
    currentStage: clientData?.currentStage || 'Valuation',
    stages: Array.isArray(clientData?.stages) ? clientData.stages : defaultStages,
    email: clientData?.email || 'contact@acme-holdings.com',
    phone: clientData?.phone || '+1 (555) 123-0464',
    entityType: clientData?.entityType || clientData?.caseType || 'LLC (Limited Liability)',
    jurisdiction: clientData?.jurisdiction || 'Delaware, USA',
    address: clientData?.address || '1200 Market Street, Suite 500, Wilmington, DE 19801',
    rm: clientData?.rm || defaultRM
  };

  // Calculate progress percentage safely
  const completedStages = client.stages.filter(s => s.status === 'completed').length;
  const progressPercentage = (completedStages / client.stages.length) * 100;

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <button 
          onClick={() => onNavigate('clients')}
          className="text-gray-500 hover:text-gray-700"
        >
          My Clients
        </button>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900 font-medium">{client.name}</span>
      </div>

      {/* Client Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                {client.status}
              </span>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                {client.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{client.name}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Case Number: <span className="font-medium text-gray-900">{client.caseNumber}</span></span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">LAST UPDATED</div>
            <div className="text-sm font-semibold text-gray-900">{client.lastUpdated}</div>
          </div>
        </div>
      </div>

      {/* Progress Status */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-bold text-gray-900">Progress Status</h2>
          </div>
          <span className="text-sm font-semibold text-green-600">{client.progress}% Completed</span>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
            <div 
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {client.stages.map((stage) => (
              <div key={stage.id} className="flex flex-col items-center" style={{ width: `${100 / client.stages.length}%` }}>
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-3 z-10
                  ${stage.status === 'completed' ? 'bg-green-500 text-white' : 
                    stage.status === 'in-progress' ? 'bg-white border-2 border-green-500 text-green-600' : 
                    'bg-gray-100 text-gray-400'}
                `}>
                  {stage.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : stage.status === 'in-progress' ? (
                    <TrendingUp className="w-5 h-5" />
                  ) : (
                    stage.step
                  )}
                </div>
                <div className="text-center">
                  <div className={`text-sm font-semibold mb-1 ${
                    stage.status === 'completed' || stage.status === 'in-progress' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {stage.name}
                  </div>
                  <div className={`text-xs ${
                    stage.status === 'completed' ? 'text-gray-500' : 
                    stage.status === 'in-progress' ? 'text-green-600 font-medium' : 
                    'text-gray-400'
                  }`}>
                    {stage.status === 'completed' ? 'Completed' : 
                     stage.status === 'in-progress' ? 'In Progress' : 
                     'Pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Client Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">Client Info</h2>
            </div>
            <button className="text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb]">
              View Full Profile
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">EMAIL ADDRESS</div>
              <div className="text-sm text-gray-900">{client.email}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">PHONE NUMBER</div>
              <div className="text-sm text-gray-900">{client.phone}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">ENTITY TYPE</div>
              <div className="text-sm text-gray-900">{client.entityType}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">JURISDICTION</div>
              <div className="text-sm text-gray-900">{client.jurisdiction}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">PRIMARY ADDRESS</div>
              <div className="text-sm text-gray-900">{client.address}</div>
            </div>
          </div>
        </div>

        {/* Assigned RM */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-bold text-gray-900">Assigned RM</h2>
            </div>
            {client.rm?.online && (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Online
              </span>
            )}
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">{client.rm?.avatar || '👤'}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{client.rm?.name || 'N/A'}</h3>
              <p className="text-sm text-gray-600 mb-2">{client.rm?.title || 'Relationship Manager'}</p>
              <div className="text-xs text-gray-600">
                {client.rm?.email || 'N/A'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">LAST CONTACT</div>
              <div className="text-sm font-semibold text-gray-900">{client.rm?.lastContact || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">AVG. RESPONSE TIME</div>
              <div className="text-sm font-semibold text-gray-900">{client.rm?.avgResponseTime || 'N/A'}</div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#00bcd4] text-white rounded-lg font-semibold hover:bg-[#00acc1] transition-colors">
            <MessageCircle className="w-4 h-4" />
            Chat with RM
          </button>
        </div>
      </div>
    </main>
  );
};

export default ClientDetailPage;