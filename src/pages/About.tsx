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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Hill Scholars, we believe every student has the potential to excel. Our mission is to 
                provide personalized, high-quality, In-person SAT preparation that adapts to each student's 
                unique learning style and goals.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We don't just teach test-taking strategies – we build confidence, critical thinking 
                skills, and academic foundations that serve students throughout their educational journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Approach</h4>
                    <p className="text-gray-600">Every session is tailored to your specific needs and learning style.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Methods</h4>
                    <p className="text-gray-600">Our strategies are based on years of experience and student success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">We're with you every step of the way, from first session to test day.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Individual Attention</h4>
                  <p className="text-gray-600">Small class sizes and 1-on-1 sessions ensure you get the attention you deserve.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Real Results</h4>
                  <p className="text-gray-600">Our students consistently achieve significant score improvements.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Materials</h4>
                  <p className="text-gray-600">Access to extensive practice tests, study guides, and resources.</p>
                </div>
              </div>
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
          }].map((member, index) => <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;