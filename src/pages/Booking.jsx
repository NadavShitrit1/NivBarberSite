import React from "react";
import "../style.css";

export default function Booking() {
  return (
    <div className="booking-section">
      <div className="booking-container">
        <h1 className="section-title">קביעת תור</h1>
        <div className="section-text">
          <p>
            אנחנו משתמשים במערכת חיצונית לקביעת תורים כדי להבטיח שירות חלק, מהיר ונוח.
            לחצו על הכפתור למטה ותועברו לעמוד קביעת התור.
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://calmark.io/p/VblI2"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button booking-btn"
          >
            קבעו תור עכשיו
          </a>
        </div>
      </div>
    </div>
  );
}
