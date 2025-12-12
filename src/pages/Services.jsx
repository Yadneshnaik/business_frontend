import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://business-backend-ii0j.onrender.com/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Navigate to Web Development Plans page
  const goToWebDev = () => {
    navigate("/webdev"); // Your WebDev page must exist
  };

  // Navigate to Contact Page for other services
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="page-background">
      <div className="container mt-4">
        <h2 className="mb-4 fw-bold">Our Services</h2>

        <div className="row">
          {services.map((s, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card p-3 shadow h-100">
                <h4 className="fw-bold">{s.title}</h4>
                <p className="text-muted">{s.description}</p>

                {/* CONDITION: If service title = Web Development */}
                {s.title.toLowerCase() === "web development" ? (
                  <button
                    className="btn btn-primary w-100 mt-auto"
                    onClick={goToWebDev}
                  >
                    View Plans
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-dark w-100 mt-auto"
                    onClick={goToContact}
                  >
                    Contact Us
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
