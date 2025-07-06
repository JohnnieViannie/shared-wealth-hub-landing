import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, CircleArrowDown, CircleArrowRight, Users, DollarSign, TrendingUp, Shield, Smartphone, Clock } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    savings: 0,
    returns: 0,
    approval: 0
  });

  // Demo app animation states
  const demoSteps = [
    { title: "Join Your Circle", description: "Connect with trusted members" },
    { title: "Save Monthly", description: "$250 contributed this month" },
    { title: "Earn Interest", description: "9.2% annual return generated" },
    { title: "Get Loans", description: "Borrow $2,000 at 7% interest" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats on mount
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          members: Math.floor(50000 * progress),
          savings: Math.floor(25 * progress),
          returns: Math.floor(8.5 * progress * 10) / 10,
          approval: Math.floor(95 * progress)
        });
        
        if (step >= steps) clearInterval(interval);
      }, stepDuration);
    };
    
    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with email:", email);
    // Here you would typically handle the signup logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
                CircleWealth
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Features</a>
              <a href="#security" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Security</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                  <span className={`bg-current h-0.5 w-6 rounded-sm transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`bg-current h-0.5 w-6 rounded-sm transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-slide-in-right">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl">
                <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">How it Works</a>
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">Features</a>
                <a href="#security" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">Security</a>
                <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">About</a>
                <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-transform">Join Now</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="inline-block animate-slide-in-right">Turn Your</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  Community
                </span>{" "}
                <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.4s' }}>Into Your</span>{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent inline-block animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  Bank
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Join trusted circles, save together, and unlock financial opportunities that traditional banks can't match. 
                Earn up to <span className="font-bold text-green-600">12% annual returns</span> through the power of community finance.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center animate-scale-in" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{animatedStats.members.toLocaleString()}+</div>
                  <div className="text-gray-600 text-sm">Active Members</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '1.2s' }}>
                  <div className="text-3xl font-bold text-green-600 mb-1">${animatedStats.savings}M+</div>
                  <div className="text-gray-600 text-sm">Collective Savings</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '1.4s' }}>
                  <div className="text-3xl font-bold text-purple-600 mb-1">{animatedStats.returns}%</div>
                  <div className="text-gray-600 text-sm">Average Returns</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '1.6s' }}>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{animatedStats.approval}%</div>
                  <div className="text-gray-600 text-sm">Loan Approval</div>
                </div>
              </div>

              <form onSubmit={handleSignup} className="max-w-md mx-auto lg:mx-0 flex gap-4 mb-8 animate-fade-in" style={{ animationDelay: '1.8s' }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
                <Button type="submit" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Building Wealth
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '2s' }}>No fees for first 3 months • Cancel anytime • FDIC insured</p>
            </div>

            {/* Right side - Animated Demo App */}
            <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
              {/* Phone mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="p-6 h-full bg-gradient-to-br from-blue-50 to-purple-50">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Hi Sarah! 👋</h3>
                        <p className="text-gray-600 text-sm">Your wealth is growing</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">S</span>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-6 transform hover:scale-105 transition-transform">
                      <p className="text-blue-100 text-sm mb-2">Total Balance</p>
                      <p className="text-3xl font-bold mb-4">$12,847.32</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-100">+$247 this month</span>
                        <span className="text-green-300">↗ 9.2%</span>
                      </div>
                    </div>

                    {/* Animated Demo Steps */}
                    <div className="space-y-4">
                      {demoSteps.map((step, index) => (
                        <div 
                          key={index}
                          className={`p-4 rounded-xl transition-all duration-500 ${
                            index === currentStep 
                              ? 'bg-white shadow-lg transform scale-105' 
                              : 'bg-white/50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                              index === currentStep 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {index === 0 && <Users className="w-4 h-4" />}
                              {index === 1 && <DollarSign className="w-4 h-4" />}
                              {index === 2 && <TrendingUp className="w-4 h-4" />}
                              {index === 3 && <Clock className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-semibold text-sm transition-colors ${
                                index === currentStep ? 'text-gray-900' : 'text-gray-600'
                              }`}>
                                {step.title}
                              </h4>
                              <p className={`text-xs transition-colors ${
                                index === currentStep ? 'text-gray-600' : 'text-gray-400'
                              }`}>
                                {step.description}
                              </p>
                            </div>
                            {index === currentStep && (
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <button className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <ArrowUp className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">Save</span>
                        </div>
                      </button>
                      <button className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <ArrowDown className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">Borrow</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                $
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CircleWealth?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Higher Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn 8-12% annually vs 0.5% in traditional banks through community-powered investing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Community Power</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pool resources with trusted members for better rates and shared financial growth
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CircleArrowDown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors">Affordable Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Borrow at 6-8% vs 15-25% credit cards from your trusted community circle
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CircleArrowRight className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Shared Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Everyone benefits from loan interest and investment returns distributed quarterly
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Steps to Financial Growth</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Join a Circle", desc: "Find or create a savings group with 10-20 members" },
              { step: 2, title: "Save Together", desc: "Contribute $50-500 monthly to collective pool" },
              { step: 3, title: "Access Loans", desc: "Borrow from group funds at low interest rates" },
              { step: 4, title: "Earn Returns", desc: "Share profits from loans and investments quarterly" },
              { step: 5, title: "Grow Wealth", desc: "Watch your money multiply through community power" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Build Wealth</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Smart Matching", desc: "AI-powered circle recommendations based on your goals and profile", icon: Users },
              { title: "Flexible Savings", desc: "Choose your contribution amount and frequency that works for you", icon: DollarSign },
              { title: "Quick Loans", desc: "Get approved in 24 hours with competitive rates from your circle", icon: Clock },
              { title: "Investment Options", desc: "Diversified portfolio management with professional oversight", icon: TrendingUp },
              { title: "Mobile App", desc: "Manage everything on the go with our intuitive mobile application", icon: Smartphone },
              { title: "Bank-Level Security", desc: "FDIC insured with bank-level encryption and security protocols", icon: Shield }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join 50,000+ Members Building Wealth Together</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { quote: "I've earned $2,400 in profits this year alone!", author: "Sarah M., Teacher" },
              { quote: "Got a $5,000 loan for my business at just 7% interest", author: "David K., Entrepreneur" },
              { quote: "My savings grew 10x faster than my old bank account", author: "Maria L., Nurse" }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-700">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["FDIC Insured", "SSL Secured", "SOC 2 Compliant", "Licensed Money Transmitter"].map((trust, index) => (
              <div key={index} className="py-4 px-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="text-sm font-semibold text-gray-700">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Numbers Don't Lie</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { stat: "$25,000,000+", label: "Total Platform Savings" },
              { stat: "50,000+", label: "Active Members" },
              { stat: "$12,000,000+", label: "Loans Funded" },
              { stat: "8.5%", label: "Average Annual Returns" },
              { stat: "95%", label: "Loan Approval Rate" },
              { stat: "4.2%", label: "Average Default Rate" },
              { stat: "24 hours", label: "Avg. Loan Processing" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "How is my money protected?", a: "Your funds are FDIC insured up to $250,000 and held in secure, regulated financial institutions." },
              { q: "What happens if someone defaults on a loan?", a: "We have a comprehensive risk assessment process and insurance fund to protect members from defaults." },
              { q: "How are profits calculated and distributed?", a: "Profits are calculated quarterly based on loan interest and investment returns, distributed proportionally to your savings contribution." },
              { q: "Can I leave my circle anytime?", a: "Yes, you can withdraw your savings with 30 days notice, subject to any outstanding loan commitments." },
              { q: "What are the fees?", a: "First 3 months are free, then 1% annual fee on your average balance. No hidden charges." },
              { q: "How do you choose investment options?", a: "Our investment committee selects diversified, low-risk options with professional fund managers." }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.a}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Start Your Wealth Journey Today</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands who are earning more, saving smarter, and building wealth together
          </p>
          
          <form onSubmit={handleSignup} className="max-w-md mx-auto flex gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
              required
            />
            <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Create Your Free Account
            </Button>
          </form>
          
          <p className="text-sm opacity-75 animate-fade-in" style={{ animationDelay: '0.6s' }}>No fees for first 3 months • Cancel anytime • FDIC insured</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CircleWealth
              </h3>
              <p className="text-gray-400">Building wealth through community-powered finance.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in">
            <p>&copy; 2024 CircleWealth. All rights reserved. FDIC Insured • Licensed Money Transmitter</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
