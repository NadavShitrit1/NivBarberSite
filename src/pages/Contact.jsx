import React from "react";
import "../style.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">צור קשר</h1>
        <p className="section-text">
          אפשר לפנות אליי בכל שאלה, בקשה או תיאום תור גם ישירות:
        </p>
        <div className="contact-details">
          <p>📞 טלפון: <a href="tel:0501234567">050-1234567</a></p>
          <p>📍 כתובת: דיזנגוף 123, תל אביב</p>
          <p>📧 אימייל: <a href="mailto:niv@barbershop.co.il">niv@barbershop.co.il</a></p>
          <p>💬 וואטסאפ: <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">שלח הודעה</a></p>
        </div>
      </div>
    </div>
  );
}