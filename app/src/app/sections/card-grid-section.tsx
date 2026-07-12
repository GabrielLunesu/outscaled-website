import MediaTile, { type MediaTileData } from "../components/media-tile";
import MediaTile2, { type MediaTile2Data } from "../components/media-tile2";
import { MediaTile_styles, MediaTile2_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { name: "1", name2: "1", kind: "image", height: "2912", imgSrc: "/assets/cloned/images/92d2694bf867.png", srcSet: "/assets/cloned/images/40bd15d6955e.png 573w, /assets/cloned/images/53660d8ddfcf.png 1147w, /assets/cloned/images/92d2694bf867.png 1632w", width: "1632", kind2: "icon", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" },
    { name: "2", name2: "2", kind: "image", height: "2400", imgSrc: "/assets/cloned/images/87aa66247bfc.png", srcSet: "/assets/cloned/images/11d3025393e7.png 819w, /assets/cloned/images/ed4ff3568a68.png 1638w, /assets/cloned/images/87aa66247bfc.png 1920w", width: "1920", kind2: "icon", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "3", name2: "3", kind: "image", height: "2464", imgSrc: "/assets/cloned/images/e478929f98bc.png", srcSet: "/assets/cloned/images/0546315834c2.png 771w, /assets/cloned/images/304493b11e3d.png 1542w, /assets/cloned/images/e478929f98bc.png 1856w", width: "1856", kind2: "icon", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "4", name2: "4", kind: "image", height: "2048", imgSrc: "/assets/cloned/images/1ac1618a1012.png", srcSet: "/assets/cloned/images/553e65288194.png 512w, /assets/cloned/images/cad3a5194ac4.png 1024w, /assets/cloned/images/1ac1618a1012.png 2048w", width: "2048", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "5", name2: "5", height: "840", imgSrc: "/assets/cloned/images/d2f2b9b1fd65.png", srcSet: "/assets/cloned/images/8682a38d07de.png 512w, /assets/cloned/images/d343f8182aca.png 1024w, /assets/cloned/images/d2f2b9b1fd65.png 1200w", width: "1200", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "1", name2: "1", height: "2912", imgSrc: "/assets/cloned/images/92d2694bf867.png", srcSet: "/assets/cloned/images/40bd15d6955e.png 573w, /assets/cloned/images/53660d8ddfcf.png 1147w, /assets/cloned/images/92d2694bf867.png 1632w", width: "1632", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" },
    { name: "2", name2: "2", height: "2400", imgSrc: "/assets/cloned/images/87aa66247bfc.png", srcSet: "/assets/cloned/images/11d3025393e7.png 819w, /assets/cloned/images/ed4ff3568a68.png 1638w, /assets/cloned/images/87aa66247bfc.png 1920w", width: "1920", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "3", name2: "3", height: "2464", imgSrc: "/assets/cloned/images/e478929f98bc.png", srcSet: "/assets/cloned/images/0546315834c2.png 771w, /assets/cloned/images/304493b11e3d.png 1542w, /assets/cloned/images/e478929f98bc.png 1856w", width: "1856", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "4", name2: "4", height: "2048", imgSrc: "/assets/cloned/images/1ac1618a1012.png", srcSet: "/assets/cloned/images/553e65288194.png 512w, /assets/cloned/images/cad3a5194ac4.png 1024w, /assets/cloned/images/1ac1618a1012.png 2048w", width: "2048", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "5", name2: "5", height: "840", imgSrc: "/assets/cloned/images/d2f2b9b1fd65.png", srcSet: "/assets/cloned/images/8682a38d07de.png 512w, /assets/cloned/images/d343f8182aca.png 1024w, /assets/cloned/images/d2f2b9b1fd65.png 1200w", width: "1200", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "1", name2: "1", height: "2912", imgSrc: "/assets/cloned/images/92d2694bf867.png", srcSet: "/assets/cloned/images/40bd15d6955e.png 573w, /assets/cloned/images/53660d8ddfcf.png 1147w, /assets/cloned/images/92d2694bf867.png 1632w", width: "1632", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" },
    { name: "2", name2: "2", height: "2400", imgSrc: "/assets/cloned/images/87aa66247bfc.png", srcSet: "/assets/cloned/images/11d3025393e7.png 819w, /assets/cloned/images/ed4ff3568a68.png 1638w, /assets/cloned/images/87aa66247bfc.png 1920w", width: "1920", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "3", name2: "3", height: "2464", imgSrc: "/assets/cloned/images/e478929f98bc.png", srcSet: "/assets/cloned/images/0546315834c2.png 771w, /assets/cloned/images/304493b11e3d.png 1542w, /assets/cloned/images/e478929f98bc.png 1856w", width: "1856", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "4", name2: "4", height: "2048", imgSrc: "/assets/cloned/images/1ac1618a1012.png", srcSet: "/assets/cloned/images/553e65288194.png 512w, /assets/cloned/images/cad3a5194ac4.png 1024w, /assets/cloned/images/1ac1618a1012.png 2048w", width: "2048", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "5", name2: "5", height: "840", imgSrc: "/assets/cloned/images/d2f2b9b1fd65.png", srcSet: "/assets/cloned/images/8682a38d07de.png 512w, /assets/cloned/images/d343f8182aca.png 1024w, /assets/cloned/images/d2f2b9b1fd65.png 1200w", width: "1200", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "1", name2: "1", height: "2912", imgSrc: "/assets/cloned/images/92d2694bf867.png", srcSet: "/assets/cloned/images/40bd15d6955e.png 573w, /assets/cloned/images/53660d8ddfcf.png 1147w, /assets/cloned/images/92d2694bf867.png 1632w", width: "1632", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" },
    { name: "2", name2: "2", height: "2400", imgSrc: "/assets/cloned/images/87aa66247bfc.png", srcSet: "/assets/cloned/images/11d3025393e7.png 819w, /assets/cloned/images/ed4ff3568a68.png 1638w, /assets/cloned/images/87aa66247bfc.png 1920w", width: "1920", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "3", name2: "3", height: "2464", imgSrc: "/assets/cloned/images/e478929f98bc.png", srcSet: "/assets/cloned/images/0546315834c2.png 771w, /assets/cloned/images/304493b11e3d.png 1542w, /assets/cloned/images/e478929f98bc.png 1856w", width: "1856", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "4", name2: "4", height: "2048", imgSrc: "/assets/cloned/images/1ac1618a1012.png", srcSet: "/assets/cloned/images/553e65288194.png 512w, /assets/cloned/images/cad3a5194ac4.png 1024w, /assets/cloned/images/1ac1618a1012.png 2048w", width: "2048", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "5", name2: "5", height: "840", imgSrc: "/assets/cloned/images/d2f2b9b1fd65.png", srcSet: "/assets/cloned/images/8682a38d07de.png 512w, /assets/cloned/images/d343f8182aca.png 1024w, /assets/cloned/images/d2f2b9b1fd65.png 1200w", width: "1200", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { name: "8", name2: "8", height: "1456", imgSrc: "/assets/cloned/images/5ec64413b47b.png", srcSet: "/assets/cloned/images/4e6533f53869.png 573w, /assets/cloned/images/5ec64413b47b.png 816w", width: "816", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "1", name2: "1", height: "2912", imgSrc: "/assets/cloned/images/92d2694bf867.png", srcSet: "/assets/cloned/images/40bd15d6955e.png 573w, /assets/cloned/images/53660d8ddfcf.png 1147w, /assets/cloned/images/92d2694bf867.png 1632w", width: "1632", kind: "image", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" },
    { name: "5", name2: "5", height: "840", imgSrc: "/assets/cloned/images/d2f2b9b1fd65.png", srcSet: "/assets/cloned/images/8682a38d07de.png 512w, /assets/cloned/images/d343f8182aca.png 1024w, /assets/cloned/images/d2f2b9b1fd65.png 1200w", width: "1200", kind: "image", kind2: "icon", icon: <>
                <use href="#19207876" />
                </>, description: "Create Video" },
    { name: "6", name2: "6", height: "2624", imgSrc: "/assets/cloned/images/75312f10ff08.png", srcSet: "/assets/cloned/images/28c7131bd151.png 724w, /assets/cloned/images/bad7bf2734e1.png 1448w, /assets/cloned/images/75312f10ff08.png 1856w", width: "1856", kind: "image", kind2: "icon", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "7", name2: "7", height: "676", imgSrc: "/assets/cloned/images/35b02958edbe.png", srcSet: "/assets/cloned/images/1547c52f83c0.png 512w, /assets/cloned/images/35b02958edbe.png 816w", width: "816", kind: "image", kind2: "icon", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" },
    { name: "8", name2: "8", height: "1456", imgSrc: "/assets/cloned/images/5ec64413b47b.png", srcSet: "/assets/cloned/images/4e6533f53869.png 573w, /assets/cloned/images/5ec64413b47b.png 816w", width: "816", kind: "image", icon: <>
                <use href="#3571851589" />
                </>, description: "Use Prompt" },
    { name: "1", name2: "1", height: "2912", imgSrc: "/assets/cloned/images/92d2694bf867.png", srcSet: "/assets/cloned/images/40bd15d6955e.png 573w, /assets/cloned/images/53660d8ddfcf.png 1147w, /assets/cloned/images/92d2694bf867.png 1632w", width: "1632", icon: <>
                <use href="#352771695" />
                </>, description: "Create same style image" }
];
/** Card Grid section. */
export default function CardGridSection({ mediaTileData = MediaTile_data, mediaTile2Data = MediaTile2_data } = {}) {
  return (
    <div className="w-full block relative shrink-0 max-lg:z-1">
      <div className="flex relative p-0.5 rounded-[10px] flex-col justify-center items-center content-center gap-2.5 overflow-clip max-lg:[flex-direction:initial]">
        <div className="w-229 h-52.5 block relative shrink-0 max-md:w-[20.6875rem] max-lg:h-[65.3125rem] max-lg:flex-1 md:max-lg:w-139 2xl:w-289">
          <section className="h-full flex max-w-full max-h-full p-10 items-center justify-items-center overflow-hidden max-lg:p-0" data-ditto-id="style-section">
            <ul className="w-full h-full flex relative max-w-full max-h-full items-center gap-5 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-3.00054,0)] max-lg:flex-col max-lg:gap-2.5 max-md:transform-[matrix(1,0,0,1,0,-9.0009)] md:max-lg:transform-[matrix(1,0,0,1,0,-38.0005)] 2xl:transform-[matrix(1,0,0,1,-1.99638,0)]" data-ditto-id="motion-ul">
              {/* Track content tripled so the 2380px-period marquee loop never runs dry.
                  Duplicates are hidden below lg, where the track renders as a static column. */}
              {[...mediaTileData, ...mediaTileData, ...mediaTileData].map((d, i) => {
                const base = MediaTile_styles[i % mediaTileData.length];
                const styles = i < mediaTileData.length ? base : { ...base, className: `${base.className} max-lg:hidden` };
                return <MediaTile key={i} d={d} styles={styles} />;
              })}
            </ul>
          </section>
        </div>
        <div className="w-229 h-52.5 block relative shrink-0 max-lg:hidden 2xl:w-289">
          <section className="flex max-w-full max-h-full p-10 items-center justify-items-center overflow-hidden max-lg:hidden" style={{ maskImage: "linear-gradient(to right, var(--clr-11) 0%, var(--foreground) 12.5%, var(--foreground) 87.5%, var(--clr-11) 100%)" }}>
            <ul className="h-32.5 flex relative right-850 -left-850 max-w-full max-h-full items-center gap-5 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,4.66836,0)] max-lg:hidden 2xl:transform-[matrix(1,0,0,1,1.33092,0)]" data-ditto-id="motion-ul-2">
              {/* Track content tripled so the 2380px-period marquee loop never runs dry. */}
              {[...mediaTile2Data, ...mediaTile2Data, ...mediaTile2Data].map((d, i) => <MediaTile2 key={i} d={d} styles={MediaTile2_styles[i % mediaTile2Data.length]} />)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
