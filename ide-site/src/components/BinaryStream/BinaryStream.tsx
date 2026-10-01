import type { CSSProperties } from "react";
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

const SEQUENCE_LENGTH = 192;

function createSequence(row: number): string {
  let seed = (row + 1) * 0x45d9f3b;

  return Array.from({ length: SEQUENCE_LENGTH }, () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed & 0x80000000 ? "1" : "0";
  }).join("");
}

export default function BinaryStream({
  lineCount = 24,
  speed = 76,
  opacity = 0.12,
  fontSize = 30,
  rowGap = 2,
  className,
}: BinaryStreamProps) {
  const safeLineCount = Math.max(1, Math.floor(lineCount));
  const safeSpeed = Math.max(1, speed);
  const style = {
    "--line-count": safeLineCount,
    "--stream-opacity": Math.min(1, Math.max(0, opacity)),
    "--stream-font-size": `${Math.max(1, fontSize)}px`,
    "--stream-row-gap": `${Math.max(0, rowGap)}px`,
  } as CSSProperties;

  return (
    <div
      className={`${styles.stream} ${className ?? ""}`}
      style={style}
      aria-hidden="true"
    >
      {Array.from({ length: safeLineCount }, (_, index) => {
        const sequence = createSequence(index);
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
