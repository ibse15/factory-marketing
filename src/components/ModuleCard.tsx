import React from 'react';
import { Module } from '../types';
import { getColorClasses } from '../utils/helpers';
import Icon from './Icon';

interface ModuleCardProps {
  module: Module;
  onClick: (moduleId: string) => void;
  delay?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick, delay = 0 }) => {
  const colors = getColorClasses(module.color);

  return (
    <div
      className="module-card cursor-pointer bg-white border border-slate-200 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => onClick(module.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colors.bgLight} ${colors.border} border`}>
          <Icon name={module.icon} className={`w-6 h-6 ${colors.text}`} />
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${colors.bgLight} ${colors.text}`}>
          نشط
        </span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-2">{module.nameAr}</h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-2">{module.descriptionAr}</p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {module.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-lg font-bold text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-400">{stat.labelAr}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-400">{module.features.length} ميزات</span>
        <div className={`flex items-center gap-1 text-sm font-medium ${colors.text}`}>
          عرض التفاصيل
          <Icon name="arrow-left" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;