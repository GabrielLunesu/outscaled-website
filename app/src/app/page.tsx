import { MagicText } from "@/components/ui/magic-text";
import DittoMotion from "./ditto/DittoMotion";
import NavScrollState from "./ditto/NavScrollState";
import CardGridSection from "./sections/card-grid-section";
import CardGridSection2 from "./sections/card-grid-section2";
import FeatureGridSection from "./sections/feature-grid-section";
import ProductGridSection from "./sections/product-grid-section";
import ProductGridSection2 from "./sections/product-grid-section2";
import CardGridSection3 from "./sections/card-grid-section3";
import Tile, { type TileData } from "./components/tile";
import Icon2 from "./svgs/svg-icon2";
import Logo4, { type Logo4Data } from "./components/logo4";
import MediaCard, { type MediaCardData } from "./components/media-card";
import Illustration from "./svgs/svg-illustration";
import Logo6, { type Logo6Data } from "./components/logo6";
import BentoGrid, { BentoBackdrop } from "./components/tutorials-bento";
import { Tile_styles, Logo4_styles, Logo6_styles, MediaCard_styles } from "./_styles";

const Tile_data: TileData[] = [
  { href: "/#use-cases", description: "Use Cases" },
  { href: "/#comparison", description: "Why Erie" },
  { href: "/#pricing", description: "Pricing" },
  { href: "/#faq", description: "FAQ" },
  { href: "/tutorials#hero", description: "Tutorials" }
];
const Logo4_data: Logo4Data[] = [
  { ariaposinset: "1", imgSrc: "/assets/cloned/images/integrations/meta-ads.svg", width: "320" },
  { ariaposinset: "2", imgSrc: "/assets/cloned/images/integrations/google-ads.svg", width: "356" },
  { ariaposinset: "3", imgSrc: "/assets/cloned/images/integrations/shopify.svg", width: "258" },
  { ariaposinset: "4", imgSrc: "/assets/cloned/images/integrations/slack.svg", width: "232" },
  { ariaposinset: "5", imgSrc: "/assets/cloned/images/integrations/more.svg", width: "292" }
];
const MediaCard_data: MediaCardData[] = [
  { imgSrc: "/assets/cloned/images/complete-package/2.svg", description: "Knowledge", title: "Trained on your brand", description2: "Every agent learns your voice, your products, and your rules before it writes a single word. The work sounds like you, because it was trained on you." },
  { imgSrc: "/assets/cloned/images/complete-package/3.svg", description: "Connected apps", title: "Works your whole stack", description2: "Your agents work inside Shopify, your ad accounts, your inbox, and your support desk. One team, every app, no switching tabs." },
  { imgSrc: "/assets/cloned/images/complete-package/4.svg", description: "Control", title: "Approvals built in", description2: "New hires propose and wait for your sign-off. Proven ones work on their own within the limits you set. Nothing goes live until you say so." },
  { imgSrc: "/assets/cloned/images/complete-package/5.svg", description: "Memory", title: "Gets better every run", description2: "Every correction you give is kept. The agent you hire today is the junior version of the one running things next month." }
];
const Logo6_data: Logo6Data[] = [
  { kind: "image", height: "1080", imgSrc: "/assets/cloned/images/clouds/2.svg" },
  { height: "1080", imgSrc: "/assets/cloned/images/clouds/5.svg" },
  { kind: "image", height: "1080", imgSrc: "/assets/cloned/images/clouds/3.svg" },
  { height: "1080", imgSrc: "/assets/cloned/images/clouds/1.svg" }
];

export default function Page() {
  return (
    <>
      <div className="block" id="main">
        <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-background">
          <div className="w-320 h-20 block fixed top-[-6px] left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-10 min-w-0 shrink-0 order-[-1000] transform-[matrix(1,0,0,1,-640,0)] max-md:w-[23.4375rem] max-md:transform-[matrix(1,0,0,1,-187.5,0)] md:max-lg:w-192 md:max-lg:transform-[matrix(1,0,0,1,-384,0)] 2xl:w-screen 2xl:transform-[translateX(-50%)]">
            <div className="contents">
              <nav className="w-320 flex relative py-3 px-4 justify-center items-center content-center gap-2 overflow-clip bg-color-002 [backdrop-filter:blur(10px)] max-md:w-[23.4375rem] max-md:py-2 md:max-lg:w-192 2xl:w-screen 2xl:[backdrop-filter:blur(0px)] 2xl:bg-[initial]" data-component="nav">
                <nav className="w-[95.5%] flex relative max-w-300 justify-center items-center content-center grow shrink-0 basis-0 gap-2 max-md:w-[84%] md:max-lg:w-[92.5%]" data-component="nav">
                  <div className="w-296.5 flex relative z-1 justify-start items-center content-center grow shrink-0 basis-0 gap-2 overflow-clip max-md:w-[17.5625rem] md:max-lg:w-168.5 2xl:w-[24.8125rem] 2xl:z-[initial] 2xl:grow-[initial] 2xl:basis-[initial]">
                    <div className="block relative shrink-0">
                      <a className="h-16 flex relative justify-start items-center content-center gap-1 text-primary cursor-pointer max-md:h-14" data-component="link" href="/">
                        <img className="h-16 w-auto block max-md:h-14" data-logo="dark" src="/assets/cloned/images/outscaled/logo.svg" alt="Outscaled" width="966" height="966" />
                        <img className="h-16 w-auto hidden max-md:h-14" data-logo="white" src="/assets/cloned/images/outscaled/logo-white.svg" alt="Outscaled" width="966" height="966" />
                      </a>
                    </div>
                  </div>
                  <div className="hidden 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-5 2xl:overflow-clip">
                    {Tile_data.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                  </div>
                  <div className="hidden 2xl:w-99 2xl:flex 2xl:relative 2xl:justify-end 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:text-center">
                    <div className="hidden 2xl:w-[134.3px] 2xl:block 2xl:relative 2xl:shrink-0">
                      <a className="hidden 2xl:flex 2xl:relative 2xl:pt-3 2xl:pb-2 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:gap-1 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer" href="/explore#hero">
                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:flex 2xl:relative 2xl:pb-0.5 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:gap-1 2xl:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[134.3px] after:h-6 max-lg:after:hidden">
                          <div className="hidden 2xl:w-[112.3px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-0.5">
                            <div className="hidden 2xl:w-[112.3px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Geist,_'Geist_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:tracking-[-0.29px] 2xl:text-start 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Get started
                              </p>
                            </div>
                            <div className="hidden 2xl:w-[112.3px] 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-5.5 2xl:z-1 2xl:min-w-0 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Geist,_'Geist_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:tracking-[-0.29px] 2xl:text-start 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Get started
                              </p>
                            </div>
                          </div>
                          <div className="hidden 2xl:flex 2xl:relative 2xl:py-1 2xl:pl-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:text-black">
                            <Icon2 />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="w-11 h-11 block relative z-1 shrink-0 order-[1] overflow-hidden cursor-pointer 2xl:hidden">
                  <div className="w-5 h-0.5 block absolute top-[26.5px] left-3 rounded-[10px] shrink-0 overflow-hidden bg-foreground 2xl:hidden" />
                  <div className="w-5 h-0.5 block absolute top-[15.5px] left-3 rounded-[10px] shrink-0 overflow-hidden bg-foreground 2xl:hidden" />
                </div>
              </nav>
            </div>
          </div>
          <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-color-001">
            <section className="w-full h-screen flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:flex-col" data-ditto-id="style-hero" id="hero">
              <div className="contents min-w-0">
                <div className="h-screen block absolute top-0 inset-x-0 z-0 shrink-0">
                  <div className="h-full relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/cloned/images/hero/hero.png)" }}>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
                  </div>
                </div>
              </div>
              <div className="w-[78%] h-full flex relative z-0 max-w-250 pt-10 pb-44 px-10 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-10 max-md:w-full max-lg:max-w-150 max-lg:px-5 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-full 2xl:max-w-300 2xl:pt-0 2xl:pb-72 2xl:px-5">
                <div className="w-150 flex relative max-w-150 flex-col justify-center items-center content-center shrink-0 gap-10 max-md:w-[20.9375rem] max-lg:max-w-125 max-lg:gap-8 md:max-lg:w-125 2xl:w-full 2xl:max-w-none">
                  <div className="flex relative flex-col justify-start items-center content-center shrink-0 gap-7.5 max-lg:justify-center max-lg:gap-6">
                    <div className="block relative shrink-0">
                      <div className="flex relative py-2 px-4 rounded-[100px] justify-center items-center content-center gap-2.5 overflow-clip bg-surface [backdrop-filter:blur(8px)]">
                        <span className="w-1.5 h-1.5 block relative shrink-0 rounded-full bg-color-001" />
                        <p className="block text-color-001 [font-family:var(--font-inter-tight),sans-serif] text-[0.875rem] font-medium leading-4 tracking-[0.2px] whitespace-pre text-nowrap" dir="auto">
                          Outscale your competition
                        </p>
                        <span className="block relative shrink-0 text-color-001 text-sm leading-4" aria-hidden="true">
                          ›
                        </span>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h1 className="block text-color-001 [font-family:var(--font-headland-one),serif] text-[5.1875rem] leading-[5.5rem] tracking-[-2px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[3.375rem] max-lg:leading-[3.75rem] max-lg:tracking-[-1px] 2xl:whitespace-nowrap 2xl:text-[3.5rem] 2xl:leading-[4rem] 2xl:tracking-[-1px]" data-component="heading" dir="auto">
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              S
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              p
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              g
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              j
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              b
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              .
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              S
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              g
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              v
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              g
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              h
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              m
                            </span>
                            <span className="inline-block">
                              .
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap" />
                        </h1>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h6 className="block max-w-[36rem] text-color-001 [font-family:var(--font-inter-tight),sans-serif] text-[1.1875rem] font-normal leading-[1.5625rem] tracking-[-0.58px] text-center text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:[text-wrap:initial] 2xl:[text-wrap:initial]" data-component="heading" dir="auto">
                          AI employees for e-com stores
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-7.5 max-lg:justify-start max-lg:gap-5 2xl:justify-center 2xl:[flex-direction:initial]">
                    <div className="block relative shrink-0">
                      <div className="contents">
                        <a className="inline-flex relative py-3.5 px-7 rounded-[100px] justify-center items-center content-center overflow-clip bg-color-001 shadow-[0px_4px_16px_rgba(28,25,23,0.12)] cursor-pointer" data-component="link" href="#">
                          <p className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.9375rem] font-medium leading-5 whitespace-pre text-nowrap" dir="auto">
                            Talk to us
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex absolute bottom-0 inset-x-0 z-1 pb-12 px-6 justify-center items-center content-center max-lg:pb-8">
                <ul className="flex relative justify-center items-center flex-wrap gap-x-3 gap-y-3 [list-style-type:none] list-outside max-lg:gap-x-2.5 max-md:w-full max-md:max-w-70 max-md:grid max-md:grid-cols-5 max-md:gap-2 [&_li]:transform-[none] [&_li_div]:h-6 [&_img]:h-6 max-md:[&_li_div]:h-5 max-md:[&_img]:h-5 [&_li]:w-auto [&_li_div]:w-auto [&_img]:w-auto max-md:[&_li]:w-full max-md:[&_li_div]:w-full max-md:[&_img]:w-full" role="group">
                  {Logo4_data.map((d, i) => <Logo4 key={i} d={d} styles={Logo4_styles[i]} />)}
                </ul>
              </div>
            </section>
            <section className="w-full h-screen flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip bg-black text-white" id="story">
              <div className="w-full max-w-190 flex flex-col px-6">
                <MagicText text={"You started a store because you had taste. An eye for products, a feel for what people want.\n\nThen the store grew, and so did the jobs. Listings at midnight. Tickets before coffee. Ad numbers you check like weather.\n\nSomewhere along the way you stopped being a founder and became your own busiest employee."} />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-4 z-1 pointer-events-none bg-gradient-to-t from-[#FFFEFB] to-transparent" />
            </section>
            <section className="flex relative max-w-250 py-25 px-10 flex-col justify-center items-center content-center shrink-0 gap-20 overflow-clip max-lg:max-w-150 max-lg:pt-20 max-lg:px-5 2xl:max-w-300 2xl:px-5" id="features">
              <div className="w-230 flex relative flex-col justify-center items-center content-center shrink-0 gap-6 overflow-clip max-md:w-[20.9375rem] max-lg:gap-5 md:max-lg:w-140 2xl:w-290">
                <div className="w-230 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-290">
                  <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                    The complete package
                  </p>
                </div>
                <div className="w-full max-w-175 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <h2 className="block [font-family:var(--font-headland-one),serif] text-[2.75rem] leading-[3.5rem] tracking-[-1px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2rem] max-lg:leading-[2.625rem] max-lg:tracking-[-0.5px]" data-component="heading" dir="auto">
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        T
                      </span>
                      <span className="inline-block">
                        h
                      </span>
                      <span className="inline-block">
                        a
                      </span>
                      <span className="inline-block">
                        t
                      </span>
                      <span className="inline-block">
                        '
                      </span>
                      <span className="inline-block">
                        s
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        w
                      </span>
                      <span className="inline-block">
                        h
                      </span>
                      <span className="inline-block">
                        y
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        w
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        b
                      </span>
                      <span className="inline-block">
                        u
                      </span>
                      <span className="inline-block">
                        i
                      </span>
                      <span className="inline-block">
                        l
                      </span>
                      <span className="inline-block">
                        t
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        t
                      </span>
                      <span className="inline-block">
                        h
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        m
                      </span>
                      <span className="inline-block">
                        o
                      </span>
                      <span className="inline-block">
                        s
                      </span>
                      <span className="inline-block">
                        t
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        c
                      </span>
                      <span className="inline-block">
                        o
                      </span>
                      <span className="inline-block">
                        m
                      </span>
                      <span className="inline-block">
                        p
                      </span>
                      <span className="inline-block">
                        l
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        t
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        A
                      </span>
                      <span className="inline-block">
                        I
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        m
                      </span>
                      <span className="inline-block">
                        p
                      </span>
                      <span className="inline-block">
                        l
                      </span>
                      <span className="inline-block">
                        o
                      </span>
                      <span className="inline-block">
                        y
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        s
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        i
                      </span>
                      <span className="inline-block">
                        n
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        c
                      </span>
                      <span className="inline-block">
                        o
                      </span>
                      <span className="inline-block">
                        m
                      </span>
                      <span className="inline-block">
                        m
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        r
                      </span>
                      <span className="inline-block">
                        c
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        .
                      </span>
                    </span>
                  </h2>
                </div>
              </div>
              <div className="w-full grid relative justify-center shrink-0 gap-5 [grid-auto-rows:min-content] grid-cols-[repeat(auto-fit,_minmax(334px,_1fr))]">
                <div className="contents min-w-0">
                  <div className="block relative shrink-0 col-start-[span_2] max-lg:col-start-[span_1]">
                    <div className="h-full flex relative p-10 rounded-[30px] flex-col justify-center items-start content-start gap-10 overflow-clip">
                      <div className="w-full flex relative z-1 justify-between items-start content-start shrink-0">
                        <img className="w-13.5 h-13.5 block relative shrink-0 [image-rendering:pixelated]" src="/assets/cloned/images/complete-package/1.svg" alt="" width="512" height="512" />
                      </div>
                      <div className="w-210 flex relative z-2 flex-col justify-center items-center content-center shrink-0 gap-3 overflow-clip max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[686.7px]">
                        <div className="w-210 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[686.7px]">
                          <h5 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.375rem] font-medium leading-[1.6875rem] tracking-[-0.67px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.1875rem] max-lg:leading-[1.4375rem] max-lg:tracking-[-0.58px]" data-component="heading" dir="auto">
                            Hire in a sentence
                          </h5>
                        </div>
                        <div className="w-210 flex relative flex-col justify-start shrink-0 max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[686.7px]">
                          <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                            Describe the job in plain words, the way you would to a new hire. ecomOS turns it into a working agent with a name, a mission, the right skills, and the apps it needs. No setup screens, no manuals. You talk, it takes the job.
                          </p>
                        </div>
                      </div>
                      <div className="w-230 h-full block absolute top-0 left-0 z-0 min-w-0 shrink-0 gap-2.5 overflow-clip bg-cover bg-center max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-[766.7px] after:content-[''] after:block after:absolute after:inset-0 after:bg-black/25" style={{ backgroundImage: "url(/assets/cloned/images/complete-package/image.png)" }} />
                    </div>
                  </div>
                </div>
                {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
              </div>
            </section>
            <section className="w-full flex relative pt-10 pb-20 px-10 flex-col justify-center items-center content-center shrink-0 gap-8 overflow-clip max-lg:px-5 2xl:px-5" id="social-proof">
              <div className="w-250 flex relative max-w-250 flex-col justify-center items-center content-center shrink-0 gap-8 max-md:w-[20.9375rem] max-lg:max-w-150 md:max-lg:w-150 2xl:w-470 2xl:max-w-none">
                <div className="contents min-w-0">
                  <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1 overflow-hidden">
                    <div className="w-[9.0625rem] h-[1.8125rem] block relative shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Illustration />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-225 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <h2 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px]" data-component="heading" dir="auto">
                    <span className="inline-block">
                      "The
                    </span>
                    {" "}
                    <span className="inline-block">
                      dream
                    </span>
                    {" "}
                    <span className="inline-block">
                      was
                    </span>
                    {" "}
                    <span className="inline-block">
                      never
                    </span>
                    {" "}
                    <span className="inline-block">
                      automation.
                    </span>
                    {" "}
                    <span className="inline-block">
                      The
                    </span>
                    {" "}
                    <span className="inline-block">
                      dream
                    </span>
                    {" "}
                    <span className="inline-block">
                      was
                    </span>
                    {" "}
                    <span className="inline-block">
                      walking
                    </span>
                    {" "}
                    <span className="inline-block">
                      into
                    </span>
                    {" "}
                    <span className="inline-block">
                      your
                    </span>
                    {" "}
                    <span className="inline-block">
                      store
                    </span>
                    {" "}
                    <span className="inline-block">
                      one
                    </span>
                    {" "}
                    <span className="inline-block">
                      morning
                    </span>
                    {" "}
                    <span className="inline-block">
                      and
                    </span>
                    {" "}
                    <span className="inline-block">
                      finding
                    </span>
                    {" "}
                    <span className="inline-block">
                      the
                    </span>
                    {" "}
                    <span className="inline-block">
                      work
                    </span>
                    {" "}
                    <span className="inline-block">
                      already
                    </span>
                    {" "}
                    <span className="inline-block">
                      done."
                    </span>
                  </h2>
                </div>
                {/* <div className="contents min-w-0">
                  <div className="flex relative py-2 pr-3 pl-2 rounded-2xl justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden">
                    <div className="w-30 basis-full shrink-0 block relative aspect-[6.79245/1]">
                      <div className="w-30 h-full block absolute top-0 left-0">
                        <img className="w-full h-4.5 block overflow-clip object-cover aspect-[auto_1280/257]" data-component="image" alt="" height="257" sizes="120px" src="https://placehold.co/1280x257" srcSet="https://placehold.co/512x103 512w, https://placehold.co/1024x206 1024w, https://placehold.co/1280x257 1280w" width="1280" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
            <section className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:flex-col" id="explore">
              <div className="contents min-w-0">
                <div className="h-full block absolute inset-0 z-0 shrink-0">
                  <div className="h-full block relative gap-2.5 overflow-clip bg-cover bg-center bg-no-repeat max-lg:[mask-image:initial]" data-ditto-id="style-div-2" style={{ backgroundImage: "url(/assets/cloned/images/skills-automations/image.png)" }}>
                    {Logo6_data.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles[i]} />)}
                  </div>
                </div>
              </div>
              <div className="w-250 flex relative max-w-250 pt-37.5 pb-25 px-10 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-15 max-md:w-[23.4375rem] max-lg:max-w-150 max-lg:px-5 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-150 2xl:w-300 2xl:max-w-300 2xl:px-5">
                <div className="contents min-w-0">
                  <CardGridSection />
                </div>
                <div className="w-full max-w-175 flex relative flex-col justify-center items-center content-center shrink-0 gap-7.5 max-lg:order-[1] max-lg:gap-5">
                  <div className="w-175 flex relative max-w-175 flex-col justify-center items-center content-center shrink-0 gap-6 max-md:w-[20.9375rem] max-lg:gap-5 md:max-lg:w-140">
                    <div className="w-175 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140">
                      <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        SKILLS AND AUTOMATIONS
                      </p>
                    </div>
                    <div className="w-175 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140">
                      <h2 className="block text-color-001 [font-family:var(--font-headland-one),serif] text-[2.75rem] leading-[3.5rem] tracking-[-1px] text-center max-lg:text-[2rem] max-lg:leading-[2.625rem] max-lg:tracking-[-0.5px]" data-component="heading" dir="auto">
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            S
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            w
                          </span>
                          <span className="inline-block">
                            h
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            t
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            y
                          </span>
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            u
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            t
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            m
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            c
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            t
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            k
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            .
                          </span>
                        </span>
                      </h2>
                    </div>
                    <div className="w-full max-w-150 flex relative flex-col justify-start shrink-0">
                      <h6 className="block text-color-001 [font-family:var(--font-inter-tight),sans-serif] text-[1.1875rem] font-normal leading-[1.5625rem] tracking-[-0.29px] text-center text-balance max-lg:text-sm max-lg:leading-[1.1875rem]" data-component="heading" dir="auto">
                        Every skill is a job your agents already know how to do. Every automation is a sentence you say once.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-4 block absolute bottom-0 inset-x-0 z-2 pointer-events-none bg-gradient-to-t from-[#FFFEFB] to-transparent" />
              <div className="w-full h-4 block absolute top-0 inset-x-0 z-2 pointer-events-none bg-gradient-to-b from-[#FFFEFB] to-transparent" />
            </section>
            <section className="w-full flex relative max-w-250 py-25 px-10 flex-col justify-center items-center content-center shrink-0 gap-9 overflow-clip max-lg:max-w-150 max-lg:pb-10 max-lg:px-5 2xl:max-w-300 2xl:px-5" id="use-cases">
              <div className="contents min-w-0">
                <CardGridSection2 />
              </div>
            </section>
            <section className="w-full flex relative max-w-250 pt-30 pb-25 px-10 flex-col justify-center items-center content-center shrink-0 gap-12 overflow-clip max-lg:max-w-150 max-lg:pt-20 max-lg:pb-15 max-lg:px-5 2xl:max-w-300 2xl:px-5" id="comparison">
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-6 max-lg:items-center max-lg:content-center max-lg:gap-5 2xl:items-center 2xl:content-center">
                <div className="contents min-w-0">
                  <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                    <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-center 2xl:text-center" dir="auto">
                      Why merchants choose Outscaled.
                    </p>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="flex relative max-w-175 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                    <h2 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px] max-lg:text-center 2xl:text-center" data-component="heading" dir="auto">
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          T
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          h
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          r
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          '
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          s
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          O
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          u
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          s
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          c
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          a
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          l
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          d
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          .
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          T
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          h
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          n
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
                        <span className="inline-block [filter:blur(0px)]">
                          r
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          '
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          s
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          v
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          r
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          y
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          t
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          h
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          i
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          n
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          g
                        </span>
                      </span>
                      {" "}
                      <span className="inline whitespace-nowrap text-nowrap">
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          l
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          s
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          e
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          .
                        </span>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="contents min-w-0">
                <FeatureGridSection />
              </div>
              {/* Stats section commented out for now
              <div className="w-230 flex relative max-w-300 flex-col justify-start items-center content-center shrink-0 order-[2] gap-15 max-lg:w-87.5 max-lg:gap-10 max-lg:order-[initial] 2xl:w-290 2xl:gap-22.5 2xl:[flex-direction:initial] 2xl:order-[initial]">
                <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-20 overflow-clip max-lg:flex-col max-lg:gap-10 2xl:w-[46%] 2xl:justify-between 2xl:flex-1 2xl:gap-[initial]">
                  <div className="block relative shrink-0">
                    <div className="contents">
                      <div className="flex relative flex-col justify-center items-start content-start gap-4 overflow-clip max-lg:items-center max-lg:content-center">
                        <div className="w-[9.8rem] block relative shrink-0 max-lg:w-[7.35rem]">
                          <div className="flex justify-start [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[4rem] font-medium leading-16 tracking-[-1.92px] text-left max-lg:text-5xl max-lg:leading-12 max-lg:tracking-[-1.44px]" aria-label="Counter: 2.4" aria-live="polite" role="status">
                            <div className="flex items-baseline">
                              <span className="h-full block text-accent">
                                2.4
                              </span>
                              <span className="h-full block" aria-hidden="true">
                                B+
                              </span>
                            </div>
                            <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap" aria-live="assertive">
                              Counter complete: 2.4B+
                            </span>
                          </div>
                        </div>
                        <div className="w-55.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2 overflow-clip">
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                            <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:text-center" data-component="heading" dir="auto">
                              Images Generated
                            </h6>
                          </div>
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0">
                            <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] max-lg:text-center" dir="auto">
                              The largest AI-generated image library on the planet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block relative shrink-0">
                    <div className="contents">
                      <div className="flex relative flex-col justify-center items-start content-start gap-4 overflow-clip max-lg:items-center max-lg:content-center">
                        <div className="w-[7.1625rem] block relative shrink-0 max-lg:w-[5.375rem]">
                          <div className="flex justify-start [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[4rem] font-medium leading-16 tracking-[-1.92px] text-left max-lg:text-5xl max-lg:leading-12 max-lg:tracking-[-1.44px]" aria-label="Counter: 2.3" aria-live="polite" role="status">
                            <div className="flex items-baseline">
                              <span className="h-full block text-accent">
                                2.3
                              </span>
                              <span className="h-full block" aria-hidden="true">
                                s
                              </span>
                            </div>
                            <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap" aria-live="assertive">
                              Counter complete: 2.3s
                            </span>
                          </div>
                        </div>
                        <div className="w-55.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2 overflow-clip">
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                            <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:text-center" data-component="heading" dir="auto">
                              Average Generation Speed
                            </h6>
                          </div>
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0">
                            <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] max-lg:text-center" dir="auto">
                              The fastest AI image engine on the market
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-20 overflow-clip max-lg:flex-col max-lg:gap-10 2xl:w-[46%] 2xl:justify-between 2xl:flex-1 2xl:gap-[initial]">
                  <div className="contents min-w-0">
                    <div className="w-55.5 block relative shrink-0 max-lg:w-87.5">
                      <div className="flex relative flex-col justify-center items-start content-start gap-4 overflow-clip max-lg:items-center max-lg:content-center">
                        <div className="w-[10.4375rem] block relative shrink-0 max-lg:w-[125.3px]">
                          <div className="flex justify-start [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[4rem] font-medium leading-16 tracking-[-1.92px] text-left max-lg:text-5xl max-lg:leading-12 max-lg:tracking-[-1.44px]" aria-label="Counter: 4.98" aria-live="polite" role="status">
                            <div className="flex items-baseline">
                              <span className="h-full block text-accent">
                                4.98
                              </span>
                              <span className="h-full block" aria-hidden="true">
                                %
                              </span>
                            </div>
                            <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap" aria-live="assertive">
                              Counter complete: 4.98%
                            </span>
                          </div>
                        </div>
                        <div className="w-55.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2 overflow-clip">
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                            <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:text-center" data-component="heading" dir="auto">
                              Average User Rating
                            </h6>
                          </div>
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0">
                            <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] max-lg:text-center" dir="auto">
                              Based on 18,400+ verified reviews
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-55.5 block relative shrink-0 max-lg:w-87.5">
                      <div className="flex relative flex-col justify-center items-start content-start gap-4 overflow-clip max-lg:items-center max-lg:content-center">
                        <div className="w-[10.4375rem] block relative shrink-0 max-lg:w-[125.3px]">
                          <div className="flex justify-start [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[4rem] font-medium leading-16 tracking-[-1.92px] text-left max-lg:text-5xl max-lg:leading-12 max-lg:tracking-[-1.44px]" aria-label="Counter: 99.9" aria-live="polite" role="status">
                            <div className="flex items-baseline">
                              <span className="h-full block text-accent">
                                99.9
                              </span>
                              <span className="h-full block" aria-hidden="true">
                                %
                              </span>
                            </div>
                            <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap" aria-live="assertive">
                              Counter complete: 99.9%
                            </span>
                          </div>
                        </div>
                        <div className="w-55.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2 overflow-clip">
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                            <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:text-center" data-component="heading" dir="auto">
                              Platform Uptime
                            </h6>
                          </div>
                          <div className="w-55.5 flex relative flex-col justify-start shrink-0">
                            <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:[font-family:Switzer,_'Switzer_Placeholder',_sans-serif] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] max-lg:text-center" dir="auto">
                              Platform Uptime Always on, always ready when you are
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              */}
            </section>
            <ProductGridSection />
            <section className="w-full flex relative max-w-250 pt-25 pb-20 px-10 flex-col justify-center items-center content-center shrink-0 gap-12 overflow-clip max-lg:max-w-150 max-lg:pb-30 max-lg:px-5 2xl:max-w-300 2xl:pb-35 2xl:px-5" id="testimonials">
              <div className="w-full flex relative justify-center items-end content-end shrink-0 gap-2.5 max-lg:flex-col max-lg:items-center max-lg:content-center max-lg:gap-5">
                <div className="w-[79%] flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-6 max-lg:w-full max-lg:gap-5 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-5/6">
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-center" dir="auto">
                        In Their Words
                      </p>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="flex relative max-w-175 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <h2 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px] max-lg:text-center" data-component="heading" dir="auto">
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            S
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            t
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            s
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            f
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            m
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            m
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            c
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            h
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            n
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            t
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            s
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            w
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            h
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            o
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            g
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            v
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            t
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            h
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            w
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            k
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            w
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            y
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            .
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="block relative shrink-0">
                  <div className="contents">
                    <a className="inline-flex relative py-3.5 px-7 rounded-[100px] justify-center items-center content-center overflow-clip bg-color-001 shadow-[0px_4px_16px_rgba(28,25,23,0.12)] cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
                      <p className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.9375rem] font-medium leading-5 whitespace-pre text-nowrap" dir="auto">
                        Get started free
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contents min-w-0">
                <ProductGridSection2 />
              </div>
            </section>
            <section className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:flex-col" id="tutorials">
              <div className="contents min-w-0">
                <div className="block absolute inset-0 z-0 shrink-0">
                  <div className="h-full block relative gap-2.5 overflow-clip" data-ditto-id="style-div-4">
                    <BentoBackdrop />
                  </div>
                </div>
              </div>
              <div className="w-[78%] flex relative z-0 max-w-250 pt-45 pb-10 px-10 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-10 overflow-clip max-md:w-full max-lg:max-w-150 max-lg:pt-37.5 max-lg:px-5 max-lg:pb-0 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-[78.5%] 2xl:w-full 2xl:max-w-full 2xl:pb-35 2xl:px-15 after:content-[''] after:block after:absolute after:inset-0">
                <div className="w-full flex relative justify-center items-end content-end shrink-0 gap-2.5 max-lg:flex-col max-lg:items-center max-lg:content-center max-lg:gap-5 2xl:max-w-300">
                  <div className="w-[77%] flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-6 overflow-clip max-lg:w-full max-lg:gap-5 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[82.5%]">
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-center" dir="auto">
                          Your team, your way
                        </p>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="flex relative max-w-175 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px] max-lg:text-center" data-component="heading" dir="auto">
                            <span className="inline whitespace-nowrap text-nowrap">
                              <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                                Everything
                              </span>
                            </span>
                            {" "}
                            <span className="inline whitespace-nowrap text-nowrap">
                              <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                                your
                              </span>
                            </span>
                            {" "}
                            <span className="inline whitespace-nowrap text-nowrap">
                              <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                                store
                              </span>
                            </span>
                            {" "}
                            <span className="inline whitespace-nowrap text-nowrap">
                              <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                                needs
                              </span>
                            </span>
                            {" "}
                            <span className="inline whitespace-nowrap text-nowrap">
                              <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                                done,
                              </span>
                            </span>
                            {" "}
                            <span className="inline whitespace-nowrap text-nowrap">
                              <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                                done.
                              </span>
                            </span>
                          </h2>
                      </div>
                    </div>
                  </div>
                  <div className="block relative shrink-0">
                    <div className="contents">
                      <a className="inline-flex relative py-3.5 px-7 rounded-[100px] justify-center items-center content-center overflow-clip bg-color-001 shadow-[0px_4px_16px_rgba(28,25,23,0.12)] cursor-pointer" data-component="link" href="/#pricing">
                        <p className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.9375rem] font-medium leading-5 whitespace-pre text-nowrap" dir="auto">
                          Get started free
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <main className="w-230 flex relative z-3 flex-col justify-start items-center content-center shrink-0 max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-300 2xl:max-w-300">
                  <BentoGrid />
                </main>
              </div>
            </section>
            <CardGridSection3 />
          </div>
          <footer className="w-full flex relative flex-col justify-center items-center content-center shrink-0 order-[1002] overflow-hidden bg-foreground pt-20 pb-0">
            <div className="relative z-20 flex justify-center items-center gap-8 pt-8 pb-4">
              <a className="text-color-005 hover:text-clr-14 transition-colors cursor-pointer" href="https://instagram.com" rel="noopener" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a className="text-color-005 hover:text-clr-14 transition-colors cursor-pointer" href="https://x.com" rel="noopener" target="_blank" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a className="text-color-005 hover:text-clr-14 transition-colors cursor-pointer" href="https://discord.com" rel="noopener" target="_blank" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
            </div>
            <div className="relative w-full overflow-hidden pointer-events-none select-none pt-12">
              <h1 className="text-[20vw] leading-none font-bold text-color-001/5 text-center -mb-12 tracking-tighter [font-family:Switzer,_'Switzer_Placeholder',_sans-serif]">
                OUTSCALED
              </h1>
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-foreground to-transparent" />
            </div>
          </footer>
        </div>
        <div className="block" id="template-overlay" />
      </div>
      {" "}
      <NavScrollState />
      <DittoMotion spec={{ "waapi": [{ "anchor": "motion-ul", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "transform": "translateX(0px)", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "transform": "translateX(-2380px)", "computedOffset": 1 }], "duration": 39666.666666666664, "delay": 0, "easing": "linear", "iterations": -1, "direction": "normal", "fill": "auto" }, { "anchor": "motion-ul-2", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "transform": "translateX(0px)", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "transform": "translateX(2380px)", "computedOffset": 1 }], "duration": 59500, "delay": 0, "easing": "linear", "iterations": -1, "direction": "normal", "fill": "auto" }, { "anchor": "motion-ul-3", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "transform": "translateX(0px)", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "transform": "translateX(-3024px)", "computedOffset": 1 }], "duration": 46523.07692307692, "delay": 0, "easing": "linear", "iterations": -1, "direction": "normal", "fill": "auto" }, { "anchor": "motion-4", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "opacity": "1", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "opacity": "0", "computedOffset": 1 }], "duration": 800, "delay": 0, "easing": "linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)", "iterations": 1, "direction": "normal", "fill": "both" }, { "anchor": "motion-5", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "opacity": "0", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "opacity": "1", "computedOffset": 1 }], "duration": 800, "delay": 0, "easing": "linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)", "iterations": 1, "direction": "normal", "fill": "both" }, { "anchor": "motion-6", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "opacity": "1", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "opacity": "0.5", "computedOffset": 1 }], "duration": 800, "delay": 0, "easing": "linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)", "iterations": 1, "direction": "normal", "fill": "both" }, { "anchor": "motion-7", "keyframes": [{ "offset": null, "easing": "linear", "composite": "auto", "opacity": "0.5", "computedOffset": 0 }, { "offset": null, "easing": "linear", "composite": "auto", "opacity": "1", "computedOffset": 1 }], "duration": 800, "delay": 0, "easing": "linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)", "iterations": 1, "direction": "normal", "fill": "both" }], "rotators": [], "reveals": [{ "anchor": "motion-span", "opacity": "1", "transform": "none", "transition": "", "visibility": "hidden" }], "marquees": [{ "anchor": "motion-ul-3", "pxPerSec": -63, "periodPx": 3024 }] }} />
    </>
  );
}
