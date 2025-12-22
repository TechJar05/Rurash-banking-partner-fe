 
import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, Building2, Phone, MapPin, Check } from 'lucide-react';

const RegistrationPage = ({ onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    bankName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#1a365d] relative overflow-hidden flex">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white w-full min-h-[300px] lg:min-h-screen">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#60a5fa] rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="white"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="white"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="white"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="white"/>
              </svg>
            </div>
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl font-bold text-white">Rurash</span>
              <span className="text-xl sm:text-2xl font-normal text-[#60a5fa]">Partners</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 lg:space-y-6 max-w-lg my-6 lg:my-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Join our{' '}
              <span className="text-[#60a5fa]">Partner Network</span>
            </h1>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Become a Rurash partner and unlock access to our comprehensive referral platform. Connect with clients, track progress, and grow your business with our advanced financial tools.
            </p>

            {/* Benefits */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#60a5fa]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Real-time Referral Tracking</h3>
                  <p className="text-gray-400 text-xs">Monitor client progress and earnings instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#60a5fa]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Dedicated Support Team</h3>
                  <p className="text-gray-400 text-xs">24/7 assistance for all your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#60a5fa]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Advanced Analytics Dashboard</h3>
                  <p className="text-gray-400 text-xs">Data-driven insights for better decisions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="hidden lg:block">
            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center">
                  <Lock className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <span className="text-sm text-gray-300">End-to-End Encryption</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <span className="text-sm text-gray-300">High Velocity Banking</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500">
              © 2026 RURASH FINCORP LTD. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-start justify-center px-8 py-8 sm:px-12 lg:px-20 bg-[#f5f5f5] min-h-screen lg:min-h-0">
        <div className="w-full max-w-md pt-4">
          {/* Back to Login Link */}
          <div className="flex justify-start mb-8">
            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Login
            </button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Partner Registration
            </h2>
            <p className="text-sm text-[#3b82f6]">
              Fill in your details to apply for partner access
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Bank Name */}
            <div>
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-900 mb-2">
                Bank/Institution Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="bankName"
                  name="bankName"
                  type="text"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Enter institution name"
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
              </div>
            </div>

            {/* Contact Person */}
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-900 mb-2">
                Contact Person
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Business Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@bank.com"
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State/Country"
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="block w-full pl-11 pr-12 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="block w-full pl-11 pr-12 py-3 bg-white border border-gray-300 rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start pt-2">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-[#3b82f6] focus:ring-[#3b82f6] border-gray-300 rounded cursor-pointer mt-0.5"
                required
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                I agree to the{' '}
                <button type="button" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
                  Terms of Service
                </button>
                {' '}and{' '}
                <button type="button" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#60a5fa] text-white py-3 px-4 rounded-md text-base font-semibold hover:bg-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] transition-all flex items-center justify-center gap-2 mt-6"
            >
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Already have account */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={onNavigateToLogin}
                className="text-gray-900 hover:text-[#3b82f6] font-semibold transition-colors"
              >
                Log In
              </button>
            </p>
          </div>

          {/* Mobile Copyright */}
          <div className="lg:hidden text-center mt-8">
            <div className="text-xs text-gray-500">
              © 2026 RURASH FINCORP LTD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;