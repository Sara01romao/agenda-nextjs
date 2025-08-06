'use client'
import React, { useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";

interface CalendarProps {
  booked: Date[];
}

export function CalendarComponent({ booked }: CalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  useEffect(() => {
    const infoDate = new Date();
    const today = infoDate.getDate()
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
      defaultMonth={date}
      numberOfMonths={2}
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
      className="rounded-lg border shadow-sm"
    />
  );
}