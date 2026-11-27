import React from 'react';
import { Reveal, Section } from './ui';
import WordHighlight from './WordHighlight';

const About = () => (
    <Section id="about" label="About">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:gap-10">
            {/* The frame stays put; only the photo scales inside it. */}
            <div className="photo-frame h-[140px] w-[140px] shrink-0 overflow-hidden rounded-xl border border-line">
                <img
                    src="/me-240.webp"
                    alt="Portrait of Shafny Hadhy"
                    width="140"
                    height="140"
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="max-w-[640px] space-y-5 text-[16px]">
                <WordHighlight
                    className="text-[18px] leading-[1.6] md:text-[20px]"
                    text="I am a Software Engineering undergraduate at SLIIT and an Associate Software Engineer working across the frontend and backend of web applications."
                />
                <p>
                    Day to day, I build user interfaces, write backend business logic and REST APIs, and work with
                    relational databases. I enjoy breaking down practical engineering problems into straightforward,
                    maintainable code.
                </p>
                <p>
                    I work closely with teammates through code reviews and technical discussions, and I am focused on
                    strengthening my software engineering fundamentals through hands-on product work.
                </p>
            </div>
        </Reveal>
    </Section>
);

export default About;
