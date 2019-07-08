import React from "react";

const PhoneBook = ({ persons }) => {
  console.log("phonebook", persons);
  return <li>{persons.name}</li>;
};

export default PhoneBook;
