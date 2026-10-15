import text from "../llms.txt?raw";

export const GET = () => new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
