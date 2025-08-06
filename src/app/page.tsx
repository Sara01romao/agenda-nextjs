import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CalendarComponent } from "./_components/calendar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const bookedDates: Date[] = [
    new Date(2025, 7, 6),
    new Date(2025, 7, 11),
    new Date(2025, 8, 10),
  ]

  return (
    <div className="font-sans items-center justify-items-center min-h-screen  pb-20  sm:p-20">
      <Tabs defaultValue="casa" className="w-[1000px]">
        <TabsList>
          <TabsTrigger value="casa">Casa </TabsTrigger>
          <TabsTrigger value="sitio">Sítio Da Folha</TabsTrigger>
        </TabsList>

        <TabsContent value="casa" className="h-full border w-full px-8">
          <h2 className="font-bold my-6">Datas Disponíveis</h2>
          <div className="flex items-start gap-4">
            <CalendarComponent booked={bookedDates} />
            <Button variant="outline" asChild>
              <Link href="/scheduling" className="w-[200px] flex bg-black text-white">Novo Agendamento</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="sitio">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
