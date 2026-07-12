import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo3({ d, meta, styles }: { d: Logo3Data; meta: DittoNodeMetaMap; styles: Logo3Styles }) {
  return (
    <div data-ditto-id={meta[0]?.anchor} className={cn("w-[24%] h-full block relative grow shrink-0 basis-0 max-md:w-[22.5%] md:max-lg:w-[23.5%] 2xl:w-[23%]", styles.className)}>
      <div className="h-full flex relative p-7.5 rounded-2xl flex-col justify-end items-start content-start gap-2 overflow-hidden shadow-[var(--surface-2)_10px_10px_40px_0px_inset] cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-2xl">
        <div className="w-[212.5px] h-full block absolute top-0 left-[0.0375rem] -z-1 min-w-0 rounded-2xl shrink-0 overflow-hidden shadow-[var(--surface-2)_10px_10px_20px_0px_inset] max-md:w-[66.3px] max-lg:left-0 md:max-lg:w-[122.5px] 2xl:w-[92.7px] 2xl:left-0">
          <div className="h-full block absolute top-0 inset-x-0 rounded-2xl">
            <img className={cn("w-full h-[6.4375rem] block rounded-2xl overflow-clip object-cover max-md:h-[4.9375rem] 2xl:h-[7.3125rem]", styles.className2)} data-component="image" alt="" height={d.height} sizes="max((calc(min(max(100vw, 1px), 1000px) - 80px) - 70px) / 4, 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
      </div>
    </div>
  );
}
