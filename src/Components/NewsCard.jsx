import React from "react";
import celebrate from "../assets/celebrate.jpg";
import corporate from "../assets/corporate.jpg";
import HSY from "../assets/hsy.jpg";
import newone from "../assets/newone.jpg";
import darksight from "../assets/dark-sight.jpg";
function NewsCard() {
  return (
    <div className="newsbackground">
         <div className="container mt-5">
      <h3 className="text-center new-heading">NEWS & EVENTS</h3>
      <div className="row my-5 ">
        <div className="col-md-6">
          <div className=" col-lg-12">
          <div>
            <img className="img-fluid" src={celebrate} alt="" />
            <div className="text-muted">
              <h5>October 25, 2023</h5>
            </div>
            <div class="card-body">
              <h5 class="card-title text-muted">
                LRBT celebrates World Sight Day with the children of the Center
                for Autism Rehabilitation and Training, Sindh
              </h5>
              <p class="card-text">
                LRBT joined forces with the Center for Autism Rehabilitation
                and...
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-6">
            <div className="row  mx-5">
                <div className="col-lg-4"  >
                <img className="img-fluid" src={corporate} alt="corporate" />

                </div>
                <div className="col-lg-8">
                <div className="corporate-sidebar">
            <h5>
            October 24, 2023
            </h5>
            <p className=" news-para ">
            LRBT presented with the 2023 Corporate Excellence Award by the Management Association of Pakistan
            </p>
            <p>
            LRBT was presented with the 38th Corporate Excellence Award in
            </p>
            </div>

                </div>


            </div>
            <div className="row  mx-5">
                <div className="col-lg-4">
                <img className="img-fluid" src={HSY} alt="corporate" />

                </div>
                <div className="col-lg-8">
                <div className="corporate-sidebar">
            <h5>
            October 24, 2023
            </h5>
            <p className=" news-para ">
            World Sight Day 2023 - Musical Fundraiser
            </p>
            <p>
            LRBT held a musical fundraiser in honor of World Sight...            </p>
            </div>

                </div>


            </div>
            <div className="row  mx-5">
                <div className="col-lg-4">
                <img className="img-fluid" src={newone} alt="corporate" />

                </div>
                <div className="col-lg-8">
                <div className="corporate-sidebar">
            <h5>
            July 26, 2023
            </h5>
            <p className=" news-para ">
            Celebrated Fashion Icon HSY Joins LRBT as Global Brand and Goodwill Ambassador            </p>
            <p>
            The Layton Rahmatulla Benevolent Trust (LRBT), Pakistan's largest provider of...           </p>
            </div>

                </div>


            </div>
            <div className="row  mx-5">
                <div className="col-lg-4">
                <img className="img-fluid" src={darksight} alt="corporate" />

                </div>
                <div className="col-lg-8">
                <div className="corporate-sidebar">
            <h5>
            December 5, 2023
            </h5>
            <p className=" news-para ">
            LRBT Eye Hospital with its partner SO Pakistan conducted a Special Olympics Opening Eyes Train the Trainer Program at Luxus Grand Hotels, Lahore            </p>
            <p>
            LRBT Eye Hospital with its partner SO Pakistan conducted a...            </p>
            </div>

                </div>

                <button className="btn btn-primary text-center fw-bold p-3 mb-2 w-auto justify-content-center">VIEW ALL NEWS</button>

            </div>

        </div>

      </div>
    </div>
    </div>
   
  );
}

export default NewsCard;
