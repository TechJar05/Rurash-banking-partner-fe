import React, { useState, useMemo } from 'react';
import { Plus, Eye, ChevronDown, Filter, Info, Search } from 'lucide-react';
import { BANK_USER_PHASES } from '../constants/workflow';

/**
 * MyClientsPage - Bank User Referral List
 *
 * Provides Bank Users with:
 * - List of all their referred clients
 * - High-level phase tracking (5 phases only)
 * - Filters for easier navigation
 * - Quick access to add new referrals
 *
 * This is a READ-ONLY view. Bank Users can only:
 * - View referral status
 * - Track progress
 * - Navigate to details or chat
 */
const MyClientsPage = ({ onNavigate, searchQuery = '' }) => {
  const [filters, setFilters] = useState({
    phase: 'All',
    date: 'All Time'
  });

  // Helper function to get phase color
  const getPhaseColor = (phase) => {
    const phaseColors = {
      'Initiated': 'bg-blue-100 text-blue-700',
      'Valuation': 'bg-purple-100 text-purple-700',
      'Payment': 'bg-orange-100 text-orange-700',
      'Execution': 'bg-blue-100 text-blue-500',
      'Completed': 'bg-green-100 text-green-700'
    };
    return phaseColors[phase] || 'bg-gray-100 text-gray-700';
  };

  // Helper function to calculate progress from phase
  const getProgressFromPhase = (phase) => {
    const progressMap = {
      'Initiated': 20,
      'Valuation': 40,
      'Payment': 60,
      'Execution': 80,
      'Completed': 100
    };
    return progressMap[phase] || 0;
  };

  // Mock referral data with high-level phases only
  const referrals = [
    {
      id: 1,
      name: 'Acme Corp',
      avatar: 'AC',
      avatarBg: 'bg-blue-100',
      caseId: '#RS-2024-001',
      caseType: 'Wealth Management',
      rmName: 'Sarah Smith',
      phase: BANK_USER_PHASES.VALUATION.name,
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'John Doe Estate',
      avatar: 'JD',
      avatarBg: 'bg-purple-100',
      caseId: '#RS-2024-002',
      caseType: 'Investment Advisory',
      rmName: 'Mike Ross',
      phase: BANK_USER_PHASES.INITIATED.name,
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'Tech Solutions Ltd',
      avatar: 'TS',
      avatarBg: 'bg-green-100',
      caseId: '#RS-2024-003',
      caseType: 'Portfolio Management',
      rmName: 'Jane Doe',
      phase: BANK_USER_PHASES.COMPLETED.name,
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      name: 'Global Exports Inc',
      avatar: 'GE',
      avatarBg: 'bg-orange-100',
      caseId: '#RS-2024-004',
      caseType: 'Financial Planning',
      rmName: 'Sarah Smith',
      phase: BANK_USER_PHASES.EXECUTION.name,
      lastUpdated: '5 hours ago'
    },
    {
      id: 5,
      name: 'Silveira Ventures',
      avatar: 'SV',
      avatarBg: 'bg-red-100',
      caseId: '#RS-2024-005',
      caseType: 'Asset Management',
      rmName: 'Mike Ross',
      phase: BANK_USER_PHASES.PAYMENT.name,
      lastUpdated: '12 hours ago'
    }
  ];

  // Filter referrals based on selected filters and search query
  const filteredReferrals = useMemo(() => {
    return referrals.filter(referral => {
      // Phase filter
      if (filters.phase !== 'All' && referral.phase !== filters.phase) return false;

      // Search filter - search across name, caseId, caseType, rmName
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const searchableFields = [
          referral.name,
          referral.caseId,
          referral.caseType,
          referral.rmName
        ].map(field => field.toLowerCase());

        return searchableFields.some(field => field.includes(query));
      }

      return true;
    });
  }, [referrals, filters.phase, searchQuery]);

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">My Referrals</h1>
            <p className="text-sm text-gray-600">Track the progress of your client referrals</p>
          </div>
          <button
            onClick={() => onNavigate('newReferral')}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Referral</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-800">
          Track your referrals through 5 phases: <span className="font-semibold">Initiated → Valuation → Payment → Execution → Completed</span>
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600 font-medium">Filter:</span>
        </div>

        {/* Phase Filter */}
        <div className="relative">
          <select
            value={filters.phase}
            onChange={(e) => setFilters({ ...filters, phase: e.target.value })}
            className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option value="All">All Phases</option>
            <option value={BANK_USER_PHASES.INITIATED.name}>{BANK_USER_PHASES.INITIATED.name}</option>
            <option value={BANK_USER_PHASES.VALUATION.name}>{BANK_USER_PHASES.VALUATION.name}</option>
            <option value={BANK_USER_PHASES.PAYMENT.name}>{BANK_USER_PHASES.PAYMENT.name}</option>
            <option value={BANK_USER_PHASES.EXECUTION.name}>{BANK_USER_PHASES.EXECUTION.name}</option>
            <option value={BANK_USER_PHASES.COMPLETED.name}>{BANK_USER_PHASES.COMPLETED.name}</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Date Filter */}
        <div className="relative">
          <select
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option>All Time</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {(filters.phase !== 'All' || filters.date !== 'All Time') && (
          <button
            onClick={() => setFilters({ phase: 'All', date: 'All Time' })}
            className="ml-auto text-sm text-blue-500 hover:text-blue-600 font-medium"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Referrals Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Client
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Case Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Assigned RM
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Current Phase
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Progress
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Updated
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReferrals.map((referral) => (
                <tr
                  key={referral.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${referral.avatarBg} rounded-lg flex items-center justify-center shrink-0`}>
                        <span className="text-sm font-semibold text-gray-700">{referral.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{referral.name}</div>
                        <div className="text-xs text-gray-500">{referral.caseId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-700">{referral.caseType}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-700">{referral.rmName}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPhaseColor(referral.phase)}`}>
                      {referral.phase}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full transition-all"
                          style={{ width: `${getProgressFromPhase(referral.phase)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {getProgressFromPhase(referral.phase)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-500">{referral.lastUpdated}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => onNavigate('clientDetail', {
                        ...referral,
                        currentPhase: referral.phase.toLowerCase()
                      })}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors inline-flex items-center justify-center"
                      title="View Details"
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
          {filteredReferrals.map((referral) => (
            <div
              key={referral.id}
              className="p-4 hover:bg-gray-50 transition-colors"
              onClick={() => onNavigate('clientDetail', {
                ...referral,
                currentPhase: referral.phase.toLowerCase()
              })}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 ${referral.avatarBg} rounded-lg flex items-center justify-center shrink-0`}>
                  <span className="text-base font-semibold text-gray-700">{referral.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 mb-1">{referral.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{referral.caseId}</div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${getPhaseColor(referral.phase)}`}>
                    {referral.phase}
                  </span>
                </div>
                <Eye className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: `${getProgressFromPhase(referral.phase)}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-600">
                  {getProgressFromPhase(referral.phase)}%
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>{referral.caseType}</span>
                <span>Updated {referral.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredReferrals.length === 0 && (
          <div className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <div className="text-gray-500 mb-2 font-medium">No referrals found</div>
            <p className="text-sm text-gray-400 mb-4">
              {searchQuery ? `No results for "${searchQuery}"` : 'Try adjusting your filters or add a new referral'}
            </p>
            {(searchQuery || filters.phase !== 'All') && (
              <button
                onClick={() => setFilters({ phase: 'All', date: 'All Time' })}
                className="text-sm text-blue-500 hover:text-blue-600 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {filteredReferrals.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{filteredReferrals.length}</span> of{' '}
              <span className="font-medium">{filteredReferrals.length}</span> referrals
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button
                className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyClientsPage;
