import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building, Lightbulb, Shield, Target, ArrowUp, PieChart } from "lucide-react";
import Navbar from "@/components/Navbar";

const Investments = () => {
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [returns, setReturns] = useState(0);
  const [activeInvestment, setActiveInvestment] = useState(0);

  const investments = [
    { name: "Tech Startup", amount: 250000, growth: 15, icon: Lightbulb, color: "from-blue-500 to-purple-500" },
    { name: "Real Estate", amount: 500000, growth: 8, icon: Building, color: "from-green-500 to-blue-500" },
    { name: "Agriculture", amount: 180000, growth: 12, icon: TrendingUp, color: "from-yellow-500 to-orange-500" }
  ];

  useEffect(() => {
    // Animate portfolio values
    const interval = setInterval(() => {
      setPortfolioValue(prev => Math.min(prev + 15000, 930000));
      setReturns(prev => Math.min(prev + 0.2, 11.8));
    }, 100);

    // Cycle through investments
    const investmentInterval = setInterval(() => {
      setActiveInvestment(prev => (prev + 1) % investments.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(investmentInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Joint <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Investments</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                We Grow Together. We Prosper Together.
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Pool resources with fellow members to invest in startups, real estate, and other opportunities. 
                Share risks, multiply returns, and build wealth <span className="font-bold text-green-600">collectively</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                  Start Investing Together
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                  View Opportunities
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">Diversified portfolio • Professional management • Shared success</p>
            </div>

            {/* Right side - Investment Animation */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {/* Main investment dashboard */}
              <div className="relative mx-auto w-96 h-[500px] bg-white rounded-3xl shadow-2xl p-6 hover:scale-105 transition-transform duration-500">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Circle</h3>
                  <p className="text-gray-600">Growing together since 2024</p>
                </div>

                {/* Portfolio Overview */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-green-100 text-sm">Total Portfolio Value</p>
                      <p className="text-3xl font-bold">UGX {portfolioValue.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-100 text-sm">Annual Returns</p>
                      <p className="text-2xl font-bold flex items-center">
                        <ArrowUp className="w-5 h-5 mr-1" />
                        {returns.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 bg-white rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-blue-600 text-sm font-bold">{i}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-green-100 text-sm self-center">+8 other investors</span>
                  </div>
                </div>

                {/* Investment Opportunities */}
                <div className="space-y-3">
                  {investments.map((investment, index) => {
                    const IconComponent = investment.icon;
                    const isActive = index === activeInvestment;
                    
                    return (
                      <div 
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          isActive ? 'bg-white shadow-lg scale-105 border-2 border-blue-200' : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isActive ? `bg-gradient-to-r ${investment.color} text-white` : 'bg-gray-200 text-gray-600'
                          }`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h4 className={`font-semibold transition-colors ${
                                isActive ? 'text-gray-900' : 'text-gray-600'
                              }`}>
                                {investment.name}
                              </h4>
                              <span className={`text-sm font-bold transition-colors ${
                                isActive ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                +{investment.growth}%
                              </span>
                            </div>
                            <p className="text-gray-500 text-sm">UGX {investment.amount.toLocaleString()}</p>
                            {isActive && (
                              <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${(investment.growth / 20) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Investment Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <PieChart className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                    <p className="text-sm font-semibold text-blue-600">Diversified</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <Users className="w-6 h-6 mx-auto mb-1 text-green-600" />
                    <p className="text-sm font-semibold text-green-600">12 Members</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white animate-pulse">
                <Target className="w-8 h-8" />
              </div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-4 w-6 h-6 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
            <p className="text-gray-600">Diversify your portfolio with our curated investment options.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Startup Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join investment circles to fund promising Ugandan startups. Share risks and rewards with fellow members while supporting local innovation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pool funds to invest in residential and commercial properties. Earn rental income and benefit from property appreciation over time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Agriculture & Commodities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Invest in agricultural projects, livestock, and commodity trading. Support local farmers while earning steady returns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Joint Investment Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Joint Investment Works</h2>
            <p className="text-gray-600">We grow together through collaborative investing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Form Investment Circle</h3>
              <p className="text-gray-600 text-sm">Join or create an investment circle with trusted members</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Opportunity</h3>
              <p className="text-gray-600 text-sm">Select from vetted investment opportunities together</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pool Resources</h3>
              <p className="text-gray-600 text-sm">Combine funds to access bigger, better investment opportunities</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Share Returns</h3>
              <p className="text-gray-600 text-sm">Earn proportional returns based on your investment contribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Invest Together?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lower Risk, Higher Potential</h3>
                <p className="text-gray-600">By pooling resources, we can access higher-quality investments with better due diligence and risk management.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                <p className="text-gray-600">Learn from experienced investors in your circle and make informed decisions together.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Diversification</h3>
                <p className="text-gray-600">Spread your investments across multiple sectors and opportunities to reduce risk.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local Impact</h3>
                <p className="text-gray-600">Support Ugandan businesses and communities while building your wealth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Investing Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Join investment circles and grow your wealth with fellow members
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Explore Investments
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

export default Investments;
