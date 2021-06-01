import React from "react";

export default function AddRunForm(props) {
  return (
    <form className="add-run-form" onSubmit={props.handleSubmit}>
      <label htmlFor="runName">Name your run</label>
      <input
        className="form-field"
        type="text"
        name="runName"
        id="runName"
        value={props.formState.runName}
        onChange={props.handleChange}
      />
      <label htmlFor="runLocation">Location</label>
      <input
        className="form-field"
        type="text"
        name="runLocation"
        id="runLocation"
        value={props.formState.runLocation}
        onChange={props.handleChange}
      />
      <label htmlFor="runDate">Date</label>
      <input
        className="form-field"
        type="date"
        name="runDate"
        id="runDate"
        value={props.formState.runDate}
        onChange={props.handleChange}
      />
      <label htmlFor="runTime">Time</label>
      <input
        className="form-field"
        type="time"
        name="runTime"
        id="runTime"
        value={props.formState.runTime}
        onChange={props.handleChange}
      />
      <input id="submit-run-btn" type="submit" value="Add run" />
    </form>
  );
}
