"use client"

import * as React from "react"

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[12px] mr-1 text-3xl font-normal">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "start 0.25"],
  });
  // Paragraphs (split on blank lines) share one scroll progress so the
  // reveal runs through them sequentially, as one continuous text.
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim().split(/\s+/));
  const totalWords = paragraphs.reduce((n, words) => n + words.length, 0);
  let wordIndex = 0;

  return (
    <div ref={container} className="flex flex-col gap-10">
      {paragraphs.map((words, pi) => (
        <p key={pi} className="flex flex-wrap leading-[0.5] p-4">
          {words.map((word) => {
            const start = wordIndex / totalWords;

            const end = start + 1 / totalWords;

            wordIndex += 1;

            return (
              <Word key={wordIndex} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      ))}
    </div>
  );
};
