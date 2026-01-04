import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState(``);
  const [age, setAge] = useState(``);

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.AddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + `-random`,
      name: name,
      age: age,
    });
  };

  return (
    <>
      My name is {name}, I'm {age}
      <br></br>
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChangeName(event);
          }}
        ></input>
        <br></br>

        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        ></input>
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddUserInfor;
