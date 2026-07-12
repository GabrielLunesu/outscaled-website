import { Avatar, Style } from "@dicebear/core";
import definition from "@dicebear/styles/pixel-art.json";

type SkillCardData = { type: "skill"; command: string; description: string; seed: string };
type AutomationCardData = { type: "automation"; text: string; seed: string };
type GalleryCardData = SkillCardData | AutomationCardData;

const SKILLS: SkillCardData[] = [
  { type: "skill", command: "/product-lister", description: "Turns a brief into a ready-to-review product listing, written in your voice.", seed: "product-lister" },
  { type: "skill", command: "/check-meta-ads", description: "Pulls today's Meta results and tells you what changed and why.", seed: "check-meta-ads" },
  { type: "skill", command: "/check-google-ads", description: "Spend, clicks, and conversions from Google Ads, in plain words.", seed: "check-google-ads" },
  { type: "skill", command: "/write-description", description: "Rewrites any product description using your brand rules.", seed: "write-description" },
  { type: "skill", command: "/seo-refresh", description: "Proposes new titles, meta descriptions, and tags for a product.", seed: "seo-refresh" },
  { type: "skill", command: "/competitor-scan", description: "Reads a competitor link and reports pricing, angles, and positioning.", seed: "competitor-scan" },
  { type: "skill", command: "/draft-email", description: "Writes a campaign email from a product or promo brief.", seed: "draft-email" },
  { type: "skill", command: "/answer-ticket", description: "Drafts a reply to a customer message in your tone.", seed: "answer-ticket" },
  { type: "skill", command: "/order-lookup", description: "Finds an order and summarizes its status and history.", seed: "order-lookup" },
  { type: "skill", command: "/inventory-check", description: "Reports what's low, what's out, and what's moving fast.", seed: "inventory-check" },
  { type: "skill", command: "/price-check", description: "Compares your price on a product against competitors.", seed: "price-check" },
  { type: "skill", command: "/weekly-recap", description: "Summarizes sales, ads, and support into one readable report.", seed: "weekly-recap" },
  { type: "skill", command: "/refund-review", description: "Reviews a refund request against your policy and proposes a decision.", seed: "refund-review" },
  { type: "skill", command: "/ad-copy", description: "Drafts headline and copy variations for a product you pick.", seed: "ad-copy" },
  { type: "skill", command: "/brand-check", description: "Reviews any text against your brand voice and flags what's off.", seed: "brand-check" }
];

const AUTOMATIONS: AutomationCardData[] = [
  { type: "automation", text: "\"Send me revenue and ROAS every day in #general at 8pm\"", seed: "auto-daily-roas" },
  { type: "automation", text: "\"Draft replies to new support emails and hold them for my approval\"", seed: "auto-support-drafts" },
  { type: "automation", text: "\"Every Monday at 9am, put a weekly performance recap in my inbox\"", seed: "auto-monday-recap" },
  { type: "automation", text: "\"When a product drops below 10 in stock, message me on Slack\"", seed: "auto-low-stock" },
  { type: "automation", text: "\"Watch my Meta ads and flag any ad spending with no sales\"", seed: "auto-meta-watch" },
  { type: "automation", text: "\"When a new order over €500 comes in, notify me right away\"", seed: "auto-big-order" },
  { type: "automation", text: "\"Every Friday, propose three products worth a price change\"", seed: "auto-price-proposals" },
  { type: "automation", text: "\"Draft a listing for every new product added to my Drive folder\"", seed: "auto-drive-listings" },
  { type: "automation", text: "\"Alert me when a competitor changes pricing on tracked products\"", seed: "auto-competitor-price" },
  { type: "automation", text: "\"Summarize yesterday's support tickets every morning at 8am\"", seed: "auto-ticket-summary" },
  { type: "automation", text: "\"When ROAS falls below 2 for two days, tell me which campaigns\"", seed: "auto-roas-alert" },
  { type: "automation", text: "\"Every first of the month, prepare a P&L summary for review\"", seed: "auto-monthly-pnl" },
  { type: "automation", text: "\"Flag reviews under 3 stars and draft a response for approval\"", seed: "auto-review-flags" },
  { type: "automation", text: "\"Remind me of unfulfilled orders older than 48 hours each morning\"", seed: "auto-unfulfilled" },
  { type: "automation", text: "\"Every Sunday, draft next week's promo email for me to approve\"", seed: "auto-promo-draft" }
];

// Interleave so both types appear throughout each marquee row, never grouped.
const CARDS: GalleryCardData[] = SKILLS.flatMap((skill, i) => [skill, AUTOMATIONS[i]]);
const ROW1 = CARDS.slice(0, 15);
const ROW2 = CARDS.slice(15);

const pixelArt = new Style(definition as ConstructorParameters<typeof Style>[0]);

function avatarUri(seed: string): string {
  const svg = new Avatar(pixelArt, { seed }).toString();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function GalleryCard({ d, hidden }: { d: GalleryCardData; hidden?: boolean }) {
  return (
    <li className={`w-90 list-item relative shrink-0${hidden ? " max-lg:hidden" : ""}`} aria-hidden="false">
      <div className="h-35 flex relative p-4 rounded-xl flex-col gap-2.5 border border-black/10 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
        <div className="w-full flex relative justify-between items-center shrink-0">
          <img className="w-10 h-10 block relative shrink-0 rounded-lg [image-rendering:pixelated]" src={avatarUri(d.seed)} alt="" width="40" height="40" />
          <p className="block text-muted-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.6875rem] font-medium leading-4 tracking-[1.2px] uppercase" dir="auto">
            {d.type === "skill" ? "SKILL" : "AUTOMATION"}
          </p>
        </div>
        {d.type === "skill" ? (
          <div className="flex relative flex-col gap-1">
            <p className="block text-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-sm font-medium leading-5" dir="auto">
              {d.command}
            </p>
            <p className="block text-muted-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.8125rem] font-normal leading-[1.125rem] line-clamp-2" dir="auto">
              {d.description}
            </p>
          </div>
        ) : (
          <p className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-sm font-normal leading-5" dir="auto">
            {d.text}
          </p>
        )}
      </div>
    </li>
  );
}

/** Card Grid section. */
export default function CardGridSection() {
  return (
    <div className="w-full block relative shrink-0 max-lg:z-1">
      <div className="flex relative p-0.5 rounded-[10px] flex-col justify-center items-center content-center gap-2.5 overflow-clip max-lg:[flex-direction:initial]">
        <div className="w-229 h-41 block relative shrink-0 max-md:w-[20.6875rem] max-lg:h-auto max-lg:flex-1 md:max-lg:w-139 2xl:w-289">
          <section className="h-full flex max-w-full max-h-full py-3 px-10 items-center justify-items-center overflow-hidden max-lg:p-0" data-ditto-id="style-section">
            <ul className="w-full h-full flex relative max-w-full max-h-full items-center gap-5 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-3.00054,0)] max-lg:flex-col max-lg:gap-2.5 max-md:transform-[matrix(1,0,0,1,0,-9.0009)] md:max-lg:transform-[matrix(1,0,0,1,0,-38.0005)] 2xl:transform-[matrix(1,0,0,1,-1.99638,0)]" data-ditto-id="motion-ul">
              {/* Track content tripled so the marquee loop never runs dry.
                  Duplicates are hidden below lg, where the track renders as a static column. */}
              {[...ROW1, ...ROW1, ...ROW1].map((d, i) => <GalleryCard key={i} d={d} hidden={i >= ROW1.length} />)}
            </ul>
          </section>
        </div>
        <div className="w-229 h-41 block relative shrink-0 max-lg:hidden 2xl:w-289">
          <section className="flex max-w-full max-h-full py-3 px-10 items-center justify-items-center overflow-hidden max-lg:hidden" style={{ maskImage: "linear-gradient(to right, var(--clr-11) 0%, var(--foreground) 12.5%, var(--foreground) 87.5%, var(--clr-11) 100%)" }}>
            <ul className="h-35 flex relative right-850 -left-850 max-w-full max-h-full items-center gap-5 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,4.66836,0)] max-lg:hidden 2xl:transform-[matrix(1,0,0,1,1.33092,0)]" data-ditto-id="motion-ul-2">
              {/* Track content tripled so the marquee loop never runs dry. */}
              {[...ROW2, ...ROW2, ...ROW2].map((d, i) => <GalleryCard key={i} d={d} />)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
