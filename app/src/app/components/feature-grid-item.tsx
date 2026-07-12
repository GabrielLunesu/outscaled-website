import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
export type FeatureGridItemData = {
  variant: string;
  badge?: string;
  title: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "gemini":
      return (
        <li className="w-[226.7px] flex relative p-3 rounded-[20px] flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-3 bg-color-001 max-lg:hidden 2xl:w-[306.7px]">
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="flex relative py-2 px-3 rounded-xl justify-center items-center content-center gap-2.5 bg-background cursor-default max-lg:hidden">
              <div className="w-[178.7px] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden 2xl:w-[258.7px]">
                <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-component="heading" dir="auto">
                  {d.title}
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon9 />
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon10 />
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <div className="w-[30.9px] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:hidden">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  ~60s
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon10 />
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <div className="w-[45.7px] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:hidden">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  {d.badge}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon10 />
            </div>
          </div>
        </li>
      );
    case "midjourney":
      return (
        <li className="w-[226.7px] flex relative p-3 rounded-[20px] flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-3 bg-color-001 max-lg:hidden 2xl:w-[306.7px]">
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="flex relative py-2 px-3 rounded-xl justify-center items-center content-center gap-2.5 bg-background cursor-default max-lg:hidden">
              <div className="w-[178.7px] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden 2xl:w-[258.7px]">
                <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-component="heading" dir="auto">
                  {d.title}
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon9 />
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <div className="w-[4.3375rem] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:hidden">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  Max 1080p
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <div className="w-[30.9px] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:hidden">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  ~60s
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon10 />
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <div className="w-[45.7px] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:hidden">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                  {d.badge}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative shrink-0 max-lg:hidden">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip max-lg:hidden">
              <Icon10 />
            </div>
          </div>
        </li>
      );
    case "erie":
      return (
        <li className="w-[226.7px] flex relative p-3 rounded-[20px] flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-3 overflow-hidden max-md:w-32.5 md:max-lg:w-[22.1875rem] 2xl:w-[306.7px]" style={{ "--34440n": "#fff" } as React.CSSProperties}>
          <div className="w-full block relative z-2 shrink-0 max-lg:hidden">
            <div className="flex relative py-2 px-3 rounded-xl justify-center items-center content-center gap-2.5 bg-surface-2 cursor-default max-lg:hidden">
              <div className="w-[178.7px] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden 2xl:w-[258.7px]">
                <h6 className="block text-accent [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-component="heading" dir="auto">
                  {d.title}
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full block relative z-1 shrink-0">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip">
              <Icon11 />
            </div>
          </div>
          <div className="w-full block relative z-1 shrink-0">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip">
              <div className="w-[3.6875rem] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:w-[3.425rem]">
                <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                  4K Native
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative z-1 shrink-0">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip">
              <Icon11 />
            </div>
          </div>
          <div className="w-full block relative z-1 shrink-0">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip">
              <div className="w-[58.7px] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:w-[3.4125rem]">
                <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                  Exclusive
                </p>
              </div>
            </div>
          </div>
          <div className="w-full block relative z-1 shrink-0">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip">
              <Icon11 />
            </div>
          </div>
          <div className="w-full block relative z-1 shrink-0">
            <div className="h-12 flex relative p-3 justify-center items-center content-center gap-2 overflow-clip">
              <div className="w-[75.5px] relative flex-col justify-start shrink-0 overflow-clip whitespace-pre text-nowrap line-clamp-2 max-lg:w-[4.3875rem]">
                <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                  50 imgs/day
                </p>
              </div>
            </div>
          </div>
          <div className="w-[226.7px] h-full block absolute top-0 z-0 min-w-0 shrink-0 gap-2.5 overflow-clip max-md:w-32.5 md:max-lg:w-[22.1875rem] 2xl:w-[306.7px] after:content-[''] after:block after:absolute after:inset-0" style={{ backgroundImage: "linear-gradient(207deg, var(--clr-13) -9%, var(--clr-14) 29%, var(--color-004) 91%)" }} />
        </li>
      );
    default:
      return null;
  }
}
