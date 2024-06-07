import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./Home.css";
import About from './../About';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <section className="home">
        <div className="content">
          <About></About>
        </div>
      </section>
    </div>
  );
};

export default Home;
