import React, { useState, useEffect } from 'react';

function TypingEffect({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const word = words[currentWordIndex];
      if (!isDeleting) {
        setDisplayText(word.substring(0, displayText.length + 1));
        if (displayText === word) setIsDeleting(true);
      } else {
        setDisplayText(word.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return <span className="typing-text">{displayText}</span>;
}

export default TypingEffect;
