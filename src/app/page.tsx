import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calender } from "./_components/calender";
import Link from "next/link";

export default function Home() {

  return (
    <div className="font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Agenda</h1>

      <Tabs defaultValue="casa" className="w-[1000px] p-20">
        <TabsList>
          <TabsTrigger value="casa">Casa </TabsTrigger>
          <TabsTrigger value="sitio">Sítio Da Folha</TabsTrigger>
        </TabsList>

        <TabsContent value="casa" className="h-full border w-full px-8">
          <h2 className="font-bold my-6">Datas Disponíveis</h2>
          <div className="flex items-start gap-4">
            <Calender />
            <Link href="/scheduling" className="flex bg-black text-white">Novo Agendamento</Link>
          </div>
        </TabsContent>
        <TabsContent value="sitio">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
