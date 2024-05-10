import React from 'react';

interface ButtonProps {
  variant: 'big' | 'small';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const buttonClasses = `
    ${variant === 'big' ? 'py-2 px-6' : 'py-1 px-2'}
    text-white bg-green-500 rounded-lg
    hover:bg-green-600 transition-colors
  `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;