"use server";

import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";
import supabase from "@/app/supabase/supabase";
import { cookies } from "next/headers";

export async function POST(Request) {
  const cookie = await cookies();
  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.NEXT_MIDTRANS_SERVER,
    clientKey: process.env.NEXT_MIDTRANS_CLIENT,
  });
  const {
    produk,
    harga,
    quantity,
    id,
    namapembeli,
    emailpembeli,
    nomorpembeli,
    grossprice,
  } = await Request.json();  
  let parameter = {
    transaction_details: {
      order_id: Math.ceil(Math.floor(Math.random() * 1000).toString() + id),
      gross_amount: grossprice,
    },
    enabled_payments:["bank_transfer"],
    item_details: {
      name: produk,
      id: Math.ceil(Math.floor(Math.random() * 1000).toString() + id),
      price: harga,
      quantity: 1,
    }, 
  };
  
  const response = await snap.createTransaction(parameter);  
  return NextResponse.json(response.token);
}