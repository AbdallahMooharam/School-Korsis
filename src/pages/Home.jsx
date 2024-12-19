// src/pages/Home.js
import React from 'react';
import backgroundImage from '../img/imagee.png'; // تأكد من تعديل المسار حسب مكان الصورة

const Home = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // هنا تضيف مسار الصورة كخلفية
    >
      {/* زيادة الفارق بين الـ Navbar والجملة */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black text-center px-4 mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        Welcome to School Korsis
      </h1>
      <p className="text-lg sm:text-xl mb-8 text-black text-center px-4">
        Private lessons for all educational stages: Primary, Middle, and High School.
      </p>
      <a
        href="/about"
        className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 mb-12 transition duration-300"
      >
        Learn More About Us
      </a>

      {/* إضافة الكاردات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-4 py-8">
        <div className="bg-gray-800 bg-opacity-60 text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Knowledge is Power</h3>
          <p className="text-lg">Education strengthens society, empowers individuals, and builds a better future for all.</p>
        </div>

        <div className="bg-gray-800 bg-opacity-60 text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Invest in Learning</h3>
          <p className="text-lg">Every student is an opportunity to improve the world through the power of knowledge.</p>
        </div>

        <div className="bg-gray-800 bg-opacity-60 text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">A Bright Future Awaits</h3>
          <p className="text-lg">Education is the foundation of a prosperous society and a brighter tomorrow for generations to come.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
