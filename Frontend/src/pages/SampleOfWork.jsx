import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaUserTie } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import sample from "./sample.png";

const works = [
  {
    title: "Component Research Report",
    description:
      "Formal research paper including Python data pipeline, abstract, architecture diagrams, experiment results, and ARU Harvard references — focused on machine learning methodology and evaluation.",
    docLink: "/PDF1.pdf",
  },
  {
    title: "Engineering Management Report",
    description:
      "Case study on Innovare Motors: Discusses production planning & control (PPC), market demand fluctuations, EV manufacturing strategy, and modern tech integration (AI, IoT, VR).",
    docLink: "/PDF2.pdf",
  },
  {
    title: "Personal Effectiveness & Learning",
    description:
      "Self-reflection report based on leadership case studies (Elon Musk, Oscar Munoz), visual/social learning styles, online platforms (Coursera, LinkedIn Learning), and remote learning behavior.",
    docLink: "/PDF3.pdf",
  },
  {
    title: "Personal Effectiveness & Learning",
    description:
      "Self-reflection report based on leadership case studies (Elon Musk, Oscar Munoz), visual/social learning styles, online platforms (Coursera, LinkedIn Learning), and remote learning behavior.",
    docLink: "/fed1.pdf",
  },
];

export default function SampleOfWork() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto bg-white p-10 shadow-2xl rounded-3xl">
          {/* Title & Intro */}
          <div className="flex items-center gap-4 mb-8">
            <FaUserTie className="text-blue-600 text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
              Our Professional Work Showcase
            </h1>
          </div>

          <p className="text-gray-700 text-base md:text-lg mb-12 leading-relaxed">
            Browse a collection of in-depth academic and professional reports — designed to reflect technical skills, industry insight, and personal development through well-documented research and case analysis.
          </p>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>

          {/* Image section */}
          <div className="mt-16 text-center">
            <img
              src={sample}
              alt="Preview"
              className="w-64 h-64 object-cover mx-auto rounded-2xl shadow-lg border-4 border-blue-300"
            />
            <p className="mt-4 text-sm text-gray-500">
              Glimpse of our research quality and formatting
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function WorkCard({ title, description, docLink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220 }}
      className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg border border-blue-100"
    >
      <div className="flex items-center gap-2 mb-3">
        <FaFileAlt className="text-blue-600 text-xl" />
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">{description}</p>
      <a
        href={docLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-lg"
      >
        View Document
      </a>
    </motion.div>
  );
}
