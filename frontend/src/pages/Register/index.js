import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import InputUnForm from '../../components/InputUnForm'

import './styles.css';
import logoImg from '../../assets/logo.png';
import { Component } from 'react';

class Register extends Component {

    render() {
        return (
            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Logo"></img>
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro para participar de eventos online. Não se esqueça de fazer networking.</p>
                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#0A244A" />
                        Não tenho cadastro
                    </Link>
                    </section>

                    <form>
                        <input placeholder="Primeiro Nome" required></input>
                        <input placeholder="Sobrenome"></input>
                        <div className="grupoCPF">
                            <input placeholder="CPF" required />
                            <input type="date" style={{ width: 260 }} />
                        </div>
                        <input placeholder="RG"></input>
                        {/* <input placeholder="Endereço"></input> */}
                        {/* <input type="tel" placeholder="(    ) "></input> */}
                        <input type="email" placeholder="E-mail" required></input>

                        <div className="input-radio">
                            <input type="radio" id="perfil" name="perfil" value="participante" checked></input>
                            <label for="participante">Participante</label>
                            <input type="radio" id="perfil" name="perfil" value="palestrante" ></input>
                            <label for="palestrante">Palestrante</label>
                            <input type="radio" id="perfil" name="perfil" value="organizador" ></input>
                            <label for="organizador">Organizador</label>
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;