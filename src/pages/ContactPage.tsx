import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import { CheckCircle, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    favoritePanel: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after some time
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          favoritePanel: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  const inputClasses = "w-full bg-bg-darker/60 border border-primary/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/50 transition-all";

  return (
    <PageTransition>
      <section className="pt-24 pb-16 container-padding mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Chrono<span className="text-accent">Comm</span>
          </h1>
          <p className="text-xl text-white/70">
            Leave a message across the timestream. Your thoughts shape the story.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="panel-card neon-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white/90 font-display mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/90 font-display mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="favoritePanel" className="block text-white/90 font-display mb-2">
                      Favorite Story Panel
                    </label>
                    <select
                      id="favoritePanel"
                      name="favoritePanel"
                      value={formState.favoritePanel}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a panel</option>
                      <option value="The Discovery">The Discovery</option>
                      <option value="The Fracture">The Fracture</option>
                      <option value="The Agent">The Agent</option>
                      <option value="The Warden">The Warden</option>
                      <option value="The Nexus">The Nexus</option>
                      <option value="The Choice">The Choice</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/90 font-display mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={inputClasses}
                    />
                  </div>
                </div>
                
                <div className="text-right">
                  <Button 
                    type="submit" 
                    variant="primary"
                    className="px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} className="ml-2" />
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-accent mb-6 mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <CheckCircle size={60} className="mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Message Sent Successfully
                </h3>
                <p className="text-white/70">
                  Thank you for your message. Your communication has been transmitted across the timestream.
                </p>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center text-white/50 font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>ChronoComm Temporal Coordinates: Earth-Prime, 2157</p>
            <p>Quantum Encryption: Enabled</p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;