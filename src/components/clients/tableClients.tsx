
'use client';

import { ClientType } from '@/app/api/clients/route';  
import { useState } from 'react';
import { PiTrash, PiPencilSimple } from 'react-icons/pi';

type TabelaClientesProps = {
  clientes: ClientType[];
};

export default function TableClients({ clientes }: TabelaClientesProps) {
  const [clientesData, setClientesData] = useState(clientes);

  function handleEdit(id_cliente: number){
    console.log(`editar cliente com ID: ${id_cliente}`);
  }

  function handleDelete(id_cliente: number){
    console.log(`deletar cliente com ID: ${id_cliente}`);

  }

  return (
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
        {clientesData.map((item) => (
          <tr key={item.id_cliente}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.nome_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.cpf_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{new Date(item.data_cadastro_cliente).toLocaleDateString()}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.telefone_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.whatsapp_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 flex items-center gap-3">
              <button onClick={() => handleDelete(item.id_cliente)} className="p-1 rounded-md border bg-white hover:bg-gray-50 shadow-sm">
                <PiTrash size={24} className="text-[#FF4040]" />
              </button>

              <button onClick={() => handleEdit(item.id_cliente)} className="p-1 rounded-md border bg-white hover:bg-gray-50 shadow-sm">
                <PiPencilSimple size={24} className="text-[#0BB661]" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
