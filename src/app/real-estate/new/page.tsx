import FormEspacoAdd from "@/components/real-estate/FormEspacoAdd";
import Link from "next/link";
import { LuHousePlus } from "react-icons/lu";
import { PiArrowCircleLeft } from "react-icons/pi";
import { Toaster } from 'react-hot-toast';



export default function AddSpace(){

    return(
        <div className="min-h-screen p-4 pb-20 pt-0 sm:p-4 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
           <Toaster position="top-center" />
            <main className="flex pt-4  flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full ">
                
                <div className="bg-white rounded-xl  gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
                    <div className=" px-3 flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full">
                        <Link href={'/real-estate'} className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-800">
                            <PiArrowCircleLeft size={30} className=""/>
                            Voltar
                        </Link>
                    </div>
                    <h1 className="relative flex justify-center items-center gap-3 text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] ">
                        
                        <LuHousePlus size={25}/>
                        Cadastrar Espaço
                    </h1>
                     <FormEspacoAdd/>
                   
                </div>
            </main>
        </div>

    )
}