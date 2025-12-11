import axios from "axios";
import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("https://business-backend-ii0j.onrender.com/api/services")
      .then(res => setServices(res.data));
  }, []);

  return (
    <div className="page-background">
      <div className="container mt-4">
        <h2 className="mb-4">Our Services</h2>

        <div className="row">
          {services.map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="card p-3 mb-3 shadow">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
