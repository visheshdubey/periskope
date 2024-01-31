import prisma from "@/lib/prisma";

interface RequestBody {
  name: string;
  email: string;
  phone: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email,
    },
  });

  return new Response(JSON.stringify(user));
}
