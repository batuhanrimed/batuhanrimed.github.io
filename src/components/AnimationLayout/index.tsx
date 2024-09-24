import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const AnimationLayout = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      exit={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
      animate={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
    >
      {children}
    </motion.div>
  );
};
