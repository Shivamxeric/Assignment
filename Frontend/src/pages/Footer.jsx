import React from 'react';
import { Github, Twitter, Mail, Users, Star, Clock, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 border-t border-blue-300 shadow-inner py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          <Stat icon={<Users className="text-blue-600" />} value="10K+" label="Students Helped" />
          <Stat icon={<Star className="text-yellow-500" />} value="4.9/5" label="Satisfaction Rate" />
          <Stat icon={<Clock className="text-green-500" />} value="500+" label="Experts Online" />
          <Stat icon={<ShieldCheck className="text-purple-600" />} value="100%" label="Plagiarism Free" />
        </div>

        {/* Divider */}
        <div className="border-t border-blue-200 my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 gap-4">
          <div className="font-bold text-blue-700 text-lg flex items-center gap-2">
            📘 STUDYSPHERE
          </div>

          <div className="text-center md:text-left">
            © {new Date().getFullYear()} STUDYSPHERE. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 text-blue-600">
            <SocialLink href="https://github.com/shivamxeric" icon={<Github size={20} />} />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
            <SocialLink href="mailto:STUDYSPHERE@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const Stat = ({ icon, value, label }) => (
  <div className="flex flex-col items-center">
    <div className="mb-2">{icon}</div>
    <div className="text-xl font-bold text-gray-800">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 hover:text-black"
  >
    {icon}
  </a>
);

export default Footer;
