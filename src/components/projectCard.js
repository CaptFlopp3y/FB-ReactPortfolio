import Image from 'react-bootstrap/Image';

const ProjectCard = (props) => {
    return (
        <div className="grid-item">
            <h2>{props.title}</h2>
            <Image className="projectImg" src={props.image} />
            <p>{props.languages}</p>
            <p><a href={props.deployedLink}>{props.deployedLink}</a> </p>
            <p><a href={props.gitHubLink}>{props.gitHubLink}</a> </p>
        </div>
    );
};

export default ProjectCard;