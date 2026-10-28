"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ImagemAmpliada.module.css";

type ImagemAmpliadaProps = {
  src: string;
  alt: string;
  previewClassName: string;
  children: ReactNode;
};

export default function ImagemAmpliada({
  src,
  alt,
  previewClassName,
  children,
}: ImagemAmpliadaProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`${styles.preview} ${previewClassName}`}
        onClick={() => setIsOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        {children}
        <span className={styles.hint} aria-hidden="true">
          Clique para ampliar
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={`Imagem ampliada: ${alt}`}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <button
          type="button"
          className={styles.close}
          onClick={() => setIsOpen(false)}
          aria-label="Fechar imagem ampliada"
        >
          &times;
        </button>
        <div className={styles.fullImageWrapper}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className={styles.fullImage}
          />
        </div>
      </dialog>
    </>
  );
}
