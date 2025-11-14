'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Video() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentIframe = iframeRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Send postMessage to play the video
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*'
            );
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (currentIframe) {
      observer.observe(currentIframe);
    }

    return () => {
      if (currentIframe) {
        observer.unobserve(currentIframe);
      }
    };
  }, [isVisible]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full h-screen relative">
        <div className="relative w-full h-full">
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/AxjuCcjvEW0?autoplay=0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=AxjuCcjvEW0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&enablejsapi=1"
            title="Video"
            className="absolute inset-0 w-full h-full pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          {/* Overlay to block YouTube UI elements */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
        </div>
      </div>
    </section>
  );
}