import React from "react";

const Table = ({ users }) => {
  return (
    <>
      <div className="container my-3">
        <table className="table table-bordered table-striped text-center">
           <thead>
           <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
           </thead>
           <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3">No users</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
          )}
        </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
