import React from 'react';
import { Module } from '../types';
import { getColorClasses } from '../utils/helpers';
import Icon from './Icon';

interface ModuleDetailsProps {
  module: Module;
  onBack: () => void;
}

const ModuleDetails: React.FC<ModuleDetailsProps> = ({ module, onBack }) => {
  const colors = getColorClasses(module.color);

  return (
    <div className="page-transition">
      <div className={`${colors.bg} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <Icon name="arrow-right" className="w-4 h-4" />
            العودة للرئيسية
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <Icon name={module.icon} className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{module.nameAr}</h1>
              <p className="text-white/80">{module.name}</p>
            </div>
          </div>

          <p className="text-lg text-white/90 max-w-2xl">{module.descriptionAr}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {module.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <p className="text-sm text-slate-400 mb-1">{stat.labelAr}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <span className={`text-sm font-medium ${colors.text}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">الميزات الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {module.featuresAr.map((feature, index) => (
              <div
                key={index}
                className="feature-item flex items-center gap-3 p-3 rounded-lg border border-slate-100 transition-all duration-200 hover:bg-slate-50"
              >
                <div className={`p-2 rounded-lg ${colors.bgLight}`}>
                  <Icon name="check-circle" className={`w-4 h-4 ${colors.text}`} />
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className={`flex-1 ${colors.bg} text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
            <Icon name="plus" className="w-5 h-5" />
            بدء الاستخدام
          </button>
          <button className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 px-6 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Icon name="file-text" className="w-5 h-5" />
            عرض التوثيق
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetails;