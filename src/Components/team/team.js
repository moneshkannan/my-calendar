import React from "react";
import Team from "../../Assets/team.jpg";
import './team.css'

const team = () => {
  return (
    <div className="container text-center">
        <h2 className="h1-responsive font-weight-bold my-5">
            Our team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          Appointy helps you schedule meetings without the back-and-forth emails. Appointy allows you to schedule the meetings, manage users into your application and also allows you to retrieve appointy links.
          </p><img src={Team} className="team_img" alt="" />
          <div className="Row">
            <div lg="3" md="6" className="mb-lg-0 mb-5">
            <div className ="rounded-circle"/>
              <h5 className="font-weight-bold mt-4 mb-3">Praveena P</h5>
              <p className="text-uppercase blue-text">Developer</p>
            <div></div></div>
            <div lg="3" md="6" className="mb-lg-0 mb-5">
            <h5 className="font-weight-bold mt-4 mb-3">Rahul Krishnan</h5>
            <p className="text-uppercase blue-text">Developer</p>
            </div>
            <div lg="3" md="6" className="mb-lg-0 mb-5">
            <h5 className="font-weight-bold mt-4 mb-3">Monesh Kannan</h5>
            <p className="text-uppercase blue-text">Developer</p>
            </div>
            <div lg="3" md="6" className="mb-lg-0 mb-5">
            <h5 className="font-weight-bold mt-4 mb-3">Santhosh</h5>
            <p className="text-uppercase blue-text">Developer</p>
            </div>
            <div lg="3" md="6" className="mb-lg-0 mb-5">
            <h5 className="font-weight-bold mt-4 mb-3">Pavithiran</h5>
            <p className="text-uppercase blue-text">Developer</p>
            </div>
        </div>
      </div>
  );
}

export default team;