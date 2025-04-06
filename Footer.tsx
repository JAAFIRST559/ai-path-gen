'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="h-20 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 px-4 border-t border-gray-200 dark:border-gray-700 text-sm">
      <p>© {year ?? "2025"} Jasmine Ilakkia N</p>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        GitHub
      </a>
      <a
        href="mailto:jasmine@example.com"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        Contact
      </a>
      <div className="hidden sm:flex items-center gap-2 bg-black border border-neutral-700 text-white px-4 py-1 rounded-lg">
        Built with{" "}
        <Image
          className="invert h-3 w-auto"
          src="/next.svg"
          alt="NextJS Logo"
          width={72}
          height={16}
        />
      </div>
    </footer>
  );
}
