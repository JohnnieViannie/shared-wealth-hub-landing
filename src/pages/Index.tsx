
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowDown, ArrowUp, CircleArrowDown, CircleArrowRight, CircleArrowUp } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with email:", email);
    // Here you would typically handle the signup logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CircleWealth
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#security" className="text-gray-600 hover:text-blue-600 transition-colors">Security</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                  <span className={`bg-current h-0.5 w-6 rounded-sm transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`bg-current h-0.5 w-6 rounded-sm transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2">
                <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-blue-600">How it Works</a>
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</a>
                <a href="#security" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Security</a>
                <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
                <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600">Join Now</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Save Together, Earn Together,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Grow Your Wealth in Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join savings circles, access affordable loans, and share investment profits with your community. 
              Earn up to 12% annual returns through the power of collective finance.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50,000+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$25M+</div>
                <div className="text-gray-600">Collective Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">8.5%</div>
                <div className="text-gray-600">Average Returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Loan Approval</div>
              </div>
            </div>

            <form onSubmit={handleSignup} className="max-w-md mx-auto flex gap-4 mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Create Free Account
              </Button>
            </form>
            
            <p className="text-sm text-gray-500">No fees for first 3 months • Cancel anytime • FDIC insured</p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CircleWealth?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Higher Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn 8-12% annually vs 0.5% in traditional banks through community-powered investing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <CardTitle>Community Power</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pool resources with trusted members for better rates and shared financial growth
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleArrowDown className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Affordable Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Borrow at 6-8% vs 15-25% credit cards from your trusted community circle
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleArrowRight className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Shared Profits</CardTitle>
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
          <div className="text-center mb-12">
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
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Build Wealth</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Smart Matching", desc: "AI-powered circle recommendations based on your goals and profile" },
              { title: "Flexible Savings", desc: "Choose your contribution amount and frequency that works for you" },
              { title: "Quick Loans", desc: "Get approved in 24 hours with competitive rates from your circle" },
              { title: "Investment Options", desc: "Diversified portfolio management with professional oversight" },
              { title: "Mobile App", desc: "Manage everything on the go with our intuitive mobile application" },
              { title: "Bank-Level Security", desc: "FDIC insured with bank-level encryption and security protocols" }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join 50,000+ Members Building Wealth Together</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { quote: "I've earned $2,400 in profits this year alone!", author: "Sarah M., Teacher" },
              { quote: "Got a $5,000 loan for my business at just 7% interest", author: "David K., Entrepreneur" },
              { quote: "My savings grew 10x faster than my old bank account", author: "Maria L., Nurse" }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-700">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["FDIC Insured", "SSL Secured", "SOC 2 Compliant", "Licensed Money Transmitter"].map((trust, index) => (
              <div key={index} className="py-4 px-6 bg-white rounded-lg shadow-sm">
                <span className="text-sm font-semibold text-gray-700">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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
              <div key={index} className="text-center">
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
          <div className="text-center mb-12">
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
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Wealth Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who are earning more, saving smarter, and building wealth together
          </p>
          
          <form onSubmit={handleSignup} className="max-w-md mx-auto flex gap-4 mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
            <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Create Your Free Account
            </Button>
          </form>
          
          <p className="text-sm opacity-75">No fees for first 3 months • Cancel anytime • FDIC insured</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CircleWealth
              </h3>
              <p className="text-gray-400">Building wealth through community-powered finance.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CircleWealth. All rights reserved. FDIC Insured • Licensed Money Transmitter</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
