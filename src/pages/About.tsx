
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

  return (
    <div className="min-h-screen">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower students with the knowledge, skills, and confidence needed to excel on the SAT 
              and achieve their college dreams through personalized, high-quality tutoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                Every student learns differently. We tailor our teaching methods to match your unique learning style and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our students see an average score increase of 200+ points, with 98% achieving their target scores.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Our tutors are highly qualified educators with advanced degrees and years of SAT prep experience.
              </p>
            </div>
          </div>
        </div>
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
            }].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
