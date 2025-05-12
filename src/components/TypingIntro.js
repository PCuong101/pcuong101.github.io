import React, { useEffect, useState } from 'react';

const TypingIntro = () => {
    const text = "Xin chào! Tôi là một lập trình viên đam mê phát triển web và công nghệ. Hãy cùng khám phá thế giới công nghệ với tôi!";
    const [displayedText, setDisplayedText] = useState("");
    const typingSpeed = 50;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) clearInterval(interval);
        }, typingSpeed);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-xl font-mono p-4 border border-gray-300 rounded-lg shadow-md bg-white max-w-xl mx-auto mt-8">
            {displayedText}
            <span className="blinking-cursor">|</span>
        </div>
    );
};

export default TypingIntro;
