import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Schedule = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const { toast } = useToast();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    toast({
      title: "Information Submitted",
      description: "Please select a time slot below to complete your booking.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your SAT Tutoring Session</h1>
          <p className="text-xl text-gray-600">
            Fill out your information below and then select a convenient time slot for your personalized 50-minute tutoring session
          </p>
        </div>

        {/* Student Information Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
            <CardDescription>
              Please provide your details before selecting a time slot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="studentName">Student Name *</Label>
                  <Input
                    id="studentName"
                    {...register('studentName', { required: 'Student name is required' })}
                    className="mt-1"
                  />
                  {errors.studentName && (
                    <p className="text-red-600 text-sm mt-1">{errors.studentName.message as string}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message as string}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message as string}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="grade">Grade Level *</Label>
                  <Select onValueChange={(value) => setValue('grade', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="k-2">Grade K-2</SelectItem>
                      <SelectItem value="3-5">Grade 3-5</SelectItem>
                      <SelectItem value="6-8">Grade 6-8</SelectItem>
                      <SelectItem value="9">Grade 9</SelectItem>
                      <SelectItem value="10">Grade 10</SelectItem>
                      <SelectItem value="11">Grade 11</SelectItem>
                      <SelectItem value="12">Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="currentScore">Current SAT Score</Label>
                  <Input
                    id="currentScore"
                    type="number"
                    min="400"
                    max="1600"
                    {...register('currentScore')}
                    className="mt-1"
                    placeholder="e.g., 1200"
                  />
                </div>

                <div>
                  <Label htmlFor="targetScore">Target SAT Score</Label>
                  <Input
                    id="targetScore"
                    type="number"
                    min="400"
                    max="1600"
                    {...register('targetScore')}
                    className="mt-1"
                    placeholder="e.g., 1500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject Selection *</Label>
                <Select onValueChange={(value) => setValue('subject', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select subject area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-k2-math">Grade K-2 Math</SelectItem>
                    <SelectItem value="grade3-5-math">Grade 3-5 Math</SelectItem>
                    <SelectItem value="middle-school-math">Middle School Math</SelectItem>
                    <SelectItem value="high-school-math">High School Math</SelectItem>
                    <SelectItem value="sat-math-prep">SAT Math Prep</SelectItem>
                    <SelectItem value="gre-math-prep">GRE Math Prep</SelectItem>
                    <SelectItem value="gmat-math-prep">GMAT Math Prep</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                Submit Information & Continue to Booking
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Calendly Widget */}
        <Card>
          <CardHeader>
            <CardTitle>Select Your Session Time</CardTitle>
            <CardDescription>
              Choose a convenient time slot for your tutoring session
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/susu2966/30min" 
              style={{minWidth: '320px', height: '700px'}}
            ></div>
            {/* Calendly inline widget end */}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Having trouble booking? Please <a href="/contact" className="text-blue-600 hover:text-blue-800">contact us</a> directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
