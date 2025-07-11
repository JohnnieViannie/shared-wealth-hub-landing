
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users, TrendingUp, DollarSign, Target, ArrowRight, PiggyBank, HandHeart } from "lucide-react";
import Navbar from "@/components/Navbar";

const GroupSavings = () => {
  const [totalSavings, setTotalSavings] = useState(0);
  const [members, setMembers] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Animate total savings and member count
    const interval = setInterval(() => {
      setTotalSavings(prev => Math.min(prev + 25000, 1500000));
      setMembers(prev => Math.min(prev + 1, 15));
    }, 150);

    // Animation steps for the group savings process
    const stepInterval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  const savingsSteps = [
    { title: "Create Group", icon: Users, color: "from-blue-500 to-blue-600" },
    { title: "Set Goals", icon: Target, color: "from-green-500 to-green-600" },
    { title: "Save Together", icon: PiggyBank, color: "from-purple-500 to-purple-600" },
    { title: "Achieve Goals", icon: TrendingUp, color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Group <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Savings</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Save Together. Achieve More.
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Join or create savings groups with friends, family, or colleagues. 
                Pool your resources together to achieve common financial goals with 
                <span className="font-bold text-blue-600"> higher returns</span> and shared accountability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                  Start Group Savings
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                  Join Existing Group
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">15% higher returns • Shared goals • Community support</p>
            </div>

            {/* Right side - Group Savings Animation */}
            <div className="relative animate-fade-in order-first lg:order-last" style={{ animationDelay: '0.5s' }}>
              {/* Main card showing group savings process */}
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-3xl shadow-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-500">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Group Dashboard</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Real-time progress tracking</p>
                </div>

                {/* Members Display */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm sm:text-base">Active Members</span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">{members}</span>
                  </div>
                  <div className="flex -space-x-2 mb-4">
                    {[...Array(Math.min(members, 8))].map((_, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: `fade-in 0.5s ease-out forwards`
                        }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    {members > 8 && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs font-bold">
                        +{members - 8}
                      </div>
                    )}
                  </div>
                </div>

                {/* Total Savings Display */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
                  <p className="text-green-100 mb-2 text-sm sm:text-base">Total Group Savings</p>
                  <p className="text-2xl sm:text-3xl font-bold">UGX {totalSavings.toLocaleString()}</p>
                  <p className="text-green-200 text-xs sm:text-sm mt-2">Growing together every day</p>
                </div>

                {/* Process Steps */}
                <div className="space-y-2 sm:space-y-3">
                  {savingsSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isActive = index === animationStep;
                    const isCompleted = index < animationStep;
                    
                    return (
                      <div 
                        key={index}
                        className={`flex items-center space-x-3 p-2 sm:p-3 rounded-xl transition-all duration-500 ${
                          isActive ? 'bg-white shadow-lg scale-105' : 
                          isCompleted ? 'bg-green-50' : 'bg-gray-50'
                        }`}
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? `bg-gradient-to-r ${step.color} text-white` :
                          isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold text-sm sm:text-base transition-colors ${
                            isActive ? 'text-gray-900' : 
                            isCompleted ? 'text-green-700' : 'text-gray-600'
                          }`}>
                            {step.title}
                          </p>
                        </div>
                        {isActive && (
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        )}
                        {isCompleted && (
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating elements - hidden on small screens */}
              <div className="hidden sm:block absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <HandHeart className="w-6 h-6" />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
                <PiggyBank className="w-8 h-8" />
              </div>
              <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
              <div className="hidden lg:block absolute top-1/4 -right-4 w-6 h-6 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Savings Features */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Save in Groups?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Higher Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn up to 15% more interest through group savings benefits and collective bargaining power.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay motivated with group accountability and support from fellow savers working toward similar goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Shared Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set and achieve collective financial goals faster through coordinated saving efforts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All transactions are tracked transparently with full visibility for all group members.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Flexible Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set your own contribution schedule and amount based on your financial capacity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How Group Savings Works</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create or Join</h3>
              <p className="text-gray-600">Start a new savings group or join an existing one with friends and family.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Goals</h3>
              <p className="text-gray-600">Define your group's savings goals and contribution schedule together.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save & Grow</h3>
              <p className="text-gray-600">Make regular contributions and watch your collective savings grow with higher returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Start Group Savings?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join thousands of savers achieving their financial goals together
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Start Your Group Today
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

export default GroupSavings;
