import React from 'react';
import amandaimagem from '../assets/img2-pq.jpg'

function Skills() {
    return (
        <section className="skills">

            <div>
                <h2>Habilidades:</h2>
                <ul className='skills-ul'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                </ul>
            </div>

            <div>
            < img className="img-cod" src={amandaimagem} alt="Imagem de código HTML5 e CSS3" ></img>
            </div>

        </section>
    );
}

export default Skills;
