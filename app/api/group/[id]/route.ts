import { NextRequest } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const group = await prisma.group.findUnique({
    where: { id: parseInt(id) },
    include: {
      Labels: true,
      project: true,
    },
  });
  if (group) {
    return new Response(JSON.stringify(group));
  } else {
    return new Response(JSON.stringify({ error: "Group not found" }), {
      status: 404,
    });
  }
}
