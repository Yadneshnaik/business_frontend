import React from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Home() {
  return (
    <div className="page-background">

      {/* ===== HERO SECTION ===== */}
      <section className="text-dark text-center py-5">
        <div className="container">
          <h1 className="fw-bold display-5 display-md-4">
            Professional IT Solutions for Modern Businesses
          </h1>

          <p className="lead mt-3 px-3 px-md-5">
            We offer Web Development, App Development, IT Consultancy & Digital Marketing Solutions.
          </p>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Us</h2>

          <div className="row g-4 justify-content-center">

            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-4 h-100 shadow-sm rounded bg-white">
                <h5 className="fw-bold mb-2">Expert Team</h5>
                <p className="text-muted">
                  Our skilled professionals bring years of experience in building reliable and scalable digital solutions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-4 h-100 shadow-sm rounded bg-white">
                <h5 className="fw-bold mb-2">On-Time Delivery</h5>
                <p className="text-muted">
                  We value your time. Every project is executed with clear planning and timely delivery.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-4 h-100 shadow-sm rounded bg-white">
                <h5 className="fw-bold mb-2">Affordable Pricing</h5>
                <p className="text-muted">
                  Premium services at budget-friendly rates. Get the best value for your investment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== OUR COMMITMENT ===== */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Commitment</h2>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="lead text-muted px-3">
                At Vista Developer, our mission is to make quality technology and digital transformation 
                <strong> made accessible </strong>
                to everyone.
                <br /><br />
                We are committed to delivering transparent service, client-focused solutions, long-term support, 
                and innovative development that aligns with modern industry standards.  
                Your success drives our success.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}