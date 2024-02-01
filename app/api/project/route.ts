import prisma from "@/lib/prisma";
import { Project } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body: Project = await request.json();

    const project = await prisma.project.create({
      data: {
        name: body.name,
        color: body.color,
        bgColor: body.bgColor,
      },
    });

    return new Response(JSON.stringify(project));
  } catch (e) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
}
