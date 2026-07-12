"use client";
export type MediaTile5Data = {
  text: string;
  description: string;
};
/** A media tile — one FAQ disclosure row (click to expand, plus icon rotates to a cross). */
export default function MediaTile5({ d, open, last, onToggle }: { d: MediaTile5Data; open: boolean; last?: boolean; onToggle: () => void }) {
  return (
    <div className={`block rounded-xl overflow-hidden ${last ? "" : "mb-2.5"} ${open ? "bg-color-001" : "bg-surface-2"}`}>
      <div className="flex p-5 justify-between items-center cursor-pointer" role="button" aria-expanded={open} onClick={onToggle}>
        <div className="flex items-center">
          <span className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.4375rem] text-left">
            {d.text}
          </span>
        </div>
        <img className={`w-5 h-5 block ml-5 overflow-clip transition-transform duration-300 ${open ? "rotate-45" : ""}`} data-component="image" alt="icon" src="/assets/cloned/svg/2e61c7f7ad58.svg" />
      </div>
      <div className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="min-h-0 overflow-hidden">
          <div className="flex p-5 items-start">
            <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-base leading-[1.375rem] tracking-[-0.16px] text-left">
              {d.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
