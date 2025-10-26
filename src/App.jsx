import React from 'react';
import Header from './components/Header';
import HelloMessage from './components/HelloMessage';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <HelloMessage />
        <Features />
        <section id="about" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">About this page</h3>
            <p className="mt-2 text-gray-600">
              This is a minimal starter built with React and Tailwind. It keeps things simple while still feeling polished.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
