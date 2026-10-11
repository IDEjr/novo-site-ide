'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import styles from './ImageLightbox.module.css'

type ImageLightboxProps = {
  src: string
  fullSizeSrc: string
  alt: string
}

export default function ImageLightbox({ src, fullSizeSrc, alt }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className={styles.preview}
        onClick={() => setIsOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 800px" className={styles.image} />
        <span className={styles.hint}>Clique para ampliar</span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={`Imagem ampliada: ${alt}`}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false)
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
            src={fullSizeSrc}
            alt={alt}
            fill
            sizes="100vw"
            className={styles.fullImage}
            priority
          />
        </div>
      </dialog>
    </>
  )
}
