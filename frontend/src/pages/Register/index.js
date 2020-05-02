import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input'

import './styles.css';
import logoImg from '../../assets/logo.png';
import { Component } from 'react';
import { Form } from '@unform/core';

class Register extends Component {
    handleSubmit = (data) => {
        alert('TESTE')
    };


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
                    <div id="unFormDiv">
                        <Form onSubmit={this.handleSubmit}>
                            <Input name="nome" type="text" placeholder="Primeiro Nome"/>
                            <Input name="sobrenome" type="text" placeholder="Sobrenome"/>
                            <div className="grupoCPF">
                                <Input name="cpf" type="text" placeholder="CPF" required />
                                <Input name="data" type="date" style={{ width: 260 }} />
                            </div>
                            <Input name="rg" type="text" placeholder="RG"/>
                            <Input name="email" type="email" placeholder="E-mail" required/>

                            <div className="input-radio">
                                <input type="radio" id="perfil" name="perfil" value="participante" checked></input>
                                <label for="participante">Participante</label>
                                <input type="radio" id="perfil" name="perfil" value="palestrante" ></input>
                                <label for="palestrante">Palestrante</label>
                                <input type="radio" id="perfil" name="perfil" value="organizador" ></input>
                                <label for="organizador">Organizador</label>
                            </div>

                            <button className="button" type="submit">Cadastrar</button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;