import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <a className="btn btn-warning btn-lg" href = "mailto:vinayprata1999@gmail.com"> Contact Us</a>
      </div>
      <div className="container">
        <span className="text-muted">
        <span className="text-white">Developer ❤️ Vinay</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
