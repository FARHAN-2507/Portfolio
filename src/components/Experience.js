import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp',
      period: 'Jan 2021 - Present',
      description: 'Developed responsive web applications and ensured cross-browser compatibility.',
    },
    {
      title: 'Web Designer',
      company: 'DesignPro',
      period: 'May 2019 - Dec 2020',
      description: 'Created user-friendly website designs and optimized graphics for performance.',
    },
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <h2 className="text-center">Experience</h2>
        <div className="mt-4">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item mb-4">
              <h4>{exp.title}</h4>
              <p className="text-muted">{exp.company} | {exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
