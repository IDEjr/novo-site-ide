"use client";

import { useEffect, useState } from "react";

import FaultyTerminal from "../FaultyTerminal/FaultyTerminal";
import styles from "./Background.module.css";

export default function Background() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isPoorINP, setIsPoorINP] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    // Monitorar INP usando PerformanceObserver com "event" entryTypes
    let observerSupported = false;
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Verifica interações (click, keydown, pointerup) com duration > 320ms
            if ("duration" in entry && entry.duration > 320) {
              setIsPoorINP(true);
              observer.disconnect();
              return;
            }
          }
        });

        observer.observe({ entryTypes: ["event"] } as any);
        observerSupported = true;

        return () => {
          observer.disconnect();
          mediaQuery.removeEventListener("change", handleChange);
        };
      } catch {
        // PerformanceObserver não suporta "event"
      }
    }

    // Fallback: monitorar interações manualmente se PerformanceObserver falhar
    if (!observerSupported) {
      const handleInteraction = (startTime: number) => {
        // Usar requestAnimationFrame para medir quando a próxima pintura vai acontecer
        requestAnimationFrame((rafTime) => {
          const duration = rafTime - startTime;
          if (duration > 320) {
            setIsPoorINP(true);
          }
        });
      };

      const handleClick = () => handleInteraction(performance.now());
      const handleKeydown = () => handleInteraction(performance.now());
      const handlePointerup = () => handleInteraction(performance.now());

      document.addEventListener("click", handleClick, true);
      document.addEventListener("keydown", handleKeydown, true);
      document.addEventListener("pointerup", handlePointerup, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
        document.removeEventListener("keydown", handleKeydown, true);
        document.removeEventListener("pointerup", handlePointerup, true);
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile || isPoorINP) {
    return <div className={`${styles.background} ${styles.mobileBackground}`} />;
  }

  const desktopConfig = {
    dpr: 0.6,
    tint: "#7922d6",
    scale: 2.7,
    timeScale: 1.2,
    scanlineIntensity: 0.2,
    curvature: 0.9,

    gridMul: [2, 1] as [number, number],
    digitSize: 1.5,
    glitchAmount: 1,
    flickerAmount: 1,
    noiseAmp: 1,
    chromaticAberration: 0,
    dither: 0,
    mouseReact: false,
    mouseStrength: 0.2,
    brightness: 0.7,
    pageLoadAnimation: true,
  };

  return (
    <div className={styles.background}>
      <FaultyTerminal
        {...desktopConfig}
        staticMode={false}
      />
    </div>
  );
}
