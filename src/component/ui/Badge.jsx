import React from 'react';

const variants = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  purple: 'bg-purple-100 text-purple-700',
  red: 'bg-red-100 text-red-700',
  gray: 'bg-gray-100 text-gray-700',
  yellow: 'bg-yellow-100 text-yellow-700'
};

const phaseVariants = {
  'Initiated': 'blue',
  'Valuation': 'purple',
  'Payment': 'orange',
  'Execution': 'blue',
  'Completed': 'green'
};

const Badge = ({
  children,
  variant = 'gray',
  phase,
  size = 'sm',
  className = ''
}) => {
  const colorVariant = phase ? phaseVariants[phase] || 'gray' : variant;
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span className={`inline-block rounded-full font-semibold ${variants[colorVariant]} ${sizeClasses} ${className}`}>
      {children || phase}
    </span>
  );
};

export default Badge;
