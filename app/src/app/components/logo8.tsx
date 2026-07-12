import type { Logo8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo8Data = {
  height: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo8({ d, styles }: { d: Logo8Data; styles: Logo8Styles }) {
  return (
    <div className={cn("w-250 h-175 block absolute shrink-0", styles.className)}>
      <div className={cn("block relative overflow-clip", styles.className2)}>
        <div className={cn("h-full block absolute top-0 z-1 shrink-0", styles.className3)}>
          <div className={cn("h-full block absolute top-0", styles.className4)}>
            <img className={cn("w-full h-175 block overflow-clip object-contain", styles.className5)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="1080" />
          </div>
        </div>
      </div>
    </div>
  );
}
