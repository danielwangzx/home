import { Component } from 'react';
import { invokePoints, setOnTargetPage } from '@/utils/pointsAnimation';
import './index.scss';
import projectDashboard from '../../images/backgrounds/projectdashboard.png';
import projectKeystone from '@/images/backgrounds/projectkeystone.png';


const profolioProjects = [
    {
        Name: 'JR Dashboard',
        Year: '2020',
        Description: 'An online learning management portal, used by students, tutors, professional training instructors, marketing team, and academy management',
        Role: 'Full Stack developer',
        Link: 'https://learn.jiangren.com.au/user/login',
        'Tech-stack': {
            'Front-end': 'HTML5, CSS3, Less, JavaScript(ES6 +), React, React-Router, Redux, Redux-saga, UmiJs, DvaJs, Ant Design, Zeplin',
            'Back-end': 'Node.js, KeystoneJs(express), Restful API, MongoDB',
            'Cloud': 'Elastic Cache, Alicloud-video, serverless, aws-s3',
            'Tooling': 'Git, NPM, Bitbucket, JIRA, Postman, Swagger-doc, Umi-config(webpack)',
            'Methodologies': 'Agile/Scrum CI/CD',
        },
        profolioPic: projectDashboard,
        showCode: false,
    },
    {
        Name: 'JR Official Website',
        Year: '2020',
        Description: 'Official website of JR academy for business showcasing, content delivered via serverside rendering, also comes with the backend server hosting for learning portal and official website',
        Role: 'Full Stack developer',
        Link: 'https://learn.jiangren.com.au/user/login',
        'Tech-stack': {
            'FrontEnd': 'Pug, Sass, JavaScript(ES6 +), Jquery, React(SSR), React-Hooks Zeplin',
            'BackEnd': 'Node.js, KeystoneJs(express), Restful API, JWT, Nodemailer, Morgan, MongoDB',
            'Cloud': 'Elastic Cache, Alicloud-video, serverless, aws-s3',
            'Tooling': 'Git, NPM, Bitbucket, JIRA, Postman, Swagger-doc, webpack',
            'Methodologies': 'Agile/Scrum CI/CD',
        },
        profolioPic: projectKeystone,
        showCode: false,
    }
];

export default class Profolio extends Component {
    componentDidMount() {
        setOnTargetPage(true);
        invokePoints();
    }
    componentWillUnmount() {
        setOnTargetPage(false);
    }
    render() {
        return (
            <div className='portfolio'>
                <ul className='project-showcase__container'>
                    {profolioProjects.map((project, index) => {
                        return (<li className='project-showcase__wrapper border-professioanal' key={index}>
                            <div className='project-showcase__head'><a target='_blank' rel='noopener noreferrer' href={project.Link}>{project.Name}</a><span>Year: {project.Year}</span></div>
                            <div className='project-showcase__content'>
                                <div className='project-showcase--pic card '>
                                    <div className='card__side card__side--front'>
                                        <img src={project.profolioPic} alt={project.Name} />
                                    </div>
                                    <div className={`card__side card__side--back card__side--back-${index}`}>
                                        <button>hellowld</button>
                                    </div>
                                </div>

                                <div className='project-showcase__article'>
                                    <div className='project-showcase__description'>
                                        <div className='project-showcase__subheading'>Description</div>
                                        <div className='project-showcase__subtext'> {project.Description}</div>
                                    </div>
                                    <div className='project-showcase__description'>
                                        <div className='project-showcase__subheading'>My role</div>
                                        <div className='project-showcase__subtext'>{project.Role}</div></div>
                                    <div>
                                        <div className='project-showcase__subheading'>Techstack Used</div>
                                        {Object.keys(project['Tech-stack']).map((elem, index) => {
                                            return (<div className='project-showcase__subtext project-showcase__techstack '>{elem + ': ' + project['Tech-stack'][elem]}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}