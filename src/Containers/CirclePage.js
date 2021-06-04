import React, { useEffect } from "react";

import CirclesContainer from "./CirclesContainer";
import MyCirclesContainer from "./MyCirclesContainer";

const baseUrl = "http://localhost:3000/";

export default function RunPage({
  validateUser,
  myCircles,
  circles,
  joinCircle,
  removeMyCircle,
}) {
 
  useEffect(() => {
    validateUser();
  }, []);

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
            circles={circles}
          />
        </>
      ) : null}
    </div>
  );
}
