import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building, Lightbulb, Shield, Target, ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";

const Investments = () => {
  const [chartPoints, setChartPoints] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [returns, setReturns] = useState(0);

  useEffect(() => {
    // Animate portfolio values
    const interval = setInterval(() => {
      setPortfolioValue(prev => Math.min(prev + 15000, 930000));
      setReturns(prev => Math.min(prev + 0.2, 11.8));
    }, 100);

    // Generate animated stock market line
    const generateChartPoints = () => {
      const points = [];
      let currentValue = 50;
      
      for (let i = 0; i <= 20; i++) {
        const x = (i / 20) * 300; // 300px width
        const volatility = (Math.random() - 0.5) * 8; // Random volatility
        const trend = i * 2; // Upward trend
        currentValue = Math.max(20, Math.min(100, currentValue + volatility + trend * 0.3));
        const y = 120 - currentValue; // Invert Y axis (120px height)
        points.push({ x, y, value: currentValue });
      }
      return points;
    };

    // Animate the chart line drawing
    let pointIndex = 0;
    const chartInterval = setInterval(() => {
      if (pointIndex === 0) {
        const newPoints = generateChartPoints();
        setChartPoints([newPoints[0]]);
        pointIndex = 1;
      } else {
        setChartPoints(prev => {
          const allPoints = generateChartPoints();
          if (pointIndex < allPoints.length) {
            const newPoints = allPoints.slice(0, pointIndex + 1);
            pointIndex++;
            return newPoints;
          } else {
            // Reset animation
            pointIndex = 0;
            return [];
          }
        });
      }
    }, 150);

    return () => {
      clearInterval(interval);
      clearInterval(chartInterval);
    };
  }, []);

  // Create SVG path from points
  const createPath = (points) => {
    if (points.length < 2) return '';
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    return path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content - appears first on mobile, left on desktop */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Joint <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Investments</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
                We Grow Together. We Prosper Together.
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Pool resources with fellow members to invest in startups, real estate, and other opportunities. 
                Share risks, multiply returns, and build wealth <span className="font-bold text-green-600">collectively</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                  Start Investing Together
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                  View Opportunities
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">Diversified portfolio • Professional management • Shared success</p>
            </div>

            {/* Right side - Stock Market Graph - appears second on mobile, right on desktop */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {/* Main investment dashboard with animated stock graph */}
              <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-3xl shadow-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-500">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Portfolio Growth</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Live Market Performance</p>
                </div>

                {/* Portfolio Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-3 sm:p-4 text-white">
                    <p className="text-green-100 text-xs sm:text-sm">Portfolio Value</p>
                    <p className="text-lg sm:text-xl font-bold">UGX {portfolioValue.toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3 sm:p-4 text-white">
                    <p className="text-blue-100 text-xs sm:text-sm">Returns</p>
                    <p className="text-lg sm:text-xl font-bold flex items-center">
                      <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {returns.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Animated Stock Market Graph */}
                <div className="bg-gray-50 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Market Performance</h4>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm font-bold">+{returns.toFixed(1)}%</span>
                    </div>
                  </div>
                  
                  {/* SVG Line Chart */}
                  <div className="relative w-full h-24 sm:h-32 bg-white rounded-lg overflow-hidden">
                    <svg 
                      width="100%" 
                      height="100%" 
                      viewBox="0 0 300 120" 
                      className="absolute inset-0"
                      preserveAspectRatio="none"
                    >
                      {/* Grid lines */}
                      <defs>
                        <pattern id="grid" width="30" height="24" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 24" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Animated line */}
                      {chartPoints.length > 1 && (
                        <>
                          {/* Area under the curve */}
                          <path
                            d={`${createPath(chartPoints)} L ${chartPoints[chartPoints.length - 1].x} 120 L ${chartPoints[0].x} 120 Z`}
                            fill="url(#gradient)"
                            opacity="0.2"
                          />
                          {/* Main line */}
                          <path
                            d={createPath(chartPoints)}
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Animated dot at the end */}
                          <circle
                            cx={chartPoints[chartPoints.length - 1]?.x}
                            cy={chartPoints[chartPoints.length - 1]?.y}
                            r="4"
                            fill="#10b981"
                            className="animate-pulse"
                          />
                        </>
                      )}
                      
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                          <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                          <stop offset="50%" style={{ stopColor: '#10b981' }} />
                          <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Live indicator */}
                    <div className="absolute top-2 right-2 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Investment Distribution */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-blue-50 rounded-xl p-2 sm:p-3 text-center">
                    <Building className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-blue-600" />
                    <p className="text-xs font-semibold text-blue-600">Real Estate</p>
                    <p className="text-xs text-gray-600">40%</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-2 sm:p-3 text-center">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-purple-600" />
                    <p className="text-xs font-semibold text-purple-600">Startups</p>
                    <p className="text-xs text-gray-600">35%</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-2 sm:p-3 text-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-green-600" />
                    <p className="text-xs font-semibold text-green-600">Agriculture</p>
                    <p className="text-xs text-gray-600">25%</p>
                  </div>
                </div>

                {/* Members indicator */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm">+8 investors</span>
                </div>
              </div>

              {/* Floating elements - hidden on small screens */}
              <div className="hidden sm:block absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white animate-pulse">
                <Target className="w-8 h-8" />
              </div>
              <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
              <div className="hidden lg:block absolute top-1/4 -right-4 w-6 h-6 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
            <p className="text-gray-600">Diversify your portfolio with our curated investment options.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How Joint Investment Works</h2>
            <p className="text-gray-600">We grow together through collaborative investing</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Invest Together?</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Start Investing Together</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join investment circles and grow your wealth with fellow members
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Explore Investments
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2024 Zillion Capital. All rights reserved. Finance Made Local • A future worth a zillion</p>
        </div>
      </footer>
    </div>
  );
};

export default Investments;
