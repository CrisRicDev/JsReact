import React from 'react'
import Recurso1 from '../img/QR.png'
import Recurso2 from '../img/escudo.png'
import Header from '../components/Header'

export default function login() {
  return (
    <div>
    <div>
      <Header/>
    </div>
    <div className="col-11 row align-items-center ms-5">
          <div className="col-md-5 ms-5 text-center">
            <img src={Recurso1} alt="QR" className="img-fluid my-5 py-5" />
          </div>

          <div className="col-md-5 d-flex ">
            <div className="col-1">
              <div className="border-end border-3 border-primary" style={{ height: '450px' }}></div>
            </div>

            <div className="col-3 m-5" style={{ width: '400px' }}>
              <div id="inicio" className="mb-4">
                <h1 className="text-start text-primary display-1 ">SICRP</h1>
                <hr className="opacity-100 border-3 border-primary mb-0" />
                <p className="text-start px-2">Sistema Integrado de Control de Recorridos de Policía</p>
              </div>
              <div id="form" className="row">
                <div className="rounded-2 p-4 d-flex flex-column justify-content-center align-items-center bg-primary">
                  <input type="text" className="form-control m-1 rounded-0" placeholder="ID Patrulla" style={{ maxWidth: '300px' }} />
                  <input type="text" className="form-control m-1 rounded-0" placeholder="Cuadrante" style={{ maxWidth: '300px' }} />
                </div>
                <div id="button-ingreso" className="p-0 mb-2 text-center">
                  <button className="btn btn-primary text-light m-3" style={{ width: '200px' }}>Ingresar</button>
                </div>
              </div>
            </div>

          </div>
          <div id="escudo" className="container mt-4 position-relative ms-3" >
            <img src={Recurso2} alt="escudo" className="img-fluid  position-absolute bottom-0 end-0" />
          </div>
        </div>
    </div>
  )
}
