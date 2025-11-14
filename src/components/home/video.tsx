'use client';

import React from 'react';

export default function Video() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full h-screen relative">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/AxjuCcjvEW0?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=AxjuCcjvEW0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&enablejsapi=1"
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