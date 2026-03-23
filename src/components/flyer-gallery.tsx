"use client";

import { useState } from "react";
import Image from "next/image";

const FLYERS = [
  { src: "/projects/designs/18.37.09.jpeg", alt: "Flyer 1" },
  { src: "/projects/designs/18.37.10.jpeg", alt: "Flyer 2" },
  { src: "/projects/designs/Logtek Our services (2).png", alt: "Flyer 3" },
  { src: "/projects/designs/Emmamanny Autos.png", alt: "Flyer 4" },
  { src: "/projects/designs/Smarter With Quantra.png", alt: "Flyer 5" },
  { src: "/projects/designs/What8.37.09.jpeg", alt: "Flyer 6" },
  { src: "/projects/designs/WhatsA8.37.10.jpeg", alt: "Flyer 7" },
  { src: "/projects/designs/WhatsA18.37.09.jpeg", alt: "Flyer 8" },
  { src: "/projects/designs/ASAS7.12.jpeg", alt: "Flyer 9" },
  { src: "/projects/designs/Hirelink Lunching date 2.png", alt: "Flyer 10" },
  { src: "/projects/designs/hh8.37.11.jpeg", alt: "Flyer 11" },
];

export function FlyerGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {FLYERS.map((flyer) => (
          <div
            key={flyer.src}
            className="relative cursor-pointer rounded-xl overflow-hidden aspect-[4/5] w-full transition-transform duration-300 hover:scale-105"
            onClick={() => setSelected(flyer.src)}
          >
            <Image
              src={flyer.src}
              alt={flyer.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center shadow hover:scale-105 transition z-10"
            >
              ✕
            </button>
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black">
              <Image
                src={selected}
                alt="Flyer preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}