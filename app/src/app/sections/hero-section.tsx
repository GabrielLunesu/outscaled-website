import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Logo2 from "../components/logo2";
import Logo3 from "../components/logo3";
import { Logo2_meta, Logo3_meta } from "../ditto-meta";
import { Logo2_styles, Logo3_styles } from "../_styles";
import { logo2Data as logo2DataContent, logos as logosContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ logo2Data = logo2DataContent, logos = logosContent } = {}) {
  return (
    <div className="w-230 h-180 block relative shrink-0 order-[1] max-md:w-[20.9375rem] max-md:h-[35.525rem] md:max-lg:w-140 md:max-lg:h-[44.8rem] 2xl:w-[27.55rem] 2xl:h-[50.4rem] 2xl:order-[initial]">
      <div className="h-full flex relative p-3 rounded-[40px] flex-col justify-center items-center content-center gap-5 overflow-hidden bg-surface shadow-[var(--clr-9)_20px_40px_50px_0px,var(--clr-0)_2px_2px_20px_0px_inset] [backdrop-filter:blur(10px)] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-[40px]">
        <div className="w-224 h-[35.2875rem] flex relative rounded-4xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-color-001 max-md:w-[19.4375rem] max-md:h-[437.3px] md:max-lg:w-134 md:max-lg:h-[35.125rem] 2xl:w-[26.05rem] 2xl:h-[39.825rem]">
          <div className="h-full block absolute top-[0.0375rem] inset-x-0 z-1 opacity-80 min-w-0 rounded-4xl shrink-0 bg-foreground transform-[matrix(-1,0,0,-1,0,0)] origin-[448px_282.32px] max-md:top-0 max-md:origin-[155.5px_218.648px] md:max-lg:origin-[268px_280.977px] 2xl:top-[0.7px] 2xl:origin-[208.398px_318.609px]" style={{ maskImage: "linear-gradient(0deg, var(--foreground) 0%, var(--clr-10) 17.1171%, var(--clr-11) 35.1351%, var(--clr-11) 63.964%, var(--clr-10) 82.4324%, var(--foreground) 100%)" }} />
          <div className="w-224 flex relative z-2 p-3 flex-col justify-center items-start content-start shrink-0 gap-2 overflow-hidden max-md:w-[19.4375rem] md:max-lg:w-134 2xl:w-[26.05rem]">
            <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-hidden">
              <div className="w-[59.1px] flex relative py-1 px-3 rounded-[100px] justify-center items-center content-center shrink-0 gap-1.5 overflow-hidden bg-color-005 [backdrop-filter:blur(8px)] max-lg:w-[3.625rem]">
                <div className="basis-full shrink-0 flex relative justify-center items-center content-center gap-1 overflow-hidden">
                  <Icon5 />
                  <div className="w-[15.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-3.5">
                    <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                      4k
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[8.7125rem] flex relative py-1 px-3 rounded-[100px] justify-center items-center content-center shrink-0 gap-1.5 overflow-hidden bg-color-005 [backdrop-filter:blur(8px)] max-lg:w-[132.7px]">
                <div className="basis-full shrink-0 flex relative justify-center items-center content-center gap-1 overflow-hidden">
                  <Icon6 />
                  <div className="w-[5.9625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[88.7px]">
                    <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                      Video Model v7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex relative z-3 pb-3 px-3 justify-start items-center content-center shrink-0 gap-3 overflow-hidden">
            <div className="w-13 flex relative p-1.5 rounded-[100px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden bg-clr-0">
              <div className="w-10 flex relative p-1.5 rounded-[100px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden bg-clr-12">
                <div className="basis-full shrink-0 flex relative p-1.5 rounded-[100px] justify-center items-center content-center gap-2.5 overflow-hidden bg-color-001">
                  <Icon7 />
                </div>
              </div>
            </div>
            <div className="block relative shrink-0 order-[3]">
              <button className="h-[1.9rem] inline-flex relative p-2 rounded-[50px] justify-center items-center content-center justify-items-center [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[0.875rem] text-center whitespace-nowrap text-nowrap bg-background cursor-pointer" data-component="button" aria-label="Copy" aria-live="polite" height="100%" id="znX_BiwZU" type="button" width="100%">
                <span className="w-[33.7px] h-[0.9rem] block absolute top-2 left-[16.5px] invisible min-w-0 pointer-events-none" aria-hidden="true">
                  Copy
                </span>
                <span className="grid relative items-center justify-items-center grid-cols-[minmax(0,_1fr)]">
                  <span className="block col-start-1 row-start-1" data-ditto-id="motion-span">
                    Copy
                  </span>
                  <span className="block opacity-0 col-start-1 row-start-1" aria-hidden="true">
                    Copied!
                  </span>
                </span>
              </button>
            </div>
            <div className="w-[729.3px] relative flex-col justify-start grow shrink-0 basis-0 order-[2] overflow-clip whitespace-pre-line [word-break:break-word] [overflow-wrap:break-word] line-clamp-2 max-md:w-[144.3px] md:max-lg:w-[369.3px] 2xl:w-[15.625rem]">
              <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                a surreal photo of a full body tiger sitting in a bathtub in a roman home. The scene is lush with vibrant greenery and blooming flowers,bathed in soft natural light.
              </p>
            </div>
          </div>
          {logo2Data.map((d, i) => <Logo2 key={i} d={d} meta={Logo2_meta[i]} styles={Logo2_styles[i]} />)}
        </div>
        <div className="w-224 h-[6.9625rem] flex relative pb-2 px-2 flex-col justify-center items-center content-center shrink-0 gap-5 max-md:w-[19.4375rem] max-md:h-[5.4375rem] md:max-lg:w-134 md:max-lg:h-[6.925rem] 2xl:w-[26.05rem] 2xl:h-[7.825rem]">
          <div className="w-220 h-full flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-2 overflow-hidden max-md:w-[18.4375rem] md:max-lg:w-130 2xl:w-[25.05rem]">
            <div className="w-full h-full flex relative z-2 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 overflow-hidden">
              {logos.map((d, i) => <Logo3 key={i} d={d} meta={Logo3_meta[i]} styles={Logo3_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
