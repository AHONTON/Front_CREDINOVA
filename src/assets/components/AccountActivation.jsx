"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Swal from "sweetalert2"

const AccountActivation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      showSupportAlert("Token d'activation manquant")
    }
  }, [token])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const showSupportAlert = (errorMessage = "Une erreur est survenue") => {
    Swal.fire({
      title: '<span style="color: #ffffff; font-weight: bold;">Erreur d\'activation</span>',
      html: `
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); padding: 20px; border-radius: 12px; color: white; margin: 10px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
          <div style="display: flex; align-items: center; margin-bottom: 15px;">
            <svg style="width: 24px; height: 24px; margin-right: 10px;" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            <strong style="font-size: 16px; color: #ffffff;">Erreur : ${errorMessage}</strong>
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px;">
            <p style="margin-bottom: 15px; font-weight: 600; color: #ffffff;">Contactez notre support technique :</p>
            <div style="display: flex; flex-direction: column; gap: 8px; text-align: left;">
              <div style="display: flex; align-items: center;">
                <svg style="width: 18px; height: 18px; margin-right: 8px;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span style="color: #ffffff;">support@credinova.com</span>
              </div>
              <div style="display: flex; align-items: center;">
                <svg style="width: 18px; height: 18px; margin-right: 8px;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span style="color: #ffffff;">+33 1 23 45 67 89</span>
              </div>
              <div style="display: flex; align-items: center;">
                <svg style="width: 18px; height: 18px; margin-right: 8px;" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span style="color: #ffffff;">Chat disponible 24h/7j</span>
              </div>
            </div>
          </div>
        </div>
      `,
      background: "#1e3a8a",
      icon: null,
      confirmButtonText: "Retour à la connexion",
      confirmButtonColor: "#ffffff",
      buttonsStyling: true,
      allowOutsideClick: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp animate__faster",
      },
      customClass: {
        popup: "rounded-xl shadow-2xl",
        confirmButton: "rounded-lg px-6 py-3 font-semibold text-blue-900",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/connexion")
      }
    })
  }

  const handleActivateAccount = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(`http://localhost:5000/api/user/connexion?token=${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const contentType = response.headers.get("content-type")
      let data = {}

      if (contentType && contentType.includes("application/json")) {
        data = await response.json()
      } else {
        const textResponse = await response.text()
        data = { message: textResponse || "Compte activé avec succès" }
      }

      if (response.ok) {
        Swal.fire({
          title: '<span style="color: #ffffff; font-weight: bold;">Compte activé !</span>',
          html: `
            <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 20px; border-radius: 12px; color: white; margin: 10px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
              <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                <svg style="width: 48px; height: 48px; margin-right: 15px;" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h3 style="margin: 0; font-size: 20px; font-weight: bold; color: #ffffff;">Félicitations !</h3>
                  <p style="margin: 5px 0 0 0; opacity: 0.9; color: #ffffff;">Activation réussie</p>
                </div>
              </div>
              <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px;">
                <p style="margin: 0; font-size: 16px; color: #ffffff;">Votre compte CREDINova a été activé avec succès. Vous pouvez maintenant accéder à notre plateforme intelligente de gestion de crédits.</p>
              </div>
            </div>
          `,
          background: "#059669",
          icon: null,
          confirmButtonText: "Se connecter",
          confirmButtonColor: "#ffffff",
          allowOutsideClick: false,
          showClass: {
            popup: "animate__animated animate__zoomIn animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__zoomOut animate__faster",
          },
          customClass: {
            popup: "rounded-xl shadow-2xl",
            confirmButton: "rounded-lg px-6 py-3 font-semibold text-green-700",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/connexion")
          }
        })
      } else {
        const errorMessage = data.message || "Erreur lors de l'activation du compte"
        showSupportAlert(errorMessage)
      }
    } catch (error) {
      console.error("Erreur lors de l'activation:", error)
      showSupportAlert("Impossible de se connecter au serveur")
    } finally {
      setIsLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="flex items-center justify-center h-screen p-4 overflow-hidden bg-blue-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm p-6 text-center border shadow-2xl bg-white/10 backdrop-blur-lg rounded-2xl border-white/20"
        >
          <motion.div
            animate={{
              rotate: 360,
              borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              borderColor: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            className="w-12 h-12 mx-auto mb-4 border-4 rounded-full border-t-white"
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="mb-2 text-lg font-semibold text-white">Vérification en cours</h3>
            <p className="text-sm text-white">Validation du token...</p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center h-screen p-4 overflow-hidden bg-blue-900">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute w-32 h-32 rounded-full top-1/4 left-1/4 bg-white/10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute w-40 h-40 rounded-full top-1/3 right-1/4 bg-white/5 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bottom-1/4 left-1/3 w-36 h-36 bg-white/10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bottom-1/3 right-1/3 w-28 h-28 bg-white/5 blur-xl"
        />
      </div>

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-md"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
            className="p-6 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-2xl border-white/20"
          >
            <motion.div variants={itemVariants} className="mb-6 text-center">
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-800 border rounded-full shadow-lg border-white/20"
              >
                <img src="/assets/img/logo.png" alt="CREDINova Logo" className="object-contain w-10 h-10" />
              </motion.div>
              <motion.div variants={itemVariants} className="mt-2">
                <motion.h1
                  className="text-3xl font-bold tracking-wide text-white"
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(255,255,255,0.3)",
                      "0 0 16px rgba(255,255,255,0.5)",
                      "0 0 8px rgba(255,255,255,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  CREDINova
                </motion.h1>
                <motion.h2
                  className="mt-1 text-sm font-medium text-white"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  Activation de compte
                </motion.h2>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6 text-center">
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center w-12 h-12 mx-auto mb-3 border rounded-full bg-green-500/20 backdrop-blur-sm border-green-400/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-sm leading-relaxed text-white"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Bienvenue sur <span className="font-semibold text-white">CREDINova</span> ! Activez votre compte pour
                accéder à notre plateforme de gestion de crédits.
              </motion.p>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleActivateAccount}
              disabled={isLoading}
              className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-base mb-4 ${
                isLoading
                  ? "bg-white/20 cursor-not-allowed text-white/60"
                  : "bg-white text-blue-900 hover:bg-white/90 shadow-lg"
              }`}
            >
              {isLoading ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                      borderColor: ["rgba(30,58,138,0.3)", "rgba(30,58,138,0.8)", "rgba(30,58,138,0.3)"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      borderColor: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                    className="w-5 h-5 mr-2 border-2 rounded-full border-t-blue-900"
                  />
                  <span className="text-blue-900">Activation en cours...</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center"
                  whileHover={{ x: [0, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </motion.svg>
                  <span className="font-bold text-blue-900">Activer mon compte</span>
                </motion.div>
              )}
            </motion.button>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
              className="p-3 mb-4 border rounded-xl bg-white/10 backdrop-blur-sm border-white/20"
            >
              <div className="flex items-center">
                <motion.svg
                  className="w-4 h-4 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </motion.svg>
                <p className="text-xs text-white">
                  <span className="font-semibold text-white">Sécurisé :</span> Token unique
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <motion.p
                className="mb-2 text-xs text-white"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Besoin d'aide ? Contactez notre support
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/connexion")}
                className="text-xs font-medium text-white underline transition-colors duration-200 hover:text-white underline-offset-2"
              >
                Retour à la connexion
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AccountActivation
