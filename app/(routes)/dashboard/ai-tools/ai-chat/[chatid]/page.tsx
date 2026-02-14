"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader, Loader2, LoaderCircle, Send } from 'lucide-react'
import React, { useEffect } from 'react'
import EmptyState from '../_components/EmptyState';
import { StringChunk } from 'drizzle-orm';
import axios from 'axios';
import Markdown from 'react-markdown'
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';

type messages={
    content: string,
    role:string,
    type:string

}

export default function AiChatPage() {
    const [userInput, setUserInput] = React.useState<string>();
    const [isLoading, setIsLoading] = React.useState(false);
    const [messageList,setMessageList]=React.useState<messages[]>([]);
    const {chatid}=useParams();

    function handleSelectedQuestion(question: string) {
        setUserInput(question);
    }

    async function handleSend(){
    setIsLoading(true);
    
    setMessageList(prev=>[...prev,{
        content:userInput,
        role:"user", 
        type:"text",
    }]);
    setUserInput("");
    const result = await axios.post("/api/ai-career-chat",{
        userinput:userInput
    })
    console.log(result.data)
    setMessageList(prev=>[...prev,result.data])
    setIsLoading(false);
}
    console.log(messageList);

    useEffect(()=>{
        // Save messages to database
    },[messageList])

    return (
        <div className="flex flex-col flex-1 h-[75vh] overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">
                        AI Career Q/A Chat
                    </h2>
                    <p className="text-muted-foreground">
                        Chat with AI to get personalized career guidance
                    </p>
                </div>
                <Button>+ New Chat</Button>
            </div>

            {/* Chat Container */}
             <div className="flex flex-col flex-1 border rounded-lg p-4 [75vh] overflow-auto">
                {messageList.length===0&&<div>
                    <EmptyState selectedQuestion={handleSelectedQuestion} />
                </div>}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto">
                    {messageList.map((message, index) => (
                        <div>
                        <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`p-3 rounded-lg ${message.role === "user"? "bg-blue-200 text-black my-5": "bg-gray-300 text-black"}`}>
                                <ReactMarkdown>
                                {message.role + ": " + message.content}
                                </ReactMarkdown>
                            </div>
                            </div>
                            {isLoading && messageList?.length - 1 === index && (
                                <div className="flex justify-start p-3 rounded-lg gap-2 bg-gray-300 text-black mb-2">
                                    <LoaderCircle className="animate-spin" /> Thinking...
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                {/* Input */}
                <div className="flex items-center gap-4 pt-4">
                    <Input
                        placeholder="Ask a question..."
                        className="flex-1"
                        value={userInput || ""}
   onChange={(e) => setUserInput(e.target.value)}
                    />
                    <Button size="icon" onClick={async ()=>handleSend()} disabled={isLoading}>
                        <Send />
                    </Button>
                </div>

            </div>
        </div>
    );
}

