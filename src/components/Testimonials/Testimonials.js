import React, { useState, useEffect, useCallback } from "react";
import img1 from '../Img/Anuj-Kumar-Tigga.webp';
import img2 from '../Img/SK Sinha.jpeg';
import img3 from '../Img/Dr. RN Mahto.jpeg';
import img4 from '../Img/Dinesh-Bartwal.webp';
import img5 from '../Img/Sushil-Gupta.webp';
import './testimonials.css';

const testimonials = [
  {
    id: 1,
    // images: "./images/anuj.webp",
    images: img1,
    content:
      "Indian Intelligence Test (IIT) is a way forward for students looking for a prosperous and bright Career. I strongly recommend students of all classes from 5th to Std 12th that they go through the test and know their skill.",
    author: "Dr Anuj Kumar Tigga, Principal",
    location: "St. Paul's College, Ranchi"
  },
  {
    id: 2,
    images: img4,
    content:
      "Undoubtedly, the IIT test of Dainik Jagran inext has proved to be very helpful in increasing the aptitude level of the students. One of the student from Doon International School had won a prize in this test. IIT also proves to be a milestone in improving the logical and intellectual development of the students. The special thing is that every year students eagerly wait for this test and this time it is also.",
    author: "Mr Dinesh Bartwal, Principal",
    location: "Doon International School, Dehradun"
  },
  {
    id: 3,
    // image: "./Sushil-Gupta.webp",
    images: img5,
    content:
      " Indian Intelligence Test (IIT) is a platform where student's talents are being properly assessed. Along with parents, schools also get help in assessing the academic potential of the students. After a long time, this platform of Dainik Jagran inext will prove to be beneficial for the students. I request the students to take part in this wonderful test.",
    author: "Dr. Sushil Gupta, Director",
    location: "Prelude Public School, Agra."
  },
  {
    id: 4,
    images: img3,
    content:
      " दैनिक जागरण आइनेकसट की ओर से आयोजित इंडियन इंटेलिजेंस टेस्ट इससे बच्चों को खुद को एनालाइज करने में मदद मिलता है. किस फिल्ड में कैरियर बनाना चाहते हैं इस परीक्षा के माध्यम से उनको समझ में आता है। इससे स्कूल को भी लाभ होता है कि वह अपने बच्चों को सही दिशा में तैयारी कराना है.",
    author: "डॉक्टर आरएन महतो",
    location: "रामटहल चौधरी स्कूल"
  },
  {
    id: 5,
    images: img2,
    content:
      " इंडियन इंटेलिजेंस टेस्ट से बच्चों को उनकी एबिलिटी जानने का मौका मिलता है. बच्चे पढ़ाई तो करते हैं लेकिन वह किस कैरियर की ओर आगे बढ़ रहे हैं यह भी पता चलता है. रांची में यह टेस्ट हर साल आयोजित हो रहा है, इससे बच्चों को लाभ मिलता ही है. साथ ही स्कूल और टीचर को बच्चों के सही कैरियर की जानकारी मिलती है.",
    author: "एसके सिन्हा",
    location: "डीएवी गांधीनगर"
  }
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = useCallback(() => {
    const index =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(goToPrevious, 4000); // Change content every 4 seconds (4000 milliseconds)
    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentIndex, goToPrevious]);

  const goToNext = () => {
    const index = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(index);
  };

  return (
    <>
    <section id="testimonials">
      <div className="TCCount">
        <h1 className="TSTTl">Testimonials</h1>
        <div className="testimonial-container">
          <div className="navigation-buttons">
            <button onClick={goToPrevious}>&#9665;</button>
            <button onClick={goToNext}>&#9655;</button>
          </div>
          <div className="testimonial-content">
            <img
              className="testimonial-image"
              src={testimonials[currentIndex].images}
              alt="Author"
            />
            <p>{testimonials[currentIndex].content}</p>
            <p className="author" style={{ fontWeight: "bold" }}>
              {testimonials[currentIndex].author}
            </p>
            <p>{testimonials[currentIndex].location}</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Testimonial;
