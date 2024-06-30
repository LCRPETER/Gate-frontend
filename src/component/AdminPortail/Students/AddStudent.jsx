import React, { useState, useEffect } from "react";
import { createStudent, uploadPhoto } from "../../../service/StudentService";
import { getAllGroupes } from "../../../service/GroupsService";

const AddStudent = ({ handleViewChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birth_date: "",
    birthPlace: "",
    address: { city: "", street: "", zipCod: "" },
    infoContacts: { email: "", phoneNumber: "" },
    role: { name: "STUDENT" },
    password: "",
    photo: null,
    parent: null,
    groups: { group_id: "", nameGroup: "", level: "" },
    grades: [],
    payments: [],
    attendance: [],
  });

  const [photo, setPhoto] = useState(null);
  const [groups, setGroups] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllGroupes()
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des groupes", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleInfoContactsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      infoContacts: {
        ...prevState.infoContacts,
        [name]: value,
      },
    }));
  };

  const handleGroupsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      groups: {
        ...prevState.groups,
        [name]: value,
      },
    }));
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const saveStudentForm = (e) => {
    e.preventDefault();
    setLoading(true);
    createStudent(formData)
      .then((response) => {
        if (photo) {
          uploadPhoto(response.data.user_id, photo)
            .then(() => {
              setSuccessMessage("Étudiant ajouté avec succès !");
              setFormData({
                firstName: "",
                lastName: "",
                gender: "",
                birth_date: "",
                birthPlace: "",
                address: { city: "", street: "", zipCod: "" },
                infoContacts: { email: "", phoneNumber: "" },
                role: { name: "STUDENT" },
                password: "",
                photo: null,
                parent: null,
                groups: { group_id: "", level: "", nameGroup: "" },
                grades: [],
                payments: [],
                attendance: [],
              });
              setPhoto(null);
            })
            .catch((error) => {
              setErrorMessage("Erreur lors de l'upload de la photo.");
              console.error("Erreur lors de l'upload de la photo", error);
            });
        } else {
          setSuccessMessage("Étudiant ajouté avec succès !");
        }
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de l'ajout de l'étudiant.");
        console.error("Erreur lors de l'ajout de l'étudiant", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative p-4">
      <button
        className="bg-teal text-light fw-semibold rounded p-1 position-absolute start-1 ps-2 pe-2"
        style={{ marginTop: "20px", top: "-50px" }}
        onClick={() => handleViewChange("groups")}
      >
        Retour
      </button>
      <div className="m-4 col-md-10 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Ajouter un étudiant
        </h2>
        {successMessage && (
          <div
            className="alert alert-success text-center"
            style={{ backgroundColor: "white", color: "green" }}
          >
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div
            className="alert alert-danger text-center"
            style={{ backgroundColor: "white", color: "red" }}
          >
            {errorMessage}
          </div>
        )}
        <div className="row">
          <div className="card">
            <div className="card-body">
              <form onSubmit={saveStudentForm}>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Prénom"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Nom"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Genre"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="date"
                      placeholder="Date de naissance"
                      name="birth_date"
                      value={formData.birth_date}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Lieu de naissance"
                      name="birthPlace"
                      value={formData.birthPlace}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.infoContacts.email}
                      onChange={handleInfoContactsChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Numéro de téléphone"
                      name="phoneNumber"
                      value={formData.infoContacts.phoneNumber}
                      onChange={handleInfoContactsChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Ville"
                      name="city"
                      value={formData.address.city}
                      onChange={handleAddressChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Rue"
                      name="street"
                      value={formData.address.street}
                      onChange={handleAddressChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="text"
                      placeholder="Code postal"
                      name="zipCod"
                      value={formData.address.zipCod}
                      onChange={handleAddressChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="file"
                      name="photo"
                      onChange={handlePhotoChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <select
                      className="form-select"
                      name="group_id"
                      value={formData.groups.group_id}
                      onChange={handleGroupsChange}
                      required
                    >
                      <option value="" className="text-danger">
                        Sélectionner un groupe
                      </option>
                      {groups.map((group) => (
                        <option key={group.group_id} value={group.group_id}>
                          {group.nameGroup}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col form-group mb-2 fs-6">
                    <select
                      className="form-select"
                      name="group_id"
                      value={formData.groups.group_id}
                      onChange={handleGroupsChange}
                      required
                    >
                      <option value="" className="text-danger">
                        Sélectionner le Niveau
                      </option>
                      {groups.map((group) => (
                        <option key={group.group_id} value={group.group_id}>
                          {group.level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Ajout en cours..." : "Ajouter"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
