export const runtime = "nodejs";
import db from "@/db_config";
import { HistoryTable } from "@/db_config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
export async function POST(req:Request){
    const {content,record_id}= await req.json();
    const user = await currentUser();

    try{
        const result = await db.insert(HistoryTable).values({
            record_id:record_id,
            content:content,
            userEmail:user?.emailAddresses[0]?.emailAddress,
        }).returning(HistoryTable);

        return NextResponse.json(result);


    }catch(e){
        console.log(e);
        return NextResponse.json({error:"Internal Server Error"}, {status:500});
    }
}

export async function PUT(req:Request){
    const {content,record_id}= await req.json();
    const user = await currentUser();

    try{
        const result = await db.update(HistoryTable).set({
            content:content,
        }).where(eq(HistoryTable.record_id,record_id));

        return NextResponse.json(result);


    }catch(e){
        console.log(e);
        return NextResponse.json({error:"Internal Server Error"}, {status:500});
    }
}