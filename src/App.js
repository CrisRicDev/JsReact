import './App.css';
import Recurso1 from './img/QR.png'
import Recurso2 from './img/escudo.png'
import Recurso3 from './img/casa.png'

function App() {
  return (
    <section >
      <section id="login" className="p-0 container-fluid">
        <header className="row p-0 m-0">
          <div className="col-md-10 d-flex justify-content-center p-4" style={{backgroundColor:'#0B7FCE'}}></div>
          <div className="col-md-1  d-flex justify-content-center ms-5 p-2" style={{backgroundColor:'#0B7FCE'}}></div>
        </header>
        <div className="col-3 d-flex align-items-center ">

          <img src={Recurso1} alt="QR" className="m-5 p-5" />

          <div className=" border-end m-3 mx-8 " style={{border: '3px solid #0B7FCE', height: '450px' }}></div>
          <div className="col m-4 mb-4 ">
            <div className="m-5">
              <div id="inicio" className="mb-4">
                <h1 className=" text-start" style={{ color:'#0B7FCE', width: '450px', fontSize: '70px' }}>SICRP</h1>
                <hr className="opacity-100  " style={{ border: '2px solid #0B7FCE' , marginBottom:'0px'}} />
                <p className="text-start" style={{padding:'10px'}}>Sistema Integrado de Control de Recorridos de Policía</p>
              </div>
              <div id="form" className="row">
                <div className="rounded-2  p-4 d-flex flex-column justify-content-center align-items-center " style={{backgroundColor:'#0B7FCE'}}>
                  <input type="text" className="form-control m-1 rounded-0" placeholder="ID Patrulla" style={{ maxWidth: '300px' }} />
                  <input type="text" className="form-control m-1  rounded-0" placeholder="Cuadrante" style={{ maxWidth: '300px' }} />
                </div>

                <div id="button ingreso" className="p-0 text-start  d-flex justify-content-center" style={{Color:'#0B7FCE'}}>
                  <button className="btn m-3 btn-primary text-light" style={{ width: '200px'  }}>Ingresar</button>
                </div>
              </div>
            </div>
          </div>
          <div id="escudo" class="container mb-5" style={{ position: 'relative', height: '650px', paddingLeft: '90px' }} >
            <img src={Recurso2} alt="escudo" className="img-fluid position-absolute bottom-0 end-0" />
          </div>
        </div>
      </section>


      <section id="Dashboard" className="p-0 m-0 container-fluid">
        <header className="row m-0 ">
          <div className="col-md-10 bg-primary d-flex justify-content-center p-4 mb-2 "></div>
          <div className="col-md-1 bg-primary d-flex justify-content-center ms-5 p-2 mb-2"></div>
        </header>
        <div className=" d-flex" style={{ marginBottom: '20px' }}>
          <div id="menu" className="col bg-primary rounded-4" style={{ height: '100vh', marginLeft: '35px', marginTop: '25px' }}>
            <div className="col " style={{ marginTop: '14%', marginLeft: '10%' }}>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">INICIO</a>
              </div>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">REPORTE CUADRANTE</a>
              </div>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">CUADRANTES</a>
              </div>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">PATRULLAS</a>
              </div>
            </div>
          </div>

          <div id="recursos" className="d-flex justify-content-center align-items-center border border-2 border-primary rounded-5 col-9" style={{ width: '980px', height: '100vh', marginTop: '25px', marginRight: '40px', marginLeft: '20px' }}>
            <div id="fondo" className="opacity-25 " style={{ width: '550px', height: '85vh', backgroundImage: `url(${Recurso1})`, backgroundSize: 'cover', backgroundPosition: 'center', marginLeft: '200px', marginRight: '100px' }}></div>
            <img src={Recurso2} alt="logo" style={{ marginTop: '50%' }} />
          </div>
        </div>
      </section>


      <section id="Listado inicial" className="p-0 m-0 container-fluid">
        <header className="row m-0 ">
          <div className="col-md-10 bg-primary d-flex justify-content-center p-4 mb-2 "></div>
          <div className="col-md-1 bg-primary d-flex justify-content-center ms-5 p-2 mb-2"></div>
        </header>
        <div className=" d-flex" style={{ marginBottom: '20px' }}>
          <div id="menu" className="col bg-primary rounded-4" style={{ height: '100vh', marginLeft: '35px', marginTop: '25px' }}>
            <div className="col " style={{ marginTop: '14%', marginLeft: '10%' }}>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">INICIO</a>
              </div>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">REPORTE CUADRANTE</a>
              </div>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">CUADRANTES</a>
              </div>
              <div className="d-flex">
                <img src={Recurso3} alt="logo" class="m-2 fs-2" style={{ width: '38px', height: '40px' }} />
                <a href="#" class="btn text-white p-0 border-0 m-2">PATRULLAS</a>
              </div>
            </div>
          </div>

          <div id="recursos" className="position-relative d-flex justify-content-center align-items-center border border-2 border-primary rounded-5 col-9" style={{ width: '980px', height: '100vh', marginTop: '25px', marginRight: '40px', marginLeft: '20px' }}>
            <div id="fondo" className="opacity-25" style={{
              width: '940px', height: '90vh',
              backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 80%, rgba(0,0,0,0) 10%),url(${Recurso2}), url(${Recurso1})`,
              backgroundSize: '58% 100%, 10% 20%',
              backgroundPosition: 'center, right bottom',
              backgroundRepeat: 'no-repeat, no-repeat',
              paddingLeft: '200px',
              paddingRight: '100px',
            }}
            >
            </div>
            <div className="position-absolute top-50 start-50  translate-middle border border-2 border-primary rounded-5" style={{ width: '980px', height: '100vh' }}>

              <div class="table-responsive " style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '4%' }}>
                <table class="table table-bordered  border border-primary border-3 ">
                  <thead className="text">
                    <tr className="">
                      <th className="w-1 fw-normal text-center text-white" style={{ backgroundColor: '#616060' }}>ID</th>
                      <th className=" fw-normal text-center text-white" style={{ backgroundColor: '#616060' }}>PATRULLA</th>
                      <th className=" fw-normal text-center text-white" style={{ backgroundColor: '#616060' }}>CUADRANTE</th>
                      <th className=" fw-normal text-center text-white" style={{ backgroundColor: '#616060' }}>UBICACIÓN</th>
                      <th className="w-5 fw-normal text-center text-white" style={{ backgroundColor: '#616060' }}>RECORRIDO</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td className="w-1 opacity-0" style={{ paddingBottom: '55%' }}></td>
                      <td className="w-5 opacity-0 " style={{ paddingBottom: '55%' }}></td>
                      <td className="w-5 opacity-0 " style={{ paddingBottom: '55%' }}></td>
                      <td className="w-5 opacity-0 " style={{ paddingBottom: '55%' }}></td>
                      <td className="w-8 opacity-0 " style={{ paddingBottom: '55%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </div>


          </div>
        </div>
      </section>
    </section>

  );
}

export default App;