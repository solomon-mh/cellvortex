export async function POST(request: Request) {
  const data = await request.json();
  // Your logic here
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
}
