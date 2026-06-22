import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export default function Logo({ className = '', size = 'md', theme = 'dark' }: LogoProps) {
  // Dimension limits based on size parameter
  const dimensions = {
    sm: { width: 150, height: 50 },
    md: { width: 220, height: 75 },
    lg: { width: 360, height: 120 },
  };

  const currentDim = dimensions[size];

  // SIBLEY text color based on theme. Default dark theme (white text on black/dark background)
  const sibleyColor = theme === 'dark' ? '#FFFFFF' : '#111111';

  return (
    <div 
      className={`relative select-none flex items-center justify-start ${className}`}
      style={{
        width: `${currentDim.width}px`,
        height: `${currentDim.height}px`,
      }}
    >
      <svg
        viewBox="0 0 460 160"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Great+Vibes&display=swap');
              .font-bebas {
                font-family: 'Bebas Neue', sans-serif;
              }
              .font-cursive {
                font-family: 'Great Vibes', cursive;
              }
            `}
          </style>
        </defs>

        {/* 1. Tilted Film Strip (Cyan/Sky-Blue) */}
        <g transform="translate(15, 15) rotate(-26, 65, 65)">
          {/* Main blue card with subtle drop shadow */}
          <rect 
            x="5" 
            y="5" 
            width="112" 
            height="112" 
            rx="5" 
            fill="#53C9F6" 
            filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
          />
          {/* Film Strip Holes on the Left edge */}
          <rect x="15" y="15" width="10" height="10" rx="1.5" fill="#FFFFFF" />
          <rect x="15" y="37" width="10" height="10" rx="1.5" fill="#FFFFFF" />
          <rect x="15" y="59" width="10" height="10" rx="1.5" fill="#FFFFFF" />
          <rect x="15" y="81" width="10" height="10" rx="1.5" fill="#FFFFFF" />
          <rect x="15" y="103" width="10" height="10" rx="1.5" fill="#FFFFFF" />
        </g>

        {/* 2. Ring back-half (Renders behind the S so that it wraps around it in 3D) */}
        <g transform="rotate(-15, 182, 85)">
          <path 
            d="M 152 85 A 32 10 0 0 1 212 85" 
            fill="none" 
            stroke="#c5a880" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />
        </g>

        {/* 3. Primary Branding Typography ("THE SIBLEY") */}
        {/* "TH" - White, overlapping the Filmstrip */}
        <text 
          x="72" 
          y="108" 
          className="font-bebas" 
          fontSize="76" 
          fontWeight="900" 
          fill="#FFFFFF" 
          letterSpacing="0.5"
          filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
        >
          TH
        </text>

        {/* "E" - Gold, transition element */}
        <text 
          x="128" 
          y="108" 
          className="font-bebas" 
          fontSize="76" 
          fontWeight="900" 
          fill="#c5a880" 
          letterSpacing="0.5"
          filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
        >
          E
        </text>

        {/* "SIBLEY" - High Contrast White or Black */}
        <text 
          x="170" 
          y="108" 
          className="font-bebas" 
          fontSize="76" 
          fontWeight="900" 
          fill={sibleyColor} 
          letterSpacing="1.5"
          filter={theme === 'dark' ? "drop-shadow(0px 2px 4px rgba(0,0,0,0.35))" : "none"}
        >
          SIBLEY
        </text>

        {/* 4. Ring front-half (Renders on top of S to complete the 3D wrapping effect) */}
        <g transform="rotate(-15, 182, 85)">
          <path 
            d="M 212 85 A 32 10 0 0 1 152 85" 
            fill="none" 
            stroke="#c5a880" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />
        </g>

        {/* 5. Cursive script ("firm") flowing underneath */}
        <text 
          x="225" 
          y="152" 
          className="font-cursive" 
          fontSize="66" 
          fill="#c5a880" 
          letterSpacing="0.5" 
          transform="rotate(-5, 225, 152)"
          filter="drop-shadow(0px 1.5px 3px rgba(0,0,0,0.2))"
        >
          firm
        </text>

      </svg>
    </div>
  );
}
