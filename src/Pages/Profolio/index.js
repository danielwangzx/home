import { Component } from 'react';
import { invokePoints, setInProfolio } from '@/utils/pointsAnimation';
import './index.scss';

const profolioProjects = [
    {
        Name: 'JR Dashboard',
        Description: 'An online learning management portal, used by students, tutors, professional training instructors, marketing team, and academy management',
        Role: 'Full Stack developer',
        Pic: '',
        Link: '',
        'Tech-stack': {
            'Front-end': 'HTML5, CSS3, Less, JavaScript(ES6 +), React, Redux, Redux-saga, UmiJs, DvaJs, Ant Design, Zeplin',
            'Back-end': 'Node.js, KeystoneJs(express), Restful API, JWT, MongoDB',
            'cloud': 'Elastic Cache, Alicloud-video, serverless, aws-s3',
            'tooling': 'Git, NPM, Bitbucket, JIRA, Postman, Swagger-doc, webpack',
            'Methodologies': 'Agile/Scrum CI/CD',
        }
    }
];

export default class Profolio extends Component {
    componentDidMount() {
        invokePoints();
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className='portfolio'>
                <ul className='project-showcase__container'>
                    {profolioProjects.map((project) => {
                        return (<li className='project-showcase__wrapper border-professioanal'>
                            <div className='project-showcase--pic'>hahahhahah</div>
                            <div className='project-showcase__article'>
                                <div className='project-showcase__description'>{project.Description}
                                </div>
                                <div className='project-showcase__role'>{project.Role}</div>
                                <div className='project-showcase__techstack'>{project['Tech-stack']['Front-end']}</div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}