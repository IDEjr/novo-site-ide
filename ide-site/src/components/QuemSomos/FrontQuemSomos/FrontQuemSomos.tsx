import Image from "next/image";
import styles from "./FrontQuemSomos.module.css";

const carouselPhotos = [
  "/imagens/Carousel/20161209_150946.jpg",
  "/imagens/Carousel/20181125_182047.jpg",
  "/imagens/Carousel/DSCN0610.JPG",
  "/imagens/Carousel/Salchipão_17_09.jpg",
  "/imagens/Carousel/WhatsApp Image 2026-06-20 at 19.14.41.jpeg",
  "/imagens/Carousel/WhatsApp Image 2026-06-28 at 12.20.55.jpeg",
];

export default function FrontQuemSomos() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>
            Código que <span className={styles.highlight}>transforma.</span>
          </h1>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {[...carouselPhotos, ...carouselPhotos].map((photo, index) => (
            <div key={`${photo}-${index}`} className={styles.carouselItem}>
              <Image
                src={photo}
                alt={index < carouselPhotos.length ? `Registro ${index + 1} da IDE` : ""}
                fill
                sizes="(max-width: 600px) 220px, (max-width: 900px) 260px, 350px"
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
