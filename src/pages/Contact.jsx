// src/pages/Contact.js
import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { getDistance } from 'geolib'; // حزمة لحساب المسافات بين النقطتين
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const mapRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${name}`);
  };

  const handleMapClick = (e) => {
    const clickedCoords = e.latlng;
    setCoordinates(clickedCoords);

    // الموقع الثابت للمكتب (يمكن تغييره)
    const officeCoords = { latitude: 30.0330, longitude: 31.2357 }; // تغيير هذا إلى إحداثيات المكان الذي تريد
    const clickedLatLng = { latitude: clickedCoords.lat, longitude: clickedCoords.lng };

    // حساب المسافة باستخدام geolib
    const calculatedDistance = getDistance(officeCoords, clickedLatLng);
    setDistance(calculatedDistance / 1000); // المسافة بالكيلومترات

    // حساب الوقت (المعدل المتوسط للسرعة 50 كم/س)
    const calculatedTime = (calculatedDistance / 1000) / 50; // الوقت بالساعة
    setTime(calculatedTime.toFixed(2)); // تعيين الوقت مع التقريب
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center py-12 mt-20">
      <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mb-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>

      {/* خريطة تفاعلية */}
      <MapContainer
        center={[30.0330, 31.2357]} // الإحداثيات الافتراضية (يمكن تغييرها)
        zoom={13}
        style={{ width: '100%', height: '400px' }}
        whenCreated={(map) => mapRef.current = map}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coordinates && (
          <Marker position={coordinates}>
            <Popup>
              <p><strong>Distance:</strong> {distance ? `${distance.toFixed(2)} km` : 'Calculating...'} </p>
              <p><strong>Time:</strong> {time ? `${time} hours` : 'Calculating...'} </p>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {distance && (
        <div className="mt-4 text-lg">
          <p><strong>Calculated Distance:</strong> {distance.toFixed(2)} km</p>
          <p><strong>Estimated Time:</strong> {time} hours</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
