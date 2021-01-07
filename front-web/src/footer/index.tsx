import './styles.css';
import { ReactComponent as Linkedin } from './Linkedin.svg'
import { ReactComponent as GitHubIcon } from './github.svg'

function Footer(){
   return( 
    <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior

        <div className="footer-icons">
            <a href="https://www.linkedin.com/in/matheus-pereira-2419a3140/" target="_new">
                <Linkedin/>
            </a>
            <a href="https://github.com/matheusosp/" target="_new">
                <GitHubIcon/>
            </a>
        </div>
    </footer>
   );
}

export default Footer;