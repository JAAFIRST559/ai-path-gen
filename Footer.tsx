
'use client'; // Only needed if used in an SSR/SSG context where `new Date()` causes hydration issues

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="h-16 flex justify-center items-center gap-6 px-4 border-t border-gray-200 dark:border-gray-700">
      <p>© {year ?? "2025"} Jasmine Ilakkia N</p>
      <div className="hidden sm:flex text-sm items-center gap-2 bg-black border border-neutral-700 text-white px-4 py-2 rounded-lg">
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
