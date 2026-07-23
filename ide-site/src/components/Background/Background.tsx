"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import FaultyTerminal from "../FaultyTerminal/FaultyTerminal";
import styles from "./Background.module.css";

export default function Background() {
  const pathname = usePathname();

  console.log(pathname);
  const config = useMemo(() => {
    switch (pathname) {
      case "/":
        return {
          tint: "#7922d6",
          scale: 2.7,
          timeScale: 1.2,
          scanlineIntensity: 0.2,
          curvature: 0.6,
        };

      case "/Portfolio":
        return {
          tint: "#277231",
          scale: 1.9,
          timeScale: 1,
          scanlineIntensity: 0,
          curvature: 0,
        };

      case "/QuemSomos":
        return {
          tint: "#2d5c88",
          scale: 1,
          timeScale: 0.6,
          scanlineIntensity: 0,
          curvature: 4,
        };

      default:
        return {
          tint: "#7b00ff",
          scale: 2.7,
          timeScale: 1.7,
          scanlineIntensity: 1.7,
          curvature: 0.28,
        };
    }
  }, [pathname]);

  return (
    <div className={styles.background}>
      <FaultyTerminal {...config} />
    </div>
  );
}
