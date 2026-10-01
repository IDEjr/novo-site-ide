"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./BinaryStream.module.css";

export interface BinaryStreamProps {
  /** Number of horizontal rows. */
  lineCount?: number;
  /** Duration of a complete loop in seconds. */
  speed?: number;
  /** Overall character opacity, from 0 to 1. */
  opacity?: number;
  /** Desktop character size in pixels. */
  fontSize?: number;
  /** Vertical gap between rows in pixels. */
  rowGap?: number;
  className?: string;
}

const MIN_SEQUENCE_LENGTH = 192;

function createSequence(row: number, length: number): string {
  let seed = (row + 1) * 0x45d9f3b;

  return Array.from({ length }, () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed & 0x80000000 ? "1" : "0";
  }).join("");
}

export default function BinaryStream({
  lineCount,
  speed = 500,
  opacity = 0.12,
  fontSize = 110,
  rowGap = 20,
  className,
}: BinaryStreamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0, viewportWidth: 0, viewportHeight: 0 });
  const safeSpeed = Math.max(1, speed);
  const safeFontSize = Math.max(1, fontSize);
  const safeRowGap = Math.max(0, rowGap);
  const isMobile = size.viewportWidth > 0 && size.viewportWidth <= 700;
  const responsiveFontSize = size.viewportWidth === 0
    ? safeFontSize
    : Math.max(
      isMobile ? 12 : 14,
      Math.min(
        safeFontSize,
        size.viewportWidth * (isMobile ? 0.07 : 0.06),
        size.viewportHeight * (isMobile ? 0.06 : 0.11),
        isMobile ? 26 : safeFontSize,
      ),
    );
  const safeLineCount = lineCount === undefined
    ? size.height > 0
      ? Math.max(1, Math.ceil(size.height / Math.max(24, responsiveFontSize + safeRowGap)))
      : 28
    : Math.max(1, Math.floor(lineCount));
  const sequenceLength = Math.max(
    MIN_SEQUENCE_LENGTH,
    Math.ceil(size.width / Math.max(8, safeFontSize * 0.62)),
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateSize = (width: number, height: number) => {
      setSize((previous) => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        return previous.width === width && previous.height === height
          && previous.viewportWidth === viewportWidth && previous.viewportHeight === viewportHeight
          ? previous
          : { width, height, viewportWidth, viewportHeight };
      });
    };

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      updateSize(entry.contentRect.width, entry.contentRect.height);
    });

    observer.observe(element);
    const handleWindowResize = () => {
      const { width, height } = element.getBoundingClientRect();
      updateSize(width, height);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const style = {
    "--line-count": safeLineCount,
    "--stream-opacity": Math.min(1, Math.max(0, opacity)),
    "--stream-font-size": `${safeFontSize}px`,
    "--stream-row-gap": `${safeRowGap}px`,
  } as CSSProperties;

  return (
    <div
      className={`${styles.stream} ${className ?? ""}`}
      style={style}
      ref={containerRef}
      aria-hidden="true"
    >
      {Array.from({ length: safeLineCount }, (_, index) => {
        const sequence = createSequence(index, sequenceLength);
        const duration = safeSpeed * (0.88 + ((index * 17) % 13) / 50);
        const rowStyle = { "--stream-duration": `${duration}s` } as CSSProperties;

        return (
          <div className={styles.line} key={index}>
            <span
              className={`${styles.track} ${index % 2 === 0 ? styles.right : styles.left}`}
              style={rowStyle}
            >
              {sequence}{sequence}
            </span>
          </div>
        );
      })}
    </div>
  );
}
