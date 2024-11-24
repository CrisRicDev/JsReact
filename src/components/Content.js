import React from 'react';
import Recurso11 from '../img/QR.png'
import Recurso12 from '../img/escudo.png'


function Content() {
  return (
    <div id="recursos" className="col-md-8 d-flex justify-content-center align-items-center border border-2 border-primary rounded-5 my-3 mx-auto">
            <div id="fondo" className="opacity-25 " style={{ width: '500px', height: '500px', backgroundImage: `url(${Recurso11})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="" style={{ marginTop: '50%' }}>
              <img src={Recurso12} alt="logo" />
            </div>
          </div>
  );
}



export default Content;