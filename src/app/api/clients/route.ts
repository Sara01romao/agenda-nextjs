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

