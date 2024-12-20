'use client'
import { useState } from "react";
import Input from "../form/input";

type  clients = {
    id: number;
    name: string;
    phone: string;
    email: string;
}

const clientsList:clients[] = [
    { id: 1, name: "João Silva", phone: "99999-9999", email: "joao@email.com" },
    { id: 2, name: "Maria Oliveira", phone: "98888-8888", email: "maria@email.com" },
    { id: 3, name: "Carlos Mendes", phone: "97777-7777", email: "carlos@email.com" }
  ];

export default function ClientSearchForm(){

    const [search, setSearch] = useState<string>('');
    // const [notFind, setNotFind] = useState<boolean>(true);


   function handleSearch(){

       clientsList.find(item => item.name === search);
       console.log(search)
    }

    return(

        <div>
            <div>
                <div className="flex items-end">
                   
                    <Input 
                        label="Pesquisar Cliente" 
                        name="clientSeach" 
                        id="clientSeach"  
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        
                    />

                    <button onClick={handleSearch} className="flex items-center justify-center w-10 border h-10">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7973 16.8188L13.469 12.4914C14.7236 10.9852 15.3491 9.05344 15.2156 7.09784C15.0821 5.14224 14.1998 3.31339 12.7522 1.99175C11.3046 0.670112 9.40324 -0.0425679 7.44359 0.00196836C5.48394 0.0465046 3.6169 0.844828 2.23087 2.23087C0.844828 3.6169 0.0465046 5.48394 0.00196836 7.44359C-0.0425679 9.40324 0.670112 11.3046 1.99175 12.7522C3.31339 14.1998 5.14224 15.0821 7.09784 15.2156C9.05344 15.3491 10.9852 14.7236 12.4914 13.469L16.8188 17.7973C16.883 17.8616 16.9593 17.9126 17.0433 17.9473C17.1272 17.9821 17.2172 18 17.3081 18C17.3989 18 17.4889 17.9821 17.5729 17.9473C17.6568 17.9126 17.7331 17.8616 17.7973 17.7973C17.8616 17.7331 17.9126 17.6568 17.9473 17.5729C17.9821 17.4889 18 17.3989 18 17.3081C18 17.2172 17.9821 17.1272 17.9473 17.0433C17.9126 16.9593 17.8616 16.883 17.7973 16.8188ZM1.40222 7.62624C1.40222 6.39525 1.76726 5.1919 2.45116 4.16836C3.13506 3.14483 4.10712 2.34708 5.24441 1.876C6.38171 1.40492 7.63315 1.28166 8.84049 1.52182C10.0478 1.76197 11.1568 2.35475 12.0273 3.2252C12.8977 4.09564 13.4905 5.20466 13.7307 6.412C13.9708 7.61934 13.8476 8.87078 13.3765 10.0081C12.9054 11.1454 12.1077 12.1174 11.0841 12.8013C10.0606 13.4852 8.85724 13.8503 7.62624 13.8503C5.97609 13.8484 4.39405 13.1921 3.22722 12.0253C2.06038 10.8584 1.40405 9.2764 1.40222 7.62624Z" fill="#858585"/>
                        </svg>
                    </button>
                </div>
                
               
                
                <div id="results-container" className="results"> não encontrado</div>  
               
            </div>

             <form action="" className="border mt-4">
                <div>
                    <Input label="Nome" name="nameClient"  id="nameClient" />

                </div>

            </form>
        </div>
       
    )
}