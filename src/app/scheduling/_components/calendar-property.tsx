'use client'
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

interface CalendarProps {
  booked: Date[];
  newScheduling: (dates: Date[]) => void;
  reset:boolean
}

export function CalendarProperty({ booked, newScheduling, reset }: CalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  useEffect(() => {
    const infoDate = new Date();
    const today = infoDate.getDate()
    const year = infoDate.getFullYear();
    const month = infoDate.getMonth();

    setDate(new Date(year, month, today));
  }, []);

  function handleSelect(dates: Date[] | undefined) {
    setSelectedDates(dates || []);
  }

   useEffect(() => {
    if (reset) {
      setSelectedDates([]);
      newScheduling([]);
    }
  }, [reset, newScheduling]);

  useEffect(() => {
    newScheduling(selectedDates);
  }, [selectedDates])


  if (!date) {
    return <div className="h-[300px] w-full animate-pulse rounded-lg bg-gray-100 flex items-center justify-items-center"><p className="m-auto">Carregando...</p></div>;
  }

  return (
    <>
      <Calendar
        mode="multiple"
        defaultMonth={date}
        numberOfMonths={1}
        selected={selectedDates}
        onSelect={handleSelect}
        required={false}
        disabled={(date) => {
          const today = new Date();
          return (
            date < today ||
            booked.some(
              (bookedDate) => date.toDateString() === bookedDate.toDateString()
            )
          );
        }}
        className="rounded-lg   w-[80%] m-auto "
      />

    </>
  );
}