import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, meta, styles }: { d: Logo2Data; meta: DittoNodeMetaMap; styles: Logo2Styles }) {
  return (
    <div data-ditto-id={meta[0]?.anchor} className={cn("block absolute top-0 z-0 min-w-0 shrink-0", styles.className)}>
      <div className="h-full block absolute top-0 inset-x-0">
        <img className={cn("w-full h-[35.3125rem] block overflow-clip object-cover max-md:h-[27.3125rem] md:max-lg:h-140.5 2xl:h-[39.8125rem]", styles.className2)} data-component="image" alt="" height={d.height} sizes="calc(calc(min(max(100vw, 1px), 1000px) - 80px) - 24px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
      </div>
    </div>
  );
}
