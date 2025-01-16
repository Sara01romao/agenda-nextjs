import Link from "next/link";

export default function AddClient(){

    return(
        <div className="min-h-screen p-4 pb-20 pt-0 sm:p-4 max-[550px]:px-1 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
            <div className=" pt-4 px-3 flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full">
                <Link href={'/clients'} >Voltar</Link>
            </div>
            <main className="flex flex-col mx-auto row-start-2 items-center sm:items-start max-w-5xl w-full ">
                <h1 className="relative text-2xl font-semibold mb-5 mt-7 ml-5 mr-auto sm:text-left text-gray-800 before:absolute before:inset-x-0 before:bottom-[-5px] before:h-1 before:bg-[#229BFF] before:w-full before:mx-auto">
                 Cadastrar
                </h1>

                <div className="bg-white rounded-xl flex flex-wrap gap-5 w-full p-8 max-[550px]:px-1 max-sm:flex-col">
                    

                </div>
            </main>
        </div>
    )
}