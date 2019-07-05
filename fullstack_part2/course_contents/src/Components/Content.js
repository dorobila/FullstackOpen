import React from "react";

const Content = ({ course }) => {
  console.log("course prop", course);
  console.log("course prop", course.parts[0].id);

  const content = () =>
    course.parts.map(part => (
      <p key={part.id}>
        {" "}
        {part.name} - {part.exercises}
      </p>
    ));

  return <>{content()}</>;
};

export default Content;
