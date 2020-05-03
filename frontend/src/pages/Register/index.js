import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useFormik } from 'formik';
import Axios from 'axios';

import logoImg from '../../assets/logo.png';
import './styles.css';

const url_back = 'http://localhost:8080'

export default function Register() {


    const formik = useFormik({
        initialValues: {
            nome: '',
            sobrenome: '',
            cpf: '',
            email: '',
            linkedin: '',
        },
        onSubmit: values => {
            const json = JSON.stringify(values, null, 2);
            Axios.post(`http://localhost:8080/api/pessoa`, json, {
                headers: { "Content-Type": "application/json" }
            }).then(
                (resp) => {
                    console.log(resp.data)
                    alert('sucesso');
                }

            ).catch(
                (err) => {
                    console.log("ERRO - " + JSON.stringify(err));
                    console.log(err);
                    alert("ERRO - " + JSON.stringify(err));
                }
            )

        },
    });

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
                    <form onSubmit={formik.handleSubmit}>
                        <div className="contentForm">
                            <input
                                name="nome"
                                type="text"
                                placeholder="Primeiro Nome"
                                onChange={formik.handleChange}
                                value={formik.values.nome}
                            />

                            <input
                                name="sobrenome"
                                type="text"
                                placeholder="Sobrenome"
                                onChange={formik.handleChange}
                                value={formik.values.sobrenome}
                            />
                            <input
                                name="cpf"
                                type="text"
                                placeholder="CPF"
                                onChange={formik.handleChange}
                                value={formik.values.cpf}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <input
                                name="linkedin"
                                type="text"
                                placeholder="linkedin"
                                onChange={formik.handleChange}
                                value={formik.values.linkedin}
                            />


                            <button className="button" type="submit">Cadastrar</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
