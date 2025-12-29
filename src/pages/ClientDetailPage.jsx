import React from 'react';
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  MessageCircle,
  ChevronRight,
  User as UserIcon,
  Info,
  Eye
} from 'lucide-react';
import {
  BANK_USER_PHASES_LIST,
  getPhasesWithStatus,
  calculateBankUserProgress
} from '../constants/workflow';

/**
 * ClientDetailPage - Read-Only Case Status View for Bank Users
 *
 * This page provides Bank Users with:
 * - High-level progress tracking (5 phases only)
 * - Basic client information
 * - RM contact details
 *
 * Bank Users CANNOT:
 * - Access detailed internal stages
 * - View financial information
 * - Upload documents
 * - Make any modifications
 */
const ClientDetailPage = ({ onNavigate, clientData }) => {
  // Build client object safely with defaults
  const client = {
    name: clientData?.name || 'Client Name',
    caseNumber: clientData?.caseId || clientData?.caseNumber || '#CASE-00000',
    status: clientData?.status || 'IN PROGRESS',
    category: clientData?.category || clientData?.caseType || 'REFERRAL',
    lastUpdated: clientData?.lastUpdated || new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    // Map to high-level phase (initiated, valuation, payment, execution, completed)
    currentPhase: clientData?.currentPhase || clientData?.phase || 'initiated',
    email: clientData?.email || 'Not provided',
    phone: clientData?.phone || 'Not provided',
    entityType: clientData?.entityType || clientData?.caseType || 'Individual',
    rm: clientData?.rm || {
      name: 'Assigned RM',
      title: 'Relationship Manager',
      email: 'rm@rurash.com',
      avatar: '👤',
      lastContact: 'Pending',
      avgResponseTime: '< 24 Hrs',
      online: false
    }
  };

  // Get phases with current status using workflow helper
  const phases = getPhasesWithStatus(client.currentPhase);

  // Calculate progress based on current phase
  const progressPercentage = calculateBankUserProgress(client.currentPhase);

  // Get status badge styling
  const getStatusBadge = (status) => {
    const statusLower = status?.toLowerCase();
    if (statusLower?.includes('progress') || statusLower?.includes('active')) {
      return 'bg-blue-100 text-blue-700';
    }
    if (statusLower?.includes('completed') || statusLower?.includes('closed')) {
      return 'bg-green-100 text-green-700';
    }
    if (statusLower?.includes('pending') || statusLower?.includes('hold')) {
      return 'bg-yellow-100 text-yellow-700';
    }
    return 'bg-gray-100 text-gray-700';
  };

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

      {/* Read-Only Notice Banner */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
        <Eye className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Status View Only</span> — You can track the progress of your referral here.
            For any updates or queries, please use the chat feature to contact your assigned RM.
          </p>
        </div>
      </div>

      {/* Client Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 text-xs font-semibold rounded ${getStatusBadge(client.status)}`}>
                {client.status}
              </span>
              <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                {client.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{client.name}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>Case: <span className="font-medium text-gray-900">{client.caseNumber}</span></span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">LAST UPDATED</div>
            <div className="text-sm font-semibold text-gray-900">{client.lastUpdated}</div>
          </div>
        </div>
      </div>

      {/* Progress Status - High Level Phases Only */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-bold text-gray-900">Progress Status</h2>
          </div>
          <span className="text-sm font-semibold text-green-600">{progressPercentage}% Complete</span>
        </div>

        {/* Progress Steps - 5 High-Level Phases */}
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
            {phases.map((phase) => (
              <div key={phase.id} className="flex flex-col items-center" style={{ width: '20%' }}>
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-3 z-10
                  ${phase.status === 'completed' ? 'bg-green-500 text-white' :
                    phase.status === 'in-progress' ? 'bg-white border-2 border-green-500 text-green-600' :
                    'bg-gray-100 text-gray-400'}
                `}>
                  {phase.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : phase.status === 'in-progress' ? (
                    <Clock className="w-5 h-5" />
                  ) : (
                    phase.step
                  )}
                </div>
                <div className="text-center">
                  <div className={`text-xs sm:text-sm font-semibold mb-1 ${
                    phase.status === 'completed' || phase.status === 'in-progress' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {phase.name}
                  </div>
                  <div className={`text-xs hidden sm:block ${
                    phase.status === 'completed' ? 'text-gray-500' :
                    phase.status === 'in-progress' ? 'text-green-600 font-medium' :
                    'text-gray-400'
                  }`}>
                    {phase.status === 'completed' ? 'Done' :
                     phase.status === 'in-progress' ? 'In Progress' :
                     'Pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Description */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Current Phase: </span>
                {phases.find(p => p.status === 'in-progress')?.description ||
                 phases.find(p => p.status === 'completed')?.description ||
                 'Processing your referral'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Client Info - Limited View */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <UserIcon className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">Referral Details</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">CLIENT NAME</div>
              <div className="text-sm text-gray-900">{client.name}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">CONTACT EMAIL</div>
              <div className="text-sm text-gray-900">{client.email}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">CONTACT PHONE</div>
              <div className="text-sm text-gray-900">{client.phone}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">CASE TYPE</div>
              <div className="text-sm text-gray-900">{client.entityType}</div>
            </div>
          </div>

          {/* Limited Access Notice */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 italic">
              Additional details are managed by your assigned RM.
            </p>
          </div>
        </div>

        {/* Assigned RM - Contact Only */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-teal-600" />
              <h2 className="text-lg font-bold text-gray-900">Your Relationship Manager</h2>
            </div>
            {client.rm?.online && (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </span>
            )}
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shrink-0">
              <span className="text-2xl">{client.rm?.avatar || '👤'}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{client.rm?.name || 'Pending Assignment'}</h3>
              <p className="text-sm text-gray-600 mb-1">{client.rm?.title || 'Relationship Manager'}</p>
              <div className="text-xs text-gray-500">
                {client.rm?.email || 'Contact pending'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">LAST CONTACT</div>
              <div className="text-sm font-medium text-gray-900">{client.rm?.lastContact || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">AVG. RESPONSE</div>
              <div className="text-sm font-medium text-gray-900">{client.rm?.avgResponseTime || 'N/A'}</div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('chat')}
            className="w-full flex items-center justify-center gap-2 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with RM
          </button>

          <p className="mt-3 text-xs text-center text-gray-500">
            Contact your RM for status updates and queries
          </p>
        </div>
      </div>
    </main>
  );
};

export default ClientDetailPage;