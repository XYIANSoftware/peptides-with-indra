import { ImageResponse } from 'next/og';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/constants';

export const alt = `${SITE_TITLE} – Quality peptides, clear information`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0c0020 0%, #1a0a2e 50%, #2a1f4e 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ede9fe',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          {SITE_TITLE}
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#9d8fbd',
            maxWidth: 800,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            color: 'rgba(36, 205, 197, 0.9)',
            fontWeight: 600,
          }}
        >
          Professional peptides, your way
        </div>
      </div>
    ),
    { ...size }
  );
}
