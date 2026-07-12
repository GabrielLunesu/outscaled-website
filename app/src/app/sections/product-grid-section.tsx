import Logo8, { type Logo8Data } from "../components/logo8";
import Tile2 from "../components/tile2";
import ProductCard from "../components/product-card";
import { Logo8_styles, Tile2_styles } from "../_styles";
import { tile2Data as tile2DataContent, products as productsContent } from "../content";
const Logo8_data: Logo8Data[] = [
    { height: "4517", sizes: "calc(1000px * 0.9997)", imgSrc: "/assets/cloned/images/88ab5ebd250d.png", srcSet: "/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" },
    { height: "4491", sizes: "calc(1000px * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" },
    { height: "4491", sizes: "calc(1000px * 0.9994)", imgSrc: "/assets/cloned/images/aa307bc1dd1c.png", srcSet: "/assets/cloned/images/b558c8a2266c.png 512w, /assets/cloned/images/a264511b2b8d.png 1024w, /assets/cloned/images/c11def768d20.png 2048w, /assets/cloned/images/a78939efe37f.png 4096w, /assets/cloned/images/aa307bc1dd1c.png 8000w" },
    { height: "4517", sizes: "calc(1000px * 0.9997)", imgSrc: "/assets/cloned/images/88ab5ebd250d.png", srcSet: "/assets/cloned/images/5ab24d237039.png 512w, /assets/cloned/images/3ccbbcfdad7c.png 1024w, /assets/cloned/images/9cc7f33269f2.png 2048w, /assets/cloned/images/c8fb4ce5e102.png 4096w, /assets/cloned/images/88ab5ebd250d.png 8000w" }
];
/** Product Grid section. */
export default function ProductGridSection({ logo8Data = Logo8_data, tile2Data = tile2DataContent, products = productsContent } = {}) {
  return (
    <section className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:flex-col" id="pricing">
      <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 shrink-0">
        <div className="contents">
          <div className="h-[142.7625rem] block relative gap-2.5 overflow-clip max-md:h-[140.2875rem] max-lg:[mask-image:initial] md:max-lg:h-[2090.7px] 2xl:h-[1254.5px]" data-ditto-id="style-div-3">
            {logo8Data.map((d, i) => <Logo8 key={i} d={d} styles={Logo8_styles[i]} />)}
          </div>
        </div>
      </div>
      <section className="w-250 flex relative max-w-250 pt-65 pb-15 px-10 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-11 max-md:w-[23.4375rem] max-lg:max-w-150 max-lg:pt-30 max-lg:px-5 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-150 2xl:w-300 2xl:max-w-300 2xl:pt-50 2xl:pb-45 2xl:px-5">
        <div className="w-230 flex relative flex-col justify-center items-center content-center shrink-0 gap-6 max-md:w-[20.9375rem] max-lg:gap-5 md:max-lg:w-140 2xl:w-290">
          <div className="w-230 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-290">
            <p className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[1rem] tracking-[1.08px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[0.9375rem] max-lg:tracking-[1.02px]" dir="auto">
              Pricing
            </p>
          </div>
          <div className="w-full max-w-175 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <h2 className="block text-color-001 [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[3.625rem] leading-[4.3125rem] tracking-[-3.46px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.625rem] max-lg:leading-[3.125rem] max-lg:tracking-[-2.5px]" data-component="heading" dir="auto">
              <span className="inline whitespace-nowrap text-nowrap">
                <span className="inline-block">
                  S
                </span>
                <span className="inline-block">
                  i
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
              </span>
              {" "}
              <span className="inline whitespace-nowrap text-nowrap">
                <span className="inline-block">
                  p
                </span>
                <span className="inline-block">
                  r
                </span>
                <span className="inline-block">
                  i
                </span>
                <span className="inline-block">
                  c
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
              <span className="inline whitespace-nowrap text-nowrap">
                <span className="inline-block">
                  N
                </span>
                <span className="inline-block">
                  o
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
                  r
                </span>
                <span className="inline-block">
                  p
                </span>
                <span className="inline-block">
                  r
                </span>
                <span className="inline-block">
                  i
                </span>
                <span className="inline-block">
                  s
                </span>
                <span className="inline-block">
                  e
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
                  f
                </span>
                <span className="inline-block">
                  r
                </span>
                <span className="inline-block">
                  e
                </span>
                <span className="inline-block">
                  e
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
                  c
                </span>
                <span className="inline-block">
                  a
                </span>
                <span className="inline-block">
                  l
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
                  e
                </span>
                <span className="inline-block">
                  n
                </span>
              </span>
              {" "}
              <span className="inline whitespace-nowrap text-nowrap">
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
                  d
                </span>
                <span className="inline-block">
                  y
                </span>
                <span className="inline-block">
                  .
                </span>
              </span>
            </h2>
          </div>
          <div className="w-full flex relative flex-wrap justify-center items-center content-center shrink-0 gap-3">
            {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
          </div>
        </div>
        <div className="w-full h-[1689.7px] flex relative flex-col justify-center items-end content-end shrink-0 gap-4 max-md:h-[1748.7px] md:max-lg:h-[102.8rem] 2xl:h-150 2xl:[flex-direction:initial] grid-cols-1 2xl:grid-cols-3">
          {products.map((d) => <ProductCard key={d.variant} d={d} />)}
        </div>
      </section>
    </section>
  );
}
