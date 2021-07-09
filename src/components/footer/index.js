import React from 'react';

const Footer = ({ social }) => (
    <footer className={"footer"}>
        <div className={"footer__container"}>
            <span>Copyright 2021</span>
            <ul className={"footer__socialLinks"}>
                {social && social.nodes.map((element, index) => (
                    <li key={`${element.label}-${index}`}><a href={element.link}>{element.label}</a></li>
                ))}
                <li><a href={'mailto:sebastian@alotama.com'}>Email</a></li>
            </ul>
        </div>
    </footer>
);

export default Footer;
