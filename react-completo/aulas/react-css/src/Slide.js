import React, { useEffect, useRef, useState } from "react";
import styles from "./Slide.module.css";

export default function Slide({ slides }) {
  const [ative, setAtive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(ative * width));
  }, [ative]);

  function slidePrev() {
      if(ative > 0){
          setAtive(ative  -1)

      }
  }

  function slideNext() {
      if(ative <  slides.length - 1){

          setAtive(ative + 1)
      }
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Proximo</button>
      </nav>
    </section>
  );
}
