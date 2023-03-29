import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Skill_card_JS from './Skill_Cards/Skill_card_JS';
import Skill_card_React from './Skill_Cards/Skill_card_React';
import Skill_card_HTML from './Skill_Cards/Skill_card_HTML';
import Skill_card_Figma from './Skill_Cards/Skill_card_Figma';
import Skill_card_Csharp from './Skill_Cards/Skill_card_Csharp';
import Skill_card_CSS from './Skill_Cards/Skill_card_CSS';

type Props = {};

export default function Skills({}: Props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [active, setActive] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (active) {
      intervalId = setInterval(() => {
        setCurrentCard((currentCard) => (currentCard + 1) % 6);
      }, 3000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [active]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]);

  const skillCards = [
    <Skill_card_HTML />,
    <Skill_card_CSS />,
    <Skill_card_JS />,
    <Skill_card_React />,
    <Skill_card_Csharp />,
    <Skill_card_Figma />,
  ];

  const handleCardChange = (index: number) => {
    setCurrentCard(index);
    const containerWidth = containerRef.current?.clientWidth || 0;
    setScrollPosition(index * containerWidth);
  };

  return (
    <motion.div
      id="skills"
      className="h-fit max-w-[1240px] justify-evenly mx-auto items-center text-mellow-white flex flex-col md:flex-row text-left relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h3 className="absolute top-12 md:top-3 uppercase tracking-[20px] font-bold text-4xl lg:text-5xl">
        My <span className="text-rose-red"> Skills</span>
      </h3>

      <div className="w-fit mr-auto my-16 flex space-x-5 overflow-x-scroll snap-x snap snap-mandatory scrollbar-thin scrollbar-track-navy-blue/20 scrollbar-thumb-rose-red/60"
        ref={containerRef}
        onScroll={() => {
          const newPosition = containerRef.current?.scrollLeft || 0;
          setScrollPosition(newPosition);
          setActive(true);
        }}
        onMouseLeave={() => setActive(true)}
        onMouseEnter={() => setActive(false)}
      >
        {skillCards.map((card, index) => (
          <AnimatePresence key={index}>
            {currentCard === index && (
              <motion.div
                key={index}
                className="flex-shrink-2 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div onClick={() => handleCardChange(index)}>{card}</div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </motion.div>
  );
}