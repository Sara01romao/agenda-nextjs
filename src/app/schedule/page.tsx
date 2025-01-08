import Calender from "@/components/calender";
import Link from "next/link";


export default function Schedule() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex items-start gap-5">
            <Calender/>
            
            <div>
              <h1 className="text-2xl font-bold mb-8">Agendamentos (1)</h1>

              <div className="flex justify-between w-full pr-4  mb-9">
                  <div className="relative">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder="Buscar..."
                      className="px-2 w-full rounded-md border-gray-200 py-2 pe-10 border"

                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                      <button type="button" className="text-gray-600 hover:text-gray-700">
                        <span className="sr-only">Search</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>

                  <Link href={'/schedule/create'}  className="flex items-center gap-2 h-9 rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-950">
  
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1V5.75M6 10.5V5.75M6 5.75H11M6 5.75H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                      Novo
                  </Link>

              </div>
              <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nome</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Data</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                        <th className="px-4 py-2"></th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Lady gaga Santos...</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">20-23 de jan. de 2025</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="flex items-baseline gap-1"><span className="p-1 rounded-full h-0.5 w-0.5 bg-green-500"></span>Pago</p></td>
                        
                        <td className="whitespace-nowrap px-4 py-2">
                          <Link
                            href={'/schedule/1'}
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                          >
                            View
                          </Link>
                        </td>
                      </tr>

                    
                    </tbody>
                  </table>
              </div>
            </div>
        
        </div>
       
        
      </main>
     
    </div>
  );
}
