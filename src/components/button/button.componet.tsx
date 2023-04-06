import React from 'react';
import styles from './button.module.css';

export default function Button({
  title,
  type,
  handleClick,
}: {
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}) {
  const handleButtonType = (type?: string) => {
    if (type === 'button') {
      return styles.btn;
    } else if (type === 'submit') {
      return styles.submitBtn;
    } else if (type === 'reset') {
      return styles.resetBtn;
    }
    return styles.btn;
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={handleButtonType(type)}
    >
      {title}
    </button>
  );
}
