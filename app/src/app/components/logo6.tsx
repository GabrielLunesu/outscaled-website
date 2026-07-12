import type { Logo6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo6Data = {
  kind?: string;
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <div className={cn("2xl:w-250 2xl:h-175", styles.className)}>
      <div className={styles.className2}>
        <div className={styles.className3}>
          <div className={styles.className4}>
            <img className={cn("2xl:h-175", styles.className5)} data-component={d.kind} alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="8000" />
          </div>
        </div>
      </div>
    </div>
  );
}
