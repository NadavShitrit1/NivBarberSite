import React from "react";
import "../style.css";
import academyLogo from "../assets/academy-logo.jpg";

export default function Courses() {
  return (
    <div className="courses-section">
      <div className="courses-container">
        <h1 className="section-title">קורסים לספרות</h1>
        <img src={academyLogo} alt="אקדמיית ניב" className="academy-logo" />
        <p className="section-text">
          רוצה להפוך לספר מקצועי או לשדרג את הכישורים שלך? הקורסים שלי נבנו במיוחד עבורך – עם ניסיון אמיתי מהשטח, טכניקות עדכניות והרבה השראה.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>🎓 קורס ספרות בסיסי</h3>
            <p>כל היסודות – תספורת, זקן, היגיינה, כלים וטכניקות.</p>
          </div>
          <div className="card">
            <h3>💼 קורס מתקדמים</h3>
            <p>פיידים מדויקים, עיצוב זקן מקצועי, עיצוב קווים וקישוטים.</p>
          </div>
          <div className="card">
            <h3>🎥 קורס אונליין</h3>
            <p>למידה מרחוק בזמנך הפנוי, כולל תמיכה אישית ושאלות.</p>
          </div>
        </div>

        <p className="section-text">
          להצטרפות ופרטים נוספים, <a href="/contact" className="link-highlight">צור איתי קשר כאן</a> או קבע שיחת ייעוץ.
        </p>
      </div>
    </div>
  );
}