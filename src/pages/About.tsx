
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="hover:scale-105 transition-transform">
                <img 
                  src="/lovable-uploads/e971dbb6-833d-49f1-abcc-b0fccec5f0d6.png" 
                  alt="Zillion Capital Logo" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="/about" className="text-blue-600 font-medium">About</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zillion Capital</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Finance Made Local. A future worth a zillion.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Zillion Capital is dedicated to democratizing financial services by making savings, loans, and investments accessible to everyone through community-driven financial circles. We believe that by working together, we can create a future where financial prosperity is within reach for all.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We believe in the power of community and collective financial growth through trusted circles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Security & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your financial security is our top priority. We use bank-level encryption and transparent practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We continuously innovate to provide the best digital financial solutions for our community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We empower individuals to take control of their financial future through accessible tools and education.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="text-left space-y-6 text-lg text-gray-600">
              <p>
                Zillion Capital was born from a simple observation: traditional banking systems often fail to serve the everyday financial needs of ordinary people. High fees, complex processes, and limited access to credit create barriers that prevent people from achieving financial stability.
              </p>
              <p>
                Our founders, having experienced these challenges firsthand, envisioned a different approach - one that leverages the power of community and technology to create a more inclusive financial ecosystem. By combining traditional group savings models with modern digital solutions, we've created a platform that puts the power back in the hands of the people.
              </p>
              <p>
                Today, thousands of members across the country trust Zillion Capital to help them save, borrow, and grow their wealth together. We're not just a financial platform; we're a community of individuals working towards a common goal: financial freedom for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey towards financial freedom today.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Get Started Now
          </Button>
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

export default About;
