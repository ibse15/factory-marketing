import React from 'react';
import { Module } from '../types';
import ModuleCard from './ModuleCard';
import Icon from './Icon';

interface DashboardProps {
  modules: Module[];
  onModuleClick: (moduleId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ modules, onModuleClick }) => {
  const dashboardStats = [
    { label: 'الوحدات النشطة', value: '6', icon: 'layers' },
    { label: 'الحملات', value: '24', icon: 'campaign' },
    { label: 'الأداء', value: '94%', icon: 'check-circle' },
    { label: 'آخر تحديث', value: 'منذ دقيقتين', icon: 'clock' },
  ];

  return (
    <div className="page-transition">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 text-emerald-600 font-medium mb-4">
            <Icon name="zap" className="w-4 h-4" />
            <span className="text-sm">منصة الذكاء التسويقي</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            مركز القيادة التسويقي
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mb-8">
            وحّد عملياتك التسويقية مع أدوات مدعومة بالذكاء الاصطناعي للنمو والمحتوى والتحليلات والأتمتة.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dashboardStats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-slate-50 rounded-xl p-4 border border-slate-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <Icon name={stat.icon} className="w-4 h-4" />
                  <span className="text-xs font-medium">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">وحدات التسويق</h2>
          <span className="text-sm text-slate-400">{modules.length} وحدات متاحة</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={onModuleClick}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;