import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftCircle, ArrowRightCircle, ArrowRight } from "lucide-react";
import articles from "./Articles";

const containerVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      when: "beforeChildren",
      type: "spring",
      stiffness: 120,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    transition: { duration: 0.3 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  exit: { opacity: 0, y: -20 },
};

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 } },
};

export default function Blog() {
  const [current, setCurrent] = useState(0);
  const [showBlog, setShowBlog] = useState(false);
  const [direction, setDirection] = useState(0);
  const totalSlides = Math.ceil(articles.length / 4);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowBlog(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBlog) return;
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [showBlog]);

  if (!showBlog) return null;

  const visibleArticles = articles.slice(current * 4, current * 4 + 4);
  const lessThanFour = visibleArticles.length < 4;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full px-4 py-8 mx-auto overflow-hidden bg-gray-700 bg-center bg-cover max-w-7xl sm:px-6 md:px-10"
      style={{
        backgroundImage:
          "url('https://cdn.edi-static.fr/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_auto/c_limit,w_auto/v1/Img/BREVE/2023/10/385582/Comment-elle-modifier-relations-avec-F.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <motion.h2
        className="relative z-10 mb-6 text-2xl font-bold text-center text-white md:text-4xl"
        variants={headerVariants}
      >
        Blog IA | Finance
      </motion.h2>

      <motion.div
        className="relative z-10 flex items-center justify-center mb-4 space-x-4"
        variants={buttonsVariants}
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={prevSlide}
          className="text-white hover:text-blue-300"
          aria-label="Slide précédent"
        >
          <ArrowLeftCircle className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={nextSlide}
          className="text-white hover:text-blue-300"
          aria-label="Slide suivant"
        >
          <ArrowRightCircle className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <div
        {...handlers}
        className={`relative z-10 w-full min-h-[420px] ${
          lessThanFour ? "flex justify-center items-center" : ""
        }`}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              lessThanFour
                ? "flex justify-center space-x-6"
                : "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }
            style={{ maxWidth: 1240, width: "100%" }}
          >
            {visibleArticles.map((article, index) => (
              <motion.div
                key={index}
                className="overflow-hidden bg-white shadow-lg rounded-2xl min-w-[250px] flex flex-col"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-40"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-sm text-black ">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={article.link}
                      className="inline-flex items-center px-3 py-1 italic text-white transition-colors bg-blue-900 rounded hover:bg-blue-700"
                    >
                      Consulter l'article{" "}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-center justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
            animate={{ scale: i === current ? 1.5 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            aria-label={`Aller au slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
