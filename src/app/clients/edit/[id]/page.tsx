import { ClientType } from "@/app/api/clients/route";
import EditForm from "@/components/clients/EditForm";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { PiArrowCircleLeft, PiPencilBold} from "react-icons/pi";


type ClientIdParams = {
  params: {
    id: number;
  };
};

export default async function EditClient({ params }: ClientIdParams) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/clients/${id}`, { cache: "no-store" });
  const data = (await response.json()) as ClientType;
  const resultClient = data.cliente;

  return (

    <div className="min-h-screen p-4 pb-20 pt-0 sm:p-4 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
         <Toaster position="top-center" />
        <main className="flex pt-4  flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full ">
            <div className="bg-white rounded-xl  gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
                <div className=" px-3 flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full">
                    <Link href={'/clients'} className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-800">
                        <PiArrowCircleLeft size={30} className=""/>
                        Voltar
                    </Link>
                </div>
        

                <h1 className="relative flex justify-center items-center gap-3 text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] ">
                                        
                    <PiPencilBold size={25}/>
                    Editar Cliente
                </h1>

              
                <EditForm client={resultClient} clientId={id} />
            
           </div>

      </main>
    </div>
    
  );
}
