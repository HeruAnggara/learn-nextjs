import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');
    return NextResponse.json({
        message: `Hello, ${name}!`,
    }, {status: 200});
}

export async function POST(req: Request) {
    const body = await req.json();

    const { name } = body;

    return NextResponse.json({
        message: `Hello, ${name}!`,
    }, {status: 201});
}

export async function PUT(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');
    const body = await req.json();
    const { age } = body;

    return NextResponse.json({
        message: `Hello, ${name} ${age}!`,
    }, {status: 200});
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    return NextResponse.json({
        message: `Goodbye, ${name}!`,
    }, {status: 200});
}