import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dativo — EU Data Act Compliance Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#022A5A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Dativo wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-2px',
            marginBottom: '24px',
          }}
        >
          Dativo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: 1.3,
            marginBottom: '16px',
          }}
        >
          EU Data Act Compliance Platform
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.4,
          }}
        >
          For Connected Product Manufacturers
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          dativo.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
