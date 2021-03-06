import React from "react";

import Button from "react-bootstrap/Button";

export default function AddRunForm({ formState, handleSubmit, handleChange }) {
  return (
    <form className="add-run-form" onSubmit={handleSubmit}>
      <label htmlFor="runName">Name your run</label>
      <input
        className="form-field"
        type="text"
        name="runName"
        placeholder="Name your run"
        id="runName"
        value={formState.runName}
        onChange={handleChange}
      />
      <label htmlFor="runLocation">Location</label>
      <input
        className="form-field"
        type="text"
        placeholder="Location"
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
      <label htmlFor="runTime">Time</label>
      <input
        className="form-field"
        type="time"
        name="runTime"
        id="runTime"
        value={formState.runTime}
        onChange={handleChange}
      />
      <Button variant="dark" type="submit" id="submit-run-btn">
        Add run
      </Button>
    </form>
  );
}
