import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { consultarHotelesAction } from '../actions/hotelesAction'
import HotelCard from '../componentes/HotelCard'
import Amenidades from '../componentes/Amenidades'
import Imagenes from '../componentes/Imagenes'
import Habitaciones from '../componentes/Habitaciones'
import ModalLoading from '../componentes/ModalLoading'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../css/ListaHoteles.css'

const ListaHoteles = () => {

    const [ modalShow, setModalShow ] = useState(false)
    const [ datosHotelModal, setDatosHotelModal ] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const stateInicioSesion = useSelector( state => state.login ) 
    const token = stateInicioSesion.token

    const consultarHoteles = data => dispatch( consultarHotelesAction(data) )
    const hoteles = useSelector( state => state.hoteles.lista )
    const loading = useSelector( state => state.hoteles.loading )
    
    useEffect( () => {

        if( stateInicioSesion.token === null ) {
            navigate('/')
        }

    },[stateInicioSesion])

    const obtenerHoteles = () => {

        consultarHoteles( {token , cantidad:1000} )

    }

    useEffect( () => {
         
        if( Object.keys(datosHotelModal).length ) {
            setModalShow(true)
        }
    },[datosHotelModal])

    function ModalDetalles(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {datosHotelModal.nombre}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="amenidades" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="amenidades" title="Amenidades">
                        <Amenidades 
                            amenidades={datosHotelModal.amenidades}
                        />
                    </Tab>
                    <Tab eventKey="imagenes" title="Imágenes">
                        <Imagenes
                            imagenes={datosHotelModal.imagenes}
                        />
                    </Tab>
                    <Tab eventKey="habitaciones" title="Habitaciones" >
                        <Habitaciones
                            habitaciones={datosHotelModal.habitaciones}
                        />
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <div>
            <h1 style={{color: '#000', textAlign: 'center'}} className="mt-5">Lista De Hoteles</h1>
            <button onClick={ () => obtenerHoteles() } className="btn btn-primary w-100 mb-5">Clic Para Mostrar Hoteles</button>

            <div className="d-grid lista-hoteles mb-5">
                { 
                    hoteles.map( hotel => (
                        <HotelCard
                            className="sombra"
                            key={ hotel.id }
                            dataHotel={ hotel }
                            setDatosHotelModal={setDatosHotelModal}
                        />
                    ))
                }
            </div>

            <ModalDetalles
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <ModalLoading 
                modalLoading = { Boolean(loading) }
            />
        </div>
    )
}

export default ListaHoteles
