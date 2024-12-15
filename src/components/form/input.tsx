

type InputProps = React.ComponentProps<'input'>&{
    label:string;
    error?:string;
}

export default function Input({label, error, ...props}:InputProps){

    return(
        <div className='flex flex-col gap-2'>
            <label htmlFor={label}>{label}</label>
            <input 
                type="text" 
                name={label} 
                id={props.id} 
                {...props}
                className='px-2 border-2 rounded-md h-10 w-full text-lg' 
            />

            {error && <p className='text-red-500'>Preencha o campo corretamente</p> }

            
        </div>
    )
}