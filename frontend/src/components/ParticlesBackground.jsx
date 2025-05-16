import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // ✅ use slim version

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // ✅ Fix: load slim engine
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000" },
        particles: {
          number: { value: 120 },
          size: { value: 2 },
          color: { value: "#00bfff" },
          opacity: { value: 0.5 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" }
          },
          links: {
            enable: true,
            distance: 100,
            color: "#00bfff",
            opacity: 0.3,
            width: 1
          }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: {
            grab: { distance: 140, links: { opacity: 0.6 } }
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;
