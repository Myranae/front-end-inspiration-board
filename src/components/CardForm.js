import React, { useState } from "react";
import PropTypes from "prop-types";

const kDefaultFormState = {
  message: "",
  likes: "",
  board_id: "",
};

const NewCardForm = ({ onCardDataReady }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldMessage = event.target.message;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldMessage]: fieldValue };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCardDataReady(formData);

    setFormData(kDefaultFormState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create a New Card</h1>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            message="message"
            value={formData.message}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="preview">Preview:</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  onCardDataReady: PropTypes.func.isRequired,
};
export default NewCardForm;
