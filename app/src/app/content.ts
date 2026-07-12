// Semantic page content extracted from recognized recipe sections.

export type TileDataItem = {
  href: string;
  description: string;
};
export const tileData: TileDataItem[] = [
    { href: "/#use-cases", description: "Use Cases" },
    { href: "/#comparison", description: "Why Erie" },
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
    { height: "2688", imgSrc: "/assets/cloned/images/c6a6c5b79eba.png", srcSet: "/assets/cloned/images/1112b4b871c5.png 682w, /assets/cloned/images/34d182eb6d69.png 1365w, /assets/cloned/images/c6a6c5b79eba.png 1792w", width: "1792" },
    { height: "1200", imgSrc: "/assets/cloned/images/23d9b8cbd32e.png", srcSet: "/assets/cloned/images/3bb61dba17c4.png 819w, /assets/cloned/images/23d9b8cbd32e.png 960w", width: "960" },
    { height: "2048", imgSrc: "/assets/cloned/images/8eab5b7aaca4.png", srcSet: "/assets/cloned/images/afc8696ed400.png 512w, /assets/cloned/images/f6e62445d439.png 1024w, /assets/cloned/images/8eab5b7aaca4.png 2048w", width: "2048" },
    { height: "2434", imgSrc: "/assets/cloned/images/1e1e8a9277d2.png", srcSet: "/assets/cloned/images/ccb0143d11bb.png 753w, /assets/cloned/images/ec7e51a2d1c6.png 1507w, /assets/cloned/images/1e1e8a9277d2.png 1792w", width: "1792" }
];

export type LogosItem = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
export const logos: LogosItem[] = [
    { height: "2688", imgSrc: "/assets/cloned/images/c6a6c5b79eba.png", srcSet: "/assets/cloned/images/1112b4b871c5.png 682w, /assets/cloned/images/34d182eb6d69.png 1365w, /assets/cloned/images/c6a6c5b79eba.png 1792w", width: "1792" },
    { height: "1200", imgSrc: "/assets/cloned/images/23d9b8cbd32e.png", srcSet: "/assets/cloned/images/3bb61dba17c4.png 819w, /assets/cloned/images/23d9b8cbd32e.png 960w", width: "960" },
    { height: "2048", imgSrc: "/assets/cloned/images/8eab5b7aaca4.png", srcSet: "/assets/cloned/images/afc8696ed400.png 512w, /assets/cloned/images/f6e62445d439.png 1024w, /assets/cloned/images/8eab5b7aaca4.png 2048w", width: "2048" },
    { height: "2434", imgSrc: "/assets/cloned/images/1e1e8a9277d2.png", srcSet: "/assets/cloned/images/ccb0143d11bb.png 753w, /assets/cloned/images/ec7e51a2d1c6.png 1507w, /assets/cloned/images/1e1e8a9277d2.png 1792w", width: "1792" }
];

export type Logos2Item = {
  ariaposinset: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
export const logos2: Logos2Item[] = [
    { ariaposinset: "1", imgSrc: "/assets/cloned/images/fc7de95a2765.png", width: "345" },
    { ariaposinset: "2", imgSrc: "/assets/cloned/images/aa6f980af627.png", width: "414" },
    { ariaposinset: "3", imgSrc: "/assets/cloned/images/670f58fa8c5a.png", width: "555", sizes: "(min-width: 1440px) 219.2593px, (min-width: 810px) and (max-width: 1439.98px) 219.2593px, (max-width: 809.98px) 219.2593px", srcSet: "/assets/cloned/images/0f36254def1e.png 512w, /assets/cloned/images/670f58fa8c5a.png 555w" },
    { ariaposinset: "4", imgSrc: "/assets/cloned/images/6882c9114888.png", width: "438" },
    { ariaposinset: "5", imgSrc: "/assets/cloned/images/492a9aee7001.png", width: "528", sizes: "(min-width: 1440px) 208.5926px, (min-width: 810px) and (max-width: 1439.98px) 208.5926px, (max-width: 809.98px) 208.5926px", srcSet: "/assets/cloned/images/4602dc1d2094.png 512w, /assets/cloned/images/492a9aee7001.png 528w" }
];

export type FeatureCardDataItem = {
  title: string;
};
export const featureCardData: FeatureCardDataItem[] = [
    { title: "Gemini" },
    { title: "Midjourney" },
    { title: "Erie" }
];

export type Logos3Item = {
  description: string;
};
export const logos3: Logos3Item[] = [
    { description: "Image Generation" },
    { description: "Native Image → Video" },
    { description: "Sub-3s Generation" },
    { description: "Style DNA™ Training" },
    { description: "Inpainting Canvas" },
    { description: "Free Tier" }
];

export type FeaturesItem = {
  variant: string;
  badge?: string;
  title: string;
};
export const features: FeaturesItem[] = [
    { variant: "gemini", badge: "Limited", title: "Gemini" },
    { variant: "midjourney", badge: "Limited", title: "Midjourney" },
    { variant: "erie", title: "Erie" }
];

export type Tile2DataItem = {
  description: string;
};
export const tile2Data: Tile2DataItem[] = [
    { description: "99.9% uptime" },
    { description: "SOC 2 compliant" },
    { description: "No hidden fees" },
    { description: "Cancel anytime" }
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
    { variant: "free", eyebrow: "Basic Plan", title: "Free", description: "What’s included" },
    { variant: "standard-plan", badge: "POPULAR", title: "Standard Plan", description: "What’s included", price: "$15" },
    { variant: "pro-plan", title: "Pro Plan", description: "Value for money", price: "$25" }
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

