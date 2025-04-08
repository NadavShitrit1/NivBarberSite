import React from "react";
import "../style.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">מי אני</h2>
        <p className="section-text">
          היי, אני ניב ✂️, ספר עם תשוקה לסטייל ואנשים.
          אחרי יותר מעשור של ניסיון במספרות הכי טובות, החלטתי לפתוח מקום משלי — כזה שנותן מקום גם לתספורת איכותית וגם לשיחה טובה.
        </p>
        <p className="section-text">
          אני מאמין שכל אחד ואחת צריכים להרגיש טוב עם עצמם, וכל תספורת היא הזדמנות ליצור מחדש.
          אני כאן בשביל להקשיב, לדייק, ולתת שירות ברמה הכי גבוהה שיש.
        </p>
      </div>
    </section>
  );
}