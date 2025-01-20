import { NextResponse } from "next/server";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import conn from "@/functions/dbconection";


export interface SpaceType extends RowDataPacket {
    id: number;
    nome: string;
    numero: string;
    endereco: string;
    cep:string;
}

export async function GET() {
    try {
        const [rows] = await conn.execute<SpaceType[]>("SELECT * FROM espaco");
        console.log("Resultado da consulta:", rows);

        return NextResponse.json({
            espaco: rows,
        });
    } catch (error) {
        console.error("Erro ao consultar o banco de dados:", error);
        return NextResponse.json(
            { error: "Erro ao consultar o banco de dados" },
            { status: 500 }
        );
    }
}


export async function POST(req: Request) {
    try {
     
      const body = await req.json();
      const { nome_espaco, endereco_espaco, numero_espaco, cep_espaco } = body;
  
   
      if (!nome_espaco || !endereco_espaco || !numero_espaco || !cep_espaco) {
        return NextResponse.json(
          { error: 'Todos os campos são obrigatórios.' },
          { status: 400 }
        );
      }
  
     
      const [result] = await conn.execute<ResultSetHeader>(
        'INSERT INTO espaco (nome_espaco, endereco_espaco, numero_espaco, cep_espaco) VALUES (?, ?, ?, ?)',
        [nome_espaco, endereco_espaco, numero_espaco, cep_espaco]
      );
 
      return NextResponse.json(
        {
          message: 'Espaço criado com sucesso.',
          id: result.insertId, 
        },
        { status: 201 }
      );
    } catch (error) {
      console.error('Erro ao criar o espaço:', error);
      return NextResponse.json(
        { error: 'Erro ao criar o espaço. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }
  }

