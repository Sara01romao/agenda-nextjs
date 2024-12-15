'use client'
import Input from "@/components/form/input";
import ClientSearchForm from "@/components/schedule/schedule-create-form";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';


export default function CreatePage(){
    const [selected, setSelected] = useState<Date[] | undefined>([]);
    const handleSelect = (newSelected:any) => {
       
        setSelected(newSelected);

        // console.log(selected)
    };

    
    return(
        <div className=" max-w-7xl mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
         
            <h1 className="text-2xl font-bold mb-8"> Criar Agendamentos</h1>
          <div className="w-full flex justify-between border">
            
            <div>
                <h2>Informações Cliente</h2>
                <div>
                    <ClientSearchForm/>
                </div>

               

            </div>

            <div>
                <DayPicker  mode="multiple" selected={selected} onSelect={handleSelect} />
            </div>
          </div>
            

          
            {selected?.map((item, index) => <p key={index} className="mt-4">Data selecionada: {item.toDateString()}</p>)}
         </main>
        </div>
        
    )
}