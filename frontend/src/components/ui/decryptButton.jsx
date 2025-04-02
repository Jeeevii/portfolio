"use client"
import { useRef, useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const TARGET_TEXT = "View My Work";
const CYCLES_PER_LETTER = 4;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const DecryptButton = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);
  const [decrypted, setDecrypted] = useState(false);

  // ReactHydration Error -> random characters only render on the client now
  useEffect(() => {
    setText(
      TARGET_TEXT.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
    );
  }, []);

  useEffect(() => {
    // decryptText();
    return () => clearInterval(intervalRef.current);
  }, []);

  const decryptText = () => {
    if (decrypted) return;
    setDecrypted(true);
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const decryptedText = TARGET_TEXT.split("")
        .map((char, index) => (pos / CYCLES_PER_LETTER > index ? char : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join("");

      setText(decryptedText);
      pos++;
      
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef.current);
        setText(TARGET_TEXT);
      }
    }, SHUFFLE_TIME);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseOver={decryptText}
      className="group relative overflow-hidden rounded-lg border-[1px] border-zinc-500 bg-zinc-700 px-4 py-2 font-mono font-medium text-neutral-300 transition-colors hover:text-indigo-300"
      style={{ cursor: 'pointer' }}
    >
      <div className="relative z-10 flex items-center gap-2">
        <FaLaptopCode />
        <span>{text}</span>
      </div>

      {/*Scanning Animation */}
      {/* <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      /> */}
      
    </motion.button>
  );
};

export default DecryptButton;
