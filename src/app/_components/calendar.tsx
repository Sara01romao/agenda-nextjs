'use client'
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "react-day-picker/locale";

interface CalendarProps {
  booked: Date[];
}

export function CalendarComponent({ booked }: CalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const infoDate = new Date();
    const today = infoDate.getDate();
    const year = infoDate.getFullYear();
    const month = infoDate.getMonth();
    
    setDate(new Date(year, month, today));
  }, []);

  if (!date) {
    return <div className="h-[300px] w-full animate-pulse rounded-lg bg-gray-100 flex items-center justify-items-center"><p className="m-auto">Carregando...</p></div>;
  }

  

  return (
    <Calendar
      mode="single"
      locale={ptBR}
      defaultMonth={date}
      numberOfMonths={isMobile ? 1 : 2}
      selected={date}
      onSelect={setDate}
      disabled={(date) => {
        const today = new Date();
       
        return (
          date < today ||
          booked.some(
            (bookedDate) => date.toDateString() === bookedDate.toDateString()
          )
        );
      }}
      
      className="rounded-lg border shadow-sm  w-full max-w-[800px] m-auto"
    />
  );
}