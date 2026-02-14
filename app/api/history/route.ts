export const runtime = "nodejs";
import db from "@/db_config";
import { HistoryTable } from "@/db_config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
export async function POST(req:NextRequest){
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

export async function PUT(req:NextRequest){
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

export async function GET(req:NextRequest){
    const {searchParams}= new URL(req.url) 
    const record_id= searchParams.get("record_id");
    try{
        const result = await db.select().from(HistoryTable).where(eq(HistoryTable.record_id,record_id));
        return NextResponse.json(result[0]);
    }catch(e){
        console.log(e);
        return NextResponse.json({error:"Internal Server Error"}, {status:500});
    }
}