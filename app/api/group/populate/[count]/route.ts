import { NextRequest } from "next/server";

import prisma from "@/lib/prisma";
import { faker } from "@faker-js/faker";

export async function GET(
  request: NextRequest,
  { params }: { params: { count: string } }
) {
  const { count } = params;
  if (parseInt(count) > 1) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
  let group = [];
  for (let i = 0; i < parseInt(count); i++) {
    group.push({
      name: faker.commerce.productName(),
      projectId: 1,
      avatar: faker.image.avatarLegacy(),
      lastActive: faker.date.recent(),
      memberCount: faker.number.int({ max: 200 }),
      unreadMessages:
        faker.number.int() > 200 ? 0 : faker.number.int({ max: 100 }),
      unreadMessageCount:
        faker.number.int() > 200 ? 0 : faker.number.int({ max: 100 }),
      isDisapperingMessageActive: false,
    });
  }
  console.log(group);

  const group2 = await prisma.group.createMany({
    data: group,
  });
  if (group2) {
    return new Response(JSON.stringify(group2));
  } else {
    return new Response(JSON.stringify({ error: "Group not found" }), {
      status: 404,
    });
  }
}
