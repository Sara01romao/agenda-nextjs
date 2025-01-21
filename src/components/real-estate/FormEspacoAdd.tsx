'use client';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function FormEspacoAdd() {
  const [formData, setFormData] = useState({
    nome_espaco: '',
    endereco_espaco: '',
    numero_espaco: '',
    cep_espaco: '',
  });

  const [message, setMessage] = useState('');
  const router = useRouter();

  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { nome_espaco, endereco_espaco, numero_espaco, cep_espaco } = formData;
    if (!nome_espaco || !endereco_espaco || !numero_espaco || !cep_espaco) {
      toast.error('Todos os campos são obrigatórios.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/real-estate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) { 
        const error = await res.json();
        setMessage(error.error || 'Erro ao cadastrar o espaço.');
      
      }
      
      toast.success('Espaço cadastrado com sucesso!');
        setFormData({
          nome_espaco: '',
          endereco_espaco: '',
          numero_espaco: '',
          cep_espaco: '',
        });
        setTimeout(() => {
          router.push('/real-estate');
        }, 1500);


    } catch (err) {
      console.error(err);
      setMessage('Erro ao cadastrar o espaço.');
    }
  }


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    
      <form onSubmit={handleSubmit} className="p-6 bg-white max-w-2xl mx-auto rounded-lg">
        <div className="mb-5">
          <label htmlFor="nome_espaco" className="block font-medium mb-2">
            Nome do Espaço
          </label>
          <input
            type="text"
            id="nome_espaco"
            name="nome_espaco"
            value={formData.nome_espaco}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="endereco_espaco" className="block font-medium mb-2">
            Endereço
          </label>
          <input
            type="text"
            id="endereco_espaco"
            name="endereco_espaco"
            value={formData.endereco_espaco}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="numero_espaco" className="block font-medium mb-2">
            Número
          </label>
          <input
            type="text"
            id="numero_espaco"
            name="numero_espaco"
            value={formData.numero_espaco}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="cep_espaco" className="block font-medium mb-2">
            CEP
          </label>
          <input
            type="text"
            id="cep_espaco"
            name="cep_espaco"
            value={formData.cep_espaco}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {message && <p className="text-sm text-red-500 mb-3 text-center font-medium">{message}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#028dff] hover:bg-[#1780d7] text-white font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Cadastrar
        </button>
      </form>
    
  );
}
