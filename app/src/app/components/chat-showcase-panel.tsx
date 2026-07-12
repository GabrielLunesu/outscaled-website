"use client";
import { useEffect, useState } from "react";
import { PromptInputBox } from "../../components/ui/ai-prompt-box";

/** Prompt sets per department, indexed to the accordion rows top-to-bottom. */
export const DEPARTMENT_PROMPTS: string[][] = [
  [
    "List this product, here's the brief and two photos",
    "Rewrite all descriptions in the summer collection in our voice",
    "Refresh the SEO titles and tags for our bestsellers",
    "Check what our competitor charges for the same product",
    "Draft listings for everything in the new-arrivals folder",
  ],
  [
    "Draft replies to today's tickets and hold them for my approval",
    "Summarize what customers complained about this week",
    "Answer this customer, order 4512, in a friendly tone",
    "Flag any ticket that mentions a refund and propose a decision",
    "Write a response to this 2-star review for me to approve",
  ],
  [
    "How did our Meta ads do yesterday, in plain words",
    "Draft five headline variations for the hero product",
    "Tell me which campaigns are spending with no sales",
    "Write next week's promo email for me to review",
    "Compare this month's ROAS to last month and explain the change",
  ],
  [
    "Send me revenue and ROAS every day in #general at 8pm",
    "Prepare the monthly P&L summary for review",
    "What were our fees and costs this week",
    "Which products made us the most profit this month",
    "Put a weekly performance recap in my inbox every Monday",
  ],
  [
    "Tell me when any product drops below 10 in stock",
    "Remind me of unfulfilled orders older than 48 hours each morning",
    "What's moving fast and what's not moving at all",
    "Check every open order and summarize what needs attention",
    "Message me on Slack when a new order over €500 comes in",
  ],
];

const TYPE_DELAY_MS = 32;
const HOLD_MS = 2000;
const CLEAR_PAUSE_MS = 450;

/** Types the given messages character by character, holds ~2s, clears, loops.
 * Intentionally ignores prefers-reduced-motion so the showcase always animates;
 * callers that need a static fallback handle it themselves. */
export function useTypedPrompt(prompts: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const type = (promptIdx: number, charIdx: number) => {
      const prompt = prompts[promptIdx];
      setText(prompt.slice(0, charIdx));
      if (charIdx < prompt.length) {
        timer = setTimeout(() => type(promptIdx, charIdx + 1), TYPE_DELAY_MS);
      } else {
        timer = setTimeout(() => {
          setText("");
          timer = setTimeout(() => type((promptIdx + 1) % prompts.length, 1), CLEAR_PAUSE_MS);
        }, HOLD_MS);
      }
    };
    setText("");
    timer = setTimeout(() => type(0, 1), CLEAR_PAUSE_MS);
    return () => clearTimeout(timer);
  }, [prompts]);

  return text;
}

/** The use-case showcase panel: warm gradient backdrop with a dark chat input that types the active department's messages. */
export default function ChatShowcasePanel({ activeIdx }: { activeIdx: number }) {
  const text = useTypedPrompt(DEPARTMENT_PROMPTS[activeIdx] ?? DEPARTMENT_PROMPTS[0]);
  return (
    <div className="block absolute z-2 shrink-0 h-full top-0 inset-x-0">
      <div className="h-full flex relative p-2.5 rounded-4xl justify-center items-center content-center gap-2.5 bg-color-002">
        <div className="basis-0 shrink-0 h-full flex relative z-0 rounded-[30px] grow justify-center items-center overflow-hidden shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset] bg-cover bg-center" style={{ backgroundImage: "url(/assets/cloned/images/departments/image.png)" }}>
          <div className="w-[500px] max-w-full p-4">
            <PromptInputBox value={text} placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
}
