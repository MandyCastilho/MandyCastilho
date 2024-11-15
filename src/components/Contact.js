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

                <div className="contact">

                    <div>
                        <img src={emailicon} className='icones'></img>
                    </div>

                    <div>
                        <p>Email: <a href="mailto:castilhoamandaramos@gmail.com" target='blank' className="contact-p">castilhoamandaramos@gmail.com</a></p>
                    </div>

                </div>

                <div className="contact">

                    <div>
                        <img src={githubicon} className='icones'></img>
                    </div>

                    <div>
                        <p>GitHub: <a href="https://github.com/MandyCastilho" target='blank' className="contact-p">Amanda Castilho</a></p>
                    </div>

                </div>

                <div className="contact">

                    <div>
                        <img src={linkeicon} className='icones'></img>
                    </div>

                    <div>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/amanda-ramos-castilho-5ba928257/" target='blank' className="contact-p">Amanda Ramos Castilho</a></p>
                    </div>

                </div>

                <div className="contact">

                    <div>
                        <img src={wppicon} className='icones'></img>
                    </div>

                    <div>
                        <p>WhatsApp: <a href="https://wa.me/5511985026264" target='blank' className="contact-p">Envie uma mensagem no WhatsApp</a></p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;
