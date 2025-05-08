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
          
          {/* Image Animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImage}
              alt="About our services"
              className="w-[500px] h-[400px] object-contain rounded-xl shadow-xl"
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
              About <span className="text-blue-500">Our Platform</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Welcome to your all-in-one academic and professional support solution. At our core, we assist <strong>students, educators, and professionals</strong> with high-quality assignments, smart tools, and seamless digital solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Backed by a team of experienced professionals with <strong>8–9 years</strong> of industry knowledge, we offer support across every field — from <span className="text-blue-600 font-semibold">technology</span> to <span className="text-blue-600 font-semibold">non-tech</span> and <span className="text-blue-600 font-semibold">medical</span> domains.
            </p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Fast & reliable project submission tools</li>
              <li>Academic writing tailored for university success</li>
              <li>Creative layouts optimized for mobile & desktop</li>
              <li>Responsive and plagiarism-free document support</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We’re here to make learning and submitting projects effortless, no matter what stage you’re at in your academic journey.
            </p>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="mt-24 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">Trusted by Students Across Fields:</h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[{
              icon: <Stethoscope className="text-blue-500 w-10 h-10 mx-auto mb-3" />,
              title: "Medical Colleges",
              desc: "Clinical reports, research summaries & more"
            }, {
              icon: <GraduationCap className="text-blue-500 w-10 h-10 mx-auto mb-3" />,
              title: "Engineering Students",
              desc: "Diagrams, code logic & major projects"
            }, {
              icon: <Laptop2 className="text-blue-500 w-10 h-10 mx-auto mb-3" />,
              title: "Colleges & Schools",
              desc: "Notes, assignments & presentations"
            }, {
              icon: <FileText className="text-blue-500 w-10 h-10 mx-auto mb-3" />,
              title: "And Many More",
              desc: "Covering every academic and creative stream"
            }].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {card.icon}
                <h4 className="font-semibold text-xl mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
