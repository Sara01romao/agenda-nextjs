import { NextResponse } from "next/server";
import conn from "@/functions/dbconection";
import { ClientType } from "../route";  
import { ResultSetHeader } from "mysql2";



export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;  
    
    if (!id) {
        return NextResponse.json(
            { error: "ID do cliente não fornecido" },
            { status: 400 }
        );
    }

    try {
        
        const [rows] = await conn.execute<ClientType[]>(
            "SELECT * FROM clientes WHERE id_cliente = ?",
            [id]
        );

       
        if (rows.length === 0) {
            return NextResponse.json(
                { error: "Cliente não encontrado" },
                { status: 404 }
            );
        }

        
        return NextResponse.json({
            cliente: rows[0],  
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

    const { nome_cliente, cpf_cliente, telefone_cliente, whatsapp_cliente } = body;
    
    if (!nome_cliente || !cpf_cliente || !telefone_cliente || !whatsapp_cliente) {
        return NextResponse.json(
            { error: "Todos os campos são obrigatórios" },
            { status: 400 }
        );
    }

    try {
       
        const [result] = await conn.execute<ResultSetHeader>(
            "UPDATE clientes SET nome_cliente = ?, cpf_cliente = ?, telefone_cliente = ?, whatsapp_cliente = ? WHERE id_cliente = ?",
            [nome_cliente, cpf_cliente, telefone_cliente, whatsapp_cliente, id]
        );

       
        if (result.affectedRows === 0) {
            return NextResponse.json(
                { error: "Cliente não encontrado ou não alterado" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Cliente atualizado com sucesso" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erro ao atualizar o cliente:", error);
        return NextResponse.json(
            { error: "Erro ao atualizar o cliente" },
            { status: 500 }
        );
    }
}



export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json(
            { error: "ID do cliente é obrigatório" },
            { status: 400 }
        );
    }

    try {
        
        const [result] = await conn.execute<ResultSetHeader>(
            "DELETE FROM clientes WHERE id_cliente = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return NextResponse.json(
                { error: "Cliente não encontrado" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Cliente deletado com sucesso" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erro ao deletar o cliente:", error);
        return NextResponse.json(
            { error: "Erro ao deletar o cliente" },
            { status: 500 }
        );
    }
}
