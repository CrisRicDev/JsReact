import React from 'react'
import Recurso1 from '../img/QR.png'
import Recurso2 from '../img/escudo.png'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';



function Dashboard() {

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="row m-3">
        <div id="menu" className="col-sm-3 bg-primary rounded-4 my-3" style={{ height: '100vh', marginLeft: '35px' }}>
          <Sidebar />
        </div>
        <div id="recursos" className="col-md-8 d-flex justify-content-center align-items-center border border-2 border-primary rounded-5 my-3 mx-auto">
          <div id="fondo" className="opacity-25 " style={{ width: '500px', height: '500px', backgroundImage: `url(${Recurso1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="" style={{ marginTop: '50%' }}>
            <img src={Recurso2} alt="logo" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
