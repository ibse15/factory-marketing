import React, { useState } from 'react';
import { modules, navItems } from './utils/constants';
import { Module } from './types';
import ModuleNavigation from './components/ModuleNavigation';
import Dashboard from './components/Dashboard';
import ModuleDetails from './components/ModuleDetails';

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleNavClick = (id: string) => {
    if (id === 'dashboard') {
      setSelectedModule(null);
      setActiveItem('dashboard');
    } else {
      const module = modules.find((m) => m.id === id);
      if (module) {
        setSelectedModule(module);
        setActiveItem(id);
      }
    }
  };

  const handleModuleClick = (moduleId: string) => {
    const module = modules.find((m) => m.id === moduleId);
    if (module) {
      setSelectedModule(module);
      setActiveItem(moduleId);
    }
  };

  const handleBack = () => {
    setSelectedModule(null);
    setActiveItem('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <ModuleNavigation
        items={navItems}
        activeItem={activeItem}
        onItemClick={handleNavClick}
      />
      
      <main>
        {selectedModule ? (
          <ModuleDetails module={selectedModule} onBack={handleBack} />
        ) : (
          <Dashboard modules={modules} onModuleClick={handleModuleClick} />
        )}
      </main>
    </div>
  );
};

export default App;