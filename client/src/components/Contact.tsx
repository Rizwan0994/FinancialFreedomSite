import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    currentStage: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Success!",
        description: result.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessType: "",
        currentStage: "",
        message: "",
      });
    },
    onError: async (error: any) => {
      let errorMessage = "An error occurred while submitting your request. Please try again.";
      
      try {
        const response = await error.response?.json();
        if (response?.message) {
          errorMessage = response.message;
        }
      } catch (e) {
        // Use default error message
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Here</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to navigate what's NEXT for your healthcare business and financial future? 
            Schedule your complimentary Discovery Call today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Discovery Call</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="first-name">First Name *</Label>
                  <Input
                    id="first-name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name *</Label>
                  <Input
                    id="last-name"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="business-type">Type of Healthcare Business</Label>
                <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private-practice">Private Practice</SelectItem>
                    <SelectItem value="clinic">Clinic/Healthcare Business</SelectItem>
                    <SelectItem value="behavioral-health">Behavioral Health</SelectItem>
                    <SelectItem value="healthcare-exec">Healthcare Executive/Consultant</SelectItem>
                    <SelectItem value="healthtech">Healthcare Technology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="current-stage">Current Business Stage</Label>
                <Select value={formData.currentStage} onValueChange={(value) => handleInputChange("currentStage", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your current stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Starting/Early Stage</SelectItem>
                    <SelectItem value="growth">Growth Phase</SelectItem>
                    <SelectItem value="established">Established/Scaling</SelectItem>
                    <SelectItem value="exit-planning">Planning Exit</SelectItem>
                    <SelectItem value="legacy-focus">Legacy Building</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">What are your biggest challenges or goals?</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your current situation and what you'd like to achieve..."
                  className="mt-2"
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors"
              >
                {contactMutation.isPending ? "Submitting..." : "Schedule My Discovery Call"}
                <i className="fas fa-calendar-check ml-2"></i>
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">john@yourlifestylenavigator.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What to Expect from Your Discovery Call:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#141e5b] mt-1 mr-3 flex-shrink-0"></i>
                  <span>30-minute complimentary consultation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#141e5b] mt-1 mr-3 flex-shrink-0"></i>
                  <span>Assessment of your current business and financial situation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#141e5b] mt-1 mr-3 flex-shrink-0"></i>
                  <span>Discussion of your goals and challenges</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#141e5b] mt-1 mr-3 flex-shrink-0"></i>
                  <span>Overview of how the NEXT Framework can help</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#141e5b] mt-1 mr-3 flex-shrink-0"></i>
                  <span>Next steps for your journey to financial freedom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
