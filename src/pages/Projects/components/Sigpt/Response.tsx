import style from "./Response.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Response = ({ content }: { content: Array<string> }) => {
  return (
    <div className={style["response-container"]}>
      <AnimatePresence>
        {content.map((entry, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.0 }}
            transition={{ duration: 0.1, type: "spring" }}
          >
            {entry}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Response;
