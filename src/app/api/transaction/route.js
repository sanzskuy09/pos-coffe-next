import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(req, res) {
  const body = await req.json();
  const data = await prisma.transaction.create({
    data: body,
  });
  return NextResponse.json({
    status: 200,
    data: data,
  });
}
