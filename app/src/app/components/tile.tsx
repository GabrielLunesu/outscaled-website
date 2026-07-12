import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className)}>
      <p className="hidden 2xl:block 2xl:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] 2xl:text-sm 2xl:leading-5 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
        <a className="hidden 2xl:inline 2xl:text-color-001 2xl:cursor-pointer" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
