import React from "react";
import "../style.css";

export default function Services() {
  return (
    <div className="services-section">
      <div className="services-container">
        <h1 className="section-title">השירותים שלי</h1>
        <div className="card-grid">
          <div className="card">
            <h3>✂️ תספורת גברים</h3>
            <p>עיצוב קלאסי או מודרני, מותאם בדיוק לסגנון שלך.</p>
          </div>
          <div className="card">
            <h3>🧔 טיפוח זקן</h3>
            <p>עיצוב, קיצוץ ותחזוקה שיגרמו לזקן שלך להיראות מיליון דולר.</p>
          </div>
          <div className="card">
            <h3>💇‍♂️ תספורת ילדים</h3>
            <p>אווירה נעימה וקלילה לילדים עם הרבה סבלנות ואהבה.</p>
          </div>
          <div className="card">
            <h3>🎨 צבע לשיער/זקן</h3>
            <p>כיסוי שיער לבן או חידוש צבע בעבודה מדויקת.</p>
          </div>
          <div className="card">
            <h3>🔥 תספורות מיוחדות</h3>
            <p>פיידים, קווים, עיצובים יצירתיים וטרנדיים במיוחד.</p>
          </div>
        </div>
      </div>
    </div>
  );
}