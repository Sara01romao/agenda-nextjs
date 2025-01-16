import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import conn from "@/functions/dbconection";

export interface ClientType extends RowDataPacket {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    whatsapp: string;
    data:string;
}

export async function GET() {
    try {
        const [rows] = await conn.execute<ClientType[]>("SELECT * FROM clientes");
        console.log("Resultado da consulta:", rows);

        return NextResponse.json({
            clientes: rows,
        });
    } catch (error) {
        console.error("Erro ao consultar o banco de dados:", error);
        return NextResponse.json(
            { error: "Erro ao consultar o banco de dados" },
            { status: 500 }
        );
    }
}

// export async function PUT(req: Request) {
//     try {
//         const body = await req.json(); // Obtém o corpo da requisição
//         const { id, nome, cpf, telefone, whatsapp } = body;

//         // Verifica se os campos necessários foram enviados
//         if (!id || !nome || !cpf || !telefone || !whatsapp) {
//             return NextResponse.json(
//                 { error: "Todos os campos são obrigatórios" },
//                 { status: 400 }
//             );
//         }

//         // Atualiza os dados do cliente no banco de dados
//         const [result] = await conn.execute(
//             "UPDATE clientes SET nome = ?, cpf = ?, telefone = ?, whatsapp = ? WHERE id = ?",
//             [nome, cpf, telefone, whatsapp, id]
//         );

//         // Verifica se algum registro foi atualizado
//         if (result.affectedRows === 0) {
//             return NextResponse.json(
//                 { error: "Cliente não encontrado ou nenhum dado foi alterado" },
//                 { status: 404 }
//             );
//         }

//         return NextResponse.json({ message: "Cliente atualizado com sucesso" });
//     } catch (error) {
//         console.error("Erro ao atualizar o cliente:", error);
//         return NextResponse.json(
//             { error: "Erro ao atualizar o cliente" },
//             { status: 500 }
//         );
//     }
// }


