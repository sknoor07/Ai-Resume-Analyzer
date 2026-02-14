import db from "@/db_config";
import { usersTable } from "@/db_config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  console.log("user"+user);
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const users = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable?.email, email));

    if (users?.length === 0) {
      const newUser = await db
        .insert(usersTable)
        .values({
          name: user?.fullName || "",
          email: email || "",
        })
        .returning();
      return NextResponse.json(newUser);
    }
    return NextResponse.json(users[0]);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
