import React from "react";

const Part1 = props => {
  return (
    <p>
      {props.part1} {props.exercises1}
    </p>
  );
};

const Part2 = props => {
  return (
    <p>
      {props.part2} {props.exercises2}
    </p>
  );
};

const Part3 = props => {
  return (
    <p>
      {props.part3} {props.exercises3}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part1 part1={props.part1.name} exercises1={props.part1.exercises} />
      <Part2 part1={props.part2.name} exercises1={props.part2.exercises} />
      <Part3 part1={props.part3.name} exercises1={props.part3.exercises} />
    </div>
  );
};

export default Content;
