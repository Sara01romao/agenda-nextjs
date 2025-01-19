'use client'

import { ClientType } from '@/app/api/clients/route';
import Link from 'next/link';
import { PiTrash, PiPencilSimple } from 'react-icons/pi';
import { useState } from 'react';

type TabelaClientesProps = {
  initialClientes: ClientType[];
};

export default function TableClients({ initialClientes }: TabelaClientesProps) {
  const [clientes, setClientes] = useState<ClientType[]>(initialClientes);

  async function handleDelete(id_cliente: number) {
    const confirm = window.confirm("Tem certeza que deseja excluir o cliente?");
  if (!confirm) return;
    try {
      const res = await fetch(`http://localhost:3000/api/clients/${id_cliente}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setClientes((prevClientes) =>
          prevClientes.filter((cliente) => cliente.id_cliente !== id_cliente)
        );

        alert( "Cliente removido com sucesso!");
      } else {
        console.error("Erro ao deletar o cliente");
      }
    } catch (error) {
      console.error("Erro ao deletar o cliente:", error);
    }
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
        {clientes.map((item) => (
          <tr key={item.id_cliente}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.nome_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.cpf_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{new Date(item.data_cadastro_cliente).toLocaleDateString()}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.telefone_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.whatsapp_cliente}</td>
            <td className="whitespace-nowrap px-4 py-2 flex items-center gap-3">
              <button
                onClick={() => handleDelete(item.id_cliente)}
                className="p-1 rounded-md border bg-white hover:bg-gray-50 shadow-sm"
              >
                <PiTrash size={24} className="text-[#FF4040]" />
              </button>

              <Link
                href={`/clients/edit/${item.id_cliente}`}
                className="p-1 rounded-md border bg-white hover:bg-gray-50 shadow-sm"
              >
                <PiPencilSimple size={24} className="text-[#0BB661]" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
