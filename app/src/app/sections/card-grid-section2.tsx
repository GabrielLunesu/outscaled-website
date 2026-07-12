"use client";
import { useState } from "react";
import MediaCard2, { type MediaCard2Data } from "../components/media-card2";
import MediaTile3, { type MediaTile3Data } from "../components/media-tile3";
import { MediaTile3_styles } from "../_styles";
const MediaCard2_data: MediaCard2Data[] = [
    { title: "Product Photography", title2: "Product Photography", description: "Product photography at scale, background variations, product shots without a photoshoot, and photorealistic imagery" },
    { title: "Photography & Photoshoot", title2: "Photography & Photoshoot", description: "Generate hero shots, editorial portraits, and lifestyle imagery that looks like it cost ten times more to produce." },
    { title: "Film & Media", title2: "Film & Media", description: "Pre-visualization, VFX concept art, creature design, animatics, and sci fi concepts." },
    { title: "Architecture Renders", title2: "Architecture Renders", description: "Photorealistic renders from sketches, interior visualization, material studies, environmental lighting variations, urban planning aerials, and client presentation decks." }
];
const MediaTile3_data: MediaTile3Data[] = [
    { name: "4", name2: "4", height: "1296", imgSrc: "/assets/cloned/images/536bb8aec329.png", srcSet: "/assets/cloned/images/2fb12915bed0.png 733w, /assets/cloned/images/536bb8aec329.png 928w", width: "928", description: "modern house design, a two-story villa with wooden cladding and concrete walls, front view, overhanging roof above the entrance door, wall lighting on each side of it, wood slats on the second-floor windows, plants in flower pots under the eaves, night-time lighting, ultra-realistic in the style of modern architecture." },
    { name: "3", name2: "3", height: "1344", imgSrc: "/assets/cloned/images/4636be88b614.png", srcSet: "/assets/cloned/images/2b215180465f.png 682w, /assets/cloned/images/4636be88b614.png 896w", width: "896", description: "White and gold background, platform covered with water, two rocks placed, green seaweed around the rocks, two brown bottles of shampoo on top of the rocks, indoor product photography, front view" },
    { name: "2", name2: "2", height: "2688", imgSrc: "/assets/cloned/images/846a985bba31.png", srcSet: "/assets/cloned/images/54bf53e10610.png 682w, /assets/cloned/images/3659bd314d1b.png 1365w, /assets/cloned/images/846a985bba31.png 1792w", width: "1792", description: "A portrait of a woman with red curly hair, bright green cat-like eyes, and freckles across her face, wearing a flowing long brown dress, standing amidst lush green jungle foliage, with deep color tones, soft shadows, and warm golden hour sunlight filtering through the leaves, shot with a Canon EOS R5, 85mm f/1.2 lens, rich earthy color palette with warm highlights" },
    { name: "1", name2: "1", height: "2400", imgSrc: "/assets/cloned/images/3d292f134e96.png", srcSet: "/assets/cloned/images/f158601d8068.png 819w, /assets/cloned/images/050685ede62d.png 1638w, /assets/cloned/images/3d292f134e96.png 1920w", width: "1920", description: "cosmetic product arrangement, blue skincare bottle, hand cream, body lotion, lip balm, gradient blue cylindrical bottle " }
];
/** Card Grid section. */
export default function CardGridSection2({ mediaCard2Data = MediaCard2_data, mediaTile3Data = MediaTile3_data } = {}) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="w-full block relative shrink-0" id="intro-expanded">
      <div className="flex relative flex-col justify-center items-start content-start gap-14.5 overflow-hidden 2xl:gap-12">
        <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-10 2xl:gap-37.5 2xl:[flex-direction:initial] grid-cols-1 2xl:grid-cols-2">
          <div className="w-230 flex relative flex-col justify-start items-start content-start shrink-0 gap-15 overflow-hidden max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-107.5 2xl:justify-between 2xl:self-stretch 2xl:flex-1 2xl:gap-[initial]">
            <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-5 2xl:gap-6">
              <div className="w-230 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-107.5">
                <p className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
                  Use Cases
                </p>
              </div>
              <div className="w-full max-w-150 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <h2 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px]" data-component="heading" dir="auto">
                  <span className="inline whitespace-nowrap text-nowrap">
                    <span className="inline-block [filter:blur(0px)]">
                      B
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      u
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      i
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      l
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      t
                    </span>
                  </span>
                  {" "}
                  <span className="inline whitespace-nowrap text-nowrap">
                    <span className="inline-block [filter:blur(0px)]">
                      f
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      o
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      r
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
                      w
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      o
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      r
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      k
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      f
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      l
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      o
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      w
                    </span>
                    <span className="inline-block [filter:blur(0px)]">
                      .
                    </span>
                  </span>
                </h2>
              </div>
              <div className="w-[206.3px] block relative shrink-0 max-lg:w-[201.3px]">
                <a className="flex relative py-3 pr-3 pl-5 rounded-[18px] justify-center items-center content-center gap-6 overflow-clip text-primary bg-accent shadow-[var(--clr-17)_0.671842px_0.503881px_0.839802px_-0.375px_inset,var(--clr-17)_1.59238px_1.19429px_1.99048px_-0.75px_inset,var(--clr-17)_2.90467px_2.1785px_3.63084px_-1.125px_inset,var(--clr-17)_4.82901px_3.62176px_6.03627px_-1.5px_inset,var(--clr-17)_7.79846px_5.84885px_9.74808px_-1.875px_inset,var(--clr-17)_12.7653px_9.57398px_15.9566px_-2.25px_inset,var(--clr-17)_21.981px_16.4857px_27.4762px_-2.625px_inset,var(--clr-18)_40px_30px_50px_-3px_inset,var(--clr-19)_-0.391815px_-0.78363px_0.876125px_-0.535714px_inset,var(--clr-19)_-0.959824px_-1.91965px_2.14623px_-1.07143px_inset,var(--clr-19)_-1.81873px_-3.63745px_4.0668px_-1.60714px_inset,var(--clr-6)_-3.17502px_-6.35004px_7.09957px_-2.14286px_inset,var(--clr-20)_-5.52594px_-11.0519px_12.3564px_-2.67857px_inset,var(--clr-21)_-10.1214px_-20.2428px_22.6322px_-3.21429px_inset,var(--clr-22)_-20px_-40px_44.7214px_-3.75px_inset] [backdrop-filter:blur(5px)] 2xl:cursor-pointer" data-component="link" href="/explore#hero">
                  <div className="w-[112.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[107.3px]">
                    <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Explore creations
                    </p>
                  </div>
                  <div className="w-[112.3px] h-5 flex absolute top-[3.8rem] left-5 z-1 opacity-0 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.28px]" dir="auto">
                      Explore creations
                    </p>
                  </div>
                  <div className="w-9.5 h-9.5 flex relative p-2 rounded-[14px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-color-001">
                    <div className="w-6 block relative shrink-0 aspect-square bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 40 40\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 19.44 0 L 16.56 0 L 16.56 14.523 L 6.291 4.254 L 4.253 6.29 L 14.524 16.56 L 0 16.56 L 0 19.44 L 14.524 19.44 L 4.253 29.71 L 6.291 31.746 L 16.56 21.477 L 16.56 36 L 19.44 36 L 19.44 21.477 L 29.709 31.746 L 31.747 29.71 L 21.476 19.44 L 36 19.44 L 36 16.56 L 21.476 16.56 L 31.747 6.29 L 29.709 4.254 L 19.44 14.523 Z\\\" fill=\\\"var(--cxq9lu, var(--clr-8))\\\" height=\\\"36px\\\" id=\\\"o6qB3j_YV\\\" transform=\\\"translate(2 2)\\\" width=\\\"36px\\\"/></svg>\"), none" }} />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-230 flex relative flex-col justify-center items-start content-start shrink-0 gap-3 overflow-hidden max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-107.5 2xl:gap-5">
              {mediaCard2Data.map((d, i) => <MediaCard2 key={i} d={d} open={activeIdx === i} onSelect={() => setActiveIdx(i)} />)}
            </div>
          </div>
          <div className="w-full h-[1228.3px] block relative shrink-0 overflow-hidden aspect-[0.749025/1] max-md:h-[27.95rem] md:max-lg:h-[46.725rem] 2xl:w-1/2 2xl:h-195 2xl:aspect-[initial]">
            {/* Tile names "1".."4" map to accordion rows top-to-bottom. */}
            {mediaTile3Data.map((d, i) => <MediaTile3 key={i} d={d} styles={MediaTile3_styles[i]} active={Number(d.name) === activeIdx + 1} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
