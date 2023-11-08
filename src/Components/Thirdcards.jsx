import React from "react";
import Thirdcard from "./ThirdCard";
function Thirdcards() {
  return (
    <div className="thirdcard">
      <div className="container-lg">
        <div>
          <h4 className="main-heading">
          HELP US HELP THEM WITH YOUR ZAKAT/DONATIONS
          </h4>
        </div>
        <div className="row border-primary border-2">
          {Thirdcard.map((thirdcard) => {
            return (
              <>
                <div className="col-4 text-center">
                  <div
                    key={thirdcard.id}
                    className=" card   mx-auto third-card-content"
                  >
                    <img
                      className="img-fluid"
                      src={thirdcard.image}
                      alt="thirdcardimage"
                    />
                    <div className="third-card-title">
                      <h5>{thirdcard.title}</h5>
                    </div>
                    <div className="third-card-money"> <span className="money_currency">{thirdcard.money_currency}</span><span className="money">{thirdcard.money}</span>
                    </div>
                    <div>
                      <button className="third-card-button">Donate</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Thirdcards;
