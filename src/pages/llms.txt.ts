import { mainLlms } from "../llms";

export const GET = () => new Response(mainLlms(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
