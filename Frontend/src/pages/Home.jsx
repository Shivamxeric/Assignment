import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FileText, ImageIcon, Code } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 text-gray-900">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-blue-600">Student’s Utility Hub</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Unlock a world of opportunities for your projects, assignments, and online ventures — all in one place.
        </p>
        <p className="text-sm mt-4 italic text-gray-500">
          🚀 Empowering Students | ✍️ Assisting Assignments | 💻 Web Development
        </p>
      </section>

      {/* Offers Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Assistance */}
          <div className="bg-white border p-6 rounded-2xl hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">Assignment Help</h3>
            <p className="text-sm text-center mt-2 text-gray-500">
              Get professional help with your assignments and study material.
            </p>
            <Link to="/assignment-help" className="mt-4 block text-center text-blue-600 hover:underline">
              Get Assistance
            </Link>
          </div>

          {/* Project Help */}
          <div className="bg-white border p-6 rounded-2xl hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <ImageIcon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">College Projects</h3>
            <p className="text-sm text-center mt-2 text-gray-500">
              Complete guidance for your academic and final year projects.
            </p>
            <Link to="/college-projects" className="mt-4 block text-center text-green-600 hover:underline">
              Learn More
            </Link>
          </div>

          {/* Online Work */}
          <div className="bg-white border p-6 rounded-2xl hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Code className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">Online Work</h3>
            <p className="text-sm text-center mt-2 text-gray-500">
              Need help with freelance, data entry, or digital tasks? We’re here.
            </p>
            <Link to="/online-work" className="mt-4 block text-center text-red-600 hover:underline">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-sm mt-2 text-gray-500">Modern, responsive websites using HTML, CSS, JS, and React.</p>
          </div>
          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Assignment Projects</h3>
            <p className="text-sm mt-2 text-gray-500">Academic writing, presentations, and documentation made easy.</p>
          </div>
          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Freelance & Online Work</h3>
            <p className="text-sm mt-2 text-gray-500">Professional support for online tasks like data entry and content.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
