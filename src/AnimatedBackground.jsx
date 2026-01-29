import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Change d'arrière-plan toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % 6); // 6 animations différentes
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgrounds = [
    // 1. Grille Matrix animée
    <div key="matrix" className="absolute inset-0 opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }}></div>
    </div>,

    // 2. Particules flottantes
    <div key="particles" className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's'
          }}
        />
      ))}
    </div>,

    // 3. Vagues cybernétiques
    <div key="waves" className="absolute inset-0 opacity-20">
      <div className="absolute inset-0" style={{
        background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(6, 182, 212, 0.1) 50px,
            rgba(6, 182, 212, 0.1) 51px
          )
        `,
        animation: 'waveMove 15s linear infinite'
      }}></div>
      <div className="absolute inset-0" style={{
        background: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(59, 130, 246, 0.1) 50px,
            rgba(59, 130, 246, 0.1) 51px
          )
        `,
        animation: 'waveMove 20s linear infinite reverse'
      }}></div>
    </div>,

    // 4. Circuit électronique
    <div key="circuit" className="absolute inset-0 opacity-15">
      <svg className="w-full h-full">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Lignes horizontales */}
            <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2"/>
            <line x1="0" y1="150" x2="200" y2="150" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2"/>
            {/* Lignes verticales */}
            <line x1="50" y1="0" x2="50" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
            <line x1="150" y1="0" x2="150" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
            {/* Nodes */}
            <circle cx="50" cy="50" r="5" fill="rgba(6, 182, 212, 0.5)"/>
            <circle cx="150" cy="50" r="5" fill="rgba(59, 130, 246, 0.5)"/>
            <circle cx="50" cy="150" r="5" fill="rgba(59, 130, 246, 0.5)"/>
            <circle cx="150" cy="150" r="5" fill="rgba(6, 182, 212, 0.5)"/>
          </pattern>
          <animate attributeName="x" from="0" to="200" dur="20s" repeatCount="indefinite"/>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="200 200"
            dur="30s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>,

    // 5. Hexagones tech
    <div key="hexagons" className="absolute inset-0 opacity-15">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(
            60deg,
            transparent,
            transparent 100px,
            rgba(6, 182, 212, 0.1) 100px,
            rgba(6, 182, 212, 0.1) 101px
          ),
          repeating-linear-gradient(
            120deg,
            transparent,
            transparent 100px,
            rgba(59, 130, 246, 0.1) 100px,
            rgba(59, 130, 246, 0.1) 101px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(168, 85, 247, 0.1) 100px,
            rgba(168, 85, 247, 0.1) 101px
          )
        `,
        animation: 'hexagonMove 25s linear infinite'
      }}></div>
    </div>,

    // 6. Code binaire défilant
    <div key="binary" className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 flex justify-around">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="text-cyan-400 text-xs font-mono whitespace-pre"
            style={{
              animation: `binaryScroll ${Math.random() * 5 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5 + 0.3
            }}
          >
            {Array(50).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </div>
        ))}
      </div>
    </div>
  ];

  return (
    <>
      {/* Conteneur avec transition fluide entre les arrière-plans */}
      <div className="fixed inset-0 transition-opacity duration-1000">
        {backgrounds[currentBg]}
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(20px, 20px); }
        }

        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(50px); }
        }

        @keyframes hexagonMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }

        @keyframes binaryScroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;
