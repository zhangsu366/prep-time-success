import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
const Schedule = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue,
    watch
  } = useForm();
  const {
    toast
  } = useToast();
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
      description: "Please select a time slot below to complete your booking."
    });
  };
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Math Tutoring Session</h1>
          <p className="text-xl text-gray-600">Fill out your information below and get your personalized 30-minute pre-evaluation session.</p>
        </div>

        {/* Google Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
            <CardDescription>
              Please fill out the form below to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4VxS20VRVacbdaErNyD7MactWTuNAEkQx7W4o9jNnynnf2w/viewform?embedded=true&hl=en&pli=1" width="100%" height="800" frameBorder="0" marginHeight={0} marginWidth={0} className="rounded-lg">
              Loading…
            </iframe>
          </CardContent>
        </Card>

        {/* Calendly Widget */}
        

        <div className="mt-6 text-center">
          
        </div>
      </div>
    </div>;
};
export default Schedule;