import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, CircleArrowDown, CircleArrowRight, Users, DollarSign, TrendingUp, Shield, Smartphone, Clock, Banknote, CreditCard, Phone } from "lucide-react";

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
    { title: "Save Smart", description: "UGX 5,000 saved this month" },
    { title: "Join Circle", description: "Connected with 5 trusted members" },
    { title: "Earn Interest", description: "UGX 250 interest earned" },
    { title: "Borrow Fast", description: "3× your savings available" }
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
          members: Math.floor(10000 * progress),
          savings: Math.floor(500 * progress),
          returns: Math.floor(12 * progress * 10) / 10,
          approval: Math.floor(98 * progress)
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
                Zillion Capital
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Why Choose Us</a>
              <a href="#security" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Who Can Join</a>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
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
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">Why Choose Us</a>
                <a href="#security" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">Who Can Join</a>
                <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">About</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded">Contact</Link>
                <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-transform">Get Started</Button>
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
                <span className="inline-block animate-slide-in-right">Welcome to</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  Zillion Capital
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                Smart Savings. Easy Loans. Daily Earnings
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                A digital financial platform designed to address everyday financial needs through secure savings, interest earnings, and quick access to loans. 
                Start saving from as little as <span className="font-bold text-green-600">UGX 5,000</span> and access loans up to <span className="font-bold text-blue-600">3× your savings</span>.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center animate-scale-in" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{animatedStats.members.toLocaleString()}+</div>
                  <div className="text-gray-600 text-sm">Active Members</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '1.2s' }}>
                  <div className="text-3xl font-bold text-green-600 mb-1">UGX {animatedStats.savings}M+</div>
                  <div className="text-gray-600 text-sm">Total Savings</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '1.4s' }}>
                  <div className="text-3xl font-bold text-purple-600 mb-1">{animatedStats.returns}%</div>
                  <div className="text-gray-600 text-sm">Interest Rate</div>
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
                  Get Started
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '2s' }}>No paperwork • All digital • Mobile money first • Finance Made Local</p>
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
                        <h3 className="text-lg font-bold text-gray-900">Hi John! 👋</h3>
                        <p className="text-gray-600 text-sm">Your savings are growing</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">J</span>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-6 transform hover:scale-105 transition-transform">
                      <p className="text-blue-100 text-sm mb-2">Total Savings</p>
                      <p className="text-3xl font-bold mb-4">UGX 850,000</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-100">+UGX 45,000 this month</span>
                        <span className="text-green-300">Available loan: UGX 2.5M</span>
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
                              {index === 0 && <Banknote className="w-4 h-4" />}
                              {index === 1 && <Users className="w-4 h-4" />}
                              {index === 2 && <TrendingUp className="w-4 h-4" />}
                              {index === 3 && <CreditCard className="w-4 h-4" />}
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
                UGX
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
                <Phone className="w-8 h-8" />
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Zillion Capital */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Zillion Capital?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Zillion Capital is a digital financial platform designed to address the everyday person's financial needs by enabling secure savings, interest earnings, and quick access to loans. 
              Our unique trusted groups model strengthens accountability and promotes collective financial growth.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Banknote className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors text-2xl">1. Save Smart</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Start saving as little as UGX 5,000 and grow your savings while earning interest with free access to all your savings every end of financial year.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors text-2xl">2. Borrow Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get access to loans of 3× your savings or more, with flexible terms and instant mobile money disbursement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors text-2xl">3. Join a Circle</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Team up with trusted members you know. Our Circle members support each other and help reduce loan risk. The stronger your Circle, the better your borrowing power.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Zillion Capital */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Zillion Capital?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">Mobile Money First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Easy deposits & withdrawals using MTN or Airtel</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-green-600 transition-colors">No Paperwork</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>All digital, no bank visits</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">Flexible Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Tailored to your saving habits</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>No hidden fees</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">Team Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Zillion Capital Team Support 24/7 assistance whenever you need it</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section id="security" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Can Join?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">18+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Must be 18+ years</h3>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Own a valid mobile money number</h3>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to save and grow together</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started in Minutes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Create an account", icon: Users },
              { step: 2, title: "Join or form your Circle", icon: CircleArrowRight },
              { step: 3, title: "Start saving", icon: Banknote },
              { step: 4, title: "Apply for a loan anytime", icon: CreditCard }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-gray-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">{item.title}</h3>
                </div>
              );
            })}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Zillion Capital – Finance Made Local</h2>
          <p className="text-2xl mb-8 opacity-90 animate-fade-in font-semibold" style={{ animationDelay: '0.2s' }}>
            A future worth a zillion
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
              Get Started Today
            </Button>
          </form>
          
          <p className="text-sm opacity-75 animate-fade-in" style={{ animationDelay: '0.6s' }}>Mobile money first • No paperwork • 24/7 support • Finance Made Local</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zillion Capital
              </h3>
              <p className="text-gray-400">Finance Made Local. A future worth a zillion.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Press</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Contact</Link></li>
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
            <p>&copy; 2024 Zillion Capital. All rights reserved. Finance Made Local • A future worth a zillion</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
