import React from 'react';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your SAT Tutoring Session</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to book a personalized 50-minute tutoring session with one of our expert instructors
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Select a convenient time slot below. Please ensure you have your student information ready including grade level and target scores.
            </p>
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/susu2966/30min" 
              style={{minWidth: '320px', height: '700px'}}
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* Calendly inline widget end */}
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t">
            <p className="text-sm text-gray-600">
              <strong>Please have ready:</strong> Student name, email, phone, grade (9-12), target score, current score, 
              subject selection (Grade 3-5 Math, Middle School Math, High School Math, SAT Math Prep)
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Having trouble booking? Please <a href="/contact" className="text-blue-600 hover:text-blue-800">contact us</a> directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
