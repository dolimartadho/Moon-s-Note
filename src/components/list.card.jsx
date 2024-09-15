"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const ListCard = ({ id, baju, harga, alamat }) => {
  const router = useRouter();

  async function handleDeleteList() {
    await fetch("https://v1.appbackend.io/v1/rows/Hyud4bOWHH7l", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  return (
    <div className="card">
      <h1 className="text-2xl font-semibold">{baju}</h1>
      <h3 className="text-lg font-medium">Rp. {harga}</h3>
      <p className="">{alamat}</p>
      <button onClick={handleDeleteList} className="btn-delete">
        DELETE
      </button>
    </div>
  );
};
