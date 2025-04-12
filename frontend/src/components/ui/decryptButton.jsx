"use client";
import { useRef, useState, useEffect } from "react";
import { FaLaptopCode, FiLock , FiUnlock} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const TARGET_TEXT = "View My Work";
const CYCLES_PER_LETTER = 4;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const DecryptButton = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);
  const [decrypted, setDecrypted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  useEffect(() => {
    setText(
      TARGET_TEXT.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
    );
  }, []);

  useEffect(() => {
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
        setIsAnimationCompleted(true); 
      }
    }, SHUFFLE_TIME);
  };

  const handleClick = () => {
    if (!isAnimationCompleted) return; 
    setIsClicked(true); 
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseOver={decryptText}
      onClick={handleClick} 
      className={`group relative overflow-hidden rounded-lg border-[1px] border-zinc-600 bg-zinc-700 px-4 py-2 font-mono font-medium text-zinc-300 transition-colors ${!isAnimationCompleted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:text-indigo-300'}`}
      // style={{ cursor: 'pointer' }}
      disabled={!isAnimationCompleted} 
    >
      <div className="relative z-10 flex items-center gap-2">
      {isAnimationCompleted ? (
          <FiUnlock className="text-zinc-300" />
        ) : (
          <FiLock className="text-zinc-300" />
        )}
        <span>{text}</span>
      </div>
    </motion.button>
  );
};

export default DecryptButton;
