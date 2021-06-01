import React, { useState } from "react";

const runUrl = "http://localhost:3000/runs";

export default function AddRunForm() {
  const [formState, setFormState] = useState({
    runName: "",
    runLocation: "",
    runDate: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(runUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    //   .then((res) => res.json())
    //   .then((res) =>
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <form className="add-run-form" onSubmit={handleSubmit}>
      <label htmlFor="runName">Name your run</label>
      <input
        className="form-field"
        type="text"
        name="runName"
        id="runName"
        value={formState.runName}
        onChange={handleChange}
      />
      <label htmlFor="runLocation">Location</label>
      <input
        className="form-field"
        type="text"
        name="runLocation"
        id="runLocation"
        value={formState.runLocation}
        onChange={handleChange}
      />
      <label htmlFor="runDate">Date</label>
      <input
        className="form-field"
        type="date"
        name="runDate"
        id="runDate"
        value={formState.runDate}
        onChange={handleChange}
      />
      <input id="submit-run-btn" type="submit" value="Add run" />
    </form>
  );
}
