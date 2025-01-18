import AddForm from "@/components/clients/AddForm";
import Link from "next/link";
import {PiUserPlusBold } from "react-icons/pi";

export default function AddClient(){

    return(
        <div className="min-h-screen p-4 pb-20 pt-0 sm:p-4 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
            <div className=" pt-4 px-3 flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full">
                <Link href={'/clients'} >Voltar</Link>
            </div>
            <main className="flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full ">
                
                <div className="bg-white rounded-xl  gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
                    <h1 className="relative flex justify-center items-center gap-3 text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] ">
                        
                        <PiUserPlusBold size={25}/>
                        Cadastrar Cliente
                    </h1>

                    <AddForm />
                </div>
            </main>
        </div>
    )
}