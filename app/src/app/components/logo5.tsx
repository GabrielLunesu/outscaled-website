import type { Logo5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo5Data = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <div className={cn("block absolute shrink-0", styles.className)}>
      <div className={cn("block relative overflow-clip", styles.className2)}>
        <div className="h-full block absolute top-0 inset-x-0 z-1 shrink-0">
          <div className="h-full block absolute top-0 inset-x-0">
            <img className={cn("w-full block overflow-clip object-contain", styles.className3)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
      </div>
    </div>
  );
}
