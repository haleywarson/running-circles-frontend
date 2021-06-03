import React from "react";

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
      {/* <select
        name="circle"
        id="circle"
        className="form-field"
        value={formState.circles}
        onChange={handleChange}
      >
        <option value="" selected disabled>
          Select circle
        </option>
        {circles.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select> */}
      <input id="submit-run-btn" type="submit" value="Add run" />
    </form>
  );
}
