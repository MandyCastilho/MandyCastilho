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
                    <p>Sou uma desenvolvedora iniciante com um forte desejo de aprender e crescer na área de tecnologia. Minha paixão pela tecnologia é impulsionada pelo desejo de entender como as coisas funcionam por trás das telas, e usar esse conhecimento para construir experiências interativas e úteis para as pessoas.</p>
                    <p>Venho desenvolvendo minhas habilidades técnicas por meio de cursos intensivos e projetos pessoais, com foco em JavaScript, HTML e CSS. Tenho grande interesse por frameworks modernos como React, e estou constantemente explorando novas ferramentas para me manter atualizada. Adoro a oportunidade de me desafiar, e minha maior motivação é ver uma ideia ganhar vida por meio do código.</p>
                    <p>Atualmente, estou em busca de oportunidades que me permitam continuar crescendo como desenvolvedora front-end, contribuindo para projetos que impactem positivamente as pessoas e me desafiando a ser uma profissional cada vez mais completa. Meu objetivo é fazer parte de uma equipe onde a inovação é uma prioridade e o aprendizado contínuo é incentivado.</p>
                </div>
            
        </section>
    );
}

export default About;
