import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  name: string;
  name2: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  icon: ReactNode;
  description: string;
  kind?: string;
  kind2?: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className="w-80 h-50 list-item max-lg:hidden" aria-hidden="true">
      <div className="w-80 h-50 block relative z-2 shrink-0 max-lg:hidden" name={d.name}>
        <div className={cn("w-80 h-50 flex relative p-1 justify-center items-center content-center gap-2.5 bg-surface max-lg:hidden", styles.className)} name={d.name2}>
          <div className="basis-0 shrink-0 h-full block relative z-0 rounded-4xl grow shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset] max-lg:hidden">
            <div className="w-78 h-full block absolute top-0 left-0 rounded-4xl max-lg:hidden">
              <img className={cn("w-full h-48 block rounded-4xl overflow-clip object-cover max-lg:hidden", styles.className2)} alt="" height={d.height} sizes="max(320px - 8px, 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} data-component={d.kind} />
            </div>
          </div>
          <div className="w-[19.6rem] h-48.5 block absolute right-1 z-0 min-w-0 rounded-4xl shrink-0 shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset] max-lg:hidden" />
          <div className={cn("h-[3.8rem] flex absolute bottom-0 z-3 min-w-0 p-3.5 items-center content-center shrink-0 gap-2.5 max-lg:hidden", styles.className3)}>
            <div className={cn("shrink-0 flex relative py-1.5 pr-2 pl-3 rounded-[30px] justify-center items-center content-center gap-1.5 bg-color-003 [backdrop-filter:blur(8px)] max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-[2.05rem] after:rounded-tl-[30px] max-lg:after:hidden", styles.className4)}>
              <svg className={cn("h-4.5 block relative shrink-0 overflow-hidden aspect-square max-lg:hidden", styles.className5)} role="presentation" viewBox="0 0 24 24" fill="currentColor" data-component={d.kind2}>{d.icon}</svg>
              <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className6)}>
                <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
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
