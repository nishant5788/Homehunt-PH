import { useState } from "react";
import styles from "./PostProperty.module.css";
import { useNavigate } from "react-router-dom";

function PostProperty() {

  const availableFeatures = [
    "Parking",
    "Air Conditioning",
    "Gym",
    "Swimming Pool",
    "Fiber Internet",
    "Balcony",
    "Security",
  ];

  const initialFormData = {
    title: "",
    city: "",
    province: "",
    rent: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    imageUrl: "",
    latitude: "",
    longitude: "",
    description: "",
    features: [],
    name: "",
    phone: "",
    email: "",
  }

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);

  async function handleSubmit(e) {
    e.preventDefault();

    const newProperty = {
      title: formData.title,
      city: formData.city,
      province: formData.province,
      price: Number(formData.rent),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      description: formData.description,
      features: formData.features,
      ownerName: formData.name,
      ownerPhone: formData.phone,
      ownerEmail: formData.email,
      image: formData.imageUrl,
      lat: Number(formData.latitude),
      lng: Number(formData.longitude),
    };

    const response = await fetch("http://localhost:8000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProperty),
    });

    const data = await response.json();

    console.log(data);

    clearForm();
  }

  function clearForm() {
    return setFormData(initialFormData);
  }

  function handleFeatureChange(e) {
    const feature = e.target.value;

    if (e.target.checked) {
      setFormData({
        ...formData,
        features: [...formData.features, feature],
      });
    } else {
      setFormData({
        ...formData,
        features: formData.features.filter((item) => item !== feature),
      });
    }
  }

  function isFormValid() {
    if (
      !formData.title ||
      !formData.city ||
      !formData.rent ||
      !formData.imageUrl ||
      !formData.latitude ||
      !formData.longitude ||
      !formData.name ||
      !formData.phone ||
      !formData.email
    )
      return false;
    else return true;
  }

  return (
    <main className={styles.postPage}>
      <div className={styles.container}>
        <h1>🏡 Post New Property</h1>
        <p>Add your rental property for free.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.section}>
            <h2>Property Information</h2>

            <label>
              Property Title <sup className={styles.required}>*</sup>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <label>
              City <sup className={styles.required}>*</sup>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />

            <label>Province</label>
            <input
              type="text"
              value={formData.province}
              onChange={(e) =>
                setFormData({ ...formData, province: e.target.value })
              }
            />

            <label>
              Monthly Rent <sup className={styles.required}>*</sup>
            </label>
            <input
              type="number"
              value={formData.rent}
              onChange={(e) =>
                setFormData({ ...formData, rent: e.target.value })
              }
            />

            <div className={styles.grid2}>
              <div>
                <label>Bedrooms</label>
                <input
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Bathrooms</label>
                <input
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bathrooms: e.target.value })
                  }
                />
              </div>
            </div>

            <label>Area (sqm)</label>
            <input
              type="number"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            />

            <label>
              Image URL <sup className={styles.required}>*</sup>
            </label>
            <input
              type="text"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />

            <div className={styles.grid2}>
              <div>
                <label>
                  Latitude <sup className={styles.required}>*</sup>
                </label>
                <input
                  type="number"
                  step="any"
                  value={formData.latitude}
                  onChange={(e) =>
                    setFormData({ ...formData, latitude: e.target.value })
                  }
                />
              </div>

              <div>
                <label>
                  Longitude <sup className={styles.required}>*</sup>
                </label>
                <input
                  type="number"
                  step="any"
                  value={formData.longitude}
                  onChange={(e) =>
                    setFormData({ ...formData, longitude: e.target.value })
                  }
                />
              </div>
            </div>

            <label>Description</label>
            <textarea
              rows="5"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
          </div>

          <div className={styles.section}>
            <h2>Features</h2>

            <div className={styles.features}>
              {availableFeatures.map((feature) => (
                <label key={feature}>
                  <input
                    type="checkbox"
                    value={feature}
                    onChange={handleFeatureChange}
                  />{" "}
                  {feature}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2>Owner Information</h2>

            <label>
              Owner Name <sup className={styles.required}>*</sup>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <label>
              Phone Number <sup className={styles.required}>*</sup>
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <label>
              Email <sup className={styles.required}>*</sup>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className={styles.buttons}>
            <button type="button" onClick={() => navigate("/properties")}>Cancel</button>
            <button
              type="submit"
              disabled={!isFormValid}>
              Submit Property
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default PostProperty;
