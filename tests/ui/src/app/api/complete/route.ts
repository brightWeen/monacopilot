import {Copilot} from 'monacopilot';

const copilot = new Copilot(process.env.OPENAI_API_KEY!, {
  provider: 'google',
  model: 'gemini-1.5-flash',
});

export async function POST(req: Request) {
  const body = await req.json();
  const {completion, error} = await copilot.complete({
    body,
  });

  if (error) {
    // Handle error if needed
    // ...
    return Response.json({completion: null, error}, {status: 500});
  }

  return Response.json({completion});
}
