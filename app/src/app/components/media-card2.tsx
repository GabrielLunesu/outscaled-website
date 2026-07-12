"use client";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  title: string;
  title2: string;
  description: string;
};
/** A card with media + heading — one use-case accordion row (click to expand and switch the showcase image). */
export default function MediaCard2({ d, open, onSelect }: { d: MediaCard2Data; open: boolean; onSelect: () => void }) {
  return (
    <div className="w-full block relative shrink-0">
      <div className={cn("flex relative p-5 rounded-[20px] flex-col justify-center items-start content-start gap-3.5 overflow-hidden bg-color-002 cursor-pointer 2xl:gap-5 transition-opacity duration-300", open ? "" : "2xl:opacity-80")} role="button" aria-expanded={open} onClick={onSelect}>
        <div className="w-220 flex relative flex-col justify-center items-start content-start shrink-0 gap-2 max-md:w-[18.4375rem] md:max-lg:w-130 2xl:w-97.5 2xl:gap-[0.8125rem]">
          <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-5 overflow-hidden">
            <div className="w-210 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-87.5">
              <h4 className="hidden 2xl:block 2xl:text-foreground 2xl:[font-family:var(--font-inter-tight),sans-serif] 2xl:text-[1.25rem] 2xl:font-medium 2xl:leading-[1.625rem] 2xl:tracking-[-0.3px] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.title}
              </h4>
              <h6 className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-[1.0625rem] font-medium leading-[1.375rem] tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.2px] 2xl:hidden" data-component="heading" dir="auto">
                {d.title2}
              </h6>
            </div>
            <div className={cn("w-5 h-5 flex relative justify-center items-center content-center shrink-0 gap-2.5 transition-transform duration-300", open ? "rotate-180" : "")}>
              <svg className="w-auto h-5 block relative shrink-0 overflow-hidden aspect-square text-foreground" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="w-220 grid overflow-hidden transition-all duration-300 ease-out max-md:w-[18.4375rem] md:max-lg:w-130 2xl:w-97.5" style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 0.7 : 0, filter: open ? "blur(0px)" : "blur(3px)" }}>
            <div className="min-h-0 overflow-hidden">
              <div className="w-220 flex relative flex-col justify-start shrink-0 max-md:w-[18.4375rem] md:max-lg:w-130 2xl:w-97.5">
                <p className="block [font-family:var(--font-inter-tight),sans-serif] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] text-sm font-normal leading-[1.25rem] tracking-[-0.29px] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px] 2xl:text-base 2xl:leading-[1.3125rem] 2xl:tracking-[inherit]" dir="auto">
                  {d.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
