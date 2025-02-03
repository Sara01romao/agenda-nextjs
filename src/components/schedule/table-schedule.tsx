"use client";

import { ScheduleType } from "@/app/api/schedule/route";
import Link from "next/link";

interface ScheduleTableProps {
  schedules: ScheduleType[];
}

export default function TableSchedule({ schedules }: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="text-start text-base whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nome</th>
            <th className="text-start text-base whitespace-nowrap px-4 py-2 font-medium text-gray-900">Data Agendada</th>
            <th className="text-start text-base whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {schedules.map((item) => (
            <tr key={item.id_agendamento}>
              <td className="text-base whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.nome_cliente}
              </td>
              <td className="text-base whitespace-nowrap px-4 py-2 text-gray-700">{item.datas_agendas}</td>
              <td className="text-base whitespace-nowrap px-4 py-2 text-gray-700">
                <p className="flex items-baseline gap-1">
                  <span
                    className={`p-1 rounded-full h-0.5 w-0.5 ${
                      item.status_pagamento_agendamento === "Pago"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {item.status_pagamento_agendamento}
                </p>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link
                  href={`/schedule/${item.id_agendamento}`}
                  className="inline-block rounded bg-[#028dff] px-4 py-2 text-xs font-medium text-white hover:bg-[#1780d7]"
                >
                  Mais
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
