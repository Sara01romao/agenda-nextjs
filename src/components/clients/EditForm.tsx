"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface ClientFormProps {
  client: {
    nome_cliente: string;
    cpf_cliente: string;
    telefone_cliente: string;
    whatsapp_cliente: string;
  };
  clientId: number;
}

export default function EditForm({ client, clientId }: ClientFormProps) {
  const [formData, setFormData] = useState(client);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/clients/${clientId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erro ao atualizar o cliente");
      }

      const result = await res.json();
      alert(result.message || "Cliente atualizado com sucesso!");
      
      router.push("/clients");

    } catch (error) {
      console.error(error);
      alert("Erro ao salvar as alterações");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white shadow-lg rounded-lg"
    >
      <div>
        <label htmlFor="nome_cliente" className="block font-medium">Nome</label>
        <input
          type="text"
          id="nome_cliente"
          name="nome_cliente"
          value={formData.nome_cliente}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="cpf_cliente" className="block font-medium">CPF</label>
        <input
          type="text"
          id="cpf_cliente"
          name="cpf_cliente"
          value={formData.cpf_cliente}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefone_cliente" className="block font-medium">Telefone</label>
          <input
            type="text"
            id="telefone_cliente"
            name="telefone_cliente"
            value={formData.telefone_cliente}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="whatsapp_cliente" className="block font-medium">WhatsApp</label>
          <input
            type="text"
            id="whatsapp_cliente"
            name="whatsapp_cliente"
            value={formData.whatsapp_cliente}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded-lg ${loading ? "bg-gray-400" : "bg-indigo-600 text-white"}`}
      >
        {loading ? "Salvando..." : "Salvar"}
      </button>
    </form>
  );
}
