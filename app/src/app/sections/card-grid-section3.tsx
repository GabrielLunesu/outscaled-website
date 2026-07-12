"use client";
import { useState } from "react";
import Icon16 from "../svgs/svg-icon16";
import MediaTile5, { type MediaTile5Data } from "../components/media-tile5";
const MediaTile5_data: MediaTile5Data[] = [
    { text: "What can Outscaled agents actually do?", description: "Anything you'd give a capable new hire. They list products, answer customers, watch your ads, write your emails, generate images and videos for your products, and report your numbers in plain words. If a job lives in your store's tools, an agent can take it on." },
    { text: "Will agents do things without my permission?", description: "Only if you let them. Every agent works at the trust level you set: new hires propose and wait for your approval, proven ones work on their own within limits you define. Everything they do is on the record, and nothing goes live until you say so." },
    { text: "Do I need any technical skills?", description: "No. You describe the job in plain words, the way you'd brief a new hire. Outscaled turns that into a working agent with the right skills and apps. If you can write a message, you can build an agent." },
    { text: "Which apps does it work with?", description: "Your whole stack. Shopify, Meta and Google Ads, Gmail, Outlook, Slack, your support desk, Drive, and Calendar. Agents work inside the tools you already use, so nothing about your setup has to change." },
    { text: "Can agents create images and videos?", description: "Yes. Creative agents generate product images, ad visuals, and video content in your brand's style, and every asset lands in your workspace for review before it goes anywhere." },
    { text: "Can you build a custom agent for my store?", description: "Yes. Start from our prebuilt agents, build your own in a sentence, or tell us the job and we'll build an agent tailored to exactly how your store runs, delivered into your workspace." },
    { text: "Is my store's data safe?", description: "Yes. Your workspace is completely separate from every other store's, your data is never shared, and agents only reach the apps you've connected and lose that access the moment you revoke it." },
    { text: "How much does it cost?", description: "One plan, $99 a month for your whole workspace. You get a monthly allowance of credits on us, and your agents' work draws from it. Need more? Top up anytime. No tiers, no seat pricing, no surprises." },
    { text: "How do credits work?", description: "Every job an agent does uses credits based on the work involved. A quick answer costs little, a full product listing costs more. You always see what each run used, and your agents never spend beyond the credits you have." }
];
/** Card Grid section. */
export default function CardGridSection3({ mediaTile5Data = MediaTile5_data } = {}) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="w-full flex relative max-w-250 pt-15 pb-25 px-10 flex-col justify-center items-start content-start shrink-0 gap-10 overflow-clip max-lg:max-w-150 max-lg:pb-15 max-lg:px-5 max-lg:gap-8 2xl:max-w-300 2xl:pt-25 2xl:px-5 2xl:gap-22 2xl:[flex-direction:initial] grid-cols-1 2xl:grid-cols-2" id="faq">
      <div className="w-230 flex relative flex-col justify-center items-start content-start shrink-0 gap-10 overflow-clip max-md:w-[20.9375rem] max-lg:gap-5 md:max-lg:w-140 2xl:w-134 2xl:justify-between 2xl:self-stretch 2xl:flex-1 2xl:gap-[initial]">
        <div className="w-full max-w-175 flex relative flex-col justify-center items-start content-start shrink-0 gap-6 overflow-clip max-lg:gap-5">
          <div className="contents min-w-0">
            <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-center" dir="auto">
                FAQ
              </p>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <h2 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px] max-lg:text-center" data-component="heading" dir="auto">
                <span className="inline whitespace-nowrap text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    G
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    t
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    q
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    u
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    t
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    i
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    ?
                  </span>
                </span>
              </h2>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:max-w-150 2xl:max-w-150">
              <h6 className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-left text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:text-center max-lg:[text-wrap:initial] 2xl:[text-wrap:initial]" data-component="heading" dir="auto">
                We've got answers. Everything you need to know about Outscaled: agents, control, your data, and pricing.
              </h6>
            </div>
          </div>
        </div>
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="flex relative p-1 rounded-[30px] flex-col justify-center items-center content-center gap-6 overflow-hidden bg-surface">
              <div className="w-full flex relative z-0 p-7.5 rounded-3xl justify-start items-center content-center shrink-0 gap-12.5 overflow-hidden bg-color-001 max-lg:flex-col max-lg:gap-5">
                <div className="w-[47%] flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-1 max-lg:w-full max-lg:items-center max-lg:content-center max-lg:order-[1] max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[44.5%]">
                  <div className="w-full max-w-55 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                    <p className="block text-black [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] leading-[1.8125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-lg max-lg:leading-[1.625rem] max-lg:text-center" dir="auto">
                      Still have questions? Tell us about your store and we'll show you what your first agent could do.
                    </p>
                  </div>
                  <div className="w-[6.95rem] block relative shrink-0 max-lg:w-24">
                    <a className="flex relative pt-3 pb-2 justify-center items-center content-center gap-1 overflow-clip text-black cursor-pointer max-lg:[cursor:inherit]" data-component="link" href="https://framer.com/" rel="noopener">
                      <div className="basis-full shrink-0 flex relative pb-0.5 justify-center items-center content-center gap-1 overflow-hidden max-lg:gap-[initial] after:content-[''] after:block after:absolute after:inset-0 after:h-6">
                        <div className="w-[5.575rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-0.5 max-lg:w-[4.875rem]">
                          <div className="w-[5.575rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[4.875rem]">
                            <p className="block text-black [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-black max-lg:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] max-lg:[font-weight:inherit] max-lg:tracking-[inherit]" dir="auto">
                              Talk to us
                            </p>
                          </div>
                          <div className="w-[5.575rem] h-5 flex absolute -bottom-5.5 left-0 z-1 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[5.325rem] max-lg:h-[19.3px]">
                            <p className="block text-black [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-black max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                              Talk to us
                            </p>
                          </div>
                        </div>
                        <div className="flex relative py-1 pl-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                          <Icon16 />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-230 block relative z-1 shrink-0 max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-134 2xl:flex-1">
        <div className="block">
          <div className="block">
            {mediaTile5Data.map((d, i) => <MediaTile5 key={i} d={d} open={openIdx === i} last={i === mediaTile5Data.length - 1} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
