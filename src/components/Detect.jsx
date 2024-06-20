import React, { useState } from "react";
import api from "../lib/api";

const Detect = () => {
  const [ image, setImage ] = useState(null);
  const [ imagePreview, setImagePreview ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ result, setResult ] = useState(null);
  const [ error, setError ] = useState(null);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!image) {
      setError("Please select an image.");
      return;
    }

    setLoading(true); // Start loading indicator

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await api.post('/detect', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResult(response.data);
    } catch (error) {
      setError("An error occurred while processing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="display-section wrapper">
      <p className="text">Detect</p>
      <span className="description">
        Provide a clear and focused image of an animal, plant or insect for
        accurate detection results.
      </span>

      <div className="detect-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="image" className="title">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/jpeg, image/png, image/gif"
              className="form-input"
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="button">
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detect;
