import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CalendarComponent } from "./_components/calendar";
import { Button } from "@/components/ui/button";
import { MdDateRange } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  const bookedDates: Date[] = [
    new Date(2025, 7, 6),
    new Date(2025, 7, 11),
    new Date(2025, 8, 10),
  ]

  return (
    <div className="font-sans items-center justify-items-center min-h-screen  pb-20  sm:p-20">
      <Tabs defaultValue="casa" className="max-w-[1000px] w-full gap-0">
        <TabsList>
          <TabsTrigger value="casa" className="min-w-[120px] ">Casa </TabsTrigger>
          <TabsTrigger value="sitio">Sítio Da Folha</TabsTrigger>
        </TabsList>

        <TabsContent value="casa" className="h-full border w-full px-8 pb-8 rounded-lg">
          <h2 className="font-bold my-6 text-black">Datas Disponíveis</h2>
          <div className="flex flex-col items-start gap-4  ">
            <Button variant="outline" asChild>
              <Link href="/scheduling/2" className="w-[200px] flex bg-black text-white ml-auto">
                <MdDateRange />
                Novo Agendamento
              </Link>
            </Button>
            <CalendarComponent booked={bookedDates} />
          </div>
        </TabsContent>
        <TabsContent value="sitio">Change your password here.</TabsContent>
      </Tabs>
      
    </div>
  );
}
