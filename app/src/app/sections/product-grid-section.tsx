import Logo8, { type Logo8Data } from "../components/logo8";
import Tile2 from "../components/tile2";
import ProductCard from "../components/product-card";
import { Logo8_styles, Tile2_styles } from "../_styles";
import { tile2Data as tile2DataContent, products as productsContent } from "../content";
const Logo8_data: Logo8Data[] = [
    { height: "1080", imgSrc: "/assets/cloned/images/clouds/5.svg" },
    { height: "1080", imgSrc: "/assets/cloned/images/clouds/2.svg" },
    { height: "1080", imgSrc: "/assets/cloned/images/clouds/3.svg" },
    { height: "1080", imgSrc: "/assets/cloned/images/clouds/1.svg" }
];
/** Product Grid section. */
export default function ProductGridSection({ logo8Data = Logo8_data, tile2Data = tile2DataContent, products = productsContent } = {}) {
  return (
    <section className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:flex-col" id="pricing">
      <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 shrink-0">
        <div className="contents">
          <div className="h-[142.7625rem] block relative gap-2.5 overflow-clip max-md:h-[140.2875rem] max-lg:[mask-image:initial] md:max-lg:h-[2090.7px] 2xl:h-[1254.5px]" data-ditto-id="style-div-3" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), linear-gradient(180deg, rgba(230,135,60,0) calc(56.25vw - 180px), rgb(230,135,60) calc(56.25vw - 10px)), url(/assets/cloned/images/pricing/3.png)", backgroundSize: "auto, auto, 100% auto", backgroundPosition: "top, top, top", backgroundRepeat: "no-repeat" }}>
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
              Scale when ready.
            </h2>
            <p className="block text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-lg leading-[1.5rem] text-center mt-4 [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-base" dir="auto">
              One plan while we&rsquo;re early. Everything included, nothing gated.
            </p>
          </div>
          <div className="w-full flex relative flex-wrap justify-center items-center content-center shrink-0 gap-3">
            {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
          </div>
        </div>
        <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-4">
          {products.map((d) => <ProductCard key={d.variant} d={d} />)}
        </div>
      </section>
    </section>
  );
}
