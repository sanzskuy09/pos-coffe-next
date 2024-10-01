import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Fungsi untuk menangani request POST
export async function POST(req) {
  const body = await req.json(); // Parsing body request

  const { id, name, image, desc, price, disc } = body;

  if (!id || !name || !image || !desc || !price || !disc) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Tentukan lokasi file JSON
  const filePath = path.join(process.cwd(), "public", "products.json");

  // Baca isi file JSON
  const fileData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(fileData);

  // Periksa apakah ID sudah ada
  const existingProduct = products.find(
    (product) => product.id === parseInt(id)
  );
  if (existingProduct) {
    return NextResponse.json(
      { error: "Product ID already exists" },
      { status: 400 }
    );
  }

  // Buat produk baru
  const newProduct = {
    id: parseInt(id),
    name,
    image,
    desc,
    price: parseFloat(price),
    disc: parseFloat(disc),
  };

  // Tambahkan produk baru ke array
  products.push(newProduct);

  // Tulis kembali data ke file JSON
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

  return NextResponse.json(
    { message: "Product added successfully", products },
    { status: 201 }
  );
}
