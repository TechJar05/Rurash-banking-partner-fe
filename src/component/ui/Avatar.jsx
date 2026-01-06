import React from 'react';

const sizes = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-14 h-14 text-lg'
};

const Avatar = ({
  initials,
  src,
  alt = '',
  size = 'md',
  gradient = true,
  className = ''
}) => {
  const baseClasses = 'rounded-full flex items-center justify-center font-semibold shrink-0';
  const gradientClasses = gradient
    ? 'bg-gradient-to-br from-blue-300 to-blue-500 text-white'
    : 'bg-gray-200 text-gray-600';

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizes[size]} ${baseClasses} object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`${sizes[size]} ${baseClasses} ${gradientClasses} ${className}`}>
      {initials}
    </div>
  );
};

export default Avatar;
