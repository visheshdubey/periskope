import prisma from "@/lib/prisma";
import { Group } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body: Group = await request.json();

    const group = await prisma.group.create({
      data: {
        name: body.name,
        avatar: body.avatar,
        Labels: {
          connect: {
            id: body.labels,
          },
        },
        lastActive: body.lastActive,
        memberCount: body.memberCount,
        sendMessageProvision: body.sendMessageProvision,
        unreadMessageCount: body.unreadMessageCount,
        projectId: body.projectId,
        isDisapperingMessageActive: body.isDisappearingMessageActive,
      },
    });

    return new Response(JSON.stringify(group));
  } catch (e) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    const groups = await prisma.group.findMany({
      include: {
        Labels: true,
        project: true,
      },
      orderBy: {
        lastActive: "desc",
      },
    });

    return new Response(JSON.stringify(groups));
  } catch (e) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
}
