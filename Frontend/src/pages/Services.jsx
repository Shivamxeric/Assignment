import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';


const servicesList = [
  'Weekly Assignment',
   'Management',
  'Marketing',
  'Dissertations',
   'Project Management',
  'Law & History',
  'Statistics',
  'Economics',
 ' Law',
  
  'Essay writing',
  'History',
  'Philosophy',
  'Nursing',
  
  'Sociology',
  'Medicine',
  'International Relations',
  'HTML',
  'PHP',
  'Java',
  'JavaScript',
  'CSS',
  'Ruby',
  'Perl',
  'Python',
  'XML',
  'Business Studies',
  'Business Analytics',
 
  'Account & Finance',
  'Risk Management',
  'MBA, BA, MFA, MAIS, BABA',
  'Mechanical Engineering',
  'Aerospace Engineering',
  'IT & Computer Science',
  'Industrial Engineering',
  'Electrical & Electronics Engineering',
  'Civil & Structural Engineering',
  'System Analysis',
  'MATLAB, Simulink, MINITAB',
  'Research Proposals',
  'Literature Review',
  'Programming & Software Development',
  'Psychology',
 
  'Pharmacy & Bio Sciences',
  'Health & Social Care'
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredServices = servicesList.filter(service =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateRating = () => {
    const stars = (Math.random() * 1 + 4).toFixed(1); // 4.0 - 5.0
    const likes = Math.floor(Math.random() * 6000 + 2000); // 2000 - 8000
    return { stars, likes };
  };

  return (
    <>
    <Header/>
    
    <section className="min-h-screen pt-24 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-800">OUR Services </h1>
        <p className="text-lg mt-2 text-gray-600">Explore our wide range of academic assistance</p>
      </div>


      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="w-full max-w-lg px-5 py-3 rounded-full shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => {
          const { stars, likes } = generateRating();
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.5, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-blue-200 hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{service}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Expert help available in this subject. Guaranteed plagiarism-free, on-time delivery.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                {/* Fake Rating */}
                <div className="flex items-center gap-2 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(stars) ? '#facc15' : 'none'}
                      strokeWidth={1.5}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">{stars} Stars</span>
                </div>

                {/* Fake Likes */}
                <div className="text-gray-400 text-sm">👍 {likes.toLocaleString()} people liked this</div>

                {/* Contact Us Button */}
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">No matching service found.</p>
      )}
    </section>
    <Footer/>
    </>
  );
};

export default Services;
