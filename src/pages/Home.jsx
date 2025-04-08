import React from "react";
import "../style.css"; // כאן נשים את העיצוב המושקע
import barberBg from "../assets/niv.png"; // כאן נשים את התמונה של ניב הספר

export default function Home() {
  return (
    <div className="home-container">
      <div  className="hero-section"
          style={{ backgroundImage: `url(${barberBg})` }}>       
           <div className="hero-overlay">
          <h1 className="hero-title">ניב הספר ✂️</h1>
          <p className="hero-subtitle">תספורת עם סטייל. שירות עם נשמה.</p>
          <a href="https://calmark.io/p/VblI2" className="hero-button">קבע תור</a>
        </div>
      </div>

      <section className="home-section">
        <h2 className="section-title">מה אני מציע?</h2>
        <ul className="features-list">
          <li>💈 תספורות גברים ונוער</li>
          <li>🧔 עיצוב זקן וטיפוח</li>
          <li>🎓 קורסים מקצועיים לספרות</li>
        </ul>
      </section>

      <section className="home-section dark">
        <h2 className="section-title">למה לבחור בי?</h2>
        <p className="section-text">
          עם ניסיון של מעל 10 שנים, גישה אישית ומקצועית, ואווירה בסטייל – כל תספורת אצל ניב היא חוויה שלא שוכחים.
        </p>
      </section>
    </div>
  );
}