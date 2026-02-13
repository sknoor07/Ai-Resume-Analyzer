"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'
import EmptyState from './_components/EmptyState';
import { StringChunk } from 'drizzle-orm';

export default function AiChatPage() {
    const [userInput, setUserInput] = React.useState<string>();
    function handleSelectedQuestion(question: string) {
   setUserInput(question);
}
    return (
        <div className="flex flex-col flex-1">

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
             <div className="flex flex-col flex-1 border rounded-lg p-4">
                <div>
                    <EmptyState selectedQuestion={handleSelectedQuestion} />
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto">
                </div>

                {/* Input */}
                <div className="flex items-center gap-4 pt-4">
                    <Input
                        placeholder="Ask a question..."
                        className="flex-1"
                        value={userInput || ""}
   onChange={(e) => setUserInput(e.target.value)}
                    />
                    <Button size="icon">
                        <Send />
                    </Button>
                </div>

            </div>
        </div>
    );
}

