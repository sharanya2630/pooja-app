// src/pages/PackageCardPage.js
import React from "react";
import PackageCard from "../components/PackageCard";
import "./PackageCardPage.css";

const packages = [
  {
    id: 1,
    price: "₹851",
    name: "Individual Puja",
    details:
      "Puja for 1 Person\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: false,
  },
  {
    id: 2,
    price: "₹1251",
    name: "Partner Puja",
    details:
      "Puja for 2 People\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: true,
  },
  {
    id: 3,
    price: "₹2001",
    name: "Family + Bhog",
    details:
      "Puja for 4 People\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Bhog consisting of fruits, sweets, and dry fruits will be offered to Maa Bagalamukhi at Maa Bagalamukhi Temple.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: false,
  },
  {
    id: 4,
    price: "₹3001",
    name: "Joint Family + Bhog + Flower Basket",
    details:
      "Puja for 6 People\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Bhog consisting of fruits, sweets, and dry fruits will be offered to Maa Bagalamukhi at Maa Bagalamukhi Temple along with floral tributes.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: true,
  },
  {
    id: 5,
    price: "₹851",
    name: "Individual Puja",
    details:
      "Puja for 1 Person\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: false,
  },
  {
    id: 6,
    price: "₹1251",
    name: "Partner Puja",
    details:
      "Puja for 2 People\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: true,
  },
  {
    id: 7,
    price: "₹2001",
    name: "Family + Bhog",
    details:
      "Puja for 4 People\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Bhog consisting of fruits, sweets, and dry fruits will be offered to Maa Bagalamukhi at Maa Bagalamukhi Temple.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: false,
  },
  {
    id: 8,
    price: "₹3001",
    name: "Joint Family + Bhog + Flower Basket",
    details:
      "Puja for 6 People\n\n- Pandit ji will call out your name and gotra during the puja sankalp.\n- Bhog consisting of fruits, sweets, and dry fruits will be offered to Maa Bagalamukhi at Maa Bagalamukhi Temple along with floral tributes.\n- Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.\n- Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.\n- Sacred tirth prasad will be sent.",
    highlighted: true,
  },
];

const PackageCardPage = () => {
  return (
    <div className="package-card-page">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
};

export default PackageCardPage;
