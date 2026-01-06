import React from 'react';
import { TrendingUp } from 'lucide-react';

const StatCard = ({
  icon: Icon,
  label,
  value,
  subtitle,
  trend,
  progress,
  bgColor = 'bg-blue-50',
  iconColor = 'text-blue-600',
  onClick
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center shrink-0`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </div>
        )}
      </div>

      <div className="text-xs font-semibold text-gray-500 mb-0.5">{label}</div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs text-gray-600 mb-2">{subtitle}</div>

      {progress !== undefined && (
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-blue-400 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default StatCard;
