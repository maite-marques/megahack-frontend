import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import homeImg from '../../assets/imagem-home-01.png';
import logoImg from '../../assets/logo.png'

export default function Login(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo da empresa" />
                <form>
                    <h1>Faça seu login</h1>

                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Senha"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#0A244A"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={homeImg} alt="Pessoa trabalhando de casa" />
        </div>
    );
}