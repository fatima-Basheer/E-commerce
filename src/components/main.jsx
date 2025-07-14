import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-black border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/heroSec1.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              
<p className="card-text fs-2 d-none d-sm-block text-center">
  Find your favourite product <br/>in thousand of products
</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
