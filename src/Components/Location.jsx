import React from "react";
import { BiLocationPlus } from "react-icons/bi";
function Location() {
  return (
    <div className="location-icon">
      <div className="row">
        <div className="col-lg-12">
          <div className="row"> 
          <div className="col-lg-10 mx-auto">
            <div className="row">
            <div className="col-4">
              <div className="d-flex">
                <BiLocationPlus className="location-icon-css" />
                <h4 className="location-heading">
                  OUR LOCATIONS
                  <span>
                    <h6>(Hospitals and Clinics)</h6>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-3">
              <div className="drop-menue">
                <div class="btn-group">
                  <button
                    class="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ALL PROVINCES
                  </button>
                  <ul class="dropdown-menu">
                    <div> PUNJAB </div>
                    <div> SINDH </div>
                    <div> kHAYBER PAKHTUNKHWA(KPK) </div>
                    <div> BALOCHISTAN </div>
                  </ul>
                </div>
                <div class="btn-group">
                  <button class="btn btn-secondary btn-lg" type="button">
                    ALL CITIES
                  </button>
                  <button
                    type="button"
                    class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu">
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                    <div>MANSEHRA</div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="submit-button">
                <button className="buooton-last">Submit</button>
              </div>
            </div>


            </div>



          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
