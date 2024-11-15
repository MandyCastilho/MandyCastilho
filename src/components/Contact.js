import React from 'react';
import emailicon from '../assets/icon-email.png';
import githubicon from '../assets/icon-github.png';
import linkeicon from '../assets/icon-linke.png';
import wppicon from '../assets/icon-wpp.png';

function Contact() {
    return (
        <section>

            <h2>Contato:</h2>
            <div>

            <a href="mailto:castilhoamandaramos@gmail.com" target='blank' className="contact-p">
                <div className="contact">

                    <div>
                        <img src={emailicon} className='icones'></img>
                    </div>

                    <div>
                        <p>Email:castilhoamandaramos@gmail.com</p>
                    </div>

                </div>
            </a>

            <a href="https://github.com/MandyCastilho" target='blank' className="contact-p">
                <div className="contact">
                    
                    <div>
                        <img src={githubicon} className='icones'></img>
                    </div>

                    <div>
                        <p>GitHub: Amanda Castilho</p>
                    </div>

                </div>
            </a>

            <a href="https://www.linkedin.com/in/amanda-ramos-castilho-5ba928257/" target='blank' className="contact-p">
                <div className="contact">

                    <div>
                        <img src={linkeicon} className='icones'></img>
                    </div>

                    <div>
                        <p>LinkedIn: Amanda Ramos Castilho</p>
                    </div>

                </div>
            </a>

            <a href="https://wa.me/5511985026264" target='blank' className="contact-p">
                <div className="contact">

                    <div>
                        <img src={wppicon} className='icones'></img>
                    </div>

                    <div>
                        <p>WhatsApp: Envie-me uma mensagem no WhatsApp</p>
                    </div>

                </div>
            </a>

            </div>

        </section>
    );
}

export default Contact;
