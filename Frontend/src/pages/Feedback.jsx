import React, { useState } from "react";
import { FaExpand, FaInfoCircle, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import GradeReport from "./img1.jpg";
import SampleWork from "./img2.jpg"
import sam1 from "./sam1.jpg";
import sam2 from "./sam2.jpg";
import sam3 from "./sam3.jpg";
import sam4 from "./sam4.jpg";
import sam6 from "./sam6.jpg";
import sam5 from "./sam5.jpg";
import Header from './Header';
import Footer from './Footer';

const ImageModal = ({ src, onClose, children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-600"
      >
        <FaTimes />
      </button>
      <img src={src} alt="Full size" className="w-full h-auto" />
      <div className="p-4 bg-white">
        {children}
      </div>
    </div>
  </div>
);

const AcademicDashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

  const sampleWorks = [
    {
      image: sam1,
      title: "Responsive Web Design",
      code: "WD101",
      grade: "96.3%",
      description: "Created a fully responsive website for a virtual coffee shop using HTML, CSS, and JavaScript."
    },
    {
      image: sam2,
      title: "React Portfolio",
      code: "WD202",
      grade: "94.5%",
      description: "Developed a personal portfolio using React and Framer Motion to showcase web projects."
    },
    {
      image: sam3,
      title: "UI/UX Case Study",
      code: "UX305",
      grade: "97.8%",
      description: "A detailed case study redesigning the interface of a popular music streaming app."
    }, {
      image: sam4,
      title: "Brand Identity Proposal",
      code: "MKT310",
      grade: "95%",
      description: "Developed a complete branding guideline and visual assets for a startup fashion label."
    },
    {
      image: sam5,
      title: "Consumer Behavior Analysis",
      code: "BUS411",
      grade: "98.2%",
      description: "Analyzed buying patterns across Gen Z demographics and presented actionable insights."
    },
    {
      image: sam6,
      title: "Social Media Campaign Plan",
      code: "MKT320",
      grade: "100%",
      description: "Crafted a social campaign strategy for a new product launch, focusing on Instagram & TikTok."
    }
  ];
  

  return (
    <>
      <Header/>
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-100 font-sans text-gray-800">
      
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)}>
          <h3 className="text-xl font-bold mb-2">{selectedWork?.title}</h3>
          <p className="text-gray-600">{selectedWork?.description}</p>
          <div className="mt-4 flex gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {selectedWork?.code}
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              {selectedWork?.grade}
            </span>
          </div>
        </ImageModal>
      )}

      {/* Header Section */}
      <motion.header 
        className="text-center mb-12"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">
          🎓 2025 Academic Portfolio
        </h1>
        <p className="text-purple-600 text-sm md:text-base">
          Human Services - Substance Abuse Counseling
        </p>
      </motion.header>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { 
            code: "HUS-205-100", 
            name: "Intro to Group Processes",
            schedule: "Jan 14 - May 13, 2025",
            grade: "A"
          },
          { 
            code: "HUS-223-100", 
            name: "Behavior Management",
            schedule: "Jan 16 - May 8, 2025",
            grade: "A"
          },
          { 
            code: "SUB-122-100", 
            name: "Substance Abuse Pharmacology",
            schedule: "Jan 13 - May 14, 2025",
            grade: "A"
          }
        ].map((course, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
            initial={{ y: 20 }} animate={{ y: 0 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{course.name}</h3>
                <p className="text-sm text-gray-500">{course.code}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                {course.grade}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{course.schedule}</p>
            <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm">
              <FaInfoCircle /> View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Sample Work Section */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <h3 className="text-xl font-bold mb-6">📂 Academic Work Samples</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleWorks.map((work, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img 
                  src={work.image} 
                  alt="Sample work" 
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(work.image);
                    setSelectedWork(work);
                  }}
                />
                <button 
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100"
                  onClick={() => {
                    setSelectedImage(work.image);
                    setSelectedWork(work);
                  }}
                >
                  <FaExpand className="text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{work.title}</h4>
                <div className="flex gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {work.code}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {work.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Grade Reports */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <h3 className="text-xl font-bold mb-6">📊 Performance Reports</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "SAGES Overall", 
              score: "958/970", 
              percentage: "98.76%",
              image: GradeReport
            },
            { 
              title: "PSY-650-0500", 
              score: "983.77/1000", 
              percentage: "98.38%",
              image: GradeReport
            }
          ].map((report, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">{report.title}</h4>
                <button 
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                  onClick={() => setSelectedImage(report.image)}
                >
                  <FaExpand /> Expand
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full" 
                    style={{ width: report.percentage }}
                  ></div>
                </div>
                <span className="font-semibold text-green-600">
                  {report.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      
    </div>
      <Footer/>
    </>
  );
};

export default AcademicDashboard;
