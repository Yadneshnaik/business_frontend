import React, { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios
      .get("https://business-backend-ii0j.onrender.com/api/about")
      .then((response) => setAbout(response.data))
      .catch((error) => console.error("Error fetching About data:", error));
  }, []);

  return (
    <div className="page-background">

      {/* ABOUT SECTION */}
      <section className="py-5 w-100" style={{ minHeight: "100vh" }}>
        <div className="container h-100">

          {/* TITLE CENTER */}
          <h2 className="fw-bold text-center mb-5">
            {about ? about.title : "Loading..."}
          </h2>

          <div className="row align-items-center">

            {/* LEFT IMAGE */}
            <div className="col-md-6 text-center">
              <img
                src="/vista_developer.png"
                alt="About"
                className="img-fluid rounded shadow"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="col-md-6 mt-4 mt-md-0">
              <p className="mt-3 fs-5">{about?.paragraph1}</p>
              <p className="fs-5">{about?.paragraph2}</p>
            </div>

          </div>
        </div>
      </section>

    </div>

  );
}
