import style from "./Response.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Response = ({ n }: { n: number }) => {
  return (
    <div className={style["response-container"]}>
      <AnimatePresence>
        {Array.from({ length: n }, (_, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.0 }}
            transition={{ duration: 0.1, type: "spring"}}
          >
            Div {index + 1}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Response;
