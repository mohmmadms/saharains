"use client"


import React, { useState } from 'react';

const HomePage = () => {
  const openingHours = {
    Mon: "09:00 am – 06:00 pm",
    Tue: "09:00 am – 06:00 pm",
    Wed: "09:00 am – 06:00 pm",
    Thu: "09:00 am – 06:00 pm",
    Fri: "09:00 am – 06:00 pm",
    Sat: "Closed",
    Sun: "Closed"
  };

  const [currentDay, setCurrentDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'short' }));
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleArrowClick = (direction) => {
    const days = Object.keys(openingHours);
    const currentIndex = days.indexOf(currentDay);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? days.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === days.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentDay(days[newIndex]);
  };

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-600 min-h-screen">
      <header className="bg-white shadow py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="Insurance" className="w-24 h-auto" />
          </div>
          <button className="lg:hidden" onClick={handleNavToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <nav className={`lg:flex ${isNavOpen ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-gray-800 hover:text-blue-500">Services</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a></li>
              <li><a href="#map" className="text-gray-800 hover:text-blue-500">Map</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section id="hero" className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Get Your Free Quote Today</h1>
          <p className="text-lg text-gray-200 mb-4">We shop dozens of insurance companies to find you the best deal.</p>
          <a href="tel:9519221400" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full inline-block mt-4">CLICK TO CALL</a>
        </section>

        <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <ServiceCard image="/image2.png" title="Mexico Insurance" content="Insurance coverage for Mexico trips" />
          <ServiceCard image="/image3.png" title="Free SR-22" content="Get a free SR-22 form filing" />
          <ServiceCard image="/image1.png" title="No Driver Refused" content="Insurance for drivers with tickets, accidents, DUI, etc." />
          <ServiceCard image="/image4.png" title="No Vehicle Rejected" content="Insurance for lowered, lifted, damaged, salvaged vehicles, etc." />
        </section>

        <section id="contact" className="mb-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Contact Us:</h2>
          <p>Sahara Insurance Agency Inc.</p>
          <p>3367 Ramsey Street, Banning, California 92220, United States</p>
          <p>Phone: <a href="tel:9519221400" className="text-blue-600 hover:text-blue-700">951-922-1400</a></p>
          <p>Fax: 951-922-1166</p>
          <p>Email: <a href="mailto:SAHARAINSURANCE@YAHOO.COM" className="text-blue-600 hover:text-blue-700">SAHARAINSURANCE@YAHOO.COM</a></p>
        </section>

        <div className="mb-8 text-center text-white">
          <button onClick={() => handleArrowClick('prev')} className="mr-2 bg-transparent border border-white rounded-full px-4 py-2 hover:bg-white hover:text-gray-800">Prev</button>
          <span className="font-semibold">{currentDay}</span>: {openingHours[currentDay]}
          <button onClick={() => handleArrowClick('next')} className="ml-2 bg-transparent border border-white rounded-full px-4 py-2 hover:bg-white hover:text-gray-800">Next</button>
        </div>

        <section id="map" className="mb-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3466148726574!2d-116.88225278478819!3d33.92547288064425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db02054f9f9f19%3A0x35826ebed0071a1d!2s3367%20Ramsey%20St%2C%20Banning%2C%20CA%2092220%2C%20USA!5e0!3m2!1sen!2suk!4v1649865635627!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <p>Copyright &copy; 2021 Sahara Insurance Agency. All rights reserved.</p>
          <nav>
            {/* <ul className="flex space-x-4">
              <li><a href="#terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul> */}
          </nav>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ image, title, content }) => (
  <div className="bg-white rounded-lg p-4">
    <img src={image} alt={title} className="w-full h-auto mb-4 rounded-lg" />
    <div className="text-center">
      <p className="font-semibold">{title}</p>
      <p className="mb-4">{content}</p>
    </div>
  </div>
);

export default HomePage;




