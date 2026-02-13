import { Button } from "@/components/ui/button";
import React from "react";

export default function Welcomebanner() {
    return <div >
        <div className=" p-5 bg-linear-to-r from-[#BE575F] via-[#A338E3] to-[#AC76D6] rounded-2xl">
            <h1 className="text-3xl font-bold text-white "> Ai Career Coach Agent </h1>
            <p className=" mt-2 text-white"> Welcome to your AI Career Coach Agent dashboard. Here you can manage your career coaching needs and get personalized career guidance.</p>
            <Button variant={"outline"} className="mt-4 cursor-pointer">Get Started</Button>
        </div>

    </div>;
}

