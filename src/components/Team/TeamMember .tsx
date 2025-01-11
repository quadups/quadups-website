import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const TeamMember = ({ name, position, image, linkedin, github, email }: TeamMemberProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6 w-80 flex flex-col items-center"
    >
      <Avatar className="w-32 h-32 mb-4">
        <AvatarImage src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-xl text-gray-800">{name}</h3>
      <p className="text-gray-500 mb-4">{position}</p>

      <div className="flex space-x-4 text-gray-600">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-600" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-gray-900" />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`}>
            <Mail className="w-5 h-5 hover:text-yellow-500" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember;
