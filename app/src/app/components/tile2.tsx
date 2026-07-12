import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("block relative shrink-0", styles.className)}>
      <div className={cn("flex relative py-1.5 px-2.5 rounded-[30px] justify-center items-center content-center gap-1.5 overflow-clip bg-surface after:content-[''] after:block after:absolute after:inset-0 after:h-7 after:rounded-tl-[30px] max-lg:after:h-[1.7125rem]", styles.className2)}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className3)}>
          <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
