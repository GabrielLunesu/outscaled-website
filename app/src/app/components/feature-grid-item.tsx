import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
export type FeatureGridItemData = {
  variant: string;
  subtitle?: string;
  title: string;
};
/** A plain-column text cell that wraps up to two lines inside the fixed row height. */
function TextCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full block relative shrink-0 max-lg:hidden">
      <div className="h-12 flex relative py-1.5 px-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
        <div className="w-full relative flex-col justify-start shrink-0 overflow-clip line-clamp-2 max-lg:hidden">
          <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
/** A plain-column red-cross cell. */
function CrossCell() {
  return (
    <div className="w-full block relative shrink-0 max-lg:hidden">
      <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
        <Icon10 />
      </div>
    </div>
  );
}
/** A highlighted-column cell: white phrase with the template's white check, or plain phrase. */
function HighlightCell({ children, check = true }: { children: React.ReactNode; check?: boolean }) {
  return (
    <div className="w-full block relative z-1 shrink-0">
      <div className="h-12 flex relative py-1.5 px-3 justify-center items-center content-center gap-2 overflow-clip">
        <div className="relative flex-col justify-start min-w-0 overflow-clip line-clamp-2">
          <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
            {children}
          </p>
        </div>
        {check && (
          <span className="flex shrink-0 max-md:hidden">
            <Icon11 />
          </span>
        )}
      </div>
    </div>
  );
}
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "gemini":
      return (
        <li className="w-[226.7px] flex relative p-3 rounded-[20px] flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-3 bg-color-001 max-lg:hidden 2xl:w-[306.7px]">
          <div className="w-full h-14 block relative shrink-0 max-lg:hidden">
            <div className="flex relative py-1.5 px-3 rounded-xl flex-col justify-center items-center content-center gap-0 bg-background cursor-default max-lg:hidden">
              <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-component="heading" dir="auto">
                  {d.title}
                </h6>
              </div>
              {d.subtitle && (
                <p className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-xs leading-[1rem] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  {d.subtitle}
                </p>
              )}
            </div>
          </div>
          <TextCell>Re-explain every chat</TextCell>
          <TextCell>Copy-paste</TextCell>
          <CrossCell />
          <TextCell>None, but it&#39;s still you</TextCell>
          <CrossCell />
          <TextCell>Forgets you</TextCell>
          <TextCell>Nothing to maintain</TextCell>
        </li>
      );
    case "midjourney":
      return (
        <li className="w-[226.7px] flex relative p-3 rounded-[20px] flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-3 bg-color-001 max-lg:hidden 2xl:w-[306.7px]">
          <div className="w-full h-14 block relative shrink-0 max-lg:hidden">
            <div className="flex relative py-1.5 px-3 rounded-xl flex-col justify-center items-center content-center gap-0 bg-background cursor-default max-lg:hidden">
              <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-component="heading" dir="auto">
                  {d.title}
                </h6>
              </div>
              {d.subtitle && (
                <p className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-xs leading-[1rem] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  {d.subtitle}
                </p>
              )}
            </div>
          </div>
          <TextCell>If you build the memory</TextCell>
          <TextCell>Wire every connection</TextCell>
          <TextCell>If it doesn&#39;t break</TextCell>
          <TextCell>Weeks of building, or an expensive agency</TextCell>
          <TextCell>Build it yourself</TextCell>
          <TextCell>Manual tuning</TextCell>
          <TextCell>Congrats, you&#39;re an engineer now</TextCell>
        </li>
      );
    case "erie":
      return (
        <li className="w-[226.7px] flex relative p-3 rounded-[20px] flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-3 overflow-hidden max-md:w-32.5 md:max-lg:w-[22.1875rem] 2xl:w-[306.7px]" style={{ "--34440n": "#fff" } as React.CSSProperties}>
          <div className="w-full h-14 block relative z-2 shrink-0 max-lg:hidden">
            <div className="flex relative py-2 px-3 rounded-xl justify-center items-center content-center gap-2.5 bg-surface-2 cursor-default max-lg:hidden">
              <div className="w-full flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                <h6 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-component="heading" dir="auto">
                  {d.title}
                </h6>
              </div>
            </div>
          </div>
          <HighlightCell>Trained once, remembered</HighlightCell>
          <HighlightCell>Connected apps</HighlightCell>
          <HighlightCell>Scheduled and on watch</HighlightCell>
          <HighlightCell check={false}>Describe the job</HighlightCell>
          <HighlightCell>Built in</HighlightCell>
          <HighlightCell>Learns from feedback</HighlightCell>
          <HighlightCell>Handled</HighlightCell>
          <div className="w-[226.7px] h-full block absolute top-0 z-0 min-w-0 shrink-0 gap-2.5 overflow-clip bg-cover bg-center max-md:w-32.5 md:max-lg:w-[22.1875rem] 2xl:w-[306.7px] after:content-[''] after:block after:absolute after:inset-0 after:bg-black/15" style={{ backgroundImage: "url(/assets/cloned/images/why-choose-us/image.png)" }} />
        </li>
      );
    default:
      return null;
  }
}
