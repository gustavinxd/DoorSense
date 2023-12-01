'use client'

import { SelectHTMLAttributes, ReactNode, forwardRef, useId, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement> &{
  label?: string;
  helperText?: string;
  icon?: ReactNode;
  actionIcon?: ReactNode;
  initialDoorsense?: string;
  options: string[]; // Adicione as opções do dropdown aqui
};

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ name = '', label, helperText = '', icon, actionIcon, initialDoorsense, options, ...props }, ref) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    // const [valuesOption, setValuesOption] = useState(options)
    
    // useEffect(() =>{
    //   const indexValue = valuesOption.indexOf(initialDoorsense);
    //   if (indexValue !== -1) {
    //     setValuesOption(options.splice(indexValue, 1));
    //   }
    // },[options])

    return (
      <div className={`flex flex-col justify-start relative gap-3 text-start`}>
        <div className={`absolute ${hasError ? `bottom-10` : `bottom-2`}`}>{icon}</div>

        <label
          className={twMerge(`text-base ${hasError ? `text-light-red` : `text-gray-500`} dark:${hasError ? `text-light-red` : `text-gray-400`}
                              duration-300  transform peer-focus:${hasError ? `text-light-red` : `text-primary-100`} 
                              peer-focus:dark:${hasError ? `text-light-red` : `text-primary-100`}
                              `, props.className)}
          htmlFor={inputId}
        >
          {label}
        </label>

        <select
          name={name}
          ref={ref}
          className={`px-9 lg:w-80 xl:w-80 pb-2 border-b-2 ${hasError ? `border-light-red` : `border-primary-100`} 
                      bg-transparent outline-none
                      peer-focus:${hasError ? `text-light-red` : `text-primary-100`} 
                      dark:text-gray-500 dark:placeholder:${hasError ? `text-light-red` : `text-neutral-500`} 
                      dark:peer-focus:${hasError ? `text-light-red` : `text-primary-100`} text-base`}
          id={inputId}
          {...props}
        >
          {/* {initialDoorsense === '' ? (<option value="" >Selecione um Doorsense</option>) : (<option value={initialDoorsense} >{initialDoorsense}</option>) } */}

          <option value="" >Selecione um Doorsense</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {actionIcon}

        {hasError && (<p className={`text-light-red font-normal italic text-sm`}>{helperText}</p>)}
      </div>
    );
  }
);
