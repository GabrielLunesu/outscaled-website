import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  name: string;
  name2: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
};
/** A media tile. `active` cross-fades the tile in/out (use-case showcase image switcher). */
export default function MediaTile3({ d, styles, active }: { d: MediaTile3Data; styles: MediaTile3Styles; active?: boolean }) {
  return (
    <div className={cn("block absolute z-2 shrink-0 transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] origin-[460px_614.125px]", styles.className)} style={active === undefined ? undefined : { opacity: active ? 1 : 0, transition: "opacity 0.45s ease" }} name={d.name}>
      <div className={cn("flex relative p-2.5 rounded-4xl justify-center items-center content-center gap-2.5 bg-color-002", styles.className2)} name={d.name2}>
        <div className="basis-0 shrink-0 h-full block relative z-0 rounded-[30px] grow shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset]">
          <div className="h-full block absolute top-0 inset-x-0 rounded-[30px]">
            <img className={cn("w-full h-302 block rounded-[30px] overflow-clip object-cover max-md:h-[26.6875rem] md:max-lg:h-182 2xl:h-190", styles.className3)} data-component="image" alt="" height={d.height} sizes="max(calc(min(100vw, 1000px) - 80px) - 20px, 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
        <div className="w-[55.775rem] h-[1203.7px] block absolute top-[15.3px] left-4 z-0 min-w-0 rounded-[30px] shrink-0 shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset] max-md:w-[20.3125rem] max-md:h-[438.3px] max-md:top-[0.35rem] max-md:left-1.5 md:max-lg:w-[33.95rem] md:max-lg:h-[732.7px] md:max-lg:top-[9.3px] md:max-lg:left-2.5 2xl:w-[35.1625rem] 2xl:h-[47.775rem] 2xl:top-2.5 2xl:left-2.5" />
        <div className="w-230 h-[6.6rem] flex absolute bottom-0 z-3 min-w-0 p-5 justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-145">
          <div className="basis-0 shrink-0 flex relative py-3 pr-3 pl-5 rounded-tl-sm rounded-tr-sm rounded-br-[30px] rounded-bl-[30px] justify-center items-center content-center grow gap-2 bg-color-003 [backdrop-filter:blur(8px)] after:content-[''] after:block after:absolute after:inset-0 after:h-[4.1rem] after:rounded-tl-sm">
            <svg className="w-auto h-6 block relative shrink-0 overflow-hidden aspect-square" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">
              <use href="#2603323535" />
            </svg>
            <div className="w-204 relative flex-col justify-start grow shrink-0 basis-0 overflow-clip whitespace-pre-line [word-break:break-word] [overflow-wrap:break-word] line-clamp-2 max-md:w-[14.4375rem] md:max-lg:w-114 2xl:w-119">
              <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
