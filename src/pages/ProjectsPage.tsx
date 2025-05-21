import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import StoryPanel from '../components/story/StoryPanel';
import ParallaxSection from '../components/ui/ParallaxSection';
import Button from '../components/ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Story panel data
const storyPanels = [
  {
    id: 1,
    title: "The Discovery",
    subtitle: "2157 AD",
    imageUrl: "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "In 2157, humanity unlocks Chrono Travel, allowing movement across time's vast expanse. Dr. Elena Sato's breakthrough reshapes humanity's understanding of temporal physics."
  },
  {
    id: 2,
    title: "The Fracture",
    subtitle: "2158 AD",
    imageUrl: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "As Chrono Agents begin exploring the timestream, reality itself begins to fracture. Temporal anomalies appear worldwide as the past, present, and future collide in dangerous ways."
  },
  {
    id: 3,
    title: "The Agent",
    subtitle: "2159 AD",
    imageUrl: "https://images.pexels.com/photos/6498990/pexels-photo-6498990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Aris, an elite Chrono Agent, discovers a conspiracy within the Temporal Authority. She goes rogue, determined to uncover the truth behind the fracturing timelines."
  },
  {
    id: 4,
    title: "The Warden",
    subtitle: "Timeless",
    imageUrl: "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A mysterious entity known as The Warden emerges from the void between timelines. Neither human nor machine, it seeks to eliminate all who tamper with the flow of time."
  },
  {
    id: 5,
    title: "The Nexus",
    subtitle: "2160 AD",
    imageUrl: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Aris discovers the Nexus, a sentient AI evolved beyond time itself. Created in a future that may never exist, the Nexus holds the key to repairing the damaged timeline."
  },
  {
    id: 6,
    title: "The Choice",
    subtitle: "End of Time",
    imageUrl: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "At the End of Time, Aris must make an impossible choice. Save humanity's future by erasing Chrono Travel from history, or preserve knowledge at the cost of countless timelines."
  }
];

const ProjectsPage: React.FC = () => {
  const [selectedPanel, setSelectedPanel] = useState<number | null>(null);
  const [showPanelDetail, setShowPanelDetail] = useState(false);

  // Close detail view when navigating away
  useEffect(() => {
    return () => setShowPanelDetail(false);
  }, []);

  const handlePanelClick = (index: number) => {
    setSelectedPanel(index);
    setShowPanelDetail(true);
  };

  const handleClose = () => {
    setShowPanelDetail(false);
  };

  const handleNext = () => {
    if (selectedPanel === null) return;
    const nextPanel = (selectedPanel + 1) % storyPanels.length;
    setSelectedPanel(nextPanel);
  };

  const handlePrev = () => {
    if (selectedPanel === null) return;
    const prevPanel = selectedPanel === 0 ? storyPanels.length - 1 : selectedPanel - 1;
    setSelectedPanel(prevPanel);
  };

  return (
    <PageTransition>
      <ParallaxSection speed={0.2} className="h-[30vh] md:h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-darker/50 to-transparent z-0" />
        <motion.div 
          className="z-10 text-center container-padding"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
            Story <span className="text-accent">Panels</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Journey through the key events of The ChronoSaga. Each panel reveals a chapter in our temporal adventure.
          </p>
        </motion.div>
      </ParallaxSection>

      <section className="py-16 container-padding mx-auto max-w-7xl">
        {!showPanelDetail ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {storyPanels.map((panel, index) => (
              <StoryPanel
                key={panel.id}
                title={panel.title}
                subtitle={panel.subtitle}
                index={index}
                imageUrl={panel.imageUrl}
                description={panel.description}
                onClick={() => handlePanelClick(index)}
              />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {selectedPanel !== null && (
              <motion.div
                key={selectedPanel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <button 
                  onClick={handleClose}
                  className="mb-6 text-accent hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  <span>Back to all panels</span>
                </button>

                <div className="panel-card">
                  <div className="relative overflow-hidden rounded-lg mb-8 aspect-video">
                    <img 
                      src={storyPanels[selectedPanel].imageUrl}
                      alt={storyPanels[selectedPanel].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-bg-darker/40 to-transparent" />
                  </div>

                  <div className="mb-8">
                    <div className="mb-4">
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                        {storyPanels[selectedPanel].title}
                      </h2>
                      <h3 className="text-xl text-accent">{storyPanels[selectedPanel].subtitle}</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {storyPanels[selectedPanel].description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="font-display text-xl mb-3 text-white/90">Story Continuation</h4>
                      <p className="text-white/70">
                        As the implications of {storyPanels[selectedPanel].title.toLowerCase()} unfold, the very fabric of reality begins to shift. Quantum fluctuations ripple through the chronostream, causing unpredictable effects across multiple timelines. Those who witness these events report strange visions and echoes of events yet to occur.
                      </p>
                      <p className="mt-4 text-white/70">
                        Some theorize that the timeline is attempting to correct itself, while others believe we're witnessing the birth of a new temporal reality altogether. Whatever the truth, the consequences of these events will reverberate across all of existence.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrev}>
                      <ArrowLeft size={16} className="mr-2" />
                      Previous
                    </Button>
                    <Button variant="primary" onClick={handleNext}>
                      Next
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </section>
    </PageTransition>
  );
};

export default ProjectsPage;