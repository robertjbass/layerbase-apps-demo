// Reports whether DATABASE_URL reached the app, and its length. Never the
// value: it is a database credential.
export const dynamic = 'force-dynamic'

export function GET() {
  const value = process.env.DATABASE_URL
  return Response.json({
    databaseUrlPresent: Boolean(value),
    databaseUrlLength: value?.length ?? 0,
  })
}
