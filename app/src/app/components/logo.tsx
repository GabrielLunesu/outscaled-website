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
            <img className={cn("2xl:h-175", styles.className5)} data-component={d.kind} alt="" height="4517" sizes={d.sizes} src="/assets/cloned/images/88ab5ebd250d.png" srcSet="/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" width="8000" />
          </div>
        </div>
      </div>
    </div>
  );
}
