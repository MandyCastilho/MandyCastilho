import React from 'react';
import amandaimagem from '../assets/img1-pq.jpg'

function About() {
    return (
        <section className="about">

                <div>
                    < img className="img-pht" src={amandaimagem} alt="Imagem da criadora do site" ></img>
                </div>

                <div className="texto"> 
                    <h2>Sobre Mim:</h2>
                    <p>Sou uma desenvolvedora iniciante apaixonada por tecnologia e resolução de problemas através da programação. Minha jornada na área começou por interessse em saber em como são feitos os sites, e desde então, tenho me dedicado a aprender e aplicar minhas habilidades em projetos práticos.</p>
                </div>
            
        </section>
    );
}

export default About;
