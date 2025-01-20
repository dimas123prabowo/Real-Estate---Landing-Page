import React, { useState } from "react";
import Faq1 from "../assets/Faq1.png";
import IconDropDown from "../assets/IconDropDown.png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are there any additional costs after purchase?",
      answers: [
        "1. Property Taxes: Annual taxes based on the property's value, varying by location.",
        "2. Notary Fees: Costs for legal services related to the transaction.",
        "3. Maintenance Costs: Regular expenses for home upkeep and repairs.",
        "4. Home Insurance: Coverage to protect against damage or loss, with costs varying by coverage level and location.",
        "5. Utility Bills: Ongoing expenses for water, electricity, gas, and waste management.",
      ],
    },
    {
      question: "What is included in the house price?",
      answers: [
        "The house price includes property tax for the first year. Subsequent year taxes are the responsibility of the buyer.",
      ],
    },
    {
      question: "Is this home a good investment?",
      answers: [
        "This home is located in a rapidly developing area with increasing property values. It also features high-quality construction, energy-efficient systems, and modern amenities that will appeal to a wide range of potential buyers or renters.",
      ],
    },
    {
      question: "What about warranties or home maintenance?",
      answers: [
        "The home comes with a standard builder’s warranty that covers any structural defects or issues with major systems (such as plumbing, electrical, or HVAC) for the first 1-2 years after purchase. Additionally, many of the appliances in the home come with their own manufacturer warranties that typically last for 5-10 years.",
      ],
    },
    {
      question: "Is there a warranty for the property?",
      answers: [
        "The home is covered by a standard warranty that includes major systems and appliances. Contact us for more details.",
      ],
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="flex flex-col gap-16 py-8 md:py-16 px-5 md:px-20 scroll-smooth"
    >
      <h1 className="font-sora text-[28px] md:text-[40px] text-white leading-[36px] md:leading-[44px]">
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-4 border-b border-gray-600 pb-6"
        >
          {/* Header Pertanyaan */}
          <div
            onClick={() => handleToggle(index)}
            className="flex flex-row justify-between items-center w-full cursor-pointer"
          >
            <h4 className="font-sora font-semibold text-[20px] md:text-[28px] text-white leading-[28px] md:leading-[32px]">
              {faq.question}
            </h4>
            <img
              src={IconDropDown}
              alt="Icon Drop Down"
              className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] transform transition-transform duration-300 ease-in-out ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown Content */}
          <div
            className={`flex flex-col md:flex-row overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 pt-4">
              {faq.answers.map((answer, i) => (
                <p
                  key={i}
                  className="font-sora text-[14px] md:text-[20px] text-neutral-500 w-full md:w-[950px]"
                >
                  {answer}
                </p>
              ))}
            </div>

            {/* Gambar hanya untuk FAQ pertama */}
            {index === 0 && (
              <img
                src={Faq1}
                alt="FAQ Illustration"
                className="w-[180px] h-[100px] md:w-[246.19px] md:h-[138px] rotate-4 mt-4"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
