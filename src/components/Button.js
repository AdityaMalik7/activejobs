import React from 'react';

const Button = ({ variant = 'solid', children, ...props }) => {
  const baseClasses = 'px-4 py-2 font-semibold rounded-3xl';

  const variantClasses = variant === 'outlined' 
    ? 'border-2 border-black' 
    : 'bg-black text-white';

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
