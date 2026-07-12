// Semantic page content extracted from recognized recipe sections.

export type TileDataItem = {
  href: string;
  description: string;
};
export const tileData: TileDataItem[] = [
  { href: "/#use-cases", description: "Use Cases" },
  { href: "/#comparison", description: "Why Outscaled" },
  { href: "/#pricing", description: "Pricing" },
  { href: "/#faq", description: "FAQ" },
  { href: "/tutorials#hero", description: "Tutorials" }
];

export type Logo2DataItem = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
export const logo2Data: Logo2DataItem[] = [
  { height: "2688", imgSrc: "https://placehold.co/1792x2688", srcSet: "https://placehold.co/683x1024 682w, https://placehold.co/1365x2048 1365w, https://placehold.co/1792x2688 1792w", width: "1792" },
  { height: "1200", imgSrc: "https://placehold.co/960x1200", srcSet: "https://placehold.co/819x1024 819w, https://placehold.co/960x1200 960w", width: "960" },
  { height: "2048", imgSrc: "https://placehold.co/2048x2048", srcSet: "https://placehold.co/512x512 512w, https://placehold.co/1024x1024 1024w, https://placehold.co/2048x2048 2048w", width: "2048" },
  { height: "2434", imgSrc: "https://placehold.co/1792x2434", srcSet: "https://placehold.co/754x1024 753w, https://placehold.co/1508x2048 1507w, https://placehold.co/1792x2434 1792w", width: "1792" }
];

export type Integration = "meta" | "google" | "shopify" | "slack" | "more";

export type LogosItem = {
  label: string;
  integration: Integration;
};

export const logos: LogosItem[] = [
  { label: "Meta Ads", integration: "meta" },
  { label: "Google Ads", integration: "google" },
  { label: "Shopify", integration: "shopify" },
  { label: "Slack", integration: "slack" },
  { label: "More apps", integration: "more" }
];

export type Logos2Item = {
  ariaposinset: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
export const logos2: Logos2Item[] = [
  { ariaposinset: "1", imgSrc: "https://placehold.co/345x81", width: "345" },
  { ariaposinset: "2", imgSrc: "https://placehold.co/414x81", width: "414" },
  { ariaposinset: "3", imgSrc: "https://placehold.co/555x81", width: "555", sizes: "(min-width: 1440px) 219.2593px, (min-width: 810px) and (max-width: 1439.98px) 219.2593px, (max-width: 809.98px) 219.2593px", srcSet: "https://placehold.co/555x81 512w, https://placehold.co/555x81 555w" },
  { ariaposinset: "4", imgSrc: "https://placehold.co/438x81", width: "438" },
  { ariaposinset: "5", imgSrc: "https://placehold.co/528x81", width: "528", sizes: "(min-width: 1440px) 208.5926px, (min-width: 810px) and (max-width: 1439.98px) 208.5926px, (max-width: 809.98px) 208.5926px", srcSet: "https://placehold.co/528x81 512w, https://placehold.co/528x81 528w" }
];

export type FeatureCardDataItem = {
  title: string;
};
export const featureCardData: FeatureCardDataItem[] = [
  { title: "AI chatbots" },
  { title: "Build it yourself" },
  { title: "Outscaled" }
];

export type Logos3Item = {
  description: string;
};
export const logos3: Logos3Item[] = [
  { description: "Knows your brand and products" },
  { description: "Works inside Shopify, ads, and your inbox" },
  { description: "Works while you sleep" },
  { description: "Setup" },
  { description: "Approvals and control" },
  { description: "Gets better every run" },
  { description: "Maintenance" }
];

export type FeaturesItem = {
  variant: string;
  subtitle?: string;
  title: string;
};
export const features: FeaturesItem[] = [
  { variant: "gemini", title: "AI chatbots", subtitle: "ChatGPT, Claude, Gemini" },
  { variant: "midjourney", title: "Build it yourself", subtitle: "custom agents, agencies" },
  { variant: "erie", title: "Outscaled" }
];

export type Tile2DataItem = {
  description: string;
};
export const tile2Data: Tile2DataItem[] = [
  { description: "No hidden fees" },
  { description: "Cancel anytime" },
  { description: "1,000 credits on us" }
];

export type ProductsItem = {
  variant: string;
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  price?: string;
};
export const products: ProductsItem[] = [
  { variant: "pro-plan", title: "Early Access", description: "Founding merchant", price: "$99" }
];

export type Tile3DataItem = {
  href: string;
  description: string;
};
export const tile3Data: Tile3DataItem[] = [
  { href: "/tutorials/your-first-image-in-5-minutes-description#hero", description: "Your First Image in 5 Minutes" },
  { href: "/tutorials/how-to-write-better-prompts#hero", description: "How to Write Better Prompts" },
  { href: "/tutorials/how-to-train-your-personal-style#hero", description: "How to Train Your Personal Style" },
  { href: "/tutorials/animating-a-still-image-into-video#hero", description: "Animating a Still Image into Video" },
  { href: "/tutorials/how-to-edit-any-part-of-an-image#hero", description: "How to Edit Any Part of an Image" },
  { href: "/tutorials/learn-negative-prompting#hero", description: "Learn Negative Prompting" }
];

export type Tile4DataItem = {
  href: string;
  description: string;
};
export const tile4Data: Tile4DataItem[] = [
  { href: "/#hero", description: "Home" },
  { href: "/#features", description: "Features" },
  { href: "/#use-cases", description: "Use cases" },
  { href: "/#comparison", description: "Comparison" },
  { href: "/#pricing", description: "Pricing" },
  { href: "/#faq", description: "FAQ" },
  { href: "/explore#hero", description: "Explore" },
  { href: "/tutorials#hero", description: "Tutorials" }
];
