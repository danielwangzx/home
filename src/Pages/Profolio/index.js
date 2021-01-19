import { Component } from 'react';
import { invokePoints, setOnTargetPage } from '@/utils/pointsAnimation';
import './index.scss';
import projectDashboard from '../../images/backgrounds/projectdashboard.png';
import projectKeystone from '@/images/backgrounds/projectkeystone.png';
import projectPortfolio from '@/images/backgrounds/projectportfolio.png';
import projectHandy from '@/images/backgrounds/projecthandy.png';
import projectWeather from '@/images/backgrounds/projectweatherapp.jpg';

const profolioProjects = [
    {
        Name: 'JR Academy LMS',
        Year: '2020',
        Description: 'An online learning management portal, used by students, tutors, professional training instructors, marketing team, and academy management',
        Role: 'Full Stack developer',
        Link: 'https://learn.jiangren.com.au/user/login',
        'Tech-stack': {
            'Front-end': 'HTML5, CSS3, Less, BEM, JavaScript(ES6 +), React, React-Router, Redux, Redux-saga, UmiJs, DvaJs, Ant Design, Zeplin',
            'Back-end': 'Node.js, KeystoneJs(express), Restful API, MongoDB',
            'Cloud': 'Elastic Cache, Alicloud-video, Serverless, aws-s3',
            'Tooling': 'Git, NPM, Bitbucket, JIRA, Postman, Swagger-doc, Umi-config(webpack)',
            'Methodologies': 'Agile/Scrum CI/CD',
        },
        bulletPoint: ['Successfully upgraded project framework to umi3','Provided tech orientation for new dev recruits','Modified video playback system for custimsed function','Implemented course management, purchasing interactions','Optimised webpack setting for smaller bundle better speed','code reuse for different scenario, impletened role control'],
        profolioPic: projectDashboard,
        showCode: false,
        commercial: true,
    },
    {
        Name: 'JR Academy Official Website',
        Year: '2020',
        Description: 'Official website of JR academy for business showcasing, contentiful bloging delivered via serverside rendering, also comes with the backend server hosting for learning portal and official website',
        Role: 'Full Stack developer',
        Link: 'https://jiangren.com.au/',
        'Tech-stack': {
            'FrontEnd': 'Pug, Sass, BEM, JavaScript(ES6 +), Jquery, React(SSR), React-Hooks, Zeplin',
            'BackEnd': 'Node.js, KeystoneJs(express), Restful API, JWT, Nodemailer, Morgan, MongoDB',
            'Cloud': 'Elastic Cache, Alicloud-video, Serverless, aws-s3',
            'Tooling': 'Git, NPM, Bitbucket, JIRA, Postman, Swagger-doc, webpack',
            'Methodologies': 'Agile/Scrum CI/CD',
        },
        bulletPoint: ['improved homepage lighthouse score by 25','redesigned database schema and upload process of video, leanrning material','crafted UI component based on design providing feedback','created and modifed various utitles function and stood the test of peer developers','intensive backend nodejs keystonejs development'],
        profolioPic: projectKeystone,
        showCode: false,
        commercial: true,
    },
    {
        Name: "Handy App",
        Year: '2020',
        Description: 'a convinient online web app for looking up local tradies, house services and trading second hand goods',
        Role: 'Fullstack developer',
        Link: 'https://jiangren.com.au/',
        'Tech-stack': {
            'FrontEnd': 'React, Html, Scss, Javascript, React-Redux, Redux-saga, Redux-thunk, Axios, Lodash, React-Router',
            'BackEnd': 'Nodejs, Koa, Mongodb, JWT',
            'Tooling': 'Git, NPM, Github, Github-page, webpack',
            'Methodologies': 'Agile/Scrum CI/CD',
        },
        bulletPoint:['fast prototyping recreated UI with pixel accurate precisioncy','Worked in a team of 5 as personal project and exercised Agile/Scrum','authorised private route with role control'],
        showCode: true,
        commercial: false,
        profolioPic: projectHandy,
    },
    {
        Name: "Weather App",
        Year: '2019',
        Description: 'a convinient online web app for weather look up, used to learn new feature after react-hooks was introduced',
        Role: 'Frontend developer',
        Link: 'https://github.com/danielwangzx/weather-app',
        'Tech-stack': {
            'FrontEnd': 'React, React-hooks, Html, Scss, Javascript,',
            'BackEnd': 'Openweatherapi',
            'Tooling': 'Git, NPM, Github, Github-page, webpack',
            'Methodologies': 'CI/CD',
        },
        bulletPoint:['implemented latest react hooks features', `prefetch with users's default location and shows up to 7 days of following result`,'dynamic background matching search result'],
        showCode: true,
        commercial: false,
        profolioPic: projectWeather,
    },
    {
        Name: "Daniel Wang's Blog",
        Year: '2021',
        Description: 'a place for me to showcase projects, getting to know new friends',
        Role: 'Frontend developer',
        Link: 'https://danielwangzx.github.io/home/',
        'Tech-stack': {
            'FrontEnd': 'React, Html, Scss, Javascript, React-router, Redux-saga, Antd',
            'BackEnd': 'Emailjs',
            'Tooling': 'Git, NPM, Github, Github-page, webpack',
            'Methodologies': 'Agile/Scrum CI/CD',
        },
        bulletPoint: ['configured an react boiler plate from scratch can be used for futuer project','full responsive, demostrated various css tricks','star scatter effect, low performance cost, retained to desired page'],
        showCode: true,
        commercial: false,
        profolioPic: projectPortfolio,
    },  
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
                                    <div className={`card__side card__side--back card__side--back-${index%6}`}>
                                        <div className='card__side--backheading'>{project.commercial ? 'Commercial' : 'Personal'}</div>
                                        <ul className='card__side--backtext'>
                                            {project.bulletPoint.map((elem,index)=>{
                                                return(<li key={index} className='card__side--bulletpoint'><i class="far fa-dot-circle"></i>{' ' + elem}</li>)
                                            })}
                                        </ul>
                                        <div className='card__side--backbutton'>
                                            <a target='_blank' rel='noopener noreferrer' href={project.Link}>{project.showCode?'Source Code':'Demo'}</a>
                                        </div>
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