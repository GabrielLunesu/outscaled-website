import "./globals.css";
import "./ditto.css";
import { Headland_One, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";

const headlandOne = Headland_One({ weight: "400", subsets: ["latin"], variable: "--font-headland-one" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });
import { SITE_ORIGIN } from "../lib/site";
import SvgSprite from "./svgs/sprite";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Outscaled - AI Employees for Ecommerce",
  "description": "Outscaled is the first AI employee platform that actually works. Hire AI agents for customer support, social media, and more. No-code setup, real results.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Outscaled - AI Employees for Ecommerce",
    "description": "Outscaled is the first AI employee platform that actually works. Hire AI agents for customer support, social media, and more. No-code setup, real results.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/images/eocjpipeCV8HsjiQ9mupZkj77c.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Outscaled - AI Employees for Ecommerce",
    "description": "Outscaled is the first AI employee platform that actually works. Hire AI agents for customer support, social media, and more. No-code setup, real results.",
    "images": [
      "https://framerusercontent.com/images/eocjpipeCV8HsjiQ9mupZkj77c.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "https://placehold.co/64x64",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "https://placehold.co/64x64",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "https://placehold.co/64x64"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"} className={`${headlandOne.variable} ${interTight.variable}`}>
      <body className="block text-foreground [font-family:var(--font-inter-tight),sans-serif] text-xs font-normal not-italic leading-3.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        <SvgSprite />
        {children}
      </body>
    </html>
  );
}
