import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Code2, 
  Users, 
  Globe, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const CommunitiesSection = () => {
  return (
    <section id="communities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Two Powerful Communities,
            <br />
            <span className="text-primary">One Global Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a company looking for talent or a developer seeking opportunities, 
            TYIR connects you with the right people worldwide.
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Company Community */}
          <Card className="relative overflow-hidden border-0 shadow-card bg-gradient-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral to-coral-dark"></div>
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-coral/10">
                  <Building2 className="h-8 w-8 text-coral" />
                </div>
                <CardTitle className="text-2xl">Company Community</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Post projects, hire talent, and scale your team with global developers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Post jobs & project requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Hire talent directly from platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Rent developers (hourly, daily, monthly)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Access to verified tech professionals</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full" variant="default">
                  Join as Company
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tech Community */}
          <Card className="relative overflow-hidden border-0 shadow-card bg-gradient-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue to-tech-blue-dark"></div>
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-tech-blue/10">
                  <Code2 className="h-8 w-8 text-tech-blue" />
                </div>
                <CardTitle className="text-2xl">Tech Guys Community</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Showcase skills, get verified, and work on exciting projects globally
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Create detailed developer profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Get verified & earn talent badges</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Work remotely for global companies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Earn better than office salaries</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full" variant="default">
                  Join as Developer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-muted-foreground">
              Connect with talent and opportunities across 50+ countries worldwide
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Talent</h3>
            <p className="text-muted-foreground">
              All developers are verified with skill assessments and talent badges
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Matching</h3>
            <p className="text-muted-foreground">
              AI-powered matching connects you with the right talent or projects instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;