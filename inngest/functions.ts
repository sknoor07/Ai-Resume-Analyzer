import { inngest } from "./client";
import { createAgent, gemini, openai } from '@inngest/agent-kit';

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const AiCareerChatAgent = createAgent({
  name: 'AiCareerChatAgent',
  description: 'Provides expert support for career',
  system:
    'You are a career expert. ' +
    'You only provide answers to questions related to career.'+
    'Do not answer any other questions.'+
    'keep your answers short and concise.',
  model: gemini({
    apiKey: process.env.GEMINI_API_KEY,
  model: "gemini-1.5-pro"
  }),
});

export const aiCareerChat = inngest.createFunction(
  { id: "AiCareerChat" },
  { event: "AiCareerChat" },
  async({event,step})=>{
    const {userinput}=event?.data;
    const result =await AiCareerChatAgent.run(userinput)
    return result;
  }
);