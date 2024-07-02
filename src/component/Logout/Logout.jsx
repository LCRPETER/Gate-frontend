import React from "react";
import AuthService from "../../service/AuthService";
import "./Logout.css";
const Logout = ({ onClose }) => {
  const handleLogout = async () => {
    try {
      await AuthService.logout();
      onClose();
      window.location.href = "/";
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  return (
    <div className="logout-modal">
      <div className="logout-modal-content">
        <h2>Déconnexion</h2>
        <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
        <div className="logout-buttons">
          <button onClick={handleLogout} className="rounded">
            Déconnexion
          </button>
          <button onClick={onClose} className="rounded">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
