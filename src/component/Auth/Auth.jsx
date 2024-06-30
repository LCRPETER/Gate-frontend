import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import AuthService from "../../service/AuthService";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await AuthService.login(login, password);
      const role = data.role;

      // Redirect based on role
      switch (role) {
        case "ROLE_ADMIN":
          navigate("/api/admin");
          break;
        case "ROLE_STUDENT":
          navigate("/api/student");
          break;
        case "ROLE_TEACHER":
          navigate("/api/teacher");
          break;
        case "ROLE_PARENT":
          navigate("/api/parent");
          break;
        default:
          alert("Role not recognized");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <div
        className="bg-teal text-light ff-time-nr d-flex align-items-center justify-content-center p-3"
        style={{ fontSize: "3rem" }}
      >
        SCHOOLGATE
      </div>
      <div className="d-flex align-items-center p-5 bg-img-login img-container">
        <div className="login-container p-2 m-auto shadow-lg rounded-4 bg-light">
          <div className="text-center d-flex align-items-center justify-content-between">
            <div>
              <img
                src="../../../public/asset/logo.png"
                alt="logo"
                className="login-logo"
              />
            </div>
            <h2 className="text-center ff-time-nr fs-3 text-success me-4">
              SCHOOLGATE
            </h2>
          </div>

          <div className="ff-time-nr fs-5 fw-semibold m-2">
            <i className="fa-solid fa-key text-secondary"></i> Connexion
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="fs-6 w-100 p-1 outline-none rounded-0 border-teal"
                id="login"
                placeholder="Login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="fs-6 w-100 p-1 outline-none border-none rounded-0 border-teal"
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center mt-4 mb-2">
              <button
                type="submit"
                className="bg-teal text-light rounded-1 p-2 pe-5 ps-5"
              >
                SE CONNECTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
