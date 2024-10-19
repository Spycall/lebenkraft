import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import stethoscope from "../assets/stethoscope-icon.svg";
import treatment from "../assets/medical-kit-icon.svg";
import medical from "../assets/hospital-plus-icon.svg";
import hospital from "../assets/hospital-plus-icon.svg";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Outpatient care",
    description:
      "We take over the outpatient care/basic care according to SGB XI for you!",
    icon: stethoscope,
    link: "/services",
  },
  {
    title: "Treatment care",
    description:
      "We take over the complete treatment care according to SGB XI for you!",
    icon: treatment,
    link: "/services",
  },
  {
    title: "Intensive care & ventilation care",
    description: "We are specialists in intensive care and respiratory care!",
    icon: medical,
    link: "/services",
  },
  {
    title: "Domestic care",
    description: "We take care of your household needs!",
    icon: hospital,
    link: "/services",
  },
];

const Cards = ({ service }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-6 mt-10 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`border-dashed border border-[#5E2866] rounded-lg p-6 w-full text-center flex flex-col justify-between ${
            service ? "bg-[#BB2E94] text-white" : ""
          }`}
        >
          <img
            src={card.icon}
            alt={card.title}
            className="mx-auto mb-4 w-12 h-12"
          />
          <h3
            className={`${
              service ? "text-white" : ""
            } text-xl font-semibold text-[#5E2866] mb-2`}
          >
            {card.title}
          </h3>
          <p
            className={`text-sm text-gray-600 mb-4 ${
              service ? "text-white" : ""
            }`}
          >
            {card.description}
          </p>
          <Link
            to={card.link}
            className={`bg-[#5E2866] text-white px-4 py-2 rounded-[0_0_20px_0] text-sm self-end w-fit transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#BB2E94] hover:text-white ${
              service ? "!text-[#5e2866] bg-white" : ""
            }`}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
