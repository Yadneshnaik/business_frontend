import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WebDevPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/webdev") 
      .then((res) => setPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Web Development Plans</h2>

      <div className="row g-4">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-lg h-100 p-3">
              
              <h3 className="text-center fw-bold">{plan.title}</h3>
              <span className="bar mb-3 border-bottom"></span>

              <h5 className="fw-bold text-center">Additional Information</h5>

              <p className="text-center fw-bold text-primary">
                Price: {plan.price}
              </p>

              <p className="btc text-muted">{plan.description}</p>

              <p className="btc">
                <b>Includes:</b>
                <br />
                {plan.includes.map((item, i) => (
                  <span key={i}>
                    {item}
                    <br />
                  </span>
                ))}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
