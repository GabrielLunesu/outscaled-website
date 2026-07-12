import Icon11 from "../svgs/svg-icon11";
import Icon13 from "../svgs/svg-icon13";
export type ProductCardData = {
  variant: string;
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  price?: string;
};
const features = [
  "1,000 Scale Credits on us, every month",
  "All prebuilt agents, plus build your own",
  "Done-for-you agent building",
  "Your whole workspace, invite your team",
  "1:1 Slack support, straight to the founders",
  "Private Discord community",
  "Top up credits anytime"
];
/** A product card. */
export default function ProductCard({ d }: { d: ProductCardData }) {
  if (d.variant !== "pro-plan") return null;
  return (
    <div className="w-full max-w-[520px] flex relative p-3 rounded-[30px] justify-center items-center content-center shrink-0 gap-2.5 bg-surface shadow-[var(--clr-0)_2px_2px_20px_0px_inset]">
      <div className="w-full flex relative p-9 rounded-[20px] flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip bg-accent shadow-[var(--clr-12)_4px_4px_60px_0px_inset] max-lg:p-[2.3125rem]">
        <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-6 overflow-clip">
          <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
            <div className="flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <h6 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px]" data-component="heading" dir="auto">
                {d.title}
              </h6>
            </div>
            <div className="block relative shrink-0">
              <div className="flex relative py-1.5 px-2.5 rounded-[60px] justify-center items-center content-center gap-1.5 overflow-clip bg-clr-23">
                <Icon13 />
                <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                  <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                    {d.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex relative justify-start items-end content-end shrink-0 gap-2.5 overflow-clip">
            <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
              <h3 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.1875rem] leading-[3.1875rem] tracking-[-2.05px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-1.28px]" data-component="heading" dir="auto">
                {d.price}
              </h3>
            </div>
            <div className="flex relative pb-1.5 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                  / mo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex relative flex-col justify-start items-center content-center shrink-0 gap-7.5">
          <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
              What&rsquo;s included
            </p>
          </div>
          <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-4">
            {features.map((feature, i) => (
              <div className="contents min-w-0" key={i}>
                <div className="w-full block relative shrink-0" data-name="Feature">
                  <div className="flex relative justify-start items-start content-start gap-3" data-name="Feature">
                    <Icon11 />
                    <div className="flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex relative flex-col justify-start items-center content-center shrink-0 gap-3">
          <div className="w-full block relative shrink-0">
            <a className="w-full flex relative py-3.5 px-7 rounded-[100px] justify-center items-center content-center overflow-clip bg-color-001 shadow-[0px_4px_16px_rgba(28,25,23,0.12)] cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
              <p className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.9375rem] font-medium leading-5 whitespace-pre text-nowrap" dir="auto">
                Get started
              </p>
            </a>
          </div>
          <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-[0.8125rem] leading-[1.0625rem] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
            Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
