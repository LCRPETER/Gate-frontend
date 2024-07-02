import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

const AuthService = {
  login: async (matricule, password) => {
    try {
      const response = await axiosInstance.post("/auth", {
        matricule,
        password,
      });
      if (response.data.bearer) {
        const token = response.data.bearer;
        console.log(token);
        localStorage.setItem("token", token.replace(/[{}]/g, ""));
        localStorage.setItem("role", response.data.role);
      }

      return response.data;
    } catch (error) {
      console.error("Erreur de connexion:", error);
      throw error;
    }
  },

  logout: async () => {
    const token = localStorage.getItem("token");
    try {
      await axiosInstance.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("role"); // Supprimer le rôle de l'utilisateur
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    return !!token;
  },

  getToken: () => {
    return localStorage.getItem("token");
  },
};

export default AuthService;
