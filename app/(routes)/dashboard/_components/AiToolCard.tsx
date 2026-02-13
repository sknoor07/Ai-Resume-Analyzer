"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Link, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Tool={
    name: string;
    description: string;
    icon: string;
    path: string;
    button: string;
}
type Props={
    tool: Tool;
}

function AiToolCard({tool}: Props) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    function startCall(){
        setLoading(true);
        router.push(tool.path);
    }
    return (
        <div className='p-3 border rounded-2xl'>
            <Image src={tool.icon} alt={tool.name} width={40} height={40} /> 
            <h2 className='mt-2 font-bold'>{tool.name}</h2>
            <p className='mt-2 text-gray-400'>{tool.description}</p>
            
            
            {<Button className='w-full mt-4 cursor-pointer' onClick={()=>startCall()} disabled={loading}>{tool.button}{!loading ? (
                  <ArrowRight />
                ) : (
                  <Loader2 
                   className="animate-spin" />
                )}</Button>}
        </div>
    )
}

export default AiToolCard