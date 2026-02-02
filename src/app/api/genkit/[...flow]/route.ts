import { createAppRouteHandler } from "@genkit-ai/next";
import "@/ai/dev"; // This will register the flows

export const { GET, POST } = createAppRouteHandler();
