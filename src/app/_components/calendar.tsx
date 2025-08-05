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
    const year = infoDate.getFullYear();
    const month = infoDate.getMonth();

    console.log(month, infoDate.getDay())
    setDate(new Date(year, month));
  }, []);

  if (!date) {
    return <div className="h-[300px] w-full animate-pulse rounded-lg bg-gray-100" />;
  }

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
      disabled={booked}
      className="rounded-lg border shadow-sm"
    />
  );
}