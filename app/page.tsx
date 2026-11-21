export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '3rem', maxWidth: 640 }}>
      <h1>Layerbase Apps demo</h1>
      <p>A minimal Next.js app hosted on Layerbase Apps.</p>
      <ul>
        <li>
          <a href="/api/env">/api/env</a>: the GREETING config var
        </li>
        <li>
          <code>/api/cron</code>: the cron endpoint (needs the CRON_SECRET
          bearer)
        </li>
      </ul>
      <p>Rendered at {new Date().toISOString()}</p>
    </main>
  )
}
