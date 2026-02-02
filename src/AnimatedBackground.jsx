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
    // 1. Architecture réseau avec serveurs et connexions
    <div key="network1" className="absolute inset-0 opacity-30">
      <svg className="w-full h-full">
        {/* Serveurs */}
        <g>
          {/* Serveur 1 */}
          <rect x="10%" y="20%" width="60" height="40" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" rx="4">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="10%" y="25%" width="60" height="3" fill="rgba(6, 182, 212, 0.8)"/>
          <rect x="10%" y="30%" width="60" height="3" fill="rgba(6, 182, 212, 0.8)"/>
          <text x="12%" y="18%" fill="rgba(6, 182, 212, 0.8)" fontSize="10" fontFamily="monospace">Server</text>
          
          {/* Serveur 2 */}
          <rect x="80%" y="20%" width="60" height="40" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" rx="4">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" begin="1s"/>
          </rect>
          <rect x="80%" y="25%" width="60" height="3" fill="rgba(59, 130, 246, 0.8)"/>
          <rect x="80%" y="30%" width="60" height="3" fill="rgba(59, 130, 246, 0.8)"/>
          <text x="82%" y="18%" fill="rgba(59, 130, 246, 0.8)" fontSize="10" fontFamily="monospace">Server</text>
          
          {/* Routeur central */}
          <circle cx="50%" cy="40%" r="30" fill="rgba(168, 85, 247, 0.3)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="47%" y="42%" fill="rgba(168, 85, 247, 0.9)" fontSize="12" fontFamily="monospace">Router</text>
          
          {/* Switch */}
          <rect x="45%" y="70%" width="80" height="30" fill="rgba(34, 197, 94, 0.3)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="2" rx="4">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite"/>
          </rect>
          <circle cx="47%" cy="73%" r="2" fill="rgba(34, 197, 94, 0.8)">
            <animate attributeName="fill" values="rgba(34, 197, 94, 0.8);rgba(34, 197, 94, 1);rgba(34, 197, 94, 0.8)" dur="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50%" cy="73%" r="2" fill="rgba(34, 197, 94, 0.8)">
            <animate attributeName="fill" values="rgba(34, 197, 94, 0.8);rgba(34, 197, 94, 1);rgba(34, 197, 94, 0.8)" dur="1s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          <circle cx="53%" cy="73%" r="2" fill="rgba(34, 197, 94, 0.8)">
            <animate attributeName="fill" values="rgba(34, 197, 94, 0.8);rgba(34, 197, 94, 1);rgba(34, 197, 94, 0.8)" dur="1s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          <text x="46.5%" y="69%" fill="rgba(34, 197, 94, 0.9)" fontSize="10" fontFamily="monospace">Switch</text>
          
          {/* PCs */}
          <rect x="20%" y="85%" width="35" height="25" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" rx="2"/>
          <rect x="20%" y="85%" width="35" height="18" fill="rgba(6, 182, 212, 0.1)"/>
          <text x="21%" y="83%" fill="rgba(6, 182, 212, 0.7)" fontSize="8" fontFamily="monospace">PC</text>
          
          <rect x="70%" y="85%" width="35" height="25" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" rx="2"/>
          <rect x="70%" y="85%" width="35" height="18" fill="rgba(6, 182, 212, 0.1)"/>
          <text x="71%" y="83%" fill="rgba(6, 182, 212, 0.7)" fontSize="8" fontFamily="monospace">PC</text>
          
          {/* Cloud */}
          <ellipse cx="50%" cy="10%" rx="40" ry="20" fill="rgba(147, 197, 253, 0.2)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2">
            <animate attributeName="ry" values="20;22;20" dur="4s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="45%" cy="12%" rx="25" ry="15" fill="rgba(147, 197, 253, 0.2)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2"/>
          <ellipse cx="55%" cy="12%" rx="25" ry="15" fill="rgba(147, 197, 253, 0.2)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2"/>
          <text x="47%" y="11%" fill="rgba(147, 197, 253, 0.9)" fontSize="10" fontFamily="monospace">Cloud</text>
          
          {/* Connexions animées */}
          <line x1="15%" y1="24%" x2="47%" y2="38%" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="stroke" values="rgba(6, 182, 212, 0.4);rgba(6, 182, 212, 0.8);rgba(6, 182, 212, 0.4)" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="83%" y1="24%" x2="53%" y2="38%" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="stroke" values="rgba(59, 130, 246, 0.4);rgba(59, 130, 246, 0.8);rgba(59, 130, 246, 0.4)" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="50%" y1="13%" x2="50%" y2="37%" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke" values="rgba(147, 197, 253, 0.4);rgba(147, 197, 253, 0.8);rgba(147, 197, 253, 0.4)" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="50%" y1="43%" x2="50%" y2="70%" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="25%" y1="85%" x2="48%" y2="73%" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.5">
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="2.5s" repeatCount="indefinite"/>
          </line>
          <line x1="75%" y1="85%" x2="52%" y2="73%" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.5">
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          
          {/* Paquets de données animés */}
          <circle r="3" fill="rgba(6, 182, 212, 0.8)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 15,24 L 47,38"/>
          </circle>
          <circle r="3" fill="rgba(59, 130, 246, 0.8)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 83,24 L 53,38"/>
          </circle>
        </g>
      </svg>
    </div>,

    // 2. Datacenter avec racks de serveurs
    <div key="datacenter" className="absolute inset-0 opacity-25">
      <svg className="w-full h-full">
        <defs>
          <pattern id="serverRack" x="0" y="0" width="100" height="150" patternUnits="userSpaceOnUse">
            {/* Rack de serveur */}
            <rect x="10" y="10" width="80" height="130" fill="rgba(15, 23, 42, 0.5)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" rx="4"/>
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <rect x="15" y={15 + i * 15} width="70" height="12" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1"/>
                <circle cx="20" cy={21 + i * 15} r="1.5" fill="rgba(34, 197, 94, 0.8)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1 + Math.random()}s`} repeatCount="indefinite"/>
                </circle>
                <circle cx="25" cy={21 + i * 15} r="1.5" fill="rgba(34, 197, 94, 0.8)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1 + Math.random()}s`} repeatCount="indefinite" begin={`${Math.random()}s`}/>
                </circle>
                <circle cx="30" cy={21 + i * 15} r="1.5" fill="rgba(59, 130, 246, 0.8)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1 + Math.random()}s`} repeatCount="indefinite"/>
                </circle>
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#serverRack)"/>
      </svg>
    </div>,

    // 3. Circuit électronique (gardé mais amélioré)
    <div key="circuit" className="absolute inset-0 opacity-25">
      <svg className="w-full h-full">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Lignes horizontales */}
            <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2"/>
            <line x1="0" y1="150" x2="200" y2="150" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2"/>
            {/* Lignes verticales */}
            <line x1="50" y1="0" x2="50" y2="200" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2"/>
            <line x1="150" y1="0" x2="150" y2="200" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2"/>
            {/* Nodes lumineux */}
            <circle cx="50" cy="50" r="6" fill="rgba(6, 182, 212, 0.8)">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="150" cy="50" r="6" fill="rgba(59, 130, 246, 0.8)">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="150" r="6" fill="rgba(59, 130, 246, 0.8)">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="150" cy="150" r="6" fill="rgba(6, 182, 212, 0.8)">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
            </circle>
          </pattern>
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

    // 4. Code binaire défilant (gardé)
    <div key="binary" className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 flex justify-around">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="text-cyan-400 text-sm font-mono whitespace-pre font-bold"
            style={{
              animation: `binaryScroll ${Math.random() * 5 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.3 + 0.5,
              textShadow: '0 0 5px rgba(6, 182, 212, 0.5)'
            }}
          >
            {Array(50).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </div>
        ))}
      </div>
    </div>,

    // 5. Topologie réseau maillée
    <div key="mesh" className="absolute inset-0 opacity-20">
      <svg className="w-full h-full">
        {/* Génération de nodes connectés */}
        {[...Array(15)].map((_, i) => {
          const x = 10 + (i % 5) * 20;
          const y = 15 + Math.floor(i / 5) * 35;
          return (
            <g key={i}>
              {/* Connexions */}
              {i < 10 && (
                <line 
                  x1={`${x}%`} 
                  y1={`${y}%`} 
                  x2={`${10 + ((i + 1) % 5) * 20}%`} 
                  y2={`${15 + Math.floor((i + 1) / 5) * 35}%`} 
                  stroke="rgba(6, 182, 212, 0.3)" 
                  strokeWidth="1.5">
                  <animate attributeName="stroke" values="rgba(6, 182, 212, 0.3);rgba(6, 182, 212, 0.7);rgba(6, 182, 212, 0.3)" dur="3s" repeatCount="indefinite"/>
                </line>
              )}
              {i % 5 !== 4 && (
                <line 
                  x1={`${x}%`} 
                  y1={`${y}%`} 
                  x2={`${x + 20}%`} 
                  y2={`${y}%`} 
                  stroke="rgba(59, 130, 246, 0.3)" 
                  strokeWidth="1.5">
                  <animate attributeName="stroke" values="rgba(59, 130, 246, 0.3);rgba(59, 130, 246, 0.7);rgba(59, 130, 246, 0.3)" dur="2s" repeatCount="indefinite"/>
                </line>
              )}
              {/* Nodes */}
              <circle cx={`${x}%`} cy={`${y}%`} r="8" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2">
                <animate attributeName="r" values="8;10;8" dur={`${2 + Math.random() * 2}s`} repeatCount="indefinite"/>
              </circle>
              <circle cx={`${x}%`} cy={`${y}%`} r="3" fill="rgba(6, 182, 212, 0.8)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1 + Math.random()}s`} repeatCount="indefinite"/>
              </circle>
            </g>
          );
        })}
      </svg>
    </div>,

    // 6. Flux de données entre serveurs
    <div key="dataflow" className="absolute inset-0 opacity-25">
      <svg className="w-full h-full">
        {/* Serveurs source et destination */}
        <rect x="5%" y="45%" width="50" height="35" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" rx="3"/>
        <text x="6%" y="43%" fill="rgba(6, 182, 212, 0.8)" fontSize="9" fontFamily="monospace">Source</text>
        
        <rect x="85%" y="45%" width="50" height="35" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" rx="3"/>
        <text x="86%" y="43%" fill="rgba(59, 130, 246, 0.8)" fontSize="9" fontFamily="monospace">Dest</text>
        
        {/* Flux de données */}
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <rect width="15" height="8" fill={`rgba(${i % 2 === 0 ? '6, 182, 212' : '34, 197, 94'}, 0.6)`} rx="2">
              <animateMotion 
                dur={`${3 + Math.random() * 2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
                path={`M 10,${50 + i * 2} L 90,${48 + i * 2}`}
              />
            </rect>
          </g>
        ))}
      </svg>
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
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(20px, 20px); }
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