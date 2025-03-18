import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-white" style={{ backgroundColor: "#181818" }}>
      <h1 className="mb-3">404</h1>
      <h3 className="mb-4">Oops! Page Not Found</h3>
      <Link to="/films" className="btn btn-light px-4 py-2">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
