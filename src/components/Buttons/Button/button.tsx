import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnName: string | ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'submit', btnName, ...props }, ref) => {
    return (
      //Button root
      <>
        {/*Botao*/}
        <button
          type={type}
          className={twMerge(
            `hover:scale-150 text-sm focus:outline-none`,
            props.className
          )}
          {...props}
          ref={ref}
        >
          {/*Nome do botao*/}
          {btnName}
        </button>
      </>
    );
  }
);
