import type { Logo10Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo10Data = {
  name: string;
  name2: string;
  kind?: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo10({ d, styles }: { d: Logo10Data; styles: Logo10Styles }) {
  return (
    <li className="w-60 h-90 list-item max-lg:hidden" aria-hidden="true">
      <div className="w-60 h-90 block relative shrink-0 max-lg:hidden" name={d.name}>
        <div className={cn("w-60 h-90 flex relative p-1 flex-col items-center content-center gap-2.5 overflow-hidden max-lg:hidden", styles.className)} name={d.name2}>
          <div className={cn("w-full block relative rounded-[30px] shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-58 after:rounded-tl-[30px] max-lg:after:hidden", styles.className2)}>
            <div className={cn("w-58 h-full block absolute top-0 rounded-[30px] max-lg:hidden", styles.className3)}>
              <img className={cn("w-full block rounded-[30px] overflow-clip object-cover max-lg:hidden", styles.className4)} data-component={d.kind} alt="" height={d.height} sizes="calc(240px - 8px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
            <div className={cn("w-[14.0625rem] block absolute left-[3.5px] z-0 rounded-[26px] shrink-0 shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset] max-lg:hidden", styles.className5)} />
          </div>
        </div>
      </div>
    </li>
  );
}
