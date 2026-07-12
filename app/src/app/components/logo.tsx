import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  kind?: string;
  sizes: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("2xl:w-250 2xl:h-175", styles.className)}>
      <div className={cn("2xl:h-175", styles.className2)}>
        <div className={styles.className3}>
          <div className={styles.className4}>
            <img className={cn("2xl:h-175", styles.className5)} data-component={d.kind} alt="" height="4517" sizes={d.sizes} src="https://placehold.co/4000x2259" srcSet="https://placehold.co/512x289 512w, https://placehold.co/1024x578 1024w, https://placehold.co/2048x1156 2048w, https://placehold.co/4000x2259 4096w, https://placehold.co/4000x2259 8000w" width="8000" />
          </div>
        </div>
      </div>
    </div>
  );
}
