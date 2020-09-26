import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { Container, Content, Header, Footer, Projects } from './styles';

import linkedInLogo from '../../assets/linkedinWhite.png';
import githubLogo from '../../assets/githubIconWhite.png';
import emailLogo from '../../assets/emailWhite.png';
import gobarber from '../../assets/gobarberLogon.svg';
import githubExplorer from '../../assets/githubExplorer.svg';
import GoFinances from '../../assets/GoFinances.svg';

const LandingPage: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <h1>Eder Chiquito</h1>
            <p>Bachelor of Computer Engineering at Universidade Positivo.</p>
            <p>
              Currently working at{' '}
              <a href="https://curi.adv.br/">
                {' '}
                Rücker Curi Law Office <BiLinkExternal />
              </a>{' '}
              as full stack developer.{' '}
            </p>
            <h2>Technologies</h2>
            <ul>
              {/* <li>Python</li>
              <li>Flask</li> */}
              <li>
                <FaReact /> ReactJS
              </li>
              <li>
                <FaReact /> ReactNative
              </li>
              <li>
                <FaNodeJs /> Node.js
              </li>
              <li>
                <SiTypescript /> TypeScript
              </li>
              <li>
                <FaPython /> Python
              </li>
            </ul>
          </Header>
          <Projects>
            <h1>PROJETOS</h1>
            <hr />
            <a href="https://github.com/EderAC/gobarber-web">
              <img src={gobarber} alt="Project" />
              <div>
                <strong>EderAC/gobarber-web</strong>
                <p>
                  Projeto para agendamento de serviços de barbearia,
                  desenvolvido com ReactJS durante o BootCamp da RocketSeat
                </p>
              </div>
              <FiChevronRight />
            </a>
            <a href="https://github.com/EderAC/githubexplorer-web">
              <img src={githubExplorer} alt="Project" />
              <div>
                <strong>EderAC/githubexplorer-web</strong>
                <p>Sistema web para monitoramento de projetos no github</p>
              </div>
              <FiChevronRight />
            </a>
            <a href="https://github.com/EderAC/gofinances-web">
              <img src={GoFinances} alt="Project" />
              <div>
                <strong>EderAC/gofinances-web</strong>
                <p>Projeto de um sistema de monitoramento de gastos pessoais</p>
              </div>
              <FiChevronRight />
            </a>
          </Projects>
          <Footer>
            <a href="https://www.linkedin.com/in/eder-de-almeida-chiquito-993532104/">
              <img src={linkedInLogo} alt="LinkedIn" />
            </a>
            <a href="https://github.com/EderAC">
              <img src={githubLogo} alt="GitHub" />
            </a>
            <a href="mailto:eder.almeida40@gmai.com?subject=Contato">
              <img src={emailLogo} alt="email" />
            </a>
          </Footer>
        </Content>
      </Container>
    </>
  );
};

export default LandingPage;
