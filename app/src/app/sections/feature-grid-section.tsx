import FeatureCard from "../components/feature-card";
import Logo7 from "../components/logo7";
import FeatureGridItem from "../components/feature-grid-item";
import { FeatureCard_styles, Logo7_styles } from "../_styles";
import { featureCardData as featureCardDataContent, logos3 as logosContent, features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ featureCardData = featureCardDataContent, logos = logosContent, features = featuresContent } = {}) {
  return (
    <div className="w-full block relative shrink-0 order-[1] max-lg:order-[initial] 2xl:order-[initial]">
      <div className="flex relative rounded-[28px] flex-col justify-center items-start content-start overflow-clip bg-color-005 max-lg:bg-surface-2 max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-112 after:rounded-tl-[28px] max-lg:after:h-[447.3px]">
        <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:p-3 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[20.9375rem] after:h-[59.3px] md:max-lg:after:w-140 2xl:after:hidden">
          {featureCardData.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
        </div>
        <ul className="w-full flex relative p-2 justify-center items-center content-center shrink-0 gap-2 [list-style-type:none] list-outside max-lg:gap-[0.5625rem] grid-cols-1 lg:grid-cols-3">
          <li className="w-[22%] flex relative p-3 flex-col justify-center items-start content-start shrink-0 gap-3 max-md:w-[56.5%] md:max-lg:w-1/3 2xl:w-[17.5%]">
            <div className="w-full h-12 block relative shrink-0 overflow-clip max-lg:hidden" />
            {logos.map((d, i) => <Logo7 key={i} d={d} styles={Logo7_styles[i]} />)}
          </li>
          {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
        </ul>
      </div>
    </div>
  );
}
