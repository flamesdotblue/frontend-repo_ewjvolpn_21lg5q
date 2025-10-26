import React from 'react';
import { Rocket } from 'lucide-react';

export default function HelloMessage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
            <Rocket size={14} />
            Welcome
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Hello, world!
          </h1>
          <p className="max-w-2xl text-gray-600 text-lg">
            A crisp starter showcasing a delightful greeting with clean, modern styling.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-medium shadow-sm hover:bg-indigo-700 transition-colors"
            >
              Explore features
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
