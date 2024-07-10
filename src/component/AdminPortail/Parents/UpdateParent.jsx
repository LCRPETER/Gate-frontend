import React, { useState, useEffect } from "react";
import {
  getParentById,
  updateParent,
  uploadPhoto,
} from "../../../service/ParentService";

const UpdateParent = ({ handleViewChange, parentId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birth_date: "",
    birthPlace: "",
    address: { city: "", street: "", zipCode: "" },
    infoContacts: { email: "", phoneNumber: "" },
    role: { name: "PARENT" },
    photo: null,
  });

  const [photo, setPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch parent data by ID
    getParentById(parentId)
      .then((response) => {
        const parentData = response.data;

        setFormData({
          ...formData,
          firstName: parentData.firstName,
          lastName: parentData.lastName,
          gender: parentData.gender,
          birth_date: parentData.birth_date,
          birthPlace: parentData.birthplace,
          address: {
            city: parentData.city,
            street: parentData.street,
            zipCode: parentData.zipCode,
          },
          infoContacts: {
            email: parentData.email,
            phoneNumber: parentData.phoneNumber,
          },
          photo: parentData.photo,
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du parent",
          error
        );
      });
  }, [parentId]);

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

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const saveParentForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedParent = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender,
      birth_date: formData.birth_date,
      birthPlace: formData.birthPlace,
      address: {
        city: formData.address.city,
        street: formData.address.street,
        zipCode: formData.address.zipCode,
      },
      infoContacts: {
        email: formData.infoContacts.email,
        phoneNumber: formData.infoContacts.phoneNumber,
      },

      password: formData.password,
    };

    updateParent(parentId, updatedParent)
      .then((response) => {
        if (photo) {
          uploadPhoto(response.data.user_id, photo)
            .then(() => {
              setSuccessMessage("Parent modifié avec succès !");
              setPhoto(null);
            })
            .catch((error) => {
              setErrorMessage("Erreur lors de l'upload de la photo.");
              console.error("Erreur lors de l'upload de la photo", error);
            });
        } else {
          setSuccessMessage("Parent modifié avec succès !");
        }
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la modification du parent.");
        console.error("Erreur lors de la modification du parent", error);
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
        onClick={() => handleViewChange("parents")}
      >
        Retour
      </button>
      <div className="m-4 col-md-10 offset-md-3 m-auto">
        <h2 className="text-center card bg-secondary p-2 fs-3 text-light">
          Modifier un parent
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
              <form onSubmit={saveParentForm}>
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
                      name="zipCode"
                      value={formData.address.zipCode}
                      onChange={handleAddressChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group mb-2 fs-6">
                    <input
                      type="hidden"
                      placeholder="Mot de passe"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 form-group mb-2 fs-6">
                    <input
                      type="file"
                      name="photo"
                      onChange={handlePhotoChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="shadow bg-teal p-1 pe-4 ps-4 text-light fw-semibold rounded-2"
                    disabled={loading}
                  >
                    {loading ? "Modification en cours..." : "Modifier"}
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

export default UpdateParent;
