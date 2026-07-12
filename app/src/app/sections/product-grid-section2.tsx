/** Testimonials grid: three infinite vertical marquee columns (left up, middle down, right up).
 *  Review copy is placeholder, to be replaced with real merchant quotes after launch. */

type Review = {
  quote: string;
  name: string;
  role: string;
};

const LEFT_REVIEWS: Review[] = [
  {
    quote:
      "I described the job once and the listings started arriving for approval the next morning. It genuinely feels like someone new started on Monday.",
    name: "Jonas",
    role: "skincare brand",
  },
  {
    quote:
      "The approval inbox is the feature I didn't know I needed. I review, I approve, I move on with my day.",
    name: "Marta",
    role: "home goods store",
  },
  {
    quote: "Support drafts sound like me on a good day. I edit maybe one in ten.",
    name: "Kevin",
    role: "supplement brand",
  },
  {
    quote:
      "I stopped checking three dashboards every morning. One recap, plain words, done.",
    name: "Ana",
    role: "fashion boutique",
  },
];

const MIDDLE_REVIEWS: Review[] = [
  {
    quote:
      "Set it up on a Sunday evening. By Wednesday I couldn't remember how I handled listings before.",
    name: "Tom",
    role: "outdoor gear store",
  },
  {
    quote:
      "The agent flagged an ad that was spending with zero sales before I'd even had coffee. That one catch paid for the month.",
    name: "Lisa",
    role: "jewelry brand",
  },
  {
    quote:
      "Everything it does is on the record. I can see every run, every decision. That's what got me to trust it.",
    name: "Marco",
    role: "electronics store",
  },
  {
    quote: "I gave it our brand rules once. It hasn't broken them since.",
    name: "Sophie",
    role: "pet supplies brand",
  },
];

const RIGHT_REVIEWS: Review[] = [
  {
    quote:
      "It's the difference between doing the work and reviewing the work. I didn't realize how big that difference was.",
    name: "Daniel",
    role: "coffee roastery",
  },
  {
    quote: "My weekends came back. That's the review.",
    name: "Emma",
    role: "kids clothing store",
  },
  {
    quote:
      "We asked for a custom agent for our returns process. It was in our workspace that week, working exactly how we do.",
    name: "Victor",
    role: "furniture brand",
  },
  {
    quote:
      "It never publishes anything without me. That's exactly the leash I wanted to start with.",
    name: "Nadia",
    role: "beauty brand",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-full block relative shrink-0">
      <div className="flex relative p-2 rounded-[20px] flex-col justify-center items-center content-center gap-5 bg-color-002">
        <div className="w-226 flex relative p-7.5 rounded-[20px] flex-col justify-center items-start content-start shrink-0 gap-7.5 bg-color-001 max-md:w-[19.9375rem] md:max-lg:w-136 2xl:w-[357.3px]">
          <div className="w-211 flex relative rounded-[20px] flex-col justify-start items-start content-start shrink-0 gap-2.5 max-md:w-[16.1875rem] md:max-lg:w-121 2xl:w-[297.3px]">
            <div className="w-211 flex relative flex-col justify-start shrink-0 max-md:w-[16.1875rem] md:max-lg:w-121 2xl:w-[297.3px]">
              <h6 className="block [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.58px] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.1875rem] max-lg:tracking-[-0.43px]" data-component="heading" dir="auto">
                {review.quote}
              </h6>
            </div>
          </div>
          <div className="w-211 flex relative flex-col justify-start items-start content-start shrink-0 gap-1 max-md:w-[16.1875rem] md:max-lg:w-121 2xl:w-[297.3px]">
            <p className="block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-[1.3125rem] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
              {review.name}
            </p>
            <p className="block text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-sm leading-[1.125rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]" dir="auto">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({
  reviews,
  direction,
  className = "",
}: {
  reviews: Review[];
  direction: "up" | "down";
  className?: string;
}) {
  const animation =
    direction === "up"
      ? "[animation:testimonials-scroll-up_35s_linear_infinite]"
      : "[animation:testimonials-scroll-down_35s_linear_infinite]";
  return (
    <div className={`group w-230 h-full relative overflow-hidden shrink-0 max-md:w-[20.9375rem] md:max-lg:w-140 2xl:w-[373.3px] ${className}`}>
      <div className={`flex flex-col ${animation} group-hover:[animation-play-state:paused]`}>
        <div className="flex flex-col gap-5 pb-5">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <div className="flex flex-col gap-5 pb-5" aria-hidden="true">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductGridSection2() {
  return (
    <div className="w-full block relative shrink-0" id="testimonials-grid">
      <div className="h-175 flex relative justify-start items-start content-start gap-5 2xl:h-150">
        <div
          className="w-full h-full flex relative justify-center items-start content-start gap-5"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <MarqueeColumn reviews={LEFT_REVIEWS} direction="up" />
          <MarqueeColumn reviews={MIDDLE_REVIEWS} direction="down" className="hidden 2xl:block" />
          <MarqueeColumn reviews={RIGHT_REVIEWS} direction="up" className="hidden 2xl:block" />
        </div>
        <div className="block absolute -bottom-20 left-1/2 -translate-x-1/2 z-1 min-w-0 shrink-0">
          <a className="h-12.5 flex relative py-3.5 px-7 rounded-[100px] justify-center items-center content-center bg-color-001 shadow-[0px_4px_16px_rgba(28,25,23,0.12)] cursor-pointer" href="#contact">
            <p className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-[0.9375rem] font-medium leading-5 whitespace-pre text-nowrap" dir="auto">
              Talk with us
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
