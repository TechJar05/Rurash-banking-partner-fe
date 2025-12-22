import React, { useState } from 'react';
import { 
  ChevronRight,
  Info,
  Lock
} from 'lucide-react';

const NewReferralPage = ({ onNavigate, onCancel }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    phoneNumber: '',
    email: '',
    remarks: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Navigate back to clients page
    onNavigate('clients');
  };

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-gray-50">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <button 
          onClick={() => onNavigate('clients')}
          className="text-gray-500 hover:text-gray-700"
        >
          My Clients
        </button>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900 font-medium">New Referral</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Client</h1>
        <p className="text-sm text-gray-600">Enter the client's details to initiate the referral process</p>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs font-semibold text-gray-500 mb-1">STEP {currentStep} OF {totalSteps}</div>
            <h2 className="text-lg font-bold text-gray-900">Client Information</h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{progressPercentage}%</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Auto-Assignment Notice */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="font-semibold text-sm text-gray-900 mb-1">Auto-Assignment Active</div>
            <p className="text-sm text-gray-700">
              This lead will be automatically mapped to <span className="font-semibold text-blue-600">Central Branch</span> and assigned to your account <span className="font-semibold">(Alex Morgan)</span> upon submission. The bank cannot edit these details after submission.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          {/* Assigned RM (Read Only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Assigned Relationship Manager
              <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">READ-ONLY</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value="Alex Morgan (You)"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-600 cursor-not-allowed"
                disabled
              />
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Remarks Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Remarks <span className="text-gray-500 font-normal">(Optional)</span>
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            placeholder="Any specific notes regarding the client's financial needs or background..."
            rows="4"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => onNavigate('clients')}
            className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Submit Referral
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewReferralPage;