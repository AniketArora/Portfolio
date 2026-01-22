"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({ easing: "ease-in" });
  }, []);

  return null;
}
