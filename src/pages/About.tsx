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
              <p className="text-lg text-gray-700 mb-6">At Hill Scholars, we believe every student has the potential to excel. Our mission is to provide personalized, high-quality, affordable, In-person SAT Math preparation that adapts to each student's unique learning style and goals.</p>
              <p className="text-lg text-gray-700 mb-6">We don't just teach test-taking strategies – we build interest, confidence, critical thinking skills, and academic foundations that serve students throughout their educational journey.</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Approach</h4>
                    <p className="text-gray-600">Every session is tailored to your specific needs and learning style. Whether you're just two months away from taking the SAT or looking to build a solid math foundation over the next several years, there's a personalized plan designed for you.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Methods</h4>
                    <p className="text-gray-600">Our strategies are based on years of experience and student success. All classes will be held in person because we are strong believers that in-person sessions provide the most effective and engaging learning experience, allowing for real-time feedback, deeper understanding, and stronger accountability.</p>
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
      
    </div>;
};
export default About;