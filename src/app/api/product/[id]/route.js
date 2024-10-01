import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(req, { params }) {
  const id = parseInt(params.id);

  console.log(params);

  const data = await prisma.product.findUnique({
    where: { id },
  });

  if (!data) {
    return NextResponse.json(
      {
        message: "failed to find product",
        error: "Product not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      message: "success to find product",
      data: data,
    },
    { status: 200 }
  );
}
