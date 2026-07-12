import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  ariaposinset: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <li className={cn("list-item relative shrink-0", styles.className)} aria-hidden="false" aria-posinset={d.ariaposinset} aria-setsize="5">
      <div className={cn("h-8 block relative shrink-0 overflow-clip [filter:brightness(0)_grayscale(1)]", styles.className2)}>
        <div className={cn("h-full block absolute top-0", styles.className3)}>
          <img className={cn("w-full h-8 block overflow-clip object-contain", styles.className4)} data-component="image" alt="" height="81" src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
        </div>
      </div>
    </li>
  );
}
