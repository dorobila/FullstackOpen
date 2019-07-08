import React from "react";

const PhoneBook = ({ person }) => {
  console.log("phonebook", person.name);
  return (
    <li>
      {person.name} : {person.number}
    </li>
  );
};

export default PhoneBook;
