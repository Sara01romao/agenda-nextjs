import { ClientType } from "@/app/api/clients/route";
import EditForm from "@/components/clients/EditForm";
import Link from "next/link";


type ClientIdParams = {
  params: {
    id: number;
  };
};

export default async function EditClient({ params }: ClientIdParams) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/clients/${id}`, { cache: "no-store" });
  const data = (await response.json()) as ClientType;
  const resultClient = data.cliente;

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-start mb-4">
        <Link href="/clients" className="text-blue-500">Voltar</Link>
      </div>

      <main className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Editar Cadastro</h1>

       
        <EditForm client={resultClient} clientId={id} />
      </main>
    </div>
  );
}
