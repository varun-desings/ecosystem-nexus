import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, TreePine, Waves, Thermometer, BarChart3, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Globe },
    { path: '/wildlife', label: 'Wildlife', icon: TreePine },
    { path: '/marine', label: 'Marine', icon: Waves },
    { path: '/climate', label: 'Climate', icon: Thermometer },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-accent animate-spin-slow" />
            <span className="text-xl font-bold text-foreground">
              Digital <span className="text-accent">Nervous</span> System
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive ? 'bg-accent/20 text-accent' : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass border-t border-white/10 animate-fade-in">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent/20 text-accent' 
                        : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;