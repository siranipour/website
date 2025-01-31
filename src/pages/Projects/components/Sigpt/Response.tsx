import style from "./Response.module.css";
import { Skeleton } from "@radix-ui/themes";
import { motion, AnimatePresence } from "framer-motion";

const Response = ({
  content,
  loading,
}: {
  content: Array<string>;
  loading: boolean;
}) => {
  return (
    <div className={style["response-container"]}>
      <AnimatePresence>
        {content.map((entry, index) => (
          <Skeleton loading={loading}>
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
          </Skeleton>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Response;
