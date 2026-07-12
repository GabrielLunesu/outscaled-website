"use client";
import { useState } from "react";
import Icon16 from "../svgs/svg-icon16";
import MediaTile5, { type MediaTile5Data } from "../components/media-tile5";
const MediaTile5_data: MediaTile5Data[] = [
    { text: "Do I own the images and videos I generate?", description: "Yes, completely. Everything you generate on a paid plan is yours- full intellectual property, no asterisks. You can use it commercially, sell it, publish it, put it on a billboard." },
    { text: "How fast does ERIE actually generate?", description: "Fast. Most images are ready in under 3 seconds at 1024px. 4K upscaling takes an additional 3–5 seconds. Video generation ranges from 30 seconds for short clips to around 4 minutes for a full 60-second 4K output — depending on complexity and server load." },
    { text: "Which AI models does ERIE use?", description: "All of them are ours. ERIE runs on a proprietary suite of five specialized models — VOID-Ultra for photorealism, Photon v3 for portraits, AnimaX for illustration and anime, Render3D for spatial and product design, and Cinematic for film-grade outputs. We build everything in-house and don't resell third-party models." },
    { text: "What makes Style DNA™ different from other style training tools?", description: "Most style training tools require hours of GPU time, technical knowledge, and dozens of images. Style DNA™ trains in under 5 minutes from just 3 to 5 reference images, entirely in our cloud. No setup, no technical skill, no waiting. And unlike LoRA models that are locked to one checkpoint, your Style DNA™ works across all five of our generation models." },
    { text: "Is there an API? Can I build with ERIE?", description: "Yes. All paid plans include full API access — REST endpoints, Python and Node.js SDKs, webhook support, and thorough documentation. Studio plans get dedicated endpoints with higher rate limits and priority throughput. If you're building something interesting on ERIE, we'd love to hear about it." },
    { text: "What happens if I want to cancel?", description: "No drama. You can cancel any time from your account settings — it takes about 10 seconds. Your plan stays active until the end of your current billing period, then it simply stops. No surprise charges, no retention emails, no hassle. We'll be here if you ever want to come back." }
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
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    W
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    '
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    v
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    g
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    t
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    a
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    w
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    r
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    .
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    E
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    v
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    r
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    y
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    t
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    h
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    i
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    g
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    y
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    u
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    d
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    t
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    k
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    w
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    a
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    b
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    u
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    t
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    E
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    R
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    I
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    E
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    -
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    p
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    l
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    a
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    ,
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    w
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    r
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    h
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    i
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    p
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    ,
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    m
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    d
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    l
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    s
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    ,
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    a
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    n
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    d
                  </span>
                </span>
                {" "}
                <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    m
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    o
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    r
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    e
                  </span>
                  <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                    .
                  </span>
                </span>
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
                    <p className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] leading-[1.8125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-lg max-lg:leading-[1.625rem] max-lg:text-center" dir="auto">
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          V
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          o
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          d
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          h
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          #
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          1
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          A
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          I
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          c
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          r
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          a
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          i
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          v
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          o
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          o
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          l
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          o
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          f
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          h
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          y
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          a
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          r
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          .
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="w-[6.95rem] block relative shrink-0 max-lg:w-24">
                    <a className="flex relative pt-3 pb-2 justify-center items-center content-center gap-1 overflow-clip text-primary cursor-pointer max-lg:[cursor:inherit]" data-component="link" href="https://framer.com/" rel="noopener">
                      <div className="basis-full shrink-0 flex relative pb-0.5 justify-center items-center content-center gap-1 overflow-hidden max-lg:gap-[initial] after:content-[''] after:block after:absolute after:inset-0 after:h-6">
                        <div className="w-[5.575rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-0.5 max-lg:w-[4.875rem]">
                          <div className="w-[5.575rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[4.875rem]">
                            <p className="block text-color-004 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-accent max-lg:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] max-lg:[font-weight:inherit] max-lg:tracking-[inherit]" dir="auto">
                              Start creating
                            </p>
                          </div>
                          <div className="w-[5.575rem] h-5 flex absolute -bottom-5.5 left-0 z-1 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[5.325rem] max-lg:h-[19.3px]">
                            <p className="block text-color-004 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-accent max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                              Start creating
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
                <div className="w-[25.0625rem] flex relative z-1 flex-col justify-start items-center content-center self-stretch grow shrink-0 basis-0 gap-2.5 max-md:w-[16.6875rem] max-lg:[align-self:initial] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-123 2xl:w-[13.0625rem]">
                  <div className="block relative shrink-0">
                    <div className="w-50 h-25 flex relative justify-center items-center content-center gap-1">
                      <div className="w-16 h-20 block relative grow shrink-0 basis-0 transform-[matrix3d(-0.984808,-0.173648,0,0,-0.173648,0.984808,0,0,0,0,-1,0,0,0,0,1)] origin-[32px_40px] pointer-events-none">
                        <div className="w-16 h-full block absolute top-0 left-0 pointer-events-none">
                          <img className="w-full h-20 block overflow-clip object-contain aspect-[auto_1503/2444] pointer-events-none" data-component="image" alt="CTA Icon" height="2444" sizes="max((100vw - 8px) / 3, 1px)" src="/assets/cloned/images/231b2139adb0.png" srcSet="/assets/cloned/images/3b71df948025.png 629w, /assets/cloned/images/5cef6f457c0d.png 1259w, /assets/cloned/images/231b2139adb0.png 1503w" width="1503" />
                        </div>
                      </div>
                      <div className="w-16 h-full flex relative py-2.5 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-2">
                        <div className="w-[69.1px] flex relative flex-col justify-start shrink-0 max-lg:w-[64.3px]">
                          <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] text-center text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
                            #1 Ranked Image Generation
                          </p>
                        </div>
                        <div className="w-16 flex relative flex-col justify-start shrink-0">
                          <p className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                            2026
                          </p>
                        </div>
                      </div>
                      <div className="w-16 h-20 block relative grow shrink-0 basis-0 transform-[matrix(0.984808,-0.173648,0.173648,0.984808,0,0)] origin-[32px_40px] pointer-events-none">
                        <div className="w-16 h-full block absolute top-0 left-0 pointer-events-none">
                          <img className="w-full h-20 block overflow-clip object-contain aspect-[auto_1503/2444] pointer-events-none" data-component="image" alt="CTA Icon" height="2444" sizes="max((100vw - 8px) / 3, 1px)" src="/assets/cloned/images/231b2139adb0.png" srcSet="/assets/cloned/images/3b71df948025.png 629w, /assets/cloned/images/5cef6f457c0d.png 1259w, /assets/cloned/images/231b2139adb0.png 1503w" width="1503" />
                        </div>
                      </div>
                    </div>
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
