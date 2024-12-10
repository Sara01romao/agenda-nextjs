
'use client';

import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


export default function Calender(){
    const [selected, setSelected] = useState<Date | undefined>();
    const disabledDates = [
        new Date(2024, 11, 25), //  ano, mes, dia
        new Date(2025, 1, 3),   
      ];

  return (
    <div className="p-8">
      <h2 className="mb-4">Datas Disponíveis:</h2>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(date) => setSelected(date as Date)}
        disabled={disabledDates}
       
      />
      {selected && <p className="mt-4">Data selecionada: {selected.toDateString()}</p>}
    </div>
  );
}