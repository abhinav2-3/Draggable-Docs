import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragTrasition={{ bounceStiffness: 100, bounceDamping: 300 }}
      className="cursor-pointer relative shrink-0 bg-zinc-900/50 w-60 h-72 rounded-[45px] text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5">{data.desc}</p>
      <div className="footer w-full absolute left-0 bottom-0">
        <div className="flex items-center justify-between px-8 py-4 mb-4">
          <h3>{data.fileSize}</h3>
          <span className="w-6 h-6 rounded-full bg-zinc-600 grid place-items-center">
            {data.close ? (
              <IoClose size={13} color="#fff" />
            ) : (
              <LuDownload size={13} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } w-full py-3 grid place-items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};
Card.propTypes = {
  data: PropTypes.any.isRequired,
  reference: PropTypes.string.isRequired,
};

export default Card;
