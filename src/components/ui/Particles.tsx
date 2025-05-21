import React, { useRef, useEffect } from 'react';

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once when component mounts and on window resize
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle properties
    const particleCount = 100;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.1,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        color: [
          'rgba(139, 92, 246, alpha)', // Purple
          'rgba(20, 184, 166, alpha)', // Teal
          'rgba(56, 189, 248, alpha)', // Light blue
          'rgba(255, 255, 255, alpha)', // White
        ][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.01 + 0.005,
      });
    }

    // Animation loop
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (const particle of particles) {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Create pulsing effect
        particle.alpha += particle.pulseSpeed;
        if (particle.alpha > 0.6 || particle.alpha < 0.1) {
          particle.pulseSpeed *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('alpha', particle.alpha.toString());
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none opacity-60" />;
};

export default Particles;