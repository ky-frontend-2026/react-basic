import React from 'react'
import "./style/Main.css"
import image from '../assets/3.jpg'
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
const Main = () => {
    const techList = [
        {
            id: 1,
            title: "HTML",
            desc: "웹 구조를 만드는 마크업 언어",
            icon: htmlIcon,
        },
        {
            id: 2,
            title: "CSS",
            desc: "화면을 꾸미는 스타일 언어",
            icon: cssIcon,
        },
        {
            id: 3,
            title: "JavaScript",
            desc: "웹에 동작을 추가하는 언어",
            icon: jsIcon,
        },
    ];
    return (
        <main>
            <h3>main title</h3>
            <img src={image} alt="" />

            <ul className="tech-list">
                {techList.map((tech) => (
                    <li key={tech.id} className="tech-item">
                        <img src={tech.icon} alt={tech.title} />
                        <h4>
                            <strong>{tech.title}</strong>
                        </h4>
                        <p>{tech.desc}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Main