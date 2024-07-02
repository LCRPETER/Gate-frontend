import React, { useState, useEffect } from "react";
import { createTeacher, uploadPhoto } from "../../../service/TeacherService";
import { getAllSubjects } from "../../../service/SubjectService";

const AddTeacher = ({ handleViewChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birth_date: "",
    birthPlace: "",
    address: { city: "", street: "", zipCod: "" },
    infoContacts: { email: "", phoneNumber: "" },
    role: { name: "TEACHER" },
    password: "",
    photo: null,
    taughtSubjects: [],
  });

  const [photo, setPhoto] = useState(null);
  const [taughtSubjects, setTaughtSubjects] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllSubjects()
      .then((response) => {
        setTaughtSubjects(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des matières", error);
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

  const handleSubjectChange = (e) => {
    const { value } = e.target;
    const subject = taughtSubjects.find((subj) => subj.subject_id === value);
    if (subject) {
      setFormData((prevState) => ({
        ...prevState,
        taughtSubjects: [...prevState.taughtSubjects, subject],
      }));
    }
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const saveTeacherForm = (e) => {
    e.preventDefault();
    setLoading(true);
    createTeacher(formData)
      .then((response) => {
        if (photo) {
          uploadPhoto(response.data.user_id, photo)
            .then(() => {
              setSuccessMessage("Enseignant ajouté avec succès !");
              setFormData({
                firstName: "",
                lastName: "",
                gender: "",
                birth_date: "",
                birthPlace: "",
                address: { city: "", street: "", zipCod: "" },
                infoContacts: { email: "", phoneNumber: "" },
                role: { name: "TEACHER" },
                password: "",
                photo: null,
                taughtSubjects: [],
              });
              setPhoto(null);
            })
            .catch((error) => {
              setErrorMessage("Erreur lors de l'upload de la photo.");
              console.error("Erreur lors de l'upload de la photo", error);
            });
        } else {
          setSuccessMessage("Enseignant ajouté avec succès !");
          setFormData({
            firstName: "",
            lastName: "",
            gender: "",
            birth_date: "",
            birthPlace: "",
            address: { city: "", street: "", zipCod: "" },
            infoContacts: { email: "", phoneNumber: "" },
            role: { name: "TEACHER" },
            password: "",
            photo: null,
            taughtSubjects: [],
          });
        }
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de l'ajout de l'enseignant.");
        console.error("Erreur lors de l'ajout de l'enseignant", error);
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
          Ajouter Enseignant
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
              <form onSubmit={saveTeacherForm}>
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
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Sélectionner le genre</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
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
                      name="subject_id"
                      value={formData.taughtSubjects.subject_id}
                      onChange={handleSubjectChange}
                      required
                    >
                      <option value="" className="text-danger">
                        Sélectionner la matière enseignée
                      </option>
                      {taughtSubjects.map((subject) => (
                        <option
                          key={subject.subject_id}
                          value={subject.subject_id}
                        >
                          {subject.nameSubject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
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

export default AddTeacher;
