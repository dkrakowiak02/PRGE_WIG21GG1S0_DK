import React from "react";
import "./Services.css";
import promocja_wat from "./promocja_wat.jpg";
import dziekan_wig from "./dziekan_wig.jpg";

function Services() {
  return (
    <div className="services">
      {/* górny */}

      <div className="services_top"></div>
      <div className="services_bottom">
        <div className="services_bottomLeft">
          <div className="services_top">
            <h1 className="home_title">Dostępne usługi</h1>
          </div>
          <div className="services_buttons">
            <button className="services_button" id="mapa">
              MAPA
            </button>
            <button className="services_button" id="lista">
              WYKAZ lub LISTA czegoś
            </button>
          </div>
        </div>

        <div className="services_bottomRight">
          <div className="services_imageItem">
            <img src={dziekan_wig} alt="" />{" "}
          </div>
          <div className="services_imageItem">
            <img src={promocja_wat} alt="" />{" "}
          </div>
          <div className="services_imageItem">
            <img src={promocja_wat} alt="" />{" "}
          </div>
          <div className="services_imageItem">
            <img src={dziekan_wig} alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
