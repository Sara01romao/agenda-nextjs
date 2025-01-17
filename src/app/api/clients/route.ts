import { NextResponse } from "next/server";
import { ResultSetHeader, RowDataPacket } from "mysql2";
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


export async function POST(req: Request) {
    const body = await req.json();
    const { nome_cliente, cpf_cliente, telefone_cliente, whatsapp_cliente } = body;

    if (!nome_cliente || !cpf_cliente || !telefone_cliente || !whatsapp_cliente) {
        return NextResponse.json(
            { error: "Todos os campos são obrigatórios" },
            { status: 400 }
        );
    }

    try {
        const [result] = await conn.execute<ResultSetHeader>(
            "INSERT INTO clientes (nome_cliente, cpf_cliente, telefone_cliente, whatsapp_cliente) VALUES (?, ?, ?, ?)",
            [nome_cliente, cpf_cliente, telefone_cliente, whatsapp_cliente]
        );

        return NextResponse.json(
            {
                message: "Cliente criado com sucesso",
                id: result.insertId, // ID do novo cliente
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Erro ao criar o cliente:", error);
        return NextResponse.json(
            { error: "Erro ao criar o cliente" },
            { status: 500 }
        );
    }
}


