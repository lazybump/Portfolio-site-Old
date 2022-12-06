import React, { useState } from "react";
import faqData from "../public/data/faq.json";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(1);

  const toggle = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div className="max-w-[1240px] mx-auto my-32 p-8 space-y-10 shadow-xl shadow-gray-400 rounded-xl">
      {faqData.map((faqItem) => (
        <div key={faqItem.id} className="">
          <header
            className="flex justify-between p-4 rounded-lg cursor-pointer"
            onClick={() => toggle(faqItem.id)}
          >
            <h3>{faqItem.question}</h3>
            <span className="font-bold">
              {selected === faqItem.id ? "-" : "+"}
            </span>
          </header>
          <p className={`p-4 mt-6 ${selected === faqItem.id ? "" : "hidden"}`}>
            {faqItem.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
