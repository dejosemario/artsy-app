import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "gradient";
  renderAs?: "button" | "link";
  href?: string;
};




const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(

    
  )
