"use client";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    image: "",
    desc: "",
    price: "",
    disc: "",
  });

  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/deleteProduct?id=${id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <form onSubmit={handleDelete}>
        <input
          type="number"
          name="id"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Delete Product</button>
      </form>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="number"
          name="id"
          placeholder="Product ID"
          value={form.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="disc"
          placeholder="Discount"
          value={form.disc}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
