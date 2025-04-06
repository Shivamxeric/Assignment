import React from 'react';
import contactImage from './Contact.png';
import HeaderTwo from './Header';
import Footer from './Footer';
import { PhoneCall, Mail, MessageCircle } from 'lucide-react';

const Contact = () => { 
  return (
    <>
      <HeaderTwo />

      <section className="min-h-screen pt-24 px-4 py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 animate-fade-in-left">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full rounded-3xl border border-blue-200 shadow-lg"
            />
          </div>

          {/* Text & Contact Info */}
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in-right">
            <h2 className="text-4xl font-extrabold text-blue-700">Get in Touch</h2>
            <p className="text-gray-700 text-lg">
              Whether you're from a <strong>Medical or Engineering college</strong>,
              a <strong>student working on assignments</strong>, or a foreign learner — we're here to support you!
            </p>
            <div className="space-y-3 text-gray-800 text-md">
              <p>📍 Location: Faridabad, Haryana</p>
              <p>📞 Phone: <a className="text-blue-600 hover:underline" href="tel:+919582516409">+91 70673 41687</a></p>
              <p>📧 Email: <a className="text-blue-600 hover:underline" href="mailto:jhashivam884@gmail.com">jhashivam884@gmail.com</a></p>
              <p>🌐 Portfolio: <a className="text-blue-600 hover:underline" href="https://github.com/shivamxeric" target="_blank" rel="noreferrer">shivamxeric</a></p>
            </div>
            <p className="text-gray-600">
              Feel free to reach out for <strong>assignment help, project collaboration, or feedback</strong> about our tools.
            </p>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4 text-blue-600">
              <PhoneCall size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700"><a href="tel:+91 70673 41687">+91 70673 41687</a></p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4 text-blue-600">
              <Mail size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-700"><a href="mailto:jhashivam884@gmail.com">jhashivam884@gmail.com</a></p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4 text-green-500">
              <MessageCircle size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-700">+91 70673 41687</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
