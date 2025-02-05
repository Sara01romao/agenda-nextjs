import { NextResponse } from "next/server";
import conn from "@/functions/dbconection";
import { RowDataPacket } from "mysql2";


export interface ScheduleType extends RowDataPacket {
  id_agendamento: number;
  nome_cliente: string;
  datas_agendas: string;
  status_pagamento_agendamento: string;

}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const onlyDates = searchParams.get("datas") === "true";

    const [rows] = await conn.execute<ScheduleType[]>(
      `
        SELECT 
            agendamento.id_agendamento,
            agendamento.datas_agendas,
            agendamento.status_pagamento_agendamento,
            agendamento.id_cliente_agendamento,
            agendamento.id_espaco_agendamento,
            clientes.nome_cliente
        FROM 
            agendamento
        JOIN 
            clientes 
        ON 
            agendamento.id_cliente_agendamento = clientes.id_cliente;
      `
    );

    const formattedData = rows
    .map((row) => {
      try {
        return JSON.parse(row.datas_agendas); 
      } catch {
        return []; 
      }
    })
    .flat();

    if (onlyDates) {
      return NextResponse.json(formattedData, { status: 200 });
    }

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar agendamentos" },
      { status: 500 }
    );
  }
}


