// Echoes one config var so a deploy's env can be checked. Never echo secrets.
export const dynamic = 'force-dynamic'

export function GET() {
  return Response.json({ greeting: process.env.GREETING ?? null })
}
