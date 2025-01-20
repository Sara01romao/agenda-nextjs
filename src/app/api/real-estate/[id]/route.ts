import { NextResponse } from "next/server";
import conn from "@/functions/dbconection";
import { SpaceType } from "../route";  
import { ResultSetHeader } from "mysql2";


export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;  
  
  if (!id) {
      return NextResponse.json(
          { error: "ID do Espaço não fornecido" },
          { status: 400 }
      );
  }

  try {
      
      const [rows] = await conn.execute<SpaceType[]>(
          "SELECT * FROM espaco WHERE id_espaco = ?",
          [id]
      );

     
      if (rows.length === 0) {
          return NextResponse.json(
              { error: "Espaço não encontrado" },
              { status: 404 }
          );
      }

      
      return NextResponse.json({
          espaco: rows[0],  
      });

  } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error);
      return NextResponse.json(
          { error: "Erro ao consultar o banco de dados" },
          { status: 500 }
      );
  }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await req.json();

  const { nome_espaco, endereco_espaco, numero_espaco, cep_espaco } = body;


  if (!nome_espaco || !endereco_espaco || !numero_espaco || !cep_espaco) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios" },
      { status: 400 }
    );
  }

  try {
   
    const [result] = await conn.execute<ResultSetHeader>(
      `
        UPDATE espaco 
        SET nome_espaco = ?, endereco_espaco = ?, numero_espaco = ?, cep_espaco = ? 
        WHERE id_espaco = ?`,
      [nome_espaco, endereco_espaco, numero_espaco, cep_espaco, id]
    );

  
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Espaço não encontrado ou não alterado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Espaço atualizado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar o espaço:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar o espaço" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
  
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        'DELETE FROM espaco WHERE id_espaco = ?',
        [id]
      );
  
   
      if (result.affectedRows === 0) {
        return NextResponse.json(
          { error: 'Espaço não encontrado.' },
          { status: 404 }
        );
      }
 
      return NextResponse.json(
        { message: 'Espaço deletado com sucesso!' },
        { status: 200 }
      );
    } catch (error) {
      console.error('Erro ao deletar o espaço:', error);
      return NextResponse.json(
        { error: 'Erro ao deletar o espaço. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }
  }
  