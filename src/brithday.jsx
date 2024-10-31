import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const BirthdayCard3D = () => {
  const [heartBurst, setHeartBurst] = useState(false);

  const handleHeartClick = () => {
    setHeartBurst(true);
    setTimeout(() => {
      setHeartBurst(false);
    }, 600);
  };

  return (
    <div className="h-screen flex p-6 items-center justify-center bg-gradient-to-br from-[#2D033B] to-[#450C71] overflow-hidden relative">
      {/* Background Layer for Enhanced Depth */}
      <div className="absolute flex items-center justify-center inset-0 bg-gradient-to-r from-[#32015B] via-[#2D033B] to-[#8B1CF0] opacity-60 blur-3xl"></div>

      <div className="flex justify-center">
        <Tilt
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          perspective={1500}
          scale={1.05} // Kichikroq kartani yaratish
          transitionSpeed={3000}
          glareEnable={true}
          glareMaxOpacity={0.7}
          glareColor="#DDA0DD"
          className="relative z-10"
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#5e2b943a] to-[#a54cff5e] bg-opacity-70 p-6 rounded-[2rem] shadow-2xl w-full max-w-[400px] overflow-hidden"
            initial={{ opacity: 0, y: -60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }}
          >
            {/* Decorative Floating 3D Layers */}
            <motion.div className="absolute -top-8 right-8 w-12 h-12 bg-pink-600 opacity-40 rounded-full blur-lg animate-pulse"></motion.div>
            <motion.div className="absolute -bottom-10 left-0 w-20 h-20 bg-purple-500 opacity-30 rounded-full blur-2xl animate-ping"></motion.div>

            {/* Title with Light Ray Effect */}
            <motion.h1
              className="text-3xl md:text-3xl p-4 font-extrabold rounded-2xl text-white text-center mb-4 tracking-wide leading-tight shadow-lg relative"
              style={{
                textShadow: '0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(173, 94, 255, 0.7)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
               Tug'ilgan Kuning Muborak! 🫀🎉
            </motion.h1>

            {/* Heart Animation with Subtle Hover Pulse */}
            <motion.div
              className="flex justify-center items-center mb-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.7 }}
            >
              <motion.span
                className={`text-4xl md:text-5xl text-pink-300 font-semibold cursor-pointer ${heartBurst ? 'animate-burst' : ''}`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
                onClick={handleHeartClick}
              >
                🕊️
              </motion.span>
            </motion.div>

            {/* Message with Smooth Fade-In and Side Entrance Animation */}
            <motion.p
              className="text-lg md:text-lg text-white text-center leading-relaxed px-4 mb-4 font-display"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, delay: 1 }}
            >
              sani sevaman tori sanga hozir qimmat narsa obermayamman san bilan aylanib ko'rishib yurmayamman, lekin kelejeda vada beraman sani xursand i baxtli qila oladigan hamma narsani oberaman va kelejedagi sani qayg'udan koz yosh tokishin uchun sabab topa olmasliginam uchun harakat qivomman. 💕 
            </motion.p>

            {/* Button with Unique Hover Effects and Rotation */}
            <div className="flex justify-center mt-4">
              <motion.button
                className="bg-gradient-to-r from-[#8E24AA] to-[#FF4081] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gradient-to-l from-[#FF4081] to-[#8E24AA] transform transition-transform hover:scale-110 hover:rotate-2"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 1.2 }}
              >
                Qimmatli odamim uchun arzon sovga! 💜
              </motion.button>
            </div>
          </motion.div>
        </Tilt>
      </div>

      {/* Enhanced Background Particles for Depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-32 bg-white opacity-10 rounded-full w-10 h-10 blur-md animate-pulse"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.2, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-60 right-20 bg-white opacity-10 rounded-full w-16 h-16 blur-lg animate-ping"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.8, 0.3, 0.8] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div
          className="absolute bottom-24 left-10 bg-white opacity-10 rounded-full w-12 h-12 blur-lg animate-ping"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        />
      </div>

      <style jsx>{`
        .animate-burst {
          animation: burst 0.6s forwards;
        }

        @keyframes burst {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BirthdayCard3D;
