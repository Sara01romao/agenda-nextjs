import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import conn from "@/functions/dbconection";


interface RowResult extends RowDataPacket {
  total: number;
}

async function getCount(query: string): Promise<number> {
  const [rows] = await conn.execute<RowResult[]>(query);
  return rows[0]?.total ?? 0;
}

export async function GET() {
  try {
    const agendamentosTotal = await getCount("SELECT COUNT(*) as total FROM agendamento");
    const clientesTotal = await getCount("SELECT COUNT(*) as total FROM clientes");
    const imoveisTotal = await getCount("SELECT COUNT(*) as total FROM espaco");

    return NextResponse.json({
      agendamentos: agendamentosTotal,
      clientes: clientesTotal,
      imoveis: imoveisTotal,
    });
  } catch (error) {
    console.error("Erro ao consultar o banco de dados:", error);
    return NextResponse.json(
      { error: "Erro ao consultar o banco de dados" },
      { status: 500 }
    );
  }
}



