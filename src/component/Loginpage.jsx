 
import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';

const LoginPage = ({ onNavigateToRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    keepLoggedIn: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Static credentials for demo
  const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validate credentials
    if (
      formData.username === VALID_CREDENTIALS.username &&
      formData.password === VALID_CREDENTIALS.password
    ) {
      console.log('Login successful:', formData);
      // Trigger login
      if (onLogin) {
        onLogin();
      }
    } else {
      // Show error message
      setError('Invalid username or password. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
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
              Secure access to<br />your{' '}
              <span className="text-[#60a5fa]">Referral Dashboard</span>
            </h1>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Manage client cases, track referral progress, and access financial tools designed for efficiency. Your gateway to seamless banking collaboration.
            </p>
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

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-start justify-center px-8 py-8 sm:px-12 lg:px-20 bg-[#f5f5f5] min-h-screen lg:min-h-0">
        <div className="w-full max-w-md pt-4">
          {/* Need Help Link */}
          <div className="flex justify-end mb-16">
            <button className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Need Help? <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Partner Portal Login
            </h2>
            <p className="text-sm text-[#3b82f6]">
              Please enter your credentials to access client referrals
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* Demo Credentials Info */}
          <div className="mb-5 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">Demo Credentials:</p>
            <p className="text-sm text-blue-700">Username: <span className="font-mono font-semibold">admin</span></p>
            <p className="text-sm text-blue-700">Password: <span className="font-mono font-semibold">admin123</span></p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
                Username or Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className={`block w-full pl-11 pr-4 py-3 bg-white border rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all ${
                    error 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-[#3b82f6] focus:border-[#3b82f6]'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-[#3b82f6] hover:text-[#2563eb] font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>
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
                  placeholder="Enter your password"
                  className={`block w-full pl-11 pr-12 py-3 bg-white border rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all ${
                    error 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-[#3b82f6] focus:border-[#3b82f6]'
                  }`}
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

            {/* Keep me logged in */}
            <div className="flex items-center">
              <input
                id="keepLoggedIn"
                name="keepLoggedIn"
                type="checkbox"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
                className="h-4 w-4 text-[#3b82f6] focus:ring-[#3b82f6] border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="keepLoggedIn" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#60a5fa] text-white py-3 px-4 rounded-md text-base font-semibold hover:bg-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] transition-all flex items-center justify-center gap-2 mt-6"
            >
              Log In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Apply for Access */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              New bank partner?{' '}
              <button 
                onClick={onNavigateToRegister}
                className="text-gray-900 hover:text-[#3b82f6] font-semibold transition-colors"
              >
                Apply for Access
              </button>
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 mt-8">
            <button className="text-sm text-[#3b82f6] hover:text-[#2563eb] transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-[#3b82f6] hover:text-[#2563eb] transition-colors">
              Terms of Service
            </button>
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

export default LoginPage;