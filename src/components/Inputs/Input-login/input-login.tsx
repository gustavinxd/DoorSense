'use client'

import { InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

type InputLoginProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  icon?: ReactNode;
  actionIcon?: ReactNode
};

export const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  (
    { name = '', type = 'text', label, helperText = '', icon, actionIcon, ...props },
    ref
  ) => {
    
    //useId para acessebilidade
    const inputId = useId();
    //helperText é o texto que aparece ao ter um campo errado no input, hasError é a variavel usada para fazer a alternancia de cores entre certo(azul) e errado (vermelho) 
    const hasError = helperText.length > 0;

    //Front
    return (
      //Div root 
      <div
        className={`flex flex-col justify-start relative gap-3 ${hasError && 'mb-7'} text-start`}
      >
        {/* Icone */}
            
        <div className={`absolute bottom-2`}>
          {icon}
        </div>

           {/* Label */}
        <label
          className={twMerge(`text-base ${hasError ? `text-light-red` : `text-gray-500`} dark:${hasError ? `text-light-red` : `text-gray-200`}
                              duration-300  transform peer-focus:${hasError ? `text-light-red` : `text-primary-100`} 
                              peer-focus:dark:${hasError ? `text-light-red` : `text-primary`}
                              `,props.className)}
          htmlFor={inputId}
        >
          {label}
        </label>

        {/* Campo de input */}
        <div className='w-full relative'>

          <input
            type={type}
            name={name}
            ref={ref}
            className={`${icon ? 'px-9' : 'px-4'} lg:w-80 xl:w-80 pb-2 border-b-2 ${hasError ? `border-light-red` : `border-primary-100`} 
                        bg-transparent outline-none
                        peer-focus:${hasError ? `text-light-red` : `text-primary-100`} 
                        dark:text-gray-200 dark:placeholder:${hasError ? `text-light-red` : `text-gray-100`} 
                        dark:peer-focus:${hasError ? `text-light-red` : `text-primary-100`} text-base`}
            id={inputId}
            {...props}
          />

          <div className={`absolute right-4 bottom-1`}>
            {actionIcon}
          </div>

          {/* Mensagem de erro */}
          {hasError && (<p className={`absolute mt-2 text-light-red font-normal italic text-sm`}>{helperText}</p>)}
          
        </div>
        
      </div>
    );
  }
);
