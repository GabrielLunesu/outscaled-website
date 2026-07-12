"use client";
import { useEffect } from "react";

/** Nav variant switch: the fixed nav keeps white text/logo over the dark hero and
 *  black #story sections, then flips to dark text once the first light section
 *  (#features) reaches the top of the viewport (styled in ditto.css via
 *  html[data-scrolled]). */
export default function NavScrollState() {
  useEffect(() => {
    const update = () => {
      const features = document.getElementById("features");
      const threshold = features
        ? window.scrollY + features.getBoundingClientRect().top - 1
        : window.innerHeight * 2;
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY >= threshold);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return null;
}
