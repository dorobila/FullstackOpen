import React from "react";

const Total = ({ course }) => {
  const totalAmount = course.parts.reduce((sum, exercise) => {
    console.log("TAM", exercise);
    console.log(sum, exercise.exercises);
    return sum + exercise.exercises;
  }, 0);

  return (
    <div>
      <p>
        <b>Number of exercises: {totalAmount}</b>
      </p>
    </div>
  );
};

export default Total;
