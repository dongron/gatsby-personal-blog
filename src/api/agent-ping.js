const crypto = require('crypto')

// 1x1 transparent PNG (67 bytes).
const TRANSPARENT_PIXEL = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64'
)

const AGENT_REGEX =
  /(GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|anthropic-ai|Claude-Web|Claude-User|PerplexityBot|Perplexity-User|CCBot|Google-Extended|Bytespider|Amazonbot|cohere-ai|Applebot-Extended|Diffbot|YouBot|Meta-ExternalAgent|Meta-ExternalFetcher|FacebookBot)/i

const derivePath = (req) => {
  const referer = req.headers && req.headers.referer
  if (referer) {
    try {
      return new URL(referer).pathname || '/'
    } catch (_) {
      // fall through
    }
  }
  if (req.query && typeof req.query.path === 'string') {
    return req.query.path
  }
  return '/'
}

const sendPixel = (res) => {
  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Content-Length', TRANSPARENT_PIXEL.length)
  res.status(200).send(TRANSPARENT_PIXEL)
}

export default function handler(req, res) {
  try {
    const ua = (req.headers && req.headers['user-agent']) || ''
    const match = ua.match(AGENT_REGEX)

    if (match) {
      const measurementId = process.env.GA4_MEASUREMENT_ID
      const apiSecret = process.env.GA4_API_SECRET

      if (measurementId && apiSecret) {
        const payload = {
          client_id: crypto.randomUUID(),
          events: [
            {
              name: 'ai_agent_visit',
              params: {
                agent_name: match[1],
                path: derivePath(req),
                full_ua: ua.slice(0, 200),
                engagement_time_msec: 1,
              },
            },
          ],
        }

        // Fire-and-forget; never await, never throw.
        fetch(
          `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
            measurementId
          )}&api_secret=${encodeURIComponent(apiSecret)}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }
        ).catch(() => {})
      }
    }
  } catch (_) {
    // Swallow — the pixel must always 200.
  }

  return sendPixel(res)
}
