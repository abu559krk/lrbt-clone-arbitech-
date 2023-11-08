import React from "react";
import helpData from "./HelpData";
function HelpCard() {
  return (
    <div className="helpcard h-auto">
      <div className=" container-fluid ">
        <p className="text-center help-heading">HOW YOU CAN HELP</p>
        <div className="row help-parent">
          <div className="col-12">
            <div className="row mb-5">
            {helpData.map((help) => {
            return (
              <div className="col-lg-4">
                <div className="text-center position-relative  help-card-background-css" style={{backgroundColor:help.color}} key={help.id}>
                  <div className="">
                    <img className="help-image" src={help.image} alt="img" />
                  </div>

                  
                  <div className="">
                    <div>
                    <h4 className="help-title">{help.title}</h4>
                    </div>
                  </div>
                  <div className="help-description ">{help.description}</div>
                  <div>
                    <button className="btn btn-primary helpcard-btn ">
                    {help.buttn}
                    </button>
                  </div>
                
                </div>
                

              </div>
              
            );
          })}
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HelpCard;
