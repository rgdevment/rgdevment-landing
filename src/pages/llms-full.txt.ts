import { mainLlmsFull } from "../llms";

export const GET = () => new Response(mainLlmsFull(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
