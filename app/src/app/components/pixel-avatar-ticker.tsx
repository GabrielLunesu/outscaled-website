import { Avatar, Style } from "@dicebear/core";
import definition from "@dicebear/styles/pixel-art.json";

const pixelArt = new Style(definition as ConstructorParameters<typeof Style>[0]);

export function pixelAvatarUri(seed: string) {
  const svg = new Avatar(pixelArt, { seed }).toString();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// One copy of the track must measure exactly 3024px — 12 tiles at 240px + 12px gap —
// so the motion-ul-3 marquee (periodPx 3024) wraps seamlessly onto the second copy.
const TILES = [
  { seed: "aria", size: 215, shiftY: -16, tilt: -3 },
  { seed: "finn", size: 240, shiftY: 12, tilt: 2 },
  { seed: "maya", size: 200, shiftY: -26, tilt: 4 },
  { seed: "otis", size: 235, shiftY: 20, tilt: -2 },
  { seed: "zoe", size: 210, shiftY: -4, tilt: 3 },
  { seed: "kai", size: 245, shiftY: -14, tilt: -4 },
  { seed: "luna", size: 205, shiftY: 24, tilt: 1 },
  { seed: "remy", size: 230, shiftY: -20, tilt: -2 },
  { seed: "isla", size: 195, shiftY: 8, tilt: 5 },
  { seed: "theo", size: 240, shiftY: -8, tilt: -3 },
  { seed: "nora", size: 210, shiftY: 18, tilt: 2 },
  { seed: "jude", size: 225, shiftY: -22, tilt: 3 }
];

/** Pixel-art avatar tiles for the footer's infinite ticker, transparent-background,
 * scattered with per-tile vertical offset and tilt. Renders two copies for the marquee loop. */
export default function PixelAvatarTicker() {
  return (
    <>
      {[...TILES, ...TILES].map((t, i) => (
        <li key={i} className="w-60 h-90 list-item max-lg:hidden" aria-hidden="true">
          <div className="w-60 h-90 flex relative items-center justify-center max-lg:hidden">
            <img className="block max-lg:hidden" alt="" height="480" src={pixelAvatarUri(t.seed)} style={{ width: t.size, height: t.size, transform: `translateY(${t.shiftY}px) rotate(${t.tilt}deg)` }} width="480" />
          </div>
        </li>
      ))}
    </>
  );
}
