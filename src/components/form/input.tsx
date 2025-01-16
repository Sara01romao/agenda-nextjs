'use client'
import { useState } from "react";


type InputProps = React.ComponentProps<'input'>&{
    label:string;
    error?:string;
}

export default function Input({label, error, ...props}:InputProps){
    const [value, setValue] = useState(props.value || "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };

    return(
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor={label} className="text-base font-medium">{label}</label>
            <input 
                type="text" 
                name={label} 
                id={props.id} 
                {...props}
                value={value}  // Usando value controlado
                onChange={handleChange} 
                className='px-2 border-2 rounded-md h-10 w-full text-base' 
                
            />

            {error && <p className='text-red-500'>Preencha o campo corretamente</p> }

            
        </div>
    )
}