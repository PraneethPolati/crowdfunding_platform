import React, { useState } from "react";
import "../styles/CreateCampaign.css";

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    category: "Technology",
    image: "",
  });

  const [error, setError] = useState(""); // For validation error
  const [imagePreview, setImagePreview] = useState(""); // Live image preview

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // If the user types a valid image URL, update the preview
    if (e.target.name === "image") {
      setImagePreview(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.description || !formData.goal || !formData.image) {
      setError("Please fill in all fields.");
      return;
    }

    setError(""); // Clear error
    console.log("Campaign Data:", formData);
  };

  return (
    <div className="create-campaign">
      <h1>Start a New Campaign</h1>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Funding Goal ($)</label>
        <input type="number" name="goal" value={formData.goal} onChange={handleChange} required />

        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>

        <label>Campaign Image URL</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} required />

        {/* Live Image Preview */}
        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}

        <button type="submit" className="btn">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
