'use client'
import React from 'react';
import Image from 'next/image';

async function getEvents() {
    const res = await fetch('http://localhost:3001/api/events', {
        cache: 'no-store',
        next: { revalidate: 0 }
      });
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.title} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/api/placeholder/400/200";  // Fallback to a placeholder image
                }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}