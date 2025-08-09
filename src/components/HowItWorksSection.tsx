import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const HowItWorksSection = () => {
  const companySteps = [
    {
      icon: UserPlus,
      title: "Sign Up & Post",
      description: "Create your company profile and post job requirements or project details"
    },
    {
      icon: Search,
      title: "Browse Talent",
      description: "Search our verified developer pool or let us match talent to your needs"
    },
    {
      icon: MessageSquare,
      title: "Connect & Hire",
      description: "Interview candidates and hire directly through our platform"
    },
    {
      icon: Rocket,
      title: "Launch Project",
      description: "Start working with your team and track progress in real-time"
    }
  ];

  const developerSteps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Build your detailed developer profile showcasing skills and experience"
    },
    {
      icon: CheckCircle,
      title: "Get Verified",
      description: "Complete skill assessments and earn verified talent badges"
    },
    {
      icon: Search,
      title: "Find Projects",
      description: "Browse available projects or get matched to opportunities"
    },
    {
      icon: Rocket,
      title: "Start Earning",
      description: "Work remotely on exciting projects and earn competitive rates"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How TYIR Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple steps to connect companies with global tech talent and help developers 
            find their next exciting opportunity.
          </p>
        </div>

        {/* Companies Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-coral">
            For Companies
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {companySteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center border-0 shadow-card bg-background h-full">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-coral" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < companySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-coral" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Developers Process */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-tech-blue">
            For Developers
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {developerSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center border-0 shadow-card bg-background h-full">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-tech-blue" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-tech-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < developerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-tech-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;