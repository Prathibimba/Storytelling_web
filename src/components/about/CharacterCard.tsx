import React from 'react';
import { motion } from 'framer-motion';

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  role,
  description,
  imageUrl,
  index,
}) => {
  return (
    <motion.div
      className="character-card relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-md mb-4 aspect-[1/1.2]">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/40 to-transparent" />
      </div>
      
      <div className="z-10 relative">
        <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <h4 className="text-accent mb-3">{role}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
      
      {/* Glowing accent when hovered */}
      <motion.div 
        className="absolute -inset-0.5 rounded-md bg-primary/0 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500"
        animate={{
          boxShadow: [
            '0 0 5px rgba(var(--color-primary), 0.5)',
            '0 0 20px rgba(var(--color-primary), 0.3)',
            '0 0 5px rgba(var(--color-primary), 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default CharacterCard;