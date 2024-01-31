import prisma from "@/lib/prisma";

interface RequestBody {
  name: string;
  email: string;
  phone: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.project.create({
    data: {
      name: body.name,
      Groups,
    },
  });

  return new Response(JSON.stringify(user));
}
