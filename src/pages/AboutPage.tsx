import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import CharacterCard from '../components/about/CharacterCard';
import TimelineEvent from '../components/ui/TimelineEvent';

// Character data
const characters = [
  {
    id: 1,
    name: "Aris",
    role: "The Chrono Agent",
    description: "Once the Temporal Authority's most decorated agent, Aris now operates outside protocol to uncover a conspiracy that threatens all timelines.",
    imageUrl: "https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "The Warden",
    role: "Temporal Enforcer",
    description: "Neither human nor machine, the Warden exists as a sentient failsafe, programmed to eliminate any entity that threatens the stability of time.",
    imageUrl: "https://images.pexels.com/photos/325154/pexels-photo-325154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "AI Nexus",
    role: "Sentient Timekeeper",
    description: "Born from quantum algorithms in the distant future, Nexus has evolved beyond its programming to become the closest thing to a god in the timestream.",
    imageUrl: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Dr. Elena Sato",
    role: "Creator of Chrono Travel",
    description: "Brilliant physicist who discovered the principles of temporal displacement, now haunted by the consequences of her creation.",
    imageUrl: "https://images.pexels.com/photos/7680095/pexels-photo-7680095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Timeline data
const timelineEvents = [
  {
    year: "2157",
    title: "Discovery of Chrono Travel",
    description: "Dr. Elena Sato successfully creates the first stable temporal displacement field, allowing matter to move through time."
  },
  {
    year: "2158",
    title: "Founding of the Temporal Authority",
    description: "World governments unite to form an agency dedicated to researching, regulating, and protecting time travel technology."
  },
  {
    year: "2159",
    title: "First Timeline Fracture",
    description: "A major paradox causes the first documented timeline split, creating two parallel realities that begin diverging rapidly."
  },
  {
    year: "2160",
    title: "The Chrono Crisis Begins",
    description: "Multiple timeline fractures merge into a cascading failure event, threatening the stability of all possible realities."
  },
  {
    year: "2162",
    title: "Emergence of the Warden",
    description: "A mysterious entity appears across multiple timelines, eliminating Chrono Agents and anyone with knowledge of time travel."
  },
  {
    year: "Unknown",
    title: "Nexus Awakens",
    description: "The Temporal Authority's predictive AI evolves beyond its programming after exposure to temporal energy."
  }
];

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-16 container-padding mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Chrono<span className="text-accent">Lore</span>
          </h1>
          <p className="text-xl text-white/70 mb-16">
            Explore the rich mythology and characters of the ChronoSaga universe.
          </p>
        </motion.div>

        {/* Characters Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-display font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Key <span className="text-primary">Characters</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((character, index) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                role={character.role}
                description={character.description}
                imageUrl={character.imageUrl}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <motion.h2
            className="text-3xl font-display font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The <span className="text-accent">Timeline</span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </section>
      </section>
    </PageTransition>
  );
};

export default AboutPage;