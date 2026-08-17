"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import FaultyTerminal from "../FaultyTerminal/FaultyTerminal";
import styles from "./Background.module.css";

export default function Background() {
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const config = useMemo(() => {
    // =========================
    // MOBILE
    // =========================
    if (isMobile) {
      const mobileConfig = {
        dpr: 0.5,

        // Efeitos reduzidos
        glitchAmount: 0.2,
        flickerAmount: 0.2,
        noiseAmp: 0.2,
        chromaticAberration: 0,
        dither: 0,

        brightness: 0.8,
      };

      switch (pathname) {
        case "/":
          return {
            ...mobileConfig,
            tint: "#7922d6",
            scale: 1.5,
            timeScale: 0.5,
            scanlineIntensity: 0,
            curvature: 0.15,
          };

        case "/Portfolio":
          return {
            ...mobileConfig,
            tint: "#277231",
            scale: 1.2,
            timeScale: 0.35,
            scanlineIntensity: 0,
            curvature: 0,
          };

        case "/QuemSomos":
          return {
            ...mobileConfig,
            tint: "#2d5c88",
            scale: 0.8,
            timeScale: 0.3,
            scanlineIntensity: 0,
            curvature: 0.8,
          };

        case "/Contato":
          return {
            ...mobileConfig,
            tint: "#808386",
            scale: 2,
            timeScale: 0.35,
            scanlineIntensity: 0,
            curvature: -0.05,
          };

        case "/Servicos":
          return {
            ...mobileConfig,
            tint: "#521bd3",
            scale: 0.8,
            timeScale: 0.8,
            scanlineIntensity: 0,
            curvature: 0.8,
          };

        default:
          return {
            ...mobileConfig,
            tint: "#7b00ff",
            scale: 1.5,
            timeScale: 0.5,
            scanlineIntensity: 0,
            curvature: 0.15,
          };
      }
    }

    // =========================
    // DESKTOP
    // =========================

    const desktopConfig = {
      dpr: 1
    };

    switch (pathname) {
      case "/":
        return {
          ...desktopConfig,
          tint: "#7922d6",
          scale: 2.7,
          timeScale: 1.2,
          scanlineIntensity: 0.2,
          curvature: 0.6,
        };

      case "/Portfolio":
        return {
          ...desktopConfig,
          tint: "#277231",
          scale: 1.9,
          timeScale: 1,
          scanlineIntensity: 0,
          curvature: 0,
        };

      case "/QuemSomos":
        return {
          ...desktopConfig,
          tint: "#2d5c88",
          scale: 1,
          timeScale: 0.6,
          scanlineIntensity: 0,
          curvature: 4,
        };

      case "/Contato":
        return {
          ...desktopConfig,
          tint: "#808386",
          scale: 4,
          timeScale: 1,
          scanlineIntensity: 0,
          curvature: -0.1,
        };

      case "/Servicos":
        return {
          ...desktopConfig,
          tint: "#521bd3",
          scale: 1,
          timeScale: 4,
          scanlineIntensity: 0,
          curvature: 4,
        };

      default:
        return {
          ...desktopConfig,
          tint: "#7b00ff",
          scale: 2.7,
          timeScale: 1.7,
          scanlineIntensity: 0,
          curvature: 0.28,
        };
    }
  }, [pathname, isMobile]);

  return (
    <div className={styles.background}>
      <FaultyTerminal {...config} />
    </div>
  );
}