import React from "react";

const Part1 = props => {
  return (
    <p>
      {props.parts[0].name} - {props.parts[0].exercises}
    </p>
  );
};

const Part2 = props => {
  return (
    <p>
      {props.parts[1].name} - {props.parts[1].exercises}
    </p>
  );
};

const Part3 = props => {
  return (
    <p>
      {props.parts[2].name} - {props.parts[2].exercises}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part1 parts={props.parts} />
      <Part2 parts={props.parts} />
      <Part3 parts={props.parts} />
    </div>
  );
};

export default Content;
