import React from 'react';
import { NavItem } from '../types';
import Icon from './Icon';

interface ModuleNavigationProps {
  items: NavItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

const ModuleNavigation: React.FC<ModuleNavigationProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Icon name="zap" className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-bold text-xl tracking-tight">MarketingOS</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`nav-item flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-white/15 text-white'
                    : 'text-slate-400 hover:bg-white/10'
                }`}
              >
                <Icon name={item.icon} className="w-4 h-4" />
                {item.labelAr}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
              <Icon name="bell" className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            </button>
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-emerald-400 transition-colors">
              م
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModuleNavigation;