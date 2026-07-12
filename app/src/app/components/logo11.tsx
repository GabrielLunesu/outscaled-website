import type { ReactNode } from "react";
export type Logo11Data = {
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo11({ d }: { d: Logo11Data }) {
  return (
    <div className="contents min-w-0">
      <div className="w-8 block relative shrink-0 aspect-square">
        <a className="h-8 flex relative p-2 rounded-lg flex-col justify-center items-center content-center gap-2.5 overflow-clip text-primary cursor-pointer" data-component="link" href={d.href} rel="noopener">
          <svg className="w-auto h-6 block relative shrink-0 overflow-hidden aspect-square focus:outline-clr-25 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">{d.icon}</svg>
        </a>
      </div>
    </div>
  );
}
