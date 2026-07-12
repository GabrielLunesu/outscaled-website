import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile4Data = {
  href: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  description2: string;
  description3: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className="contents min-w-0">
      <div className="h-95 block relative [align-self:start] shrink-0">
        <a className="h-95 flex relative p-2 rounded-3xl flex-col justify-center items-center content-center gap-2.5 overflow-hidden text-primary bg-color-002 2xl:cursor-pointer" data-component="link" href={d.href}>
          <div className="w-full h-[16.8375rem] block relative z-0 rounded-[20px] grow shrink-0 basis-0 shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset] max-lg:h-[17rem]">
            <div className="h-full block absolute top-0 inset-x-0 rounded-[20px]">
              <img className={cn("w-full h-[16.8125rem] block rounded-[20px] overflow-clip object-cover max-lg:h-68", styles.className)} data-component="image" alt="" height={d.height} sizes="calc(max((min(max(100vw, 1px), 1000px) - 92px) / 2, 50px) - 16px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
            <div className={cn("h-6 flex absolute top-2.5 left-2.5 py-1 px-2 rounded-[30px] justify-center items-center content-center shrink-0 gap-1 bg-color-003 [backdrop-filter:blur(8px)] after:content-[''] after:block after:absolute after:inset-0 after:h-6 after:rounded-tl-[30px] max-lg:after:h-6", styles.className2)}>
              <svg className="w-auto h-4 block relative shrink-0 overflow-hidden aspect-square" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">
                <use href="#1603866147" />
              </svg>
              <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className3)}>
                <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  {d.description}
                </p>
              </div>
            </div>
            <div className="h-full block absolute top-0 inset-x-0 z-0 rounded-[20px] shrink-0 shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset]">
              <div className="w-11 h-11 flex absolute top-[134.7px] left-[clamp(159.5px,_50%,_calc(100%_-_159.5px))] p-3 rounded-[40px] justify-center items-center content-center shrink-0 gap-6 overflow-hidden bg-color-003 [backdrop-filter:blur(6px)] transform-[matrix(1,0,0,1,-22,-22)] max-lg:top-[8.5rem]">
                <svg className="w-auto h-5 block relative shrink-0 overflow-hidden aspect-square" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">
                  <use href="#3492944464" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-109.5 flex relative z-3 p-3 flex-col justify-center items-start content-start shrink-0 gap-1 max-md:w-[19.9375rem] md:max-lg:w-136 2xl:w-94">
            <div className="w-103.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.4375rem] md:max-lg:w-130 2xl:w-88">
              <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description2}
              </p>
            </div>
            <div className="w-103.5 relative flex-col justify-start shrink-0 overflow-clip whitespace-pre-line [word-break:break-word] [overflow-wrap:break-word] line-clamp-2 max-md:w-[18.4375rem] md:max-lg:w-130 2xl:w-88">
              <p className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                {d.description3}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
