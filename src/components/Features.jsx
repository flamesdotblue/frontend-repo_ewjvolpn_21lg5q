import React from 'react';
import { Star, Smile, Heart } from 'lucide-react';

const features = [
  {
    title: 'Simple by design',
    description: 'A minimal setup that looks great out of the box.',
    icon: Star,
    color: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Friendly & approachable',
    description: 'Clean typography and calming spacing for a welcoming feel.',
    icon: Smile,
    color: 'from-sky-400 to-blue-500',
  },
  {
    title: 'Made with care',
    description: 'Thoughtful details and subtle polish throughout.',
    icon: Heart,
    color: 'from-rose-400 to-pink-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why you’ll like this</h2>
      <p className="mt-2 text-gray-600">A few niceties bundled into this tiny hello world.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ title, description, icon: Icon, color }) => (
          <article
            key={title}
            className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white shadow-sm`}>
              <Icon size={18} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600 text-sm">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
