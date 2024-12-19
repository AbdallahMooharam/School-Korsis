// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center py-12 mt-32 sm:mt-40 md:mt-48 lg:mt-20">
      <h2 className="text-4xl font-semibold mb-6">About School Korsis</h2>
      <p className="text-lg text-center max-w-2xl mb-8">
        We offer tailored private lessons for students at all educational stages. Our teachers are highly qualified and
        experienced, providing the best learning experience for primary, middle, and high school students.
      </p>
      <a href="/contact" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 mb-12">
        Contact Us
      </a>

      {/* إضافة كاردات حول أهمية الطالب والدروس */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 py-8">
        {/* كارد 1: أهمية الطالب */}
        <div className="bg-blue-100 text-center p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Our Students are Our Priority</h3>
          <p className="text-lg">
            We believe that every student has unique potential. Our focus is to provide personalized attention and support to ensure their success.
          </p>
        </div>

        {/* كارد 2: أهمية الدروس */}
        <div className="bg-yellow-100 text-center p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Tailored Lessons for Success</h3>
          <p className="text-lg">
            Our private lessons are customized to meet the needs of each student, ensuring they grasp difficult concepts and excel in their studies.
          </p>
        </div>

        {/* كارد 3: أهمية مركزنا التعليمي */}
        <div className="bg-green-100 text-center p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">A Place for Growth and Learning</h3>
          <p className="text-lg">
            At School Korsis, we provide a supportive and nurturing environment where students can thrive, build confidence, and achieve academic excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
