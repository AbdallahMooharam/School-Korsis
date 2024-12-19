import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // استيراد أيقونة WhatsApp

const FloatingWhatsApp = () => {
  const [position, setPosition] = useState({ x: 20, y: 100 }); // موقع البداية للأيقونة

  const handleDragStart = (e) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const handleMouseMove = (moveEvent) => {
      setPosition({
        x: moveEvent.clientX - offsetX,
        y: moveEvent.clientY - offsetY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // اضغط على هذه الجملة لفحص ما إذا كان المكون يتم تحميله
  console.log('Floating WhatsApp component is rendered');

  return (
    <div
      className="whatsapp-icon"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseDown={handleDragStart}
    >
      <a
        href="https://wa.me/1234567890" // رابط WhatsApp الخاص بك
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} color="green" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
