import React from 'react'
import Header from '../components/Header'

export default function ScanGallery() {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="col-11 d-flex justify-content-center align-items-center  m-5 border border-3 border-primary rounded-4" style={{ height: '40vh', position: 'relative' }}>
                <div className="btn btn btn-primary y btn-outline d-flex align-items-center mb-1  rounded-4">
                    <i class="bi bi-camera mx-4 my-1" style={{ fontSize: '80px' }} ></i>
                    <div className="border-end border-3  my-3 border-emphasis" style={{ height: '80px' }}></div>
                    <a href="#" className="btn text-white p-0 border-0 fs-3 m-4" >  Scan or Gallery</a>
                </div>
            </div>

            <div className='px-5 mb-5 d-flex justify-content-center align-items-center '>

                <div className='col-md-5 mx-3'>
                    <div className='px-5 mb-2'>
                        <a href="#" className="btn text-body-secondary p-0 border-0 fs-3 m-" >  ID PATRULLA</a>
                        <hr className="opacity-100 border-3 m-0 border-primary" />
                    </div>
                    <div className='px-5 mt-4' >
                        <a href="#" className="btn text-body-secondary p-0 border-0 fs-3 m-" > CUADRANTE</a>
                        <hr className="opacity-100 border-3 m-0 border-primary" />
                    </div>
                </div>
                <div className='col-md-5 mx-3'>
                    <div className='px-5 mb-2'>
                        <a href="#" className="btn text-body-secondary p-0 border-0 fs-3 m-" >  UBICACIÓN</a>
                        <hr className="opacity-100 border-3 m-0 border-primary" />
                    </div>
                    <div className='px-5 mt-4'>
                        <a href="#" className="btn text-body-secondary p-0 border-0 fs-3 m-" >  HORA REGISTRO</a>
                        <hr className="opacity-100 border-3 m-0 border-primary" />
                    </div>
                </div>
            </div>
            <div className="col-11 d-flex justify-content-center align-items-center  my-2 mx-5" style={{ height: '20vh', position: 'relative' }}>
                <div className="btn btn btn-primary y btn-outline d-flex align-items-center mb-1  rounded-4">
                    <i class="bi bi-geo-alt-fill mx-4 my-1 fs-2"  ></i>
                    <div className="border-end border-3  my-3 border-emphasis" style={{ height: '30px' }}></div>
                    <a href="#" className="btn text-white p-0 border-0  m-3" >  REGISTRAR RECORRIDO</a>
                </div>
            </div>

        </div>
    )
}
