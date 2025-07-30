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
              Please complete all fields in the form below. You'll receive a confirmation email once your session is scheduled.
            </p>
            {/* Replace this iframe src with your actual Google Form embed URL */}
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Schedule SAT Tutoring Session"
              className="border-0"
            >
              Loading form...
            </iframe>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t">
            <p className="text-sm text-gray-600">
              <strong>Form includes:</strong> Student name, email, phone, grade (9-12), target score, current score, 
              subject selection (Grade 3-5 Math, Middle School Math, High School Math, SAT Math Prep), preferred dates and times
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Having trouble with the form? Please <a href="/contact" className="text-blue-600 hover:text-blue-800">contact us</a> directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
