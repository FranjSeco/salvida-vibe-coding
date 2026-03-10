import type { LucideIcon } from '../ui/icons';
import { motion } from 'motion/react';
import React from 'react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
  colorClass: string;
  iconBgClass: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  trend,
  colorClass,
  iconBgClass,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-lg ${iconBgClass}`}>
        <Icon size={20} className={colorClass} />
      </div>
      {trend && (
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            trend.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-amber-600 bg-amber-50'
          }`}
        >
          {trend}
        </span>
      )}
    </div>
    <p className="text-slate-500 text-sm font-medium">{label}</p>
    <h3 className="text-3xl font-bold mt-1">{value}</h3>
  </motion.div>
);
