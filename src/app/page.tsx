import Calender from "@/components/calender";
import { PiCalendarDots, PiChartLine, PiHouseSimple, PiUsersThree } from "react-icons/pi";


export default function Home(){

    return(
        <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 pt-0  sm:p-20 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col row-start-2 items-center sm:items-start max-w-5xl w-full ">

                <h1 className="relative text-2xl font-semibold  mb-5 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] before:h-1 before:bg-[#229BFF] before:w-full before:mx-auto">
                    Início
                </h1>


                <div className="bg-white rounded-xl flex flex-wrap  gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
                    <div className="mx-auto">
                        <Calender/>
                    </div>

                    <div className="mx-auto">
                        <h2 className="mb-8 font-medium text-xl flex items-center gap-2">
                            <PiChartLine size={25}/>

                            Informações
                        </h2>
                    
                        <div className=" flex flex-col gap-5  border-pink-100 ">
                            <div className="flex items-center gap-5 bg-[#F3F4F6] px-5 py-4 rounded-lg">
                                <div className="bg-white rounded-full p-2">
                                    <PiCalendarDots size={25} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Agendamentos</h3>
                                    <p className="text-[#229BFF] text-xl font-semibold">10</p>
                                </div>
                                
                            </div>

                            <div className="flex gap-3">
                                <div className="flex w-full items-center gap-4 bg-[#F3F4F6] px-5 py-4 rounded-lg" >
                                    <div className="bg-white rounded-full p-2">
                                        <PiUsersThree size={25} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Clientes</h3>
                                        <p className="text-[#229BFF] text-xl font-semibold">10</p>
                                    </div>
                                            
                                </div>

                                <div className="flex w-full items-center gap-4 bg-[#F3F4F6] px-5 py-2 rounded-lg" >
                                    <div className="bg-white rounded-full p-2">
                                        <PiHouseSimple size={25} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Imóveis</h3>
                                        <p className="text-[#229BFF] text-xl font-semibold">10</p>
                                    </div>
                                            
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}