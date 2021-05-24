import React from 'react';
import './button.css';

const Button = (props) => {
  const { value = '', color = 'default' } = props;
  return (
    <>
      <button type="submit" {...props} style={{ backgroundColor: `var(--${color})` }} className="button">
        {value}
      </button>
   </>
  );
};
export default Button;
