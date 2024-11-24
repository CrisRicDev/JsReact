import React from 'react';

function Sidebar({ setActiveTab }) {
  return (
    
            <div className="d-flex flex-column align-items-start pt-5 ps-4">
              <div className="btn btn btn-primary y btn-outline d-flex align-items-center mb-1">
                <a href="#" className="btn text-white p-0 border-0"><i class="bi bi-house-door-fill fs-1"></i>  INICIO</a>
              </div>
              <div className="btn btn btn-primary y btn-outline d-flex align-items-center mb-1">
                <a href="#" className="btn text-white p-0 border-0"><i class="bi bi-house-door-fill fs-1"></i>  REPORTE CUADRANTE</a>
              </div>
              <div className="btn btn btn-primary y btn-outline d-flex align-items-center mb-1">
                <a href="#" className="btn text-white p-0 border-0"><i class="bi bi-house-door-fill fs-1"></i>  CUADRANTES</a>
              </div>
              <div className="btn btn btn-primary y btn-outline d-flex align-items-center mb-1">
                <a href="#" className="btn text-white p-0 border-0" ><i class="bi bi-house-door-fill fs-1"></i>  PATRULLAS</a>
              </div>
            </div>

  );
}

export default Sidebar;
