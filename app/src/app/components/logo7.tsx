import type { Logo7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo7Data = {
  description: string;
};
/** A logo. */
export default function Logo7({ d, styles }: { d: Logo7Data; styles: Logo7Styles }) {
  return (
    <div className={cn("block relative shrink-0", styles.className)}>
      <div className="h-12 flex relative py-3 px-2 justify-center items-center content-center gap-1 overflow-clip">
        <svg className="w-auto h-4 block relative shrink-0 overflow-hidden aspect-square" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">
          <use href="#4045515962" />
        </svg>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
          <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
