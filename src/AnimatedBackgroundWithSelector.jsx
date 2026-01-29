import React, { useState, useEffect } from 'react';

const AnimatedBackgroundWithSelector = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Change d'arrière-plan automatiquement toutes les 5 secondes
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % 8);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const backgrounds = [
    // 1. Grille Matrix animée - Plus visible
    {
      name: "Grille Matrix",
      component: (
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 2px, transparent 2px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
          {/* Points lumineux aux intersections */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 0 0, rgba(6, 182, 212, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
      )
    },

    // 2. Particules flottantes
    {
      name: "Particules",
      component: (
        <div className="absolute inset-0 overflow-hidden opacity-20">
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
        </div>
      )
    },

    // 3. Vagues cybernétiques
    {
      name: "Vagues Cyber",
      component: (
        <div className="absolute inset-0 opacity-20">
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
        </div>
      )
    },

    // 4. Code binaire défilant
    {
      name: "Code Binaire",
      component: (
        <div className="absolute inset-0 overflow-hidden opacity-20">
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
      )
    },

    // 5. Hexagones tech
    {
      name: "Hexagones",
      component: (
        <div className="absolute inset-0 opacity-15">
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
              )
            `,
            animation: 'hexagonMove 25s linear infinite'
          }}></div>
        </div>
      )
    },

    // 6. Radar circulaire
    {
      name: "Radar",
      component: (
        <div className="absolute inset-0 overflow-hidden opacity-15 flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-cyan-400"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ animation: 'rotate 4s linear infinite', transformOrigin: 'center' }}
          />
        </div>
      )
    },

    // 7. Réseau de noeuds
    {
      name: "Réseau",
      component: (
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full">
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <g key={i}>
                  <line
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(6, 182, 212, 0.2)"
                    strokeWidth="1"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.5;0.2"
                      dur={`${3 + Math.random() * 3}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                  <circle cx={`${x1}%`} cy={`${y1}%`} r="3" fill="rgba(6, 182, 212, 0.5)">
                    <animate
                      attributeName="r"
                      values="3;5;3"
                      dur={`${2 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx={`${x2}%`} cy={`${y2}%`} r="3" fill="rgba(59, 130, 246, 0.5)">
                    <animate
                      attributeName="r"
                      values="3;5;3"
                      dur={`${2 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>
      )
    },

    // 8. Pluie de code
    {
      name: "Pluie de Code",
      component: (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono"
              style={{
                left: `${i * 6.5}%`,
                animation: `rain ${Math.random() * 3 + 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {`
console.log()
if (secure) {
  encrypt();
}
function auth() {}
return data;
`.repeat(10)}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <>
      {/* Conteneur avec transition fluide */}
      <div className="fixed inset-0 transition-opacity duration-1000">
        {backgrounds[currentBg].component}
      </div>

      {/* Sélecteur d'arrière-plan */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/80 backdrop-blur-lg border border-cyan-500/30 rounded-full px-4 py-2 flex items-center space-x-3">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            autoPlay ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'
          }`}
        >
          {autoPlay ? '⏸ Pause' : '▶ Auto'}
        </button>
        
        <div className="flex space-x-1">
          {backgrounds.map((bg, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentBg(idx);
                setAutoPlay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentBg === idx 
                  ? 'bg-cyan-400 w-6' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              title={bg.name}
            />
          ))}
        </div>

        <span className="text-xs text-gray-400 hidden sm:block">
          {backgrounds[currentBg].name}
        </span>
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

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackgroundWithSelector;