
import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Past team members data
const pastTeamData = [
  {
    id: 1,
    name: "Aryan Sharma",
    role: "President (2023)",
    bio: "Led the society through its inception year with vision and dedication.",
    linkedin: "https://linkedin.com/in/placeholder",
    instagram: "https://instagram.com/placeholder",
    image: "/assets/images/Previous_Core/img1.jpg"
  },
  {
    id: 2,
    name: "Riya Patel",
    role: "Vice President (2023)",
    bio: "Organized multiple tournaments that put our gaming society on the map.",
    linkedin: "https://linkedin.com/in/placeholder",
    instagram: "https://instagram.com/placeholder",
    image: "/assets/images/Previous_Core/img2.jpg"
  },
  {
    id: 3,
    name: "Varun Mehra",
    role: "Treasurer (2023)",
    bio: "Managed finances efficiently, ensuring successful sponsorship deals.",
    linkedin: "https://linkedin.com/in/placeholder",
    instagram: "https://instagram.com/placeholder",
    image: "/assets/images/Previous_Core/img3.jpg"
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Secretary (2023)",
    bio: "Maintained excellent communication between the team and faculty.",
    linkedin: "https://linkedin.com/in/placeholder",
    instagram: "https://instagram.com/placeholder",
    image: "/assets/images/Previous_Core/img4.jpg"
  },
  {
    id: 5,
    name: "Rohan Gupta",
    role: "President (2022)",
    bio: "Founded the gaming society with passion and brought the first gaming PCs.",
    linkedin: "https://linkedin.com/in/placeholder",
    instagram: "https://instagram.com/placeholder",
    image: "/assets/images/Previous_Core/img5.jpg"
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "Vice President (2022)",
    bio: "Pioneered our first inter-college gaming competition.",
    linkedin: "https://linkedin.com/in/placeholder",
    instagram: "https://instagram.com/placeholder",
    image: "/assets/images/Previous_Core/img2.jpg"
  }
];

const PastTeamMembers = () => {
  return (
    <div className="mt-16">
      <h3 className="section-title">Past Core Members</h3>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        Honoring the previous leaders who built the foundation of our gaming community
      </p>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {pastTeamData.map((member) => (
            <CarouselItem key={member.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="gaming-card">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-neon-green shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/150?text=" + encodeURIComponent(member.name);
                      }}
                    />
                  </div>
                  <h4 className="font-orbitron text-lg text-white mb-1">{member.name}</h4>
                  <p className="text-neon-green text-sm mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 text-center">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-green transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-green transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious className="relative inset-auto -left-0 transform-none" />
          <CarouselNext className="relative inset-auto -right-0 transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default PastTeamMembers;
