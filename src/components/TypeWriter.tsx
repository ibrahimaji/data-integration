"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Data",
    },
    {
      text: "untuk",
    },
    {
      text: "perencanaan",
    },
    {
      text: "transportasi",
    },
    {
      text: "yang lebih baik.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
<>
      <TypewriterEffectSmooth words={words} />
</>
  );
}
