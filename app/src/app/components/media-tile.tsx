import type { ReactNode } from "react";
import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  name: string;
  name2: string;
  kind?: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  kind2?: string;
  icon: ReactNode;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={styles.className} aria-hidden="true">
      <div className={styles.className2} name={d.name}>
        <div className={styles.className3} name={d.name2}>
          <div className={styles.className4}>
            <div className={styles.className5}>
              <img className={styles.className6} data-component={d.kind} alt="" height={d.height} sizes="max(320px - 8px, 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
          </div>
          <div className={cn("max-md:w-[20.275rem] md:max-lg:w-[544.9px]", styles.className7)} />
          <div className={styles.className8}>
            <div className={cn("after:content-[''] after:block after:absolute after:inset-0 after:h-[2.05rem] after:rounded-tl-[30px]", styles.className9)}>
              <svg className={styles.className10} data-component={d.kind2} role="presentation" viewBox="0 0 24 24" fill="currentColor">{d.icon}</svg>
              <div className={styles.className11}>
                <p className={styles.className12} dir="auto">
                  {d.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
