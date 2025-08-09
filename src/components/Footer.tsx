import { Building2, Code2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/a62e6591-3da7-4e64-9db3-246c545200c2.png" 
                alt="TYIR Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-6">
              Connecting global tech talent with innovative companies to turn ideas into reality.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-background/30 text-background hover:bg-background/10">
                Get Started
              </Button>
            </div>
          </div>

          {/* For Companies */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              For Companies
            </h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Hire Talent</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Project Marketplace</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Code2 className="h-5 w-5 mr-2" />
              For Developers
            </h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Find Work</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Get Verified</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Browse Projects</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Skill Assessment</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-semibold mb-4">Contact & Support</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@tyir.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Global Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 mb-4 md:mb-0">
              © 2024 TYIR. All rights reserved.
            </div>
            <div className="flex space-x-6 text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;