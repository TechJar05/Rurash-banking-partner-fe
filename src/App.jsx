import React, { useState } from 'react';
import { Search, Bell, Menu } from 'lucide-react';

// Pages
import Dashboard from './pages/Dashboard';
import MyClientsPage from './pages/MyClientsPage';
import ClientDetailPage from './pages/ClientDetailPage';
import NewReferralPage from './pages/NewReferralPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';


// Components

import RegistrationPage from './component/RegistrationPage';
import LoginPage from './component/Loginpage';
import Sidebar from './pages/Sidebar';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setActivePage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
    setActivePage('dashboard');
    setSelectedClient(null);
  };

  const handleNavigate = (page, clientData) => {
    setActivePage(page);
    if (clientData) {
      setSelectedClient(clientData);
    }
    setIsSidebarOpen(false);
  };

  /* ---------------------------
     AUTH PAGES (LOGIN / REGISTER)
  ---------------------------- */
  if (!isAuthenticated) {
    return (
      <div className="App">
        {currentPage === 'login' ? (
          <LoginPage
            onNavigateToRegister={() => setCurrentPage('register')}
            onLogin={handleLogin}
          />
        ) : (
          <RegistrationPage
            onNavigateToLogin={() => setCurrentPage('login')}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
     
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

     
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      
      <div className="flex-1 flex flex-col min-w-0">
       
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
 
            <h1 className="text-lg font-bold text-gray-900 hidden sm:block">
              {activePage === 'dashboard' && 'Dashboard'}
              {activePage === 'clients' && 'My Clients'}
              {activePage === 'newReferral' && 'New Referral'}
              {activePage === 'clientDetail' && 'Client Detail'}
              {activePage === 'chat' && 'Chat'}
              {activePage === 'profile' && 'Profile'}
            </h1>
 
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Client or Case ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

          
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-4 h-4" />
              </button>

              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  AM
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {activePage === 'dashboard' && (
          <Dashboard onLogout={handleLogout} onNavigate={handleNavigate} />
        )}

        {activePage === 'clients' && (
          <MyClientsPage onNavigate={handleNavigate} />
        )}

        {activePage === 'newReferral' && (
          <NewReferralPage onNavigate={handleNavigate} />
        )}

        {activePage === 'clientDetail' && (
          <ClientDetailPage
            clientData={selectedClient}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        )}
        {activePage === 'chat' && <ChatPage />}
        {activePage === 'profile' && <ProfilePage />}

      </div>
    </div>
  );
}

export default App;
