import db from "@/db_config";
import { HistoryTable } from "@/db_config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

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