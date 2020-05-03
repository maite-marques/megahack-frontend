import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useFormik } from 'formik';



import logoImg from '../../assets/logo.png';
import './styles.css';

export default function Register() {


    const formik = useFormik({
        initialValues: {
            nome: '',
            sobrenome: '',
            email: '',
            linkedin: '',
          },
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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

                            {/* <button type="submit"  >Cadastrar</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
