import React from 'react'

function EmptyState({selectedQuestion}: any) {
  const questionlist = [
    "What skills do I need to become a full stack developer?",
    "What are the best tools for a full stack developer?"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center">
        Ask Anything to AI Career Agent
      </h2>

      <div className="flex flex-col gap-4">
        {questionlist.map((question, index) => (
          <div
            key={index}
            onClick={() => selectedQuestion(question)}
            className="p-4 text-center border rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
          >
            {question}
          </div>
        ))}
      </div>
    </div>
  );
}


export default EmptyState