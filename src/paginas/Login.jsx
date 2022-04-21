import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ModalLoading from '../componentes/ModalLoading'

import '../css/Login.css'

import { iniciarSesionAction } from '../actions/loginAction'

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const iniciarSesion = credenciales => dispatch( iniciarSesionAction(credenciales) )
    const stateInicioSesion = useSelector( state => state.login ) 

    const handleSubmit = e => {
        e.preventDefault();

        iniciarSesion({
            email,
            password,
            sistema: 2
        })
    }

    useEffect( () => {

        if( stateInicioSesion.token !== null ) {
            navigate('lista-hoteles')
        }

    },[stateInicioSesion])

    return (
        <div className="d-flex height-33 align-center div-login">
            <Form className="formulario-login sombra" onSubmit={handleSubmit}>
                <h2 className='text-center'>Bienvenido!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo electrónico" value={email} onChange={ e => setEmail(e.target.value) } />
                    <Form.Text className="text-muted">
                    Correo electrónico proporcionado anteriormente.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={ e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100 mt-2'>
                    Entrar
                </Button>
            </Form>

            <ModalLoading 
                modalLoading = { Boolean(stateInicioSesion.loading) }
            />
        </div>
    )
}

export default Login
