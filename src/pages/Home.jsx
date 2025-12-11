import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Home() {
  return (
    <div className="page-background">
      <section className="text-dark text-center py-5">
        <div className="container">
          <h1 className="fw-bold display-4">Professional IT Solutions for Modern Businesses</h1>
          <p className="lead mt-3">
            We offer Web Development, App Development, IT Consultancy & Digital Marketing Solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
