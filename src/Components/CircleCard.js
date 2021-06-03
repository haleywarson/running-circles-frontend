import React from "react";

import CircleUserCard from "./CircleUserCard";

export default function CircleCard({ circle, joinCircle, circles }) {
  //   const displayUsers = () => {
  //     return circles.map((circle) => <CircleUserCard circle={circle} />);
  //   };

  return (
    <div className="circle-card">
      <p>{circle.name}</p>
      <ul>
        Runners:
        {circle.users.toString()}
      </ul>
      <button onClick={() => joinCircle(circle)}>Join</button>
    </div>
  );
}
