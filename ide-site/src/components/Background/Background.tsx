"use client";

import { useEffect, useState } from "react";

import FaultyTerminal from "../FaultyTerminal/FaultyTerminal";
import styles from "./Background.module.css";

export default function Background() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

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

  if (isMobile === null) {
    return null;
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

  const mobileConfig = {
    dpr: 0.5,
    tint: "#7922d6",
    scale: 1.8,
    timeScale: 1,
    scanlineIntensity: 0.3,
    curvature: 0.2,

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
    pageLoadAnimation: false,
  };

  const config = isMobile ? mobileConfig : desktopConfig;

  if (isMobile) {
    return <div className={`${styles.background} ${styles.mobileBackground}`} />;
  }

  return (
    <div className={styles.background}>
      <FaultyTerminal
        {...config}
        staticMode={false}
      />
    </div>
  );
}
