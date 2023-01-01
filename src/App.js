import React, { Fragment } from "react";
import Review from "./Review";
// import { FaBluetooth } from "react-icons/fa";
function App() {
  return (
    <Fragment>
      {/* reviews project setup */}
      {/* Testing React-Icons  fa =  font Awesome <FaBluetooth className="Test_Icon" /> */}
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </Fragment>
  );
}

export default App;
