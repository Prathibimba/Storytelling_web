import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-2 font-display font-semibold transition-all duration-300 rounded relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-primary/70 text-white border border-primary/50 hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]',
    secondary: 'bg-secondary/70 text-white border border-secondary/50 hover:bg-secondary/90 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]',
    outline: 'bg-transparent text-white border border-accent/50 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:bg-inherit hover:text-inherit hover:border-inherit hover:shadow-none'
    : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  const content = (
    <>
      {children}
      {!disabled && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.7 }}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default Button;