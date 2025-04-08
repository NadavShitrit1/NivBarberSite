import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 border-t mt-8">
      <p>כל הזכויות שמורות © {new Date().getFullYear()} ניב הספר</p>
    </footer>
  );
}
