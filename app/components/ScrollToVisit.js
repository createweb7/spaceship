"use client";

import { useEffect } from "react";

export default function ScrollToVisit() {
  useEffect(() => {
    if (sessionStorage.getItem("scrollTo") === "visit") {
      sessionStorage.removeItem("scrollTo");
      requestAnimationFrame(() => {
        document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return null;
}
