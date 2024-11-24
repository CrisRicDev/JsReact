import React from 'react'
import Recurso1 from '../img/QR.png'
import Recurso2 from '../img/escudo.png'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function ListadoInicial() {
    return (
        <div>
            <Header />
            <div className="row m-3">
                <div id="menu" className="col-sm-3 bg-primary rounded-4 my-3" style={{ height: '100vh', marginLeft: '35px' }}>
                    <Sidebar />
                </div>

                <div id="recursos" className="col-md-8 position-relative d-flex justify-content-center align-items-center border border-2 border-primary rounded-5 mx-auto"
                    style={{ height: '100vh', marginTop: '25px' }}>

                    <div id="fondo" className="opacity-25 position-absolute w-100 h-100 rounded-5"
                        style={{
                            backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 80%, rgba(0,0,0,0) 10%), url(${Recurso2}), url(${Recurso1})`,
                            backgroundSize: '58% 90%, 10% 20%',
                            backgroundPosition: 'center, right bottom',
                            backgroundRepeat: 'no-repeat, no-repeat',}}>
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle opacity-75 p-3 w-100" style={{ maxWidth: '980px', height: '90vh' }}>
                        <div className="table-responsive h-100">
                            <table className="table table-bordered border-primary border-3">
                                <thead>
                                    <tr>
                                        <th className="text-center fw-normal fs-4 text-white bg-dark">ID</th>
                                        <th className="text-center fw-normal fs-4 text-white bg-dark">PATRULLA</th>
                                        <th className="text-center fw-normal fs-4 text-white bg-dark">CUADRANTE</th>
                                        <th className="text-center fw-normal fs-4 text-white bg-dark">UBICACIÓN</th>
                                        <th className="text-center fw-normal fs-4 text-white bg-dark">RECORRIDO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ height: '470px' }}></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
