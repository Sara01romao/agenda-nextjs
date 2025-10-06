import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdDateRange } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarComponent } from "./calendar";
import { FaWhatsapp } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Property } from "@/data/property-mock";

interface TabsProps {
  value: string;
  propertyScheduling: Property;
}

export function TabsComponents({ value, propertyScheduling }: TabsProps) {
  const schedulingList = propertyScheduling.scheduling.map(item => item.dates).flat();
  let bookedDates = schedulingList.map(date => formatBookedDate(date));

  function formatBookedDate(date: string) {
    const dateFormat = new Date(date).toISOString().split("T")[0];
    return new Date(dateFormat.replaceAll("-", ","));
  }

  function formatDate(date: string) {
    const data = new Date(date);
    return new Intl.DateTimeFormat('pt-BR').format(data);
  }

  return (
    <>
      <TabsContent value={value} className=" border w-full px-8 pb-8 rounded-lg">

        <div className="flex items-center justify-between flex-wrap my-6">
          <h2 className="text-black">Datas Disponíveis : <span className="font-bold text-[#229BFF]">{propertyScheduling.name}</span></h2>
          <div className="flex flex-col items-start gap-4  ">
            <Button variant="outline" asChild>
              <Link href={`/scheduling/${propertyScheduling.id}`} className="w-[200px] flex bg-black text-white ml-auto">
                <MdDateRange />
                Novo Agendamento
              </Link>
            </Button>
          </div>
        </div>
        <CalendarComponent booked={bookedDates} />

        <div className="mt-10 border w-full px-8 pb-8 rounded-lg">
          <h2 className="font-bold my-6 text-black">Agendamentos</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="text-right">Telefone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyScheduling.scheduling.map(client =>
                <TableRow key={client.id}>
                  <TableCell className="font-medium flex flex-wrap">{client.dates.map(date => <p key={date}>{formatDate(date)}</p>)}</TableCell>
                  <TableCell>{client.status}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell className="text-righ flex gap-2 items-center justify-end">
                    {client.phone}
                    <Button variant="outline" className="bg-[#35c16a] hover:bg-[#26b55c]" asChild>
                      <Link href="#" >
                        <FaWhatsapp color="#fff" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </>
  )
}