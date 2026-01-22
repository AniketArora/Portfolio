"use client";

import { useEffect } from "react";

export default function ScrollNavbar() {
  useEffect(() => {
    let lastScrollTop = 0;
    const nav = document.querySelector(".c-header__nav");
    if (!nav) {
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        nav.classList.remove("c-hide-navbar");
        nav.classList.add("c-show-navbar");
      } else {
        nav.classList.remove("c-show-navbar");
        nav.classList.add("c-hide-navbar");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
