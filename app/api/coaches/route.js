import { NextResponse } from "next/server";
import { coaches } from "@/data/coaches";

export async function GET(request, { params }) {
  const { id } = await params;

  const coach = coaches.find(
    (item) => item.id === Number(id)
  );

  if (!coach) {
    return NextResponse.json(
      { message: "مربی پیدا نشد" },
      { status: 404 }
    );
  }

  return NextResponse.json(coach);
}