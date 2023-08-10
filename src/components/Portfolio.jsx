import React from 'react';
import FlexImg from './assets/flexcellent-logo.png';
import streamImg from './assets/stream.png';
import soonImg from './assets/Coming soon.avif';
import hoopZone from './assets/HoopZone.jpg';
import books from './assets/books.jpg'

const galleryData = [
    {
        title: 'Flexcellent | Handlebars, Express JS, MySQL, Sequelize',
        deployedLink: 'https://flexcellent-fitness.herokuapp.com/',
        gitHubLink: 'https://github.com/pbodybrooks/Flexcellent-Fitness-Tracker',
        image: FlexImg
    },
    {
        title: 'Stream Machine | CSS, JavaScript',
        deployedLink: '',
        gitHubLink: 'https://github.com/zwcook801/Debug_Thugz',
        image: streamImg
    },
    {
        title: 'Hope Zone | Javascript, React, MongoDB, Express ',
        deployedLink: 'https://hoopzone-1b405b9f7e9d.herokuapp.com/FavoriteTeams',
        gitHubLink: 'https://github.com/hattiesteed/super-awesome',
        image: hoopZone
    },
    {
        title: 'Books are Life',
        deployedLink: 'https://googlebookss-e20087324bb4.herokuapp.com/',
        gitHubLink: 'https://github.com/CaptFlopp3y/BooksAreLife',
        image: books
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