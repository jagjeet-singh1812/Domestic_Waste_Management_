import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to the server)
      alert("Registration successful!");
      onClose();
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  return (
    <div className="registration-form-overlay">
      <div className="registration-form">
        <button className="close-button" onClick={onClose}>
          &#x2715;
        </button>
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {formErrors.phone && <p className="error">{formErrors.phone}</p>}
          </div>
          <div className="form-group">
            <label>Select Event</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleInputChange}
            >
              <option value="city_cleanup">City Cleanup</option>
              <option value="tree_plantation">Tree Plantation</option>
              <option value="recycling_drive">Recycling Drive</option>
            </select>
            {formErrors.event && <p className="error">{formErrors.event}</p>}
          </div>
          <div className="form-group">
            <label>Comments (Optional)</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
            {formErrors.comments && (
              <p className="error">{formErrors.comments}</p>
            )}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
