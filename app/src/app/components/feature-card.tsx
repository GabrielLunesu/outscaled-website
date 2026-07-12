import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("hidden max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:overflow-clip", styles.className)}>
      <div className={cn("hidden max-lg:block max-lg:relative max-lg:grow max-lg:shrink-0 max-lg:basis-0", styles.className2)}>
        <div className={cn("hidden max-lg:flex max-lg:relative max-lg:py-2 max-lg:px-3 max-lg:rounded-lg max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:cursor-default", styles.className3)}>
          <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-normal max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word]", styles.className4)}>
            <h6 className={cn("hidden max-lg:block max-lg:[font-family:Geist,_'Geist_Placeholder',_sans-serif] max-lg:text-sm max-lg:font-medium max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className5)} dir="auto">
              {d.title}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
