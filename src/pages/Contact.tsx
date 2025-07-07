import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zillion Capital</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We'd love to hear from you! Get in touch with us using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 animate-fade-in">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="tel:+256777777777">+256 777 777777</a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="mailto:info@zillioncapital.com">info@zillioncapital.com</a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Kampala, Uganda
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span>Business Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Mon - Fri: 9am - 5pm
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Zillion Capital. All rights reserved. Finance Made Local • A future worth a zillion</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
