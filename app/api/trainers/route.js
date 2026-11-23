import { NextResponse } from "next/server";
import { trainers } from "@/data/trainers";

export async function GET() {
  return NextResponse.json(trainers);
}