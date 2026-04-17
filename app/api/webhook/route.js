"use server";
import { NextResponse } from "next/server";
import supabase from "@/app/supabase/supabase";
import { redirect } from "next/navigation";
import { createSessionCookie } from "@/app/function/signature";
export async function POST(req) {
  const body = await req.json();  

  const status = body.transaction_status;
  const orderId = body.order_id;
  const customername = body.customer_details.full_name;
  const customeremail = body.customer_details.email;
  const customernumber = body.customer_details.phone;
  const grossprice = body.gross_amount;
  const vanumber = body.va_numbers?.[0]?.va_number;


  

  return NextResponse.json(body.fraud_status);
}
