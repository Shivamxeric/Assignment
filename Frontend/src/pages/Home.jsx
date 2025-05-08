import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FileText, ImageIcon, Code, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import bg from './cleint.jpg';
import About from './About';  
import Contact from './Contact';
import { FaTools, FaComments } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className="min-h-screen relative bg-transparent text-gray-800 pb-24 overflow-hidden">
   
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center blur-sm opacity-60 -z-20"
          style={{ backgroundImage: `url(${bg})`, backgroundColor: "#f0f8ff" }}
        />

        {/* Animated Gradient Circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_#e0f2fe_20%,_#f0fdfa_50%,_#fae8ff_80%)] opacity-30"></div>

          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              initial={{
                y: Math.random() * 100,
                x: Math.random() * 100,
                scale: 0.5
              }}
              animate={{
                y: [0, 100, 0],
                x: [0, 50, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* Floating Gradients */}
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-2xl opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-2xl opacity-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="relative text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 text-gray-900">
          <div className="max-w-4xl mx-auto">
            <motion.h1
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 mt-6"
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    STUDYSPHERE
  </span>
</motion.h1>

<motion.span
  className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  Your Academic Success Partner
</motion.span>
            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700 mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Trusted by 10,000+ students worldwide. Get 24/7 expert assistance with assignments,
              projects, and online coursework.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg">
                Start Now
              </Link>
              <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all">
                How It Works
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="mt-10 flex flex-wrap justify-center items-center gap-6 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>500+ Subject Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span>100% Confidential</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-12">
              Comprehensive Academic Support
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              variants={{ hidden: {}, visible: {} }}
            >
              {/* Service Card Component */}
              {[{
                title: "Assignment ",
                icon: <FileText className="w-8 h-8 text-blue-600" />,
                bg: "bg-blue-100",
                points: ["Formative/submmative assigements", "Desertation ", "Case Studies"]
              }, {
                title: "College Projects",
                icon: <ImageIcon className="w-8 h-8 text-green-600" />,
                bg: "bg-green-100",
                points: ["Final Year Projects", "Research Proposals", "Thesis Writing"]
              }, {
                title: "Online Work",
                icon: <Code className="w-8 h-8 text-purple-600" />,
                bg: "bg-purple-100",
                points: ["Web Dev", "Data Analysis", "Documentation"]
              }].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all group relative overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`p-4 mx-auto mb-6 rounded-xl ${service.bg} w-fit`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {service.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 items-center px-4 mt-10">
  <Link to="/sample">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-lg text-white w-72 text-center cursor-pointer"
    >
      <FaTools size={30} className="mx-auto mb-3" />
      <h2 className="text-lg font-semibold">Sample of Works</h2>
      <p className="text-sm mt-2">Explore practical tasks with accuracy, digital flow & ERP use.</p>
    </motion.div>
  </Link>
  <Link to="/feedback">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 rounded-2xl shadow-lg text-white w-72 text-center cursor-pointer"
    >
      <FaComments size={30} className="mx-auto mb-3" />
      <h2 className="text-lg font-semibold">Feedback</h2>
      <p className="text-sm mt-2">Share how we helped improve your academic success.</p>
    </motion.div>
  </Link>
</div>


        {/* Why Choose Us */}
        <section className="py-12 px-4 sm:px-6 md:px-16 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Why Choose StudySphere?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <CheckCircle className="text-green-500" />, title: "Quality Assurance", desc: "Plagiarism-free & reviewed by experts" },
                  { icon: <Users className="text-blue-500" />, title: "Expert Team", desc: "500+ professionals across subjects" },
                  { icon: <Clock className="text-purple-500" />, title: "24/7 Support", desc: "Always available for deadlines" },
                  { icon: <Shield className="text-red-500" />, title: "Confidential", desc: "Private and secure handling of your work" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                  >
                    <div className="w-6 h-6 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg text-sm">
          Start Now
        </Link>
      </div>
<About/>
<Contact/>
    </>
  );
};

export default Home;