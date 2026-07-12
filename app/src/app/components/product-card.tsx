import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import Icon13 from "../svgs/svg-icon13";
export type ProductCardData = {
  variant: string;
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  price?: string;
};
/** A product card. */
export default function ProductCard({ d }: { d: ProductCardData }) {
  switch (d.variant) {
    case "free":
      return (
        <div className="w-full h-[536.3px] flex relative p-3 rounded-[30px] justify-center items-center content-center shrink-0 gap-2.5 bg-surface shadow-[var(--clr-0)_2px_2px_20px_0px_inset] max-md:h-[530.9px] md:max-lg:h-[31.875rem] 2xl:w-[32.5%] 2xl:h-150 2xl:flex-1">
          <div className="w-224 h-full flex relative p-9 rounded-[28px] flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip bg-color-005 shadow-[var(--color-005)_4px_4px_50px_0px_inset] max-md:w-[19.4375rem] md:max-lg:w-134 2xl:w-88 2xl:justify-between 2xl:gap-[initial]">
            <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-6 overflow-clip">
              <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                <div className="w-206 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.9375rem] md:max-lg:w-116 2xl:w-70">
                  <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px]" data-component="heading" dir="auto">
                    Basic Plan
                  </h6>
                </div>
              </div>
              <div className="w-[6.1rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[3.8125rem]">
                <h3 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.1875rem] leading-[3.1875rem] tracking-[-2.05px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-1.28px]" data-component="heading" dir="auto">
                  {d.title}
                </h3>
              </div>
            </div>
            <div className="w-206 h-[214.1px] flex relative flex-col justify-start items-center content-center shrink-0 gap-7.5 overflow-clip max-md:w-[14.9375rem] max-md:h-[234.1px] md:max-lg:w-116 md:max-lg:h-[213.3px] 2xl:w-70 2xl:h-[21.3625rem] 2xl:pt-10 2xl:flex-1">
              <div className="w-206 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.9375rem] md:max-lg:w-116 2xl:w-70">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  {d.description}
                </p>
              </div>
              <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-4 overflow-clip">
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          200 image generations/mo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          SD video generation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          3 concurrent Fast image jobs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          2 concurrent Fast video job
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          10 SD video generations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contents min-w-0">
              <div className="w-full block relative shrink-0">
                <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-between items-center content-center gap-6 overflow-clip text-primary bg-accent shadow-[var(--clr-17)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-17)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-17)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-17)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-17)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-17)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-17)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-18)_40px_30px_50px_-3px_inset,var(--clr-19)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-19)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-19)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-6)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-20)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-21)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-22)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
                  <div className="w-[4.5875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[70.1px]">
                    <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Get started
                    </p>
                  </div>
                  <div className="w-[4.5875rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Get started
                    </p>
                  </div>
                  <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-color-001">
                    <div className="w-6 block relative shrink-0 aspect-square bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    case "standard-plan":
      return (
        <div className="w-full h-[541.3px] flex relative p-3 rounded-[30px] justify-center items-center content-center shrink-0 gap-2.5 bg-surface shadow-[var(--clr-0)_2px_2px_20px_0px_inset] max-md:h-[35.1875rem] md:max-lg:h-[521.3px] 2xl:w-[32.5%] 2xl:h-150 2xl:flex-1">
          <div className="w-224 h-full flex relative p-9 rounded-[28px] flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip bg-color-005 shadow-[var(--color-005)_4px_4px_50px_0px_inset] max-md:w-[19.4375rem] md:max-lg:w-134 2xl:w-88 2xl:justify-between 2xl:gap-[initial]">
            <div className="w-206 flex relative flex-col justify-center items-center content-center shrink-0 gap-6 overflow-clip max-md:w-[14.9375rem] md:max-lg:w-116 2xl:w-70">
              <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                <div className="w-[43.8625rem] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-30 md:max-lg:w-[21.5625rem] 2xl:w-[9.8625rem]">
                  <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px]" data-component="heading" dir="auto">
                    Standard Plan
                  </h6>
                </div>
                <div className="w-[112.3px] block relative shrink-0 max-lg:w-[6.8125rem]">
                  <div className="flex relative py-1.5 px-2.5 rounded-[60px] justify-center items-center content-center gap-1.5 overflow-clip bg-color-001">
                    <Icon12 />
                    <div className="w-[68.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[4.0625rem]">
                      <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        {d.badge}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-end content-end shrink-0 gap-2.5 overflow-clip">
                <div className="w-[82.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[51.5px]">
                  <h3 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.1875rem] leading-[3.1875rem] tracking-[-2.05px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-1.28px]" data-component="heading" dir="auto">
                    {d.price}
                  </h3>
                </div>
                <div className="w-[34.7px] flex relative pb-1.5 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-[34.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                      / mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-206 h-[214.1px] flex relative flex-col justify-start items-center content-center shrink-0 gap-7.5 overflow-clip max-md:w-[14.9375rem] max-md:h-[15.9375rem] md:max-lg:w-116 md:max-lg:h-[213.3px] 2xl:w-70 2xl:h-[21.05rem] 2xl:pt-10 2xl:flex-1">
              <div className="w-206 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.9375rem] md:max-lg:w-116 2xl:w-70">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  {d.description}
                </p>
              </div>
              <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-4 overflow-clip">
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          15h Fast generations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          SD and HD video generation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          5 concurrent Fast image jobs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          3 concurrent Fast video jobs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.9375rem] md:max-lg:w-108 2xl:w-62">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          50 SD video generations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contents min-w-0">
              <div className="w-full block relative shrink-0">
                <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-between items-center content-center gap-6 overflow-clip text-primary bg-accent shadow-[var(--clr-17)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-17)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-17)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-17)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-17)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-17)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-17)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-18)_40px_30px_50px_-3px_inset,var(--clr-19)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-19)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-19)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-6)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-20)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-21)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-22)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
                  <div className="w-[4.5875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[70.1px]">
                    <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Get started
                    </p>
                  </div>
                  <div className="w-[4.5875rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Get started
                    </p>
                  </div>
                  <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-color-001">
                    <div className="w-6 block relative shrink-0 aspect-square bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    case "pro-plan":
      return (
        <div className="w-full h-[580.1px] flex relative p-3 rounded-[30px] justify-center items-center content-center shrink-0 gap-2.5 bg-surface shadow-[var(--clr-0)_2px_2px_20px_0px_inset] max-md:h-[38.9375rem] md:max-lg:h-[581.3px] 2xl:w-[32.5%] 2xl:h-150 2xl:flex-1">
          <div className="w-224 h-full flex relative p-9 rounded-[20px] flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip bg-accent shadow-[var(--clr-12)_4px_4px_60px_0px_inset] max-md:w-[19.4375rem] max-lg:p-[2.3125rem] md:max-lg:w-134 2xl:w-88 2xl:justify-between 2xl:gap-[initial]">
            <div className="w-206 flex relative flex-col justify-center items-center content-center shrink-0 gap-6 overflow-clip max-md:w-[14.8125rem] md:max-lg:w-115.5 2xl:w-70">
              <div className="w-full h-8 flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                <div className="w-[39.6125rem] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[53.3px] md:max-lg:w-[278.3px] 2xl:w-[5.6125rem]">
                  <h6 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px]" data-component="heading" dir="auto">
                    Pro Plan
                  </h6>
                </div>
                <div className="w-[11.2625rem] block relative shrink-0 max-lg:w-[173.7px]">
                  <div className="flex relative py-1.5 px-2.5 rounded-[60px] justify-center items-center content-center gap-1.5 overflow-clip bg-clr-23">
                    <Icon13 />
                    <div className="w-[8.5125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[129.7px]">
                      <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-end content-end shrink-0 gap-2.5 overflow-clip">
                <div className="w-[82.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                  <h3 className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.1875rem] leading-[3.1875rem] tracking-[-2.05px] line-through [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-component="heading" dir="auto">
                    $32
                  </h3>
                </div>
                <div className="w-[82.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[51.5px]">
                  <h3 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.1875rem] leading-[3.1875rem] tracking-[-2.05px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-1.28px]" data-component="heading" dir="auto">
                    {d.price}
                  </h3>
                </div>
                <div className="w-[34.7px] flex relative pb-1.5 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-[34.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                      / mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-206 h-[15.6875rem] flex relative flex-col justify-start items-center content-center shrink-0 gap-7.5 overflow-clip max-md:w-[14.8125rem] max-md:h-[291.7px] md:max-lg:w-115.5 md:max-lg:h-[250.1px] 2xl:w-70 2xl:h-[20.925rem] 2xl:pt-10 2xl:flex-1">
              <div className="w-206 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.8125rem] md:max-lg:w-115.5 2xl:w-70">
                <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  What’s included
                </p>
              </div>
              <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-4 overflow-clip">
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.8125rem] md:max-lg:w-107.5 2xl:w-62">
                        <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          30h Fast generations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.8125rem] md:max-lg:w-107.5 2xl:w-62">
                        <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          4K video generation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.8125rem] md:max-lg:w-107.5 2xl:w-62">
                        <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          15 concurrent Fast image jobs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.8125rem] md:max-lg:w-107.5 2xl:w-62">
                        <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          6 concurrent Fast video jobs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.8125rem] md:max-lg:w-107.5 2xl:w-62">
                        <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          100 SD video generations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Feature">
                    <div className="flex relative justify-center items-start content-start gap-3 overflow-clip" name="Feature">
                      <Icon11 />
                      <div className="w-198 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[12.8125rem] md:max-lg:w-107.5 2xl:w-62">
                        <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          Optional Fast hours top ups
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contents min-w-0">
              <div className="w-full block relative shrink-0">
                <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-between items-center content-center gap-6 overflow-clip text-primary bg-background shadow-[var(--clr-0)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-0)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-0)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-0)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-0)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-0)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-1)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-2)_40px_30px_50px_-3px_inset,var(--clr-3)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-4)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-4)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-4)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-5)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-6)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-7)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
                  <div className="w-[4.5875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[70.1px]">
                    <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Get started
                    </p>
                  </div>
                  <div className="w-[4.5875rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Get started
                    </p>
                  </div>
                  <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-accent">
                    <div className="w-6 block relative shrink-0 aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
