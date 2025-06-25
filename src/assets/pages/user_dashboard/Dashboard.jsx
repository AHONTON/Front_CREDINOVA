import React, { useState, useEffect } from "react";
import { useAuth } from "../../components/AuthUser"; // ✅ chemin correct

import Header from "./Header";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import SidebarInfo from "./SidebarInfo";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";
import AttachmentsList from "./AttachmentsList";
import SettingsModal from "./SettingsModal";

const Dashboard = () => {
  const { user } = useAuth(); // ✅ utilisateur du context
  const [activeTab, setActiveTab] = useState("Infos");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (user) {
      setEditData(user);
    }
  }, [user]);

  const tabs = ["Infos", "Historiques Credit", "Documents"];

  if (!user)
    return <p className="p-6 text-red-600">Utilisateur non connecté</p>;

  const handleSave = () => {
    setSettingsOpen(false);
    // Optionnel : tu peux faire un setUser(editData) si le contexte le permet
  };

  return (
    <>
      <Header user={user} />
      <Navbar />

      <main className="grid grid-cols-1 gap-6 p-4 mx-auto max-w-7xl lg:grid-cols-12">
        <section className="col-span-12 space-y-6 lg:col-span-9">
          <UserCard user={user} onSettingsClick={() => setSettingsOpen(true)} />

          <div className="p-4 bg-white shadow-xl rounded-xl">
            <TabMenu
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            <div className="mt-4">
              <TabContent
                activeTab={activeTab}
                tabData={
                  activeTab === "Infos"
                    ? user
                    : activeTab === "Historiques Credit"
                    ? user.creditHistory || []
                    : activeTab === "Documents"
                    ? user.attachments || []
                    : {}
                }
              />
              {activeTab === "Documents" && (
                <AttachmentsList attachments={user.attachments || []} />
              )}
            </div>
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-3">
          <SidebarInfo user={user} />
        </aside>
      </main>

      {settingsOpen && (
        <SettingsModal
          editData={editData}
          setEditData={setEditData}
          onClose={() => setSettingsOpen(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default Dashboard;
