"use client";
import { useEffect } from "react";

/** Mirrors the source site's nav variant switch: after scrolling one full viewport
 *  height, the fixed nav gains a translucent light background + dark text
 *  (styled in ditto.css via html[data-scrolled]). */
export default function NavScrollState() {
  useEffect(() => {
    const update = () => {
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY >= window.innerHeight);
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
