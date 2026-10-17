import { NextResponse } from "next/server";
import { trainers } from "@/data/trainers";

export async function GET(request, { params }) {
  const { id } = await params;

  const trainer = trainers.find(
    (item) => item.id === Number(id)
  );

  if (!trainer) {
    return NextResponse.json(
      { message: "مربی پیدا نشد" },
      { status: 404 }
    );
  }

  return NextResponse.json(trainer);
}