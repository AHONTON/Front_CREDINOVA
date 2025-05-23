import React, { useRef } from "react";
import { Card, Carousel } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import Button from "react-bootstrap/Button";
import ai1 from "../img/ai1.jpg";
import ai2 from "../img/ai2.jpg";
import ai3 from "../img/ai3.jpg";
import ai4 from "../img/ai4.jpg";
import ai5 from "../img/ai5.jpg";

const carouselImages = [
  {
    src: ai1,
    alt: "Image 1",
    captionTitle: "Analyse Prédictive par IA",
  },
  {
    src: ai2,
    alt: "Image 2",
    captionTitle: "Sécurité Maximale des Données",
  },
  {
    src: ai3,
    alt: "Image 3",
    captionTitle: "Processus Rapide et Transparent",
  },
  {
    src: ai4,
    alt: "Image 4",
    captionTitle:
      "L’intelligence artificielle au service d’un crédit plus juste et rapide",
  },
  {
    src: ai5,
    alt: "Image 5",
    captionTitle:
      "Réinventer l’accès au crédit avec la data et l’automatisation",
  },
];

const cardsContent = [
  {
    title: "Analyse Prédictive par IA",
    text: "Notre intelligence artificielle analyse des milliers de données pour prédire la solvabilité et réduire les risques de défaut.",
    details:
      "Grâce à des algorithmes de machine learning sophistiqués, la plateforme anticipe les comportements financiers pour optimiser vos décisions de prêt.",
  },
  {
    title: "Sécurité Maximale des Données",
    text: "Vos données personnelles et financières sont protégées par des protocoles de sécurité de pointe.",
    details:
      "Nous utilisons le cryptage avancé et des systèmes de détection d'intrusion pour garantir la confidentialité et l'intégrité de vos informations.",
  },
  {
    title: "Processus Rapide et Transparent",
    text: "Obtenez une réponse en quelques minutes grâce à notre processus de demande simplifié.",
    details:
      "La technologie IA réduit les délais d’analyse et vous offre un parcours personnalisé, rapide et sans surprise.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Section3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      className="px-3 py-3 bg-blue-900"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container flex flex-col items-center justify-between gap-8 mx-auto lg:flex-row">
        <motion.div
          className="flex flex-col gap-4 w-full lg:w-[510px]"
          style={{ minWidth: 510 }}
          variants={containerVariants}
        >
          {cardsContent.map(({ title, text, details }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <Card className="rounded shadow">
                <Card.Body>
                  <Card.Title className="text-lg font-semibold">
                    {title}
                  </Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Card.Text className="font-bold text-blue-900 text-1xl">
                    {details}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col justify-center w-full lg:w-[510px]"
          style={{ minWidth: 510, minHeight: 300 }}
          variants={carouselVariants}
        >
          <Carousel
            controls={false}
            indicators
            interval={3500}
            pause={false}
            fade
          >
            {carouselImages.map(({ src, alt, captionTitle }, index) => (
              <Carousel.Item key={index}>
                <img
                  src={src}
                  alt={alt}
                  className="rounded shadow"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <Carousel.Caption className="p-3 bg-black bg-opacity-50 rounded">
                  <h5>{captionTitle}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          <p className="px-2 mt-4 text-justify text-white italic">
            Chez CREDINOVA, nous combinons innovation technologique et expertise
            financière pour révolutionner l’octroi de crédit. Grâce à
            l’intelligence artificielle, nous fournissons une analyse précise et
            personnalisée, tout en assurant la sécurité et la transparence à
            chaque étape. Que vous soyez particulier ou entreprise, CREDINOVA
            vous accompagne avec rapidité, fiabilité et simplicité, pour des
            décisions éclairées et un accès au financement optimisé. Rejoignez
            CREDINOVA et découvrez comment l’IA peut transformer votre
            expérience financière.
          </p>
          <p>
            <motion.div
              className="flex justify-center"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Button className="font-bold italic" variant="success">
                Rejoignez le réseau maintenant
              </Button>
            </motion.div>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
