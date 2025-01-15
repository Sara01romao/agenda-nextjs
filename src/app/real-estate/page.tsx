import { PiPencilSimple, PiTrash } from "react-icons/pi";


export default function RealEstate(){

    return(
        <div className="min-h-screen p-4 pb-20 pt-0 sm:p-4 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
                    
                    <main className="flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full ">
                        <h1 className="relative text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] before:h-1 before:bg-[#229BFF] before:w-full before:mx-auto">
                        Imoveis
                        </h1>
        
                        <div className="bg-white rounded-xl flex flex-wrap gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
        
                            <div className="relative overflow-x-auto w-full">
                                <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <thead className="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">Nome</th>
                                        <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">CPF</th>
                                        <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">Data de Cadastro</th>
                                        <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">Telefone</th>
                                        <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">WhatsApp</th>
                                        <th className="px-4 py-2"></th>
                                    </tr>
                                    </thead>
        
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">444.444.444-44</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">(11) 99999-1234</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">(11) 99999-1234</td>
                                            <td className="whitespace-nowrap px-4 py-2 flex items-center gap-3">
                                                <button className="bg-[#E1E1E1] p-1 rounded-md hover:bg-[#C6C6C6]">
                                                      <PiTrash size={24} className="text-[#FF4040]"/>
                                                </button>
        
                                                <button className="bg-[#E1E1E1] p-1 rounded-md hover:bg-[#C6C6C6]">
                                                      <PiPencilSimple size={24} className="text-[#0BB661]"/>
                                                </button>
                                           
                                            </td>
                                        </tr>
        
                                   
                                    </tbody>
                                </table>
                            </div>
        
                        </div>
                    </main>
                </div>
    )
}