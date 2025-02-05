
'use client';

import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import {ptBR } from "react-day-picker/locale";
import 'react-day-picker/dist/style.css';
import { isSameDay } from 'date-fns';

export default function Calender(){
    const [selected, setSelected] = useState<Date | undefined>();
    const [datesSchedules, setDatesSchedules] = useState<string[]>([]);
    const disabledDates = [
        new Date(2024, 11, 25), //  ano, mes, dia
        new Date(2024, 11, 24), 
        new Date(2025, 1, 3),   
      ];
    
      useEffect(() => {
        
        const fetchDates = async () => {
          try {
            const response = await fetch("http://localhost:3000/api/schedule?datas=true");
            if (!response.ok) {
              throw new Error("Erro ao buscar as datas");
            }
            const data = await response.json();

            setDatesSchedules(data ); 
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchDates(); 
      }, []);

      console.log("data",datesSchedules)

    const isDisabled = (date: Date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      return date < today || disabledDates.some((disabledDate) =>
        isSameDay(date, disabledDate)
      );
    };

  return (
    <div className="mb-8">
      <h2 className="mb-8 font-medium text-xl flex items-center gap-2">
        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0962 1.66263H14.8462V0.912628C14.8462 0.713716 14.7672 0.52295 14.6265 0.382298C14.4859 0.241646 14.2951 0.162628 14.0962 0.162628C13.8973 0.162628 13.7065 0.241646 13.5659 0.382298C13.4252 0.52295 13.3462 0.713716 13.3462 0.912628V1.66263H5.84619V0.912628C5.84619 0.713716 5.76717 0.52295 5.62652 0.382298C5.48587 0.241646 5.2951 0.162628 5.09619 0.162628C4.89728 0.162628 4.70651 0.241646 4.56586 0.382298C4.42521 0.52295 4.34619 0.713716 4.34619 0.912628V1.66263H2.09619C1.69837 1.66263 1.31684 1.82066 1.03553 2.10197C0.754227 2.38327 0.596191 2.7648 0.596191 3.16263V18.1626C0.596191 18.5605 0.754227 18.942 1.03553 19.2233C1.31684 19.5046 1.69837 19.6626 2.09619 19.6626H17.0962C17.494 19.6626 17.8755 19.5046 18.1569 19.2233C18.4382 18.942 18.5962 18.5605 18.5962 18.1626V3.16263C18.5962 2.7648 18.4382 2.38327 18.1569 2.10197C17.8755 1.82066 17.494 1.66263 17.0962 1.66263ZM4.34619 3.16263V3.91263C4.34619 4.11154 4.42521 4.30231 4.56586 4.44296C4.70651 4.58361 4.89728 4.66263 5.09619 4.66263C5.2951 4.66263 5.48587 4.58361 5.62652 4.44296C5.76717 4.30231 5.84619 4.11154 5.84619 3.91263V3.16263H13.3462V3.91263C13.3462 4.11154 13.4252 4.30231 13.5659 4.44296C13.7065 4.58361 13.8973 4.66263 14.0962 4.66263C14.2951 4.66263 14.4859 4.58361 14.6265 4.44296C14.7672 4.30231 14.8462 4.11154 14.8462 3.91263V3.16263H17.0962V6.16263H2.09619V3.16263H4.34619ZM17.0962 18.1626H2.09619V7.66263H17.0962V18.1626ZM13.5018 10.132C13.5715 10.2017 13.6269 10.2844 13.6646 10.3754C13.7024 10.4665 13.7218 10.5641 13.7218 10.6626C13.7218 10.7612 13.7024 10.8588 13.6646 10.9498C13.6269 11.0409 13.5715 11.1236 13.5018 11.1933L9.00182 15.6933C8.93216 15.763 8.84945 15.8183 8.7584 15.856C8.66735 15.8938 8.56975 15.9132 8.47119 15.9132C8.37263 15.9132 8.27503 15.8938 8.18399 15.856C8.09294 15.8183 8.01022 15.763 7.94057 15.6933L5.69057 13.4433C5.54984 13.3025 5.47077 13.1117 5.47077 12.9126C5.47077 12.7136 5.54984 12.5227 5.69057 12.382C5.8313 12.2413 6.02217 12.1622 6.22119 12.1622C6.42021 12.1622 6.61109 12.2413 6.75182 12.382L8.47119 14.1023L12.4406 10.132C12.5102 10.0623 12.5929 10.007 12.684 9.96921C12.775 9.93147 12.8726 9.91204 12.9712 9.91204C13.0698 9.91204 13.1673 9.93147 13.2584 9.96921C13.3494 10.007 13.4322 10.0623 13.5018 10.132Z" fill="black"/>
        </svg>


        Datas Disponíveis
      </h2>

      <DayPicker
        className="p-2 border rounded-lg shadow-sm w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm md:text-base"
        mode="single"
        locale={ptBR}
        selected={selected}
        onSelect={(date) => setSelected(date as Date)}
        disabled={isDisabled}
        

      />
      {/* {selected && <p className="mt-4">Data selecionada: {selected.toDateString()}</p>} */}
    </div>
  );
}