import React, { useState } from "react";
import "./FAQ.css"; // Import the corresponding CSS file

const FAQ = () => {
  const [faqData, setFaqData] = useState({
    registration: [
      // Registration FAQ data
      {
        question: " 1. What is the fee for the Indian Intelligence Test?",
        answer:
          " The fee is INR 150/- inclusive of GST/online transaction charges of the bank. Please note that a candidate needs to pay the registration fee only once. The fee once paid will not be refunded in any circumstances."
      }
    ],
    payment: [
      // Payment FAQ data
      {
        question: " 1. What is the fee for the Indian Intelligence Test?",
        answer:
          " The fee is INR 150/- inclusive of GST/online transaction charges of the bank. Please note that a candidate needs to pay the registration fee only once. The fee once paid will not be refunded in any circumstances."
      }
    ]
  });

  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories({
      ...openCategories,
      [category]: !openCategories[category]
    });
  };

  return (
   <section id="faq">
     <div className="faq-container">
      <h1 className="FAQttl">FAQ</h1>
      {Object.keys(faqData).map((category, index) => (
        <div
          className={`faq-category ${openCategories[category] ? "open" : ""}`}
          key={index}
        >
          <h3>{category}</h3>
          <div className="faq-toggle" onClick={() => toggleCategory(category)}>
            {openCategories[category] ? "-" : "+"}
          </div>
          {openCategories[category] && (
            <div className="faq-dropdown">
              {faqData[category].map((item, index) => (
                <div className="faq-item" key={index}>
                  <div className="faq-question">{item.question}</div>
                  <div className="faq-answer">{item.answer}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
   </section>
  );
};

export default FAQ;
