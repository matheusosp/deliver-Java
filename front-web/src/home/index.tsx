import './styles.css';
import { ReactComponent as Background }from './background.svg'
import Footer from '../footer';
import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
   return( 
       <>
        <div className="home-container">

            <div className="home-content">

                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br/> que entregamos <br/>pra você!!!
                    </h1>
                    <h3 className="home-subtitle">Escolha o seu pedido e em poucos minutos <br/>
                    levaremoss na sua porta</h3>
                    <Link to="orders" className="home-btn-order">             
                        make order
                    </Link>
                </div>
                <div className="home-image">
                    <Background/>
                </div>
            </div>

        </div>
        <Footer/>
        </>    
   );
}

export default Home;