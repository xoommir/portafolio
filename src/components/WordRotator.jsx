import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Prototipado",
  "Interfaces",
  "Experiencias 3D",
  "Animaciones UI",
  "WordPress",
  "Branding"

  ];

export default function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
  <span>
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 20, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: -20, rotateX: -90 }}
        transition={{ duration: 0.5 }}
        className="font-extrabold text-white drop-shadow-lg text-xl md:text-2xl lg:text-3xl"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  </span>
  );
}