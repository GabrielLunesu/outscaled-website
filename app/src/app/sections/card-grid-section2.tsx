"use client";
import { Fragment, useState } from "react";
import MediaCard2, { type MediaCard2Data } from "../components/media-card2";
import ChatShowcasePanel from "../components/chat-showcase-panel";
const MediaCard2_data: MediaCard2Data[] = [
    { title: "Product & Catalog", title2: "Product & Catalog", description: "Agents that list, describe, and refresh your products. Briefs become ready-to-review listings, old descriptions get rewritten in your voice, and your catalog stays sharp without a content sprint." },
    { title: "Customer Support", title2: "Customer Support", description: "Agents that read every ticket and draft the reply in your tone. Easy questions get answered, hard ones get escalated to you, and nothing sits unanswered overnight." },
    { title: "Marketing & Ads", title2: "Marketing & Ads", description: "Agents that watch your campaigns and draft what's next. Daily results in plain words, copy variations on request, and a flag on any money moving in the wrong direction." },
    { title: "Finance & Reporting", title2: "Finance & Reporting", description: "Agents that turn your numbers into sentences. Revenue and ROAS on schedule, a monthly summary prepared for review, and honest reporting that never invents a number." },
    { title: "Operations", title2: "Operations", description: "Agents that keep the machine running. Low stock flagged before it's a problem, unfulfilled orders surfaced every morning, and the busywork of checking things done for you." }
];
/** Card Grid section. */
export default function CardGridSection2({ mediaCard2Data = MediaCard2_data } = {}) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="w-full block relative shrink-0" id="intro-expanded">
      <div className="flex relative flex-col justify-center items-start content-start gap-14.5 overflow-hidden 2xl:gap-12">
        <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-8 2xl:gap-24 2xl:[flex-direction:initial] grid-cols-1 2xl:grid-cols-2">
          <div className="w-230 flex relative flex-col justify-start items-start content-start shrink-0 gap-10 overflow-hidden max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-107.5 2xl:justify-between 2xl:self-stretch 2xl:flex-1 2xl:gap-[initial]">
            <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4 2xl:gap-4">
              <div className="w-230 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-107.5">
                <p className="block [font-family:var(--font-inter-tight),sans-serif] text-[0.8125rem] font-normal leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  Departments
                </p>
              </div>
              <div className="w-full max-w-150 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <h2 className="block [font-family:var(--font-headland-one),serif] text-[2.75rem] leading-[3.5rem] tracking-[-1px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2rem] max-lg:leading-[2.625rem] max-lg:tracking-[-0.5px]" data-component="heading" dir="auto">
                  {"Built for every job in your store.".split(" ").map((word, wi) => (
                    <Fragment key={wi}>
                      {wi > 0 && " "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        {word.split("").map((ch, ci) => (
                          <span key={ci} className="inline-block [filter:blur(0px)]">
                            {ch}
                          </span>
                        ))}
                      </span>
                    </Fragment>
                  ))}
                </h2>
              </div>
            </div>
            <div className="w-230 flex relative flex-col justify-center items-start content-start shrink-0 gap-2 overflow-hidden max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-107.5 2xl:gap-2.5">
              {mediaCard2Data.map((d, i) => <MediaCard2 key={i} d={d} open={activeIdx === i} onSelect={() => setActiveIdx(i)} />)}
            </div>
          </div>
          <div className="w-full block relative shrink-0 overflow-hidden aspect-[4/5] 2xl:w-1/2">
            <ChatShowcasePanel activeIdx={activeIdx} />
          </div>
        </div>
      </div>
    </div>
  );
}
