"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const ListCreate = () => {
  const router = useRouter();

  const [baju, setBaju] = useState("");
  const [harga, setHarga] = useState("");
  const [alamat, setAlamat] = useState("");

  async function handleCreateList() {
    await fetch("https://v1.appbackend.io/v1/rows/Hyud4bOWHH7l", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ baju, harga, alamat }]),
    });
    router.refresh();
  }

  return (
    <div className="justify-around space-y-3 rounded-md bg-rose-50 p-24">
      <div className="">
        <h1 className="text-5xl font-semibold">Moon&apos;s Note</h1>
        <p className="text-base font-thin">
          CATATAN BELANJA PELANGGAN MOONTHRIFT
        </p>
      </div>
      <input onChange={(e) => setBaju(e.target.value)} placeholder="Barang" />
      <input onChange={(e) => setHarga(e.target.value)} placeholder="Harga" />
      <textarea
        onChange={(e) => setAlamat(e.target.value)}
        placeholder="Pembeli & Alamat Pengiriman"
      ></textarea>
      <button onClick={handleCreateList}>SAVE</button>
    </div>
  );
};
