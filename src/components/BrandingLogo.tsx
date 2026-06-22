/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * Recovers the precise 8-pointed geometric gold mandala seen in corporate documents 
 * representing psychological balance, self-integration, and clinical guidance.
 */
export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} text-gold-500`}
      aria-hidden="true"
    >
      {/* 1. Underlying 4-pointed diagonal star frame */}
      <path 
        d="M50 15 L59 41 L85 50 L59 59 L50 85 L41 59 L15 50 L41 41 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
        className="opacity-75"
      />
      
      {/* 2. Cardinal vertical/horizontal leaf petals (ellipses) */}
      {/* Vertical Petal */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="10" 
        ry="42" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="#fbfaf7"
      />
      
      {/* Horizontal Petal */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="42" 
        ry="10" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="#fbfaf7"
      />

      {/* 3. Central concentric focus circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="11" 
        fill="#fbfaf7" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />

      {/* 4. Core solid gold centering dot (representing identity and container safety) */}
      <circle 
        cx="50" 
        cy="50" 
        r="4.5" 
        fill="currentColor" 
      />
    </svg>
  );
}

/**
 * Combines the elegant vector symbol with professional, high-contrast serif typography 
 * replicating the official brand identity: "Gould Consultancy" (Garamond/Playfair serif) 
 * and "Counselling & Psychotherapy Services" (elegant italics).
 */
export function LogoBlock({ 
  layout = 'horizontal', 
  theme = 'light' 
}: { 
  layout?: 'horizontal' | 'vertical', 
  theme?: 'light' | 'dark' 
}) {
  const isDark = theme === 'dark';
  
  if (layout === 'vertical') {
    return (
      <div className="flex flex-col items-center text-center space-y-3">
        <LogoMark className="h-16 w-16 text-gold-500" />
        <div className="space-y-1">
          <h2 className={`font-display font-medium text-2xl tracking-wide ${isDark ? 'text-white' : 'text-sage-900'}`}>
            Gould Consultancy
          </h2>
          <p className={`font-display italic text-sm ${isDark ? 'text-gold-300' : 'text-sage-700'}`}>
            Counselling & Psychotherapy Services
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3.5 select-none">
      <LogoMark className="h-12 w-12 sm:h-14 sm:w-14 text-gold-500 hover:scale-105 transition-transform duration-300" />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-semibold text-xl sm:text-2xl tracking-normal ${isDark ? 'text-white' : 'text-sage-900'}`}>
          Gould Consultancy
        </span>
        <span className={`font-display italic text-xs sm:text-sm mt-1 sm:mt-1.5 tracking-wide ${isDark ? 'text-gold-300' : 'text-sage-700/90'}`}>
          Counselling & Psychotherapy Services
        </span>
      </div>
    </div>
  );
}
