import React from 'react';
import aboutImage from './About.png';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Laptop2, FileText } from 'lucide-react';

const About = () => {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[500px] h-[400px] bg-transparent">
              <img
                src={aboutImage}
                alt="About"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
              About <span className="text-blue-500">Our Project</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Welcome to your ultimate student companion! 🎓 This platform is designed to assist <strong>students, professionals, and educators</strong> with daily tasks — from assignments to project submissions and file optimizations.
            </p>
            <p className="text-gray-600 mb-4">
              We focus on making everything faster, smarter, and more accessible:
            </p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li><strong>Image Compression:</strong> Smart size reduction for submissions</li>
              <li><strong>PDF Tools:</strong> Clean, compress, and upload with ease</li>
              <li><strong>Assignment Help:</strong> Perfect for college & university submissions</li>
              <li><strong>Creative Design:</strong> Modern layout, mobile-friendly</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Whether you're a <strong>foreign student</strong> or working in your final year, this tool has got your back with speed and simplicity.
            </p>
          </motion.div>
        </div>

        {/* Highlighted Card Section */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">We support every student:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border transition-all duration-300">
              <Stethoscope className="text-blue-500 w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold text-xl mb-2">Medical College</h4>
              <p className="text-gray-600 text-sm">Project reports, PDFs, clinical notes</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border transition-all duration-300">
              <GraduationCap className="text-blue-500 w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold text-xl mb-2">Engineering Students</h4>
              <p className="text-gray-600 text-sm">Assignments, projects, diagrams</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border transition-all duration-300">
              <Laptop2 className="text-blue-500 w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold text-xl mb-2">College & School</h4>
              <p className="text-gray-600 text-sm">Notes, documents & presentations</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border transition-all duration-300">
              <FileText className="text-blue-500 w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold text-xl mb-2">And Many More</h4>
              <p className="text-gray-600 text-sm">For every academic & creative need!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
