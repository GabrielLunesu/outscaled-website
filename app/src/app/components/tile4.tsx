import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("flex relative flex-col justify-start shrink-0", styles.className)}>
        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-center" dir="auto">
          <a className="inline text-color-001 cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)]" data-component="link" href={d.href}>
            {d.description}
          </a>
        </p>
      </div>
    </div>
  );
}
