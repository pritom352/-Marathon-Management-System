import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionTitle = ({ title }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.h1
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={
        inView
          ? {
              scale: 1,
              transition: { duration: 1 },
              opacity: 1,
              y: [50, 0],
            }
          : {}
      }
      className="text-xl md:text-2xl lg:text-2xl font-bold text-center italic mb-12 flex items-center justify-center gap-4"
    >
      {/* Left bar */}
      <span className="w-12 h-[2px] bg-primary"></span>

      {/* Title with first word highlighted */}
      <span>
        {title.split(" ").map((word, i) =>
          i === 0 ? (
            <span key={i} className="text-primary">
              {word}{" "}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </span>

      {/* Right bar */}
      <span className="w-12 h-[2px] bg-primary"></span>
    </motion.h1>
  );
};

export default SectionTitle;
