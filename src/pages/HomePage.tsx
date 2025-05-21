import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import { ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageTransition>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background stars animation */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 0.8 : 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* This is just a visual effect layer handled by the Particles component */}
        </motion.div>

        {/* Center circle animation */}
        <motion.div
          className="absolute"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: loaded ? [0, 20, 40] : 0, opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="w-4 h-4 rounded-full bg-accent" />
        </motion.div>

        {/* Content */}
        <div className="z-10 text-center container-padding">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            The <span className="text-accent">Chrono</span>Saga
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            A Journey Through Time and Fate
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button to="/story" variant="primary">
              Begin Story
            </Button>
            <Button to="/about" variant="outline">
              Enter the Lore
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={30} className="mx-auto" />
          </motion.div>
          <span className="font-display text-sm">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Brief intro section */}
      <section className="py-20 container-padding mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Enter a New <span className="text-accent">Dimension</span>
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            In the year 2157, humanity unlocks the secrets of time travel, creating a network of Chrono Agents tasked with preserving the timeline. But as history begins to fracture and collapse, one rogue agent must navigate a web of paradoxes to restore balance to reality itself.
          </p>
          <Button to="/story" variant="outline">
            Explore the Timeline
          </Button>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default HomePage;