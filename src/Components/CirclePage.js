import React, { useState, useEffect } from "react";

import CirclesContainer from "./CirclesContainer";
import MyCirclesContainer from "./MyCirclesContainer";

const baseUrl = "http://localhost:3000/";

export default function RunPage({
  validateUser,
  myCircles,
  circles,
  setCircles,
  setMyCircles,
  removeMyCircle,
}) {
  //   STATE AND FETCH

  const fetchCircles = () => {
    fetch(baseUrl + "circles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((circles) => setCircles(circles));
  };

  useEffect(() => {
    validateUser();
    fetchCircles();
  }, []);

  //   EVENT HANDLERS

  const joinCircle = (circleToJoin) => {
    console.log("adding to my circles...");
    setMyCircles([...myCircles, circleToJoin]);
  };

  return (
    <div className="circle-page">
      <h2>Running circles</h2>
      <CirclesContainer circles={circles} joinCircle={joinCircle} />
      {myCircles.length !== 0 ? (
        <>
          <h2>My circles</h2>
          <MyCirclesContainer
            myCircles={myCircles}
            removeMyCircle={removeMyCircle}
          />
        </>
      ) : null}
    </div>
  );
}
