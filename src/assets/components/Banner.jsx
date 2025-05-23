import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import video from "../video/demoVideo.mp4";

export default function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  
  const variants = { 
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col px-4 mx-auto mt-8 space-y-6 bg-gray-100 md:flex-row md:space-y-0 md:space-x-8 max-w-7xl"
    >
      <motion.div
        className="w-full overflow-hidden bg-white rounded-lg shadow-lg md:w-1/2"
        variants={variants}
        initial="hiddenLeft"
        animate={isInView ? "visible" : "hiddenLeft"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full rounded-lg h-72 md:h-full"
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center w-full p-6 bg-white rounded-lg shadow-lg md:w-1/2"
        variants={variants}
        initial="hiddenRight"
        animate={isInView ? "visible" : "hiddenRight"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.h2
          className="mb-4 text-2xl font-bold text-blue-900"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Transformez vos décisions de crédit grâce à l’IA : rapide, fiable et
          prédictive.
        </motion.h2>

        <motion.h4
          className="mb-6 text-lg font-bold text-black"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          Libérez le pouvoir de l’IA pour votre analyse de prêt : précision
          intelligente, décisions instantanées. L’IA au service de votre crédit
          : évaluez, prédisez, accordez en toute confiance.
        </motion.h4>

        <motion.button
          type="button"
          className="self-start px-6 py-3 text-white transition bg-blue-900 rounded-md hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9 }}
        >
          Découvrir
        </motion.button>
      </motion.div>
    </section>
  );
}
