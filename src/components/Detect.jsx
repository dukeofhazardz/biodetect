import React, { useState, useEffect } from "react";
import api from "../lib/api";
import textSelector from "../lib/text-selector";
import loadingGif from "../assets/images/loading.gif";

const Detect = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Cancel any ongoing speech synthesis when the component mounts
    window.speechSynthesis.cancel();

    // Cancel speech synthesis on unmount or reload
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const getAudio = async (e) => {
    e.preventDefault();
    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start speaking
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setErrorInfo(null);

    if (!image) {
      setError("Please select an image.");
      return;
    }

    setLoading(true); // Start loading indicator

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await api.post("/detect", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResult(response.data);
      setText(textSelector(response.data));
      if (response.data.error) {
        setErrorInfo(`${response.data.error}. ${response.data.next_steps}`);
      }
    } catch (error) {
      setError("An error occurred while processing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="display-section wrapper" id="detect">
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
          {error && <div>{error}</div>}
          {errorInfo && <div>{errorInfo}</div>}
          <button type="submit" className="button">
            {loading ? (
              <img className="loading-gif" src={loadingGif} alt="Loading..." />
            ) : (
              "Detect"
            )}
          </button>
        </form>
      </div>

      {/* Display image preview */}
      <div className="image-preview">
        {imagePreview && <img src={imagePreview} alt="Selected Image" />}
      </div>

      {result && !result.error && (
        <div>
          <form onSubmit={getAudio}>
            <button type="submit" className="button">
            {isSpeaking ? 'Stop' : 'Play'}
            </button>
          </form>
        </div>
      )}

      {result && !result.error && (
        <div className="results">
          <div className="container left-container">
            <div className="text-box">
              <h2>Species</h2>
              <p>{result.species}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Common Name</h2>
              <p>{result.common_name}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Scientific Name</h2>
              <p>{result.scientific_name}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Classification</h2>
              <p>{result.classification}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Physical Characteristics</h2>
              <p>{result.physical_characteristics}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Behavioral Traits</h2>
              <p>{result.behavioral_traits}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Habitat</h2>
              <p>{result.habitat}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Geographic Distribution</h2>
              <p>{result.geographic_distribution}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Diet and Feeding Habits</h2>
              <p>{result.diet_and_feeding_habits}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Reproduction and Lifecycle</h2>
              <p>{result.reproduction_and_lifecycle}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Conservation Status</h2>
              <p>{result.conservation_status}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Interactions with other Species</h2>
              <p>{result.interactions_with_other_species}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Adaptations to the Environment</h2>
              <p>{result.adaptations_to_the_environment}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Threats and Challenges</h2>
              <p>{result.threats_and_challenges}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Conservation Efforts and Initiatives</h2>
              <p>{result.conservation_efforts_and_initiatives}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detect;
