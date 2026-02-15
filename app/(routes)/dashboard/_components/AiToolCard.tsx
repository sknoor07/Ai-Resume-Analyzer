"use client";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { ArrowRight, Link, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ResumeUploadDialog from './ResumeUploadDialog';

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
    const id = uuidv4();
    const[openDialog, setDialog]= useState(false);

    async function createnewRecord(){
           const result = await axios.post("/api/history",{
            record_id:id,
            content:[],
           });
           //console.log(result.data);
    }

    function startCall(){
        if(tool.name=="AI Resume Analyzer"){
            setDialog(true);
            return;
        }
        createnewRecord();
        setLoading(true);
        router.push(tool.path+"/"+id);
        
    }
    return (
        <div className='p-3 border rounded-2xl'>
            <Image src={tool.icon} alt={tool.name} width={40} height={40} /> 
            <h2 className='mt-2 font-bold'>{tool.name}</h2>
            <p className='mt-2 text-gray-400'>{tool.description}</p>
            
            
            { <Button className='w-full mt-4 cursor-pointer' onClick={()=>startCall()} disabled={loading}>{tool.button}{!loading ? (
                  <ArrowRight />
                ) : (
                  <Loader2 
                   className="animate-spin" />
                )}</Button>}
                <ResumeUploadDialog open={openDialog} setOpen={setDialog}/>
        </div>
    )
}

export default AiToolCard