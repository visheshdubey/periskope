import prisma from "@/lib/prisma";
import { Label } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body: Label = await request.json();

    const label = await prisma.label.create({
      data: {
        name: body.name,
        color: body.color,
      },
      include: {
        group: true,
      },
    });

    return new Response(JSON.stringify(label));
  } catch (e) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    const labels = await prisma.label.findMany({});

    return new Response(JSON.stringify(labels));
  } catch (e) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
}
