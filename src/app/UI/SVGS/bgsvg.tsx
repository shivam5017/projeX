export const BgSvg = () => {
  return (
    <svg
      width="1500"
      height="875"
      viewBox="0 0 1500 875"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#b7c3fc" stopOpacity="1" />
        </linearGradient>

  
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="rgba(150, 150, 255, 0.3)"
            strokeWidth="1"
          />
        </pattern>

    
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#9CA3AF" opacity="0.2" />
        </pattern>

     
        <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>


        <mask id="combinedMask">
          <rect width="1500" height="875" fill="url(#fadeMask)" />
        </mask>
      </defs>


      <rect width="1500" height="875" fill="url(#gradient)" />

     
      <rect
        width="1500"
        height="875"
        fill="url(#grid)"
        mask="url(#combinedMask)"
      />

    
      <rect
        width="1500"
        height="875"
        fill="url(#dots)"
        mask="url(#combinedMask)"
      />
    </svg>
  );
};
