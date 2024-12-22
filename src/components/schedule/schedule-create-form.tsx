'use client'
import { useState } from "react";
import Input from "../form/input";
import Link from "next/link";

import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

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
    const [filteredNames, setFilteredNames] = useState<string[]>([]);
    const [notFind, setNotFind] = useState<boolean>(false);
    const [client, setClient] = useState<clients>();
    const [selected, setSelected] = useState<Date[] | undefined>([]);


    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setSearch(value);
        console.log(search.length)
      
        if (value === "") {
          setFilteredNames([]);
        } else {
          
          const nameExists = clientsList.some((client) =>
            client.name.toLowerCase().includes(value.toLowerCase())
          );
      
          if (nameExists) {
            setFilteredNames(
              clientsList
                .filter((client) => client.name.toLowerCase().includes(value.toLowerCase()))
                .map((client) => client.name) 
            );

            setNotFind(false)
          } else {
            setFilteredNames([]); 
            setNotFind(true)
          }
        }
      };
    
    
    function handleSelectName(name: string){
          setSearch(name); 
          setFilteredNames([]); 
        
        
          const selectedClient = clientsList.find((client) => client.name === name);
        
          if (selectedClient) {
            setClient(selectedClient)
            console.log("Cliente selecionado:", selectedClient);
          }
        };
        
        
    function handleSearch(){

        const clientFind = clientsList.some((item: { name: string }) => item.name === search);

        console.log(search, clientFind)
      }


    function handleSelect(newSelected:any){
       
      setSelected(newSelected);

      // console.log(selected)
  };


    return(

        <div className="flex justify-between w-full">
          <div className="max-w-lg w-full p-3">
              <div className="relative  pb-3 bg-[#f9f9f9] p-3">
                  <div className="flex items-end w-full ">
                    
                      <Input 
                          label="Pesquisar Cliente" 
                          name="clientSeach" 
                          id="clientSeach"  
                          value={search}
                          onChange={handleChange}
                          
                      />

                      <div 
                          onClick={handleSearch} 
                          className=" absolute right-3 flex items-center justify-center w-10  h-10">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7973 16.8188L13.469 12.4914C14.7236 10.9852 15.3491 9.05344 15.2156 7.09784C15.0821 5.14224 14.1998 3.31339 12.7522 1.99175C11.3046 0.670112 9.40324 -0.0425679 7.44359 0.00196836C5.48394 0.0465046 3.6169 0.844828 2.23087 2.23087C0.844828 3.6169 0.0465046 5.48394 0.00196836 7.44359C-0.0425679 9.40324 0.670112 11.3046 1.99175 12.7522C3.31339 14.1998 5.14224 15.0821 7.09784 15.2156C9.05344 15.3491 10.9852 14.7236 12.4914 13.469L16.8188 17.7973C16.883 17.8616 16.9593 17.9126 17.0433 17.9473C17.1272 17.9821 17.2172 18 17.3081 18C17.3989 18 17.4889 17.9821 17.5729 17.9473C17.6568 17.9126 17.7331 17.8616 17.7973 17.7973C17.8616 17.7331 17.9126 17.6568 17.9473 17.5729C17.9821 17.4889 18 17.3989 18 17.3081C18 17.2172 17.9821 17.1272 17.9473 17.0433C17.9126 16.9593 17.8616 16.883 17.7973 16.8188ZM1.40222 7.62624C1.40222 6.39525 1.76726 5.1919 2.45116 4.16836C3.13506 3.14483 4.10712 2.34708 5.24441 1.876C6.38171 1.40492 7.63315 1.28166 8.84049 1.52182C10.0478 1.76197 11.1568 2.35475 12.0273 3.2252C12.8977 4.09564 13.4905 5.20466 13.7307 6.412C13.9708 7.61934 13.8476 8.87078 13.3765 10.0081C12.9054 11.1454 12.1077 12.1174 11.0841 12.8013C10.0606 13.4852 8.85724 13.8503 7.62624 13.8503C5.97609 13.8484 4.39405 13.1921 3.22722 12.0253C2.06038 10.8584 1.40405 9.2764 1.40222 7.62624Z" fill="#858585"/>
                            </svg>
                      </div>
                  </div>
                  
                  {filteredNames.length > 0 && (
                      <ul className="absolute z-10 w-auto bg-white border rounded-md mt-1 shadow-lg">
                      {filteredNames.map((name, index) => (
                          <li
                          key={index}
                          onClick={() => handleSelectName(name)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                          >
                          {name}
                          </li>
                      ))}
                      </ul>
                  )}

                  {notFind && (
                    
                    <div className="bg-[#F9F9F9] pb-3 "> 
                        <div id="results-container" className="relative z-10 w-full bg-white border rounded-md mt-1 shadow-lg p-2"> 
                            <p>Não encontrado </p>
                        </div>  
                        
                        <Link 
                              href="" 
                              className="w-28 mt-5 ml-auto mr-2 bg-black text-white rounded-md p-1 pr-2 flex items-center justify-center gap-1">
                              
                              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.51539 1L5.51513 5.5M5.51539 10L5.51513 5.5M5.51513 5.5H1H10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>

                              Cadastrar
                          </Link>
                    </div> 
                  )}
                
              </div>

              <span className="flex items-center w-full mx-auto m-4">
                <span className="h-px flex-1 bg-gray-400 "></span>
  
              </span>
              
              <form action="" className="mt-4 ">
                {client &&(

                  <div className="flex flex-col gap-4 p-3 pb-4 bg-white border rounded-md mt-1 shadow-lg">
                    <h3 className="font-bold pb-0">Informações do Cliente</h3>
                    <div className="flex flex-col gap-4">
                      <Input 
                        label="Nome"
                        name="nameClient"  
                        id="nameClient" 
                        disabled
                        defaultValue={client.name }

                      />

                      <div className="flex gap-5">
                          <Input label="Telefone" name="phoneClient" disabled id="phoneClient" defaultValue={client.phone } />

                          <Input label="Email" name="email Client" disabled  id="emailClient" defaultValue={client.email } />
                      </div>
                    </div>
                    

                    

                  </div>

                )}
                  <div className="mt-5 bg-white border rounded-md shadow-lg">
                      <h3 className="font-bold p-3 pb-0 ">Pagamento</h3>
                      <div className="flex gap-5 p-3">

                        <div className="flex flex-col w-3/4 gap-3">
                          <label htmlFor="" className="text-base font-medium">Status do Pagamento</label>
                          <select className="px-2 border-2 rounded-md h-10 w-full text-base" name="statusPay" id="statusPay">
                            <option value="">Selecionar</option>
                            <option value="pago">Pago</option>
                            <option value="entrada">Entrada</option>
                            <option value="pendente">Pendente</option>
                          </select>
                        </div>
                        
                        <Input className="w-2/4"  label="Valor" name="phoneClient"  id="valuePay"  />
                      </div>
                  </div>
                    
                  

              </form>

            </div>

            <div>
              <div className="relative z-10 w-full bg-white border rounded-md mt-1 shadow-lg ">
                  <DayPicker  mode="multiple" selected={selected} onSelect={handleSelect} />
              </div>

              {selected?.map((item, index) => <p key={index} className="mt-4">Data selecionada: {item.toDateString()}</p>)}
            </div>

            
        </div>
       
    )
}