import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    targetScore: '',
    currentScore: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const subjects = [
    { value: 'grade2-4', label: 'Grade 2-4 Math', description: 'Basic arithmetic, introduction to fractions' },
    { value: 'grade5-8', label: 'Grade 5-8 Math', description: 'Pre-algebra, decimals, percentages' },
    { value: 'grade9', label: 'Grade 9 Math', description: 'Algebra I, linear equations' },
    { value: 'grade10', label: 'Grade 10 Math', description: 'Geometry, proofs, trigonometry basics' },
    { value: 'grade11', label: 'Grade 11 Math', description: 'Algebra II, advanced functions' },
    { value: 'grade12', label: 'Grade 12 Math & SAT Prep', description: 'Pre-calculus, SAT Math preparation' }
  ];

  const availableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const appointmentData = {
        student_name: studentInfo.name,
        student_email: studentInfo.email,
        student_phone: studentInfo.phone,
        student_grade: studentInfo.grade || null,
        target_score: studentInfo.targetScore ? parseInt(studentInfo.targetScore) : null,
        current_score: studentInfo.currentScore ? parseInt(studentInfo.currentScore) : null,
        subject: selectedSubject,
        appointment_date: selectedDate,
        appointment_time: selectedTime,
        status: 'scheduled'
      };

      console.log('Submitting appointment data:', appointmentData);

      const { data, error } = await supabase
        .from('appointments')
        .insert([appointmentData])
        .select();

      if (error) {
        console.error('Error creating appointment:', error);
        toast({
          title: "Error",
          description: "Failed to schedule your session. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log('Appointment created successfully:', data);

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke('send-confirmation-email', {
        body: {
          type: 'appointment',
          name: studentInfo.name,
          email: studentInfo.email,
          phone: studentInfo.phone,
          appointmentDetails: {
            date: formatDate(selectedDate),
            time: selectedTime,
            subject: subjects.find(s => s.value === selectedSubject)?.label || selectedSubject,
            duration: '50 minutes'
          }
        }
      });

      if (emailError) {
        console.error('Error sending confirmation email:', emailError);
        toast({
          title: "Session Scheduled!",
          description: "Your session was scheduled successfully, but we couldn't send a confirmation email.",
        });
      } else {
        toast({
          title: "Success!",
          description: "Your SAT tutoring session has been scheduled and a confirmation email has been sent.",
        });
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setStudentInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Session Scheduled!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for booking your SAT tutoring session. We've sent a confirmation email with all the details.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Session Details:</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subject:</span>
                  <span className="font-medium">{subjects.find(s => s.value === selectedSubject)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">50 minutes</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setSelectedDate('');
                setSelectedTime('');
                setSelectedSubject('');
                setStudentInfo({
                  name: '',
                  email: '',
                  phone: '',
                  grade: '',
                  targetScore: '',
                  currentScore: ''
                });
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Another Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your SAT Tutoring Session</h1>
          <p className="text-xl text-gray-600">
            Book a personalized 50-minute tutoring session with one of our expert instructors
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Student Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 mr-2 text-blue-600" />
                Student Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={studentInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={studentInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                    <select
                      value={studentInfo.grade}
                      onChange={(e) => handleInputChange('grade', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select grade</option>
                      <option value="9">9th Grade</option>
                      <option value="10">10th Grade</option>
                      <option value="11">11th Grade</option>
                      <option value="12">12th Grade</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Score</label>
                    <input
                      type="number"
                      value={studentInfo.targetScore}
                      onChange={(e) => handleInputChange('targetScore', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1500"
                      min="400"
                      max="1600"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current/Practice Score</label>
                  <input
                    type="number"
                    value={studentInfo.currentScore}
                    onChange={(e) => handleInputChange('currentScore', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1200"
                    min="400"
                    max="1600"
                  />
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="space-y-6">
              {/* Subject Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-blue-600" />
                  Session Details
                </h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Subject *</label>
                  <div className="space-y-3">
                    {subjects.map((subject) => (
                      <label key={subject.value} className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="subject"
                          value={subject.value}
                          checked={selectedSubject === subject.value}
                          onChange={(e) => setSelectedSubject(e.target.value)}
                          className="mt-1 text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <div>
                          <div className="font-medium text-gray-900">{subject.label}</div>
                          <div className="text-sm text-gray-600">{subject.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date *</h3>
                <div className="grid grid-cols-2 gap-2">
                  {availableDates().map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                        selectedDate === date
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {new Date(date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        weekday: 'short'
                      })}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Select Time *
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-lg border-2 transition-colors ${
                        selectedTime === time
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Each session is 50 minutes long. All times are in your local timezone.
                </p>
              </div>
            </div>
          </div>

          {/* Summary and Submit */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Summary</h3>
            {selectedDate && selectedTime && selectedSubject ? (
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Date:</span>
                    <div className="font-medium">{formatDate(selectedDate)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Time:</span>
                    <div className="font-medium">{selectedTime} (50 min)</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Subject:</span>
                    <div className="font-medium">{subjects.find(s => s.value === selectedSubject)?.label}</div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 mb-6">Please select date, time, and subject to see session summary.</p>
            )}
            
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime || !selectedSubject || !studentInfo.name || !studentInfo.email || !studentInfo.phone || isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Session'}
            </button>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              By scheduling a session, you agree to our terms of service. You'll receive a confirmation email shortly.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
