import React from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isLeft?: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  title,
  description,
  index,
  isLeft = false,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <div className="relative" ref={ref}>
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-accent/30 -translate-x-1/2" />

      {/* Event dot */}
      <motion.div 
        className="absolute top-6 left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      />

      {/* Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-6`}>
        <motion.div 
          className={`md:text-right ${isLeft ? 'md:col-start-1' : 'md:col-start-2 md:order-2'}`}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="font-display text-accent text-lg md:text-2xl font-bold mb-1">
            {year}
          </div>
          <h3 className="text-white text-xl md:text-2xl font-display font-semibold mb-2">
            {title}
          </h3>
          <p className="text-white/70">
            {description}
          </p>
        </motion.div>
        
        {/* Empty space for layout */}
        <div className={`hidden md:block ${isLeft ? 'md:order-2' : ''}`} />
      </div>
    </div>
  );
};

export default TimelineEvent;