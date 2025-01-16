
import { ClientType } from "../api/clients/route";
import Link from "next/link";
import TableClients from "@/components/clients/tableClients";



async function fetchClients(): Promise<ClientType[]> {
    const response = await fetch('http://localhost:3000/api/clients'); 
    const data = await response.json();
    return data.clientes;  
  }


export default async function Clients(){
    
    const clientes = await fetchClients();

    return(
        <div className="min-h-screen p-4 pb-20 pt-0 sm:p-4 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
            
            <main className="flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full ">
                <h1 className="relative text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] before:h-1 before:bg-[#229BFF] before:w-full before:mx-auto">
                 Clientes
                </h1>

                <div className="bg-white rounded-xl flex flex-wrap gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
                    <Link href={'/clients/new'}  className="flex items-center gap-2 h-9 rounded bg-gray-800 px-4 py-2 text-sm ml-auto font-medium text-white hover:bg-gray-950">
  
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V5.75M6 10.5V5.75M6 5.75H11M6 5.75H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Novo
                    </Link>
                    <div className="relative overflow-x-auto w-full">
                        <TableClients  clientes={clientes}/>
                        
                    </div>

                </div>
            </main>
        </div>
    )
}