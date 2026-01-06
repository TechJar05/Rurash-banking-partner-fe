import React from 'react';
import {
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Eye,
  MessageCircle
} from 'lucide-react';
import { BANK_USER_PHASES } from '../constants/workflow';

/**
 * Dashboard - Bank User Referral Overview
 *
 * Provides Bank Users with:
 * - Summary stats of their referrals
 * - Recent updates on referred clients
 * - Quick access to chat and client list
 *
 * This is a READ-ONLY view for tracking purposes.
 * Bank Users can only submit referrals and track high-level progress.
 */
const Dashboard = ({ onNavigate }) => {
  // Stats for referral tracking
  const stats = [
    {
      icon: Users,
      label: 'TOTAL REFERRALS',
      value: '124',
      subtitle: 'Clients referred',
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Clock,
      label: 'IN PROGRESS',
      value: '45',
      subtitle: 'Being processed',
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
      subtitle: 'Successfully closed',
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  // Recent referral updates with high-level phases only
  const recentReferrals = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'JD',
      caseType: 'Wealth Management',
      caseId: '#RS-2024-001',
      phase: BANK_USER_PHASES.VALUATION.name,
      phaseColor: 'bg-purple-100 text-purple-700',
      lastUpdate: '3 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      avatar: 'SS',
      caseType: 'Investment Advisory',
      caseId: '#RS-2024-002',
      phase: BANK_USER_PHASES.PAYMENT.name,
      phaseColor: 'bg-orange-100 text-orange-700',
      lastUpdate: '5 hours ago'
    },
    {
      id: 3,
      name: 'Acme Corp',
      avatar: 'AC',
      caseType: 'Portfolio Management',
      caseId: '#RS-2024-003',
      phase: BANK_USER_PHASES.COMPLETED.name,
      phaseColor: 'bg-green-100 text-green-700',
      lastUpdate: '1 day ago'
    },
    {
      id: 4,
      name: 'Michael Chen',
      avatar: 'MC',
      caseType: 'Financial Planning',
      caseId: '#RS-2024-004',
      phase: BANK_USER_PHASES.INITIATED.name,
      phaseColor: 'bg-blue-100 text-blue-700',
      lastUpdate: '2 days ago'
    }
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Welcome back, Alex</h1>
        <p className="text-sm text-gray-600">Track the progress of your client referrals</p>
      </div>

      {/* Quick Actions Banner */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold text-lg mb-1">Refer a New Client</h2>
            <p className="text-sm text-blue-100">Submit a new referral and we'll handle the rest</p>
          </div>
          <button
            onClick={() => onNavigate('newReferral')}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Users className="w-4 h-4" />
            New Referral
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center shrink-0`}>
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

      {/* Recent Referral Updates */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">Recent Updates</h2>
              <p className="text-xs text-gray-500 mt-0.5">Track progress of your referrals</p>
            </div>
            <button
              onClick={() => onNavigate('clients')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
            <div className="col-span-4">Client</div>
            <div className="col-span-3">Case ID</div>
            <div className="col-span-3">Current Phase</div>
            <div className="col-span-2">Updated</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {recentReferrals.map((referral) => (
              <div
                key={referral.id}
                className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onNavigate('clientDetail', {
                  name: referral.name,
                  caseId: referral.caseId,
                  caseType: referral.caseType,
                  currentPhase: referral.phase.toLowerCase()
                })}
              >
                <div className="col-span-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs shrink-0">
                    {referral.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm truncate">{referral.name}</div>
                    <div className="text-xs text-gray-500 truncate">{referral.caseType}</div>
                  </div>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className="text-sm text-gray-700 font-medium">{referral.caseId}</span>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${referral.phaseColor}`}>
                    {referral.phase}
                  </span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-500">{referral.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-200">
          {recentReferrals.map((referral) => (
            <div
              key={referral.id}
              className="p-4 hover:bg-gray-50 transition-colors"
              onClick={() => onNavigate('clientDetail', {
                name: referral.name,
                caseId: referral.caseId,
                caseType: referral.caseType,
                currentPhase: referral.phase.toLowerCase()
              })}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {referral.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">{referral.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{referral.caseType}</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${referral.phaseColor}`}>
                      {referral.phase}
                    </span>
                    <span className="text-xs text-gray-500">{referral.lastUpdate}</span>
                  </div>
                </div>
                <Eye className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-xs text-gray-600 font-medium">{referral.caseId}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Need assistance?</h3>
            <p className="text-xs text-gray-600 mb-2">
              Your assigned Relationship Manager is available to help with any queries about your referrals.
            </p>
            <button
              onClick={() => onNavigate('chat')}
              className="text-sm font-semibold text-blue-500 hover:text-blue-600"
            >
              Open Chat
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
