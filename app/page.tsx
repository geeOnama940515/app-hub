"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Headphones, 
  Users, 
  Package, 
  Monitor,
  ArrowRight,
  Building2
} from "lucide-react";
import { useState } from "react";

interface AppCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  category: string;
}

const AppCard = ({ title, description, url, icon, category }: AppCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
        
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Open App
          <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
        </a>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  const apps: AppCardProps[] = [
    {
      title: "Document Tracking System",
      description: "Document tracking system",
      url: "https://docs.gregdoesdev.xyz/login",
      icon: <CreditCard className="w-5 h-5" />,
      category: "Finance"
    },
    {
      title: "IT Ticketing System", 
      description: "IT support ticket management and tracking",
      url: "https://ticketing.gregdoesdev.xyz",
      icon: <Headphones className="w-5 h-5" />,
      category: "IT Support"
    },
    {
      title: "HRMS",
      description: "Human Resource Management System",
      url: "https://hrms.gregdoesdev.xyz", 
      icon: <Users className="w-5 h-5" />,
      category: "HR"
    },
    {
      title: "Inventory Management System",
      description: "Track and manage inventory and stock levels",
      url: "https://inventory.gregdoesdev.xyz",
      icon: <Package className="w-5 h-5" />,
      category: "Inventory"
    },
    {
      title: "IT Asset Tracking",
      description: "Monitor and track IT assets and equipment",
      url: "https://asset-tracking.gregdoesdev.xyz",
      icon: <Monitor className="w-5 h-5" />,
      category: "Asset Management"
    },
        {
      title: "Barangay Information System",
      description: "Barangay Information System",
      url: "https://barangay.gregdoesdev.xyz",
      icon: <Monitor className="w-5 h-5" />,
      category: "Asset Management"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              VMIS - Demo Apps
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Access all demo applications from this central hub
          </p>
          
          {/* Demo Notice */}
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm font-medium">
              ⚠️ These are demo applications only - no backend connections are active yet
            </p>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard key={app.title} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
}