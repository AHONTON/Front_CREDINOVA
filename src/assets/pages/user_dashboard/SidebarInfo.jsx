import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../components/AuthUser";
import {
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const SidebarInfo = () => {
  const { user: authUser, loading: authLoading } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!authUser?._id) return;

      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/${authUser._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        setError("Erreur lors du chargement des informations");
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchUser();
    }
  }, [authUser, authLoading]);

  if (loading || authLoading) return <div>Chargement...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!user) return <div>Aucun utilisateur trouvé</div>;

  const dateInscription = new Date(
    user.dateInscription || user.createdAt
  ).toLocaleDateString();

  const infos = [
    { icon: <FaEnvelope />, label: "Email", value: user.email || "-" },
    { icon: <FaPhone />, label: "Téléphone", value: user.telephone || "-" },
    {
      icon: <FaBriefcase />,
      label: "Profession",
      value: user.profession || "-",
    },
    { icon: <FaMapMarkerAlt />, label: "Adresse", value: user.adresse || "-" },
    {
      icon: <FaCalendarAlt />,
      label: "Date d'inscription",
      value: dateInscription,
    },
    {
      icon: <FaCheckCircle />,
      label: "Statut Demande",
      value: user.requestStatus || "-",
    },
  ];

  return (
    <aside className="p-6 space-y-4 text-white bg-blue-900 shadow-xl rounded-xl">
      <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-blue-700">
        Informations Client
      </h3>

      <div className="flex flex-col space-y-4">
        {infos.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center p-2 transition-all duration-200 rounded-lg bg-blue-800/40 hover:bg-blue-700/60"
          >
            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-blue-700 rounded-full shadow-md">
              {React.cloneElement(item.icon, { size: 18 })}
            </div>
            <div>
              <p className="text-xs text-blue-200">{item.label}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarInfo;
