import { inngest } from "@/inngest/client";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
    const { userinput } = await req.json();

    const resultIds = await inngest.send({
      name: "AiCareerChat",
      data: { userinput:userinput },
    });

    const runids = resultIds?.ids?.[0];

    if (!runids) {
      return NextResponse.json(
        { error: "No event ID returned" },
        { status: 500 }
      );
    }

    let runStatus; 
    while(true){ 
        runStatus = await getRuns(runids);
        console.log("FULL RESPONSE:", JSON.stringify(runStatus, null, 2));
        if(runStatus?.data[0]?.status==="Completed"){ 
            break; 
        } 
        await new Promise((resolve) => setTimeout(resolve, 500)); 
    } 
    return NextResponse.json(runStatus.data?.[0]?.output?.output[0]);

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function getRuns(runids:string){
    console.log("HOST:", process.env.INNGEST_SERVER_HOST);
    const result = await axios.get(process.env.INNGEST_SERVER_HOST+'/v1/events/'+runids+'/runs',{
        headers: {
      Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
    },
    });
    return result?.data;
}