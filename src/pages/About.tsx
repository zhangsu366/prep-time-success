import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';
const About = () => {
  const stats = [{
    number: '500+',
    label: 'Students Tutored',
    icon: Users
  }, {
    number: '200+',
    label: 'Avg. Score Increase',
    icon: Target
  }, {
    number: '5+',
    label: 'Years Experience',
    icon: BookOpen
  }, {
    number: '98%',
    label: 'Success Rate',
    icon: Award
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hill Scholars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're dedicated to helping students achieve their highest potential on the SAT through 
              personalized in-person tutoring and proven educational strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced tutors are passionate educators committed to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: 'Dr. Sarah Johnson',
            role: 'Lead SAT Instructor',
            education: 'Ph.D. in Mathematics, Harvard University',
            experience: '8 years of SAT tutoring experience'
          }, {
            name: 'Michael Chen',
            role: 'Reading & Writing Specialist',
            education: 'M.A. in English Literature, Stanford University',
            experience: '6 years of SAT prep experience'
          }, {
            name: 'Emily Rodriguez',
            role: 'Math Specialist',
            education: 'M.S. in Mathematics, MIT',
            experience: '5 years of SAT math tutoring'
          }].map((member, index) => {})}
          </div>
        </div>
      </section>
    </div>;
};
export default About;