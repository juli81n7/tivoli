"use client";
import Image from "next/image";
import styles from "../styles/accordion.css";
import { useState } from "react";
import Accordion from "./Accordion";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function AccordionContainer({ children, accordions }) {
  const [close, setClose] = useState();

  function handleAccordions() {
    setClose(false);
  }
  return (
    <section className="accodionShelf">
      <div>
        <div className="accshelfheadline">
          <h2 className={`${myFont.className}`}>FAQ</h2>
          <p>her kan du få svar på dine spørgsmål omkring Tivoli Genlyd</p>
        </div>
        {accordions.map((acc) => (
          <Accordion
            handleAccordions={handleAccordions}
            globalactive={close}
            headline={acc.headline}
            text={acc.text}
          />
        ))}
      </div>
    </section>
  );
}
