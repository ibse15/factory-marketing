export const getColorClasses = (color: string): {
  bg: string;
  bgLight: string;
  text: string;
  border: string;
  gradient: string;
} => {
  const colors: Record<string, { bg: string; bgLight: string; text: string; border: string; gradient: string }> = {
    emerald: {
      bg: 'bg-emerald-500',
      bgLight: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      gradient: 'bg-gradient-to-br from-emerald-400 to-cyan-400',
    },
    blue: {
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'bg-gradient-to-br from-blue-400 to-indigo-400',
    },
    violet: {
      bg: 'bg-violet-500',
      bgLight: 'bg-violet-50',
      text: 'text-violet-600',
      border: 'border-violet-200',
      gradient: 'bg-gradient-to-br from-violet-400 to-purple-400',
    },
    amber: {
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      gradient: 'bg-gradient-to-br from-amber-400 to-orange-400',
    },
    rose: {
      bg: 'bg-rose-500',
      bgLight: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-200',
      gradient: 'bg-gradient-to-br from-rose-400 to-pink-400',
    },
    cyan: {
      bg: 'bg-cyan-500',
      bgLight: 'bg-cyan-50',
      text: 'text-cyan-600',
      border: 'border-cyan-200',
      gradient: 'bg-gradient-to-br from-cyan-400 to-teal-400',
    },
  };

  return colors[color] || colors.emerald;
};

export const getIconComponent = (iconName: string): string => {
  const icons: Record<string, string> = {
    'trending-up': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    'filter': 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
    'file-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    'bar-chart': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    'zap': 'M13 10V3L4 14h7v7l9-11h-7z',
    'users': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    'home': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    'layers': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    'campaign': 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    'check-circle': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    'clock': 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  };

  return icons[iconName] || icons['trending-up'];
};