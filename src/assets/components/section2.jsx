import { Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="flex flex-col w-full gap-8 md:flex-row max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md md:w-1/3"
        >
          <img
            src="https://cdn.prod.website-files.com/647049f40d72f61b1a42f2c3/65d4a8fcca40f291cb06540b_White%20Modern%20Simple%20Photo%20Zoom%20Virtual%20Background%20(15).webp"
            alt="ia"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-center"
          >
            L’intelligence artificielle : catalyseur d’une finance plus
            inclusive
          </Typography>
          <Typography className="mb-4 text-sm text-center">
            L’IA permet d’évaluer la solvabilité de profils traditionnellement
            exclus du crédit en exploitant des données alternatives.
          </Typography>
          <motion.div
            whileHover={{ y: -3, backgroundColor: "#dc2626" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded"
          >
            <Button className="bg-blue-900" size="sm">
              Lire plus
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md md:w-1/3"
        >
          <img
            src="https://bigmedia.bpifrance.fr/sites/default/files/styles/dossier_page/public/2024-09/IA%20banque.jpg.webp?itok=Qw2g9z2d"
            alt="ia gerative"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Réinventer la gestion des risques financiers grâce à l’IA
          </Typography>
          <Typography className="mb-4 text-sm text-center">
            Les algorithmes prédictifs identifient plus finement les
            comportements à risque, réduisant ainsi les défauts de paiement.
          </Typography>
          <motion.div
            whileHover={{ y: -3, backgroundColor: "#dc2626" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded"
          >
            <Button className="bg-blue-900" size="sm">
              Lire plus
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md md:w-1/3"
        >
          <img
            src="https://www.ipc.on.ca/sites/default/files/styles/16_9_scale_and_crop_large/public/images/artifical%20intelligence-ai-nonspecific%20setting-person%20interacting-shutterstock_1405194650.jpg?h=1417d661&itok=h0L7Gdbi"
            alt="Analytics"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Vers une finance autonome : quand l’IA prend les commandes
          </Typography>
          <Typography className="mb-4 text-sm text-center">
            L'automatisation des processus décisionnels transforme la vitesse et
            la précision des services financiers.
          </Typography>
          <motion.div
            whileHover={{ y: -3, backgroundColor: "#dc2626" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded"
          >
            <Button className="bg-blue-900" size="sm">
              Lire plus
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
