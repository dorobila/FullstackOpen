import React from "react";

const Course = props => {
  // console.log("course prop", course[0].parts);
  // console.log(props.course);
  const cou = () =>
    props.course.map(part => (
      <div key={part.id}>{<OneCourse course={part} />}</div>
    ));

  return <>{cou()}</>;
};

const OneCourse = props => {
  // console.log("onecourse", props);
  return (
    <div>
      <Header course={props.course.name} />
      <Content course={props.course.parts} />
      <Total total={props.course.parts} />
    </div>
  );
};

const Header = props => {
  console.log(props);
  return <h2> {props.course} </h2>;
};

const Content = ({ course }) => {
  const con = () =>
    course.map(c => (
      <p key={c.id}>
        {c.name} - {c.exercises}
      </p>
    ));

  return <div>{con()}</div>;
};

const Total = ({ total }) => {
  const totalAmount = total.reduce((sum, e) => {
    // console.log("TAM", exercise);
    console.log(sum, e.exercises);
    return sum + e.exercises;
  }, 0);
  return (
    <div>
      <p>
        <b>Number of exercises: {totalAmount}</b>
      </p>
    </div>
  );
};

export default Course;
