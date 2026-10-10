import React from 'react';

export default function StyleGuide() {
  return (
    <section className="min-h-screen py-32 px-6 relative z-10 flex flex-col gap-16 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4">Design System Checkpoint</h1>
        <p className="text-gray-400">Verifying the new buttons, glass panels, and typography over the mesh gradient background.</p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Glass Panel (.glass)</h2>
        <div className="glass p-8 w-full max-w-md">
          <h3 className="text-xl font-medium mb-2">Glass Card</h3>
          <p className="text-gray-300 text-sm mb-6">
            This card uses the backdrop-blur, inner shadow highlight, and fallback styles.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">Primary</button>
            <button className="btn-ghost">Ghost</button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-6 items-center bg-[#0A0A0F]/50 p-6 rounded-xl border border-white/5">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-ghost">Ghost Button</button>
          
          <button className="btn-primary focus-visible:outline-none focus-visible:ring-0">
            Focus Test (Tab Here)
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Typography & Labels</h2>
        <div className="glass p-6 w-full max-w-lg space-y-4">
          <p className="text-base text-gray-300">
            Regular body text uses the Inter font family. It is clean and readable. Below are the mono tags using JetBrains Mono:
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="label-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">
              React
            </span>
            <span className="label-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-blue-400">
              Tailwind
            </span>
            <span className="label-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-violet-400">
              Three.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
