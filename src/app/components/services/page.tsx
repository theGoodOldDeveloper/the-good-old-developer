import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "AI & ChatBot Solutions",
    description:
      "Cutting-edge AI solutions and chatbot integrations for businesses.",
  },
  {
    id: 2,
    title: "Ecommerce & Hospitality IT",
    description:
      "Scalable IT solutions for restaurants, hotels, and ecommerce platforms.",
  },
  {
    id: 3,
    title: "App Development & Infrastructure",
    description:
      "End-to-end app development and cloud-based infrastructure setup.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-5 border rounded-lg shadow-md cursor-pointer hover:shadow-xl"
            onClick={() => setSelectedService(service)}
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-semibold">{selectedService.title}</h3>
            <p className="mt-2">{selectedService.description}</p>
            <Link href="/contact">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Contact Us
              </button>
            </Link>
            <button
              className="mt-2 text-red-500"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
