
-- Create a table for contact inquiries
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it accessible to authenticated users only
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for admins/staff to view all inquiries (you can adjust this based on your needs)
CREATE POLICY "Authenticated users can view contact inquiries" 
  ON public.contact_inquiries 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Create policy for inserting new inquiries (public access for contact form)
CREATE POLICY "Anyone can create contact inquiries" 
  ON public.contact_inquiries 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for updating inquiry status (for admin management)
CREATE POLICY "Authenticated users can update contact inquiries" 
  ON public.contact_inquiries 
  FOR UPDATE 
  TO authenticated
  USING (true);

-- Add index on created_at for better performance when sorting by date
CREATE INDEX idx_contact_inquiries_created_at ON public.contact_inquiries(created_at DESC);

-- Add index on status for filtering
CREATE INDEX idx_contact_inquiries_status ON public.contact_inquiries(status);
