import React from 'react';

const galleryData = [
    {
        title: 'Flexcellent | Pico CSS, JavaScript',
        deployedLink: 'https://flexcellent-fitness.herokuapp.com/',
        gitHubLink: 'https://github.com/pbodybrooks/Flexcellent-Fitness-Tracker',
        image: ','
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: '',
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: '',
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: '',
    }
];
export default function Portfolio() {
    return (
        <div className='portfolio-gallery'>
            {galleryData.map((app, index) => (
                <div className='gallery-item main-container' key={index}>
                    <div className='gallery-headers'>
                        <h3 className='gallery-titles'>{app.title}</h3>
                        <div className='gallery-links'>
                            <div style={{ padding: '5px' }}>
                                <a href={app.deployedLink} target='_blank' rel='noopener noreferrer'>
                                    Deployed app
                                </a>
                            </div>

                            <div style={{ padding: '5px' }}>
                                <a href={app.gitHubLink} target='_blank' rel='noopener noreferrer'>
                                    GitHub repo
                                </a>
                            </div>

                        </div>
                    </div>
                    <img src={app.image}
                        alt={app.title}
                        className={index === 0 ? 'horiseon-image' : 'gallery-images'}
                    // className='gallery-images' 
                    />
                </div>
            ))}
        </div>
    );
}