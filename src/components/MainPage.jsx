import React, { useState } from 'react';
import ContactForm from './ContactForm';
import AboutInfo from './AboutInfo';
import WordLink from './WordLink';

const MainPage = () => {
    const [showContact, setShowContact] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const words = [
        { text: 'ILLUSTRATION', url: '/illustration-gallery' },
        { text: 'MURAL', url: '/mural-gallery' },
        { text: 'PAINTING', url: '/painting-gallery' },
        { text: 'COMICS', url: '/comics-gallery' },
        { text: 'ANIMATION', url: '/animation-gallery' },
        { text: 'STORYBOARD', url: '/storyboard-gallery' },
        { text: 'DRAWING', url: '/drawing-gallery' },
    ];
    return (
        <div className="font-sans text-gray-500 h-screen flex flex-col justify-between">
            <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-2 gap-2 p-10 m-auto text-center">
                {words.map(word => (
                    <WordLink key={word.text} text={word.text} url={word.url} />
                ))}
            </div>
            <div className="p-10">
                <div className="text-sm">
                    <span onClick={() => setShowAbout(true)} className="hover:underline cursor-pointer">about</span>
                    {' / '}
                    <span onClick={() => setShowContact(true)} className="hover:underline cursor-pointer">contact</span>
                </div>
            </div>
            {showContact && <ContactForm onClose={() => setShowContact(false)} />}
            {showAbout && <AboutInfo onClose={() => setShowAbout(false)} />}
        </div>
    );
};

export default MainPage;