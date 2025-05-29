
import React from 'react';
import { ArrowRight, Star, Users, BookOpen, Clock, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Tailored tutoring sessions designed to address your specific strengths and weaknesses.'
    },
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Learn from experienced educators with proven track records of SAT success.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: '50-minute sessions scheduled at your convenience with easy online booking.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Our students consistently achieve score improvements of 200+ points.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      score: '1520',
      text: 'The personalized attention helped me improve my math score by 180 points!'
    },
    {
      name: 'Michael Chen',
      score: '1480',
      text: 'Amazing tutors who made SAT prep actually enjoyable and effective.'
    },
    {
      name: 'Emma Davis',
      score: '1550',
      text: 'I got into my dream college thanks to the incredible support here.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master the SAT with
                <span className="text-blue-200"> Expert Tutoring</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Boost your SAT scores with personalized 1-on-1 tutoring sessions. 
                Our proven methods help students achieve their college dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/schedule"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/practice"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  Try Practice Test
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-200 mb-2">200+</div>
                  <div className="text-lg text-blue-100">Average Score Improvement</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-blue-200">Students Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our SAT Tutoring?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expert instruction with personalized attention to help you achieve your best possible SAT score.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our tutoring has helped students achieve their goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">SAT Score: {testimonial.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your SAT Score?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have achieved their dream scores with our expert tutoring.
          </p>
          <Link
            to="/schedule"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
