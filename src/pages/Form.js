import React, { useState } from "react";

const Form = ({ initialBook, handleSubmit, buttonLabel, history }) => {
  const [formData, setFormData] = useState(initialBook);

  /////////////////////////
  // Functions
  /////////////////////////
  const handleChange = (event) => {
    if (event.target.name === "read") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.image}
        name="image"
        placeholder="Image URL"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
        placeholder="Book Title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.author}
        name="author"
        placeholder="Author"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.description}
        name="description"
        placeholder="Description"
      />
      <label htmlFor="read">
        Read?:
        <input
          type="checkbox"
          onChange={handleChange}
          checked={formData.read}
          name="read"
        />
      </label>
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
