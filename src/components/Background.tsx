import React from 'react';

const japaneseCharacters = 'ゲームオーバープレイヤーコンティニューファイナルステージ';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black">
        <div className="matrix-rain">
          {Array.from({ length: 50 }, (_, i) => (
            <div 
              key={i} 
              className="matrix-column"
              style={{ 
                animationDelay: `${Math.random() * 2}s`,
                left: `${i * 2}%`
              }}
            >
              {Array.from({ length: 30 }, (_, j) => (
                <span 
                  key={j}
                  className="text-emerald-700 opacity-0 matrix-character"
                  style={{ 
                    animationDelay: `${j * 0.1}s`
                  }}
                >
                  {japaneseCharacters[Math.floor(Math.random() * japaneseCharacters.length)]}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}