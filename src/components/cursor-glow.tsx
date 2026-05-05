"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.body.style.setProperty("--glow-x", e.clientX + "px");
      document.body.style.setProperty("--glow-y", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
