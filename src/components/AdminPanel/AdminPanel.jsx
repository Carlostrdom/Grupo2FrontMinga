import React, { useState } from 'react';
import { User } from 'lucide-react';
import Switch from 'react-switch'; 

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [activeStates, setActiveStates] = useState({
    'Blue Team': true,
    'Red Team': true,
    'Orange Team': true,
    'Purple Team': true,
    'John Doe': true,
    'Jane Smith': true,
  });

  const companies = [
    { name: 'Blue Team', website: 'www.blueteam.com', color: '#0000FF' },
    { name: 'Red Team', website: 'www.redteam.com', color: '#FF0000' },
    { name: 'Orange Team', website: 'www.orangeteam.com', color: '#FFA500' },
    { name: 'Purple Team', website: 'www.purpleteam.com', color: '#800080' },
  ];

  const authors = [
    { name: 'John Doe', website: 'john.author.com', color: '#4A90E2' },
    { name: 'Jane Smith', website: 'jane.author.com', color: '#50E3C2' },
  ];

  const handleSwitchChange = (name) => {
    setActiveStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="relative -mt-20 px-8 max-w-[80%] mx-auto bg-white rounded-lg shadow-sm p-6">
     
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#FF6B2B]">Entities</h2>
      </div>

    
      <div className="flex mb-6">
        <div className="flex-1 border-b border-gray-200">
          <button
            className={`px-8 py-3 text-lg font-medium transition-colors ${
              activeTab === 'companies'
                ? 'text-white bg-orange-500 border-b-2 border-[#FF6B2B]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('companies')}
          >
            Companies
          </button>
        </div>
        <div className="flex-1 border-b border-gray-200">
          <button
            className={`px-8 py-3 text-lg font-medium transition-colors ${
              activeTab === 'authors'
                ? 'text-white bg-orange-500 border-b-2 border-[#FF6B2B]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('authors')}
          >
            Authors
          </button>
        </div>
      </div>
    <div className="space-y-4">
        {activeTab === 'companies' ? (
          companies.map((company) => (
            <div
              key={company.name}
              className="grid grid-cols-[auto,2fr,2fr,auto,auto] gap-4 items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <User className="w-5 h-5 text-gray-400" />
              <div className="text-sm font-medium">{company.name}</div>
              <div className="text-sm text-gray-500">{company.website}</div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: company.color }}
              />
              <Switch
                checked={activeStates[company.name]}
                onChange={() => handleSwitchChange(company.name)}
                onColor="#FF6B2B"
                offColor="#ccc"
              />
            </div>
          ))
        ) : (
          authors.map((author) => (
            <div
              key={author.name}
              className="grid grid-cols-[auto,2fr,2fr,auto,auto] gap-4 items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <User className="w-5 h-5 text-gray-400" />
              <div className="text-sm font-medium">{author.name}</div>
              <div className="text-sm text-gray-500">{author.website}</div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: author.color }}
              />
              <Switch
                checked={activeStates[author.name]}
                onChange={() => handleSwitchChange(author.name)}
                onColor="#FF6B2B"
                offColor="#ccc"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

