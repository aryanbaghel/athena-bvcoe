
import TeamSection from "@/components/TeamSection";
import PastTeamMembers from "@/components/PastTeamMembers";
import { ScrollArea } from "@/components/ui/scroll-area";

const Team = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-orbitron text-center text-white mb-2">
          Meet The <span className="neon-text">Community</span>
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          The talented team behind Athena Gaming Society, working together to create
          amazing gaming experiences for our community.
        </p>
        
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <TeamSection />
          <PastTeamMembers />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Team;
