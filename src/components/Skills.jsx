import React from 'react';
import { Reveal, Section } from './ui';

const toolkit = [
    { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Laravel', 'Node.js', 'Express.js', 'Java', 'REST APIs'] },
    { group: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { group: 'Tools', items: ['Git', 'Docker', 'Postman', 'Vercel'] },
    {
        group: 'Automation & AI Integration',
        items: ['n8n', 'Gemini API', 'Claude API', 'Mistral API', 'OCR', 'Structured Data Extraction'],
    },
];

const Skills = () => (
    <Section id="toolkit" label="Toolkit">
        <Reveal className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map(({ group, items }) => (
                <div key={group}>
                    <h3 className="text-[20px]">{group}</h3>
                    <p className="mt-3 text-[16px] leading-[1.8]">{items.join(', ')}</p>
                </div>
            ))}
        </Reveal>
    </Section>
);

export default Skills;
