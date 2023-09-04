import Image from 'react-bootstrap/Image';
import soonImg from '../assets/Coming soon.avif';
import ProjectCard from '../components/projectCard';
import Flex from '../assets/flexcellent-logo.png';
import Stream from '../assets/stream.png';
import Tech from '../assets/techBlogger.png';
import Books from '../assets/books.jpg';
import Text from '../assets/textEditor.png';

const galleryData = [
    {
        title: 'Flexcellent',
        deployedLink: 'https://flexcellent-fitness.herokuapp.com/',
        gitHubLink: 'https://github.com/pbodybrooks/Flexcellent-Fitness-Tracker',
        image: Flex,
        languages: 'Handlebars, Express JS, MySQL, Sequelize'

    },
    {
        title: 'Stream Machine',
        deployedLink: ' https://zwcook801.github.io/Debug_Thugz/',
        gitHubLink: 'https://github.com/zwcook801/Debug_Thugz',
        image: Stream,
        languages: 'CSS, JavaScript, API'
    },
    {
        title: 'Tech Blogger',
        deployedLink: 'https://hoopzone-1b405b9f7e9d.herokuapp.com/FavoriteTeams',
        gitHubLink: 'https://github.com/hattiesteed/super-awesome',
        image: Tech,
        languages: 'Javascript, React, MongoDB, Express'
    },
    {
        title: 'Books are Life',
        deployedLink: 'https://googlebookss-e20087324bb4.herokuapp.com/',
        gitHubLink: 'https://github.com/CaptFlopp3y/BooksAreLife',
        image: Books,
        languages: ''
    },
    {
        title: 'Text Editor',
        deployedLink: 'https://texteditorrr-75c8af39f1c0.herokuapp.com/',
        gitHubLink: 'https://github.com/CaptFlopp3y/TextEditor',
        image: Text,
        languages: ''
    },
    {
        title: 'SocialAPINoSQL',
        gitHubLink: 'https://github.com/CaptFlopp3y/SocialAPINoSQL',
        image: soonImg,
        languages: ''
    },
];

const ProjectPage = () => {
    return (
        <main className='main'>
            <header><h1>Projects</h1></header>
            <div className="grid-container">
                {galleryData.map((app, index) => (
                    <ProjectCard key={index}{...app} />
                ))}
            </div>
        </main>
    );
};
export default ProjectPage;