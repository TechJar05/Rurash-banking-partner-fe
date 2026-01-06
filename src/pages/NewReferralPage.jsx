import React, { useState } from 'react';
import {
  ChevronRight,
  Info,
  CheckCircle2,
  Send,
  User,
  Phone,
  Mail,
  FileText
} from 'lucide-react';
import { BANK_USER_PHASES_LIST } from '../constants/workflow';

/**
 * NewReferralPage - Client Referral Submission Form
 *
 * This page allows Bank Users to submit new client referrals.
 *
 * IMPORTANT: Bank Users can ONLY submit referrals.
 * After submission:
 * - The referral is assigned to a Sales RM
 * - Bank User can only track progress (read-only)
 * - Bank User can chat with assigned RM
 * - All case management is handled by internal teams
 *
 * Bank Users CANNOT:
 * - Create cases directly
 * - Upload documents
 * - Approve anything
 * - Access internal workflow
 */
const NewReferralPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    phoneNumber: '',
    email: '',
    referralType: '',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Success state after submission
  if (isSubmitted) {
    return (
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Referral Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Your client referral has been successfully submitted. A Relationship Manager will be assigned shortly.
            </p>

            {/* What happens next */}
            <div className="text-left bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <div className="space-y-3">
                {BANK_USER_PHASES_LIST.map((phase, index) => (
                  <div key={phase.id} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{phase.name}</div>
                      <div className="text-xs text-gray-500">{phase.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  You can track the progress of this referral from your dashboard.
                  Use the chat feature to communicate with your assigned RM.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onNavigate('clients')}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors"
              >
                View My Referrals
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    clientName: '',
                    phoneNumber: '',
                    email: '',
                    referralType: '',
                    remarks: ''
                  });
                }}
                className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Submit Another Referral
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-gray-50">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <button
          onClick={() => onNavigate('clients')}
          className="text-gray-500 hover:text-gray-700"
        >
          My Referrals
        </button>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900 font-medium">New Referral</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Submit New Referral</h1>
        <p className="text-sm text-gray-600">Refer a new client to Rurash for wealth management services</p>
      </div>

      <div className="max-w-3xl">
        {/* Important Notice */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">About Referrals</h3>
              <p className="text-sm text-amber-800">
                As a Bank Partner, you can refer clients to Rurash. After submission:
              </p>
              <ul className="text-sm text-amber-800 mt-2 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  A Relationship Manager will be assigned to handle the case
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  You can track progress through 5 high-level phases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  Chat with your RM for updates and queries
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Client Information</h2>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Client Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <User className="w-4 h-4 text-gray-500" />
                Client Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder="Enter full name or company name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone Number */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="client@example.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Referral Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <FileText className="w-4 h-4 text-gray-500" />
                Service Interest <span className="text-red-500">*</span>
              </label>
              <select
                name="referralType"
                value={formData.referralType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent appearance-none bg-white"
                required
              >
                <option value="">Select service type</option>
                <option value="wealth_management">Wealth Management</option>
                <option value="investment_advisory">Investment Advisory</option>
                <option value="portfolio_management">Portfolio Management</option>
                <option value="financial_planning">Financial Planning</option>
                <option value="asset_management">Asset Management</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Remarks Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Additional Remarks <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                placeholder="Any relevant information about the client's requirements or background..."
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
              ></textarea>
              <p className="mt-1 text-xs text-gray-500">
                This information will help the assigned RM better understand the client's needs.
              </p>
            </div>
          </div>

          {/* Auto-Assignment Notice */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Auto-Assignment:</span> This referral will be linked to your account
                  (<span className="font-medium">Alex Morgan</span>) and assigned to an available RM upon submission.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => onNavigate('clients')}
              className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Referral
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewReferralPage;
