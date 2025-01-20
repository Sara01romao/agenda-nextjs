'use client'

import Link from 'next/link';
import { PiTrash, PiPencilSimple } from 'react-icons/pi';
import { useState } from 'react';
import { SpaceType } from '@/app/api/real-estate/route';
import toast from 'react-hot-toast';

type TableSpaceProps = {
  initialSpace: SpaceType[];
};

export default function TableEspaces({ initialSpace }: TableSpaceProps) {
  const [spaces, setSpace] = useState<SpaceType[]>(initialSpace);

  async function handleDelete(id_espaco: number) {
    // Confirmação do usuário antes de deletar
    const confirmDelete = window.confirm("Tem certeza que deseja excluir o Espaço?");
    if (!confirmDelete) return;
  
    try {
      // Envio da requisição DELETE
      const res = await fetch(`/api/real-estate/${id_espaco}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        // Atualização do estado local para remover o espaço excluído
        setSpace((prevSpace) =>
          prevSpace.filter((space) => space.id_espaco !== id_espaco)
        );
        toast.success("Espaço removido com sucesso!");

      } else {
        const errorData = await res.json();
        console.error("Erro ao deletar o Espaço:", errorData);
        toast.error("Erro ao deletar o espaço.");
      }
    } catch (error) {
      console.error("Erro ao deletar o Espaço:", error);
      toast.error("Erro ao deletar o espaço.");
    }
  }

  return (
    <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">Nome</th>
          <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">Endereço</th>
          <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">Data de Cadastro</th>
          <th className="whitespace-nowrap px-4 py-2 text-left text-base font-medium text-gray-900">CEP</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {spaces.map((item) => (
          <tr key={item.id_espaco}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.nome_espaco}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.endereco_espaco} - nº{item.numero_espaco}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{new Date(item.data_cadastro).toLocaleDateString()}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.cep_espaco}</td>
            <td className="whitespace-nowrap px-4 py-2">
              <div className="flex items-center gap-3">
                <button onClick={() => handleDelete(item.id_espaco)} className="p-1 rounded-md border bg-white hover:bg-gray-50 shadow-sm">
                  <PiTrash size={24} className="text-[#FF4040]" />
                </button>

                <Link href={`/real-estate/edit/${item.id_espaco}`} className="p-1 rounded-md border bg-white hover:bg-gray-50 shadow-sm">
                  <PiPencilSimple size={24} className="text-[#0BB661]" />
                </Link>
              </div>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}
