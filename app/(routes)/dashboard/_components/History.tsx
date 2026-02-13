"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function History() {
    const [userHistory, setuserHistory]= useState([]);
    return (
        <div className="mt-5 p-5 bg-white border rounded-2xl">
            <h2 className="text-xl font-bold">Previous History</h2>
            <p className="text-muted-foreground mt-2">Here you can find all your previous interactions with the AI Career Coach Agent.</p>
            {userHistory.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-5">
                <Image src="/idea.png" alt="No history" width={50} height={50} />
                <p className="text-muted-foreground mt-2">No history found</p>
                <Button variant={"default"} className="mt-4 cursor-pointer">Explore AI Tools</Button>
                </div>
            ) : (
                <ul className="mt-2">
                    {userHistory.map((history, index) => (
                        <li key={index}>{history}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default History;
