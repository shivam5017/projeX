'use client'
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    return () => Lottie.destroy();
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '80%', 
        height: '600px',
        maxHeight: '80%', 
        objectFit: 'cover',
      }}
    />
  );
};

export default LottieAnimation;
