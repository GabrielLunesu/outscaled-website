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
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Logo4, { type Logo4Data } from "./components/logo4";
import Icon8 from "./svgs/svg-icon8";
import Logo5, { type Logo5Data } from "./components/logo5";
import MediaCard, { type MediaCardData } from "./components/media-card";
import Illustration from "./svgs/svg-illustration";
import Logo6, { type Logo6Data } from "./components/logo6";
import Logo9, { type Logo9Data } from "./components/logo9";
import MediaTile4, { type MediaTile4Data } from "./components/media-tile4";
import Logo10, { type Logo10Data } from "./components/logo10";
import Icon17 from "./svgs/svg-icon17";
import Logo11, { type Logo11Data } from "./components/logo11";
import Tile3, { type Tile3Data } from "./components/tile3";
import Tile4, { type Tile4Data } from "./components/tile4";
import { Tile_styles, Logo4_styles, Logo5_styles, MediaCard_styles, Logo6_styles, Logo9_styles, MediaTile4_styles, Logo10_styles, Tile4_styles } from "./_styles";

const Tile_data: TileData[] = [
    { href: "/#use-cases", description: "Use Cases" },
    { href: "/#comparison", description: "Why Erie" },
    { href: "/#pricing", description: "Pricing" },
    { href: "/#faq", description: "FAQ" },
    { href: "/tutorials#hero", description: "Tutorials" }
];
const Logo4_data: Logo4Data[] = [
    { ariaposinset: "1", imgSrc: "/assets/cloned/images/fc7de95a2765.png", width: "345" },
    { ariaposinset: "2", imgSrc: "/assets/cloned/images/aa6f980af627.png", width: "414" },
    { ariaposinset: "3", imgSrc: "/assets/cloned/images/670f58fa8c5a.png", width: "555", sizes: "(min-width: 1440px) 219.2593px, (min-width: 810px) and (max-width: 1439.98px) 219.2593px, (max-width: 809.98px) 219.2593px", srcSet: "/assets/cloned/images/0f36254def1e.png 512w, /assets/cloned/images/670f58fa8c5a.png 555w" },
    { ariaposinset: "4", imgSrc: "/assets/cloned/images/6882c9114888.png", width: "438" },
    { ariaposinset: "5", imgSrc: "/assets/cloned/images/492a9aee7001.png", width: "528", sizes: "(min-width: 1440px) 208.5926px, (min-width: 810px) and (max-width: 1439.98px) 208.5926px, (max-width: 809.98px) 208.5926px", srcSet: "/assets/cloned/images/4602dc1d2094.png 512w, /assets/cloned/images/492a9aee7001.png 528w" }
];
const Logo5_data: Logo5Data[] = [
    { height: "2600", sizes: "calc(calc((calc(max((min(100vw, 1000px) - 100px) / 2, 50px) * 2 + 20px) - 120px) * 0.3752) * 0.9994)", imgSrc: "/assets/cloned/images/15968b85b930.png", srcSet: "/assets/cloned/images/1d5280f5eff1.png 512w, /assets/cloned/images/906077447ead.png 1024w, /assets/cloned/images/74dcca46f9d9.png 2048w, /assets/cloned/images/15968b85b930.png 2600w", width: "2600" },
    { height: "4491", sizes: "calc(calc((calc(max((min(100vw, 1000px) - 100px) / 2, 50px) * 2 + 20px) - 120px) * 0.669) * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w", width: "8000" },
    { height: "4491", sizes: "calc(calc((calc(max((min(100vw, 1000px) - 100px) / 2, 50px) * 2 + 20px) - 120px) * 0.5835) * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w", width: "8000" }
];
const MediaCard_data: MediaCardData[] = [
    { icon: <>
                <use href="#748090325" />
                </>, description: "Performance", title: "Sub-3s Generation", description2: "Our distillation pipeline produces stunning 1024px images in under 3 seconds. Iterate fast, ship faster." },
    { icon: <>
                <use href="#336289499" />
                </>, description: "AI Training", title: "Style DNA™", description2: "Upload 3–5 reference images to train a personal style fingerprint in under 5 mins. Consistent aesthetics, every time." },
    { icon: <>
                <use href="#19207876" />
                </>, description: "Exclusive", title: "Image → Video", description2: "Animate any image with motion prompts. Cinematic camera moves, physics-aware dynamics, up to 60 seconds of 4K output." },
    { icon: <>
                <use href="#2497355416" />
                </>, description: "Editing", title: "Inpainting Canvas", description2: "Surgically edit any region with natural language. Replace, extend, or refine — non-destructive, infinite history." }
];
const Logo6_data: Logo6Data[] = [
    { kind: "image", height: "4491", sizes: "calc(calc(100vw + 363px) * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" },
    { height: "4491", sizes: "calc(1000px * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" },
    { kind: "image", height: "4517", sizes: "calc(500px * 0.9997)", imgSrc: "/assets/cloned/images/88ab5ebd250d.png", srcSet: "/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" },
    { height: "4517", sizes: "calc(1000px * 0.9997)", imgSrc: "/assets/cloned/images/88ab5ebd250d.png", srcSet: "/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" }
];
const Logo9_data: Logo9Data[] = [
    { height: "4517", sizes: "calc(1000px * 0.9997)", imgSrc: "/assets/cloned/images/88ab5ebd250d.png", srcSet: "/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" },
    { height: "4491", sizes: "calc(1000px * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" },
    { height: "4491", sizes: "calc(1000px * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" },
    { height: "4517", sizes: "calc(1000px * 0.9997)", imgSrc: "/assets/cloned/images/88ab5ebd250d.png", srcSet: "/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" }
];
const MediaTile4_data: MediaTile4Data[] = [
    { href: "/tutorials/your-first-image-in-5-minutes-description", height: "2464", imgSrc: "/assets/cloned/images/e478929f98bc.png", srcSet: "/assets/cloned/images/0546315834c2.png 771w, /assets/cloned/images/304493b11e3d.png 1542w, /assets/cloned/images/e478929f98bc.png 1856w", width: "1856", description: "4:58", description2: "Your First Image in 5 Minutes", description3: "Open ERIE for the first time and generate your first stunning image from scratch. Learn the basic interface, how to write your first prompt, and how to download your result." },
    { href: "/tutorials/how-to-write-better-prompts", height: "816", imgSrc: "/assets/cloned/images/cbc4b22cbe45.png", srcSet: "/assets/cloned/images/0b57b3be2ea2.png 512w, /assets/cloned/images/cc5326df970a.png 1024w, /assets/cloned/images/cbc4b22cbe45.png 1456w", width: "1456", description: "9:45", description2: "How to Write Better Prompts", description3: "The difference between a good image and a great one is almost always the prompt. Learn the anatomy of a strong prompt like style, subject, lighting, mood, and camera and see the results in real time." },
    { href: "/tutorials/how-to-train-your-personal-style", height: "1632", imgSrc: "/assets/cloned/images/45a662907289.png", srcSet: "/assets/cloned/images/41a70a9e739c.png 512w, /assets/cloned/images/8dca4d8ac36a.png 1024w, /assets/cloned/images/5814463e56e8.png 2048w, /assets/cloned/images/45a662907289.png 2912w", width: "2912", description: "11:30", description2: "How to Train Your Personal Style", description3: "Upload 3 to 5 reference images and train a style fingerprint that makes every generation feel unmistakably yours. Learn how to pick the right references and apply your style across all five models." },
    { href: "/tutorials/animating-a-still-image-into-video", height: "816", imgSrc: "/assets/cloned/images/8683f78164c5.png", srcSet: "/assets/cloned/images/046d12d3b82b.png 512w, /assets/cloned/images/29b95ab271fe.png 1024w, /assets/cloned/images/8683f78164c5.png 1456w", width: "1456", description: "12:15", description2: "Animating a Still Image into Video", description3: "Take any image, yours or ERIE-generated and turn it into a cinematic video clip using motion prompts. Learn camera movements, physics settings, duration controls, and export formats." },
    { href: "/tutorials/how-to-edit-any-part-of-an-image", height: "816", imgSrc: "/assets/cloned/images/04012cdce64c.png", srcSet: "/assets/cloned/images/62968f9b4c3c.png 512w, /assets/cloned/images/bee3368163ef.png 1024w, /assets/cloned/images/04012cdce64c.png 1456w", width: "1456", description: "8:40", description2: "How to Edit Any Part of an Image", description3: "Use ERIE's inpainting canvas to surgically edit specific regions of any image using natural language. Replace backgrounds, fix details, swap objects, and extend edges non-destructively." },
    { href: "/tutorials/learn-negative-prompting", height: "816", imgSrc: "/assets/cloned/images/32c3bcc8ddcc.png", srcSet: "/assets/cloned/images/b17d225c51c8.png 512w, /assets/cloned/images/27a90e421f35.png 1024w, /assets/cloned/images/32c3bcc8ddcc.png 1456w", width: "1456", description: "6:18", description2: "Learn Negative Prompting", description3: "One of the most underused tools in AI generation. Learn how negative prompts work, when to use them, and the exact phrases that remove blur, distortion, bad lighting, and unwanted elements." }
];
const Logo10_data: Logo10Data[] = [
    { name: "Image 1", name2: "Image 1", kind: "image", height: "2464", imgSrc: "/assets/cloned/images/5010e6e25306.png", srcSet: "/assets/cloned/images/5a606878e56d.png 771w, /assets/cloned/images/66a25826c2da.png 1542w, /assets/cloned/images/5010e6e25306.png 1856w", width: "1856" },
    { name: "Image 2", name2: "Image 2", kind: "image", height: "1200", imgSrc: "/assets/cloned/images/271b956d730d.png", srcSet: "/assets/cloned/images/d267f8646704.png 846w, /assets/cloned/images/271b956d730d.png 992w", width: "992" },
    { name: "Image 3", name2: "Image 3", kind: "image", height: "900", imgSrc: "/assets/cloned/images/405d8f0448c9.png", srcSet: "/assets/cloned/images/02dd3e9442f6.png 512w, /assets/cloned/images/38fc33030829.png 1024w, /assets/cloned/images/405d8f0448c9.png 1200w", width: "1200" },
    { name: "Image 4", name2: "Image 4", kind: "image", height: "2912", imgSrc: "/assets/cloned/images/f7c3040dadd0.png", srcSet: "/assets/cloned/images/4ea8ed19360c.png 573w, /assets/cloned/images/14a7da653cbd.png 1147w, /assets/cloned/images/f7c3040dadd0.png 1632w", width: "1632" },
    { name: "Image 5", name2: "Image 5", kind: "image", height: "1536", imgSrc: "/assets/cloned/images/5dccbbe2ca68.png", srcSet: "/assets/cloned/images/2fab3216cbf0.png 512w, /assets/cloned/images/5dccbbe2ca68.png 768w", width: "768" },
    { name: "Image 6", name2: "Image 6", kind: "image", height: "1200", imgSrc: "/assets/cloned/images/9d00f7b47f61.png", srcSet: "/assets/cloned/images/d50b9512c4f7.png 770w, /assets/cloned/images/9d00f7b47f61.png 903w", width: "903" },
    { name: "Image 1", name2: "Image 1", height: "2464", imgSrc: "/assets/cloned/images/5010e6e25306.png", srcSet: "/assets/cloned/images/5a606878e56d.png 771w, /assets/cloned/images/66a25826c2da.png 1542w, /assets/cloned/images/5010e6e25306.png 1856w", width: "1856" },
    { name: "Image 2", name2: "Image 2", height: "1200", imgSrc: "/assets/cloned/images/271b956d730d.png", srcSet: "/assets/cloned/images/d267f8646704.png 846w, /assets/cloned/images/271b956d730d.png 992w", width: "992" }
];
const Logo11_data: Logo11Data[] = [
    { href: "https://x.com/home", icon: <>
            <use href="#1688045918" />
            </> },
    { href: "https://www.instagram.com/", icon: <>
            <use href="#942143898" />
            </> },
    { href: "https://www.youtube.com/", icon: <>
            <use href="#3761207643" />
            </> }
];
const Tile3_data: Tile3Data[] = [
    { href: "/tutorials/your-first-image-in-5-minutes-description#hero", description: "Your First Image in 5 Minutes" },
    { href: "/tutorials/how-to-write-better-prompts#hero", description: "How to Write Better Prompts" },
    { href: "/tutorials/how-to-train-your-personal-style#hero", description: "How to Train Your Personal Style" },
    { href: "/tutorials/animating-a-still-image-into-video#hero", description: "Animating a Still Image into Video" },
    { href: "/tutorials/how-to-edit-any-part-of-an-image#hero", description: "How to Edit Any Part of an Image" },
    { href: "/tutorials/learn-negative-prompting#hero", description: "Learn Negative Prompting" }
];
const Tile4_data: Tile4Data[] = [
    { href: "/#hero", description: "Home" },
    { href: "/#features", description: "Features" },
    { href: "/#use-cases", description: "Use cases" },
    { href: "/#comparison", description: "Comparison" },
    { href: "/#pricing", description: "Pricing" },
    { href: "/#faq", description: "FAQ" },
    { href: "/explore#hero", description: "Explore" },
    { href: "/tutorials#hero", description: "Tutorials" }
];

export default function Page() {
  return (
    <>
      <div className="block" id="main">
        <div className="h-[15825.5px] min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-background max-md:h-[18014.7px] md:max-lg:h-[1090.5625rem] 2xl:h-[11626.1px]">
          <div className="w-320 h-17 block fixed left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-10 min-w-0 shrink-0 order-[-1000] transform-[matrix(1,0,0,1,-640,0)] max-md:w-[23.4375rem] max-md:transform-[matrix(1,0,0,1,-187.5,0)] md:max-lg:w-192 md:max-lg:transform-[matrix(1,0,0,1,-384,0)] 2xl:w-screen 2xl:transform-[translateX(-50%)]">
            <div className="contents">
              <nav className="w-320 flex relative py-3 px-5 justify-center items-center content-center gap-2.5 overflow-clip bg-color-002 [backdrop-filter:blur(10px)] max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-screen 2xl:[backdrop-filter:blur(0px)] 2xl:bg-[initial]" data-component="nav">
                <nav className="w-[95.5%] flex relative max-w-300 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 max-md:w-[84%] md:max-lg:w-[92.5%]" data-component="nav">
                  <div className="w-296.5 flex relative z-1 justify-start items-center content-center grow shrink-0 basis-0 gap-3 overflow-clip max-md:w-[17.5625rem] md:max-lg:w-168.5 2xl:w-[24.8125rem] 2xl:z-[initial] 2xl:grow-[initial] 2xl:basis-[initial]">
                    <div className="block relative shrink-0">
                      <a className="h-14 flex relative justify-start items-center content-center gap-1 text-primary cursor-pointer" data-component="link" href="/">
                        <img className="h-14 w-auto block" data-logo="dark" src="/assets/cloned/images/outscaled/logo.svg" alt="Outscaled" width="966" height="966" />
                        <img className="h-14 w-auto hidden" data-logo="white" src="/assets/cloned/images/outscaled/logo-white.svg" alt="Outscaled" width="966" height="966" />
                      </a>
                    </div>
                  </div>
                  <div className="hidden 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-5 2xl:overflow-clip">
                    {Tile_data.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                  </div>
                  <button className="hidden 2xl:w-99 2xl:flex 2xl:relative 2xl:justify-end 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:text-center 2xl:cursor-default">
                    <div className="hidden 2xl:w-[134.3px] 2xl:block 2xl:relative 2xl:shrink-0">
                      <div className="hidden 2xl:flex 2xl:relative 2xl:pt-3 2xl:pb-2 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:gap-1 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer" href="/explore#hero">
                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:flex 2xl:relative 2xl:pb-0.5 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:gap-1 2xl:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[134.3px] after:h-6 max-lg:after:hidden">
                          <div className="hidden 2xl:w-[112.3px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-0.5">
                            <div className="hidden 2xl:w-[112.3px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Geist,_'Geist_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-[1.25rem] 2xl:tracking-[-0.29px] 2xl:text-start 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Explore creations
                              </p>
                            </div>
                            <div className="hidden 2xl:w-[112.3px] 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-5.5 2xl:z-1 2xl:min-w-0 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Geist,_'Geist_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-[1.25rem] 2xl:tracking-[-0.29px] 2xl:text-start 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Explore creations
                              </p>
                            </div>
                          </div>
                          <div className="hidden 2xl:flex 2xl:relative 2xl:py-1 2xl:pl-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip">
                            <Icon2 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </nav>
                <div className="w-11 h-11 block relative z-1 shrink-0 order-[1] overflow-hidden cursor-pointer 2xl:hidden">
                  <div className="w-5 h-0.5 block absolute top-[26.5px] left-3 rounded-[10px] shrink-0 overflow-hidden bg-foreground 2xl:hidden" />
                  <div className="w-5 h-0.5 block absolute top-[15.5px] left-3 rounded-[10px] shrink-0 overflow-hidden bg-foreground 2xl:hidden" />
                </div>
              </nav>
            </div>
          </div>
          <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-color-001">
            <section className="w-full h-[1482.3px] flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-md:h-[81.4875rem] max-lg:flex-col md:max-lg:h-[86.1875rem] 2xl:h-270" data-ditto-id="style-hero" id="hero">
              <div className="contents min-w-0">
                <div className="h-screen block absolute top-0 inset-x-0 z-0 shrink-0 p-4">
                  <div className="h-full relative rounded-[40px] overflow-clip bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/cloned/images/hero/hero.png)" }}>
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
                  </div>
                </div>
              </div>
              <div className="w-[78%] h-full flex relative z-0 max-w-250 pt-20 pb-25 px-10 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-10 max-md:w-full max-lg:max-w-150 max-lg:px-5 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[62.5%] 2xl:max-w-300 2xl:pt-8 2xl:pb-10 2xl:px-5 2xl:justify-between 2xl:[flex-direction:initial] 2xl:gap-[initial]">
                <div className="w-150 flex relative max-w-150 flex-col justify-center items-center content-center shrink-0 gap-10 max-md:w-[20.9375rem] max-lg:max-w-125 max-lg:gap-8 md:max-lg:w-125 2xl:flex-1">
                  <div className="flex relative flex-col justify-start items-center content-center shrink-0 gap-7.5 max-lg:justify-center max-lg:gap-6 2xl:items-start 2xl:content-start">
                    <div className="w-[167.5px] block relative shrink-0 max-lg:w-[10.1rem]">
                      <div className="flex relative py-1.5 px-2.5 rounded-[60px] justify-center items-center content-center gap-1.5 overflow-clip bg-surface [backdrop-filter:blur(8px)]">
                        <Icon3 />
                        <div className="w-[123.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[7.35rem]">
                          <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                            Video Model v7
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h1 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[5.1875rem] leading-[5.1875rem] tracking-[-3.33px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[3.375rem] max-lg:leading-[3.375rem] max-lg:tracking-[-2.18px] 2xl:text-left" data-component="heading" dir="auto">
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block">
                              C
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              a
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
                              a
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              y
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              h
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
                              y
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              u
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
                              i
                            </span>
                            <span className="inline-block">
                              m
                            </span>
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              g
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              e
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
                        <h6 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:[text-wrap:initial] 2xl:text-left 2xl:[text-wrap:initial]" data-component="heading" dir="auto">
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              T
                            </span>
                            <span className="inline-block">
                              h
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
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
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              p
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              w
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              f
                            </span>
                            <span className="inline-block">
                              u
                            </span>
                            <span className="inline-block">
                              l
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              A
                            </span>
                            <span className="inline-block">
                              I
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              m
                            </span>
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              g
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              d
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              v
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              g
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              g
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              .
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              T
                            </span>
                            <span className="inline-block">
                              u
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              w
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              k
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              c
                            </span>
                            <span className="inline-block">
                              h
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                          </span>
                          {" "}
                          <span className="inline">
                            <span className="inline-block">
                              p
                            </span>
                            <span className="inline-block">
                              h
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                            <span className="inline-block">
                              r
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              l
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              t
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              c
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              v
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              u
                            </span>
                            <span className="inline-block">
                              a
                            </span>
                            <span className="inline-block">
                              l
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              s
                            </span>
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
                              n
                            </span>
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              .
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              N
                            </span>
                            <span className="inline-block">
                              o
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              g
                            </span>
                            <span className="inline-block">
                              n
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              s
                            </span>
                            <span className="inline-block">
                              k
                            </span>
                            <span className="inline-block">
                              i
                            </span>
                            <span className="inline-block">
                              l
                            </span>
                            <span className="inline-block">
                              l
                            </span>
                            <span className="inline-block">
                              s
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:text-nowrap 2xl:text-nowrap">
                            <span className="inline-block">
                              n
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              e
                            </span>
                            <span className="inline-block">
                              d
                            </span>
                            <span className="inline-block">
                              .
                            </span>
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-7.5 max-lg:justify-start max-lg:gap-5 2xl:justify-start 2xl:[flex-direction:initial]">
                    <div className="block relative shrink-0">
                      <div className="contents">
                        <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-center items-center content-center gap-6 overflow-clip text-primary bg-background shadow-[var(--clr-0)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-0)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-0)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-0)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-0)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-0)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-1)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-2)_40px_30px_50px_-3px_inset,var(--clr-3)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-4)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-4)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-4)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-5)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-6)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-7)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
                          <div className="w-[5.575rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[5.325rem]">
                            <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                              Start creating
                            </p>
                          </div>
                          <div className="w-[5.575rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                              Start creating
                            </p>
                          </div>
                          <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-accent">
                            <div className="w-6 block relative shrink-0 aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="block relative shrink-0">
                      <div className="contents">
                        <a className="flex relative pt-3 pb-2 justify-center items-center content-center gap-1 overflow-clip text-primary 2xl:cursor-pointer" data-component="link" href="/#use-cases">
                          <div className="basis-full shrink-0 flex relative pb-0.5 justify-center items-center content-center overflow-hidden 2xl:gap-1 after:content-[''] after:block after:absolute after:inset-0 after:h-6">
                            <div className="w-[5.6125rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-0.5 max-lg:w-[83.5px] 2xl:w-[5.825rem]">
                              <div className="w-[5.6125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[83.5px] 2xl:w-[5.825rem]">
                                <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem] 2xl:[font-family:Geist,_'Geist_Placeholder',_sans-serif] 2xl:font-medium 2xl:leading-[1.25rem] 2xl:tracking-[-0.29px]" dir="auto">
                                  See use cases
                                </p>
                              </div>
                              <div className="w-[5.825rem] h-5 flex absolute -bottom-5.5 left-0 z-1 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[5.5625rem] max-lg:h-[19.3px]">
                                <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                                  See use cases
                                </p>
                              </div>
                            </div>
                            <div className="flex relative py-1 pl-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                              <Icon4 />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <img className="w-230 h-180 block relative shrink-0 order-[1] object-contain max-md:w-[20.9375rem] max-md:h-[35.525rem] md:max-lg:w-140 md:max-lg:h-[44.8rem] 2xl:w-[24rem] 2xl:h-[44rem] 2xl:order-[initial]" alt="" src="/assets/cloned/images/hero/hero-design.png" width="1080" height="1350" />
                </div>
              </div>
            </section>
            <section className="w-full flex relative pt-10 pb-20 px-10 flex-col justify-center items-center content-center shrink-0 gap-8 overflow-clip max-lg:pb-10 max-lg:px-5 2xl:px-5" id="trustedby">
              <div className="w-300 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-182 2xl:w-470">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  Backed by industry leaders
                </p>
              </div>
              <div className="w-184 h-10 flex relative max-w-184 justify-start items-center content-center shrink-0 gap-15 overflow-clip max-md:w-[20.9375rem] max-lg:max-w-200 md:max-lg:w-182" style={{ maskImage: "linear-gradient(90deg, var(--clr-11) 0%, var(--foreground) 20.6345%, var(--foreground) 80.2734%, var(--clr-11) 100%)" }}>
                <ul className="h-full flex relative max-w-full max-h-full justify-start items-center gap-15 [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-14.7864,0)] max-md:transform-[matrix(1,0,0,1,-12.384,0)] md:max-lg:transform-[matrix(1,0,0,1,-13.584,0)] 2xl:transform-[matrix(1,0,0,1,-142.007,0)]" role="group">
                  {Logo4_data.map((d, i) => <Logo4 key={i} d={d} styles={Logo4_styles[i]} />)}
                </ul>
              </div>
              {" "}
            </section>
            <section className="flex relative max-w-250 py-25 px-10 flex-col justify-center items-center content-center shrink-0 gap-20 overflow-clip max-lg:max-w-150 max-lg:pt-20 max-lg:px-5 2xl:max-w-300 2xl:px-5" id="features">
              <div className="w-230 flex relative flex-col justify-center items-center content-center shrink-0 gap-6 overflow-clip max-md:w-[20.9375rem] max-lg:gap-5 md:max-lg:w-140 2xl:w-290">
                <div className="w-230 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-290">
                  <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                    CORE Features
                  </p>
                </div>
                <div className="w-full max-w-175 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <h2 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px]" data-component="heading" dir="auto">
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        T
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
                        c
                      </span>
                      <span className="inline-block">
                        r
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        a
                      </span>
                      <span className="inline-block">
                        t
                      </span>
                      <span className="inline-block">
                        i
                      </span>
                      <span className="inline-block">
                        v
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                    </span>
                    {" "}
                    <span className="inline whitespace-nowrap text-nowrap">
                      <span className="inline-block">
                        s
                      </span>
                      <span className="inline-block">
                        u
                      </span>
                      <span className="inline-block">
                        i
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
                        e
                      </span>
                      <span className="inline-block">
                        v
                      </span>
                      <span className="inline-block">
                        e
                      </span>
                      <span className="inline-block">
                        r
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
                      <span className="inline-block">
                        .
                      </span>
                    </span>
                  </h2>
                </div>
              </div>
              <div className="w-full grid relative justify-center shrink-0 gap-5 [grid-auto-rows:min-content] grid-cols-[repeat(auto-fit,_minmax(334px,_1fr))]">
                <div className="contents min-w-0">
                  <div className="block relative [align-self:start] shrink-0 col-start-[span_2] max-lg:col-start-[span_1]">
                    <div className="flex relative p-10 rounded-[30px] flex-col justify-center items-start content-start gap-10 overflow-clip">
                      <div className="w-full flex relative z-1 justify-between items-start content-start shrink-0">
                        <div className="w-13.5 flex relative p-2.5 rounded-lg justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-square bg-color-001">
                          <Icon8 />
                        </div>
                        <div className="w-[88.3px] block relative shrink-0 max-lg:w-[5.3125rem]">
                          <div className="flex relative py-1.5 px-2.5 rounded-[10px] justify-center items-center content-center gap-1.5 overflow-clip bg-background">
                            <div className="w-[68.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[4.0625rem]">
                              <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                                POPULAR
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-210 flex relative z-2 flex-col justify-center items-center content-center shrink-0 gap-3 overflow-clip max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[686.7px]">
                        <div className="w-210 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[686.7px]">
                          <h5 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.375rem] font-medium leading-[1.6875rem] tracking-[-0.67px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.1875rem] max-lg:leading-[1.4375rem] max-lg:tracking-[-0.58px]" data-component="heading" dir="auto">
                            Omni-Model Architecture
                          </h5>
                        </div>
                        <div className="w-210 flex relative flex-col justify-start shrink-0 max-md:w-[15.9375rem] md:max-lg:w-120 2xl:w-[686.7px]">
                          <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                            Five specialized generative models work in concert — VOID-Ultra for photorealism, Photon v3 for portraits, AnimaX for illustration, Render3D for spatial design, and Cinematic for film-grade outputs. Each fine-tuned to maximum quality in its domain.
                          </p>
                        </div>
                      </div>
                      <div className="w-230 h-full block absolute top-0 left-0 z-0 min-w-0 shrink-0 gap-2.5 overflow-clip max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-[766.7px] after:content-[''] after:block after:absolute after:inset-0" style={{ backgroundImage: "linear-gradient(250deg, var(--clr-13) -11%, var(--clr-14) 50.6581%, var(--color-004) 100%)" }}>
                        {Logo5_data.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles[i]} />)}
                      </div>
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
                      gap
                    </span>
                    {" "}
                    <span className="inline-block">
                      between
                    </span>
                    {" "}
                    <span className="inline-block">
                      what
                    </span>
                    {" "}
                    <span className="inline-block">
                      we
                    </span>
                    {" "}
                    <span className="inline-block">
                      can
                    </span>
                    {" "}
                    <span className="inline-block">
                      imagine
                    </span>
                    {" "}
                    <span className="inline-block">
                      and
                    </span>
                    {" "}
                    <span className="inline-block">
                      what
                    </span>
                    {" "}
                    <span className="inline-block">
                      exists
                    </span>
                    {" "}
                    <span className="inline-block">
                      just
                    </span>
                    {" "}
                    <span className="inline-block">
                      closed."
                    </span>
                  </h2>
                </div>
                <div className="contents min-w-0">
                  <div className="flex relative py-2 pr-3 pl-2 rounded-2xl justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden">
                    <div className="w-30 basis-full shrink-0 block relative aspect-[6.79245/1]">
                      <div className="w-30 h-full block absolute top-0 left-0">
                        <img className="w-full h-4.5 block overflow-clip object-cover aspect-[auto_1280/257]" data-component="image" alt="" height="257" sizes="120px" src="/assets/cloned/images/1574b86360bc.png" srcSet="/assets/cloned/images/f33389a51ebe.png 512w, /assets/cloned/images/c7cd67df461e.png 1024w, /assets/cloned/images/1574b86360bc.png 1280w" width="1280" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:flex-col" id="explore">
              <div className="contents min-w-0">
                <div className="h-[63.7rem] block absolute inset-x-0 z-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[640px_509.578px] max-md:h-[102.1rem] max-md:origin-[187.5px_816.82px] md:max-lg:h-[1583.7px] md:max-lg:origin-[384px_791.859px] 2xl:transform-[none] 2xl:origin-[initial]">
                  <div className="h-full block relative gap-2.5 overflow-clip max-lg:[mask-image:initial]" data-ditto-id="style-div-2">
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
                        created by our community
                      </p>
                    </div>
                    <div className="w-175 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140">
                      <h2 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px]" data-component="heading" dir="auto">
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
                            o
                          </span>
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
                            r
                          </span>
                          <span className="inline-block">
                            s
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block">
                            c
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            t
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
                          <span className="inline-block">
                            .
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap" />
                      </h2>
                    </div>
                    <div className="w-full max-w-150 flex relative flex-col justify-start shrink-0">
                      <h6 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-center text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px]" data-component="heading" dir="auto">
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            L
                          </span>
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            k
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            u
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            d
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            d
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            f
                          </span>
                          <span className="inline-block">
                            i
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            d
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            i
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            s
                          </span>
                          <span className="inline-block">
                            p
                          </span>
                          <span className="inline-block">
                            i
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            s
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                            ,
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            c
                          </span>
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            p
                          </span>
                          <span className="inline-block">
                            y
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            p
                          </span>
                          <span className="inline-block">
                            r
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
                            t
                          </span>
                          <span className="inline-block">
                            ,
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            d
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            g
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            t
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            o
                          </span>
                          <span className="inline-block">
                            w
                          </span>
                          <span className="inline-block">
                            n
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            i
                          </span>
                          <span className="inline-block">
                            m
                          </span>
                          <span className="inline-block">
                            a
                          </span>
                          <span className="inline-block">
                            g
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            w
                          </span>
                          <span className="inline-block">
                            i
                          </span>
                          <span className="inline-block">
                            t
                          </span>
                          <span className="inline-block">
                            h
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block">
                            E
                          </span>
                          <span className="inline-block">
                            r
                          </span>
                          <span className="inline-block">
                            i
                          </span>
                          <span className="inline-block">
                            e
                          </span>
                          <span className="inline-block">
                            .
                          </span>
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="block relative shrink-0">
                      <div className="contents">
                        <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-center items-center content-center gap-6 overflow-clip text-primary bg-background shadow-[var(--clr-0)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-0)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-0)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-0)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-0)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-0)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-1)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-2)_40px_30px_50px_-3px_inset,var(--clr-3)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-4)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-4)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-4)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-5)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-6)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-7)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="/explore">
                          <div className="w-[112.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[107.3px]">
                            <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                              Explore creations
                            </p>
                          </div>
                          <div className="w-[112.3px] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                              Explore creations
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
              </div>
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
                      Why creators choose ERIE.
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
                          E
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          R
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          I
                        </span>
                        <span className="inline-block [filter:blur(0px)]">
                          E
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
                            p
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            p
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            l
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
                            h
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            o
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            u
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            s
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            t
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            e
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
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap text-nowrap">
                          <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                            d
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
                    <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-center items-center content-center gap-6 overflow-clip text-primary bg-accent shadow-[var(--clr-17)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-17)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-17)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-17)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-17)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-17)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-17)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-18)_40px_30px_50px_-3px_inset,var(--clr-19)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-19)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-19)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-6)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-20)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-21)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-22)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener">
                      <div className="w-[5.575rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[5.325rem]">
                        <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                          Start creating
                        </p>
                      </div>
                      <div className="w-[5.575rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                          Start creating
                        </p>
                      </div>
                      <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-color-001">
                        <div className="w-6 block relative shrink-0 aspect-square bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                      </div>
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
                <div className="h-[103.9rem] block absolute inset-x-0 z-0 shrink-0 max-md:h-[2857.1px] md:max-lg:h-[175.45rem] 2xl:h-[85.65rem]">
                  <div className="h-full block relative gap-2.5 overflow-clip" data-ditto-id="style-div-4">
                    {Logo9_data.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles[i]} />)}
                  </div>
                </div>
              </div>
              <div className="w-[78%] flex relative z-0 max-w-250 pt-45 pb-10 px-10 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-10 overflow-clip max-md:w-full max-lg:max-w-150 max-lg:pt-37.5 max-lg:px-5 max-lg:pb-0 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-[78.5%] 2xl:w-full 2xl:max-w-full 2xl:pb-35 2xl:px-15 after:content-[''] after:block after:absolute after:inset-0">
                <div className="w-full flex relative justify-center items-end content-end shrink-0 gap-2.5 max-lg:flex-col max-lg:items-center max-lg:content-center max-lg:gap-5 2xl:max-w-300">
                  <div className="w-[77%] flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-6 overflow-clip max-lg:w-full max-lg:gap-5 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[82.5%]">
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-center" dir="auto">
                          Erie Academy-Tutorials
                        </p>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="flex relative max-w-175 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px] max-lg:text-center" data-component="heading" dir="auto">
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              L
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              a
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              r
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              n
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
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
                              e
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
                              a
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              u
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              n
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              n
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
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              v
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              u
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              a
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              l
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
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              h
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              x
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              p
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              r
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap text-nowrap">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              u
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
                              a
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              l
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
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
                      <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-center items-center content-center gap-6 overflow-clip text-primary bg-background shadow-[var(--clr-0)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-0)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-0)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-0)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-0)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-0)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-1)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-2)_40px_30px_50px_-3px_inset,var(--clr-3)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-4)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-4)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-4)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-5)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-6)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-7)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="/tutorials#hero">
                        <div className="w-[6.7rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[102.5px]">
                          <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                            View all tutorials
                          </p>
                        </div>
                        <div className="w-[6.7rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                            View all tutorials
                          </p>
                        </div>
                        <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-accent">
                          <div className="w-6 block relative shrink-0 aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <main className="w-230 flex relative z-3 flex-col justify-start items-center content-center shrink-0 max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-300 2xl:max-w-300">
                  <div className="w-full grid relative pb-15 justify-center shrink-0 gap-3 [grid-auto-rows:min-content] grid-cols-[repeat(auto-fit,_minmax(334px,_1fr))] grid-rows-3 max-lg:grid-rows-6 2xl:grid-rows-2">
                    {MediaTile4_data.map((d, i) => <MediaTile4 key={i} d={d} styles={MediaTile4_styles[i]} />)}
                  </div>
                </main>
              </div>
            </section>
            <CardGridSection3 />
          </div>
          <footer className="w-full flex relative flex-col justify-center items-center content-center shrink-0 order-[1002] overflow-clip bg-foreground">
            <section className="w-full flex relative pt-20 pb-10 flex-col justify-center items-center content-center shrink-0 gap-10 overflow-clip">
              <div className="contents min-w-0">
                <div className="h-[61.5rem] block absolute top-0 inset-x-0 z-0 shrink-0 max-md:h-[50.8625rem] md:max-lg:h-[737.5px] 2xl:h-[51.2375rem]">
                  <div className="h-full block relative gap-2.5 overflow-clip" data-ditto-id="style-div-5">
                    <div className="w-full h-[945.7px] block absolute -bottom-26.5 -left-[2.1875rem] shrink-0 aspect-[1.42857/1] transform-[matrix(-1,0,0,-1,0,0)] origin-[675.5px_472.844px] max-md:h-[19.5125rem] max-md:origin-[223px_156.094px] md:max-lg:h-[587.3px] md:max-lg:origin-[419.5px_293.648px] 2xl:h-175 2xl:-bottom-[16.1875rem] 2xl:-left-[6.8125rem] 2xl:origin-[500px_350px] 2xl:aspect-[initial]">
                      <div className="h-full block relative overflow-clip">
                        <div className="h-full block absolute top-0 inset-x-0 z-1 shrink-0">
                          <div className="h-full block absolute top-0 inset-x-0">
                            <img className="w-full h-236.5 block overflow-clip object-contain aspect-[auto_8000/4517] max-md:h-78 md:max-lg:h-[36.6875rem] 2xl:h-175" data-component="image" alt="" height="4517" sizes="calc(calc(100vw + 71px) * 0.9997)" src="/assets/cloned/images/88ab5ebd250d.png" srcSet="/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" width="8000" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden 2xl:w-250 2xl:h-175 2xl:block 2xl:absolute 2xl:-top-11.5 2xl:-right-[16.6875rem] 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[500px_350px]">
                      <div className="hidden 2xl:w-250 2xl:h-175 2xl:block 2xl:relative 2xl:overflow-clip">
                        <div className="hidden 2xl:w-250 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:z-1 2xl:shrink-0">
                          <div className="hidden 2xl:w-250 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
                            <img className="hidden 2xl:w-full 2xl:h-175 2xl:block 2xl:overflow-clip 2xl:object-contain 2xl:aspect-[auto_8000/4491]" alt="" height="4491" sizes="calc(1000px * 0.9994)" src="/assets/cloned/images/aa307bc1dd1c.png" srcSet="/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" width="8000" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex relative max-w-300 p-5 flex-col justify-start items-center content-center shrink-0 gap-10 max-lg:max-w-150 max-lg:gap-7.5 2xl:justify-between 2xl:items-end 2xl:content-end 2xl:[flex-direction:initial] 2xl:gap-[initial]">
                <div className="w-full max-w-125 flex relative z-1 flex-col justify-center items-center content-center shrink-0 gap-6 max-lg:gap-5 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:flex-1">
                  <div className="contents min-w-0">
                    <div className="flex relative max-w-157.5 flex-col justify-start shrink-0">
                      <h2 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-center text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px] 2xl:text-left" data-component="heading" dir="auto">
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            T
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            h
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            f
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            u
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            t
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            u
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            f
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            t
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            y
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            s
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="flex relative max-w-290 flex-col justify-start shrink-0">
                      <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] leading-[1.8125rem] text-center text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-lg max-lg:leading-[1.625rem] 2xl:text-left" dir="auto">
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            J
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            n
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            1
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            2
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            m
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            l
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            l
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            n
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            s
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            w
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            h
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            '
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            v
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            m
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            d
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            E
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            p
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            m
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            y
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            v
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            s
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            u
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            l
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                          <span className="inline-block [filter:blur(0px)]">
                            .
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            G
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            n
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            t
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            y
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            u
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            f
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            r
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            s
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            t
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            m
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            a
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            g
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            i
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            n
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            6
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            0
                          </span>
                        </span>
                        {" "}
                        <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                          <span className="inline-block [filter:blur(0px)]">
                            s
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            e
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            c
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            o
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            n
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            d
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            s
                          </span>
                          <span className="inline-block [filter:blur(0px)]">
                            .
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-75 flex relative max-w-75 flex-col justify-center items-center content-center shrink-0 gap-5 max-lg:items-end max-lg:content-end 2xl:w-100 2xl:max-w-100 2xl:items-end 2xl:content-end 2xl:flex-1">
                  <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 order-[1] gap-2.5 2xl:items-end 2xl:content-end 2xl:order-[initial]">
                    <div className="contents min-w-0">
                      <div className="flex relative max-w-290 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-left 2xl:text-left 2xl:text-[color:inherit]" dir="auto">
                          · START FOR FREE ·
                        </p>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="flex relative max-w-290 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px] max-lg:text-left 2xl:text-left 2xl:text-[color:inherit]" dir="auto">
                          · NO CREDIT CARD REQUIRED ·
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-75 block relative shrink-0 2xl:w-[11.45rem]" name="Button">
                      <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-between items-center content-center gap-6 overflow-clip text-primary bg-background shadow-[var(--clr-0)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-0)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-0)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-0)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-0)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-0)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-1)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-2)_40px_30px_50px_-3px_inset,var(--clr-3)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-4)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-4)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-4)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-5)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-6)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-7)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:justify-center 2xl:bg-accent 2xl:shadow-[var(--clr-17)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-17)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-17)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-17)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-17)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-17)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-17)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-18)_40px_30px_50px_-3px_inset,var(--clr-19)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-19)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-19)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-6)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-20)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-21)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-22)_-20px_-40px_44.7214px_-3.75px_inset] 2xl:cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" name="Button" rel="noopener">
                        <div className="w-[5.575rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[5.325rem]">
                          <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px] 2xl:text-color-001" dir="auto">
                            Start creating
                          </p>
                        </div>
                        <div className="w-[5.575rem] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px] 2xl:text-color-001" dir="auto">
                            Start creating
                          </p>
                        </div>
                        <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-accent 2xl:bg-color-001">
                          <div className="w-6 block relative shrink-0 aspect-square bg-color-001 2xl:bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contents min-w-0">
                <div className="w-full block relative shrink-0 max-lg:z-2">
                  <div className="h-100 flex relative flex-col justify-center items-center content-center gap-2.5 max-lg:h-65.5 max-lg:gap-[initial]">
                    <div className="w-320 h-100 block relative inset-0 shrink-0 max-lg:w-40 max-lg:h-60 max-lg:absolute max-lg:top-[0.6875rem] max-md:left-[107.5px] max-lg:z-1 max-lg:min-w-0 max-lg:right-auto max-lg:bottom-auto md:max-lg:left-76 2xl:w-480" name="Slide Ticker">
                      <div className="hidden max-lg:w-40 max-lg:h-60 max-lg:flex max-lg:relative max-lg:p-1 max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden" name="Image 1">
                        <div className="hidden max-lg:w-full max-lg:h-58 max-lg:block max-lg:relative max-lg:rounded-[20px] max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-38 after:h-58 after:rounded-tl-[20px] 2xl:after:hidden">
                          <div className="hidden max-lg:w-38 max-lg:h-full max-lg:block max-lg:absolute max-lg:top-0 max-lg:rounded-[20px]">
                            <img className="hidden max-lg:w-full max-lg:h-58 max-lg:block max-lg:rounded-[20px] max-lg:overflow-clip max-lg:object-cover max-lg:aspect-[auto_1856/2464]" alt="" height="2464" sizes="calc(160px - 8px)" src="/assets/cloned/images/5010e6e25306.png" srcSet="/assets/cloned/images/5a606878e56d.png 771w, /assets/cloned/images/66a25826c2da.png 1542w, /assets/cloned/images/5010e6e25306.png 1856w" width="1856" />
                          </div>
                          <div className="hidden max-lg:w-[9.2125rem] max-lg:h-[14.0625rem] max-lg:block max-lg:absolute max-lg:top-[3.5px] max-lg:left-[2.3px] max-lg:z-0 max-lg:rounded-[26px] max-lg:shrink-0 max-lg:shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset]" />
                        </div>
                      </div>
                      <section className="h-full flex max-w-full max-h-full p-3 items-center justify-items-center overflow-hidden max-lg:hidden">
                        <ul className="h-full flex relative max-w-full max-h-full items-center gap-3 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-11.9164,0)] max-lg:hidden 2xl:transform-[matrix(1,0,0,1,-10.8376,0)]" data-ditto-id="motion-ul-3">
                          {/* Track content doubled so the ~3018px-period marquee loop never runs dry. */}
                          {[...Logo10_data, ...Logo10_data].map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles[i % Logo10_data.length]} />)}
                        </ul>
                      </section>
                    </div>
                    <div className="hidden max-lg:w-full max-lg:h-50 max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-10">
                      <div className="hidden max-lg:w-30 max-lg:h-50 max-lg:block max-lg:relative max-lg:shrink-0 max-lg:transform-[matrix(0.996195,-0.0871557,0.0871557,0.996195,0,0)] max-lg:origin-[60px_100px]" name="Image 1">
                        <div className="hidden max-lg:w-30 max-lg:h-50 max-lg:flex max-lg:relative max-lg:p-1 max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden" name="Image 1">
                          <div className="hidden max-lg:w-full max-lg:h-48 max-lg:block max-lg:relative max-lg:rounded-[20px] max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-28 after:h-48 after:rounded-tl-[20px] 2xl:after:hidden">
                            <div className="hidden max-lg:w-28 max-lg:h-full max-lg:block max-lg:absolute max-lg:top-0 max-lg:rounded-[20px]">
                              <img className="hidden max-lg:w-full max-lg:h-48 max-lg:block max-lg:rounded-[20px] max-lg:overflow-clip max-lg:object-cover max-lg:aspect-[auto_1200/900]" alt="" height="900" sizes="calc(120px - 8px)" src="/assets/cloned/images/405d8f0448c9.png" srcSet="/assets/cloned/images/02dd3e9442f6.png 512w, /assets/cloned/images/38fc33030829.png 1024w, /assets/cloned/images/405d8f0448c9.png 1200w" width="1200" />
                            </div>
                            <div className="hidden max-lg:w-[6.7875rem] max-lg:h-[11.6375rem] max-lg:block max-lg:absolute max-lg:top-[2.9px] max-lg:left-[1.7px] max-lg:z-0 max-lg:rounded-[26px] max-lg:shrink-0 max-lg:shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset]" />
                          </div>
                        </div>
                      </div>
                      <div className="hidden max-lg:w-30 max-lg:h-50 max-lg:block max-lg:relative max-lg:shrink-0 max-lg:order-[1] max-lg:transform-[matrix(0.996195,0.0871557,-0.0871557,0.996195,0,0)] max-lg:origin-[60px_100px]" name="Image 1">
                        <div className="hidden max-lg:w-30 max-lg:h-50 max-lg:flex max-lg:relative max-lg:p-1 max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden" name="Image 1">
                          <div className="hidden max-lg:w-full max-lg:h-48 max-lg:block max-lg:relative max-lg:rounded-[20px] max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-28 after:h-48 after:rounded-tl-[20px] 2xl:after:hidden">
                            <div className="hidden max-lg:w-28 max-lg:h-full max-lg:block max-lg:absolute max-lg:top-0 max-lg:rounded-[20px]">
                              <img className="hidden max-lg:w-full max-lg:h-48 max-lg:block max-lg:rounded-[20px] max-lg:overflow-clip max-lg:object-cover max-lg:aspect-[auto_992/1200]" alt="" height="1200" sizes="calc(120px - 8px)" src="/assets/cloned/images/271b956d730d.png" srcSet="/assets/cloned/images/d267f8646704.png 846w, /assets/cloned/images/271b956d730d.png 992w" width="992" />
                            </div>
                            <div className="hidden max-lg:w-[6.7875rem] max-lg:h-[11.6375rem] max-lg:block max-lg:absolute max-lg:top-[2.9px] max-lg:left-[1.7px] max-lg:z-0 max-lg:rounded-[26px] max-lg:shrink-0 max-lg:shadow-[var(--clr-15)_20px_20px_62px_0px_inset,var(--clr-16)_-10px_-10px_44px_0px_inset]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="w-full flex relative p-10 flex-col justify-center items-center content-center shrink-0 gap-10 overflow-clip max-lg:pt-15 max-lg:pb-12.5 max-lg:px-5 2xl:pt-15 2xl:pb-12.5 2xl:px-5">
              <div className="w-full flex relative max-w-290 flex-col justify-center items-start content-start shrink-0 gap-15 overflow-clip max-lg:max-w-150 max-lg:items-center max-lg:content-center max-lg:gap-11 2xl:gap-2.5 2xl:[flex-direction:initial]">
                <section className="w-290 flex relative flex-col justify-center items-start content-start shrink-0 gap-10 max-lg:w-77.5 max-lg:items-center max-lg:content-center 2xl:w-77.5">
                  <div className="w-full flex relative max-w-300 flex-col justify-center items-start content-start shrink-0 gap-8 max-lg:items-center max-lg:content-center">
                    <div className="contents min-w-0">
                      <div className="block relative shrink-0">
                        <a className="h-[2.85rem] flex relative justify-start items-center content-center gap-1 text-primary cursor-pointer" data-component="link" href="/">
                          <Icon17 />
                          <div className="w-[3.8875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <h5 className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-[2.375rem] font-medium leading-[2.875rem] tracking-[-1.52px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-component="heading" dir="auto">
                              Erie
                            </h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-150 flex relative max-w-150 flex-col justify-start shrink-0 max-lg:w-77.5 max-lg:max-w-77.5 2xl:w-77.5 2xl:max-w-77.5">
                        <h6 className="block text-color-002 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px] max-lg:text-center" data-component="heading" dir="auto">
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                              l
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              d
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              '
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              m
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              p
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
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
                              f
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              u
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              l
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              A
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              I
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              m
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              a
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              g
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              v
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              d
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              g
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
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
                              a
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
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
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
                              t
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              f
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              r
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              m
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              -
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              b
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              u
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              l
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              f
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              r
                            </span>
                          </span>
                          {" "}
                          <span className="inline">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              p
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              r
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              f
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
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
                              a
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
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              a
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              c
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              c
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              s
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              i
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              b
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              l
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              t
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              o
                            </span>
                          </span>
                          {" "}
                          <span className="inline whitespace-nowrap [text-wrap:nowrap_balance]">
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              e
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
                              o
                            </span>
                            <span className="inline-block [filter:blur(0px)] 2xl:[filter:initial]">
                              n
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
                    <nav className="flex relative justify-start items-center content-center shrink-0 gap-2.5" data-component="nav">
                      {Logo11_data.map((d, i) => <Logo11 key={i} d={d} />)}
                    </nav>
                  </div>
                </section>
                <nav className="w-full grid relative justify-center shrink-0 gap-8 grid-cols-[266px_266px_266px_266px] [grid-auto-rows:minmax(0px,_1fr)] overflow-clip max-lg:flex max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:gap-10 max-lg:grid-cols-[initial] max-lg:[grid-auto-rows:initial] 2xl:w-[72.5%] 2xl:flex 2xl:justify-end 2xl:items-start 2xl:content-start 2xl:flex-1 2xl:gap-20 2xl:grid-cols-[initial] 2xl:[grid-auto-rows:initial]" data-component="nav">
                  <div className="w-141 flex relative flex-col justify-center items-start content-start [align-self:start] shrink-0 gap-6 col-start-[span_2] overflow-clip max-md:w-[20.9375rem] max-lg:items-center max-lg:content-center max-lg:gap-4 max-lg:[align-self:initial] max-lg:[grid-column-start:initial] md:max-lg:w-150 2xl:w-63 2xl:max-w-[30%] 2xl:flex-1 2xl:[align-self:initial] 2xl:[grid-column-start:initial]">
                    <div className="w-[81.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[4.875rem]">
                      <p className="block text-color-005 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        Tutorials
                      </p>
                    </div>
                    <div className="w-141 flex relative flex-col justify-center items-start content-start shrink-0 gap-5 overflow-clip max-md:w-[20.9375rem] max-lg:items-center max-lg:content-center md:max-lg:w-150 2xl:w-63">
                      {Tile3_data.map((d, i) => <Tile3 key={i} d={d} />)}
                    </div>
                  </div>
                  <div className="w-25 flex relative flex-col justify-center items-start content-start [align-self:start] shrink-0 gap-6 overflow-clip max-md:w-[20.9375rem] max-lg:items-center max-lg:content-center max-lg:gap-4 max-lg:[align-self:initial] md:max-lg:w-150 2xl:[align-self:initial]">
                    <div className="w-[4.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[69.5px]">
                      <p className="block text-color-005 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        Company
                      </p>
                    </div>
                    <div className="flex relative flex-col justify-center items-start content-start shrink-0 gap-5 overflow-clip max-lg:items-center max-lg:content-center">
                      {Tile4_data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
                    </div>
                  </div>
                  <div className="w-[8.75rem] flex relative flex-col justify-center items-start content-start [align-self:start] shrink-0 gap-6 overflow-clip max-md:w-[20.9375rem] max-lg:items-center max-lg:content-center max-lg:gap-4 max-lg:[align-self:initial] md:max-lg:w-150 2xl:[align-self:initial]">
                    <div className="w-[2.9125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[2.775rem]">
                      <p className="block text-color-005 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        Legal
                      </p>
                    </div>
                    <div className="flex relative flex-col justify-center items-start content-start shrink-0 gap-5 overflow-clip max-lg:items-center max-lg:content-center">
                      <div className="w-[8.75rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          <a className="inline text-color-001 cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)]" data-component="link" href="/legal/terms-conditions#hero">
                            {"Terms & Conditions"}
                          </a>
                        </p>
                      </div>
                      <div className="w-[101.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          <a className="inline text-color-001 cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)]" data-component="link" href="/legal/privacy-policy#hero">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="w-309 h-0.5 block relative z-2 opacity-40 shrink-0 overflow-hidden bg-surface max-md:w-[21.5625rem] max-lg:max-w-150 md:max-lg:w-150 2xl:w-[121.025rem]" />
              <div className="w-full flex relative max-w-290 flex-col justify-start items-start content-start shrink-0 gap-5 overflow-clip max-lg:max-w-150 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-4 2xl:justify-between 2xl:items-center 2xl:content-center 2xl:[flex-direction:initial] 2xl:gap-[initial]">
                <div className="contents min-w-0">
                  <div className="w-290 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-150 2xl:w-[308.5px] 2xl:whitespace-pre 2xl:text-nowrap 2xl:[word-break:inherit] 2xl:[overflow-wrap:inherit]">
                    <p className="block text-color-005 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-center 2xl:[text-align:inherit]" dir="auto">
                      © 2026 ERIE Template. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-start items-center content-center shrink-0 gap-2 overflow-hidden">
                  <div className="w-[4.0375rem] h-6 flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:w-[3.85rem]">
                    <p className="block text-color-005 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                      Made by
                    </p>
                  </div>
                  <a className="h-6 flex relative justify-center items-center content-center shrink-0 gap-1 overflow-hidden text-primary cursor-pointer" data-component="link" href="https://www.framer.com/@blurrhaus/?tab=templates" rel="noopener" target="_blank">
                    <div className="w-6 block relative rounded-[50px] shrink-0 aspect-square">
                      <div className="w-6 h-full block absolute top-0 left-0 rounded-[50px]">
                        <img className="w-full h-6 block rounded-[50px] overflow-clip object-cover aspect-[auto_670/694]" data-component="avatar" alt="" height="694" sizes="(min-width: 1440px) 24px, (min-width: 810px) and (max-width: 1439.98px) 24px, (max-width: 809.98px) 24px" src="/assets/cloned/images/31e653381791.png" srcSet="/assets/cloned/images/31e653381791.png 670w" width="670" />
                      </div>
                    </div>
                    <div className="w-[47.1px] h-6 flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:w-[44.9px]">
                      <p className="block text-background [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                        Blurr
                      </p>
                    </div>
                  </a>
                </div>
                <div className="contents min-w-0">
                  <div className="w-290 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[130.7px] max-lg:whitespace-pre max-lg:text-nowrap max-lg:[word-break:inherit] max-lg:[overflow-wrap:inherit] 2xl:w-[130.7px] 2xl:whitespace-pre 2xl:text-nowrap 2xl:[word-break:inherit] 2xl:[overflow-wrap:inherit]">
                    <p className="block text-color-005 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-center" dir="auto">
                      💙 Built in Framer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="block" id="template-overlay" />
      </div>
      {" "}
      <NavScrollState />
      <DittoMotion spec={{"waapi":[{"anchor":"motion-ul","keyframes":[{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(0px)","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(-2380px)","computedOffset":1}],"duration":39666.666666666664,"delay":0,"easing":"linear","iterations":-1,"direction":"normal","fill":"auto"},{"anchor":"motion-ul-2","keyframes":[{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(0px)","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(2380px)","computedOffset":1}],"duration":59500,"delay":0,"easing":"linear","iterations":-1,"direction":"normal","fill":"auto"},{"anchor":"motion-ul-3","keyframes":[{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(0px)","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(-3024px)","computedOffset":1}],"duration":46523.07692307692,"delay":0,"easing":"linear","iterations":-1,"direction":"normal","fill":"auto"},{"anchor":"motion-4","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0","computedOffset":1}],"duration":800,"delay":0,"easing":"linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)","iterations":1,"direction":"normal","fill":"both"},{"anchor":"motion-5","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"0","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":1}],"duration":800,"delay":0,"easing":"linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)","iterations":1,"direction":"normal","fill":"both"},{"anchor":"motion-6","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.5","computedOffset":1}],"duration":800,"delay":0,"easing":"linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)","iterations":1,"direction":"normal","fill":"both"},{"anchor":"motion-7","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"0.5","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":1}],"duration":800,"delay":0,"easing":"linear(0 0%, 0.0054 1.2658227848101267%, 0.0203 2.5316455696202533%, 0.0428 3.79746835443038%, 0.0714 5.063291139240507%, 0.1046 6.329113924050633%, 0.1414 7.594936708860759%, 0.1808 8.860759493670885%, 0.2218 10.126582278481012%, 0.2637 11.392405063291138%, 0.306 12.658227848101264%, 0.3481 13.92405063291139%, 0.3896 15.189873417721516%, 0.4303 16.455696202531644%, 0.4697 17.72151898734177%, 0.5078 18.987341772151897%, 0.5443 20.253164556962023%, 0.5792 21.51898734177215%, 0.6124 22.784810126582276%, 0.6438 24.050632911392402%, 0.6734 25.316455696202528%, 0.7012 26.582278481012654%, 0.7273 27.84810126582278%, 0.7516 29.113924050632907%, 0.7743 30.379746835443033%, 0.7953 31.64556962025316%, 0.8148 32.91139240506329%, 0.8328 34.177215189873415%, 0.8494 35.44303797468354%, 0.8647 36.70886075949367%, 0.8786 37.974683544303794%, 0.8914 39.24050632911392%, 0.9031 40.506329113924046%, 0.9138 41.77215189873417%, 0.9235 43.0379746835443%, 0.9322 44.303797468354425%, 0.9402 45.56962025316455%, 0.9474 46.83544303797468%, 0.9538 48.101265822784804%, 0.9597 49.36708860759493%, 0.9649 50.632911392405056%, 0.9695 51.89873417721518%, 0.9737 53.16455696202531%, 0.9774 54.430379746835435%, 0.9807 55.69620253164556%, 0.9836 56.96202531645569%, 0.9862 58.22784810126581%, 0.9885 59.49367088607594%, 0.9905 60.759493670886066%, 0.9922 62.02531645569619%, 0.9937 63.29113924050632%, 0.995 64.55696202531645%, 0.9962 65.82278481012658%, 0.9971 67.0886075949367%, 0.998 68.35443037974683%, 0.9987 69.62025316455696%, 0.9993 70.88607594936708%, 0.9998 72.15189873417721%, 1.0002 73.41772151898734%, 1.0005 74.68354430379746%, 1.0008 75.94936708860759%, 1.001 77.21518987341771%, 1.0012 78.48101265822784%, 1.0013 79.74683544303797%, 1.0014 81.01265822784809%, 1.0015 82.27848101265822%, 1.0015 83.54430379746834%, 1.0015 84.81012658227847%, 1.0015 86.0759493670886%, 1.0015 87.34177215189872%, 1.0015 88.60759493670885%, 1.0014 89.87341772151898%, 1.0014 91.1392405063291%, 1.0013 92.40506329113923%, 1.0013 93.67088607594935%, 1.0012 94.93670886075948%, 1.0011 96.20253164556961%, 1.0011 97.46835443037973%, 1.001 98.73417721518987%, 1 100%)","iterations":1,"direction":"normal","fill":"both"}],"rotators":[],"reveals":[{"anchor":"motion-span","opacity":"1","transform":"none","transition":"","visibility":"hidden"}],"marquees":[{"anchor":"motion-ul-3","pxPerSec":-63,"periodPx":3018}]}} />
    </>
  );
}
