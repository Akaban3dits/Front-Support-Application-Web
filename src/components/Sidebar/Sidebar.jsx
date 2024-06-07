/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onMenuClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
  };

  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/927/466/original/volkswagen-logo-brand-car-symbol-with-name-white-design-german-automobile-illustration-with-blue-background-free-vector.jpg"
              alt="Logo"
              className="logo-img"
            />
          </span>
          <div className="text header-text">
            <span className="profession">Volkswagen </span>
            <span className="name">Soporte Tecnico</span>
          </div>
        </div>
        <div className="toggle" onClick={toggleSidebar}>
          <ion-icon
            name="arrow-dropright"
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
            }}
          ></ion-icon>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <div className="light">
              <ion-icon
                name="search"
                
                style={{
                  color: "#797979",
                  fontSize: "20px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              ></ion-icon>
            </div>
            <input type="search" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-links">
              <a href="#">
                <div className="light">
                  <ion-icon
                  className= "icon"
                    name="home"
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                      marginRight: "5px",
                    }}
                  ></ion-icon>
                </div>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">
                <div className="light">
                  <ion-icon
                    name="list-box"
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                      marginRight: "5px",
                    }}
                  ></ion-icon>
                </div>
                <span className="text nav-text">Tickets</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">
                <div className="light">
                  <ion-icon
                    name="notifications"
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                      marginRight: "5px",
                    }}
                  ></ion-icon>
                </div>
                <span className="text nav-text">Notificaciones</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="userlogout">
            <a>
              <div className="profile-image">
                <img
                  src="https://i.pinimg.com/originals/db/db/91/dbdb91681db0e2a02f3253522296ad78.jpg"
                  alt="Imagen de perfil"
                />
              </div>
              <div className="username">
                <span className="text nav-text">Emmanuel Rosario </span>
                <span className="text2 nav-text">Cerrar Sesion</span>
              </div>
            </a>
          </li>
          <li className="mode">
            <a>
              <div className="moon-sun" onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <>
                    <div className="light">
                      <ion-icon
                        name="sunny"
                        style={{
                          fontSize: "20px",
                          marginLeft: "10px",
                          marginRight: "5px",
                        }}
                      ></ion-icon>
                    </div>
                    <span className="text nav-text">Light</span>
                  </>
                ) : (
                  <>
                    <div className="light">
                      <ion-icon
                        name="moon"
                        style={{
                          fontSize: "20px",
                          marginLeft: "10px",
                          marginRight: "5px",
                        }}
                      ></ion-icon>
                    </div>
                    <span className="text nav-text">Dark</span>
                  </>
                )}
              </div>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
