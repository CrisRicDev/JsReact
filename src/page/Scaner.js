import React from 'react'
import Recurso1 from '../img/QR.png'
import Recurso2 from '../img/escudo.png'
import Header from '../components/Header'

export default function Scaner() {
    return (
        <div>
            <Header />
            <div className="col-11 d-flex justify-content-center align-items-center  m-5 border border-2 border-primary rounded-5" style={{ height: '90vh', position: 'relative' }} >
                <div
                    className="d-flex flex-column justify-content-center align-items-center border border-2 border-primary rounded-5"
                    style={{ height: '460px', width: '520px', boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.99)', overflow: 'hidden', }}>
                    <img src={Recurso1} alt="QR" className="mb-3" style={{ width: '280px', height: '280px' , objectFit: 'contain', }} />
                    <hr className="opacity-100 border-2 border-primary w-75 my-2" />
                    <h1 className="text-center text-secondary px-2">ESCANEAR QR</h1>
                </div>
                <div
                    className="d-flex position-absolute" style={{ bottom: '20px', right: '20px' }}>
                    <img src={Recurso2} alt="logo" />
                </div>
            </div>

        </div>
    )
}
