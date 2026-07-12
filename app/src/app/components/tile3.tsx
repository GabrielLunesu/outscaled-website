export type Tile3Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2.5">
      <div className="contents min-w-0">
        <div className="w-141 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-150 2xl:w-63">
          <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-center" dir="auto">
            <a className="inline text-color-001 cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)]" data-component="link" href={d.href}>
              {d.description}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
