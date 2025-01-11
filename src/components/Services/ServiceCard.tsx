import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center">
        <Icon className="text-[#674cc4] w-12 h-12 mb-4" />
        <CardTitle className="text-center text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);