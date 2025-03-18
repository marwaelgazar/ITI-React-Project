import React, { useState } from "react";

const Form = ({ addUser }) => {
  const [formInputs, setFormInputs] = useState({ name: "", age: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInputs.name.trim() === "" || formInputs.age.trim() === "") return;
    addUser(formInputs);
    setFormInputs({ name: "", age: "" });
  };
  return (
    <>
      <div className="container my-5">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label
              htmlFor="name"
              className="input-group-text bg-secondary text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={formInputs.name}
              onChange={(e) => {
                setFormInputs({ ...formInputs, name: e.target.value });
              }}
            />
          </div>
          <br></br>
          <div className="input-group">
            <label
              htmlFor="age"
              className="input-group-text bg-secondary text-white"
            >
              Age
            </label>
            <input
              type="text"
              name="age"
              id="age"
              className="form-control"
              value={formInputs.age}
              onChange={(e) => {
                setFormInputs({ ...formInputs, age: e.target.value });
              }}
            />
          </div>
          <br></br>
          <button className="btn btn-secondary text-white">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
