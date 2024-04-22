import React from 'react';

const WordLink = ({ text, url }) => {
    return (
        <div className="flex justify-center items-center h-full">
            <a
                href={url}
                className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)' }}
            >
                {text}
            </a>
        </div>
    );
};

export default WordLink;
