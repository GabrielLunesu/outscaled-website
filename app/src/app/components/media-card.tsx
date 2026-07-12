import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  imgSrc: string;
  description: string;
  title: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("block relative shrink-0 2xl:order-[initial]", styles.className)}>
        <div className="h-full flex relative p-10 rounded-[30px] flex-col justify-center items-start content-start gap-10 overflow-clip bg-[#F5F5F5]">
          <div className="w-full flex relative justify-between items-start content-start shrink-0">
            <img className="w-13.5 h-13.5 block relative shrink-0 [image-rendering:pixelated]" src={d.imgSrc} alt="" width="512" height="512" />
          </div>
          <div className="w-92.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-3 overflow-clip max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[293.3px]">
            <div className="w-92.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[293.3px]">
              <h5 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.375rem] font-medium leading-[1.6875rem] tracking-[-0.67px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.1875rem] max-lg:leading-[1.4375rem] max-lg:tracking-[-0.58px]" data-component="heading" dir="auto">
                {d.title}
              </h5>
            </div>
            <div className="w-92.5 flex relative flex-col justify-start shrink-0 max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[293.3px]">
              <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
