import { type FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Blob {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const BackgroundAnimation: FC = () => {
  const [blobs, setBlobs] = useState<Blob[]>([]);

  useEffect(() => {
    // Ekran o'lchamiga qarab blob sonini aniqlash
    const blobCount = window.innerWidth < 768 ? 3 : 5;
    
    // Ko'k va ochiq ko'k ranglar
    const colors = ['#0ea5e9', '#0284c7', '#0369a1', '#38bdf8', '#7dd3fc'];
    
    // Bloblarni yaratish - kattaroq o'lcham va ko'proq shaffoflik
    const newBlobs = Array.from({ length: blobCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 600 + 400,
      opacity: Math.random() * 0.15 + 0.05, // Juda past shaffoflik (Halo templatega o'xshash)
      duration: Math.random() * 20 + 40, // Sekinroq harakat
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setBlobs(newBlobs);
    
    // Resize event listener
    const handleResize = () => {
      const newBlobCount = window.innerWidth < 768 ? 3 : 5;
      if (newBlobCount !== blobs.length) {
        setBlobs(prevBlobs => {
          if (newBlobCount > prevBlobs.length) {
            // Qo'shimcha bloblar qo'shish
            const additionalBlobs = Array.from({ length: newBlobCount - prevBlobs.length }, (_, i) => ({
              id: prevBlobs.length + i,
              x: Math.random() * 100,
              y: Math.random() * 100,
              size: Math.random() * 600 + 400,
              opacity: Math.random() * 0.15 + 0.05,
              duration: Math.random() * 20 + 40,
              delay: Math.random() * 5,
              color: colors[Math.floor(Math.random() * colors.length)],
            }));
            return [...prevBlobs, ...additionalBlobs];
          } else {
            // Bloblarni kamaytirish
            return prevBlobs.slice(0, newBlobCount);
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Asosiy bloblar */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full blur-[150px]"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            opacity: blob.opacity,
            backgroundColor: blob.color,
            mixBlendMode: 'normal',
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -30, 50, -20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Markaziy katta blob */}
      <motion.div
        className="absolute rounded-full blur-[180px]"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          opacity: 0.07,
          backgroundColor: '#0ea5e9',
        }}
        animate={{
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Yuqori qism uchun gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#000011] to-transparent opacity-40"
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation; 