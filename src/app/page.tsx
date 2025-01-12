// app/page.tsx

import Calender from "@/components/calender";
import CardDash from "@/components/cardDash";
import { PiCalendarDots, PiChartLine, PiHouseLine, PiUsersThree } from "react-icons/pi";


type Totals = {
  agendamentos: number;
  clientes: number;
  imoveis: number;
};




export default async function Home() {
    async function fetchTotals(): Promise<Totals> {
        try {
          const response = await fetch('http://localhost:3000/api/totals');
          const result: Totals = await response.json();
          return result;
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
          return {
            agendamentos: 0,
            clientes: 0,
            imoveis: 0,
          };
        }
      }
 
  const { agendamentos, clientes, imoveis } = await fetchTotals();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 pt-0 sm:p-20 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start max-w-5xl w-full ">
        <h1 className="relative text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] before:h-1 before:bg-[#229BFF] before:w-full before:mx-auto">
          Início
        </h1>

        <div className="bg-white rounded-xl flex flex-wrap gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
          <div className="mx-auto">
            <Calender />
          </div>

          <div className="mx-auto">
            <h2 className="mb-8 text-2xl font-bold flex items-center gap-2">
              <PiChartLine size={25} />
              Informações
            </h2>

            <div className="flex flex-col gap-5 border-pink-100">
              <CardDash icon={<PiCalendarDots size={25} />} title="Agendamentos" value={agendamentos} />
              <div className="flex gap-3">
                <CardDash icon={<PiUsersThree size={25} />} title="Clientes" value={clientes} />
                <CardDash icon={<PiHouseLine size={25} />} title="Imóveis" value={imoveis} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
