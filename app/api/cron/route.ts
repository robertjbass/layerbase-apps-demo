// Called on schedule (see vercel.json) with Authorization: Bearer <CRON_SECRET>.
// Any other caller gets 401. Returns the time of this run and of the last one
// this server process saw.
export const dynamic = 'force-dynamic'

let lastRunAt: string | null = null

export function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (
    !secret ||
    request.headers.get('authorization') !== `Bearer ${secret}`
  ) {
    return Response.json({ error: 'unauthorized' }, { status: 401 })
  }
  const previousRunAt = lastRunAt
  lastRunAt = new Date().toISOString()
  return Response.json({ ranAt: lastRunAt, previousRunAt })
}
