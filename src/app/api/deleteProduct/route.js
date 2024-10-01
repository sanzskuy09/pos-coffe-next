import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Fungsi untuk menangani request DELETE
export async function DELETE(req) {
  // Dapatkan URL dan ambil query parameter "id"
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // Tentukan lokasi file JSON
  const filePath = path.join(process.cwd(), "public", "products.json");

  // Baca isi file JSON
  const fileData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(fileData);

  // Cari index produk yang akan dihapus berdasarkan id
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(id)
  );

  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Hapus produk dari array
  products.splice(productIndex, 1);

  // Tulis kembali data ke file JSON
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

  return NextResponse.json(
    { message: "Product deleted successfully", products },
    { status: 200 }
  );
}
